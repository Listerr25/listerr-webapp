import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight, Bot, ChevronDown } from "lucide-react"

import { brandList } from "@/lib/brand"
import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/components/site/logo"
import { MobileNav } from "@/components/site/mobile-nav"

const useCases = [
  ["Stories", "/use-cases/stories"],
  ["Reels & Video", "/use-cases/reels"],
  ["Customer Lists", "/use-cases/customer-lists"],
  ["Gamification", "/use-cases/gamification"],
  ["AI Personalisation", "/use-cases/ai-personalisation"],
  ["Smart Flows", "/use-cases/smart-flows"],
  ["Meta & Google Sync", "/use-cases/meta-google-sync"],
  ["Shopify Growth", "/use-cases/shopify"],
]

const industries = [
  ["E-Commerce", "/industries/ecommerce"],
  ["EdTech", "/industries/edtech"],
  ["FinTech", "/industries/fintech"],
  ["Media & OTT", "/industries/media-ott"],
  ["Food & Delivery", "/industries/food-delivery"],
  ["Travel", "/industries/travel"],
]

const aiLinks = [
  ["AI Calling for E-Commerce", "/ai/ai-calling"],
  ["AI Text Ordering", "/ai/text-ordering"],
  ["AI Voice Ordering", "/ai/voice-ordering"],
  ["Listerr Order", "/ai/listerr-order"],
  ["AI Content Cataloging", "/ai/content-cataloging"],
]

function NavItem({
  label,
  children,
  dark = false,
}: {
  label: string
  children: ReactNode
  dark?: boolean
}) {
  return (
    <div className="group relative">
      <button className="flex h-11 items-center gap-1 rounded-md px-3 text-sm font-semibold text-fg-muted transition hover:bg-surface-sunken hover:text-fg">
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-[720px] translate-y-2 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div
          className={
            dark
              ? "rounded-xl border border-white/10 bg-ai-bg p-6 text-ai-fg shadow-xl"
              : "rounded-xl border border-border bg-white p-6 shadow-xl"
          }
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <SiteLogo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <NavItem label="Platform">
            <div className="grid grid-cols-4 gap-4">
              {brandList.map((brand) => {
                const Icon = brand.icon
                return (
                  <Link
                    key={brand.slug}
                    href={brand.href}
                    className="rounded-lg border border-border p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${brand.bg} ${brand.text}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="block font-bold text-fg">{brand.name}</span>
                    <span className="mt-1 block text-sm leading-6 text-fg-muted">
                      {brand.description}
                    </span>
                  </Link>
                )
              })}
            </div>
            <div className="mt-5 flex gap-5 border-t border-border pt-4 text-sm font-semibold">
              <Link href="/features">Features</Link>
              <Link href="/integrations">Integrations</Link>
              <Link href="/platform">Platform Overview</Link>
            </div>
          </NavItem>
          <NavItem label="Solutions">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-fg-subtle">
                  Use Cases
                </p>
                <div className="grid gap-2">
                  {useCases.map(([label, href]) => (
                    <Link key={href} href={href} className="text-sm font-semibold">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-fg-subtle">
                  Industries
                </p>
                <div className="grid gap-2">
                  {industries.map(([label, href]) => (
                    <Link key={href} href={href} className="text-sm font-semibold">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/case-studies"
                className="rounded-lg bg-brand-listerr-50 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
                  Featured
                </p>
                <p className="mt-3 text-lg font-bold text-fg">
                  See how Indian brands lift repeat commerce with Stories.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-listerr-700">
                  Latest case study <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </NavItem>
          <NavItem label="Listerr AI" dark>
            <div className="grid gap-3">
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ai-accent text-ai-bg">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold">Commerce that talks, listens, and sells.</p>
                  <p className="text-sm text-white/70">Built for Indian languages and Indian commerce.</p>
                </div>
              </div>
              {aiLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-white/86 hover:bg-white/10"
                >
                  {label}
                </Link>
              ))}
              <Button asChild variant="ai" className="mt-3 w-fit">
                <Link href="/contact">Book AI Demo</Link>
              </Button>
            </div>
          </NavItem>
          <NavItem label="Resources">
            <div className="grid min-w-56 gap-2">
              {[
                ["Blog", "/blog"],
                ["Case Studies", "/case-studies"],
                ["Documentation", "/docs"],
                ["Changelog", "/changelog"],
                ["Storyboard Templates", "/storyboard/templates"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-surface-sunken">
                  {label}
                </Link>
              ))}
            </div>
          </NavItem>
          <NavItem label="Company">
            <div className="grid min-w-52 gap-2">
              {[
                ["About", "/about"],
                ["Careers", "/careers"],
                ["Contact", "/contact"],
                ["Partners", "/partners"],
                ["Press Kit", "/press-kit"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-surface-sunken">
                  {label}
                </Link>
              ))}
            </div>
          </NavItem>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild variant="listerr">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}
