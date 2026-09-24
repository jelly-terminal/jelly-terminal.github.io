---
title: Install
description: "Requirements, how to get Jelly today, and how to build it from source on macOS 26."
order: 2
---

## Requirements

- macOS 26 or later. Jelly follows Liquid Glass and does not support older systems.

## Get Jelly

Jelly ships as a notarized DMG on the [Releases page](https://github.com/jelly-terminal/jelly/releases/latest). Open it and drag **Jelly** into Applications.

> **Preview.** Jelly is pre-v1 and is not distributed anywhere else yet. If no release is listed, build it from source below.

Once installed, Jelly updates itself. See [Updates](/docs/start/updates/).

## Build from source

You need Xcode 26 or later.

```sh
git clone git@github.com:jelly-terminal/jelly.git
cd jelly
make debug
```

| Command | What it does |
|---|---|
| `make build` | Build Debug |
| `make debug` | Build Debug and open "Jelly (Debug)" |
| `make prod` | Build Release and open |
| `make test` | Run the unit tests in both packages |
| `make kill` | Stop running Jelly processes |
| `make clean` | Remove the derived data directory |

## First launch

Jelly creates `~/.config/jelly/jelly.toml` with commented defaults the first time it starts. You do not need to edit it: open Settings with <kbd>⌘,</kbd> instead. See [Config file](/docs/customize/config-file/) if you prefer text.
