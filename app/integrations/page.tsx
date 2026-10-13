import type { Metadata } from "next"
import { IntegrationsHubClient } from "@/components/integrations/integrations-hub-client"

export const metadata: Metadata = {
  title: "Ecosystem Integrations — POS, CCTV, Digital Signage & WhatsApp | Listerr 360",
  description:
    "Connect Listerr Vision AI with Petpooja, Restroworks (POSist), Hikvision, CP Plus, Android TV signage, WhatsApp Cloud API, Razorpay, Shopify, and ONDC in real-time.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    url: "/integrations",
    title: "Ecosystem Integrations — POS, CCTV, Digital Signage & WhatsApp | Listerr 360",
    description:
      "Over 35+ production connectors for Indian F&B and retail. Connect your existing cameras, billing POS, menu screens, and messaging into one reactive loop.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosystem Integrations | Listerr 360",
    description:
      "Connect Listerr with Petpooja, POSist, CP Plus, Hikvision, WhatsApp, Razorpay, and digital signage.",
  },
}

export default function IntegrationsPage() {
  return <IntegrationsHubClient />
}
