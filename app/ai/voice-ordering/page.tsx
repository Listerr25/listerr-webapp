import type { Metadata } from "next"
import { Accessibility, Globe2, History, PackagePlus } from "lucide-react"

import { AIPage } from "@/components/ai/ai-page"

export const metadata: Metadata = {
  alternates: { canonical: "/ai/voice-ordering" },
  title: "AI Voice Ordering",
  description:
    "A private Alexa for your brand, inside your own app, with catalogue-aware voice ordering.",
  openGraph: {
    url: "/ai/voice-ordering",
    title: "AI Voice Ordering",
    description: "A private Alexa for your brand, inside your own app, with catalogue-aware voice ordering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Ordering",
    description: "A private Alexa for your brand, inside your own app, with catalogue-aware voice ordering.",
  },
}

export default function VoiceOrderingPage() {
  return (
    <AIPage
      title="A Private Alexa for Your Brand — Inside Your Own App"
      subtitle="Tap the mic, speak the order. AI maps to your catalogue and confirms."
      steps={[
        "User taps mic icon on any screen: Story, PDP, cart, or home.",
        "Listerr AI listens as the user speaks naturally.",
        "AI recognises order history and maps speech to products.",
        "AI confirms items, price, and delivery context.",
        "User says yes or taps confirm.",
        "Voice summary confirms order placement and expected delivery.",
      ]}
      capabilities={[
        { title: "Order Memory", description: "Reorder my usual or same as last time works immediately.", icon: History },
        { title: "Regional Languages", description: "Trained for Indian accents and major regional languages.", icon: Globe2 },
        { title: "Multi-Item Orders", description: "Handles 2 shirts and 3 socks with cart summary.", icon: PackagePlus },
        { title: "Accessibility", description: "Improves access for elderly users and limited-literacy buyers.", icon: Accessibility },
      ]}
      useCases={[
        "Grocery and FMCG weekly repeat ordering.",
        "QSR and food delivery same-order flows.",
        "Pharmacy repeat medication reorder journeys.",
        "Fashion discovery such as blue kurtas under ₹1,000.",
      ]}
      channels={["Mobile app", "Web app", "Stories", "PDP", "Cart", "Seller Studio"]}
      pricing="₹1 per voice order session · Available on Scale & Enterprise"
    />
  )
}
