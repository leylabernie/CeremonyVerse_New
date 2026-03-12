import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ceremonyverse.com"

  const pages = [
    "",
    "/shop-from-india",
    "/buy-indian-wedding-outfits-online",
    "/resources",
    "/blog",
    "/pricing",
    "/our-story"
  ]

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }))
}
