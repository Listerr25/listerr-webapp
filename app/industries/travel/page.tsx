import type { Metadata } from "next"
import { IndustryPage } from "@/components/industry/industry-page"

export const metadata: Metadata = {
  title: "Travel Industry",
  description: "Visual Stories, AI itinerary personalisation, and Smart Flows for travel discovery and booking recovery.",
}

export default function TravelPage() {
  return (
    <IndustryPage
      title="Inspire, Plan, Book — All Inside Your App"
      description="Visual Stories for destinations, AI personalised itineraries, and Smart Flows for abandoned travel bookings."
      useCases={[
        { title: "Stories", description: "Destination inspiration and visual trip discovery.", href: "/use-cases/stories" },
        { title: "AI Personalisation", description: "Itinerary and package recommendations by context.", href: "/use-cases/ai-personalisation" },
        { title: "Smart Flows", description: "Booking abandonment recovery and reactivation journeys.", href: "/use-cases/smart-flows" },
      ]}
      metrics={[
        { value: "+38%", label: "Discovery engagement" },
        { value: "2.7x", label: "Curated package CTR" },
        { value: "15-30%", label: "Recovery potential" },
      ]}
      caseStudy="Travel placeholder study for destination Stories and booking recovery flows."
      integrations={["GA4", "Segment", "Razorpay", "WhatsApp", "MoEngage", "WebEngage", "Custom API", "CRM"]}
      teamLabel="Travel Team"
    />
  )
}
