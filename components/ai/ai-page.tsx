import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { FeatureGrid, MetricsStrip, SectionContainer } from "@/components/primitives"
import { Button } from "@/components/ui/button"

type AICapability = {
  title: string
  description: string
  icon: LucideIcon
}

export function AIPage({
  title,
  subtitle,
  steps,
  capabilities,
  useCases,
  channels,
  pricing,
}: {
  title: string
  subtitle: string
  steps: string[]
  capabilities: AICapability[]
  useCases: string[]
  channels: string[]
  pricing: string
}) {
  return (
    <>
      <section className="bg-ai-bg py-20 text-ai-fg md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ai-accent">
              Listerr AI
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75 md:text-xl">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="ai" size="xl">
                <Link href="/signup">Try Listerr AI</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/25 bg-transparent text-white hover:bg-white/10">
                <Link href="/contact">Book AI Demo</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-ai-surface p-5 shadow-xl">
            <div className="grid gap-3 rounded-xl bg-ai-bg p-4">
              {steps.slice(0, 4).map((step, index) => (
                <div key={step} className="rounded-lg bg-white/8 p-4">
                  <p className="text-sm font-extrabold text-ai-accent">0{index + 1}</p>
                  <p className="mt-2 text-sm leading-6 text-white/78">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionContainer className="bg-ai-bg py-0 text-ai-fg">
        <div className="rounded-2xl border border-white/10 bg-ai-surface p-6">
          <MetricsStrip
            metrics={[
              { value: "12+", label: "Indian languages" },
              { value: "24/7", label: "AI availability" },
              { value: "0 IVR", label: "No hold flows" },
              { value: "INR", label: "Transparent pricing" },
            ]}
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            From intent to confirmed commerce action.
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-xl border border-border bg-white p-5 shadow-sm">
              <p className="text-sm font-extrabold text-brand-listerr-700">0{index + 1}</p>
              <p className="mt-3 text-sm leading-6 text-fg-muted">{step}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            AI commerce with catalogue and policy context.
          </h2>
        </div>
        <FeatureGrid
          items={capabilities.map((item) => ({
            ...item,
            brand: "listerr",
          }))}
        />
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-fg md:text-5xl">
              Use cases
            </h2>
            <div className="mt-6 grid gap-3">
              {useCases.map((item) => (
                <p key={item} className="flex gap-3 rounded-xl border border-border bg-white p-4 leading-7 text-fg-muted shadow-sm">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-listerr-700" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-fg md:text-5xl">
              Channels and integrations
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {channels.map((item) => (
                <div key={item} className="rounded-lg border border-border bg-white p-4 text-sm font-bold text-fg shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-ai-bg text-ai-fg">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ai-accent">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">{pricing}</h2>
            <Link href="/pricing" className="mt-5 inline-flex items-center gap-2 font-bold text-ai-accent">
              See full pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="ai" size="xl">
              <Link href="/contact">Book AI Demo</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/25 bg-transparent text-white hover:bg-white/10">
              <Link href="/contact">Talk to AI Team</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
