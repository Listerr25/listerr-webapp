import type { Metadata } from "next"
import { CreditCard, MessageCircle, PackageCheck, ShoppingCart } from "lucide-react"

import { AIPage } from "@/components/ai/ai-page"

export const metadata: Metadata = {
  title: "AI Text Ordering",
  description:
    "WhatsApp, SMS, and in-app chat become automated order channels powered by Listerr AI.",
}

export default function TextOrderingPage() {
  return (
    <AIPage
      title="WhatsApp, SMS, and In-App Chat Become Fully Automated Order Channels"
      subtitle="Customers type naturally — Listerr AI understands, confirms, and places the order."
      steps={[
        "Customer messages: Order me the blue kurta in size M.",
        "NLP parses intent, product, colour, size, and quantity.",
        "AI checks inventory and returns availability, price, and image.",
        "Customer confirms in the thread.",
        "AI creates the order and sends payment link.",
        "Dispatch and confirmation are updated automatically.",
      ]}
      capabilities={[
        { title: "Natural Language", description: "Understands phrases like woh pink wali saree and maps them to catalogue.", icon: MessageCircle },
        { title: "Order Modification", description: "Change size, quantity, address, or payment through follow-up messages.", icon: PackageCheck },
        { title: "Cart Management", description: "Add more, remove items, or rebuild cart using natural text.", icon: ShoppingCart },
        { title: "Payment Integration", description: "Razorpay, PayU, and UPI links generated at checkout.", icon: CreditCard },
      ]}
      useCases={[
        "WhatsApp-first commerce for D2C and local sellers.",
        "SMS ordering for feature-phone and low-bandwidth customers.",
        "In-app chat ordering for customers who need assistance before checkout.",
        "Instagram DM to order flows for creator-led campaigns.",
      ]}
      channels={["WhatsApp Business API", "SMS", "Instagram DMs", "In-app chat", "Website chat", "Razorpay"]}
      pricing="₹0.50 per order processed · Included in Growth, Scale, Enterprise"
    />
  )
}
