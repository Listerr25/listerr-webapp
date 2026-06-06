import type { Metadata } from "next"
import { HeartHandshake, MapPin, Rocket, Users } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/about" }, title: "About Listerr", description: "Building India's Commerce Engagement OS.",
  openGraph: {
    url: "/about",
    title: "About Listerr",
    description: "Building India's Commerce Engagement OS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Listerr",
    description: "Building India's Commerce Engagement OS.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="About" title="Building India's Commerce Engagement OS" description="Listerr helps Indian commerce teams turn owned surfaces into interactive, measurable, AI-powered growth loops." primaryCta={{label:"Join the Team",href:"/careers"}} secondaryCta={{label:"Contact Us",href:"/contact"}} features={[{title:"Mission",description:"Make commerce engagement interactive, measurable, and India-first.",icon:Rocket},{title:"India Focus",description:"INR, DPDP, regional languages, and India data residency.",icon:MapPin},{title:"Team",description:"Built for operators across growth, product, commerce, and content.",icon:Users},{title:"Partnerships",description:"Creators, agencies, publishers, and technology partners.",icon:HeartHandshake}]} checklist={["India-first commerce platform","Built around 4 products and 9 use cases","AI commerce layer","Partner network","Customer data ownership","Enterprise-grade compliance direction"]} metrics={[{value:"200+",label:"Brands target"},{value:"₹500Cr+",label:"GMV anchor"},{value:"2Bn+",label:"Story views"},{value:"2026",label:"Launch blueprint"}]} related={[{label:"Careers",href:"/careers"},{label:"Partners",href:"/partners"},{label:"Contact",href:"/contact"}]} />
}
