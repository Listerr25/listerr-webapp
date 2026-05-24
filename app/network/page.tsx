import type { Metadata } from "next"
import { Building2, Globe, Handshake, Palette } from "lucide-react"

import { PlatformPage } from "@/components/platform/platform-page"

export const metadata: Metadata = {
  title: "Listerr Network — The Marketplace for Commerce Creators",
  description:
    "Hire verified creators, white-label as an agency, monetize as a publisher, or grow as a brand partner.",
}

export default function NetworkPage() {
  return (
    <PlatformPage
      brand="network"
      eyebrow="Creator and partner marketplace"
      title="Listerr Network — The Marketplace for Commerce Creators"
      subtitle="Hire verified creators, white-label as an agency, monetise as a publisher, or hire creators as a brand."
      primaryCta={{ label: "Join the Network", href: "/network/apply" }}
      secondaryCta={{ label: "Browse Creators", href: "/network/creators" }}
      summary={[
        "Connect brands with certified creators, agencies, publishers, and reseller partners.",
        "Run regional campaigns with creators who understand local commerce context.",
        "Let agencies white-label Listerr and earn recurring revenue.",
        "Help publishers host branded commerce content and monetize placements.",
      ]}
      modules={[
        {
          title: "For Creators",
          description: "Offer Story, Reel, and List creation. Build a portfolio. Get certified.",
          icon: Palette,
          href: "/network/creators",
        },
        {
          title: "For Brands",
          description: "Hire verified creators and run regional campaigns.",
          icon: Building2,
          href: "/network/brands",
        },
        {
          title: "For Agencies",
          description: "White-label Listerr. Earn recurring revenue.",
          icon: Handshake,
          href: "/network/agencies",
        },
        {
          title: "For Publishers",
          description: "Host branded content. Earn placement revenue.",
          icon: Globe,
          href: "/network/publishers",
        },
      ]}
      positioning={{
        title: "Distribution is part of the product",
        body: "Listerr Network connects content creation with campaign execution, giving commerce teams a partner layer that extends beyond software seats.",
      }}
      customers={[
        "Creators",
        "D2C brands",
        "Agencies",
        "Publishers",
        "Regional commerce teams",
      ]}
      anchors={[
        { label: "Creators", href: "/network/creators" },
        { label: "Brands", href: "/network/brands" },
        { label: "Agencies", href: "/network/agencies" },
        { label: "Publishers", href: "/network/publishers" },
        { label: "Apply", href: "/network/apply" },
      ]}
      integrations={["Instagram", "YouTube", "Meta Ads", "Shopify", "WhatsApp", "Creator CRM"]}
    />
  )
}
