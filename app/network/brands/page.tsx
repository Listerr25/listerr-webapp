import type { Metadata } from "next"
import { BadgeCheck, Building2, MapPin, Megaphone } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { title: "Listerr Network for Brands", description: "Hire verified commerce creators and run regional content campaigns." }

export default function Page() {
  return <SimpleMarketingPage eyebrow="Listerr Network" title="Hire Verified Creators for Commerce Campaigns" description="Find creators who can produce shoppable Stories, Reels, Lists, and regional commerce content." primaryCta={{label:"Find Creators",href:"/network/apply"}} secondaryCta={{label:"Talk to Partnerships",href:"/contact"}} features={[{title:"Verified Talent",description:"Creator profiles with certification and work samples.",icon:BadgeCheck},{title:"Regional Fit",description:"Match language, category, and market context.",icon:MapPin},{title:"Campaign Briefs",description:"Turn product goals into creator deliverables.",icon:Megaphone},{title:"Brand Workflow",description:"Review, approve, and publish with Listerr surfaces.",icon:Building2}]} checklist={["Creator discovery","Regional matching","Campaign brief support","Content approval","Shoppable deliverables","Performance tracking"]} metrics={[{value:"12+",label:"Languages"},{value:"4",label:"Formats"},{value:"1",label:"Network layer"},{value:"INR",label:"Brand billing"}]} related={[{label:"Creators",href:"/network/creators"},{label:"Agencies",href:"/network/agencies"},{label:"Apply",href:"/network/apply"}]} />
}
