import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Shirt,
  ShoppingBag,
  Sparkles,
  MessageCircle,
  Tv,
  CheckCircle2,
  ArrowRight,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Fashion & Apparel Commerce Solution",
  description: "The fashion commerce operating playbook. Shoppable lookbooks, zero-commission store, Instagram drops, and in-store interactive kiosks.",
  alternates: {
    canonical: "/industries/fashion",
  },
}

export default function V2FashionIndustryPage() {
  return (
    <div className="py-12 sm:py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <Shirt className="h-3.5 w-3.5 text-blue-600" />
            Listerr Fashion & Apparel Solution
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            Built for Apparel Brands, Boutiques & Cloth Sellers.
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            From Jaipur textile houses to multi-outlet fashion boutiques. Turn Instagram followers into instant WhatsApp buyers with shoppable video lookbooks and zero marketplace fees.
          </p>
        </div>

        {/* 4 Pillars for Fashion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">Digital Catalogs</span>
                <h3 className="text-lg font-black text-blue-950">Shoppable Lookbooks with Instant Variants</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              High-resolution fabric closeups and model reels. Buyers select their size (S, M, L, XL, XXL) and color with one tap and complete payment over instant UPI QR.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">ads-ai Studio</span>
                <h3 className="text-lg font-black text-blue-950">One Product Snap → 10 Ad Visuals</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Take one photo on your phone. Listerr ads-ai generates studio fashion backdrops, festival collection banners (Diwali, Eid, Wedding), and social clips in minutes.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">WhatsApp Retention</span>
                <h3 className="text-lg font-black text-blue-950">VIP Early Access & Flash Sale Drops</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Send exclusive festive previews and coupon drops to your high-AOV repeat buyers via official Meta WhatsApp Business templates.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold">
                <Tv className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">In-Store Kiosks</span>
                <h3 className="text-lg font-black text-blue-950">Endless Aisle Touch Screens</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Place Listerr One touch kiosks in your retail boutique so shoppers can browse out-of-stock sizes and get items delivered straight to their doorstep.
            </p>
          </div>
        </div>

        {/* In-Store Displays for Fashion Boutiques */}
        <div className="mb-16 rounded-3xl border border-blue-200 bg-gradient-to-b from-blue-50/40 via-white to-white p-8 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Boutique & Retail Hardware (Listerr One)
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight mt-2">
                In-Store Screens & Interactive Totems for Boutiques
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Showcase runway videos, endless aisle catalogs, and promotional discount drops right on the retail floor.
              </p>
            </div>
            <Link href="/hardware">
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 text-xs font-bold rounded-xl shrink-0">
                View All Hardware Models →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-blue-100 bg-white p-4 space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-[4/3] rounded-xl bg-slate-50 border border-blue-100 p-3 overflow-hidden flex items-center justify-center mb-3">
                  <Image
                    src="/images/hardware/listerr-one/image00004.png"
                    alt="Commercial Floor Totem Kiosk"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  Endless Aisle
                </span>
                <h3 className="text-base font-black text-blue-950 mt-1">
                  Floor Totem Lookbook Screen
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  43" to 65" 10-point capacitive touch kiosk. Customers browse out-of-stock sizes and place orders for doorstep delivery.
                </p>
              </div>
              <a
                href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20a%20quote%20for%20the%20Fashion%20Floor%20Totem"
                target="_blank"
                rel="noreferrer"
                className="block pt-2"
              >
                <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 bg-white">
                  Get Totem Quote
                </Button>
              </a>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-4 space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-[4/3] rounded-xl bg-slate-50 border border-blue-100 p-3 overflow-hidden flex items-center justify-center mb-3">
                  <Image
                    src="/images/hardware/listerr-one/image00001.png"
                    alt="Portable A-Frame Easel Screen"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  Store Entrance
                </span>
                <h3 className="text-base font-black text-blue-950 mt-1">
                  Portable A-Frame Easel Screen
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Movable, foldable 43" easel screen with 450 nits high ambient display. Perfect for boutique entryway seasonal sales.
                </p>
              </div>
              <a
                href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20a%20quote%20for%20the%20Portable%20A-Frame%20Easel"
                target="_blank"
                rel="noreferrer"
                className="block pt-2"
              >
                <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 bg-white">
                  Get A-Frame Quote
                </Button>
              </a>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-4 space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-[4/3] rounded-xl bg-slate-50 border border-blue-100 p-3 overflow-hidden flex items-center justify-center mb-3">
                  <Image
                    src="/images/hardware/listerr-one/image00002.png"
                    alt="Commercial Portrait Wall Display"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  Storefront Wall
                </span>
                <h3 className="text-base font-black text-blue-950 mt-1">
                  Vertical Commercial Wall Display
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Flush mount digital poster with metal bezels and 24/7 continuous operation for fashion brand video campaign loops.
                </p>
              </div>
              <a
                href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20a%20quote%20for%20the%20Vertical%20Wall%20Display"
                target="_blank"
                rel="noreferrer"
                className="block pt-2"
              >
                <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 bg-white">
                  Get Wall Screen Quote
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-blue-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-lg shadow-blue-600/15">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Launch Your 0% Commission Fashion Store
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Get your WhatsApp ordering lookbook and inventory catalog set up within 24 hours.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20am%20a%20fashion%20seller%20and%20want%20to%20set%20up%20my%20store"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3 rounded-xl text-sm shadow-md">
                Chat on WhatsApp (+91 91459 89198)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
