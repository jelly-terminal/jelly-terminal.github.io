import type { APIRoute } from "astro";
import { getDocsOrder, groupIdOf, urlOf } from "../lib/docs";
import { docsGroups } from "../data/docsGroups";

const plainText = (markdown: string) =>
  markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[`*_>#|\[\]()-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const GET: APIRoute = async () => {
  const entries = await getDocsOrder();
  return Response.json(
    entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      group: docsGroups.find((group) => group.id === groupIdOf(entry))?.title,
      url: urlOf(entry),
      text: plainText(entry.body ?? ""),
    })),
  );
};
