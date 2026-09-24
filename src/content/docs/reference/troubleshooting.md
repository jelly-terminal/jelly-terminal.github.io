---
title: Troubleshooting
description: "Fix a config banner, missing prompt icons, a theme that does not appear, or settings that do not apply."
order: 5
---

## A banner names a line in my config

Jelly found an invalid or unknown key. That key uses its default and the rest of the file applies. Fix the line the banner names and save. It reloads live, or press <kbd>⌘⇧,</kbd>. See [Config file](/docs/customize/config-file/).

## Prompt icons show as boxes

Your font has no icon glyphs. Install a Nerd Font. Jelly adds an installed one automatically when `font.fallback` is empty, or set it yourself:

```toml
[settings.font]
family = "SF Mono"
fallback = ["Symbols Nerd Font Mono"]
```

## My theme does not show up

- Save it in `~/.config/jelly/themes/` with a `.toml` extension, or drop it on the window.
- Check that it has an `id`, a `name`, a `background`, a `foreground` and exactly 16 palette colours.
- Look for a banner naming the problem.

## The explorer will not filter to my file

The filter only searches folders you have expanded. Press <kbd>→</kbd> on a folder to open it, then type. Hidden files are off by default: use the eye button in the explorer header to show them.

## Changes to the file are ignored

If `$XDG_CONFIG_HOME` is set, Jelly reads `$XDG_CONFIG_HOME/jelly/jelly.toml` and not `~/.config/jelly/jelly.toml`.

## Still stuck

Open an issue on [GitHub](https://github.com/jelly-terminal/jelly/issues).
