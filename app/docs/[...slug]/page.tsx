import type { Metadata } from "next"
import { SectionContainer } from "@/components/primitives"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const path = slug.join("/")
  const title = slug
    .join(" ")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  return {
    title: `${title} — Documentation`,
    description: `Listerr documentation: ${title}.`,
    alternates: { canonical: `/docs/${path}` },
    openGraph: {
      type: "article",
      url: `/docs/${path}`,
      title: `${title} — Documentation`,
    },
  }
}

export function generateStaticParams() {
  return [
    { slug: ["sdks", "web-js"] },
    { slug: ["sdks", "ios"] },
    { slug: ["sdks", "android"] },
    { slug: ["api-reference"] },
  ]
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const title = slug
    .join(" ")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <SectionContainer>
      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-xl border border-border bg-white p-4 shadow-sm">
          <p className="font-bold text-fg">Docs</p>
          <div className="mt-4 grid gap-2 text-sm text-fg-muted">
            <span>Getting Started</span>
            <span>SDKs</span>
            <span>REST API</span>
            <span>Webhooks</span>
          </div>
        </aside>
        <article className="max-w-[70ch]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Documentation
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-fg-muted">
            Documentation route shell for SDK, API, and integration content.
            Replace with MDX once the developer docs are authored.
          </p>
        </article>
      </div>
    </SectionContainer>
  )
}
