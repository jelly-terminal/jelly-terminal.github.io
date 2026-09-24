---
title: Creating a theme
description: "Write a Jelly theme in TOML: background, foreground, a 16-colour palette, cursor, selection and an accent."
order: 3
---

A theme is a `[[theme]]` table. Save it in `~/.config/jelly/themes/`, or drop the file on the Jelly window.

```toml
[[theme]]
id = "midnight"
name = "Midnight"
appearance = "dark"
background = "#0f1117"
foreground = "#c9d1d9"
cursor = "#e6edf3"
cursor-text = "#0f1117"
selection = "#264f78"
selection-text = "#ffffff"
accent = "#79c0ff"
palette = [
  "#1b1f27", "#ff7b72", "#7ee787", "#d29922",
  "#79c0ff", "#d2a8ff", "#56d4dd", "#c9d1d9",
  "#6e7681", "#ffa198", "#a5f5b0", "#e3b341",
  "#a5d6ff", "#e2c5ff", "#b3f0ff", "#ffffff",
]
```

Then use it with `theme = "midnight"`.

## Keys

| Key | Required | Notes |
|---|---|---|
| `id` | yes | Lowercase, hyphens. Used by `settings.theme`. |
| `name` | yes | Shown in the theme picker. |
| `appearance` | no | `dark` or `light`. Used for light and dark pairing and the chrome tint. |
| `background`, `foreground` | yes | Hex: `#rgb`, `#rrggbb` or `#rrggbbaa`. |
| `palette` | yes | Exactly 16 colours, ANSI 0–15. |
| `cursor`, `cursor-text` | no | Default to `foreground` and `background`. |
| `selection`, `selection-text` | no | Selection highlight and its text colour. |
| `accent` | no | Tints the sidebar selection and tab highlight. Defaults to palette colour 4. |

> **Tip.** The file viewer colours code using your theme's palette, so a good palette makes both the terminal and the viewer look right.
