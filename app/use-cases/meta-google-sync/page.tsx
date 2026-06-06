import type { Metadata } from "next"
import { BarChart3, Megaphone, RefreshCw, ShoppingBag } from "lucide-react"
import { UseCasePage } from "@/components/use-cases/use-case-page"

export const metadata: Metadata = { alternates: { canonical: "/use-cases/meta-google-sync" }, title: "Meta & Google Sync", description: "Turn top-performing Stories into Meta and Google ads with catalogue, pixel, GA4, and remarketing sync.",
  openGraph: {
    url: "/use-cases/meta-google-sync",
    title: "Meta & Google Sync",
    description: "Turn top-performing Stories into Meta and Google ads with catalogue, pixel, GA4, and remarketing sync.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta & Google Sync",
    description: "Turn top-performing Stories into Meta and Google ads with catalogue, pixel, GA4, and remarketing sync.",
  },
}

export default function Page() {
  return <UseCasePage eyebrow="Meta & Google Sync" title="Your Best Stories Become Your Best Ads — Automatically" subtitle="Bi-directional sync between Listerr engagement content and your Meta/Google paid campaigns." cardsTitle="Sync capabilities" cards={[{title:"Catalogue Sync",description:"Facebook, Instagram, and Google product feed updates.",icon:ShoppingBag},{title:"Stories to Ads",description:"Promote Stories as paid Story or Reel ads.",icon:Megaphone},{title:"Event Mapping",description:"ViewContent, AddToCart, Purchase, and custom events.",icon:BarChart3},{title:"Remarketing",description:"Build audiences from Listerr engagement signals.",icon:RefreshCw}]} checklist={["Meta Business Manager sync","Google Merchant Center feed","GA4 custom events","Google Ads remarketing","Creative promotion workflow","Unified attribution in Seller Studio"]} metrics={[{value:"5-10h",label:"Saved weekly"},{value:"40%",label:"Fewer weak campaigns"},{value:"2",label:"Ad platforms"},{value:"1",label:"Attribution loop"}]} funnel={["Content performs","Audience builds","Ad promotes","ROAS improves"]} />
}
