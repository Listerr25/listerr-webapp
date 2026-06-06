import type { Metadata } from "next"
import { BadgeCheck, BriefcaseBusiness, Palette, Users } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/network/creators" }, title: "Listerr Network for Creators", description: "Creator marketplace for Story, Reel, and List commerce content.",
  openGraph: {
    url: "/network/creators",
    title: "Listerr Network for Creators",
    description: "Creator marketplace for Story, Reel, and List commerce content.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Listerr Network for Creators",
    description: "Creator marketplace for Story, Reel, and List commerce content.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="Listerr Network" title="Creators Who Build Commerce Content" description="Offer Story, Reel, and List creation, build a certified portfolio, and get discovered by Indian brands." primaryCta={{label:"Apply as Creator",href:"/network/apply"}} secondaryCta={{label:"Explore Network",href:"/network"}} features={[{title:"Creator Portfolio",description:"Showcase formats, industries, and campaign outcomes.",icon:Palette},{title:"Certification",description:"Get verified on Listerr formats and workflows.",icon:BadgeCheck},{title:"Brand Briefs",description:"Receive campaign opportunities from brands.",icon:BriefcaseBusiness},{title:"Collaboration",description:"Work with agencies, publishers, and commerce teams.",icon:Users}]} checklist={["Portfolio pages","Format certification","Brand brief matching","Campaign workflow","Reusable templates","Marketplace discovery"]} metrics={[{value:"4",label:"Commerce formats"},{value:"P1",label:"Marketplace depth"},{value:"IN",label:"India focus"},{value:"B2B",label:"Brand demand"}]} related={[{label:"Brands",href:"/network/brands"},{label:"Agencies",href:"/network/agencies"},{label:"Apply",href:"/network/apply"}]} />
}
