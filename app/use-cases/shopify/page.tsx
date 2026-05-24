import type { Metadata } from "next"
import { Bot, MailPlus, Megaphone, Store, Zap } from "lucide-react"

import { UseCasePage } from "@/components/use-cases/use-case-page"

export const metadata: Metadata = {
  title: "Shopify Growth — Deep Shopify integration for Indian brands",
  description:
    "A full Shopify growth system combining shoppable Stories, AI ordering, lead capture, and Meta ads sync.",
}

export default function ShopifyUseCasePage() {
  return (
    <UseCasePage
      eyebrow="Shopify Growth"
      title="The Deepest Shopify Integration on the Indian Market"
      subtitle="Not a plugin — a full growth system combining content, AI ordering, and ad sync."
      cardsTitle="Modules"
      accent="seller"
      cards={[
        { title: "One-Click Shopify Install", description: "Install from App Store and sync in 10 minutes.", icon: Zap },
        { title: "Shoppable Stories", description: "Embed on home, collection, or PDP on any theme.", icon: Store },
        { title: "Lead Capture Stories", description: "Email, phone, and WhatsApp opt-ins synced to customers.", icon: MailPlus },
        { title: "AI-Powered Order Stories", description: "Browse and order by text or voice from a Story.", icon: Bot },
        { title: "Shopify + Meta Ads Loop", description: "Best Stories auto-promoted as Dynamic Product Ads.", icon: Megaphone },
      ]}
      checklist={[
        "App embed block for any Shopify theme",
        "Product and variant sync",
        "Shoppable storefront Stories",
        "Lead capture to Shopify customers",
        "AI ordering via text and voice",
        "Meta ad audience and creative loop",
        "Revenue attribution",
        "Shopify case-study ready analytics",
      ]}
      metrics={[
        { value: "2.4x", label: "Homepage CVR" },
        { value: "3-5x", label: "More opt-ins" },
        { value: "40%", label: "Fewer ROAS-negative campaigns" },
        { value: "10m", label: "Typical sync start" },
      ]}
      funnel={["Storefront discovery", "Lead capture", "AI ordering", "Ad optimization"]}
    />
  )
}
