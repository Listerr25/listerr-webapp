"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  Search,
  CheckCircle2,
  Zap,
  ArrowRight,
  ShieldCheck,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Smartphone,
  MonitorPlay,
  RotateCcw,
  SlidersHorizontal,
  ChevronRight,
  PhoneCall,
  Mail,
  X,
  Copy,
} from "lucide-react"

import {
  INTEGRATIONS_DATA,
  INTEGRATION_CATEGORIES,
  type IntegrationItem,
} from "@/lib/integrations-data"
import { Button } from "@/components/ui/button"

export function IntegrationsHubClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProtocol, setSelectedProtocol] = useState<string>("all")
  const [activeModalItem, setActiveModalItem] = useState<IntegrationItem | null>(null)
  const [copiedPayload, setCopiedPayload] = useState(false)

  // Interactive Simulator State
  const [activeSimFlow, setActiveSimFlow] = useState<number>(0)
  const [simStep, setSimStep] = useState<number>(0)
  const [isSimulating, setIsSimulating] = useState(false)

  const simulationFlows = [
    {
      id: "queue-surge",
      title: "Queue Surge -> Express Menu Switch",
      outlet: "QSR Counter & Billing Hub",
      steps: [
        {
          node: "Listerr Turret AI Camera",
          badge: "Vision AI Sensor",
          action: "Detects 7 customers in billing queue zone; estimates 5.2 min wait time.",
          color: "border-blue-500 bg-blue-50 text-blue-900",
        },
        {
          node: "Vision AI Edge Box",
          badge: "Local Rule Engine",
          action: "Evaluates rule: IF queue > 6 THEN trigger menu switch in < 300ms.",
          color: "border-indigo-500 bg-indigo-50 text-indigo-900",
        },
        {
          node: "Petpooja / POSist POS",
          badge: "POS Terminal",
          action: "Flags counter congestion; alerts manager console to open Counter #2.",
          color: "border-emerald-500 bg-emerald-50 text-emerald-900",
        },
        {
          node: "Listerr One Digital Signage",
          badge: "Reactive Screen",
          action: "Instantly flips hero screen from complex thalis to 'Fast-Track Combo Meals'.",
          color: "border-amber-500 bg-amber-50 text-amber-900",
        },
      ],
    },
    {
      id: "table-clear",
      title: "Dining Table Turnover -> Captain WhatsApp Alert",
      outlet: "Casual & Fine Dining Hall",
      steps: [
        {
          node: "Listerr Dome AI Camera",
          badge: "Dining Sensor",
          action: "Guests depart Table #12; camera switches status to 'Needs Cleaning'.",
          color: "border-purple-500 bg-purple-50 text-purple-900",
        },
        {
          node: "Timer Threshold Engine",
          badge: "Edge Logic",
          action: "Table #12 remains uncleared for 5 minutes (exceeding outlet SLA).",
          color: "border-red-500 bg-red-50 text-red-900",
        },
        {
          node: "WhatsApp Cloud API",
          badge: "Messaging Relay",
          action: "Dispatches WhatsApp message to Floor Captain: 'Table 12 requires clearing.'",
          color: "border-emerald-500 bg-emerald-50 text-emerald-900",
        },
        {
          node: "Host Stand Live Map",
          badge: "Floor Plan Sync",
          action: "Table is cleared in 90 seconds and automatically updates to Free (Green).",
          color: "border-blue-500 bg-blue-50 text-blue-900",
        },
      ],
    },
    {
      id: "kitchen-hygiene",
      title: "Hygiene Compliance -> FSSAI Audit Snapshot",
      outlet: "Cloud Kitchen & Prep Line",
      steps: [
        {
          node: "Kitchen Hygiene Camera",
          badge: "Food-Safety Sensor",
          action: "Worker on cold prep line detected without protective hair cap/gloves.",
          color: "border-amber-500 bg-amber-50 text-amber-900",
        },
        {
          node: "Vision AI Classifier",
          badge: "Local Neural Engine",
          action: "Confidence score 98.4%; flags violation while keeping video stream on-site.",
          color: "border-orange-500 bg-orange-50 text-orange-900",
        },
        {
          node: "Kitchen Supervisor WhatsApp",
          badge: "Staff Alert",
          action: "Direct ping dispatches with exact station ID and blurred snapshot.",
          color: "border-emerald-500 bg-emerald-50 text-emerald-900",
        },
        {
          node: "Listerr Audit Cloud",
          badge: "Compliance Log",
          action: "Shift compliance index logs 94.2%; timestamps event for FSSAI verification.",
          color: "border-slate-500 bg-slate-50 text-slate-900",
        },
      ],
    },
  ]

  const runSimulation = () => {
    setIsSimulating(true)
    setSimStep(0)
    let current = 0
    const interval = setInterval(() => {
      current += 1
      if (current >= simulationFlows[activeSimFlow].steps.length) {
        clearInterval(interval)
        setIsSimulating(false)
        setSimStep(simulationFlows[activeSimFlow].steps.length - 1)
      } else {
        setSimStep(current)
      }
    }, 1200)
  }

  // Filtered Integrations
  const filteredIntegrations = useMemo(() => {
    return INTEGRATIONS_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory

      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.protocols.some((p) =>
          p.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        item.dataPoints.some((dp) =>
          dp.toLowerCase().includes(searchQuery.toLowerCase())
        )

      const matchesProtocol =
        selectedProtocol === "all" ||
        item.protocols.some((p) => p.toLowerCase() === selectedProtocol.toLowerCase())

      return matchesCategory && matchesSearch && matchesProtocol
    })
  }, [selectedCategory, searchQuery, selectedProtocol])

  const allProtocols = useMemo(() => {
    const list = new Set<string>()
    INTEGRATIONS_DATA.forEach((i) => i.protocols.forEach((p) => list.add(p)))
    return Array.from(list)
  }, [])

  const copyPayload = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPayload(true)
    setTimeout(() => setCopiedPayload(false), 2000)
  }

  return (
    <div className="bg-bg">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-listerr-50/60 via-white to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-listerr-200 bg-white px-3.5 py-1 text-xs font-semibold text-brand-listerr-700 shadow-sm">
              <Zap className="h-3.5 w-3.5 fill-brand-listerr-500 text-brand-listerr-500" />
              Over 35+ Production Connectors for Indian Commerce & F&B
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl lg:text-6xl">
              One Operating Platform.{" "}
              <span className="text-brand-listerr-600">Zero Rip-and-Replace.</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-fg-muted sm:text-xl">
              Listerr wires your existing CCTV cameras, restaurant POS, digital menu
              screens, and WhatsApp into a continuous, reactive automation loop.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="listerr" size="lg" className="rounded-xl font-bold shadow-md">
                <a href="#integrations-catalog">Explore All Connectors</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl font-semibold">
                <a href="#live-simulator">Test Reactive Flow Simulator</a>
              </Button>
            </div>
          </div>

          {/* Quick Metrics Banner */}
          <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm sm:grid-cols-4">
            <div className="border-r border-border/80 pr-4 last:border-0 sm:pr-6">
              <p className="text-2xl font-black text-brand-listerr-600 sm:text-3xl">
                &lt; 300ms
              </p>
              <p className="mt-1 text-xs font-medium text-fg-muted">
                Edge Camera to Signage Trigger
              </p>
            </div>
            <div className="border-r border-border/80 pr-4 last:border-0 sm:pr-6">
              <p className="text-2xl font-black text-brand-listerr-600 sm:text-3xl">
                100%
              </p>
              <p className="mt-1 text-xs font-medium text-fg-muted">
                Compatible with Existing CCTV
              </p>
            </div>
            <div className="border-r border-border/80 pr-4 last:border-0 sm:pr-6">
              <p className="text-2xl font-black text-brand-listerr-600 sm:text-3xl">
                9 Categories
              </p>
              <p className="mt-1 text-xs font-medium text-fg-muted">
                POS, Vision, Signage, WhatsApp & CRM
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-brand-listerr-600 sm:text-3xl">
                DPDP 2023
              </p>
              <p className="mt-1 text-xs font-medium text-fg-muted">
                Privacy-by-Design on Edge Box
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Simulation Section (Blue & White Theme) */}
      <section
        id="live-simulator"
        className="border-b border-blue-100 bg-gradient-to-b from-blue-50/60 via-white to-blue-50/40 py-16 text-blue-950 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-bold text-blue-700 shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Live Reactive Architecture
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
                See How Listerr Connects the Entire Outlet
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                A stand-alone AI camera gives you another dashboard. A Listerr integration
                changes what happens next in real time.
              </p>
            </div>

            {/* Flow Switcher Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {simulationFlows.map((flow, idx) => (
                <button
                  key={flow.id}
                  onClick={() => {
                    setActiveSimFlow(idx)
                    setSimStep(0)
                    setIsSimulating(false)
                  }}
                  className={`rounded-xl px-3.5 py-2 text-xs font-bold transition flex-1 sm:flex-initial text-center ${
                    activeSimFlow === idx
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 ring-2 ring-blue-500"
                      : "bg-white text-slate-700 border border-blue-100 hover:bg-blue-50 shadow-2xs"
                  }`}
                >
                  {flow.title.split("->")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Visual Canvas */}
          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-500/5 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-100 pb-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-blue-600 font-bold">
                  Active Simulation Flow
                </p>
                <h3 className="text-lg font-bold text-blue-950">
                  {simulationFlows[activeSimFlow].title}
                </h3>
                <span className="mt-0.5 inline-block text-xs font-medium text-slate-500">
                  Context: <strong className="text-slate-700">{simulationFlows[activeSimFlow].outlet}</strong>
                </span>
              </div>
              <Button
                onClick={runSimulation}
                disabled={isSimulating}
                className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 font-bold shadow-md shadow-blue-600/20 rounded-xl"
              >
                {isSimulating ? (
                  <>
                    <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
                    Executing Flow...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4 fill-white" />
                    Trigger Live Flow Test
                  </>
                )}
              </Button>
            </div>

            {/* Stepper Flow Cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {simulationFlows[activeSimFlow].steps.map((step, idx) => {
                const isActive = idx === simStep && isSimulating
                const isCompleted = idx <= simStep
                return (
                  <div
                    key={idx}
                    className={`relative rounded-2xl border p-5 transition duration-300 ${
                      isActive
                        ? "border-blue-500 bg-blue-50/70 ring-2 ring-blue-500/50 shadow-lg scale-[1.02]"
                        : isCompleted
                        ? "border-emerald-300 bg-emerald-50/40 shadow-xs"
                        : "border-blue-100 bg-slate-50/40 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                        {idx + 1}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                          isCompleted
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {step.badge}
                      </span>
                    </div>
                    <h4 className="mt-3 text-sm font-bold text-blue-950">{step.node}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {step.action}
                    </p>
                    {idx < 3 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="h-5 w-5 text-blue-400" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Integrations Catalog */}
      <section id="integrations-catalog" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-listerr-600">
                Ecosystem Directory
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                Browse Pre-Built Connectors
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-fg-muted sm:text-base">
                Connect your existing hardware, billing terminals, digital signage, and
                communication channels with ready-to-deploy adapters.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-muted" />
              <input
                type="text"
                placeholder="Search Petpooja, RTSP, WhatsApp..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-fg placeholder:text-fg-subtle focus:border-brand-listerr-500 focus:outline-none focus:ring-2 focus:ring-brand-listerr-500/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-fg-muted hover:text-fg"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter: Mobile Dropdown + Desktop/Tablet Pills */}
          <div className="mt-8 border-b border-border pb-4">
            {/* Mobile Dropdown */}
            <div className="block sm:hidden w-full mb-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface-sunken py-2.5 px-3 text-xs font-bold text-fg focus:outline-none"
              >
                {INTEGRATION_CATEGORIES.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? INTEGRATIONS_DATA.length
                      : INTEGRATIONS_DATA.filter((i) => i.category === cat.id).length
                  return (
                    <option key={cat.id} value={cat.id}>
                      {cat.label} ({count})
                    </option>
                  )
                })}
              </select>
            </div>

            {/* Desktop/Tablet Horizontal Pills */}
            <div className="hidden sm:flex flex-wrap gap-2">
              {INTEGRATION_CATEGORIES.map((cat) => {
                const count =
                  cat.id === "all"
                    ? INTEGRATIONS_DATA.length
                    : INTEGRATIONS_DATA.filter((i) => i.category === cat.id).length
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition ${
                      selectedCategory === cat.id
                        ? "bg-brand-listerr-600 text-white shadow-sm"
                        : "bg-surface-sunken text-fg-muted hover:bg-surface-raised hover:text-fg"
                    }`}
                  >
                    {cat.label}
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                        selectedCategory === cat.id
                          ? "bg-white/20 text-white"
                          : "bg-border text-fg-muted"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Protocol Filter Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-fg-subtle">
              <SlidersHorizontal className="h-3 w-3" /> Protocol Filter:
            </span>
            <button
              onClick={() => setSelectedProtocol("all")}
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition ${
                selectedProtocol === "all"
                  ? "bg-brand-listerr-100 text-brand-listerr-800 font-bold"
                  : "bg-surface-sunken text-fg-muted hover:bg-border"
              }`}
            >
              All Protocols
            </button>
            {allProtocols.slice(0, 8).map((p) => (
              <button
                key={p}
                onClick={() =>
                  setSelectedProtocol(selectedProtocol === p ? "all" : p)
                }
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition ${
                  selectedProtocol === p
                    ? "bg-brand-listerr-600 text-white font-bold"
                    : "bg-surface-sunken text-fg-muted hover:bg-border"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredIntegrations.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-listerr-300 hover:shadow-md"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-listerr-600">
                        {item.categoryLabel}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-fg group-hover:text-brand-listerr-600">
                        {item.name}
                      </h3>
                    </div>
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                        item.status === "Certified Partner"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : item.status === "Verified & Instant"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : item.status === "Edge Box Plug & Play"
                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                          : "bg-slate-50 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {item.shortDesc}
                  </p>

                  {/* Protocols Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.protocols.map((proto) => (
                      <span
                        key={proto}
                        className="rounded bg-surface-sunken px-2 py-0.5 text-[11px] font-medium text-fg-muted"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>

                  {/* Data Synced Preview */}
                  <div className="mt-5 border-t border-border/60 pt-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-fg-subtle">
                      Data Points Synced:
                    </p>
                    <ul className="mt-2 space-y-1">
                      {item.dataPoints.slice(0, 3).map((dp, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-1.5 text-xs text-fg-muted"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-600" />
                          <span className="truncate">{dp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-4">
                  <span className="text-xs text-fg-subtle">
                    Setup: <strong className="text-fg">{item.setupTime}</strong>
                  </span>
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-listerr-600 hover:text-brand-listerr-700"
                  >
                    View Specs & Triggers <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center">
              <Code2 className="mx-auto h-10 w-10 text-fg-subtle" />
              <h3 className="mt-3 text-base font-bold text-fg">
                No integrations matching your search
              </h3>
              <p className="mt-1 text-sm text-fg-muted">
                Need a proprietary POS connector or legacy CCTV stream? We build custom
                adapters in 48 hours.
              </p>
              <Button
                asChild
                variant="listerr"
                className="mt-5 rounded-xl font-bold"
              >
                <a href="#custom-integration">Request Custom Connector</a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Integration Spec Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-fg-muted hover:bg-surface-sunken hover:text-fg"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="rounded bg-brand-listerr-50 px-2 py-0.5 text-xs font-bold text-brand-listerr-700">
                {activeModalItem.categoryLabel}
              </span>
              <span className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700">
                {activeModalItem.status}
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-extrabold text-fg">
              {activeModalItem.name} Integration Guide
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              {activeModalItem.fullDesc}
            </p>

            {/* Supported Reactive Triggers */}
            <div className="mt-6 rounded-xl border border-border bg-surface-sunken p-4">
              <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-fg">
                <Zap className="h-4 w-4 fill-amber-500 text-amber-500" /> Supported
                Reactive Rules:
              </h4>
              <ul className="mt-3 space-y-2">
                {activeModalItem.reactiveTriggers.map((rule, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs leading-relaxed text-fg-muted"
                  >
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-listerr-600" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Points */}
            <div className="mt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-fg">
                Data Points Synchronized:
              </h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {activeModalItem.dataPoints.map((dp, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-fg"
                  >
                    {dp}
                  </span>
                ))}
              </div>
            </div>

            {/* Sample Payload if available */}
            {activeModalItem.samplePayload && (
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-fg">
                    Sample Event Webhook Payload
                  </h4>
                  <button
                    onClick={() => copyPayload(activeModalItem.samplePayload || "")}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-listerr-600 hover:text-brand-listerr-700"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    {copiedPayload ? "Copied!" : "Copy JSON"}
                  </button>
                </div>
                <pre className="mt-2 max-h-48 overflow-x-auto rounded-lg bg-slate-950 p-3 text-[11px] font-mono text-emerald-400">
                  {activeModalItem.samplePayload}
                </pre>
              </div>
            )}

            <div className="mt-8 flex items-center justify-end gap-3 border-t border-border pt-4">
              <Button
                variant="outline"
                onClick={() => setActiveModalItem(null)}
                className="rounded-xl"
              >
                Close
              </Button>
              <Button asChild variant="listerr" className="rounded-xl font-bold">
                <Link href="/contact">Deploy With Our Engineers</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA for Custom Integrations (Blue & White Theme) */}
      <section
        id="custom-integration"
        className="border-t border-blue-200 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-16 text-white shadow-xl shadow-blue-600/15"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start lg:items-center justify-between gap-8 lg:flex-row">
            <div>
              <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white">
                Custom Connectivity Guarantee
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl text-white">
                Running a Proprietary POS or Legacy Hardware?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
                Our engineering team builds certified custom connectors for proprietary
                billing software, local NVR setups, and franchise CRM systems within 48
                hours of site survey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-shrink-0">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 font-extrabold rounded-xl shadow-lg"
              >
                <Link href="/contact" className="justify-center">Talk to Solutions Architect</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/40 bg-transparent text-white hover:bg-white/10 font-bold rounded-xl"
              >
                <a href="tel:+919145989198" className="justify-center">
                  <PhoneCall className="mr-2 h-4 w-4" /> Call: 9145989198
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
