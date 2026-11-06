import type { MetadataRoute } from "next";
import { WORK } from "@/common/constants";
import { CRAFT_SEO } from "@/lib/crafts-seo";
import { SITE_URL } from "@/lib/seo";

const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

const latestWorkUpdate = new Date(
  Math.max(...WORK.map((work) => Date.parse(work.updatedAt))),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const workPages = WORK.map((work) => ({
    url: absoluteUrl(`/work/${work.id}`),
    lastModified: new Date(work.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const craftPages = Object.entries(CRAFT_SEO)
    .filter(([, page]) => page.index)
    .map(([path]) => ({
      url: absoluteUrl(path),
      changeFrequency:
        path === "/crafts" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/crafts" ? 0.7 : 0.6,
    }));

  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/work"),
      lastModified: latestWorkUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/experience"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...workPages,
    ...craftPages,
  ];
}
