---
title: Roadmap
description: "What is in each Jelly version, and what may come later. Everything before v1 is a preview."
order: 1
---

Everything before v1 is a preview. Config keys and behaviour can change between versions.

## v0.1: Core terminal

- Single window with SwiftUI chrome, a Liquid Glass tab bar and status bar
- A GPU-rendered terminal with shell launch, font fallback, ligatures and OpenType features
- Tabs
- Sidebar with Sessions and Projects, restored on relaunch
- `jelly.toml` with live reload, an error banner, built-in themes and TOML import with preview
- Automatic updates

## v0.2: Workspace

- Split panes with headers, zoom and keyboard focus
- Split layout restore on relaunch and after updates
- Search in scrollback
- Status bar details
- A read-only file explorer that follows the focused pane, with a Markdown and text viewer and syntax highlighting

## v0.3: Connect

- Saved SSH hosts under **Connect…**, opened as a tab or a session
- Per-host theme override, for example a red tint for Production
- A custom Liquid Glass update sheet

## Later

| Idea | Why |
|---|---|
| **Notes per directory** | Notes saved locally per project folder and exposed over MCP so agents in the terminal can read and write them. |
| **Command palette** (<kbd>⌘K</kbd>) | Every action, session, project and theme in one searchable list. |
| **Quick Terminal** | A drop-down window on a global hotkey. |
| **Command blocks** | Fold, copy or re-run one command's output, and jump between prompts. |
| **Per-project `jelly.toml`** | A folder defines its own tabs, split layout, startup commands and theme. |
| **Kitty graphics protocol** | Inline images for tools like `yazi`, `chafa` and `timg`. |
| **Broadcast input** | Type into every pane of a tab at once. |
| **Theme gallery** | Browse and install community themes from inside Jelly. |
| **Triggers** | Regex on output to highlight, notify or run an action. |
| **Native notifications** | "Long command finished" and OSC 9 / 777 notifications. |
| **tmux control mode** | tmux windows and panes shown as native tabs and splits. |

The source of truth is [docs/roadmap.md](https://github.com/jelly-terminal/jelly/blob/main/docs/roadmap.md) in the app repo.
