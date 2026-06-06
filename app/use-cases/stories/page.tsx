import type { Metadata } from "next"
import { BadgePercent, BookOpenText, Clock, MousePointerClick } from "lucide-react"

import { UseCasePage } from "@/components/use-cases/use-case-page"

export const metadata: Metadata = {
  alternates: { canonical: "/use-cases/stories" },
  title: "Stories — Full-screen stories that drive your business",
  description:
    "Embed tracked, shoppable Stories inside your own app or website with CTAs, polls, countdowns, and analytics.",
  openGraph: {
    url: "/use-cases/stories",
    title: "Stories — Full-screen stories that drive your business",
    description: "Embed tracked, shoppable Stories inside your own app or website with CTAs, polls, countdowns, and analytics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories — Full-screen stories that drive your business",
    description: "Embed tracked, shoppable Stories inside your own app or website with CTAs, polls, countdowns, and analytics.",
  },
}

export default function StoriesUseCasePage() {
  return (
    <UseCasePage
      eyebrow="Stories"
      title="Full-Screen Stories That Drive Your Business — Not Meta's"
      subtitle="Stories embedded inside your brand app or website, tracked end-to-end, designed for India."
      cardsTitle="What you can do"
      cards={[
        { title: "Flash Sale Stories", description: "Countdown timers, product cards, one-tap Buy Now CTAs.", icon: BadgePercent },
        { title: "Onboarding Stories", description: "Replace boring tooltips with swipeable visual onboarding.", icon: MousePointerClick },
        { title: "Editorial Stories", description: "Top picks, trend lists, and curated product narratives.", icon: BookOpenText },
        { title: "Campaign Stories", description: "Festival campaigns, launches, and brand storytelling.", icon: Clock },
      ]}
      checklist={[
        "Full-screen portrait 9:16 frames",
        "Swipe navigation between frames",
        "Tappable CTAs and deep links",
        "Polls, quizzes, sliders, reactions",
        "Countdown timers for limited offers",
        "Auto-expire with urgency",
        "Evergreen highlights",
        "Frame analytics for views, completion, drop-off, and taps",
      ]}
      metrics={[
        { value: "2.4x", label: "Homepage CVR" },
        { value: "+58%", label: "Engagement" },
        { value: "40%", label: "Lower wasted ROAS" },
        { value: "2M+", label: "Story views delivered" },
      ]}
      funnel={["Discovery", "Consideration", "Conversion", "Repeat purchase"]}
    />
  )
}
