import type { Metadata } from "next"
import { ArrowRight, Layers, PenTool, Store, Users } from "lucide-react"
import Link from "next/link"
import { PlatformCard, SectionContainer, CTABand, Hero } from "@/components/primitives"

export const metadata: Metadata = { title: "Platform Overview", description: "One platform, four products, built to grow Indian commerce." }

export default function Page() {
  return <><Hero eyebrow="Platform" title="One platform. Four products. Built to grow Indian commerce." description="Storyboard creates content, Listerr embeds it, Seller Studio manages commerce operations, and Network distributes through creators and partners." primaryCta={{label:"Start Free Trial",href:"/signup"}} secondaryCta={{label:"Talk to Sales",href:"/contact"}} /><SectionContainer><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"><PlatformCard brand="listerr"/><PlatformCard brand="seller"/><PlatformCard brand="network"/><PlatformCard brand="storyboard"/></div></SectionContainer><SectionContainer className="bg-surface-raised"><div className="grid gap-4 md:grid-cols-4">{[{t:"Create",d:"Storyboard creates shoppable content.",i:PenTool},{t:"Embed",d:"Listerr publishes Stories, Reels, Lists.",i:Layers},{t:"Operate",d:"Seller Studio handles catalogue, ads, orders.",i:Store},{t:"Distribute",d:"Network connects creators and partners.",i:Users}].map(({t,d,i:Icon},idx)=><div key={t} className="rounded-xl border border-border bg-white p-5 shadow-sm"><p className="text-sm font-extrabold text-brand-listerr-700">0{idx+1}</p><Icon className="mt-4 h-6 w-6 text-brand-listerr-700"/><h2 className="mt-4 text-xl font-bold text-fg">{t}</h2><p className="mt-2 text-sm leading-6 text-fg-muted">{d}</p></div>)}</div><Link href="/features" className="mt-8 inline-flex items-center gap-2 font-bold text-brand-listerr-700">See all features <ArrowRight className="h-4 w-4"/></Link></SectionContainer><CTABand/></>
}
