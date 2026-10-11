import type { Metadata } from "next"
import HomePageV2Client from "@/components/v2/home-page-v2-client"

export const metadata: Metadata = {
  title: "Listerr 2.0 — India's Most Complete Commerce Engagement Platform",
  description:
    "Interactive showcase: Stories, Reels, AI Ordering, and Smart Flows in one platform built for Indian brands.",
  openGraph: {
    url: "/v2",
    title: "Listerr 2.0 — Commerce Engagement Platform",
    description: "Stories, Reels, AI Ordering, and Smart Flows in one platform built for Indian brands.",
  },
}

export default function V2Page() {
  return <HomePageV2Client />
}
