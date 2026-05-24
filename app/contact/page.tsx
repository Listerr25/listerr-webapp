import type { Metadata } from "next"
import { Headphones, Mail, Megaphone, Newspaper } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { title: "Contact Listerr", description: "Talk to sales, support, partnerships, or press at Listerr." }

export default function Page() {
  return <SimpleMarketingPage eyebrow="Contact" title="Talk to the Listerr team" description="Reach the right team for sales, support, partnerships, press, or product questions." primaryCta={{label:"Book a Demo",href:"mailto:sales@listerr.in"}} secondaryCta={{label:"Email Support",href:"mailto:support@listerr.in"}} features={[{title:"Sales",description:"sales@listerr.in",icon:Mail},{title:"Support",description:"support@listerr.in",icon:Headphones},{title:"Partnerships",description:"partnerships@listerr.in",icon:Megaphone},{title:"Press",description:"press@listerr.in",icon:Newspaper}]} checklist={["Name","Work email","Company","Area of interest","Message","Managed form backend pending"]} related={[{label:"Pricing",href:"/pricing"},{label:"Network Apply",href:"/network/apply"},{label:"Partners",href:"/partners"}]} />
}
