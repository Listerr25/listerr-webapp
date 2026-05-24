import type { Metadata } from "next"
import { Bot, Inbox, MessageCircle, PhoneCall } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { title: "Seller Studio Orders", description: "AI order management for WhatsApp, voice, Stories, and Shopify orders." }

export default function Page() {
  return <SimpleMarketingPage eyebrow="Seller Studio" title="AI Order Management for Every Commerce Channel" description="Capture, confirm, route, and track orders from Stories, WhatsApp, calls, voice, and storefront sessions." features={[{title:"Unified Inbox",description:"All AI and storefront orders in one operating view.",icon:Inbox},{title:"Text Orders",description:"WhatsApp and chat orders parsed into structured carts.",icon:MessageCircle},{title:"Voice Orders",description:"Voice sessions mapped to catalogue and order history.",icon:PhoneCall},{title:"AI Routing",description:"Route orders by location, availability, and SLA.",icon:Bot}]} checklist={["Story CTA order capture","WhatsApp order parsing","AI call order creation","Payment link support","Transcript and audit trail","Shopify and Seller Studio sync"]} metrics={[{value:"15-30%",label:"Cart recovery"},{value:"₹0.50",label:"Text order rate"},{value:"₹3/min",label:"AI calling"},{value:"24/7",label:"Capture"}]} related={[{label:"AI Calling",href:"/ai/ai-calling"},{label:"Text Ordering",href:"/ai/text-ordering"},{label:"Listerr Order",href:"/ai/listerr-order"}]} />
}
