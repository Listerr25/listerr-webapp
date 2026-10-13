"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { ArrowRight, Bot, Camera, ChevronDown, Cpu, Sparkles, Zap } from "lucide-react"

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

const cameraModels = [
  { name: "Turret AI Camera", href: "/hardware/ai-cameras/turret", desc: "Counters, queues & POS" },
  { name: "Dome AI Camera", href: "/hardware/ai-cameras/dome", desc: "Dining tables & turnover" },
  { name: "Kitchen Hygiene Camera", href: "/hardware/ai-cameras/kitchen-hygiene", desc: "Caps, gloves & food safety" },
  { name: "Bullet AI Camera", href: "/hardware/ai-cameras/bullet", desc: "Entrances & drive-thrus" },
  { name: "360° Fisheye AI Camera", href: "/hardware/ai-cameras/fisheye", desc: "Whole-floor heatmaps" },
  { name: "Vision AI Edge Box", href: "/hardware/ai-cameras/edge-box", desc: "CCTV retrofit appliance" },
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
  const pathname = usePathname()
  if (pathname?.startsWith("/v2")) return null

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
          {/* AI Cameras Dropdown */}
          <NavItem label="AI Cameras">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 grid grid-cols-2 gap-3">
                {cameraModels.map((cam) => (
                  <Link
                    key={cam.href}
                    href={cam.href}
                    className="rounded-lg border border-border/80 p-3.5 transition hover:border-brand-listerr-400 hover:bg-brand-listerr-50/30"
                  >
                    <p className="font-bold text-sm text-fg">{cam.name}</p>
                    <p className="mt-1 text-xs text-fg-muted">{cam.desc}</p>
                  </Link>
                ))}
              </div>

              <div className="rounded-xl bg-gradient-to-br from-brand-listerr-600 to-indigo-700 p-5 text-white flex flex-col justify-between">
                <div>
                  <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    Listerr One Series
                  </span>
                  <p className="mt-3 text-base font-bold">
                    Vision AI Built for Indian Restaurants
                  </p>
                  <p className="mt-1 text-xs text-brand-listerr-100 leading-relaxed">
                    Turns standard CCTV into live footfall, queue, table turnover, and hygiene
                    alerts.
                  </p>
                </div>
                <Link
                  href="/hardware/ai-cameras"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-white hover:underline"
                >
                  Explore Complete Camera Catalogue <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs font-semibold">
              <Link href="/hardware/ai-cameras#outlet-configurator" className="text-brand-listerr-600 hover:underline">
                Configure Your Outlet & Estimate ROI
              </Link>
              <Link href="/integrations" className="text-fg-muted hover:text-fg">
                View 35+ POS, CCTV & Signage Integrations
              </Link>
            </div>
          </NavItem>

          {/* Integrations Direct Link */}
          <Link
            href="/integrations"
            className="flex h-11 items-center gap-1.5 rounded-md px-3 text-sm font-semibold text-fg-muted transition hover:bg-surface-sunken hover:text-fg"
          >
            Integrations
            <span className="rounded-full bg-brand-listerr-100 px-1.5 py-0.2 text-[10px] font-bold text-brand-listerr-700">
              35+
            </span>
          </Link>

          {/* Platform NavItem */}
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
              <Link href="/hardware/ai-cameras">AI Hardware & Vision</Link>
            </div>
          </NavItem>

          {/* Solutions NavItem */}
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
                  See how Indian brands lift repeat commerce with Stories & Vision AI.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-listerr-700">
                  Latest case study <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </NavItem>

          {/* Listerr AI NavItem */}
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

          {/* Resources NavItem */}
          <NavItem label="Resources">
            <div className="grid min-w-56 gap-2">
              {[
                ["Blog", "/blog"],
                ["Case Studies", "/case-studies"],
                ["Documentation", "/docs"],
                ["Integrations Directory", "/integrations"],
                ["Changelog", "/changelog"],
                ["Storyboard Templates", "/storyboard/templates"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-surface-sunken">
                  {label}
                </Link>
              ))}
            </div>
          </NavItem>

          {/* Company NavItem */}
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
          <Button asChild variant="outline" size="sm" className="font-semibold">
            <a href="tel:+919145989198">9145989198</a>
          </Button>
          <Button asChild variant="listerr">
            <Link href="/access">JOIN LISTERR</Link>
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}
