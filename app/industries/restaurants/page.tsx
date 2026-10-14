import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  UtensilsCrossed,
  QrCode,
  Tv,
  MessageCircle,
  Camera,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Restaurants & Cafés · Listerr 360 Solution",
  description: "The complete restaurant operating system. Table QR ordering, Petpooja POS sync, WhatsApp re-engagement, and kitchen hygiene vision cameras.",
}

export default function V2RestaurantIndustryPage() {
  return (
    <div className="py-12 sm:py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <UtensilsCrossed className="h-3.5 w-3.5 text-blue-600" />
            IND-01 · Listerr 360 Restaurant Blueprint (A5 Brochure)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            The Closed Loop for Restaurants, Cafés & QSR Counters.
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Eliminate high aggregator commissions and chaotic kitchen miscommunication. Seamlessly connects your table dining, Petpooja billing POS, digital menu screens, and kitchen staff cameras into one loop.
          </p>
        </div>

        {/* 4 Steps of the Restaurant Loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold">
                <QrCode className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">Stage 1 · Orders In</span>
                <h3 className="text-lg font-black text-blue-950">Table QR & Zero Commission Takeaway</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diners scan an elegant QR code on their table. The menu loads in under 2 seconds without downloading any app. Orders print directly onto your Petpooja KOT, saving 5–10 minutes of waiter running time per table.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">Stage 2 · Customers Back</span>
                <h3 className="text-lg font-black text-blue-950">Automated WhatsApp Re-ordering</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every guest who pays via table QR or takeaway is saved into your verified customer list. Send automated birthday vouchers, weekend biryani specials, and weekday lunch combos directly over official WhatsApp.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold">
                <Tv className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">Stage 3 · Screens Update</span>
                <h3 className="text-lg font-black text-blue-950">POS-Driven Digital Menu Boards</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              When a dessert sells out in Petpooja, it strikes off your counter digital display automatically. Switch between morning breakfast and evening dinner menus automatically with dayparting schedules.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold">
                <Camera className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">Stage 4 · Cameras Watch</span>
                <h3 className="text-lg font-black text-blue-950">Kitchen Hygiene & Queue Pacing AI</h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Listerr AI cameras detect kitchen staff hairnets, aprons, and gloves for food safety compliance. Counter cameras alert management when queue wait times exceed 4 minutes.
            </p>
          </div>
        </div>

        {/* Commercial Hardware for Restaurants */}
        <div className="mb-16 rounded-3xl border border-blue-200 bg-gradient-to-b from-blue-50/40 via-white to-white p-8 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Factory Restaurant Hardware Supply
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight mt-2">
                Turnkey Hardware for Dining Rooms & Counters
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Commercial displays and touch kiosks pre-configured with Petpooja POS sync and Cloud CMS.
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
                    src="/images/hardware/listerr-one/image00010.png"
                    alt="Self-Ordering Kiosk with Receipt Printer"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  QSR Self-Checkout
                </span>
                <h3 className="text-base font-black text-blue-950 mt-1">
                  Floor Kiosk with Printer
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Built-in 80mm thermal receipt printer + 10-point capacitive touch. Diners browse and order on their own.
                </p>
              </div>
              <a
                href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20a%20quote%20for%20the%20Restaurant%20Self-Ordering%20Kiosk"
                target="_blank"
                rel="noreferrer"
                className="block pt-2"
              >
                <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 bg-white">
                  Get Kiosk Quote
                </Button>
              </a>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-4 space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-[4/3] rounded-xl bg-slate-50 border border-blue-100 p-3 overflow-hidden flex items-center justify-center mb-3">
                  <Image
                    src="/images/hardware/listerr-one/image00014.png"
                    alt="Commercial Landscape Digital Menu Board"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  Over-the-Counter
                </span>
                <h3 className="text-base font-black text-blue-950 mt-1">
                  Digital Menu Board (Landscape)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  43" to 65" 4K 500 nits anti-glare screen. VESA heavy mount included. Petpooja live sync.
                </p>
              </div>
              <a
                href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20a%20quote%20for%20the%20Landscape%20Digital%20Menu%20Board"
                target="_blank"
                rel="noreferrer"
                className="block pt-2"
              >
                <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 bg-white">
                  Get Menu Board Quote
                </Button>
              </a>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-4 space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative aspect-[4/3] rounded-xl bg-slate-50 border border-blue-100 p-3 overflow-hidden flex items-center justify-center mb-3">
                  <Image
                    src="/images/hardware/listerr-one/image00008.png"
                    alt="Countertop POS Touch Display"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  Billing Counter
                </span>
                <h3 className="text-base font-black text-blue-950 mt-1">
                  Countertop POS Touch Screen
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Angled compact display for customer phone number input, loyalty rewards, and QR UPI scan.
                </p>
              </div>
              <a
                href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20a%20quote%20for%20the%20Countertop%20POS%20Touch%20Screen"
                target="_blank"
                rel="noreferrer"
                className="block pt-2"
              >
                <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 bg-white">
                  Get Countertop Quote
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-blue-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-lg shadow-blue-600/15">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Schedule a Restaurant 360 Onboarding Call
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Our food service tech team will configure your Petpooja sync and QR menus in 24 hours.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20to%20set%20up%20Listerr%20360%20for%20my%20restaurant"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3 rounded-xl text-sm shadow-md">
                Connect on WhatsApp (+91 91459 89198)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
