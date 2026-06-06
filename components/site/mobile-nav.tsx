"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SiteLogo } from "@/components/site/logo"

const groups = [
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
    title: "Solutions",
    links: [
      ["Stories", "/use-cases/stories"],
      ["Reels & Video", "/use-cases/reels"],
      ["Customer Lists", "/use-cases/customer-lists"],
      ["Shopify Growth", "/use-cases/shopify"],
      ["Industries", "/industries/ecommerce"],
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
      ["Pricing", "/pricing"],
      ["Blog", "/blog"],
      ["Case Studies", "/case-studies"],
      ["Docs", "/docs"],
      ["Contact", "/contact"],
    ],
  },
]

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full max-w-md flex-col">
        <SheetHeader className="text-left">
          <SheetTitle>
            <SiteLogo />
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex-1 space-y-8 overflow-y-auto">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-fg-muted">
                {group.title}
              </p>
              <div className="grid gap-2">
                {group.links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-md px-2 py-2 text-base font-semibold text-fg hover:bg-surface-sunken"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="border-t border-border pt-5">
          <Button asChild variant="listerr" className="w-full">
            <Link href="/access">JOIN LISTERR</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
