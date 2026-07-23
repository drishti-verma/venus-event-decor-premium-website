import { routePages } from "./data";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://venus-event-decor.example";
  const now = new Date();
  const staticRoutes = ["", "privacy-policy", "terms-and-conditions"];
  const dynamicRoutes = Object.keys(routePages);

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: now,
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.7 : 1,
  }));
}
