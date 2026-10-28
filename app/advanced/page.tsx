import type { Metadata } from "next"
import Link from "next/link"
import {
  Bot,
  Zap,
  Cpu,
  PhoneCall,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Store Automation & Vision AI Engine",
  description: "Cross-platform automation rules, Vision AI analytics engine, and smart store integrations.",
  alternates: {
    canonical: "/advanced",
  },
}

const ADVANCED_FEATURES = [
  {
    id: "automation",
    title: "Store Automation Rules Engine (If-This-Then-That)",
    desc: "Connect your physical store with digital actions: if camera queue count exceeds 5 people, trigger an alert to counter staff and auto-display 'Express Self-Order' QR on lobby screens.",
    accent: "bg-blue-50 text-blue-700",
    icon: Zap,
  },
  {
    id: "analytics-engine",
    title: "Listerr AI Analytics & Vision Engine",
    desc: "Multi-branch intelligence dashboard consolidating camera footfall counts, table turnover pacing, WhatsApp repeat rates, and menu item profit margins.",
    accent: "bg-blue-50 text-blue-700",
    icon: Cpu,
  },
  {
    id: "ai-calling",
    title: "Conversational Order & Reservation Assistant",
    desc: "AI conversational assistant for order confirmations, delivery address checks, and automated WhatsApp dining table booking coordination.",
    accent: "bg-blue-50 text-blue-700",
    icon: PhoneCall,
  },
  {
    id: "smart-hardware",
    title: "Smart Hardware & Kiosk Integrations",
    desc: "Hardware API hooks for touch self-ordering kiosks, electronic token display screens, and thermal billing printer sync.",
    accent: "bg-blue-50 text-blue-700",
    icon: Bot,
  },
]

export default function V2AdvancedPage() {
  return (
    <div className="py-12 sm:py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <Bot className="h-3.5 w-3.5 text-blue-600" />
            Store Automation & AI Engine
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            Autonomous Rules, Vision AI & Smart Store Operations.
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            The intelligent layer that glues the Listerr 360 loop together. Automate store reactions, analyze multi-outlet footfall, and engage buyers seamlessly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ADVANCED_FEATURES.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold ${item.accent} border border-blue-100`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-blue-950">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-blue-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-lg shadow-blue-600/15">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Explore Enterprise Store Automation
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Custom automation rules and AI calling integrations configured for enterprise retail chains.
          </p>
          <div className="pt-2">
            <Link href="/pricing">
              <Button className="bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3 rounded-xl text-sm shadow-md">
                View All-In-One Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
