---
title: Shell compatibility
description: "Jelly runs your login shell and renders prompts, Nerd Fonts, ligatures and emoji the way Ghostty and iTerm2 do."
order: 4
---

Jelly runs your shell, not its own. The goal is that your prompt and font look identical to Ghostty or iTerm2.

Works with fish, zsh, bash and nu, and with prompts such as starship and powerlevel10k. Nerd Fonts, ligatures and emoji render correctly, and programs such as nvim and tmux work.

## Which shell starts

- By default Jelly starts your login shell, and it always starts it as a login shell.
- Choose another with `shell.program` and add arguments with `shell.args`.
- `shell.env` adds environment variables to every shell.

```toml
[settings.shell]
program = "/opt/homebrew/bin/fish"
env = { EDITOR = "nvim" }
```

## Where it starts

`shell.working-directory` decides the starting directory of a new pane: `inherit` (the focused pane's directory, the default), `home`, or a fixed path.

## Clipboard

Programs can write to your clipboard with OSC 52 by default. Reading it is off unless you set `clipboard.osc52-read = true`.
