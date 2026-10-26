import type { MetadataRoute } from "next";
import { firm } from "@/lib/site";

// Required for `output: export` so robots.txt is generated statically.
export const dynamic = "force-static";

/** Static robots.txt emitted at build time. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${firm.url}/sitemap.xml`,
  };
}
