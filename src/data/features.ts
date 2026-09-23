import { AppleLogo, Cpu, FileCode, ShieldCheck, SquaresFour, Stack } from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";

export interface Feature {
  icon: Icon;
  title: string;
  body: string;
}

export const features: Feature[] = [
  {
    icon: Stack,
    title: "Sessions",
    body: "Named workspaces like Work and Production, each with its own tabs and panes. Restored on relaunch.",
  },
  {
    icon: SquaresFour,
    title: "Split panes",
    body: "Split right or down as deep as you like. Resize, zoom and move focus from the keyboard.",
  },
  {
    icon: Cpu,
    title: "Metal-rendered",
    body: "Drawn on the GPU. Idle at 0% CPU, no dropped frames under heavy output.",
  },
  {
    icon: FileCode,
    title: "Plain TOML",
    body: "Settings, keybinds and themes in one jelly.toml that reloads when you save.",
  },
  {
    icon: ShieldCheck,
    title: "Config can't break it",
    body: "A bad value falls back to its default and Jelly tells you which line.",
  },
  {
    icon: AppleLogo,
    title: "Native",
    body: "SwiftUI and AppKit. Your shell, prompt and Nerd Font look exactly right.",
  },
];
