import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ceremonyverse.com"

  return {
    rules: [
      {
      userAgent: "*", 
        allow: "/",
        disallow: ["/api/", "/admin/", "/scripts/"],
    },
  ],
    sitemap: baseUrl + "/sitemap.xml",

  }
}
