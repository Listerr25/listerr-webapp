import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  DollarSign,
  Check,
  CheckCircle2,
  Tv,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LISTERR_ONE_DEVICES } from "@/lib/listerr-one-hardware"

export const metadata: Metadata = {
  title: "Pricing · The One Plan · Listerr 360",
  description: "One single transparent software subscription for E-commerce + CRM with 0% commission. Commercial digital signage and AI camera factory pricing.",
}

export default function V2PricingPage() {
  return (
    <div className="py-12 sm:py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <DollarSign className="h-3.5 w-3.5 text-blue-600" />
            Unified Indian Pricing (FND-04 & FND-05)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            One Single Software Plan. Zero Commissions.
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            We retired complex MAU tiers and aggregator commission traps. One software subscription gives you unlimited table QR orders, direct web store, WhatsApp CRM, and signage software.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Main Software Card */}
          <div className="lg:col-span-7 rounded-3xl border-2 border-blue-600 bg-white p-8 sm:p-10 shadow-xl shadow-blue-600/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider py-1.5 px-6 rounded-bl-xl shadow-xs">
              Recommended Plan
            </div>

            <div>
              <div className="mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  Listerr 360 All-In-One
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-blue-950">
                The One Software Plan (FND-04)
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Everything required to run online ordering, table QR, WhatsApp CRM, and screen updates.
              </p>

              {/* Price Tag */}
              <div className="my-6 p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-blue-950">₹4,999</span>
                  <span className="text-sm font-bold text-slate-500">/ month / store</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Billed annually (or ₹5,999 on monthly billing). 0% commission on all direct orders.
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs font-semibold text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Unlimited Table QR & Direct Web Store:</strong> Unlimited customers, zero commission.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Official WhatsApp Business (WABA):</strong> Automated birthday, win-back & order tracking drops.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Petpooja POS Live Sync:</strong> Real-time menu changes, price edits, and 86 out-of-stock items.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Cloud Signage CMS:</strong> 1 Screen license included. Offline USB redundancy built-in.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Unified OMS Inbox:</strong> Consolidate table, takeaway, and WhatsApp chat orders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Customer Loyalty & Wallet:</strong> Cashback rules, reward points, and VIP tiers.</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/919119119905?text=Hi%20Listerr%2C%20I%20want%20to%20subscribe%20to%20The%20One%20Software%20Plan%20for%20my%20store"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm shadow-md shadow-blue-600/20">
                  Start 14-Day Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Hardware & Add-ons Card */}
          <div className="lg:col-span-5 rounded-3xl border border-blue-100 bg-white p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  Commercial Hardware
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-blue-950">
                Listerr One Displays & Vision AI
              </h2>
              <p className="text-xs text-slate-600 mt-1 mb-4">
                Commercial displays, kiosks, and cameras dispatched from Jaipur.
              </p>

              {/* Real Hardware Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {LISTERR_ONE_DEVICES.slice(0, 4).map((dev) => (
                  <div
                    key={dev.id}
                    className="relative aspect-square rounded-xl bg-slate-50 border border-blue-100 p-1.5 overflow-hidden flex items-center justify-center group"
                    title={dev.name}
                  >
                    <Image
                      src={dev.image}
                      alt={dev.name}
                      fill
                      className="object-contain p-1 transition group-hover:scale-110"
                      sizes="90px"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-blue-100 flex justify-between items-center">
                  <span className="font-bold text-slate-800">Additional Screen CMS License</span>
                  <strong className="text-blue-700">₹499 / mo</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-blue-100 flex justify-between items-center">
                  <span className="font-bold text-slate-800">43" Ultra-Slim Wall Display (4K)</span>
                  <strong className="text-blue-700 font-bold">Factory Quote</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-blue-100 flex justify-between items-center">
                  <span className="font-bold text-slate-800">55" Commercial Display (500 nits)</span>
                  <strong className="text-blue-700 font-bold">Factory Quote</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-blue-100 flex justify-between items-center">
                  <span className="font-bold text-slate-800">55" Touch Self-Checkout Kiosk</span>
                  <strong className="text-blue-700 font-bold">Factory Quote</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-blue-100 flex justify-between items-center">
                  <span className="font-bold text-slate-800">Turret & Dome Vision AI Cameras</span>
                  <strong className="text-blue-700 font-bold">Factory Quote</strong>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-[11px] text-blue-900 flex items-start gap-2 mt-4">
                <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Hardware includes 1-year replacement warranty, VESA mounting kit, and full GST input tax invoice.
                </span>
              </div>
            </div>

            <div className="pt-8 space-y-2.5">
              <Link href="/hardware" className="block">
                <Button className="w-full text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 shadow-sm">
                  <Tv className="mr-2 h-4 w-4" />
                  View All 9 Models & Photo Catalog →
                </Button>
              </Link>
              <a
                href="https://wa.me/919119119905?text=Hi%20Listerr%2C%20I%20want%20an%20official%20quote%20for%20screens%20and%20hardware"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 py-2.5">
                  Request Instant WhatsApp Quote
                </Button>
              </a>
              <div className="text-center">
                <a
                  href="tel:+919119119905"
                  className="text-[11px] font-bold text-slate-500 hover:text-blue-700"
                >
                  Or call sales: +91 91191 19905
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
