import type { Metadata } from "next"
import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = { alternates: { canonical: "/cookies" }, title: "Cookie Policy", description: "Listerr cookie policy covering necessary, analytics, and marketing cookies.",
  openGraph: {
    url: "/cookies",
    title: "Cookie Policy",
    description: "Listerr cookie policy covering necessary, analytics, and marketing cookies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy",
    description: "Listerr cookie policy covering necessary, analytics, and marketing cookies.",
  },
}

export default function Page() {
  return <SectionContainer><article className="mx-auto max-w-[70ch]"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">Last updated: May 24, 2026</p><h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">Cookie Policy</h1><div className="mt-8 space-y-8 leading-8 text-fg-muted"><section><h2 className="text-2xl font-extrabold text-fg">What cookies are</h2><p className="mt-3">Cookies are small files used to keep websites functional, remember preferences, and measure performance.</p></section><section><h2 className="text-2xl font-extrabold text-fg">Cookies we use</h2><p className="mt-3">Necessary cookies support core site operation. Analytics cookies help us understand usage. Marketing cookies support campaign measurement when consent is provided.</p></section><section><h2 className="text-2xl font-extrabold text-fg">How to manage cookies</h2><p className="mt-3">You can control cookies in your browser settings. A consent banner with category controls is planned for the analytics rollout.</p></section></div></article></SectionContainer>
}
