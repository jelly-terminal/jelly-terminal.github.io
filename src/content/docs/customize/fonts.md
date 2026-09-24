---
title: Fonts
description: "Choose a font, set Nerd Font fallbacks, ligatures and OpenType features, and tune cell width and height."
order: 4
---

```toml
[settings.font]
family = "FiraCode Nerd Font"
size = 13
fallback = ["Symbols Nerd Font Mono", "Apple Color Emoji"]
ligatures = true
features = ["calt", "zero", "ss02"]
thicken = false
cell-width = "100%"
cell-height = "110%"
```

## Family

`family` is any installed font family. It is matched ignoring case, spaces and hyphens, so `firacode nerd font` and `FiraCode Nerd Font` are the same.

## Nerd Font icons

Prompts such as starship and powerlevel10k use icon glyphs. If your main font has none, Jelly automatically adds an installed Nerd Font as a fallback. To choose the fallbacks yourself, set `fallback`, which is tried before the system fallback list.

## Ligatures and OpenType features

- `ligatures = false` turns ligatures off.
- `features` takes OpenType feature tags. Prefix a tag with `-` to disable it, for example `"-liga"`.

## Cell size

`cell-width` and `cell-height` take a percentage (`"110%"`) or pixels (`"+2"`, `"-1"`). Use `cell-height` to add line spacing.

## Size

`size` is in points. Bindable actions `font.increase`, `font.decrease` and `font.reset` change it on the fly. See [Keybind actions](/docs/reference/keybind-actions/).

Font fallback, features and cell size are set in the file only.
