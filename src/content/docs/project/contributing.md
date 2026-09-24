---
title: Contributing
description: "Build Jelly from source, the ground rules for changes, and how commits and tests work."
order: 3
---

Jelly is a small, opinionated codebase. Read [`AGENTS.md`](https://github.com/jelly-terminal/jelly/blob/main/AGENTS.md) before opening a pull request. It is the source of truth for how the repo is built and reviewed.

## Set up

You need Xcode 26+ on macOS 26+.

```sh
git clone git@github.com:jelly-terminal/jelly.git
cd jelly
make debug
```

## Ground rules

- macOS 26+ only. No iOS or cross-platform code.
- Swift 6 strict concurrency. Never block the main thread.
- Glass is chrome only, never behind terminal text.
- Bad config never crashes the app. It becomes a diagnostic and a default.
- No code comments. Names carry the meaning.
- No new dependencies beyond SwiftTerm and Sparkle without opening an issue first.

## Tests

Only logic that is likely to break and hard to notice by using the app is tested: TOML parsing, config import, colour parsing, the pane tree, shell launch and font matching.

```sh
make test
```

## Commits

One line with a conventional prefix such as `feat:` or `fix:`. Write it as a user-readable sentence, because it becomes the release note.

Docs live in the app repo under `docs/`. If your change affects behaviour or a config key, update the matching doc in the same commit. To improve this site, use the **Edit this page** link on any page.
