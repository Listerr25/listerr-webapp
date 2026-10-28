import type { Metadata } from "next"
import { HeartHandshake, MapPin, Rocket, Users } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/about" }, title: "About Listerr", description: "The Complete Commerce Operating Loop for Indian Businesses.",
  openGraph: {
    url: "/about",
    title: "About Listerr",
    description: "The Complete Commerce Operating Loop for Indian Businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Listerr",
    description: "The Complete Commerce Operating Loop for Indian Businesses.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="About" title="The Complete Commerce Operating Loop for India" description="Listerr helps Indian restaurants, cafes, and retail businesses sell directly, retain customers via WhatsApp, and manage screens and cameras — all from one platform." primaryCta={{label:"Contact Us",href:"/contact"}} secondaryCta={{label:"Explore Hardware",href:"/hardware"}} features={[{title:"Mission",description:"Help Indian businesses sell direct, own their customer data, and automate store operations.",icon:Rocket},{title:"Based in Jaipur",description:"Orifinity Private Limited. Experience center in Malviya Nagar, Jaipur.",icon:MapPin},{title:"Team",description:"Founded by Rajat Jain and Naman Jain. Building for Indian commerce.",icon:Users},{title:"Partnerships",description:"POS integrations, payment gateways, and logistics partners.",icon:HeartHandshake}]} checklist={["India-first commerce platform","0% commission direct ordering","WhatsApp CRM and marketing","Cloud signage and digital menu boards","AI vision cameras for store ops","Petpooja POS integration"]} related={[{label:"Restaurants",href:"/industries/restaurants"},{label:"Hardware",href:"/hardware"},{label:"Contact",href:"/contact"}]} />
}
