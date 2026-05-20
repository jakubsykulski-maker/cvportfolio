import type { MetadataRoute } from "next";

/**
 * Disallow all crawlers. Portfolio is unlisted: discovered via direct
 * link from CV / LinkedIn, not via search engines. If you ever flip to
 * public discoverability, swap `disallow: "/"` → `allow: "/"` here.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
