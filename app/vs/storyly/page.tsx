import type { Metadata } from "next"
import Link from "next/link"
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react"
import { CTABand, FeatureGrid, Hero, SectionContainer } from "@/components/primitives"
import { Button } from "@/components/ui/button"
import { STORYLY_ROWS } from "@/lib/comparison/storyly"

export const metadata: Metadata = { alternates: { canonical: "/vs/storyly" }, title: "Storyly Alternative India", description: "Storyly alternative for India with INR pricing, DPDP alignment, Customer Lists, and AI commerce.",
  openGraph: {
    url: "/vs/storyly",
    title: "Storyly Alternative India",
    description: "Storyly alternative for India with INR pricing, DPDP alignment, Customer Lists, and AI commerce.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storyly Alternative India",
    description: "Storyly alternative for India with INR pricing, DPDP alignment, Customer Lists, and AI commerce.",
  },
}

export default function Page() {
  const faq = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:STORYLY_ROWS.map(([name,listerr,storyly])=>({"@type":"Question",name:`How does Listerr compare on ${name}?`,acceptedAnswer:{"@type":"Answer",text:`Listerr: ${listerr}. Storyly: ${storyly}.`}}))}
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/><Hero eyebrow="Competitive" title="Storyly Alternative for India" description="Storyly built the category globally. Listerr built it for India — and then went further with AI commerce." primaryCta={{label:"Start Free Trial",href:"/signup"}} secondaryCta={{label:"Book India Demo",href:"/contact"}}/><SectionContainer><p className="max-w-4xl text-xl leading-9 text-fg-muted">Storyly deserves credit for building the global in-app stories category. Listerr is focused on what Indian commerce teams need next: INR pricing, India data residency, DPDP alignment, Customer Lists, Seller Studio, Network, Storyboard, and AI commerce.</p></SectionContainer><SectionContainer className="bg-surface-raised"><div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm"><table className="w-full min-w-[860px] text-left text-sm"><thead><tr className="border-b border-border"><th className="px-4 py-4">Differentiator</th><th className="px-4 py-4">Listerr</th><th className="px-4 py-4">Storyly</th></tr></thead><tbody>{STORYLY_ROWS.map(([name,listerr,storyly],i)=><tr key={name} className={i%2===0?"bg-surface-raised":"bg-white"}><td className="px-4 py-3 font-bold text-fg">{name}</td><td className="px-4 py-3 text-fg-muted"><span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success"/>{listerr}</span></td><td className="px-4 py-3 text-fg-muted"><span className="inline-flex items-center gap-2">{storyly==="Limited"||storyly==="Partial"||storyly==="Basic plugin"||storyly==="Basic editor"||storyly==="Via middleware"||storyly==="GDPR only"?<AlertCircle className="h-4 w-4 text-warning"/>:<XCircle className="h-4 w-4 text-fg-subtle"/>}{storyly}</span></td></tr>)}</tbody></table></div></SectionContainer><SectionContainer><FeatureGrid items={[{title:"India-first by design",description:"DPDP, INR billing, 12+ Indian languages, and India data residency options.",icon:CheckCircle2,brand:"listerr"},{title:"Customer Lists",description:"The first-class format Storyly does not have natively.",icon:CheckCircle2,brand:"listerr"},{title:"Listerr AI & MCP",description:"Voice calling, text ordering, OMS, and cataloging beyond content.",icon:CheckCircle2,brand:"listerr"}]}/><div className="mt-10 rounded-2xl border border-border bg-brand-listerr-50 p-8"><h2 className="text-3xl font-extrabold text-fg">Coming from Storyly?</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{["Export your Story library","Connect Listerr SDK alongside Storyly","Switch over when ready"].map((step,i)=><div key={step} className="rounded-xl bg-white p-5 shadow-sm"><p className="font-extrabold text-brand-listerr-700">0{i+1}</p><p className="mt-3 font-bold text-fg">{step}</p></div>)}</div><Button asChild variant="listerr" size="xl" className="mt-8"><Link href="/contact">Talk to migration specialist</Link></Button></div></SectionContainer><CTABand/></>
}
