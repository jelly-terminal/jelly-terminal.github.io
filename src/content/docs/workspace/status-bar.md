---
title: Status bar
description: "The strip at the bottom of the window: session, tab count, pane count and the focused pane's grid size."
order: 5
---

The status bar at the bottom of the window shows, from left to right:

- the current **session** name
- the **tab** count
- the **pane** count, when the tab is split
- the **grid size** of the focused pane, for example `112×28`

Hide it with `window.status-bar`:

```toml
[settings.window]
status-bar = false
```
