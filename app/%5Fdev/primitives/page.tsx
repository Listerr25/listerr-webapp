import { BarChart3, Bot, Layers, Megaphone, Package } from "lucide-react"

import {
  BrandBadge,
  CTABand,
  FeatureGrid,
  Hero,
  IconBadge,
  MetricsStrip,
  PlatformCard,
  PricingCard,
  SectionContainer,
} from "@/components/primitives"

export default function PrimitiveGallery() {
  return (
    <>
      <Hero
        eyebrow="Primitive gallery"
        title="Listerr interface system"
        description="A development-only page for checking the reusable sections, brand treatments, metrics, cards, and CTA patterns."
        primaryCta={{ label: "Primary CTA", href: "/" }}
        secondaryCta={{ label: "Secondary CTA", href: "/" }}
      />

      <SectionContainer>
        <div className="mb-8 flex flex-wrap gap-3">
          <BrandBadge brand="listerr" />
          <BrandBadge brand="seller" />
          <BrandBadge brand="network" />
          <BrandBadge brand="storyboard" />
        </div>
        <div className="mb-10 flex gap-3">
          <IconBadge icon={Layers} brand="listerr" />
          <IconBadge icon={Package} brand="seller" />
          <IconBadge icon={Megaphone} brand="network" />
          <IconBadge icon={Bot} brand="storyboard" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <PlatformCard brand="listerr" />
          <PlatformCard brand="seller" />
          <PlatformCard brand="network" />
          <PlatformCard brand="storyboard" />
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <MetricsStrip
          metrics={[
            { value: "200+", label: "Active brands" },
            { value: "₹500Cr+", label: "Attributed GMV" },
            { value: "2Bn+", label: "Story views" },
            { value: "12+", label: "Languages" },
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <FeatureGrid
          items={[
            {
              title: "Catalogue sync",
              description: "Keep product content, media, and availability current.",
              icon: Package,
              brand: "seller",
            },
            {
              title: "Campaign analytics",
              description: "Track engagement, conversion, and attributed GMV.",
              icon: BarChart3,
              brand: "listerr",
            },
            {
              title: "AI ordering",
              description: "Capture orders from voice and text conversations.",
              icon: Bot,
              brand: "network",
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="grid gap-5 lg:grid-cols-3">
          <PricingCard
            name="Starter"
            price="₹12k/mo"
            description="For early brands launching shoppable engagement."
            features={["Stories", "Basic analytics", "Email support"]}
          />
          <PricingCard
            name="Growth"
            price="₹35k/mo"
            description="For growing teams proving commerce loops."
            features={["Smart Flows", "Meta sync", "Priority support"]}
            popular
          />
          <PricingCard
            name="Scale"
            price="Custom"
            description="For teams combining AI, content, and network growth."
            features={["AI add-ons", "Integrations", "Success manager"]}
          />
        </div>
      </SectionContainer>

      <CTABand />
    </>
  )
}
