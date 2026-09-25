# jelly-terminal.github.io

Landing page for [Jelly](https://github.com/jelly-terminal/jelly), a sweet terminal for the Mac.

Astro + React islands, Tailwind CSS v4, Phosphor icons.

```sh
bun install
bun dev       # http://localhost:4321
bun run build # static site in dist/
```

## Layout

```
src/
  layouts/Layout.astro          head, fonts, scroll-reveal observer
  pages/index.astro             section order
  components/sections/          one file per page section
  components/islands/           FeatureShowcase (React)
  components/ui/                Screenshot, SectionHeader
  data/                         features, links
  styles/global.css             colour tokens and reveal animation
public/screenshots/             app screenshots
```

Add `data-reveal` (and `style="--d:N"` to stagger) to any element to fade it in on scroll.

The hero uses the full Jelly window screenshot. The feature showcase uses three matching SVG illustrations in `public/illustrations/`, with website colors and consistent window styling. Visitors switch features using buttons or the Left/Right, Home, and End keys. The compact panel stacks on mobile and has no scroll-driven transitions or automatic advancement. Edit the feature copy and illustration paths in `FeatureShowcase.tsx`.
