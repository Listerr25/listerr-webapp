"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ShoppingBag,
  Users,
  Tv,
  Cpu,
  Bot,
  DollarSign,
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
  ArrowRight,
  UtensilsCrossed,
  Shirt,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/v2/quote-modal"
import { DemoModal } from "@/components/v2/demo-modal"

export function V2Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <>
      {/* ── Top Announcement & Direct Hotline Bar (Blue-White) ── */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white text-[11px] sm:text-xs py-2 px-3 sm:px-6 border-b border-blue-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="rounded-full bg-blue-600 text-white font-extrabold px-2 py-0.5 text-[10px] tracking-wide shrink-0">
              Listerr 360
            </span>
            <span className="truncate text-blue-100">
              India&apos;s Full Commerce Loop: Orders in · Customers back · Screens update · Cameras watch
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-blue-100/90 shrink-0">
            <a
              href="tel:+919119119905"
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Phone className="h-3 w-3 text-blue-300" />
              <span>Sales: +91 91191 19905</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://wa.me/919119119905?text=Hi%20Listerr%2C%20I%20want%20to%20explore%20Listerr%20360%20for%20my%20business"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-blue-200 hover:text-white font-semibold transition"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              WhatsApp Instant Desk
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Sticky Header ── */}
      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Official Listerr Logo */}
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2 group" aria-label="Listerr 360 Home">
              <Image
                src="/images/listerr-logo-horizontal.svg"
                alt="Listerr"
                width={136}
                height={32}
                priority
                className="h-7 md:h-8 w-auto object-contain transition group-hover:opacity-90"
              />
            </Link>
            <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-extrabold text-blue-700">
              360
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {/* 01 E-COMMERCE */}
            <div className="group relative">
              <Link
                href="/ecommerce"
                className="flex h-11 items-center gap-1 rounded-md px-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition"
              >
                <ShoppingBag className="h-4 w-4 text-blue-600" />
                <span>E-commerce</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-150 absolute left-0 top-full pt-2 z-50 w-[520px]">
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-100">
                    <div>
                      <p className="font-bold text-sm text-blue-950">01 · E-commerce Engine</p>
                      <p className="text-xs text-slate-500">Sell everywhere with 0% commission.</p>
                    </div>
                    <Link
                      href="/ecommerce"
                      className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Overview <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Link
                      href="/ecommerce#catalogs"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Shoppable Digital Catalogs</p>
                      <p className="text-slate-500 text-[11px]">Interactive lookbooks under 2s</p>
                    </Link>
                    <Link
                      href="/ecommerce#qr-ordering"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Table & Counter QR</p>
                      <p className="text-slate-500 text-[11px]">Zero staff wait times</p>
                    </Link>
                    <Link
                      href="/ecommerce#online-store"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">0% Direct Online Store</p>
                      <p className="text-slate-500 text-[11px]">Direct takeaway & local delivery</p>
                    </Link>
                    <Link
                      href="/ecommerce#social-commerce"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Social Commerce</p>
                      <p className="text-slate-500 text-[11px]">Instagram & WhatsApp direct drops</p>
                    </Link>
                    <Link
                      href="/ecommerce#ai-ordering"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">AI WhatsApp & Voice Orders</p>
                      <p className="text-slate-500 text-[11px]">Conversational bot with auto-checkout</p>
                    </Link>
                    <Link
                      href="/ecommerce#oms"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Unified OMS Inbox</p>
                      <p className="text-slate-500 text-[11px]">One single pass for all channels</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 02 CRM */}
            <div className="group relative">
              <Link
                href="/crm"
                className="flex h-11 items-center gap-1 rounded-md px-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition"
              >
                <Users className="h-4 w-4 text-blue-600" />
                <span>CRM</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-150 absolute left-0 top-full pt-2 z-50 w-[480px]">
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-100">
                    <div>
                      <p className="font-bold text-sm text-blue-950">02 · CRM & Retention Engine</p>
                      <p className="text-xs text-slate-500">Bring every customer back automatically.</p>
                    </div>
                    <Link
                      href="/crm"
                      className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Overview <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Link
                      href="/crm#waba"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Official WhatsApp (WABA)</p>
                      <p className="text-slate-500 text-[11px]">Verified Meta business messaging</p>
                    </Link>
                    <Link
                      href="/crm#auto-campaigns"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Auto-Trigger Campaigns</p>
                      <p className="text-slate-500 text-[11px]">Birthdays, anniversaries & winbacks</p>
                    </Link>
                    <Link
                      href="/crm#rewards"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Membership & Loyalty</p>
                      <p className="text-slate-500 text-[11px]">Cashback, points & VIP tiers</p>
                    </Link>
                    <Link
                      href="/crm#analytics"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Campaign ROI Analytics</p>
                      <p className="text-slate-500 text-[11px]">Real GMV attribution per rupee spent</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 03 CMS */}
            <div className="group relative">
              <Link
                href="/cms"
                className="flex h-11 items-center gap-1 rounded-md px-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition"
              >
                <Tv className="h-4 w-4 text-blue-600" />
                <span>CMS</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-150 absolute left-0 top-full pt-2 z-50 w-[480px]">
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-100">
                    <div>
                      <p className="font-bold text-sm text-blue-950">03 · Digital Signage CMS</p>
                      <p className="text-xs text-slate-500">Screens that update themselves anywhere.</p>
                    </div>
                    <Link
                      href="/cms"
                      className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Overview <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Link
                      href="/cms#cloud-cms"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Cloud Signage CMS</p>
                      <p className="text-slate-500 text-[11px]">Push videos & menus across 100+ stores</p>
                    </Link>
                    <Link
                      href="/cms#offline-cms"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">USB Offline Software</p>
                      <p className="text-slate-500 text-[11px]">Zero internet playback redundancy</p>
                    </Link>
                    <Link
                      href="/cms#pos-screens"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">POS-Driven Menu Boards</p>
                      <p className="text-slate-500 text-[11px]">Auto 86 out-of-stock items via Petpooja</p>
                    </Link>
                    <Link
                      href="/cms#staff-screens"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Staff & Kitchen KDS</p>
                      <p className="text-slate-500 text-[11px]">Live kitchen pacing & order ready boards</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 04 IOT & HARDWARE */}
            <div className="group relative">
              <Link
                href="/hardware"
                className="flex h-11 items-center gap-1 rounded-md px-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition"
              >
                <Cpu className="h-4 w-4 text-blue-600" />
                <span>IoT & Hardware</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-150 absolute left-0 top-full pt-2 z-50 w-[540px]">
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-100">
                    <div>
                      <p className="font-bold text-sm text-blue-950">04 · Listerr One Hardware</p>
                      <p className="text-xs text-slate-500">Commercial displays, kiosks & Vision AI cameras.</p>
                    </div>
                    <Link
                      href="/hardware"
                      className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Hardware Hub <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Link
                      href="/hardware#kiosks"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Floor-Standing Touch Kiosks</p>
                      <p className="text-slate-500 text-[11px]">43", 55", 65" interactive self-checkout</p>
                    </Link>
                    <Link
                      href="/hardware#wall-screens"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Ultra-Slim Wall Displays</p>
                      <p className="text-slate-500 text-[11px]">4K 500 nits commercial 24/7 panels</p>
                    </Link>
                    <Link
                      href="/hardware#cameras"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Vision AI Cameras Series</p>
                      <p className="text-slate-500 text-[11px]">Turret, Dome, Kitchen Hygiene & Bullets</p>
                    </Link>
                    <Link
                      href="/hardware#edge-box"
                      className="p-2.5 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition"
                    >
                      <p className="font-bold text-blue-950">Edge Vision AI Box</p>
                      <p className="text-slate-500 text-[11px]">Retrofit existing in-store CCTV cameras</p>
                    </Link>
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-100 flex items-center justify-between text-xs bg-blue-50 p-2.5 rounded-xl">
                    <span className="text-blue-950 font-medium">Looking for commercial screens or cameras?</span>
                    <button
                      onClick={() => setQuoteOpen(true)}
                      className="font-bold text-blue-700 hover:text-blue-900 underline"
                    >
                      Request Quote →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ADVANCED */}
            <Link
              href="/advanced"
              className="flex h-11 items-center gap-1 rounded-md px-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition"
            >
              <Bot className="h-4 w-4 text-blue-600" />
              <span>Advanced</span>
            </Link>

            {/* INDUSTRIES */}
            <div className="group relative">
              <button className="flex h-11 items-center gap-1 rounded-md px-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition">
                <span>Industries</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-150 absolute left-0 top-full pt-2 z-50 w-[420px]">
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xl">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Industry Blueprints
                  </p>
                  <div className="space-y-1 text-xs">
                    <Link
                      href="/industries/restaurants"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition"
                    >
                      <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                        <UtensilsCrossed className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-bold text-blue-950">Restaurants & Cafés (Listerr 360)</p>
                        <p className="text-slate-500 text-[11px]">QR dining, Petpooja POS sync & kitchen cameras</p>
                      </div>
                    </Link>
                    <Link
                      href="/industries/fashion"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition"
                    >
                      <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                        <Shirt className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-bold text-blue-950">Fashion & Cloth Sellers</p>
                        <p className="text-slate-500 text-[11px]">Shoppable lookbooks, drops & in-store totems</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* PRICING */}
            <Link
              href="/pricing"
              className="flex h-11 items-center gap-1 rounded-md px-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition"
            >
              <DollarSign className="h-4 w-4 text-blue-600" />
              <span>Pricing</span>
            </Link>
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuoteOpen(true)}
              className="border-blue-200 text-blue-700 hover:bg-blue-50 text-xs font-bold rounded-xl"
            >
              Request Quote
            </Button>
            <Button
              size="sm"
              onClick={() => setDemoOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs"
            >
              Book 360 Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-blue-950 hover:bg-blue-50 border border-blue-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ── Mobile Responsive Drawer Menu ── */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-blue-100 bg-white px-4 py-5 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <Link
                href="/ecommerce"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-bold text-sm text-blue-950 hover:bg-blue-50 transition"
              >
                <span className="flex items-center gap-2.5">
                  <ShoppingBag className="h-4 w-4 text-blue-600" /> 01 E-commerce
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </Link>
              <Link
                href="/crm"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-bold text-sm text-blue-950 hover:bg-blue-50 transition"
              >
                <span className="flex items-center gap-2.5">
                  <Users className="h-4 w-4 text-blue-600" /> 02 CRM & WhatsApp
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </Link>
              <Link
                href="/cms"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-bold text-sm text-blue-950 hover:bg-blue-50 transition"
              >
                <span className="flex items-center gap-2.5">
                  <Tv className="h-4 w-4 text-blue-600" /> 03 Signage CMS
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </Link>
              <Link
                href="/hardware"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-bold text-sm text-blue-950 hover:bg-blue-50 transition"
              >
                <span className="flex items-center gap-2.5">
                  <Cpu className="h-4 w-4 text-blue-600" /> 04 IoT & Hardware
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </Link>
              <Link
                href="/advanced"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-bold text-sm text-blue-950 hover:bg-blue-50 transition"
              >
                <span className="flex items-center gap-2.5">
                  <Bot className="h-4 w-4 text-blue-600" /> Advanced AI
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </Link>
              <Link
                href="/industries/restaurants"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-bold text-sm text-blue-950 hover:bg-blue-50 transition"
              >
                <span className="flex items-center gap-2.5">
                  <UtensilsCrossed className="h-4 w-4 text-blue-600" /> Restaurants & Cafés
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </Link>
              <Link
                href="/industries/fashion"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-bold text-sm text-blue-950 hover:bg-blue-50 transition"
              >
                <span className="flex items-center gap-2.5">
                  <Shirt className="h-4 w-4 text-blue-600" /> Fashion & Boutiques
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl font-bold text-sm text-blue-950 hover:bg-blue-50 transition"
              >
                <span className="flex items-center gap-2.5">
                  <DollarSign className="h-4 w-4 text-blue-600" /> Unified Pricing
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </Link>
            </div>

            <div className="pt-3 border-t border-blue-100 grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setQuoteOpen(true)
                }}
                className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                Get Quote
              </Button>
              <Button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setDemoOpen(true)
                }}
                className="w-full text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs"
              >
                Book Demo
              </Button>
            </div>

            <div className="pt-2 text-center text-xs text-slate-500">
              <a href="tel:+919119119905" className="font-semibold text-blue-700 hover:underline">
                Call Sales Desk: +91 91191 19905
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}
