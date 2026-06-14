import type { MetadataRoute } from "next";
import { navItems, siteConfig } from "@/lib/site";

// Build once at module load so the sitemap is stable across requests
// within the same deployment. Sitemaps don't need millisecond freshness.
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified,
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
