import type { Metadata } from "next"
import Link from "next/link"
import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies" },
  title: "Case Studies & Customer Stories",
  description: "Listerr customer deployment stories, pilot metrics, and commerce results.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    url: "/case-studies",
    title: "Case Studies & Customer Stories",
    description: "Listerr customer deployment stories, pilot metrics, and commerce results.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Customer Stories",
    description: "Listerr customer deployment stories, pilot metrics, and commerce results.",
  },
}

const studies = [
  {
    type: "Quick-Service Restaurant",
    location: "Jaipur, Rajasthan",
    title: "Migrating from 30% Aggregator Commissions to Direct WhatsApp QR",
    impact: "Commission savings and repeat diner direct orders within 60 days.",
    tags: ["Table QR", "Petpooja POS Sync", "WABA Campaigns"],
  },
  {
    type: "Boutique Apparel Seller",
    location: "Jaipur, Rajasthan",
    title: "Shoppable Digital Catalogs & WhatsApp Drop Broadcasts",
    impact: "Instant catalog orders from existing social following.",
    tags: ["Shoppable Lookbook", "0% Commission Store", "VIP Segments"],
  },
  {
    type: "Multi-Outlet Café Chain",
    location: "Delhi NCR & Rajasthan",
    title: "Automated Signage CMS Menu Board Synchronization",
    impact: "Zero printed menu costs and instant 8-second central price updates.",
    tags: ["Listerr One Displays", "Offline USB Backup", "Dayparting CMS"],
  },
]

export default function Page() {
  return (
    <SectionContainer>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">Deployments & Pilots</p>
      <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">Merchant Deployment Stories</h1>
      <p className="mt-2 text-fg-muted max-w-2xl">
        Real deployment scenarios across restaurants, cafés, and retail merchants using the Listerr 360 loop.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {studies.map((item) => (
          <div key={item.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-fg-muted font-medium">
                <span className="font-bold text-brand-listerr-700">{item.type}</span>
                <span>{item.location}</span>
              </div>
              <h2 className="text-xl font-bold text-fg leading-snug">{item.title}</h2>
              <p className="text-sm text-fg-muted leading-relaxed">{item.impact}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700 border border-blue-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
