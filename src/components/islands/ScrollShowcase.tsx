import { useEffect, useRef, useState } from "react";

interface Step {
  title: string;
  body: string;
  image: string;
  alt: string;
}

const steps: Step[] = [
  {
    title: "A session for every context",
    body: "Work, Personal, Production. Each keeps its own tabs and splits. Switch with ⌘⌃] and the whole window follows.",
    image: "/screenshots/sessions.svg",
    alt: "Jelly sidebar listing sessions",
  },
  {
    title: "Panes that stay out of the way",
    body: "Split right with ⌘D, down with ⌘⇧D. Drag the gap to resize, double-click it to even things out.",
    image: "/screenshots/panes.svg",
    alt: "Jelly with three split panes",
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
      <div className="top-24 hidden h-fit lg:sticky lg:block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface">
          {steps.map((step, index) => (
            <img
              key={step.title}
              src={step.image}
              alt={step.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              style={{ opacity: index === active ? 1 : 0 }}
            />
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
            <img src={step.image} alt={step.alt} loading="lazy" className="mb-6 w-full rounded-xl border border-line lg:hidden" />
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
