import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://taiwan-futures-calculator.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      },
    },
  ];
}