import type { Metadata } from "next"
import { LinkIcon, PenLine, Sparkles, Wand2 } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { title: "Storyboard AI Editor", description: "AI-assisted commerce content editor for product-led Stories and Reels." }

export default function Page() {
  return <SimpleMarketingPage eyebrow="Storyboard" title="AI Editor for Shoppable Stories and Reels" description="Paste a product URL or catalogue item and Storyboard drafts headlines, captions, CTAs, and frame structure in your brand tone." primaryCta={{label:"Try AI Editor",href:"/signup"}} secondaryCta={{label:"Browse Templates",href:"/storyboard/templates"}} features={[{title:"Product URL Input",description:"Generate content from product pages and catalogue entries.",icon:LinkIcon},{title:"AI Copywriter",description:"Draft headlines, CTA copy, captions, and offer framing.",icon:PenLine},{title:"Brand Tone",description:"Keep voice consistent across teams and campaigns.",icon:Sparkles},{title:"Frame Suggestions",description:"Create structured Story/Reel sequences for conversion.",icon:Wand2}]} checklist={["Product URL to draft","Catalogue-aware copy","CTA generation","Brand tone controls","Frame structure suggestions","Multi-format export"]} metrics={[{value:"5m",label:"Idea to Story"},{value:"0",label:"Blank canvas"},{value:"4",label:"Output formats"},{value:"AI",label:"Copy assist"}]} related={[{label:"Templates",href:"/storyboard/templates"},{label:"Content Cataloging",href:"/ai/content-cataloging"},{label:"Storyboard",href:"/storyboard"}]} />
}
