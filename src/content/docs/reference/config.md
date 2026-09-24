---
title: Config reference
description: "Every jelly.toml setting with its type, default and notes, plus a complete example file."
order: 2
---

Settings live under `[settings]` in `~/.config/jelly/jelly.toml`. See [Config file](/docs/customize/config-file/) for how the file is loaded.

## Settings

| Key | Type | Default | Notes |
|---|---|---|---|
| `theme` | string | `"jelly-dark"` | A theme `id`. `{ light = "a", dark = "b" }` follows system appearance. |
| `scrollback` | int | `10000` | Lines per pane. |
| `confirm-quit` | bool | `true` | Ask before quitting with running processes. |
| `font.family` | string | `"SF Mono"` | Any installed family. Matched ignoring case, spaces and hyphens. |
| `font.size` | number | `13` | Points. |
| `font.fallback` | [string] | `[]` | Tried before the system fallback list. When empty and the main font has no Nerd Font icons, an installed Nerd Font is added automatically. |
| `font.ligatures` | bool | `true` | |
| `font.features` | [string] | `[]` | OpenType feature tags. Prefix with `-` to disable, for example `"-liga"`. |
| `font.thicken` | bool | `false` | Heavier strokes on low-DPI displays. |
| `font.cell-width` / `cell-height` | string | `"100%"` | Percentage or pixels (`"+2"`, `"-1"`). |
| `window.background-opacity` | number | `1.0` | `0.0` to `1.0`. |
| `window.blur` | int | `0` | Blur radius behind a transparent background. |
| `window.padding` | table | `{ x = 10, y = 8 }` | Points between each pane's edge and its grid. |
| `window.sidebar` | bool | `true` | Show the sidebar on launch. |
| `window.status-bar` | bool | `true` | Show the status bar. |
| `cursor.style` | string | `"block"` | `block`, `bar` or `underline`. |
| `cursor.blink` | bool | `true` | |
| `shell.program` | string | login shell | Absolute path. |
| `shell.args` | [string] | `[]` | The shell always starts as a login shell. |
| `shell.working-directory` | string | `"inherit"` | `inherit` (from the focused pane), `home`, or a path. |
| `shell.env` | table | `{}` | Extra environment variables. |
| `clipboard.copy-on-select` | bool | `false` | |
| `clipboard.osc52-read` | bool | `false` | Let programs read the clipboard. Writing is always allowed. |
| `updates.check` | bool | `true` | Daily update check. |
| `updates.auto-install` | bool | `false` | Download in the background and install on quit. |

## Full example

```toml
[settings]
theme = "midnight"
scrollback = 10000
confirm-quit = true

[settings.font]
family = "FiraCode Nerd Font"
size = 13
fallback = ["Symbols Nerd Font Mono", "Apple Color Emoji"]
ligatures = true
features = ["calt", "zero", "ss02"]
thicken = false
cell-width = "100%"
cell-height = "110%"

[settings.window]
background-opacity = 0.92
blur = 20
padding = { x = 10, y = 8 }
sidebar = true
status-bar = true

[settings.cursor]
style = "block"
blink = true

[settings.shell]
program = "/opt/homebrew/bin/fish"
args = ["-l"]
working-directory = "inherit"
env = { EDITOR = "nvim" }

[settings.clipboard]
copy-on-select = false
osc52-read = false

[settings.updates]
check = true
auto-install = false

[keybinds]
"cmd+d" = "split.right"
"cmd+shift+d" = "split.down"
"cmd+k" = "clear"
"cmd+shift+enter" = "pane.zoom"
```

Themes have their own keys: see [Creating a theme](/docs/customize/creating-a-theme/).
