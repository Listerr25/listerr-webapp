"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Calendar, UtensilsCrossed, Shirt, ShoppingBag, Store } from "lucide-react"

interface DemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [industry, setIndustry] = useState<string>("restaurant")
  const [businessName, setBusinessName] = useState<string>("")
  const [outlets, setOutlets] = useState<string>("1")
  const [phone, setPhone] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hi Listerr Team, I want to book a live demo of Listerr 360 Software (Industry: ${industry}, Outlets: ${outlets}) for ${businessName}. My phone is ${phone}.`
      )
      window.open(`https://wa.me/919145989198?text=${msg}`, "_blank")
    }, 1200)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg border-border bg-white p-6 sm:p-8 rounded-2xl shadow-2xl">
        <DialogHeader className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 w-fit mb-2">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Listerr 360 Live Product Walkthrough
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight text-fg">
            Book a 1-on-1 Product Demo
          </DialogTitle>
          <DialogDescription className="text-sm text-fg-muted">
            See the 360 loop in action: QR ordering, WhatsApp campaigns, cloud signage sync, and POS integration configured for your business.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-in fade-in duration-300">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Check className="h-7 w-7 stroke-[3]" />
            </div>
            <h3 className="text-lg font-bold text-fg">Demo Request Received!</h3>
            <p className="text-sm text-fg-muted max-w-sm mx-auto">
              Connecting you directly on WhatsApp with our onboarding specialist to schedule a 15-minute live screen share.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="text-xs font-semibold text-fg uppercase tracking-wider block mb-2">
                Your Business Vertical
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "restaurant", label: "Restaurant & Cafe", icon: UtensilsCrossed },
                  { id: "fashion", label: "Fashion & Cloth", icon: Shirt },
                  { id: "retail", label: "Retail & D2C", icon: Store },
                ].map((item) => {
                  const Icon = item.icon
                  const active = industry === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setIndustry(item.id)}
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

            <div>
              <label className="text-xs font-semibold text-fg block mb-1.5">Business Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Urban Bakes / Fabriq Studio"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-fg block mb-1.5">Number of Outlets</label>
                <select
                  value={outlets}
                  onChange={(e) => setOutlets(e.target.value)}
                  className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="1">1 Store / Location</option>
                  <option value="2-5">2 to 5 Outlets</option>
                  <option value="6-20">6 to 20 Chain</option>
                  <option value="20+">20+ Enterprise</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-fg block mb-1.5">WhatsApp / Phone</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <span className="text-xs text-fg-muted flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-blue-600" /> 15 mins · No installation needed
              </span>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2 rounded-xl text-sm shadow-md shadow-blue-600/20"
              >
                Confirm Demo Slot
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
