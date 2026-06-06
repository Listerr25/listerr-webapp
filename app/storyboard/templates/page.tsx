import type { Metadata } from "next"
import { Filter, Layers, Palette, Search } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/storyboard/templates" }, title: "Storyboard Templates", description: "Filterable commerce Story and Reel templates by industry, format, and campaign goal.",
  openGraph: {
    url: "/storyboard/templates",
    title: "Storyboard Templates",
    description: "Filterable commerce Story and Reel templates by industry, format, and campaign goal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storyboard Templates",
    description: "Filterable commerce Story and Reel templates by industry, format, and campaign goal.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="Storyboard" title="Template Gallery for Commerce Stories and Reels" description="Start from 100+ industry templates for launches, offers, onboarding, UGC, lists, and festival campaigns." primaryCta={{label:"Browse Templates",href:"/signup"}} secondaryCta={{label:"Open Storyboard",href:"/storyboard"}} features={[{title:"Industry Filters",description:"Find templates for D2C, EdTech, FinTech, OTT, food, and travel.",icon:Filter},{title:"Campaign Search",description:"Search by launch, flash sale, onboarding, cart recovery, or loyalty.",icon:Search},{title:"Brand Kit",description:"Apply fonts, colours, logos, and CTA rules.",icon:Palette},{title:"Reusable Blocks",description:"Save sections for repeat campaigns.",icon:Layers}]} checklist={["Template filtering","Industry categories","Campaign categories","Brand kit application","Reusable blocks","Storyboard publishing path"]} metrics={[{value:"100+",label:"Templates planned"},{value:"5m",label:"Story launch"},{value:"6",label:"Industries"},{value:"4",label:"Formats"}]} related={[{label:"AI Editor",href:"/storyboard/ai-editor"},{label:"Storyboard",href:"/storyboard"},{label:"Stories",href:"/use-cases/stories"}]} />
}
