import type { Metadata } from "next"
import Link from "next/link"
import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = { alternates: { canonical: "/case-studies" }, title: "Case Studies", description: "Listerr customer case studies and commerce engagement results.",
  openGraph: {
    url: "/case-studies",
    title: "Case Studies",
    description: "Listerr customer case studies and commerce engagement results.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies",
    description: "Listerr customer case studies and commerce engagement results.",
  },
}

export default function Page() {
  return <SectionContainer><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">Case studies</p><h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">Proof from commerce teams</h1><div className="mt-10 grid gap-5 md:grid-cols-3">{["D2C Beauty","EdTech App","Media OTT"].map((name)=><Link key={name} href="/case-studies/sample" className="rounded-xl border border-border bg-white p-6 shadow-sm"><p className="font-bold text-fg">{name}</p><h2 className="mt-4 text-2xl font-extrabold text-fg">+2.4x homepage CVR in 90 days</h2><div className="mt-5 flex flex-wrap gap-2">{["+58% engagement","2.3x CVR","4.1x repeat"].map(metric=><span key={metric} className="rounded-full bg-brand-listerr-50 px-3 py-1 text-xs font-bold text-brand-listerr-700">{metric}</span>)}</div></Link>)}</div></SectionContainer>
}
