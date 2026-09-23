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
  components/islands/           ScrollShowcase (React)
  components/ui/                Screenshot, SectionHeader
  data/                         features, links
  styles/global.css             colour tokens and reveal animation
public/screenshots/             app screenshots (placeholders for now)
```

Add `data-reveal` (and `style="--d:N"` to stagger) to any element to fade it in on scroll.

To swap in real screenshots, drop PNGs into `public/screenshots/` and update the paths in `Hero.astro` and `ScrollShowcase.tsx`.
