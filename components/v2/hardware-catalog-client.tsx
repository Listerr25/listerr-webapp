"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Cpu,
  Tv,
  Camera,
  Layers,
  ShieldCheck,
  PackageCheck,
  Check,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Sliders,
  Sparkles,
  PhoneCall,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/v2/quote-modal"
import { LISTERR_ONE_DEVICES, ListerrOneDevice } from "@/lib/listerr-one-hardware"
import { CAMERAS_DATA } from "@/lib/camera-data"

export function HardwareCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<string>("Self-Ordering Kiosk")

  const categories = [
    { id: "all", label: "All Hardware (9 Models)" },
    { id: "kiosk", label: "Self-Ordering & Kiosks" },
    { id: "wall", label: "Menu Boards & Wall Screens" },
    { id: "portable", label: "Portable A-Frame Easel" },
    { id: "counter", label: "Countertop POS Displays" },
    { id: "videowall", label: "Commercial Video Walls" },
  ]

  const filteredDevices =
    selectedCategory === "all"
      ? LISTERR_ONE_DEVICES
      : LISTERR_ONE_DEVICES.filter((d) => d.category === selectedCategory)

  const handleRequestQuote = (deviceName: string) => {
    setSelectedProduct(deviceName)
    setQuoteModalOpen(true)
  }

  return (
    <div className="py-12 sm:py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <Cpu className="h-3.5 w-3.5 text-blue-600" />
            04 · Listerr One Commercial Hardware (IOT-01 to IOT-08)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            Commercial Displays, Touch Kiosks & Video Walls
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Direct factory supply for Indian retail chains, cafés, restaurants, and showrooms. Engineered for 24/7 continuous operation with anti-glare glass, metal casing, and 1-year replacement warranty.
          </p>
        </div>

        {/* Category Filters (Blue & White) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-blue-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-white border border-blue-100 text-slate-600 hover:text-blue-700 hover:border-blue-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Hardware Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredDevices.map((device) => (
            <div
              key={device.id}
              className="rounded-3xl border border-blue-100 bg-white overflow-hidden shadow-sm hover:border-blue-400 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Stage */}
                <div className="relative aspect-[4/5] bg-gradient-to-b from-blue-50/30 via-slate-50 to-white flex items-center justify-center p-6 border-b border-blue-100/60 overflow-hidden">
                  <div className="relative w-full h-full max-h-[380px] transition duration-300 group-hover:scale-105">
                    <Image
                      src={device.image}
                      alt={device.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider text-blue-800 bg-blue-50/90 border border-blue-200 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {device.categoryLabel}
                  </span>
                  <span className="absolute top-4 right-4 text-[10px] font-bold text-slate-600 bg-white/90 border border-blue-100 px-2 py-0.5 rounded-md">
                    {device.orientation}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-blue-950 tracking-tight group-hover:text-blue-600 transition">
                      {device.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {device.tagline}
                    </p>
                  </div>

                  {/* Quick Specs Pill Box */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] bg-blue-50/30 p-3 rounded-xl border border-blue-100/80">
                    <div>
                      <span className="text-slate-500 block text-[10px] font-semibold uppercase">Sizes</span>
                      <strong className="text-blue-950 truncate block">{device.sizes.join(", ")}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] font-semibold uppercase">Brightness</span>
                      <strong className="text-blue-950 truncate block">{device.brightness}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] font-semibold uppercase">Touch System</span>
                      <strong className="text-blue-950 truncate block">{device.touch}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] font-semibold uppercase">Panel Grade</span>
                      <strong className="text-blue-950 truncate block">Commercial 24/7</strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    <strong className="text-blue-950 font-semibold">Recommended for: </strong>
                    {device.bestFor}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-blue-100/60 mt-4 flex items-center justify-between gap-3">
                <Button
                  onClick={() => handleRequestQuote(device.name)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl shadow-md shadow-blue-600/20"
                >
                  <Tv className="mr-1.5 h-3.5 w-3.5" />
                  Request Official Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* What's in the Box Guarantee (IOT-04) */}
        <div className="mb-20 rounded-3xl border border-blue-200 bg-blue-50/70 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <PackageCheck className="h-8 w-8 text-blue-700 shrink-0" />
              <div>
                <h3 className="text-2xl font-black text-blue-950">
                  What&apos;s Included With Every Listerr One Screen (IOT-04)
                </h3>
                <p className="text-xs text-blue-800 mt-0.5">
                  Complete plug-and-play package with zero hidden mounting accessory costs.
                </p>
              </div>
            </div>
            <Button
              onClick={() => handleRequestQuote("Listerr One Commercial Bundle")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shrink-0 shadow-md shadow-blue-600/20"
            >
              Get Bulk Pricing
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-bold text-blue-950">
            <div className="bg-white p-3.5 rounded-xl border border-blue-200 flex items-center gap-2.5 shadow-xs">
              <Check className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Heavy-Duty Wall / Floor VESA Mount</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-blue-200 flex items-center gap-2.5 shadow-xs">
              <Check className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Infrared Remote Control + Batteries</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-blue-200 flex items-center gap-2.5 shadow-xs">
              <Check className="h-4 w-4 text-blue-600 shrink-0" />
              <span>High-Speed 4K HDMI & Power Cables</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-blue-200 flex items-center gap-2.5 shadow-xs">
              <Check className="h-4 w-4 text-blue-600 shrink-0" />
              <span>1-Year Pre-Activated Cloud CMS Software</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-blue-200 flex items-center gap-2.5 shadow-xs">
              <Check className="h-4 w-4 text-blue-600 shrink-0" />
              <span>1-Year Replacement Hardware Warranty</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-blue-200 flex items-center gap-2.5 shadow-xs">
              <Check className="h-4 w-4 text-blue-600 shrink-0" />
              <span>GST Input Credit Tax Invoice</span>
            </div>
          </div>
        </div>

        {/* Vision AI Camera Series Section (IOT-06) */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                <Camera className="h-3.5 w-3.5" />
                Vision AI Camera Hardware Series (IOT-06)
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
                Edge AI Neural Cameras for Footfall, Queues & Hygiene
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                DPDP Act (India) compliant on-device processing. Light counts and safety alerts leave the outlet; video footage never uploads to external clouds.
              </p>
            </div>
            <span className="text-xs text-slate-500 font-semibold shrink-0">
              Source: Listerr 360 p.4
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAMERAS_DATA.slice(0, 3).map((cam) => (
              <div
                key={cam.id}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm hover:border-blue-400 hover:shadow-md transition space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                    {cam.formFactor}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold">{cam.categoryLabel}</span>
                </div>
                <h3 className="text-lg font-bold text-blue-950">{cam.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cam.tagline}</p>

                <div className="space-y-1.5 text-xs border-t border-blue-100/60 pt-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Resolution:</span>
                    <strong className="text-blue-950">{cam.coreSpecs.resolution}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Weather Rating:</span>
                    <strong className="text-blue-950">{cam.coreSpecs.weatherOrRating}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">AI Neural Engine:</span>
                    <strong className="text-blue-950">{cam.coreSpecs.aiCapability}</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="outline"
                    onClick={() => handleRequestQuote(cam.name)}
                    className="w-full text-xs font-bold rounded-xl border-blue-200 bg-white hover:bg-blue-50 text-blue-950"
                  >
                    Request Camera Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <QuoteModal
        open={quoteModalOpen}
        onOpenChange={setQuoteModalOpen}
        preselectedProduct={selectedProduct}
      />
    </div>
  )
}
