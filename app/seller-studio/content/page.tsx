import type { Metadata } from "next"
import { Clapperboard, ImagePlus, MousePointer2, Wand2 } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { title: "Seller Studio Content", description: "Create shoppable Stories, Reels, and commerce content from catalogue data." }

export default function Page() {
  return <SimpleMarketingPage eyebrow="Seller Studio" title="Shoppable Content Creator" description="Drag-and-drop Stories and Reels that pull live product data, CTAs, and commerce tracking from your catalogue." features={[{title:"Story Builder",description:"Create full-screen frames with product cards and CTAs.",icon:MousePointer2},{title:"Reel Composer",description:"Package vertical video with shoppable overlays.",icon:Clapperboard},{title:"Media Library",description:"Organise images, videos, and reusable assets.",icon:ImagePlus},{title:"AI Copy Assist",description:"Draft headlines, captions, and calls to action.",icon:Wand2}]} checklist={["No-code Story and Reel creation","Live product cards","CTA and deep-link support","Brand kit controls","Campaign scheduling","Revenue analytics per content item"]} metrics={[{value:"+58%",label:"Engagement"},{value:"2.3x",label:"CVR lift"},{value:"5m",label:"Story creation"},{value:"0",label:"Developer dependency"}]} related={[{label:"Storyboard",href:"/storyboard"},{label:"Stories",href:"/use-cases/stories"},{label:"Reels",href:"/use-cases/reels"}]} />
}
