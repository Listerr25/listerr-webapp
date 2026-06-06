import type { Metadata } from "next"
import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = { alternates: { canonical: "/blog/sample" }, title: "Sample Blog Article", description: "Sample Listerr blog article template.",
  openGraph: {
    url: "/blog/sample",
    title: "Sample Blog Article",
    description: "Sample Listerr blog article template.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sample Blog Article",
    description: "Sample Listerr blog article template.",
  },
}

export default function Page() {
  return <SectionContainer><article className="mx-auto max-w-[70ch]"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">Stories</p><h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">How to Add Stories to Your Shopify Store in 10 Minutes</h1><p className="mt-6 text-lg leading-8 text-fg-muted">This Phase 2 article template establishes the long-form content structure. Full MDX content can replace this shell as the seed article set is written.</p><h2 className="mt-10 text-2xl font-extrabold text-fg">Getting started</h2><p className="mt-4 leading-8 text-fg-muted">Install the Listerr Shopify app, sync your catalogue, choose a template, and publish your first shoppable Story.</p></article></SectionContainer>
}
