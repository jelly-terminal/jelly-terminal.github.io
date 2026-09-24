---
title: Search in scrollback
description: "Find text in everything the focused pane has printed, with next and previous match and a match count."
order: 5
---

Press <kbd>⌘F</kbd>, or click `⌕` in the tab bar, to search the focused pane's scrollback. Jelly shows the match count and lets you step to the next and previous match.

The amount of history you can search is set by `scrollback`, which is 10,000 lines per pane by default:

```toml
[settings]
scrollback = 50000
```

Search only covers the focused pane. To find text in a file on disk, open it in the [file viewer](/docs/explore/file-viewer/).
