---
title: Import by drag and drop
description: "Drop a TOML file on the Jelly window to import themes, settings or keybinds, with a preview before anything changes."
order: 4
---

Any TOML file can be imported into Jelly. **Drag it onto a Jelly window**, or choose **File → Import…** (<kbd>⌘⇧I</kbd>).

Jelly first shows a preview of what will change, such as "adds 2 themes, changes 3 settings". Nothing is written until you confirm.

## What happens on confirm

- `[settings]` and `[keybinds]` keys are written into your `jelly.toml`, one key at a time. Keys not in the file are left alone, and your comments and ordering are kept.
- Each `[[theme]]` is saved to `~/.config/jelly/themes/<id>.toml`, replacing any theme with the same `id`.
- If the file contains only themes, Jelly asks whether to switch to the first one.

> **Tip.** This makes sharing easy. Send a friend a `.toml` file with your theme and keybinds, and they drop it on the window.

A file can hold settings, keybinds, themes, or any mix. See [Config file](/docs/customize/config-file/) for the format.
