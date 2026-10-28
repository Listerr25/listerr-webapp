import type { Metadata } from "next"
import { Headphones, Mail, Megaphone, Newspaper } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/contact" }, title: "Contact Listerr", description: "Talk to sales, support, partnerships, or press at Listerr.",
  openGraph: {
    url: "/contact",
    title: "Contact Listerr",
    description: "Talk to sales, support, partnerships, or press at Listerr.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Listerr",
    description: "Talk to sales, support, partnerships, or press at Listerr.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="Contact" title="Talk to the Listerr team" description="Reach the right team for sales, support, partnerships, press, or product questions." primaryCta={{label:"Chat on WhatsApp",href:"https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20to%20learn%20more%20about%20Listerr%20360"}} secondaryCta={{label:"Email Support",href:"mailto:support@listerr.in"}} features={[{title:"Sales",description:"sales@listerr.in",icon:Mail},{title:"Support",description:"support@listerr.in",icon:Headphones},{title:"Partnerships",description:"partnerships@listerr.in",icon:Megaphone},{title:"Press",description:"press@listerr.in",icon:Newspaper}]} checklist={["Name","Work email","Company","Area of interest","Message"]} related={[{label:"Hardware Catalog",href:"/hardware"},{label:"Industries",href:"/industries/restaurants"}]} />
}
