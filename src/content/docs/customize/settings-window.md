---
title: Settings window
description: "Change themes, fonts, keybinds and updates from the Settings window. Every change is written straight into jelly.toml."
order: 1
---

Press <kbd>⌘,</kbd> to open Settings. It has five tabs:

| Tab | What you set |
|---|---|
| **General** | Startup and behaviour, such as confirm on quit, and the quick terminal shortcut. |
| **Appearance** | The theme library with preview swatches. Pick one theme, or a light and dark pair. |
| **Terminal** | Font, cursor, scrollback and shell. |
| **Keybinds** | Every action by group. Click a shortcut and press new keys to rebind it. |
| **Updates** | Update checks and automatic install. |

Every change is written straight into `jelly.toml` and applies at once. Jelly writes only the keys you change and keeps your comments and ordering, so you can mix the Settings window and hand editing freely.

> **Did you know?** Some options have no Settings control and live only in the file: font fallback, OpenType features, cell size, shell arguments and shell environment. See the [config reference](/docs/reference/config/).
