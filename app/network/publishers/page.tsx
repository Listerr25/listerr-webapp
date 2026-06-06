import type { Metadata } from "next"
import { BadgeIndianRupee, Globe, Megaphone, ShieldCheck } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = {
  alternates: { canonical: "/network/publishers" },
  title: "Listerr Network for Publishers",
  description: "Host branded commerce content and earn placement revenue as a Listerr publisher.",
  openGraph: {
    url: "/network/publishers",
    title: "Listerr Network for Publishers",
    description: "Host branded commerce content and earn placement revenue as a Listerr publisher.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Listerr Network for Publishers",
    description: "Host branded commerce content and earn placement revenue as a Listerr publisher.",
  },
}

export default function PublishersPage() {
  return (
    <SimpleMarketingPage
      eyebrow="Listerr Network"
      title="Publisher Monetisation for Commerce Content"
      description="Host branded Stories, Reels, and Lists, run commerce placements, and earn revenue from verified brand campaigns."
      primaryCta={{ label: "Apply as Publisher", href: "/network/apply" }}
      secondaryCta={{ label: "Explore Network", href: "/network" }}
      features={[
        { title: "Placement Inventory", description: "Offer premium surfaces for commerce campaigns.", icon: Globe },
        { title: "Brand Campaigns", description: "Work with verified brands and agencies.", icon: Megaphone },
        { title: "Revenue Share", description: "Earn from sponsored placements and campaigns.", icon: BadgeIndianRupee },
        { title: "Controls", description: "Approve categories, brands, and campaign formats.", icon: ShieldCheck },
      ]}
      checklist={[
        "Publisher application path",
        "Placement inventory model",
        "Sponsored commerce content",
        "Brand approval controls",
        "Revenue reporting placeholder",
        "Network campaign routing",
      ]}
      metrics={[
        { value: "4", label: "Content formats" },
        { value: "INR", label: "Revenue model" },
        { value: "P2", label: "Publisher surface" },
        { value: "1", label: "Network layer" },
      ]}
      related={[
        { label: "Creators", href: "/network/creators" },
        { label: "Brands", href: "/network/brands" },
        { label: "Apply", href: "/network/apply" },
      ]}
    />
  )
}
