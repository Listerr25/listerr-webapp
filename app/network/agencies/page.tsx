import type { Metadata } from "next"
import { Handshake, Layers, Repeat, ShieldCheck } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/network/agencies" }, title: "Listerr Network for Agencies", description: "White-label Listerr and earn recurring revenue as an agency partner.",
  openGraph: {
    url: "/network/agencies",
    title: "Listerr Network for Agencies",
    description: "White-label Listerr and earn recurring revenue as an agency partner.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Listerr Network for Agencies",
    description: "White-label Listerr and earn recurring revenue as an agency partner.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="Listerr Network" title="White-Label Commerce Engagement for Agencies" description="Offer Listerr-powered Stories, Reels, Lists, Smart Flows, and AI ordering to your client base." primaryCta={{label:"Apply as Agency",href:"/network/apply"}} secondaryCta={{label:"Talk Partnerships",href:"/contact"}} features={[{title:"White Label",description:"Deliver Listerr-powered experiences under your service model.",icon:ShieldCheck},{title:"Recurring Revenue",description:"Earn ongoing revenue as clients scale usage.",icon:Repeat},{title:"Implementation Playbooks",description:"Reusable launch motions for Shopify, D2C, EdTech, and more.",icon:Layers},{title:"Partner Support",description:"Sales and solution support for complex accounts.",icon:Handshake}]} checklist={["Agency partner programme","White-label delivery","Client workspace model","Recurring revenue motions","Implementation enablement","Partner support path"]} metrics={[{value:"4",label:"Platform surfaces"},{value:"9",label:"Use cases"},{value:"5",label:"AI products"},{value:"IN",label:"Market focus"}]} related={[{label:"Creators",href:"/network/creators"},{label:"Brands",href:"/network/brands"},{label:"Partners",href:"/partners"}]} />
}
