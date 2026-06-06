import type { Metadata } from "next"

type PageMetaInput = {
  title: string
  description: string
  path: string
  image?: string
  noIndex?: boolean
  type?: "website" | "article"
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  noIndex,
  type = "website",
}: PageMetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
  }
}
