import type { Metadata } from "next"

import { PricingPage } from "@/components/pricing/pricing-page"
import { PLANS } from "@/lib/pricing"

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title:
    "Listerr Pricing — INR plans from ₹9,999/mo · India's commerce engagement platform",
  description:
    "INR pricing for Indian brands. Start free with no credit card, then scale Stories, Reels, Smart Flows, and Listerr AI.",
  openGraph: {
    url: "/pricing",
    title: "Listerr Pricing — INR plans from ₹9,999/mo · India's commerce engagement platform",
    description: "INR pricing for Indian brands. Start free with no credit card, then scale Stories, Reels, Smart Flows, and Listerr AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Listerr Pricing — INR plans from ₹9,999/mo · India's commerce engagement platform",
    description: "INR pricing for Indian brands. Start free with no credit card, then scale Stories, Reels, Smart Flows, and Listerr AI.",
  },
}

export default function PricingRoute() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Listerr Commerce Engagement Platform",
    offers: PLANS.filter((plan) => !plan.custom).map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.priceMonthly,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://listerr.in/pricing#${plan.id}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PricingPage />
    </>
  )
}
