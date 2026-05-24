import type { Metadata } from "next"
import { BarChart3, Bot, Clapperboard, Megaphone, Package } from "lucide-react"

import { PlatformPage } from "@/components/platform/platform-page"

export const metadata: Metadata = {
  title: "Seller Studio — Merchant Command Centre for Indian D2C",
  description:
    "Catalogue, shoppable content, AI orders, Meta and Google ad sync, and live analytics in one dashboard.",
}

export default function SellerStudioPage() {
  return (
    <PlatformPage
      brand="seller"
      eyebrow="Every tool a seller needs to grow"
      title="Seller Studio — Merchant Command Centre for Indian D2C"
      subtitle="Catalogue, shoppable content, AI orders, Meta/Google ad sync, and live analytics — all in one dashboard."
      primaryCta={{ label: "Open Seller Studio", href: "/signup" }}
      secondaryCta={{ label: "Get the Shopify App", href: "/use-cases/shopify" }}
      summary={[
        "Manage product catalogue, shoppable content, order flows, and ad loops in one place.",
        "Sync from Shopify, WooCommerce, or CSV and enrich catalogue data with AI tags.",
        "Create Stories and Reels without waiting on engineering support.",
        "Track views, taps, add-to-cart, orders, and attributed revenue in real time.",
        "Use AI order assistants for WhatsApp, text, and voice-led purchases.",
      ]}
      modules={[
        {
          title: "Product Catalogue Manager",
          description: "Sync from Shopify/WooCommerce/CSV. AI auto-tags and enriches.",
          icon: Package,
          href: "/seller-studio/catalogue",
        },
        {
          title: "Shoppable Content Creator",
          description: "Drag-and-drop editor for shoppable Stories and Reels.",
          icon: Clapperboard,
          href: "/seller-studio/content",
        },
        {
          title: "Sales & Engagement Dashboard",
          description: "Real-time metrics: views, taps, ATC, revenue.",
          icon: BarChart3,
          href: "/seller-studio/analytics",
        },
        {
          title: "AI Order Assistant",
          description: "Text and voice orders via WhatsApp and AI calling.",
          icon: Bot,
          href: "/seller-studio/orders",
        },
        {
          title: "Ad Sync Centre",
          description: "Connect Meta and Google. Repurpose Stories as paid ads.",
          icon: Megaphone,
          href: "/seller-studio/ads",
        },
      ]}
      positioning={{
        title: "Built for Indian commerce operators",
        body: "Seller Studio keeps the daily operating loop tight: product data, content, ordering, and paid acquisition all work from the same commerce context.",
      }}
      customers={[
        "Shopify merchants",
        "WooCommerce sellers",
        "D2C brands",
        "India-based e-commerce",
      ]}
      anchors={[
        { label: "Catalogue", href: "/seller-studio/catalogue" },
        { label: "Content", href: "/seller-studio/content" },
        { label: "Orders", href: "/seller-studio/orders" },
        { label: "Ads", href: "/seller-studio/ads" },
        { label: "Analytics", href: "/seller-studio/analytics" },
      ]}
      integrations={["Shopify", "WooCommerce", "Meta Ads", "Google Ads", "WhatsApp", "Razorpay"]}
    />
  )
}
