import type { Metadata } from "next"
import Link from "next/link"
import {
  Users,
  MessageCircle,
  Zap,
  Sparkles,
  Gift,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "02 CRM & Retention · Listerr 360",
  description: "Bring every customer back automatically. Official WhatsApp Business (WABA), lifecycle automation, rewards, and real GMV attribution.",
}

const CRM_FEATURES = [
  {
    id: "waba",
    code: "CRM-02",
    title: "Official Meta WhatsApp Business (WABA)",
    desc: "Verified official WhatsApp profile. High delivery rates, interactive reply buttons, direct catalog browsing, and zero number-blocking risk.",
    source: "Listerr 360 p.3",
    icon: MessageCircle,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "auto-campaigns",
    code: "CRM-03",
    title: "Auto-Trigger Lifecycle Campaigns",
    desc: "Automated trigger engine: sends birthday treats, anniversary celebrations, weekday lunch reminders, and 21-day inactivity win-back discounts.",
    source: "Listerr 360 p.3",
    icon: Zap,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "ai-personalization",
    code: "CRM-04",
    title: "AI-Personalised WhatsApp Campaigns",
    desc: "Segment copy dynamically based on past order history: recommend spicy paneer combos to vegetarian diners and new blazer drops to formal wear buyers.",
    source: "Listerr 360 p.3",
    icon: Sparkles,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "rewards",
    code: "CRM-05",
    title: "Membership, Cashback & Loyalty",
    desc: "Turn one-time diners into regulars. Reward points, wallet cashback, and tiered VIP clubs (Bronze, Silver, Gold) with auto WhatsApp balance updates.",
    source: "Fashion Deck p.11",
    icon: Gift,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "customer-lists",
    code: "CRM-06",
    title: "Customer Lists & Segments",
    desc: "Automatically captures phone numbers from table QR scans and online orders. Build ultra-targeted lists by recency, frequency, and total spend (RFM).",
    source: "Listerr 360 p.3",
    icon: Users,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    id: "analytics",
    code: "CRM-07",
    title: "Campaign Results & True GMV Attribution",
    desc: "Track real rupees generated per WhatsApp broadcast. Monitor delivery, read, click, and redemption rates with exact return on ad spend (ROAS).",
    source: "Listerr 360 p.3",
    icon: TrendingUp,
    accent: "bg-blue-50 text-blue-700",
  },
]

export default function V2CrmPage() {
  return (
    <div className="py-12 sm:py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <Users className="h-3.5 w-3.5 text-blue-600" />
            02 · CRM & Retention Engine (CRM-01 to CRM-07)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            Bring Every Customer Back Automatically.
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Stop losing 70% of first-time diners and shoppers. Official Meta WhatsApp integration with automated lifecycle triggers that generate repeat orders without manual effort.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CRM_FEATURES.map((item) => {
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
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {item.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-950">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-blue-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                  <span>Source: {item.source}</span>
                  <span className="text-blue-600 font-bold">WABA Verified</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-blue-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-lg shadow-blue-600/15">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Activate Automated WhatsApp Marketing on Day 1
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Included in The One Plan with zero setup fees. Send your first birthday campaign this week.
          </p>
          <div className="pt-2">
            <Link href="/pricing">
              <Button className="bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3 rounded-xl text-sm shadow-md">
                Explore The One Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
