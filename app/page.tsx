import type { Metadata } from "next"

import HomePageClient from "@/components/home-page-client"

export const metadata: Metadata = {
  title: "India's Most Complete Commerce Engagement Platform",
  description:
    "Stories, Reels, AI Ordering, and Smart Flows in one platform built for Indian brands.",
  openGraph: {
    url: "/",
    title: "India's Most Complete Commerce Engagement Platform",
    description: "Stories, Reels, AI Ordering, and Smart Flows in one platform built for Indian brands.",
  },
  twitter: {
    card: "summary_large_image",
    title: "India's Most Complete Commerce Engagement Platform",
    description: "Stories, Reels, AI Ordering, and Smart Flows in one platform built for Indian brands.",
  },
}

export default function Home() {
  return <HomePageClient />
}
