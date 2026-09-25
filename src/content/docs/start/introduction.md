---
title: Introduction
description: "What Jelly is, who it is for, and a tour of the window: sessions, tabs, panes, explorer and status bar."
order: 1
---

Jelly is a terminal made for the Mac. It looks like it belongs on macOS 26, with Liquid Glass chrome and a crisp, GPU-rendered terminal, and it keeps your work organised so you are never hunting through a pile of unnamed windows.

> **Preview software.** Everything before v1 is a preview. Config keys and behaviour can change between versions.

## What makes it different

- **Sessions.** Named workspaces such as *Work* or *Personal*. Each one holds its own tabs and split panes.
- **A quick terminal from any app.** <kbd>⌃Space</kbd> opens your shell in a floating panel over whatever you're doing. See [Quick terminal](/docs/workspace/quick-terminal/).
- **A file explorer and viewer built in.** See what is changing on disk while an agent works, and read Markdown without leaving the terminal.
- **Plain-text configuration.** One `jelly.toml` for settings, keybinds and themes.
- **Your shell, unchanged.** fish, zsh, bash, nu, starship, powerlevel10k, Nerd Fonts, ligatures and emoji all render as they do in Ghostty or iTerm2.

## Easy to miss

Some features have no button and no menu item to tell you they exist.

| Try | What happens |
|---|---|
| <kbd>⌘E</kbd> | A live file tree that follows your shell. [File explorer](/docs/explore/file-explorer/) |
| Type in the explorer | Files filter as you type, no search box needed. [Search files](/docs/explore/search-files/) |
| <kbd>⌘⇧M</kbd> | Preview Markdown and code over your panes. [File viewer](/docs/explore/file-viewer/) |
| Drop a `.toml` on the window | Import themes and settings with a preview. [Import by drop](/docs/explore/import-by-drop/) |

## The window

```text
┌────────────┬──────────────────────────────────────────────┐
│ ● ● ●    ◐ │ [dev ×] [server] [db] [logs]  +            ⌕ │  tab bar
│            ├──────────────────────────────────────────────┤
│ Sessions + │                                              │
│  ▸ Work    │                 pane                         │
│    Personal│                                              │
│    ...     ├────────────────────────┬─────────────────────┤
│            │ ⌁ zsh           ⑂ ⤢   │ ⌁ logs              │  pane headers
│            │                        │                     │
│            │                        │                     │
│            │                ◉ dev · 3 panes · 112×28      │  status bar
└────────────┴──────────────────────────────────────────────┘
```

| Area | What it does |
|---|---|
| **Sidebar** | Sessions. Toggle it with <kbd>⌘0</kbd>. |
| **Tab bar** | One tab per workspace view. `+` opens a tab, `⌕` opens search. |
| **Panes** | Detached rounded cards you can split as deep as you like. |
| **Status bar** | Session name, tab count, pane count, and the grid size of the focused pane. |
| **Explorer** | A file tree on the right, opened with <kbd>⌘E</kbd>. |

## Where to go next

- New here? Follow the [Quick start](/docs/start/quick-start/).
- Want the features nobody tells you about? Read [File explorer](/docs/explore/file-explorer/) and [Search files](/docs/explore/search-files/).
- Looking for a key? See [Keyboard shortcuts](/docs/reference/keyboard-shortcuts/).
