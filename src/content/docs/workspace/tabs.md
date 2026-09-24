---
title: Tabs
description: "Open, name, reorder and switch tabs, and how a tab's title follows the process running inside it."
order: 2
---

Each tab is one workspace view: a single terminal or a layout of split panes.

## Titles and icons

A tab shows an icon and a title. The title follows the focused pane's running process, or you can set your own with the `tab.rename` action. Bind it to a key under [Keybinds](/docs/customize/keybinds/).

## Working with tabs

| Action | Keys |
|---|---|
| New tab | <kbd>⌘T</kbd> |
| Close pane (the tab, if it is the last pane) | <kbd>⌘W</kbd> |
| Close tab | <kbd>⌘⌥W</kbd> |
| Next / previous tab | <kbd>⌘⇧]</kbd> / <kbd>⌘⇧[</kbd> |
| Go to tab 1–9 | <kbd>⌘1</kbd> … <kbd>⌘9</kbd> |
| Move tab left / right | <kbd>⌘⇧←</kbd> / <kbd>⌘⇧→</kbd> |

You can also drag tabs in the tab bar to reorder them, and `+` opens a new one. New tabs start in the focused pane's directory by default. Change that with `shell.working-directory` in the [config reference](/docs/reference/config/).

> **Did you know?** <kbd>⌘W</kbd> closes a pane first and only closes the tab when it is the last pane. Use <kbd>⌘⌥W</kbd> to close the whole tab at once.
