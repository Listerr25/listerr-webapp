import type { Metadata } from "next"
import { IndustryPage } from "@/components/industry/industry-page"

export const metadata: Metadata = {
  title: "Food & Delivery Industry",
  description: "Voice ordering, reorder streaks, and daily habit loops for food, QSR, and delivery brands.",
}

export default function FoodDeliveryPage() {
  return (
    <IndustryPage
      title="Voice Ordering, Reorder Streaks, and Daily Habit Loops"
      description="AI voice ordering for QSR, Smart Flows for daily reorders, gamification for loyalty, and post-meal engagement."
      useCases={[
        { title: "AI Voice Ordering", description: "Same as yesterday voice ordering in seconds.", href: "/ai/voice-ordering" },
        { title: "Smart Flows", description: "Post-meal review request and re-engagement flows.", href: "/use-cases/smart-flows" },
        { title: "Gamification", description: "Streak rewards, free-delivery badges, and loyalty loops.", href: "/use-cases/gamification" },
      ]}
      metrics={[
        { value: "3s", label: "Repeat order intent" },
        { value: "4x", label: "Review submission" },
        { value: "Daily", label: "Habit loop" },
      ]}
      caseStudy="Food delivery placeholder study for voice reorders and loyalty gamification."
      integrations={["WhatsApp", "Razorpay", "PayU", "Shiprocket", "GA4", "MoEngage", "WebEngage", "Custom API"]}
      teamLabel="Food Delivery Team"
    />
  )
}
