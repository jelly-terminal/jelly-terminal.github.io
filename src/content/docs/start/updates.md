---
title: Updates
description: "How Jelly updates itself, the What's New window, and the settings that control update checks."
order: 4
---

Jelly updates itself with Sparkle. It checks once a day, offers the new version with release notes, and relaunches into your restored sessions.

- **Jelly → Check for Updates…** checks right away.
- The first launch after an update opens a **What's New** window with that version's release notes. **Jelly → What's New…** reopens it.

Because sessions, tabs, splits and each pane's directory are restored on relaunch, an update never loses your place. See [Restore and windows](/docs/explore/restore/).

## Settings

```toml
[settings.updates]
check = true
auto-install = false
```

| Key | Default | What it does |
|---|---|---|
| `updates.check` | `true` | Check for updates once a day. |
| `updates.auto-install` | `false` | Download in the background and install when you quit. |

The same options are on the **Updates** tab in Settings (<kbd>⌘,</kbd>).
