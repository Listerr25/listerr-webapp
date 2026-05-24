import type { Metadata } from "next"
import { Activity, BarChart3, LineChart, ReceiptIndianRupee } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = {
  title: "Seller Studio Analytics",
  description: "Sales and engagement analytics for Stories, Reels, ads, and AI orders.",
}

export default function AnalyticsPage() {
  return (
    <SimpleMarketingPage
      eyebrow="Seller Studio"
      title="Sales and Engagement Analytics"
      description="Track views, taps, add-to-cart, revenue, attributed GMV, AI orders, and campaign performance in one dashboard."
      primaryCta={{ label: "Open Seller Studio", href: "/signup" }}
      secondaryCta={{ label: "See Pricing", href: "/pricing" }}
      features={[
        { title: "Engagement Metrics", description: "Views, taps, completion, skips, and drop-off.", icon: Activity },
        { title: "Revenue Attribution", description: "Connect content interactions to orders and GMV.", icon: ReceiptIndianRupee },
        { title: "Campaign Reporting", description: "Compare Stories, Reels, Lists, flows, and ads.", icon: BarChart3 },
        { title: "API Ready", description: "Real-time analytics API available on Scale.", icon: LineChart },
      ]}
      checklist={[
        "Story and Reel analytics",
        "List click and save tracking",
        "Revenue attribution",
        "AI order reporting",
        "Meta and Google campaign signals",
        "Real-time analytics API path",
      ]}
      metrics={[
        { value: "2Bn+", label: "Story views" },
        { value: "₹500Cr+", label: "Attributed GMV" },
        { value: "Real-time", label: "Scale API" },
        { value: "1", label: "Seller dashboard" },
      ]}
      related={[
        { label: "Catalogue", href: "/seller-studio/catalogue" },
        { label: "Ads", href: "/seller-studio/ads" },
        { label: "Pricing", href: "/pricing" },
      ]}
    />
  )
}
