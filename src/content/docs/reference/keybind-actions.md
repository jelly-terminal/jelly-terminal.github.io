---
title: Keybind actions
description: "The complete list of actions you can bind to a key under [keybinds], including parameterised and text actions."
order: 3
---

Keys are written as `modifiers+key`, with the modifiers `cmd`, `shift`, `alt` (or `opt`) and `ctrl`. Set an action to `"none"` to unbind a default. See [Keybinds](/docs/customize/keybinds/).

| Group | Actions |
|---|---|
| Tabs | `tab.new`, `tab.close`, `tab.next`, `tab.previous`, `tab.goto:<n>`, `tab.move:left`, `tab.move:right`, `tab.rename` |
| Panes | `split.right`, `split.down`, `pane.close`, `pane.zoom`, `pane.focus:left`, `pane.focus:right`, `pane.focus:up`, `pane.focus:down`, `pane.equalize` |
| Sessions | `session.new`, `session.next`, `session.previous`, `session.goto:<n>` |
| Panels | `sidebar.toggle`, `explorer.toggle`, `markdown.preview` |
| Terminal | `find`, `clear`, `copy`, `paste`, `prompt.previous`, `prompt.next` |
| Font | `font.increase`, `font.decrease`, `font.reset` |
| App | `settings.open`, `config.open`, `config.reload` |
| Text | `text:<string>` sends literal text. It supports `\n` and `\x1b`. |

## Examples

```toml
[keybinds]
"cmd+k" = "clear"
"cmd+alt+1" = "tab.goto:1"
"cmd+shift+left" = "tab.move:left"
"cmd+shift+l" = "text:ls -la\n"
"cmd+t" = "none"
```
