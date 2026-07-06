export default function sitemap() {
  const baseUrl = "https://amirulislam.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: "2026-05-31",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-05-31",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: "2026-05-31",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-05-31",
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}