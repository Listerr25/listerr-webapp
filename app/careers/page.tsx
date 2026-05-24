import type { Metadata } from "next"
import { BriefcaseBusiness, HeartHandshake, MapPin, Send } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Listerr and help build India's Commerce Engagement OS.",
}

export default function CareersPage() {
  return (
    <SimpleMarketingPage
      eyebrow="Careers"
      title="Build India's Commerce Engagement OS"
      description="Join a team working across interactive content, seller operations, creator networks, and AI commerce."
      primaryCta={{ label: "Send Your CV", href: "mailto:careers@listerr.in" }}
      secondaryCta={{ label: "Meet Listerr", href: "/about" }}
      features={[
        { title: "Product Engineering", description: "Build SDKs, APIs, AI flows, and commerce infrastructure.", icon: BriefcaseBusiness },
        { title: "Growth & Marketing", description: "Own category creation across Indian commerce segments.", icon: Send },
        { title: "Customer Success", description: "Help brands launch measurable engagement loops.", icon: HeartHandshake },
        { title: "India-first Remote", description: "Remote-friendly roles with India market context.", icon: MapPin },
      ]}
      checklist={[
        "Open roles grouped by department",
        "Remote, Bengaluru, and Mumbai-ready structure",
        "Static role list shell for Phase 3",
        "No open role fallback email",
        "Values and mission framing",
        "Careers CTA wired to careers@listerr.in",
      ]}
      related={[
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Partners", href: "/partners" },
      ]}
    />
  )
}
