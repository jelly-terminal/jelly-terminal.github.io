---
title: Keybinds
description: "Rebind any shortcut in Settings or under [keybinds] in jelly.toml, unbind defaults, and send literal text with a key."
order: 5
---

## In Settings

Open the **Keybinds** tab in Settings (<kbd>⌘,</kbd>). Actions are listed by group. Click a shortcut and press the new keys. You can reset a single action or all of them.

## In the file

```toml
[keybinds]
"cmd+d" = "split.right"
"cmd+shift+d" = "split.down"
"cmd+k" = "clear"
"cmd+shift+enter" = "pane.zoom"
```

A key is written as `modifiers+key`. The modifiers are `cmd`, `shift`, `alt` (or `opt`) and `ctrl`.

## Unbind a default

Set the action to `"none"`. The Settings tab writes this for you when you take a default shortcut away from an action.

## Send text

`text:<string>` sends literal text to the terminal. It understands `\n` and `\x1b`:

```toml
[keybinds]
"cmd+shift+l" = "text:ls -la\n"
```

The full list of actions is in [Keybind actions](/docs/reference/keybind-actions/). Resetting an action in Settings removes its lines from `[keybinds]`.
