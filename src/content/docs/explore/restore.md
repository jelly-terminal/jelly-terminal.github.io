---
title: Restore and windows
description: "Jelly brings back every window, session, tab, split and working directory when you relaunch, including after an update."
order: 5
---

Quit Jelly, restart your Mac, or update: when Jelly comes back, so does your work.

Every open window returns **in its place**, with:

- its sessions
- its tabs
- its split layout
- each pane's working directory

Programs that were running are not resurrected, but each pane starts back in the directory you left it in, ready to go.

This is what makes [updates](/docs/start/updates/) painless. Jelly relaunches into your restored sessions and you carry on.

## Quitting with running processes

Jelly asks before quitting while something is still running. Turn that off with `confirm-quit`:

```toml
[settings]
confirm-quit = false
```
