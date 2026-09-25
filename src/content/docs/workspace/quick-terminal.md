---
title: Quick terminal
description: "Press ⌃Space from any app for a floating terminal running your own shell. Hide it with Esc, or move it into a Jelly tab with ⌘↩."
order: 6
---

The quick terminal is a small floating terminal you can open over any app while Jelly is running. Run a `git pull`, check a port, start a build, then get back to what you were doing without switching windows.

## Open it

Press <kbd>⌃Space</kbd> from anywhere. The panel appears at the bottom centre of the screen your mouse is on. Jelly's own windows stay where they are.

Press <kbd>⌃Space</kbd> again, <kbd>Esc</kbd> at the prompt, <kbd>⌘W</kbd>, or click outside to hide it.

## It's your shell

The quick terminal runs the same shell as your panes: fish, zsh, bash, or whatever `shell.program` is set to. Your prompt, completions, autosuggestions, history and aliases all work, because your shell is doing the work. Full-screen programs such as `htop` and `vim` work too.

It starts in your home folder. The badge in the header shows the shell's current folder and follows every `cd`.

The panel starts as a single prompt line and grows upward as output arrives, up to 16 rows, then scrolls like any terminal. `clear` or <kbd>⌘K</kbd> shrinks it back.

## It keeps running

Hiding the panel doesn't stop anything. A build or a server keeps running, and it's all still there the next time you press <kbd>⌃Space</kbd>. Type `exit` to end the shell; the next <kbd>⌃Space</kbd> starts a fresh one.

## Move it into a tab

Press <kbd>⌘↩</kbd> to move the shell into a new tab of the main window. It's the same shell, so its history, its folder and anything running in it carry on. The next <kbd>⌃Space</kbd> starts a new quick terminal.

## Keys

| Action | Keys |
|---|---|
| Show or hide | <kbd>⌃Space</kbd> |
| Hide (at the prompt) | <kbd>Esc</kbd> or <kbd>⌘W</kbd> |
| Open in a Jelly tab | <kbd>⌘↩</kbd> |
| Clear | <kbd>⌘K</kbd> |
| Copy / paste | <kbd>⌘C</kbd> / <kbd>⌘V</kbd> |

While a program is running, <kbd>Esc</kbd> goes to the program, so it works in `vim` and `less`.

## Change the shortcut

Open Settings → General → Quick Terminal to turn it off or record a different shortcut. You can also set it in `jelly.toml`:

```toml
[settings.quick-terminal]
enabled = true
hotkey = "ctrl+space"
```

Use `"none"` to turn off the shortcut.

> **Heads up:** if you have more than one keyboard input source, macOS uses <kbd>⌃Space</kbd> to switch between them and gets the key before Jelly does. Pick another shortcut, such as `"cmd+shift+space"`, or change the macOS one in System Settings → Keyboard → Keyboard Shortcuts → Input Sources.
