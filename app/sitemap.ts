import type { MetadataRoute } from "next"

const routes = [
  "/",
  "/ecommerce",
  "/crm",
  "/cms",
  "/hardware",
  "/hardware/ai-cameras",
  "/industries/restaurants",
  "/industries/fashion",
  "/advanced",
  "/pricing",
  "/signup",
  "/contact",
  "/about",
  "/careers",
  "/integrations",
  "/privacy",
  "/terms",
  "/cookies",
  "/refund",
  "/cancellation",
  "/changelog",
  "/press-kit",
  "/partners",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return routes.map((route) => ({
    url: `https://listerr.in${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("sample") ? 0.5 : 0.8,
  }))
}
