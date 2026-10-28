import type { Metadata } from "next"
import Link from "next/link"
import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Listerr Blog",
  description: "Commerce, engagement, AI, and retail industry insights from Listerr.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    url: "/blog",
    title: "Listerr Blog",
    description: "Commerce, engagement, AI, and retail industry insights from Listerr.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Listerr Blog",
    description: "Commerce, engagement, AI, and retail industry insights from Listerr.",
  },
}

const posts = [
  "How Direct Ordering Beats Aggregator Commissions in 2026",
  "AI Ordering & WhatsApp Automation for Indian Restaurants",
  "Digital Signage CMS: Cloud vs USB Offline Reliability",
  "Customer Retention Loops: Moving from 1st Order to VIP Regular",
  "Vision AI in Retail: Footfall, Queue & Kitchen Insights",
]

export default function Page() {
  return (
    <SectionContainer>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">Resources</p>
      <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">Listerr Blog — Commerce & Retail Insights</h1>
      <p className="mt-2 text-fg-muted max-w-2xl">Articles, product updates, and operational playbooks for modern Indian merchants.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {posts.map((post, i) => (
          <div key={post} className="rounded-xl border border-border bg-white p-6 shadow-sm">
            <span className="rounded-full bg-brand-listerr-50 px-3 py-1 text-xs font-bold text-brand-listerr-700">
              {["E-Commerce", "WhatsApp AI", "Signage CMS", "Retention CRM", "Vision AI"][i]}
            </span>
            <h2 className="mt-5 text-xl font-bold text-fg">{post}</h2>
            <p className="mt-3 text-sm leading-6 text-fg-muted">Coming soon from the Listerr engineering and commerce team.</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
