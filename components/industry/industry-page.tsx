import Link from "next/link"
import { ArrowRight, Building2, PlugZap } from "lucide-react"

import { CTABand, FeatureGrid, Hero, MetricsStrip, PricingCard, SectionContainer } from "@/components/primitives"
import { Button } from "@/components/ui/button"

export function IndustryPage({
  title,
  description,
  useCases,
  metrics,
  caseStudy,
  integrations,
  teamLabel,
}: {
  title: string
  description: string
  useCases: Array<{ title: string; description: string; href: string }>
  metrics: Array<{ value: string; label: string }>
  caseStudy: string
  integrations: string[]
  teamLabel: string
}) {
  return (
    <>
      <Hero
        eyebrow="Industry"
        title={title}
        description={description}
        primaryCta={{ label: `Talk to ${teamLabel}`, href: "/contact" }}
        secondaryCta={{ label: "See Pricing", href: "/pricing" }}
      />
      <SectionContainer>
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Top use cases
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            The highest-impact loops for this vertical.
          </h2>
        </div>
        <FeatureGrid
          items={useCases.map((item) => ({
            title: item.title,
            description: item.description,
            icon: Building2,
            brand: "listerr",
          }))}
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {useCases.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 rounded-full bg-brand-listerr-50 px-4 py-2 text-sm font-bold text-brand-listerr-700">
              {item.title} <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="bg-surface-raised">
        <MetricsStrip metrics={metrics} />
      </SectionContainer>
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-md">
            <p className="text-sm font-bold text-brand-listerr-700">Featured case study</p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg">{caseStudy}</h2>
            <Link href="/case-studies/sample" className="mt-6 inline-flex items-center gap-2 font-bold text-brand-listerr-700">
              Read story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <PricingCard
            name="Growth"
            price="₹29,999/mo"
            description="Recommended starting tier for this vertical."
            features={["All core formats", "Smart Flows", "Revenue attribution"]}
            popular
          />
        </div>
      </SectionContainer>
      <SectionContainer className="bg-surface-raised">
        <div className="mb-8 flex items-center gap-3">
          <PlugZap className="h-7 w-7 text-brand-listerr-700" />
          <h2 className="text-3xl font-extrabold text-fg md:text-5xl">
            Relevant integrations
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {integrations.map((item) => (
            <div key={item} className="rounded-lg border border-border bg-white p-4 text-sm font-bold text-fg shadow-sm">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="listerr" size="xl">
            <Link href="/contact">Talk to {teamLabel}</Link>
          </Button>
        </div>
      </SectionContainer>
      <CTABand />
    </>
  )
}
