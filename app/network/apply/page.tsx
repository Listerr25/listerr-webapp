import type { Metadata } from "next"
import { Building2, Handshake, Palette, Send } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/network/apply" }, title: "Apply to Listerr Network", description: "Apply as a creator, brand, agency, or partner in Listerr Network.",
  openGraph: {
    url: "/network/apply",
    title: "Apply to Listerr Network",
    description: "Apply as a creator, brand, agency, or partner in Listerr Network.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to Listerr Network",
    description: "Apply as a creator, brand, agency, or partner in Listerr Network.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="Network application" title="Join the Listerr Network" description="Apply as a creator, brand, agency, or partner. The Phase 2 form shell captures role, portfolio, and partnership intent." primaryCta={{label:"Start Application",href:"/contact"}} secondaryCta={{label:"Explore Network",href:"/network"}} features={[{title:"Creators",description:"Offer commerce content creation and get certified.",icon:Palette},{title:"Brands",description:"Find verified creators and regional campaign partners.",icon:Building2},{title:"Agencies",description:"White-label Listerr and build recurring services.",icon:Handshake},{title:"Application Routing",description:"Send your details to the partnerships team.",icon:Send}]} checklist={["Role selection","Name and work email","Portfolio or website URL","Campaign or partner intent","Message to partnerships","Follow-up via partnerships@listerr.in"]} related={[{label:"Creators",href:"/network/creators"},{label:"Brands",href:"/network/brands"},{label:"Agencies",href:"/network/agencies"}]} />
}
