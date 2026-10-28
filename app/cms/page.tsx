import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Tv,
  RotateCcw,
  UtensilsCrossed,
  Sparkles,
  SlidersHorizontal,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Digital Signage Cloud CMS",
  description: "Screens that update themselves. Cloud remote management, USB offline software, Petpooja POS-driven menu boards, and kitchen displays.",
  alternates: {
    canonical: "/cms",
  },
}

const CMS_FEATURES = [
  {
    id: "cloud-cms",
    title: "Listerr Cloud Signage CMS",
    desc: "Remote multi-outlet content distribution. Push video reels, promotional banners, and scheduled dayparting (breakfast, lunch, dinner) to 1 or 500+ screens in seconds.",
    icon: Cloud,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "offline-cms",
    title: "Offline USB (Pendrive) Software",
    desc: "Built-in offline engine: content loops automatically from local USB storage. If store Wi-Fi cuts off, screens never flicker or show blue error screens.",
    icon: RotateCcw,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "pos-screens",
    title: "POS-Driven Live Menu Boards",
    desc: "Direct integration with Petpooja restaurant POS. Price edits reflect on screens in real time; when an item runs out at the counter, it strikes off the screen automatically.",
    icon: UtensilsCrossed,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "ai-autopost",
    title: "AI Auto-Posting on Signage",
    desc: "Auto-converts your best Instagram reels and new menu item photos into high-definition portrait display visuals without manual graphic design work.",
    icon: Sparkles,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "staff-screens",
    title: "Staff & Back-Office KDS Displays",
    desc: "Kitchen display system (KDS) screens showing live ticket pacing, order ready status for counter pickup, and kitchen station preparation queues.",
    icon: SlidersHorizontal,
    accent: "bg-blue-50 text-blue-700",
  },
]

export default function V2CmsPage() {
  return (
    <div className="py-12 sm:py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <Tv className="h-3.5 w-3.5 text-blue-600" />
            03 · Digital Signage CMS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            Screens That Update Themselves Anywhere.
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Eliminate expensive printed paper menus and manual pen drive updates. Manage commercial screens across all your branches from a single dashboard with 100% offline playback backup.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CMS_FEATURES.map((item) => {
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
                  <span className="text-blue-600 font-bold">100% Offline Redundancy</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Commercial Screen Lineup with Photos */}
        <div className="mt-16 rounded-3xl border border-blue-200 bg-gradient-to-b from-blue-50/40 via-white to-white p-8 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Hardware + CMS Synergy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight mt-2">
                Certified Listerr One Commercial Screens
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Every screen comes pre-installed with Listerr Signage Player, VESA heavy-duty mount, and 1-year replacement warranty.
              </p>
            </div>
            <Link href="/hardware">
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 text-xs font-bold rounded-xl shrink-0">
                View Full Hardware Catalog (9 Models) →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-blue-100 bg-white p-4 space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-[4/3] rounded-xl bg-slate-50 border border-blue-100 p-3 overflow-hidden flex items-center justify-center mb-3">
                  <Image
                    src="/images/hardware/listerr-one/image00014.png"
                    alt="Digital Menu Board Landscape"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  Over-the-Counter
                </span>
                <h3 className="text-base font-black text-blue-950 mt-1">
                  Landscape Digital Menu Board
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  43", 50", 55", 65" 4K UHD. 500 nits anti-glare panel for crisp visibility under bright restaurant lighting.
                </p>
              </div>
              <a
                href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20a%20quote%20for%20the%20Landscape%20Menu%20Board"
                target="_blank"
                rel="noreferrer"
                className="block pt-2"
              >
                <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 bg-white">
                  Request Screen Quote
                </Button>
              </a>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-4 space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-[4/3] rounded-xl bg-slate-50 border border-blue-100 p-3 overflow-hidden flex items-center justify-center mb-3">
                  <Image
                    src="/images/hardware/listerr-one/image00004.png"
                    alt="Floor-Standing Touch Totem"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  Interactive Totem
                </span>
                <h3 className="text-base font-black text-blue-950 mt-1">
                  Commercial Floor Totem Kiosk
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  43" to 65" 10-point capacitive touch kiosk with weighted steel base and dual stereo speakers for retail promos.
                </p>
              </div>
              <a
                href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20a%20quote%20for%20the%20Floor%20Totem%20Kiosk"
                target="_blank"
                rel="noreferrer"
                className="block pt-2"
              >
                <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 bg-white">
                  Request Totem Quote
                </Button>
              </a>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-4 space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-[4/3] rounded-xl bg-slate-50 border border-blue-100 p-3 overflow-hidden flex items-center justify-center mb-3">
                  <Image
                    src="/images/hardware/listerr-one/image00015.jpeg"
                    alt="2x2 Seamless Commercial Video Wall"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  Ultra-Narrow Bezel
                </span>
                <h3 className="text-base font-black text-blue-950 mt-1">
                  2x2 Seamless Video Wall
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  110" total diagonal 4K video matrix with hydraulic pop-out push brackets and 24/7 continuous industrial rating.
                </p>
              </div>
              <a
                href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20a%20quote%20for%20the%202x2%20Commercial%20Video%20Wall"
                target="_blank"
                rel="noreferrer"
                className="block pt-2"
              >
                <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 bg-white">
                  Request Video Wall Quote
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Hardware & Software Synergy Note */}
        <div className="mt-16 rounded-3xl bg-blue-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-lg shadow-blue-600/15">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Works on Any Android TV or Listerr One Commercial Display
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            1 screen license is included in The One Plan. Extra screen licenses only ₹499/month.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link href="/hardware">
              <Button className="bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3 rounded-xl text-sm shadow-md">
                Explore Listerr One Screens
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
