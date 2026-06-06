import type { Metadata } from "next"
import Link from "next/link"
import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = { alternates: { canonical: "/blog" }, title: "Listerr Blog", description: "Commerce, engagement, AI, Shopify, and industry insights from Listerr.",
  openGraph: {
    url: "/blog",
    title: "Listerr Blog",
    description: "Commerce, engagement, AI, Shopify, and industry insights from Listerr.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Listerr Blog",
    description: "Commerce, engagement, AI, Shopify, and industry insights from Listerr.",
  },
}

const posts = ["How to Add Stories to Your Shopify Store in 10 Minutes","AI Calling for D2C Brands in India","Reducing Shopify Cart Abandonment with Smart Flows","Best Gamification Patterns for Indian E-Commerce","WhatsApp Order Automation in India"]

export default function Page() {
  return <SectionContainer><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">Resources</p><h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">Listerr Blog — Commerce, Engagement, AI</h1><div className="mt-10 grid gap-5 md:grid-cols-3">{posts.map((post,i)=><Link key={post} href="/blog/sample" className="rounded-xl border border-border bg-white p-6 shadow-sm"><span className="rounded-full bg-brand-listerr-50 px-3 py-1 text-xs font-bold text-brand-listerr-700">{["Stories","AI","Shopify","Industry insight","AI"][i]}</span><h2 className="mt-5 text-xl font-bold text-fg">{post}</h2><p className="mt-3 text-sm leading-6 text-fg-muted">Seed article shell for Phase 2 content and MDX pipeline.</p></Link>)}</div></SectionContainer>
}
