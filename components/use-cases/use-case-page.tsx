import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, BarChart3, CheckCircle2 } from "lucide-react"

import { CTABand, FeatureGrid, Hero, MetricsStrip, SectionContainer } from "@/components/primitives"
import { Button } from "@/components/ui/button"

type UseCaseCard = {
  title: string
  description: string
  icon: LucideIcon
}

export function UseCasePage({
  eyebrow,
  title,
  subtitle,
  cardsTitle,
  cards,
  checklist,
  metrics,
  funnel,
  accent = "listerr",
}: {
  eyebrow: string
  title: string
  subtitle: string
  cardsTitle: string
  cards: UseCaseCard[]
  checklist: string[]
  metrics: Array<{ value: string; label: string }>
  funnel: string[]
  accent?: "listerr" | "seller"
}) {
  const accentText = accent === "seller" ? "text-brand-seller-700" : "text-brand-listerr-700"
  const accentVariant = accent === "seller" ? "seller" : "listerr"

  return (
    <>
      <Hero
        eyebrow={eyebrow}
        title={title}
        description={subtitle}
        primaryCta={{ label: accent === "seller" ? "Get the Shopify App" : "Start Free Trial", href: "/signup" }}
        secondaryCta={{ label: "Book Demo", href: "/contact" }}
      >
        <div className="rounded-2xl border border-border bg-white p-5 shadow-xl">
          <div className="rounded-xl bg-surface-sunken p-4">
            <div className="grid gap-3">
              {cards.slice(0, 3).map((card) => {
                const Icon = card.icon
                return (
                  <div key={card.title} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-lg ${accent === "seller" ? "bg-brand-seller-50 text-brand-seller-700" : "bg-brand-listerr-50 text-brand-listerr-700"}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold text-fg">{card.title}</p>
                      <p className="text-sm text-fg-muted">{card.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Hero>

      <SectionContainer>
        <div className="mb-10 max-w-3xl">
          <p className={`text-xs font-bold uppercase tracking-[0.18em] ${accentText}`}>
            {cardsTitle}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            Practical formats your team can launch.
          </h2>
        </div>
        <FeatureGrid
          items={cards.map((card) => ({
            ...card,
            brand: accent === "seller" ? "seller" : "listerr",
          }))}
        />
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.18em] ${accentText}`}>
              Feature checklist
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Built for measurable commerce, not passive content.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {checklist.map((item) => (
              <p key={item} className="flex gap-3 rounded-xl border border-border bg-white p-4 text-sm leading-6 text-fg-muted shadow-sm">
                <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${accentText}`} />
                {item}
              </p>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="mb-8 flex items-center gap-3">
          <BarChart3 className={`h-7 w-7 ${accentText}`} />
          <h2 className="text-3xl font-extrabold text-fg md:text-5xl">
            Analytics included from day one.
          </h2>
        </div>
        <MetricsStrip metrics={metrics} />
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.18em] ${accentText}`}>
              Funnel fit
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Use it across the full customer journey.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {funnel.map((step, index) => (
              <div key={step} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <p className={`text-sm font-extrabold ${accentText}`}>0{index + 1}</p>
                <p className="mt-3 font-bold text-fg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="rounded-2xl border border-border bg-white p-8 shadow-md">
          <p className={`text-sm font-bold ${accentText}`}>Related case study</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-fg">
            Indian commerce teams use Listerr formats to lift engagement,
            conversion, and repeat purchase.
          </h2>
          <Link href="/case-studies" className={`mt-6 inline-flex items-center gap-2 font-bold ${accentText}`}>
            Read case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant={accentVariant} size="xl">
            <Link href="/signup">Start Free Trial</Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link href="/contact">Book Demo</Link>
          </Button>
        </div>
      </SectionContainer>

      <CTABand />
    </>
  )
}
