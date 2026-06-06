import type { Metadata } from "next"

import SellerPageClient from "./seller-page-client"

export const metadata: Metadata = {
  title: "Sell on Listerr",
  description: "Become a Listerr seller — AI-powered commerce, Stories, Reels, and Smart Flows for Indian brands.",
  alternates: { canonical: "/seller" },
  openGraph: {
    url: "/seller",
    title: "Sell on Listerr",
    description: "Become a Listerr seller — AI-powered commerce, Stories, Reels, and Smart Flows for Indian brands.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell on Listerr",
    description: "Become a Listerr seller — AI-powered commerce, Stories, Reels, and Smart Flows for Indian brands.",
  },
}

export default function Page() {
  return <SellerPageClient />
}
