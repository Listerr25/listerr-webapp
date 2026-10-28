import type { Metadata } from "next"
import { BriefcaseBusiness, HeartHandshake, MapPin, Send } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  title: "Careers",
  description: "Join Listerr and help build India's Commerce Engagement OS.",
  openGraph: {
    url: "/careers",
    title: "Careers",
    description: "Join Listerr and help build India's Commerce Engagement OS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers",
    description: "Join Listerr and help build India's Commerce Engagement OS.",
  },
}

export default function CareersPage() {
  return (
    <SimpleMarketingPage
      eyebrow="Careers"
      title="Build India's Commerce Engagement OS"
      description="Join our team in Jaipur building commerce technology for Indian businesses. We're hiring across engineering, growth, and operations."
      primaryCta={{ label: "Send Your CV", href: "mailto:careers@listerr.in" }}
      secondaryCta={{ label: "About Listerr", href: "/about" }}
      features={[
        { title: "Product Engineering", description: "Build APIs, integrations, AI flows, and commerce infrastructure.", icon: BriefcaseBusiness },
        { title: "Growth & Marketing", description: "Drive adoption across Indian restaurant and retail segments.", icon: Send },
        { title: "Customer Success", description: "Help merchants go live and grow with Listerr 360.", icon: HeartHandshake },
        { title: "Based in Jaipur", description: "Work from our Jaipur office or apply for remote roles.", icon: MapPin },
      ]}
      checklist={[
        "Engineering, marketing, and operations roles",
        "Jaipur-based with remote options",
        "Email your CV to careers@listerr.in",
        "We respond within 3 business days",
      ]}
      related={[
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  )
}
