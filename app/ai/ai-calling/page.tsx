import type { Metadata } from "next"
import { Brain, Database, Languages, PhoneOutgoing } from "lucide-react"

import { AIPage } from "@/components/ai/ai-page"

export const metadata: Metadata = {
  alternates: { canonical: "/ai/ai-calling" },
  title: "AI Calling for E-Commerce",
  description:
    "AI voice agents that browse, quote, and take orders in Hindi, English, and regional Indian languages.",
  openGraph: {
    url: "/ai/ai-calling",
    title: "AI Calling for E-Commerce",
    description: "AI voice agents that browse, quote, and take orders in Hindi, English, and regional Indian languages.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling for E-Commerce",
    description: "AI voice agents that browse, quote, and take orders in Hindi, English, and regional Indian languages.",
  },
}

export default function AICallingPage() {
  return (
    <AIPage
      title="AI Voice Agents That Browse, Quote, and Take Orders — in Hindi, English, and Regional Indian Languages"
      subtitle="Inbound and outbound calling powered by AI that knows your catalogue, your policies, and your customers."
      steps={[
        "Customer sees Call to Order in a Story, Reel, or WhatsApp message.",
        "Call connects to an AI Voice Agent with no hold and no IVR.",
        "AI greets by name, understands natural language, and checks catalogue context.",
        "AI quotes price, handles offers, and confirms the order by voice.",
        "Order is created in Seller Studio or Shopify.",
        "WhatsApp or SMS confirmation and payment link are sent automatically.",
        "Recording, transcript, sentiment, and follow-up flags sync to CRM.",
      ]}
      capabilities={[
        { title: "Multilingual", description: "Hindi, English, Hinglish, Tamil, Telugu, Marathi, Kannada, Bengali, and more.", icon: Languages },
        { title: "Product Knowledge", description: "Ingests catalogue, FAQs, returns, and shipping policies.", icon: Brain },
        { title: "Outbound Campaigns", description: "Back-in-stock, reorder, dormant customer, and cart-recovery calls.", icon: PhoneOutgoing },
        { title: "CRM Integration", description: "Sentiment, intent, transcript, and follow-up flags per call.", icon: Database },
      ]}
      useCases={[
        "Tier 2 and Tier 3 customers who prefer calling before buying.",
        "Re-engagement of dormant customers with personalised offers.",
        "Cart recovery where voice can outperform email and static messaging.",
        "Post-purchase delivery satisfaction and upsell calls.",
      ]}
      channels={["Phone calls", "WhatsApp", "SMS", "Seller Studio", "Shopify", "CRM"]}
      pricing="₹3 per minute of AI call time · Available on Scale & Enterprise"
    />
  )
}
