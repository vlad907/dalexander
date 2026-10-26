import type { MetadataRoute } from "next";
import { firm } from "@/lib/site";

// Required for `output: export` so the sitemap is generated statically.
export const dynamic = "force-static";

/** Static sitemap emitted at build time. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${firm.url}/`, lastModified: now, priority: 1 },
    { url: `${firm.url}/estate-planning/`, lastModified: now, priority: 0.8 },
    { url: `${firm.url}/probate/`, lastModified: now, priority: 0.8 },
    { url: `${firm.url}/business-planning/`, lastModified: now, priority: 0.8 },
    { url: `${firm.url}/privacy/`, lastModified: now, priority: 0.3 },
    { url: `${firm.url}/disclaimer/`, lastModified: now, priority: 0.3 },
  ];
}
