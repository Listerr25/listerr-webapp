import type { Metadata } from "next"
import { BarChart3, Megaphone, RefreshCw, Target } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/seller-studio/ads" }, title: "Seller Studio Ads", description: "Meta and Google sync for promoting top-performing Stories and commerce content.",
  openGraph: {
    url: "/seller-studio/ads",
    title: "Seller Studio Ads",
    description: "Meta and Google sync for promoting top-performing Stories and commerce content.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seller Studio Ads",
    description: "Meta and Google sync for promoting top-performing Stories and commerce content.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="Seller Studio" title="Ad Sync Centre for Meta and Google" description="Turn your best Stories, Reels, and product lists into paid campaigns with audience and event sync." features={[{title:"Meta Sync",description:"Promote Stories as Meta Story and Reel ads.",icon:Megaphone},{title:"Google Sync",description:"Feed product and event signals into Google campaigns.",icon:Target},{title:"Audience Loop",description:"Build remarketing audiences from content engagement.",icon:RefreshCw},{title:"Attribution",description:"See ROAS impact inside Seller Studio.",icon:BarChart3}]} checklist={["Meta catalogue sync","Story-to-ad promotion","GA4 event mapping","Remarketing audience creation","Creative performance ranking","ROAS-negative campaign detection"]} metrics={[{value:"40%",label:"Fewer ROAS-negative campaigns"},{value:"5-10h",label:"Saved weekly"},{value:"1",label:"Attribution loop"},{value:"2",label:"Ad networks"}]} related={[{label:"Meta & Google Sync",href:"/use-cases/meta-google-sync"},{label:"Shopify",href:"/use-cases/shopify"},{label:"Pricing",href:"/pricing"}]} />
}
