import { getCollection, type CollectionEntry } from "astro:content";
import { docsGroups } from "../data/docsGroups";

export type DocEntry = CollectionEntry<"docs">;

export const groupIdOf = (entry: DocEntry) => entry.id.split("/")[0];

export const urlOf = (entry: DocEntry) => `/docs/${entry.id}/`;

export async function getDocsNav() {
  const entries = await getCollection("docs");
  return docsGroups
    .map((group) => ({
      ...group,
      entries: entries
        .filter((entry) => groupIdOf(entry) === group.id)
        .sort((a, b) => a.data.order - b.data.order),
    }))
    .filter((group) => group.entries.length > 0);
}

export async function getDocsOrder() {
  const nav = await getDocsNav();
  return nav.flatMap((group) => group.entries);
}
