---
title: Themes
description: "Built-in themes, your own themes, and pairing a light and a dark theme that follows the system appearance."
order: 2
---

A theme sets the terminal colours and tints the chrome with an accent. Jelly ships with these themes:

| Theme | `id` |
|---|---|
| Jelly Dark | `jelly-dark` |
| Jelly Light | `jelly-light` |
| Catppuccin Mocha | `catppuccin-mocha` |
| Catppuccin Latte | `catppuccin-latte` |
| Dracula | `dracula` |
| Gruvbox Dark | `gruvbox-dark` |
| Nord | `nord` |
| Tokyo Night | `tokyo-night` |

## Pick one

Open Settings (<kbd>⌘,</kbd>) and go to **Appearance**. Each theme has a preview swatch.

Or set it in `jelly.toml` with the theme's `id`:

```toml
[settings]
theme = "tokyo-night"
```

## Follow the system appearance

Give Jelly a light and a dark theme and it switches with macOS:

```toml
[settings]
theme = { light = "catppuccin-latte", dark = "catppuccin-mocha" }
```

## Your own themes

Themes in `~/.config/jelly/themes/*.toml` appear in the theme list next to the built-in ones. One file can hold several. To make one, see [Creating a theme](/docs/customize/creating-a-theme/), or [drop a theme file on the window](/docs/explore/import-by-drop/) to install it.
