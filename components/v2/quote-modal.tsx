"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check, Send, Sparkles, Tv, Camera, ShieldCheck, PhoneCall } from "lucide-react"

interface QuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  preselectedProduct?: string
}

export function QuoteModal({ open, onOpenChange, preselectedProduct }: QuoteModalProps) {
  const [hardwareType, setHardwareType] = useState<string>(preselectedProduct || "screens")
  const [screenSize, setScreenSize] = useState<string>("55-inch")
  const [quantity, setQuantity] = useState<string>("1-3")
  const [city, setCity] = useState<string>("")
  const [businessName, setBusinessName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission / redirect to WhatsApp with pre-filled message
    setSubmitted(true)
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hi Listerr Team, I want a hardware quote for ${hardwareType} (${screenSize}, qty: ${quantity}) for ${businessName || "my business"} in ${city || "India"}. My phone is ${phone}.`
      )
      window.open(`https://wa.me/919119119905?text=${msg}`, "_blank")
    }, 1200)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl border-border bg-white p-6 sm:p-8 rounded-2xl shadow-2xl">
        <DialogHeader className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 w-fit mb-2">
            <Tv className="h-3.5 w-3.5 text-blue-600" />
            Listerr One Hardware Quote · Direct Factory Supply
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight text-fg">
            Request Hardware Quote
          </DialogTitle>
          <DialogDescription className="text-sm text-fg-muted">
            Commercial grade digital signage, interactive touch kiosks, and AI vision cameras. All screens include 1-year Listerr Cloud CMS and complete mounting kits.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-in fade-in duration-300">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Check className="h-7 w-7 stroke-[3]" />
            </div>
            <h3 className="text-lg font-bold text-blue-950">Quote Request Generated!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Connecting you directly to our commercial hardware desk on WhatsApp for formal quote with GST invoice and dispatch timelines.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="text-xs font-semibold text-fg uppercase tracking-wider block mb-2">
                Hardware Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "screens", label: "Commercial Displays", icon: Tv },
                  { id: "kiosks", label: "Touch Kiosks", icon: Sparkles },
                  { id: "cameras", label: "AI Cameras", icon: Camera },
                ].map((item) => {
                  const Icon = item.icon
                  const active = hardwareType === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setHardwareType(item.id)}
                      className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border text-xs font-semibold transition ${
                        active
                          ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                          : "border-border bg-surface-sunken/40 text-fg-muted hover:border-blue-300 hover:text-blue-900"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${active ? "text-blue-600" : "text-fg-muted"}`} />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {hardwareType !== "cameras" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-fg block mb-1.5">Screen Size</label>
                  <select
                    value={screenSize}
                    onChange={(e) => setScreenSize(e.target.value)}
                    className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="43-inch">43" Ultra Slim (450 nits)</option>
                    <option value="50-inch">50" Ultra Slim (450 nits)</option>
                    <option value="55-inch">55" High Brightness (500 nits)</option>
                    <option value="65-inch">65" High Brightness (500 nits)</option>
                    <option value="75-inch">75" High Brightness (700 nits)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-fg block mb-1.5">Units Needed</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="1">1 Unit (Single outlet)</option>
                    <option value="2-5">2 to 5 Units</option>
                    <option value="6-15">6 to 15 Units (Multi-store)</option>
                    <option value="15+">15+ Units (Enterprise Rollout)</option>
                  </select>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-fg block mb-1.5">Business / Outlet Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Royal Cafe & Bakers"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-fg block mb-1.5">City (Installation Location)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jaipur, Delhi, Mumbai"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-fg block mb-1.5">WhatsApp / Phone Number</label>
              <div className="flex gap-2">
                <span className="flex items-center px-3 rounded-lg border border-border bg-surface-sunken text-sm font-semibold text-fg-muted">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 rounded-lg border border-border bg-white px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <p className="mt-1 text-[11px] text-slate-500 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-blue-600 inline" /> Official pricing catalogue and warranty terms sent instantly over WhatsApp.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <a
                href="tel:+919119119905"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg-muted hover:text-fg"
              >
                <PhoneCall className="h-3.5 w-3.5" /> Call: +91 91191 19905
              </a>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-xl text-sm shadow-md shadow-blue-600/20"
              >
                Get Official Quote
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
