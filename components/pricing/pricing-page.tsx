"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Minus, ShieldCheck } from "lucide-react"

import {
  AI_ADDONS,
  COMPARISON_ROWS,
  PLANS,
  PRICING_FAQS,
  formatINR,
} from "@/lib/pricing"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CTABand, Hero, SectionContainer } from "@/components/primitives"

function PlanValue({
  value,
  billing,
}: {
  value: (typeof PLANS)[number]
  billing: "monthly" | "annual"
}) {
  if (value.custom) return <span>Custom</span>

  const price = billing === "monthly" ? value.priceMonthly : value.priceAnnual
  if (price === undefined) return <span>Custom</span>
  return (
    <>
      {formatINR(price)}
      <span className="text-base font-semibold text-fg-muted">
        /{billing === "monthly" ? "mo" : "yr"}
      </span>
    </>
  )
}

function ComparisonCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center gap-2 font-semibold text-success">
        <Check className="h-4 w-4" />
        Yes
      </span>
    ) : (
      <span className="inline-flex items-center gap-2 text-fg-subtle">
        <Minus className="h-4 w-4" />
        No
      </span>
    )
  }

  return <span>{value}</span>
}

export function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

  return (
    <>
      <Hero
        eyebrow="Priced in INR"
        title="Pricing for Indian Brands. INR. No Hidden Fees."
        description="Start free. Scale on revenue, not arbitrary USD bills."
        primaryCta={{ label: "Start Free Trial", href: "/signup" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
        variant="centered"
      />

      <SectionContainer className="py-12 md:py-16">
        <div className="mx-auto mb-10 flex w-fit rounded-full border border-border bg-white p-1 shadow-sm">
          {(["monthly", "annual"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setBilling(item)}
              className={
                billing === item
                  ? "rounded-full bg-brand-listerr-600 px-5 py-2 text-sm font-bold capitalize text-white"
                  : "rounded-full px-5 py-2 text-sm font-bold capitalize text-fg-muted hover:text-fg"
              }
            >
              {item}
              {item === "annual" ? (
                <span className="ml-2 text-xs opacity-80">Save 20%</span>
              ) : null}
            </button>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={
                plan.popular
                  ? "relative rounded-xl border-2 border-brand-listerr-600 bg-white p-6 shadow-md"
                  : "relative rounded-xl border border-border bg-white p-6 shadow-sm"
              }
            >
              <div className="flex min-h-16 items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-fg">{plan.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-fg-muted">
                    {plan.description}
                  </p>
                </div>
                {plan.popular ? (
                  <span className="shrink-0 rounded-full bg-brand-listerr-50 px-3 py-1 text-xs font-bold text-brand-listerr-700">
                    Most Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-7 flex items-end gap-1 text-4xl font-extrabold text-fg">
                <PlanValue value={plan} billing={billing} />
              </p>
              <p className="mt-2 inline-flex rounded-full bg-brand-listerr-50 px-3 py-1 text-xs font-bold text-brand-listerr-700">
                Priced in INR
              </p>
              <Button
                asChild
                variant={plan.popular ? "listerr" : "outline"}
                className="mt-6 w-full"
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
              <ul className="mt-6 grid gap-3 text-sm text-fg-muted">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Feature matrix
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            Compare every plan.
          </h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
          <table className="w-full min-w-[860px] border-collapse text-left text-sm">
            <thead className="sticky top-0 bg-white">
              <tr className="border-b border-border">
                <th className="px-4 py-4 font-bold text-fg">Group</th>
                <th className="px-4 py-4 font-bold text-fg">Feature</th>
                {PLANS.map((plan) => (
                  <th key={plan.id} className="px-4 py-4 font-bold text-fg">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map(([group, feature, starter, growth, scale, enterprise], index) => (
                <tr
                  key={`${group}-${feature}`}
                  className={index % 2 === 0 ? "bg-surface-raised" : "bg-white"}
                >
                  <td className="px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-fg-muted">
                    {group}
                  </td>
                  <td className="px-4 py-3 font-semibold text-fg">{feature}</td>
                  {[starter, growth, scale, enterprise].map((value, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-fg-muted">
                      <ComparisonCell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
              AI add-ons
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Add conversational commerce when you need it.
            </h2>
            <p className="mt-5 leading-8 text-fg-muted">
              Listerr AI products are metered transparently and can be added to
              eligible plans without moving your entire engagement stack.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-raised">
                <tr>
                  <th className="px-4 py-4 font-bold text-fg">AI Product</th>
                  <th className="px-4 py-4 font-bold text-fg">Pricing</th>
                  <th className="px-4 py-4 font-bold text-fg">Included In</th>
                </tr>
              </thead>
              <tbody>
                {AI_ADDONS.map((addon) => (
                  <tr key={addon.product} className="border-t border-border">
                    <td className="px-4 py-4 font-semibold text-fg">{addon.product}</td>
                    <td className="px-4 py-4 text-fg-muted">{addon.pricing}</td>
                    <td className="px-4 py-4 text-fg-muted">{addon.includedIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Billing without surprises.
            </h2>
          </div>
          <Accordion type="single" collapsible className="rounded-xl border border-border bg-white px-5 shadow-sm">
            {PRICING_FAQS.map(([question, answer], index) => (
              <AccordionItem key={question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-bold">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="leading-7 text-fg-muted">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-4 md:grid-cols-4">
          {["DPDP-ready", "India data residency", "INR billing", "No credit card required"].map((item) => (
            <div key={item} className="rounded-xl border border-border bg-white p-5 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-brand-listerr-700" />
              <p className="mt-4 font-bold text-fg">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="listerr" size="xl">
            <Link href="/contact">Talk to Sales</Link>
          </Button>
          <Link href="/vs/storyly" className="font-bold text-brand-listerr-700">
            Compare with Storyly →
          </Link>
        </div>
      </SectionContainer>

      <CTABand />
    </>
  )
}
