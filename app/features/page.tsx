import type { Metadata } from "next"
import { BarChart3, Bot, Clapperboard, Gamepad2, ListOrdered, PlaySquare, Workflow } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/features" }, title: "Features", description: "Listerr features across Stories, Reels, Lists, Gamification, AI, Smart Flows, and analytics.",
  openGraph: {
    url: "/features",
    title: "Features",
    description: "Listerr features across Stories, Reels, Lists, Gamification, AI, Smart Flows, and analytics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features",
    description: "Listerr features across Stories, Reels, Lists, Gamification, AI, Smart Flows, and analytics.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="Features" title="The Commerce Engagement Feature Set" description="Everything Indian growth, product, and commerce teams need to launch interactive owned-surface experiences." features={[{title:"Stories",description:"Full-screen shoppable content.",icon:PlaySquare},{title:"Reels",description:"Vertical video with commerce overlays.",icon:Clapperboard},{title:"Customer Lists",description:"Ranked, curated, voted, and deal lists.",icon:ListOrdered},{title:"Gamification",description:"Streaks, scratch, spin, badges, challenges.",icon:Gamepad2},{title:"Listerr AI",description:"Calling, text ordering, voice ordering, OMS, cataloging.",icon:Bot},{title:"Smart Flows",description:"Trigger-based multi-step journeys.",icon:Workflow},{title:"Analytics",description:"Views, taps, revenue, attribution, APIs.",icon:BarChart3}]} checklist={["No-code content workflows","India-first pricing and compliance","Revenue attribution","AI ordering add-ons","SDK and integration surface","Multi-brand platform architecture"]} metrics={[{value:"4",label:"Platforms"},{value:"9",label:"Use cases"},{value:"5",label:"AI products"},{value:"47",label:"Planned routes"}]} related={[{label:"Platform",href:"/platform"},{label:"Pricing",href:"/pricing"},{label:"Integrations",href:"/integrations"}]} />
}
