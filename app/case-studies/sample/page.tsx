import type { Metadata } from "next"
import { CTABand, MetricsStrip, SectionContainer } from "@/components/primitives"

export const metadata: Metadata = { title: "Sample Case Study", description: "Sample Listerr case study template." }

export default function Page() {
  return <><SectionContainer><article className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">Case study</p><h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">+2.4x homepage CVR in 90 days</h1><p className="mt-6 text-lg leading-8 text-fg-muted">A structured placeholder case study for Phase 2, ready to be replaced with real customer details.</p></article></SectionContainer><SectionContainer className="bg-surface-raised"><MetricsStrip metrics={[{value:"+58%",label:"Engagement"},{value:"2.3x",label:"CVR"},{value:"4.1x",label:"Repeat rate"},{value:"90d",label:"Timeframe"}]}/></SectionContainer><CTABand/></>
}
