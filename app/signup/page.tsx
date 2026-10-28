import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Fast-Track Store Onboarding",
  description: "Deploy the complete commerce operating loop for your stores. Onboard in 24–48 hours with direct support from Jaipur.",
  alternates: {
    canonical: "/signup",
  },
}

export default function SignupPage() {
  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-blue-50/50 via-white to-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-800">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Fast-Track Onboarding · Go Live in 24–48 Hours
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            Start Your Listerr 360 Deployment
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Connect directly with our engineering & deployment team in Jaipur. We configure your digital catalogs, connect your POS, and set up your WhatsApp marketing on day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Option 1: Instant WhatsApp Onboarding (Recommended) */}
          <div className="rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
              Fastest Response
            </span>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-green-50 text-green-600 border border-green-200 flex items-center justify-center font-bold">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-black text-blue-950">
                Instant WhatsApp Onboarding
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with our onboarding lead on WhatsApp. Share your menu/catalog link or photo and receive your pre-configured store link in under 2 hours.
              </p>

              <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                  <span>Zero app download required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                  <span>Free menu digitization & table QR setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                  <span>Same-day pilot testing in your outlet</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20to%20start%20my%20free%20trial%20for%20Listerr%20360"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-sm shadow-md transition"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp (+91 91459 89198)
              </a>
            </div>
          </div>

          {/* Option 2: Schedule a Feasibility Demo */}
          <div className="rounded-3xl border border-blue-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-bold">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-black text-blue-950">
                Schedule a Demo & Quote
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Need commercial hardware (touch kiosks, wall screens) or multi-store enterprise rollout? Book a detailed walkthrough with our technical architects.
              </p>

              <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Petpooja POS compatibility verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Commercial screen size recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Official GST quote with dispatch dates</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-sm shadow-md transition"
              >
                Request Official Demo Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+919145989198"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50/50 hover:bg-blue-100 text-blue-900 font-bold py-2.5 text-xs transition"
              >
                <Phone className="h-3.5 w-3.5 text-blue-700" />
                Call Directly: +91 91459 89198
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-blue-600" />
          <span>Made in India for Bharat Commerce · DPDP Compliant · 0% Aggregator Commission</span>
        </div>
      </div>
    </div>
  )
}
