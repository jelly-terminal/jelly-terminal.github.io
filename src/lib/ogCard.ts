import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

interface Card {
  title: string;
  description: string;
  label: string;
}

const font = (path: string) => readFileSync(join(process.cwd(), "node_modules/@fontsource", path));

const fonts = [
  { name: "Inter", data: font("inter/files/inter-latin-400-normal.woff"), weight: 400 as const },
  { name: "Inter", data: font("inter/files/inter-latin-600-normal.woff"), weight: 600 as const },
  {
    name: "Bricolage",
    data: font("bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff"),
    weight: 700 as const,
  },
];

const logo = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/logo.png")).toString("base64")}`;

type Node = { type: string; props: Record<string, unknown> };

const el = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
  type,
  props: { style, children, ...extra },
});

export async function renderOgCard({ title, description, label }: Card) {
  const tree = el(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
      padding: 72,
      backgroundColor: "#08091a",
      backgroundImage:
        "radial-gradient(circle at 92% 8%, rgba(255,154,122,0.32), rgba(8,9,26,0) 45%), radial-gradient(circle at 5% 100%, rgba(123,140,255,0.28), rgba(8,9,26,0) 50%)",
      color: "#ecebf5",
      fontFamily: "Inter",
    },
    [
      el("div", { display: "flex", alignItems: "center", gap: 18 }, [
        el("img", { width: 56, height: 56, borderRadius: 14 }, undefined, { src: logo, width: 56, height: 56 }),
        el("div", { display: "flex", fontSize: 34, fontWeight: 600 }, "Jelly"),
        el(
          "div",
          {
            display: "flex",
            marginLeft: 8,
            padding: "6px 16px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.16)",
            color: "#ff9a7a",
            fontSize: 24,
            fontWeight: 600,
          },
          label,
        ),
      ]),
      el("div", { display: "flex", flexDirection: "column", gap: 24 }, [
        el(
          "div",
          { display: "flex", fontFamily: "Bricolage", fontWeight: 700, fontSize: title.length > 28 ? 76 : 92, lineHeight: 1.05, letterSpacing: -2 },
          title,
        ),
        el("div", { display: "flex", fontSize: 32, lineHeight: 1.4, color: "#9a99b3", maxWidth: 940 }, description),
      ]),
      el(
        "div",
        { display: "flex", justifyContent: "space-between", fontSize: 26, color: "#9a99b3" },
        [el("div", { display: "flex" }, "Sweet terminal for the Mac"), el("div", { display: "flex" }, "jelly-terminal.github.io")],
      ),
    ],
  );

  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  return new Resvg(svg).render().asPng();
}
