"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Linkedin, Youtube, PhoneCall } from "lucide-react"

import { SiteLogo } from "@/components/site/logo"

const columns = [
  {
    title: "Platform",
    links: [
      ["Listerr", "/listerr"],
      ["Seller Studio", "/seller-studio"],
      ["Listerr Network", "/network"],
      ["Storyboard", "/storyboard"],
      ["Features", "/features"],
      ["Integrations (35+)", "/integrations"],
    ],
  },
  {
    title: "AI Hardware",
    links: [
      ["AI Camera Series", "/hardware/ai-cameras"],
      ["Turret AI Camera", "/hardware/ai-cameras/turret"],
      ["Dome AI Camera", "/hardware/ai-cameras/dome"],
      ["Kitchen Hygiene Camera", "/hardware/ai-cameras/kitchen-hygiene"],
      ["Bullet AI Camera", "/hardware/ai-cameras/bullet"],
      ["360° Fisheye Camera", "/hardware/ai-cameras/fisheye"],
      ["Vision AI Edge Box", "/hardware/ai-cameras/edge-box"],
    ],
  },
  {
    title: "Use Cases",
    links: [
      ["Stories & Video", "/use-cases/stories"],
      ["Reels & Commerce", "/use-cases/reels"],
      ["Customer Lists", "/use-cases/customer-lists"],
      ["Gamification", "/use-cases/gamification"],
      ["AI Personalisation", "/use-cases/ai-personalisation"],
      ["Smart Flows", "/use-cases/smart-flows"],
      ["Shopify", "/use-cases/shopify"],
    ],
  },
  {
    title: "Listerr AI",
    links: [
      ["AI Calling", "/ai/ai-calling"],
      ["Text Ordering", "/ai/text-ordering"],
      ["Voice Ordering", "/ai/voice-ordering"],
      ["Listerr Order", "/ai/listerr-order"],
      ["AI Cataloging", "/ai/content-cataloging"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Careers", "/careers"],
      ["Blog", "/blog"],
      ["Case Studies", "/case-studies"],
      ["Docs", "/docs"],
      ["Contact", "/contact"],
    ],
  },
]

export function SiteFooter() {
  const pathname = usePathname()
  if (pathname?.startsWith("/v2")) return null

  return (
    <footer className="border-t border-border bg-surface-raised">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-1">
            <SiteLogo />
            <p className="mt-4 text-sm leading-6 text-fg-muted">
              India&apos;s Commerce Engagement OS for Vision AI, Digital Signage, Stories, Reels, and Smart Flows.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                ["LinkedIn", Linkedin],
                ["Instagram", Instagram],
                ["YouTube", Youtube],
              ].map(([label, Icon]) => (
                <Link
                  key={String(label)}
                  href="/"
                  aria-label={String(label)}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-white text-fg-muted hover:text-fg"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <p className="mt-5 inline-flex rounded-full bg-brand-listerr-50 px-3 py-1 text-xs font-bold text-brand-listerr-700">
              Made in India
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold text-fg">{column.title}</h2>
              <div className="mt-4 grid gap-2.5">
                {column.links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-xs text-fg-muted hover:text-fg font-medium"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact row from catalogue */}
        <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-white p-6 sm:grid-cols-2 lg:grid-cols-4 shadow-xs">
          <div>
            <p className="text-sm font-bold text-fg">Contact Us</p>
            <p className="mt-1 text-xs font-semibold text-fg">Orifinity Private Limited (Listerr)</p>
            <p className="mt-0.5 text-xs text-fg-muted">See more. Serve better.</p>
          </div>
          <div className="text-xs text-fg-muted leading-5">
            <p className="font-bold text-fg text-[11px] uppercase tracking-wider mb-1">Corporate Office</p>
            Tilak Tower, Mansarovar, Jaipur, Rajasthan
          </div>
          <div className="text-xs text-fg-muted leading-5">
            <p className="font-bold text-fg text-[11px] uppercase tracking-wider mb-1">Email</p>
            <a href="mailto:support@listerr.in" className="text-brand-listerr-700 font-bold hover:underline">
              support@listerr.in
            </a>
          </div>
          <div className="text-xs text-fg-muted leading-5">
            <p className="font-bold text-fg text-[11px] uppercase tracking-wider mb-1">Direct Phone / Feasibility</p>
            <a href="tel:+919145989198" className="inline-flex items-center gap-1 font-bold text-fg hover:text-brand-listerr-700">
              <PhoneCall className="h-3.5 w-3.5 text-brand-listerr-600" /> +91 9145989198
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-fg-muted md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <p>© 2026 Orifinity Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-xs font-medium">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/refund">Refund Policy</Link>
            <Link href="/cancellation">Cancellation Policy</Link>
            <Link href="/status">System Status</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
