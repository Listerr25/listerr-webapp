import type { Metadata } from "next"
import { Bot, Languages, ListOrdered, PlaySquare, ShieldCheck, Sparkles } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/listerr" }, title: "Listerr Core", description: "India's interactive content experience platform for Stories, Reels, Lists, Gamification, and AI personalisation.",
  openGraph: {
    url: "/listerr",
    title: "Listerr Core",
    description: "India's interactive content experience platform for Stories, Reels, Lists, Gamification, and AI personalisation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Listerr Core",
    description: "India's interactive content experience platform for Stories, Reels, Lists, Gamification, and AI personalisation.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="Listerr Core" title="Listerr — India's Interactive Content Experience Platform" description="Embed Stories, Reels, Lists, Gamification, and AI personalisation into any app or website — no code required." features={[{title:"Stories",description:"Replace static banners with swipeable commerce moments.",icon:PlaySquare},{title:"Customer Lists",description:"First-class native ranked and curated list format.",icon:ListOrdered},{title:"AI Personalisation",description:"Rank content by user context and commerce intent.",icon:Sparkles},{title:"Listerr AI Layer",description:"Conversational commerce beyond content engagement.",icon:Bot},{title:"India-first",description:"INR, India residency, DPDP, 12+ languages.",icon:ShieldCheck},{title:"Language Support",description:"Built for Hindi, English, Hinglish, and regional contexts.",icon:Languages}]} checklist={["Stories, Reels, Lists, and Gamification","Interactive, trackable content experiences","Marketing teams ship campaigns in minutes","Engagement, retention, conversion, and revenue outcomes","INR pricing and DPDP alignment","MCP and AI commerce layer"]} metrics={[{value:"200+",label:"Brands"},{value:"₹50Cr+",label:"Attributed GMV"},{value:"2M+",label:"Story views"},{value:"12+",label:"Languages"}]} related={[{label:"vs Storyly",href:"/vs/storyly"},{label:"Use Cases",href:"/use-cases/stories"},{label:"Pricing",href:"/pricing"}]} />
}
