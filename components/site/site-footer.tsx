import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"

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
      ["Integrations", "/integrations"],
    ],
  },
  {
    title: "Use Cases",
    links: [
      ["Stories", "/use-cases/stories"],
      ["Reels", "/use-cases/reels"],
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
  return (
    <footer className="border-t border-border bg-surface-raised">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div>
            <SiteLogo />
            <p className="mt-4 text-sm leading-6 text-fg-muted">
              India&apos;s Commerce Engagement OS for Stories, Reels, AI Ordering,
              and Smart Flows.
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
              <div className="mt-4 grid gap-3">
                {column.links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-fg-muted hover:text-fg"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="mt-10 grid gap-6 rounded-xl border border-border bg-white p-6 sm:grid-cols-3 md:grid-cols-4">
          <div>
            <p className="text-sm font-bold text-fg">Contact Us</p>
            <p className="mt-1 text-xs font-semibold text-fg">Orifinity Private Limited</p>
          </div>
          <div className="text-xs text-fg-muted leading-5">
            <p className="font-bold text-fg text-[11px] uppercase tracking-wider mb-1">Head Office</p>
            Opp. OLD PNB bank, Phulera - 303338
          </div>
          <div className="text-xs text-fg-muted leading-5">
            <p className="font-bold text-fg text-[11px] uppercase tracking-wider mb-1">Corporate Office</p>
            Tilak Tower, Mansarovar, Jaipur
          </div>
          <div className="text-xs text-fg-muted leading-5">
            <p className="font-bold text-fg text-[11px] uppercase tracking-wider mb-1">Email</p>
            <a href="mailto:marketplace@listerr.in" className="text-brand-listerr-700 font-bold hover:underline">marketplace@listerr.in</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-fg-muted md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <p>© 2026 Orifinity Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/status">Status</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
