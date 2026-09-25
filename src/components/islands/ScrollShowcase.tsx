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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <div className="top-0 hidden h-screen items-center lg:sticky lg:flex">
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

      <ol className="flex flex-col gap-10 lg:gap-0">
        {steps.map((step, index) => (
          <li
            key={step.title}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            data-index={index}
            className="flex flex-col justify-center lg:min-h-[60vh]"
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
