import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ceremonyverse.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/buy-indian-wedding-outfits-online`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/buy-sherwani-from-india-usa`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/bridal-lehengas-from-india`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/shop-from-india`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/indian-wedding-outfit-sizing-guide`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/when-to-order-indian-wedding-outfits`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/indian-destination-wedding-planner-mexico`,
      lastModified: new Date(),
    },
  ];
}
