---
title: Config file
description: "Where jelly.toml lives, how it reloads live, what happens when a value is wrong, and how to import a file."
order: 6
---

All configuration is plain TOML. A file can contain any mix of `[settings]`, `[keybinds]` and `[[theme]]`.

## Where it lives

| Path | What |
|---|---|
| `~/.config/jelly/jelly.toml` | Your settings and keybinds. Created with commented defaults on first launch. |
| `~/.config/jelly/themes/*.toml` | Your themes, one or more per file. |
| `Jelly.app/Contents/Resources/Themes/` | Built-in themes. |

If `$XDG_CONFIG_HOME` is set, Jelly uses it instead of `~/.config`.

## Live reload

Changes apply as soon as you save the file. <kbd>⌘⇧,</kbd> forces a reload, and **Jelly → Open Config File…** opens it in your default editor.

## Bad config never breaks Jelly

An invalid value never stops Jelly from loading. That key falls back to its default, the rest of the file still applies, and a banner shows the file, line and problem. Unknown keys are reported the same way, so typos do not go unnoticed.

## Import

Drag a `.toml` file onto the window, or use **File → Import…**. See [Import by drag and drop](/docs/explore/import-by-drop/).

## Every key

See the [config reference](/docs/reference/config/).
