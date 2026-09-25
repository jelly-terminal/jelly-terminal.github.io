import { useId, useRef, useState } from "react";

const features = [
  {
    id: "sessions",
    label: "Sessions",
    title: "A little space for every context.",
    body: "Keep work, personal projects, and production in their own sessions. Each remembers its tabs and split panes, so switching context feels like picking up where you left off.",
    shortcut: "⌘ ⌃ ]",
    action: "Switch session",
    alt: "Vector illustration of Jelly with Default, Work, Personal, and Production sessions and a running development server in Work.",
    docs: "/docs/workspace/sessions/",
  },
  {
    id: "quick-terminal",
    label: "Quick Terminal",
    title: "A quick thought. A quick terminal.",
    body: "Bring your shell over any app with one shortcut. Run a command, then press Esc to tuck it away. Need more room? Move it into a Jelly tab with everything still running.",
    shortcut: "⌃ Space",
    action: "Open quick terminal",
    alt: "Vector illustration of a floating Jelly terminal above a dimmed workspace, with Open in Jelly and Hide controls.",
    docs: "/docs/workspace/quick-terminal/",
  },
  {
    id: "panes",
    label: "Split Panes",
    title: "See the whole thing, side by side.",
    body: "Your server, tests, and shell can share one tab. Split right or down, drag to resize, and give each task just the room it needs.",
    shortcut: "⌘ D",
    action: "Split right",
    alt: "Vector illustration of three Jelly terminal panes showing a development server, tests, and git status.",
    docs: "/docs/workspace/split-panes/",
  },
];

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <div className="feature-showcase mt-9">
      <div role="tablist" aria-label="Explore Jelly features" className="feature-tabs">
        {features.map((feature, index) => (
          <button
            key={feature.id}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-controls={`${id}-panel-${index}`}
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            ref={(element) => { tabs.current[index] = element; }}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              let next = index;
              if (event.key === "ArrowRight") next = (index + 1) % features.length;
              else if (event.key === "ArrowLeft") next = (index + features.length - 1) % features.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = features.length - 1;
              else return;
              event.preventDefault();
              setActive(next);
              tabs.current[next]?.focus();
            }}
          >
            <span className="feature-tab-dot" aria-hidden="true" />
            {feature.label}
          </button>
        ))}
      </div>
      {features.map((feature, index) => (
        <div
          key={feature.id}
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          tabIndex={0}
          hidden={active !== index}
          className="feature-panel"
        >
          <div className="feature-art">
            <img src={`/illustrations/${feature.id}.svg`} alt={feature.alt} width="900" height="600" decoding="async" />
          </div>
          <div className="feature-copy">
            <p className="mb-4 font-mono text-xs tracking-widest text-accent uppercase">{feature.label}</p>
            <h3 className="font-display text-3xl leading-tight font-medium tracking-tight md:text-4xl">{feature.title}</h3>
            <p className="mt-5 text-sm leading-7 text-muted">{feature.body}</p>
            <div className="mt-7 flex items-center gap-3 text-xs text-muted">
              <kbd>{feature.shortcut}</kbd>
              <span>{feature.action}</span>
            </div>
            <a href={feature.docs} className="mt-8 inline-flex items-center gap-2 text-sm text-fg underline decoration-white/20 underline-offset-4 hover:decoration-accent">Explore {feature.label.toLowerCase()} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      ))}
    </div>
  );
}
