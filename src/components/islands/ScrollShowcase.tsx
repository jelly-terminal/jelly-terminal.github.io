import { useEffect, useRef, useState } from "react";

interface Step {
  title: string;
  body: string;
  image: string;
  alt: string;
  kind: "sessions" | "quick-terminal" | "panes";
  width: number;
  height: number;
}

const steps: Step[] = [
  {
    title: "A session for every context",
    body: "Work, Personal, Production. Each keeps its own tabs and splits. Switch with ⌘⌃] and the whole window follows.",
    image: "/screenshots/sessions.png",
    alt: "Jelly sidebar with Default, Jelly, Trevo, Work, and Jamm sessions, with Jelly selected",
    kind: "sessions",
    width: 468,
    height: 550,
  },
  {
    title: "A terminal one keystroke away",
    body: "Press ⌃Space over any app for a floating panel with your own shell. Esc hides it, ⌘↩ moves it into a tab with everything still running.",
    image: "/screenshots/quick-terminal.png",
    alt: "Jelly quick terminal floating over the desktop, with Open in Jelly and Hide shortcuts",
    kind: "quick-terminal",
    width: 1340,
    height: 526,
  },
  {
    title: "Panes that stay out of the way",
    body: "Split right with ⌘D, down with ⌘⇧D. Drag the gap to resize, double-click it to even things out.",
    image: "/screenshots/panes.png",
    alt: "Two side-by-side Jelly terminal panes, with a git push on the left and a fresh shell on the right",
    kind: "panes",
    width: 1826,
    height: 852,
  },
];

export default function ScrollShowcase() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const visualRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const visual = visualRef.current?.getBoundingClientRect();
      const center = visual?.height ? visual.top + visual.height / 2 : window.innerHeight / 2;
      let closest = 0;
      let distance = Infinity;
      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const nextDistance = Math.abs(rect.top + rect.height / 2 - center);
        if (nextDistance < distance) {
          closest = index;
          distance = nextDistance;
        }
      });
      setActive(closest);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className="showcase mt-10 grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-12">
      <div ref={visualRef} className="showcase-sticky hidden self-start lg:sticky lg:block">
        <div className="showcase-stage relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line">
          {steps.map((step, index) => (
            <div
              key={step.title}
              aria-hidden={index !== active}
              className={`showcase-visual showcase-${step.kind} absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none`}
              style={{ opacity: index === active ? 1 : 0 }}
            >
              <img src={step.image} alt={step.alt} width={step.width} height={step.height} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>

      </div>

      <ol className="flex flex-col gap-10 lg:gap-[20vh]">
        {steps.map((step, index) => (
          <li
            key={step.title}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            data-index={index}
            className="showcase-step flex flex-col justify-center"
          >
            <div className={`showcase-stage showcase-visual showcase-${step.kind} mb-6 aspect-[16/10] w-full overflow-hidden rounded-xl border border-line lg:hidden`}>
              <img src={step.image} alt={step.alt} width={step.width} height={step.height} loading="lazy" decoding="async" />
            </div>
            <div
              className="border-l-2 pl-5 transition-colors duration-300"
              style={{ borderColor: index === active ? "var(--color-accent)" : "var(--color-line)" }}
            >
              <h3 className="font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
