---
title: File viewer
description: "Preview Markdown rendered nicely, or any text file with syntax colours, over your panes. It reloads when the file changes."
order: 3
---

The viewer opens a file over your panes so you can read it without leaving the terminal. Your terminals keep running behind it.

## Open a file

- Select a file in the [explorer](/docs/explore/file-explorer/) and press <kbd>↩</kbd>.
- Press <kbd>⌘⇧M</kbd> to preview the selected file, or the current directory's README when nothing is selected.

Press <kbd>Esc</kbd> to close it.

## Markdown

Markdown is rendered, not shown as source:

- headings, lists, task lists, tables, quotes and code blocks
- images
- a contents menu to jump between headings
- working relative links, so links between docs in a repo open each other

## Code and text

Other text files are shown with line numbers. Code is syntax highlighted in your theme's palette colours, so the viewer always matches your terminal.

## Live reload

The viewer reloads when the file changes on disk. Keep a plan, a changelog or an agent's notes open and watch them update.

> **Did you know?** The explorer and viewer together make a quick way to review what an agent wrote: filter to the file by typing, press <kbd>↩</kbd>, and read it rendered.
