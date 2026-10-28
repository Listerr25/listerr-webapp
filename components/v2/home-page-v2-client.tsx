"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ShoppingBag,
  Users,
  Tv,
  Cpu,
  Bot,
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  QrCode,
  Store,
  Layers,
  UtensilsCrossed,
  Shirt,
  Camera,
  Play,
  RotateCcw,
  Zap,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  PackageCheck,
  Sliders,
  DollarSign,
  Boxes,
  HelpCircle,
  Eye,
  SlidersHorizontal,
  ChevronDown,
  X,
  Award,
  Globe,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { QuoteModal } from "@/components/v2/quote-modal"
import { DemoModal } from "@/components/v2/demo-modal"
import { CAMERAS_DATA } from "@/lib/camera-data"
import { LISTERR_ONE_DEVICES } from "@/lib/listerr-one-hardware"

export function HomePageV2Client() {
  const [activeLoopStep, setActiveLoopStep] = useState<number>(0)
  const [activePillarTab, setActivePillarTab] = useState<string>("ecommerce")
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false)
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false)
  const [selectedHardwareProduct, setSelectedHardwareProduct] = useState<string>("screens")
  const [activeVideoModal, setActiveVideoModal] = useState<{ url: string; title: string; brand: string } | null>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // V1 Merchant Video Footage
  const V1_MERCHANT_REELS = [
    {
      id: "reel-qsr",
      title: "QSR Counter Demo",
      subtitle: "Queue & Combo Menu Pacing",
      brand: "Product Demo",
      tag: "AI Ordering",
      stat: "QR Ordering",
      video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcosmetics.mp4",
    },
    {
      id: "reel-cloudkitchen",
      title: "Cloud Kitchen Demo",
      subtitle: "WhatsApp Instant Checkout",
      brand: "Product Demo",
      tag: "AI Flows",
      stat: "WhatsApp Orders",
      video: "https://cdn.listerr.network/media/Listerr%20website/listerrford2c.mp4",
    },
    {
      id: "reel-flagship",
      title: "Listerr 360 Overview",
      subtitle: "Full Commerce Loop in Action",
      brand: "Product Demo",
      tag: "Platform Demo",
      stat: "Full Loop",
      video: "https://cdn.listerr.network/media/Listerr%20website/listerrcover.mp4",
    },
    {
      id: "reel-dining",
      title: "Dining Floor Demo",
      subtitle: "Multi-Outlet Menus & Signage Sync",
      brand: "Product Demo",
      tag: "Menu Studio",
      stat: "POS Sync",
      video: "https://cdn.listerr.network/media/Listerr%20website/listerrforfurniture.mp4",
    },
    {
      id: "reel-cafe",
      title: "Cafe Setup Demo",
      subtitle: "Automated Drops & Retention",
      brand: "Product Demo",
      tag: "Smart Flows",
      stat: "CRM Demo",
      video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcafe.mp4",
    },
  ]

  // V1 Commerce Integrations
  const V1_INTEGRATIONS = [
    { name: "Petpooja POS", category: "Billing & KOT Sync", highlight: "Real-Time Menu Sync" },
    { name: "Shopify", category: "E-Commerce", highlight: "Catalog & OMS Sync" },
    { name: "WhatsApp Business (WABA)", category: "Official Meta API", highlight: "Official WhatsApp Business API" },
    { name: "DotPe", category: "Omnichannel Commerce", highlight: "QR Catalog Bridge" },
    { name: "Posist POS", category: "Restaurant POS", highlight: "Inventory & Recipe Sync" },
    { name: "Razorpay", category: "Payment Gateway", highlight: "Instant UPI Settlements" },
    { name: "Paytm Business", category: "UPI & Soundbox", highlight: "UPI Payment Acceptance" },
    { name: "Pine Labs", category: "Card POS Terminal", highlight: "Countertop Hardware Bridge" },
    { name: "UrbanPiper", category: "Delivery Aggregator Hub", highlight: "Central OMS Relay" },
    { name: "Shiprocket", category: "Pan-India Courier", highlight: "Auto-AWB Generation" },
    { name: "Google Merchant", category: "Search & Maps", highlight: "Local Inventory Ads" },
    { name: "Meta Ads & Pixels", category: "Instagram / FB", highlight: "Conversion API Loop" },
    { name: "PhonePe PG", category: "UPI Checkout", highlight: "Direct Bank Settlement" },
    { name: "WooCommerce", category: "Open Source CMS", highlight: "Direct Webhook Sync" },
    { name: "BillDesk", category: "Enterprise Payments", highlight: "Net Banking & Cards" },
  ]

  // V1 vs Aggregators Comparison
  const V1_COMPARISON = [
    {
      feature: "Sales Commission",
      listerr: "0% Platform Commission on Direct Orders",
      traditional: "25% to 30% Per Order Cut (Aggregators)",
      listerrBetter: true,
    },
    {
      feature: "Customer Mobile & Data Ownership",
      listerr: "Full Verified Mobile Number & Dining History",
      traditional: "Masked / Blind Virtual Numbers",
      listerrBetter: true,
    },
    {
      feature: "UPI Payment Settlements",
      listerr: "Direct to Bank Account (settlement timing depends on gateway)",
      traditional: "Aggregator-Controlled Delayed Payout Cycles",
      listerrBetter: true,
    },
    {
      feature: "Commercial Screen & Menu Sync",
      listerr: "Auto-Synced Cloud Screens & Kiosks Included",
      traditional: "Zero Screen Hardware Support",
      listerrBetter: true,
    },
    {
      feature: "Petpooja POS Live Sync",
      listerr: "Direct Real-Time Price & 86 Item Sync",
      traditional: "Manual Repricing & Disconnects",
      listerrBetter: true,
    },
    {
      feature: "Automated WhatsApp Marketing",
      listerr: "Official Meta WABA Birthday & Re-order Triggers",
      traditional: "No Retargeting to Your Own Guests",
      listerrBetter: true,
    },
  ]

  // Frequently Asked Questions
  const V1_FAQS = [
    {
      q: "Can I keep using our existing Petpooja or billing POS?",
      a: "Yes. Listerr 360 integrates directly with Petpooja, Posist, and custom billing software. When you change a price or mark an item 86 (out-of-stock) in your POS, it updates your table QR menu, direct web store, and commercial digital menu boards.",
    },
    {
      q: "How does the 0% commission direct ordering model work?",
      a: "Unlike delivery aggregators that charge 25% to 30% on every order, Listerr charges a predictable flat software subscription (₹4,999/month). All customer payments via UPI QR, Google Pay, PhonePe, or cards go directly into your bank account. Standard payment gateway fees may apply per your gateway provider.",
    },
    {
      q: "What warranty and mounting equipment comes with Listerr One screens?",
      a: "Every Listerr One commercial screen, interactive touch kiosk, and video wall includes a 1-year direct replacement hardware warranty, heavy-duty wall or floor VESA mounting bracket, infrared remote control, high-speed HDMI & power cables, and a pre-activated Cloud Signage CMS license with 100% offline USB redundancy.",
    },
    {
      q: "Do I need special Meta approval for WhatsApp Business (WABA)?",
      a: "Our onboarding team in Jaipur assists with complete Meta Business verification and WhatsApp Business API setup. You get pre-approved interactive transactional templates for order confirmation, delivery tracking, birthday coupons, and win-back offers. The green verified badge is granted separately by Meta based on their review.",
    },
    {
      q: "Can I purchase Listerr One hardware without the software or vice versa?",
      a: "Yes. If you already have existing Android commercial displays or tablets, you can subscribe to the Listerr 360 Software Plan (₹4,999/mo). Conversely, if you only need commercial screens or AI vision cameras, you can request a hardware quote with competitive pricing.",
    },
    {
      q: "How fast can my outlet go live?",
      a: "Our team in Jaipur configures your digital catalog, connects your Petpooja POS menu, and delivers your table QR codes within 24–48 hours. Hardware dispatches from our Jaipur facility with pan-India insured transit.",
    },
  ]

  // The 4 Steps of the Listerr 360 Loop (Blue & White Theme)
  const LOOP_STEPS = [
    {
      id: "orders",
      stepNumber: "01",
      pillar: "E-COMMERCE",
      title: "Orders In",
      subtitle: "Sell Everywhere with 0% Commission",
      tagline: "Table QR · Direct Web Store · WhatsApp Bot · Takeaway",
      color: "from-blue-600 to-blue-800",
      accentBorder: "border-blue-600",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description:
        "Customers order directly through table QR codes, digital catalog lookbooks, or conversational WhatsApp AI. Zero platform commission on direct orders.",
      video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcosmetics.mp4",
      docRef: "",
      highlights: [
        "Table & Counter QR Ordering",
        "0% Commission Online Takeaway Store",
        "Shoppable Digital Catalogs & Lookbooks",
        "Unified Multi-Channel OMS Inbox",
      ],
      metrics: "0% Platform Commission · Direct UPI",
    },
    {
      id: "customers",
      stepNumber: "02",
      pillar: "CRM & RETENTION",
      title: "Customers Back",
      subtitle: "Automated WhatsApp Marketing & Loyalty",
      tagline: "Official WABA · Auto Triggers · Member Points · Re-orders",
      color: "from-blue-700 to-blue-900",
      accentBorder: "border-blue-600",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description:
        "Every ordering customer is saved into your customer list. Send automated birthday drops, win-back discounts, and personalized offers over official Meta WhatsApp Business API.",
      video: "https://cdn.listerr.network/media/Listerr%20website/listerrford2c.mp4",
      docRef: "",
      highlights: [
        "Official WhatsApp Business API (WABA)",
        "Auto-Trigger Birthday & Win-Back Drops",
        "Customer Points, Cashback & Loyalty Tiers",
        "Campaign ROI Attribution",
      ],
      metrics: "High WhatsApp Open Rates · Repeat Order Tracking",
    },
    {
      id: "screens",
      stepNumber: "03",
      pillar: "SIGNAGE CMS",
      title: "Screens Update",
      subtitle: "Cloud & USB Commercial Menu Displays",
      tagline: "POS Sync · Instant Price Changes · KDS Pass · Multi-store",
      color: "from-blue-800 to-blue-900",
      accentBorder: "border-blue-600",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description:
        "Digital signage screens update automatically from your POS or Listerr cloud. When an item runs out on Petpooja or your store, it drops from the screen with zero manual reprinting.",
      video: "https://cdn.listerr.network/media/Listerr%20website/listerrforfurniture.mp4",
      docRef: "",
      highlights: [
        "Petpooja POS Real-Time Menu Sync",
        "Offline USB Playback (Internet Downtime Backup)",
        "Scheduled Dayparting (Breakfast/Lunch/Dinner)",
        "Kitchen Display System (KDS) Pacing Screens",
      ],
      metrics: "USB Offline Backup · Cloud Push Sync",
    },
    {
      id: "cameras",
      stepNumber: "04",
      pillar: "IOT & VISION AI",
      title: "Cameras Watch",
      subtitle: "Footfall, Queues & Kitchen Hygiene Vision",
      tagline: "Turret & Dome AI · Edge Neural Box · Cap & Glove Detection",
      color: "from-blue-950 to-blue-900",
      accentBorder: "border-blue-600",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description:
        "Listerr One AI Cameras track store footfall, table occupancy, counter queues, and kitchen staff food safety (caps, aprons, gloves) with edge processing.",
      video: "https://cdn.listerr.network/media/Listerr%20website/listerrcover.mp4",
      docRef: "",
      highlights: [
        "Kitchen Hygiene AI (Cap & Glove Compliance)",
        "Counter Queue Pacing & Billing Bottlenecks",
        "Store Footfall & Conversion Heatmaps",
        "Edge Processing (Privacy-Friendly Design)",
      ],
      metrics: "Edge-Processed Vision · Real-Time Alerts",
    },
  ]

  const currentStep = LOOP_STEPS[activeLoopStep]

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* ── HERO SECTION: THE LISTERR 360 LOOP NARRATIVE (BLUE & WHITE) ── */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Listerr 360
            </span>
          </div>

          {/* Main Title & Value Prop */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-blue-950 leading-[1.1]">
              The Complete Commerce Operating Loop for{" "}
              <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                Indian Businesses
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Four connected pillars working as one continuous engine:{" "}
              <strong className="text-blue-950 font-semibold">Orders in</strong> via 0% commission catalogs & QR,{" "}
              <strong className="text-blue-950 font-semibold">Customers back</strong> with WhatsApp CRM,{" "}
              <strong className="text-blue-950 font-semibold">Screens update</strong> with cloud signage, and{" "}
              <strong className="text-blue-950 font-semibold">Cameras watch</strong> with edge vision AI.
            </p>
          </div>

          {/* CTA Buttons & Hotline */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              onClick={() => setDemoModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3 rounded-2xl shadow-lg shadow-blue-600/25 text-sm h-12"
            >
              Book 360 Live Walkthrough
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setSelectedHardwareProduct("screens")
                setQuoteModalOpen(true)
              }}
              className="border-blue-200 bg-white hover:bg-blue-50 text-blue-950 font-bold px-6 py-3 rounded-2xl text-sm h-12"
            >
              <Tv className="mr-2 h-4 w-4 text-blue-600" />
              Request Hardware Quote
            </Button>
            <a
              href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20want%20to%20know%20more%20about%20the%20360%20commerce%20loop"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-50 border border-blue-200 hover:bg-blue-100 px-5 py-3 text-xs sm:text-sm font-bold text-blue-900 transition h-12"
            >
              <MessageCircle className="h-4 w-4 text-blue-600" />
              WhatsApp Direct (+91 91459 89198)
            </a>
          </div>

          {/* ── THE INTERACTIVE 360 LOOP CONTROLLER ── */}
          <div className="mt-14 rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-500/5 overflow-hidden p-6 sm:p-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Interactive Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
                Click any part of the Listerr 360 loop
              </h2>
              <p className="text-xs sm:text-sm text-fg-muted mt-1">
                Notice how every stage feeds the next, eliminating manual work between POS, sales, marketing, and hardware.
              </p>
            </div>

            {/* Loop Nav Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {LOOP_STEPS.map((step, idx) => {
                const isActive = activeLoopStep === idx
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveLoopStep(idx)}
                    className={`text-left p-4 rounded-2xl border transition relative ${
                      isActive
                        ? `bg-surface-sunken/60 ${step.accentBorder} border-2 shadow-sm`
                        : "border-border hover:border-fg-muted/40 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-fg-muted tracking-wider">
                        {step.stepNumber}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${step.badgeColor}`}
                      >
                        {step.pillar}
                      </span>
                    </div>
                    <p className="font-extrabold text-base text-fg">{step.title}</p>
                    <p className="text-xs text-fg-muted truncate mt-0.5">{step.subtitle}</p>
                  </button>
                )
              })}
            </div>

            {/* Step Detail Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-sunken/40 rounded-2xl border border-border/80 p-6 sm:p-8">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full border ${currentStep.badgeColor}`}
                  >
                    Part {currentStep.stepNumber} · {currentStep.pillar}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-fg tracking-tight">
                  {currentStep.title} — {currentStep.subtitle}
                </h3>

                <p className="text-sm text-fg-muted leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {currentStep.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-semibold text-blue-950 bg-white p-2.5 rounded-xl border border-blue-100 shadow-xs"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Metric Strip */}
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-500 border-t border-blue-100">
                  <span>Performance Key:</span>
                  <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg">
                    {currentStep.metrics}
                  </span>
                </div>
              </div>

              {/* Step Video/Visual View */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[9/16] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-border bg-slate-900">
                  <video
                    key={currentStep.video}
                    src={currentStep.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300">
                      Live Architecture Component
                    </span>
                    <p className="font-extrabold text-sm">{currentStep.tagline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERIFIED REAL NUMBERS METRIC RIBBON (FND-03, UX-05) ── */}
      <section className="bg-white border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-blue-600">0%</p>
              <p className="text-xs font-bold text-fg mt-1">Platform Commission</p>
              <p className="text-[11px] text-fg-muted">On direct orders (gateway fees may apply)</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-blue-700">Fast</p>
              <p className="text-xs font-bold text-fg mt-1">QR Dine-In Load</p>
              <p className="text-[11px] text-fg-muted">No app install required for customers</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-blue-800">USB</p>
              <p className="text-xs font-bold text-fg mt-1">Offline Screen Backup</p>
              <p className="text-[11px] text-fg-muted">Pendrive fallback if Wi-Fi drops</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-black text-blue-600">500 nits</p>
              <p className="text-xs font-bold text-fg mt-1">Indoor Commercial Panels</p>
              <p className="text-[11px] text-fg-muted">24/7 rated anti-glare screens</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 4 PILLARS COMMAND CENTER (TABBED EXPLORER) ── */}
      <section className="py-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Full Platform Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-fg tracking-tight">
              Explore Every Feature Across the 4 Pillars
            </h2>
            <p className="text-sm text-fg-muted mt-2">
              The complete Listerr 360 platform covers e-commerce, CRM, signage, and IoT hardware — all working together.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "ecommerce", label: "01 E-commerce", icon: ShoppingBag, color: "text-blue-600" },
              { id: "crm", label: "02 CRM & Retention", icon: Users, color: "text-blue-600" },
              { id: "cms", label: "03 Signage CMS", icon: Tv, color: "text-blue-600" },
              { id: "hardware", label: "04 IoT & Hardware", icon: Cpu, color: "text-blue-600" },
              { id: "advanced", label: "Advanced AI Engine", icon: Bot, color: "text-blue-600" },
            ].map((tab) => {
              const Icon = tab.icon
              const active = activePillarTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePillarTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                    active
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "bg-blue-50 text-blue-900 border border-blue-100 hover:bg-blue-100"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${active ? "text-white" : "text-blue-600"}`} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Content Display */}
          {activePillarTab === "ecommerce" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <QrCode className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-fg">Shoppable Catalogs & QR Ordering</h4>
                <p className="text-xs text-fg-muted leading-relaxed">
                  Interactive mobile-friendly digital menus and fashion lookbooks. Guests scan table QRs to place orders directly without waiting for service staff.
                </p>

              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Store className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-fg">0% Commission Online Store</h4>
                <p className="text-xs text-fg-muted leading-relaxed">
                  Your direct brand ordering website for takeaway and delivery. Zero aggregators eating 25-30% of your margin. Instant UPI QR checkout.
                </p>

              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Bot className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-fg">AI WhatsApp & Voice Ordering</h4>
                <p className="text-xs text-fg-muted leading-relaxed">
                  AI conversational agent that understands Hinglish food and apparel orders over WhatsApp text or voice clips. Auto-generates billing tickets into OMS.
                </p>

              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-fg">ads-ai Studio</h4>
                <p className="text-xs text-fg-muted leading-relaxed">
                  Generate studio-grade product photos and promotional video clips from a single product snap. Built for Instagram and WhatsApp drops.
                </p>

              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Boxes className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-fg">Unified OMS Inbox</h4>
                <p className="text-xs text-fg-muted leading-relaxed">
                  One single order dashboard reconciling table QR, takeaway, website, and WhatsApp orders with live kitchen tickets.
                </p>

              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Layers className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-fg">Listerr Network & Discovery</h4>
                <p className="text-xs text-fg-muted leading-relaxed">
                  Get discovered across the Listerr consumer network. Opt-in cross-promotion helps drive discovery without paying high customer acquisition costs.
                </p>
              </div>
            </div>
          )}

          {activePillarTab === "crm" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">Official WhatsApp Business (WABA)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Official WhatsApp Business API profile with high deliverability, automated greeting, and direct interactive menus.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">Auto-Trigger Campaigns</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated customer lifecycle triggers: send birthday coupons on day 0, anniversary treats, and &quot;We miss you&quot; win-backs after 21 days of inactivity.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">Membership, Points & Loyalty</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tiered membership programs (Silver, Gold, VIP) with automated wallet cashback and redeemable reward points on every bill.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">Customer Segments & Lists</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Group buyers by spending frequency, favorite dishes or categories, and average order value for ultra-targeted marketing.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">Campaign ROI & Attribution</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real revenue attribution reporting: see exactly how many rupees of GMV each WhatsApp blast or promotional offer generated.
                </p>
              </div>
            </div>
          )}

          {activePillarTab === "cms" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <Tv className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">Cloud Multi-Store Signage CMS</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Manage commercial screens across multiple stores from a single browser tab. Push animated promotions, videos, and playlists remotely.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <RotateCcw className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">Offline USB Redundancy</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If the outlet&apos;s internet drops, screens seamlessly switch to local pendrive loop with zero black screens or error messages.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <UtensilsCrossed className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">POS-Driven Menu Boards (Petpooja)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time sync with restaurant POS systems. When an item sells out in the billing counter, it automatically strikes off the menu screen.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <SlidersHorizontal className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">Kitchen & Staff Displays (KDS)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Back-of-house screens displaying incoming orders, preparation timers, and dispatch pass pacing for kitchen teams.
                </p>
              </div>
            </div>
          )}

          {activePillarTab === "hardware" && (
            <div className="space-y-8 animate-in fade-in duration-200">
              {/* Flagship Models Grid with Real Photos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {LISTERR_ONE_DEVICES.slice(0, 3).map((device) => (
                  <div
                    key={device.id}
                    className="rounded-2xl border border-blue-100 bg-white overflow-hidden shadow-xs hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative aspect-[4/3] bg-gradient-to-b from-blue-50/50 to-slate-50 flex items-center justify-center p-4 border-b border-blue-100">
                        <div className="relative w-full h-full transition duration-300 group-hover:scale-105">
                          <Image
                            src={device.image}
                            alt={device.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <span className="absolute top-3 left-3 text-[10px] font-black uppercase text-blue-900 bg-blue-100/90 border border-blue-200 px-2 py-0.5 rounded backdrop-blur-xs">
                          {device.categoryLabel}
                        </span>
                        <span className="absolute top-3 right-3 text-[10px] font-bold text-blue-900 bg-white/90 border border-blue-100 px-1.5 py-0.5 rounded">
                          {device.sizes.join(", ")}
                        </span>
                      </div>

                      <div className="p-5 space-y-2.5">
                        <h4 className="text-base font-black text-blue-950 group-hover:text-blue-700 transition">
                          {device.name}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {device.tagline}
                        </p>
                        <div className="text-[11px] font-semibold text-blue-800 bg-blue-50 border border-blue-100 p-2 rounded-lg flex items-center justify-between">
                          <span>{device.touch}</span>
                          <span>{device.brightness}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedHardwareProduct(device.name)
                          setQuoteModalOpen(true)
                        }}
                        className="w-full text-xs font-bold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        Request Device Specs & Quote
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* What's in the Box Banner (IOT-04) + Direct Catalog Link */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <PackageCheck className="h-8 w-8 text-blue-600 shrink-0" />
                  <div>
                    <h5 className="font-extrabold text-sm text-blue-950">
                      What's Included With Every Listerr One Screen (IOT-04)
                    </h5>
                    <p className="text-xs text-slate-600">
                      Commercial Screen · Heavy-Duty VESA Mount · Infrared Remote · HDMI Cable · Power Cable · 1-Year Pre-Activated Cloud CMS License.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link href="/hardware">
                    <Button variant="outline" className="border-blue-200 bg-white hover:bg-blue-50 text-blue-900 font-bold text-xs rounded-xl">
                      Explore Hardware Catalog →
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      setSelectedHardwareProduct("screens")
                      setQuoteModalOpen(true)
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs"
                  >
                    Request Screen Price List
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activePillarTab === "advanced" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">Cross-Platform Automation Rules</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  &quot;If this, then that&quot; store automation: if table occupancy exceeds 85%, trigger kitchen pacing alert and auto-push quick-prep dessert specials to digital menu boards.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <Bot className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">AI Voice Calling for Commerce (Coming Soon)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conversational AI voice agent in Hindi/English for high-value order confirmations, delivery address verification, and VIP repeat bookings.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <Cpu className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-blue-950">Listerr Vision AI Analytics Engine</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consolidated multi-outlet dashboard tracking footfall conversion rate, dwell times by aisle, kitchen safety compliance scores, and queue drop-offs.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── REAL DOCUMENT INDUSTRY SPOTLIGHTS ── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Industry Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-fg tracking-tight">
              Pre-Configured for Your Industry
            </h2>
            <p className="text-sm text-fg-muted mt-2">
              Purpose-built commerce loops tailored for restaurants, fashion sellers, and retail businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Restaurant 360 Spotlight */}
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/50 via-white to-white p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-blue-700 bg-blue-100/90 px-3 py-1 rounded-full border border-blue-200">
                  Listerr 360 Restaurant Solution
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                  For Restaurants, Cafés & QSR Counters
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Complete dining room and kitchen operations synchronized with Petpooja POS.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-blue-100">
                  <div className="h-6 w-6 rounded-md bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="text-xs">
                    <strong className="text-blue-950 block">Table QR & 0% Takeaway:</strong>
                    Guests scan table QR codes to order. Tickets print directly into your existing Petpooja KOT with zero commissions.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-blue-100">
                  <div className="h-6 w-6 rounded-md bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="text-xs">
                    <strong className="text-blue-950 block">Automated WhatsApp Re-engagement:</strong>
                    Dining guests can opt in at checkout. The system triggers birthday treats, weekday lunch specials, and weekend drop alerts.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-blue-100">
                  <div className="h-6 w-6 rounded-md bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="text-xs">
                    <strong className="text-blue-950 block">Kitchen Hygiene & Queue Vision:</strong>
                    Listerr AI cameras detect kitchen staff hairnets and gloves for food safety audits, while counter cameras pace queue wait times.
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setDemoModalOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs py-2.5 shadow-xs"
              >
                Explore Restaurant 360 Walkthrough →
              </Button>
            </div>

            {/* Fashion Sellers Spotlight */}
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/50 via-white to-white p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-blue-700 bg-blue-100/90 px-3 py-1 rounded-full border border-blue-200">
                  Fashion & Apparel Sellers
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                  For Apparel Brands, Boutiques & D2C Sellers
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Turn Instagram scrollers into instant buyers with zero aggregator commissions.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-blue-100">
                  <div className="h-6 w-6 rounded-md bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="text-xs">
                    <strong className="text-blue-950 block">Digital Lookbooks & Instagram Drops:</strong>
                    Publish shoppable video lookbooks with one-tap size/color variant selection and direct WhatsApp cart checkout.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-blue-100">
                  <div className="h-6 w-6 rounded-md bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="text-xs">
                    <strong className="text-blue-950 block">VIP Customer WhatsApp Broadcasts:</strong>
                    Send new collection previews and festive discount codes directly to high-value buyers using official Meta WhatsApp templates.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-blue-100">
                  <div className="h-6 w-6 rounded-md bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="text-xs">
                    <strong className="text-blue-950 block">In-Store Interactive Touch Kiosks:</strong>
                    Deploy Listerr One kiosks in retail stores so shoppers can browse full warehouse inventory and order out-of-stock sizes.
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setDemoModalOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs py-2.5 shadow-xs"
              >
                Explore Fashion Sellers Walkthrough →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── UNIFIED PRICING MATRIX & QUOTE ESTIMATOR (FND-04, FND-05) ── */}
      <section className="py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Transparent Indian Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
              One Unified Software Plan + Factory Hardware
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              No confusing user-tier limits. One software license unlocks everything, while screens and cameras are supplied at direct factory pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* The One Software Plan (FND-04, FND-05) */}
            <div className="lg:col-span-6 rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-xl shadow-blue-500/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    Listerr 360 Software Plan
                  </span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                    0% Commission
                  </span>
                </div>

                <h3 className="text-2xl font-black text-blue-950">Listerr 360 All-In-One</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Complete software suite for single outlet or growing retail chains.
                </p>

                <div className="my-6 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-blue-950">₹4,999</span>
                    <span className="text-xs font-bold text-slate-500">/ month / store</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Billed annually (or ₹5,999 monthly). Includes 0% commission on direct orders.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0 stroke-[3]" />
                    <span>Unlimited Table QR & Direct Web Takeaway Store</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0 stroke-[3]" />
                    <span>Official Meta WhatsApp Business API (WABA) Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0 stroke-[3]" />
                    <span>Automated Lifecycle Triggers (Birthdays, Win-backs)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0 stroke-[3]" />
                    <span>Cloud Signage CMS with 1 Screen License Included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0 stroke-[3]" />
                    <span>Petpooja POS Real-Time Menu & KOT Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600 shrink-0 stroke-[3]" />
                    <span>Unified OMS Multi-Channel Order Manager</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Button
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl py-3 text-sm shadow-md shadow-blue-600/20"
                >
                  Start 14-Day Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Commercial Hardware Direct Supply */}
            <div className="lg:col-span-6 rounded-3xl border border-blue-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    Factory Hardware Supply
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    GST Invoice + Pan-India Shipping
                  </span>
                </div>

                <h3 className="text-2xl font-black text-blue-950">Listerr One Displays & Cameras</h3>
                <p className="text-xs text-slate-600 mt-1 mb-4">
                  Direct commercial pricing for screens, interactive touch kiosks, and AI cameras.
                </p>

                {/* Real Product Photo Thumbnails */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {LISTERR_ONE_DEVICES.slice(0, 4).map((dev) => (
                    <div
                      key={dev.id}
                      className="relative aspect-square rounded-xl bg-slate-50 border border-blue-100 p-1.5 overflow-hidden flex items-center justify-center group"
                      title={dev.name}
                    >
                      <Image
                        src={dev.image}
                        alt={dev.name}
                        fill
                        className="object-contain p-1 transition group-hover:scale-110"
                        sizes="100px"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/30 border border-blue-100">
                    <span className="font-bold text-slate-900">43" Ultra-Slim Wall Display (4K 500 nits)</span>
                    <span className="font-bold text-blue-700">Request Quote</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/30 border border-blue-100">
                    <span className="font-bold text-slate-900">55" High Brightness Commercial Display</span>
                    <span className="font-bold text-blue-700">Request Quote</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/30 border border-blue-100">
                    <span className="font-bold text-slate-900">55" Floor-Standing Touch Kiosk with Stand</span>
                    <span className="font-bold text-blue-700">Request Quote</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/30 border border-blue-100">
                    <span className="font-bold text-slate-900">Vision AI Camera Series (Turret / Dome / Hygiene)</span>
                    <span className="font-bold text-blue-700">Request Quote</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-[11px] text-blue-900 flex items-start gap-2 mt-4">
                  <ShieldCheck className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>
                    All hardware orders include 1-year replacement warranty, heavy-duty mounting bracket, remote controller, and pre-configured Cloud CMS software.
                  </span>
                </div>
              </div>

              <div className="pt-8">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedHardwareProduct("screens")
                    setQuoteModalOpen(true)
                  }}
                  className="w-full border-blue-200 bg-white hover:bg-blue-50 text-blue-900 font-bold rounded-xl py-3 text-sm"
                >
                  <Tv className="mr-2 h-4 w-4 text-blue-600" />
                  Request Official Hardware Quotation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── V1 INTEGRATED SECTION 1: LIVE MERCHANT VIDEO REELS SHOWCASE ─── */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              <Play className="h-3.5 w-3.5 text-blue-600" />
              Live Product Demos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
              See How Listerr Works for Indian Businesses
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Platform demos showing QSR counters, cafes, cloud kitchens, and more. Click any card to watch.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {V1_MERCHANT_REELS.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setActiveVideoModal({ url: reel.video, title: reel.title, brand: reel.brand })}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-blue-100 bg-slate-900 shadow-md hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between p-3"
              >
                <video
                  src={reel.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/30 to-transparent" />

                {/* Top Pill */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded-full bg-white/90 border border-blue-200 px-2 py-0.5 text-[9px] font-extrabold text-blue-950 uppercase tracking-wider backdrop-blur-xs">
                    {reel.tag}
                  </span>
                  <div className="h-6 w-6 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition">
                    <Play className="h-3 w-3 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 space-y-1">
                  <span className="inline-block rounded-md bg-blue-500/80 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                    {reel.stat}
                  </span>
                  <p className="text-xs font-bold text-white line-clamp-1">{reel.title}</p>
                  <p className="text-[10px] text-blue-200/80 font-medium">{reel.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── V1 INTEGRATED SECTION 2: COMMERCE INTEGRATIONS (16 TOOLS) ─── */}
      <section className="py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              <Layers className="h-3.5 w-3.5 text-blue-600" />
              Connected Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
              Works Seamlessly With Your Existing POS & Tech
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Zero need to rip and replace your billing counter. Listerr integrates directly into your day-to-day operations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {V1_INTEGRATIONS.map((integ, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-blue-100 bg-white p-4 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-full border border-blue-100">
                    {integ.category}
                  </span>
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-blue-950 group-hover:text-blue-600 transition">
                    {integ.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{integ.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── V1 INTEGRATED SECTION 3: LISTERR 360 VS AGGREGATORS ─── */}
      <section className="py-20 bg-gradient-to-b from-blue-50/40 via-white to-white border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              Direct Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
              Why Brands Switch to Listerr 360
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Compare direct operating margins, customer data control, and hardware integration.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-white shadow-xl shadow-blue-500/5 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[580px]">
                <div className="grid grid-cols-12 bg-blue-900 text-white p-4 sm:p-5 text-xs font-bold uppercase tracking-wider">
                  <div className="col-span-5 sm:col-span-4">Feature / Capability</div>
                  <div className="col-span-4 sm:col-span-4 text-blue-200">Listerr 360 Loop</div>
                  <div className="col-span-3 sm:col-span-4 text-blue-100/70">Traditional Aggregators</div>
                </div>

                <div className="divide-y divide-blue-100">
                  {V1_COMPARISON.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 text-xs items-center hover:bg-blue-50/30 transition">
                      <div className="col-span-5 sm:col-span-4 font-bold text-blue-950">
                        {row.feature}
                      </div>
                      <div className="col-span-4 sm:col-span-4 font-extrabold text-blue-700 flex items-center gap-1.5">
                        <Check className="h-4 w-4 text-blue-600 shrink-0 stroke-[3]" />
                        <span>{row.listerr}</span>
                      </div>
                      <div className="col-span-3 sm:col-span-4 text-slate-500 flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                        <span className="line-through opacity-80">{row.traditional}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── V1 INTEGRATED SECTION 4: CASE STUDY & ENTERPRISE METRICS ─── */}
      <section className="py-20 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/50 via-white to-white p-8 sm:p-14 shadow-lg shadow-blue-500/5">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
                Verified Merchant Results
              </span>
              <blockquote className="text-2xl sm:text-3xl font-black leading-snug text-blue-950 tracking-tight">
                &ldquo;Listerr 360 replaced our third-party commission bleed. Our diners scan QR codes, our kitchen POS updates instantly, and our WhatsApp drops drive 4x repeat visits.&rdquo;
              </blockquote>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-xs">
                <p className="text-3xl sm:text-4xl font-black text-blue-600">0%</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Platform Commission
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-xs">
                <p className="text-3xl sm:text-4xl font-black text-blue-600">24–48h</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Go-Live Time
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-xs">
                <p className="text-3xl sm:text-4xl font-black text-blue-600">4</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Connected Pillars
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-xs">
                <p className="text-3xl sm:text-4xl font-black text-blue-600">Jaipur</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Support & Demo Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── V1 INTEGRATED SECTION 5: FREQUENTLY ASKED QUESTIONS (FAQ) ─── */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything you need to know about setting up Listerr 360, POS sync, and commercial hardware.
            </p>
          </div>

          <div className="space-y-3">
            {V1_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-blue-100 bg-white overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-blue-950 hover:text-blue-700 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-blue-600 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-50">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CONVERSION CALLOUT (BLUE & WHITE) ── */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-300">
            Go Live in 24–48 Hours
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Stop losing 30% margin. Start closing the commerce loop today.
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            Our onboarding team in Jaipur will set up your digital catalog, connect your POS, and configure your first WhatsApp campaign — typically within 24–48 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              size="lg"
              onClick={() => setDemoModalOpen(true)}
              className="bg-white hover:bg-blue-50 text-blue-950 font-black px-8 py-3 rounded-2xl text-sm shadow-xl"
            >
              Book 15-Min Live Screen Share
            </Button>
            <a
              href="https://wa.me/919145989198?text=Hi%20Listerr%2C%20I%20am%20ready%20to%20get%20started%20with%20Listerr%20360"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-700 hover:bg-blue-600 text-white border border-blue-500/40 font-bold px-6 py-3 text-sm transition"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp (+91 91459 89198)
            </a>
          </div>
        </div>
      </section>

      {/* Video Playback Modal */}
      {activeVideoModal && (
        <Dialog open={!!activeVideoModal} onOpenChange={() => setActiveVideoModal(null)}>
          <DialogContent className="max-w-3xl bg-slate-950 border-white/10 p-4 text-white rounded-3xl overflow-hidden">
            <DialogHeader className="mb-2">
              <DialogTitle className="text-lg font-bold text-white flex items-center justify-between">
                <span>{activeVideoModal.title}</span>
                <span className="text-xs font-semibold text-blue-400">{activeVideoModal.brand}</span>
              </DialogTitle>
            </DialogHeader>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              <video
                src={activeVideoModal.url}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Modals */}
      <QuoteModal
        open={quoteModalOpen}
        onOpenChange={setQuoteModalOpen}
        preselectedProduct={selectedHardwareProduct}
      />
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  )
}
