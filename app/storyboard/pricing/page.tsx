import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import { CTABand, Hero, SectionContainer } from "@/components/primitives"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  alternates: { canonical: "/storyboard/pricing" },
  title: "Storyboard Pricing",
  description: "Standalone Storyboard pricing for no-code shoppable content creation.",
  openGraph: {
    url: "/storyboard/pricing",
    title: "Storyboard Pricing",
    description: "Standalone Storyboard pricing for no-code shoppable content creation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storyboard Pricing",
    description: "Standalone Storyboard pricing for no-code shoppable content creation.",
  },
}

const plans = [
  {
    name: "Storyboard Free",
    price: "₹0",
    description: "For teams testing templates and first Story creation.",
    features: ["Template access", "Basic editor", "Listerr branding", "Limited exports"],
  },
  {
    name: "Storyboard Pro",
    price: "₹4,999/mo",
    description: "For marketers creating recurring shoppable content.",
    features: ["AI copy assist", "Brand kit", "Scheduler", "MP4/GIF export"],
  },
  {
    name: "Storyboard Team",
    price: "₹14,999/mo",
    description: "For agencies and commerce teams collaborating at scale.",
    features: ["Team collaboration", "Approval flow", "Shared asset library", "Priority support"],
  },
]

export default function StoryboardPricingPage() {
  return (
    <>
      <Hero
        eyebrow="Storyboard"
        title="Pricing for No-Code Commerce Content"
        description="Create shoppable Stories and Reels with templates, brand kits, AI writing, scheduling, and multi-format export."
        primaryCta={{ label: "Create Your First Story Free", href: "/signup" }}
        secondaryCta={{ label: "Browse Templates", href: "/storyboard/templates" }}
      />
      <SectionContainer>
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article key={plan.name} className={index === 1 ? "rounded-xl border-2 border-brand-storyboard-600 bg-white p-6 shadow-md" : "rounded-xl border border-border bg-white p-6 shadow-sm"}>
              <h2 className="text-xl font-extrabold text-fg">{plan.name}</h2>
              <p className="mt-3 min-h-14 text-sm leading-6 text-fg-muted">{plan.description}</p>
              <p className="mt-6 text-4xl font-extrabold text-fg">{plan.price}</p>
              <Button asChild variant={index === 1 ? "storyboard" : "outline"} className="mt-6 w-full">
                <Link href="/signup">Get Started</Link>
              </Button>
              <ul className="mt-6 grid gap-3 text-sm text-fg-muted">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionContainer>
      <CTABand />
    </>
  )
}
