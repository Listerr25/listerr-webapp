import type { Metadata } from "next"
import { Headset, Inbox, LineChart, Network, RotateCcw } from "lucide-react"
import { AIPage } from "@/components/ai/ai-page"

export const metadata: Metadata = { alternates: { canonical: "/ai/listerr-order" }, title: "Listerr Order", description: "AI-powered OMS for Shopify, AI calling, WhatsApp, voice, and Story orders.",
  openGraph: {
    url: "/ai/listerr-order",
    title: "Listerr Order",
    description: "AI-powered OMS for Shopify, AI calling, WhatsApp, voice, and Story orders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Listerr Order",
    description: "AI-powered OMS for Shopify, AI calling, WhatsApp, voice, and Story orders.",
  },
}

export default function Page() {
  return <AIPage title="One Inbox for Every AI Commerce Order — Unified, Routed, and Intelligent" subtitle="AI-powered OMS that captures orders from every channel and routes them with intelligence." steps={["Orders arrive from Shopify, AI calling, WhatsApp, voice, and Story CTAs.","Listerr Order normalises every order into one inbox.","AI routes by warehouse, partner, location, inventory, and SLA.","Order intelligence flags payment failures, cancellations, and high-value segments.","Customer service automation answers where-is-my-order and escalates when needed."]} capabilities={[{title:"Unified Order Inbox",description:"Shopify, AI calling, WhatsApp, voice, and Story CTAs in one inbox.",icon:Inbox},{title:"AI Order Routing",description:"Auto-assign by location, inventory, and SLA.",icon:Network},{title:"Order Intelligence",description:"Flags cancellations, payment failures, and valuable segments.",icon:LineChart},{title:"AI Customer Service",description:"Answers order status with live tracking.",icon:Headset},{title:"Returns Automation",description:"Pickup, refund, and notify within policy rules.",icon:RotateCcw}]} useCases={["One operating inbox for AI commerce orders.","Warehouse and partner routing for multi-location teams.","Automated customer service for delivery status.","Returns and refund workflows within policy rules."]} channels={["Shiprocket","Delhivery","Blue Dart","Shopify","WooCommerce","Razorpay","WhatsApp","Zoho Books"]} pricing="₹5,000/month up to 10K orders · Add-on for all plans" />
}
