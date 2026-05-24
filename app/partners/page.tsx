import type { Metadata } from "next"
import { BadgeCheck, Handshake, Network, Repeat } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { title: "Listerr Partners", description: "Agency, technology, solution, and reseller partner programmes." }

export default function Page() {
  return <SimpleMarketingPage eyebrow="Partners" title="Build with and for Listerr" description="Partner with Listerr as an agency, technology provider, solution partner, reseller, creator, or publisher." primaryCta={{label:"Become a Partner",href:"/network/apply"}} secondaryCta={{label:"Talk Partnerships",href:"/contact"}} features={[{title:"Agency Partners",description:"White-label Listerr for client delivery.",icon:Handshake},{title:"Technology Partners",description:"Integrate commerce, CRM, analytics, and ads tools.",icon:Network},{title:"Solution Partners",description:"Package use cases by industry and growth motion.",icon:BadgeCheck},{title:"Resellers",description:"Earn recurring revenue with regional commerce teams.",icon:Repeat}]} checklist={["Partner categories","Application CTA","Featured partner placeholders","Directory planned for Phase 3","Network connection","Partnership email routing"]} related={[{label:"Network",href:"/network"},{label:"Agencies",href:"/network/agencies"},{label:"Apply",href:"/network/apply"}]} />
}
