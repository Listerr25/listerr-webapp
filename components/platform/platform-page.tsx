import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { BrandBadge, CTABand, FeatureGrid, SectionContainer } from "@/components/primitives"
import { Button } from "@/components/ui/button"
import { brands, type BrandSlug } from "@/lib/brand"
import { cn } from "@/lib/utils"

type PlatformModule = {
  title: string
  description: string
  icon: LucideIcon
  href?: string
}

type PlatformPageProps = {
  brand: BrandSlug
  eyebrow: string
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  summary: string[]
  modules: PlatformModule[]
  positioning: {
    title: string
    body: string
    href?: string
    linkLabel?: string
  }
  customers: string[]
  anchors: Array<{ label: string; href: string }>
  integrations: string[]
}

export function PlatformPage({
  brand,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  summary,
  modules,
  positioning,
  customers,
  anchors,
  integrations,
}: PlatformPageProps) {
  const brandConfig = brands[brand]
  const brandButton =
    brand === "seller"
      ? "seller"
      : brand === "network"
        ? "network"
        : brand === "storyboard"
          ? "storyboard"
          : "listerr"

  return (
    <>
      <section className={cn("overflow-hidden py-20 md:py-28", brandConfig.bg)}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <BrandBadge brand={brand} />
            <p className={cn("mt-6 text-xs font-bold uppercase tracking-[0.18em]", brandConfig.text)}>
              {eyebrow}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] text-fg md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-fg-muted md:text-xl">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant={brandButton} size="xl">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-xl">
            <div className="rounded-xl bg-surface-sunken p-4">
              <div className="grid gap-3">
                {modules.slice(0, 4).map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                      <span className={cn("flex h-11 w-11 items-center justify-center rounded-lg", brandConfig.bg, brandConfig.text)}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-bold text-fg">{item.title}</p>
                        <p className="text-sm text-fg-muted">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className={cn("text-xs font-bold uppercase tracking-[0.18em]", brandConfig.text)}>
              What it does
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Built for operating teams, not slide decks.
            </h2>
          </div>
          <div className="grid gap-4">
            {summary.map((item) => (
              <p key={item} className="flex gap-3 rounded-xl border border-border bg-white p-4 leading-7 text-fg-muted shadow-sm">
                <CheckCircle2 className={cn("mt-1 h-5 w-5 shrink-0", brandConfig.text)} />
                {item}
              </p>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="mb-10">
          <p className={cn("text-xs font-bold uppercase tracking-[0.18em]", brandConfig.text)}>
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            The modules that power the workflow.
          </h2>
        </div>
        <FeatureGrid
          items={modules.map((item) => ({
            title: item.title,
            description: item.description,
            icon: item.icon,
            brand,
          }))}
        />
      </SectionContainer>

      <SectionContainer>
        <div className={cn("rounded-2xl border p-8 md:p-10", brandConfig.bg, brandConfig.border)}>
          <h2 className="text-3xl font-extrabold text-fg">{positioning.title}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-fg-muted">
            {positioning.body}
          </p>
          {positioning.href ? (
            <Link
              href={positioning.href}
              className={cn("mt-6 inline-flex items-center gap-2 font-bold", brandConfig.text)}
            >
              {positioning.linkLabel ?? "Learn more"} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-fg md:text-4xl">
              Best for
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {customers.map((customer) => (
                <span key={customer} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-fg-muted">
                  {customer}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-fg md:text-4xl">
              Deep dives
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {anchors.map((anchor) => (
                <Link
                  key={anchor.href}
                  href={anchor.href}
                  className={cn("rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm", brandConfig.text)}
                >
                  {anchor.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className={cn("text-xs font-bold uppercase tracking-[0.18em]", brandConfig.text)}>
              Integrations
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Connects to your commerce stack.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {integrations.map((integration) => (
              <div key={integration} className="rounded-lg border border-border bg-white p-4 text-sm font-bold text-fg shadow-sm">
                {integration}
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className={brandConfig.bg}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-fg md:text-5xl">
            Ready to build with {brandConfig.name}?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant={brandButton} size="xl">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      <CTABand />
    </>
  )
}
