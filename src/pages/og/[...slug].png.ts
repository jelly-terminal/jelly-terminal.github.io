import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { docsGroups } from "../../data/docsGroups";
import { renderOgCard } from "../../lib/ogCard";

export const getStaticPaths = (async () => {
  const entries = await getCollection("docs");
  const docPages = entries.map((entry) => {
    const group = docsGroups.find((candidate) => candidate.id === entry.id.split("/")[0]);
    return {
      params: { slug: entry.id },
      props: { title: entry.data.title, description: entry.data.description, label: `Docs · ${group?.title ?? ""}` },
    };
  });
  return [
    {
      params: { slug: "site" },
      props: {
        title: "Sweet terminal for the Mac",
        description: "Sessions, split panes, a live file explorer and Liquid Glass. Native on macOS 26.",
        label: "macOS 26+",
      },
    },
    {
      params: { slug: "docs" },
      props: {
        title: "Jelly documentation",
        description: "Sessions, panes, the file explorer, themes, shortcuts and every setting.",
        label: "Docs",
      },
    },
    ...docPages,
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgCard(props as { title: string; description: string; label: string });
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
