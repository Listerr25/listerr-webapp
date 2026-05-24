import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Languages,
  MessageSquareText,
  PackageCheck,
  PlaySquare,
  ShoppingBag,
  Sparkles,
  Store,
  Trophy,
} from "lucide-react"

import {
  CTABand,
  FeatureGrid,
  Hero,
  MetricsStrip,
  PlatformCard,
  PricingCard,
  SectionContainer,
} from "@/components/primitives"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "India's Most Complete Commerce Engagement Platform",
  description:
    "Stories, Reels, AI Ordering, and Smart Flows in one platform built for Indian brands.",
}

const useCases = [
  {
    title: "Stories",
    description: "Shoppable web and app Stories that keep buyers moving.",
    stat: "2.4x CVR",
    icon: PlaySquare,
    href: "/use-cases/stories",
  },
  {
    title: "Reels",
    description: "Short video commerce for launches, drops, and campaigns.",
    stat: "+58% engagement",
    icon: PlaySquare,
    href: "/use-cases/reels",
  },
  {
    title: "Lists",
    description: "Audience lists that turn behavior into repeat purchase flows.",
    stat: "3-5x opt-ins",
    icon: CheckCircle2,
    href: "/use-cases/customer-lists",
  },
  {
    title: "Gamification",
    description: "Streaks, rewards, challenges, and commerce moments.",
    stat: "4.1x repeat rate",
    icon: Trophy,
    href: "/use-cases/gamification",
  },
  {
    title: "AI Personalisation",
    description: "Product and content paths adapted to each shopper.",
    stat: "12+ languages",
    icon: Sparkles,
    href: "/use-cases/ai-personalisation",
  },
  {
    title: "Smart Flows",
    description: "Lifecycle journeys connected to ads, CRM, and store events.",
    stat: "40% fewer waste campaigns",
    icon: BarChart3,
    href: "/use-cases/smart-flows",
  },
]

const integrations = [
  "Shopify",
  "WooCommerce",
  "Razorpay",
  "Meta Ads",
  "Google Ads",
  "WhatsApp",
  "MoEngage",
  "Clevertap",
  "WebEngage",
  "Segment",
  "GA4",
  "WordPress",
]

const industries = [
  ["E-Commerce", "2.4x homepage CVR", "/industries/ecommerce"],
  ["EdTech", "40% Day-7 retention lift", "/industries/edtech"],
  ["FinTech", "More assisted applications", "/industries/fintech"],
  ["Media & OTT", "Higher content recirculation", "/industries/media-ott"],
  ["Food & Delivery", "Repeat ordering moments", "/industries/food-delivery"],
  ["Travel", "Better package discovery", "/industries/travel"],
]

export default function Home() {
  return (
    <>
      <Hero
        title="India's Most Complete Commerce Engagement Platform"
        description="Stories, Reels, AI Ordering, and Smart Flows — all in one platform, built for Indian brands."
        primaryCta={{ label: "Start Free Trial", href: "/signup" }}
        secondaryCta={{ label: "See All Products", href: "/platform" }}
      >
        <div className="relative mx-auto max-w-xl">
          <div className="rounded-2xl border border-border bg-white p-4 shadow-xl">
            <div className="rounded-xl bg-surface-sunken p-4">
              <div className="grid gap-3">
                {[
                  ["Stories live", "₹18.4Cr attributed GMV", "bg-brand-listerr-600"],
                  ["AI order captured", "WhatsApp checkout ready", "bg-ai-bg"],
                  ["Creator reel synced", "Meta audience refreshed", "bg-brand-network-600"],
                ].map(([title, subtitle, color]) => (
                  <div key={title} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                    <span className={`h-12 w-12 rounded-lg ${color}`} />
                    <span>
                      <span className="block font-bold text-fg">{title}</span>
                      <span className="text-sm text-fg-muted">{subtitle}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-44 rounded-[28px] border-8 border-fg bg-white p-3 shadow-xl md:block">
            <div className="space-y-2">
              <div className="h-20 rounded-xl bg-brand-storyboard-100" />
              <div className="h-3 rounded-full bg-fg" />
              <div className="h-3 w-2/3 rounded-full bg-fg-subtle" />
              <Button variant="listerr" size="sm" className="mt-3 w-full">
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </Hero>

      <SectionContainer className="py-8 md:py-10">
        <MetricsStrip
          metrics={[
            { value: "200+", label: "Brands" },
            { value: "₹500Cr+", label: "Attributed GMV" },
            { value: "2Bn+", label: "Story Views" },
            { value: "12+", label: "Indian Languages" },
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Four platforms
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            One commerce engagement stack.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <PlatformCard brand="listerr" />
          <PlatformCard brand="seller" />
          <PlatformCard brand="network" />
          <PlatformCard brand="storyboard" />
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
              Use cases
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Build the moments that convert.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/use-cases/stories">Explore use cases</Link>
          </Button>
        </div>
        <FeatureGrid
          items={useCases.map((item) => ({
            title: `${item.title} · ${item.stat}`,
            description: item.description,
            icon: item.icon,
            brand: "listerr",
          }))}
        />
      </SectionContainer>

      <section className="bg-ai-bg py-20 text-ai-fg md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ai-accent">
              Listerr AI
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
              Introducing Listerr AI — Commerce That Talks, Listens, and Sells
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Voice, text, and intelligent order management — built for Indian
              languages and Indian commerce.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["AI Calling", "Text Ordering", "Voice Ordering", "Listerr Order", "AI Cataloging"].map((pill) => (
                <span key={pill} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/84">
                  {pill}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="ai" size="xl">
                <Link href="/ai/ai-calling">Explore Listerr AI</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/25 bg-transparent text-white hover:bg-white/10">
                <Link href="/contact">Book AI Demo</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-ai-surface p-5 shadow-xl">
            <div className="rounded-xl bg-ai-bg p-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ai-accent text-ai-bg">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold">AI call transcription</p>
                  <p className="text-sm text-white/60">Hindi, English, Hinglish</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="rounded-lg bg-white/8 p-3 text-white/80">
                  Customer asked for size M kurta in blue.
                </p>
                <p className="ml-8 rounded-lg bg-ai-accent p-3 font-semibold text-ai-bg">
                  Matched SKU, confirmed COD, order ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionContainer className="bg-brand-seller-50">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-seller-700">
              Shopify Growth
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Listerr + Shopify: Add Stories. Take AI Orders. Sync Meta Ads.
            </h2>
            <div className="mt-7 grid gap-3 text-fg-muted">
              {["One-click install", "Shoppable storefront Stories", "Meta Ads loop"].map((item) => (
                <p key={item} className="flex items-center gap-3">
                  <PackageCheck className="h-5 w-5 text-brand-seller-700" />
                  {item}
                </p>
              ))}
            </div>
            <Button asChild variant="seller" size="xl" className="mt-8">
              <Link href="/use-cases/shopify">Get the Shopify App</Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-brand-seller-100 bg-white p-5 shadow-xl">
            <div className="grid gap-4 rounded-xl bg-surface-sunken p-4 sm:grid-cols-3">
              {["2.4x homepage CVR", "3-5x more lead opt-ins", "40% fewer ROAS-negative campaigns"].map((stat) => (
                <div key={stat} className="rounded-lg bg-white p-4 text-lg font-extrabold text-fg shadow-sm">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-md">
            <p className="text-sm font-bold text-brand-listerr-700">Featured case study</p>
            <blockquote className="mt-4 text-2xl font-extrabold leading-tight text-fg">
              “Listerr helped our team turn storefront traffic into repeat buyers.”
            </blockquote>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["+58% engagement", "2.3x CVR", "4.1x repeat rate"].map((metric) => (
                <p key={metric} className="rounded-lg bg-brand-listerr-50 p-3 text-sm font-bold text-brand-listerr-700">
                  {metric}
                </p>
              ))}
            </div>
            <Link href="/case-studies" className="mt-6 inline-flex items-center gap-2 font-bold text-brand-listerr-700">
              Read the full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-fg md:text-5xl">
              Connect the tools commerce teams already use.
            </h2>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {integrations.map((integration) => (
                <div key={integration} className="rounded-lg border border-border bg-white p-4 text-sm font-bold text-fg shadow-sm">
                  {integration}
                </div>
              ))}
            </div>
            <Link href="/integrations" className="mt-6 inline-flex items-center gap-2 font-bold text-brand-listerr-700">
              View all integrations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-raised">
        <div className="mb-8 flex items-center gap-3">
          <Store className="h-7 w-7 text-brand-listerr-700" />
          <h2 className="text-3xl font-extrabold text-fg md:text-5xl">
            Built for Indian growth sectors.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(([name, stat, href]) => (
            <Link key={href} href={href} className="rounded-xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <Languages className="h-5 w-5 text-brand-listerr-700" />
              <p className="mt-4 text-lg font-bold text-fg">{name}</p>
              <p className="mt-2 text-sm text-fg-muted">{stat}</p>
            </Link>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            Start lean, scale when the commerce loop proves itself.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          <PricingCard
            name="Starter"
            price="₹12k/mo"
            description="For early brands launching shoppable engagement."
            features={["Stories and Reels", "Basic analytics", "Email support"]}
          />
          <PricingCard
            name="Growth"
            price="₹35k/mo"
            description="For teams scaling lifecycle engagement and ads loops."
            features={["Smart Flows", "Meta sync", "Priority support"]}
            popular
          />
          <PricingCard
            name="Scale"
            price="Custom"
            description="For larger commerce teams with AI and network needs."
            features={["Listerr AI add-ons", "Custom integrations", "Success manager"]}
          />
        </div>
      </SectionContainer>

      <CTABand />
    </>
  )
}
