import type { Metadata } from "next"
import { SectionContainer } from "@/components/primitives"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  return {
    title,
    description: "Listerr blog article — commerce, engagement, and AI insights.",
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${slug}`,
      title,
    },
  }
}

export function generateStaticParams() {
  return [
    { slug: "how-to-add-stories-to-shopify-store" },
    { slug: "ai-calling-for-d2c-brands-india" },
    { slug: "reduce-shopify-cart-abandonment" },
    { slug: "gamification-patterns-indian-ecommerce" },
    { slug: "whatsapp-order-automation-india" },
  ]
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <SectionContainer>
      <article className="mx-auto max-w-[70ch]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
          Blog
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-fg-muted">
          MDX-ready article template for Phase 2 seed content. Replace this
          placeholder body with long-form content, cover image, TOC, inline CTAs,
          author bio, and related posts.
        </p>
      </article>
    </SectionContainer>
  )
}
