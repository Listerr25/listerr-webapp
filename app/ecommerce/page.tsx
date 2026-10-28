import type { Metadata } from "next"
import Link from "next/link"
import {
  ShoppingBag,
  QrCode,
  Store,
  Share2,
  MapPin,
  Sparkles,
  Layers,
  Bot,
  Inbox,
  Tags,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Direct E-Commerce & QR Ordering",
  description: "Sell everywhere with 0% commission. Table QR, direct web store, WhatsApp ordering, shoppable catalogs, and unified OMS inbox.",
  alternates: {
    canonical: "/ecommerce",
  },
}

const ECOM_FEATURES = [
  {
    id: "catalogs",
    title: "Shoppable Digital Catalogs",
    desc: "Interactive lookbooks and digital menus that load in under 2 seconds. In-catalog one-tap add-to-cart with size/color variants and real-time inventory sync.",
    icon: ShoppingBag,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "qr-ordering",
    title: "Table & In-Store QR Ordering",
    desc: "Dine-in guests and retail shoppers scan a branded table or counter QR. Orders route straight to POS/billing with zero app download and zero staff wait times.",
    icon: QrCode,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "online-store",
    title: "0% Commission Direct Online Store",
    desc: "Your branded web store for takeaway and local delivery. Eliminate 25-30% aggregator commissions. Accept UPI, cards, and COD directly into your bank.",
    icon: Store,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "social-commerce",
    title: "Social Commerce & Instagram Drops",
    desc: "Turn Instagram reels and stories into instant checkout links. Share automated product drop alerts to WhatsApp groups and broadcast channels.",
    icon: Share2,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "maps-seo",
    title: "Local SEO & Google Maps Sync",
    desc: "Automatic schema generation and Google Business Profile ordering link synchronization so nearby searchers order directly from your store.",
    icon: MapPin,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "ads-ai",
    title: "ads-ai Studio",
    desc: "Generate studio-grade photoshoots, festive backdrops, and promotional video clips from a single product snap. Built for high-CTR Meta ad campaigns.",
    icon: Sparkles,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "network",
    title: "Listerr Network Discovery",
    desc: "Tap into regional consumer affinity loops. Cross-promote with non-competing local merchants to acquire high-intent buyers without ad spend.",
    icon: Layers,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "ai-ordering",
    title: "AI WhatsApp & Voice Ordering",
    desc: "Autonomous conversational AI bot that understands food preferences, item customizations, and addresses via text or voice clips in Hindi & English.",
    icon: Bot,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "oms",
    title: "Unified Multi-Channel OMS Inbox",
    desc: "One single order screen consolidating table QR, online takeaway, WhatsApp chat orders, and phone orders with direct kitchen ticket dispatch.",
    icon: Inbox,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "catalog-manager",
    title: "AI-Tagged Catalog Manager",
    desc: "Bulk upload CSV or scan paper menus. AI auto-tags categories, dietary badges (Jain, Vegan, Gluten-free), and generates high-converting item descriptions.",
    icon: Tags,
    accent: "bg-blue-50 text-blue-700",
  },
]

export default function V2EcommercePage() {
  return (
    <div className="py-12 sm:py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <ShoppingBag className="h-3.5 w-3.5 text-blue-600" />
            01 · Direct E-Commerce Platform
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            Sell Everywhere. Pay Zero Aggregator Commission.
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            From table QR ordering to shoppable lookbooks and conversational WhatsApp checkout. Every direct sale keeps 100% of the customer margin in your bank.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOM_FEATURES.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                id={item.id}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold ${item.accent} border border-blue-100`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-blue-950">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-blue-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                  <span className="text-blue-600 font-bold">0% Commission</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-blue-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-lg shadow-blue-600/15">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Ready to stop paying 25–30% aggregator cuts?
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Launch your direct ordering QR & web store in 24 hours. Pre-integrated with Petpooja, Paytm Soundbox, and UPI QR.
          </p>
          <div className="pt-2">
            <Link href="/pricing">
              <Button className="bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3 rounded-xl text-sm shadow-md">
                View The One Plan (₹4,999/mo)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
