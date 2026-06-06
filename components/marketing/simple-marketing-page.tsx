import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { CTABand, FeatureGrid, Hero, MetricsStrip, SectionContainer } from "@/components/primitives"
import { Button } from "@/components/ui/button"

export type MarketingFeature = {
  title: string
  description: string
  icon: LucideIcon
}

export function SimpleMarketingPage({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Start Free Trial", href: "/signup" },
  secondaryCta = { label: "Book Demo", href: "/contact" },
  features,
  checklist,
  metrics,
  related,
}: {
  eyebrow: string
  title: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  features: MarketingFeature[]
  checklist: string[]
  metrics?: Array<{ value: string; label: string }>
  related?: Array<{ label: string; href: string }>
}) {
  return (
    <>
      <Hero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <SectionContainer>
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            Everything needed to make this workflow useful.
          </h2>
        </div>
        <FeatureGrid
          items={features.map((feature) => ({
            ...feature,
            brand: "listerr",
          }))}
        />
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
              Operating details
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Built for real commerce teams.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {checklist.map((item) => (
              <p key={item} className="flex gap-3 rounded-xl border border-border bg-white p-4 text-sm leading-6 text-fg-muted shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-listerr-700" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </SectionContainer>

      {metrics ? (
        <SectionContainer>
          <MetricsStrip metrics={metrics} />
        </SectionContainer>
      ) : null}

      {related ? (
        <SectionContainer className="bg-surface-raised">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-fg">Related routes</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {related.map((item) => (
                <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 rounded-full bg-brand-listerr-50 px-4 py-2 text-sm font-bold text-brand-listerr-700">
                  {item.label} <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </SectionContainer>
      ) : null}

      <SectionContainer>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild variant="listerr" size="xl">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </SectionContainer>

      <CTABand />
    </>
  )
}
