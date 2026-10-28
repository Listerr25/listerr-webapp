import type { Metadata } from "next"
import Link from "next/link"
import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = {
  alternates: { canonical: "/docs" },
  title: "Docs",
  description: "Listerr developer documentation for SDKs, APIs, webhooks, and integrations.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    url: "/docs",
    title: "Docs",
    description: "Listerr developer documentation for SDKs, APIs, webhooks, and integrations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docs",
    description: "Listerr developer documentation for SDKs, APIs, webhooks, and integrations.",
  },
}

export default function Page() {
  return (
    <SectionContainer>
      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-xl border border-border bg-white p-4 shadow-sm">
          <p className="font-bold text-fg">Documentation</p>
          <div className="mt-4 grid gap-2 text-sm text-fg-muted">
            <Link href="/docs/getting-started" className="text-brand-listerr-700 font-semibold">Getting Started</Link>
            <span>SDKs & Webhooks</span>
            <span>REST APIs</span>
            <span>POS Integrations</span>
            <span>Hardware Setup</span>
          </div>
        </aside>
        <article className="max-w-[70ch]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">Documentation</p>
          <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">Build with Listerr</h1>
          <p className="mt-6 text-lg leading-8 text-fg-muted">
            Technical guides, API documentation, and integration specifications for merchants and developer partners.
          </p>
          <Link href="/docs/getting-started" className="mt-8 inline-block font-bold text-brand-listerr-700">
            Start with Getting Started →
          </Link>
        </article>
      </div>
    </SectionContainer>
  )
}
