---
title: File explorer
description: "A live, read-only file tree that follows your shell's directory. Open it with ⌘E to watch what changes on disk."
order: 1
---

Press <kbd>⌘E</kbd> to open the explorer on the right of the window. It is a read-only file tree rooted at the focused pane's current directory.

## It follows you

- `cd` in the terminal and the tree moves to the new directory.
- Switch to another pane and the tree switches to that pane's directory.
- Files and folders appear, change and disappear live as they change on disk.

That makes the explorer a good companion for AI coding agents: leave it open beside the terminal and watch files appear as the agent works.

> **Did you know?** The explorer is read-only on purpose. It is for looking and previewing, so you cannot rename or delete anything by accident.

## Move around

The explorer takes keyboard focus when you open it, so you can drive it without touching the mouse. The full key map, including **type-to-filter**, is on [Search files](/docs/explore/search-files/).

## Header buttons

| Button | What it does |
|---|---|
| Up chevron | Go to the enclosing folder (<kbd>⌘↑</kbd>). |
| Eye | Show or hide hidden files. Hidden files are off by default. |
| Close | Close the explorer (<kbd>⌘E</kbd> also does this). |

The header shows the name of the current folder. Hover it for the full path.

## Open a file

Select a file and press <kbd>↩</kbd> to open it in the [file viewer](/docs/explore/file-viewer/).
