"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Camera,
  Eye,
  Activity,
  Layers,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  UtensilsCrossed,
  Sparkles,
  PhoneCall,
  Mail,
  ChevronRight,
  AlertTriangle,
  Flame,
  Check,
  TrendingUp,
  Cpu,
  Tv,
  MessageSquare,
  Lock,
  Search,
  Scan,
  Maximize2,
} from "lucide-react"

import {
  CAMERAS_DATA,
  VISION_AI_TASKS,
  SEVEN_POINT_ADVANTAGES,
  REACTIVE_RULES_EXAMPLES,
  type CameraProduct,
} from "@/lib/camera-data"
import { Button } from "@/components/ui/button"

export function AiCamerasHubClient() {
  const [selectedCameraId, setSelectedCameraId] = useState<string>("turret")
  const [selectedTaskIdx, setSelectedTaskIdx] = useState<number>(0)
  const [activeRuleIdx, setActiveRuleIdx] = useState<number>(0)

  // Configurator State
  const [outletType, setOutletType] = useState<
    "qsr" | "fine-dining" | "cloud-kitchen" | "cafe" | "prasadam" | "food-court"
  >("qsr")

  const selectedCamera =
    CAMERAS_DATA.find((c) => c.id === selectedCameraId) || CAMERAS_DATA[0]

  const outletPresets = {
    qsr: {
      title: "Quick-Service Restaurant (QSR)",
      desc: "High counter rush, express combos, drive-thru, and fast cashier turnover.",
      recommendedKits: [
        { model: "Listerr One Turret AI Camera", count: 1, role: "Counter & Queue Tracking" },
        { model: "Listerr One Bullet AI Camera", count: 1, role: "Entrance Footfall & Drive-thru" },
        { model: "Listerr One Digital Signage Screen", count: 1, role: "Reactive Express Menu Board" },
      ],
      edgeBoxNeeded: false,
      savingsEstimate: "₹55,000 - ₹95,000 / mo",
      roiHighlights: [
        "Cuts queue walkouts by 34% via express menu switching",
        "Correlates counter visitors against bills on Petpooja/POSist",
        "Tracks order-to-bag service duration per cashier shift",
      ],
    },
    "fine-dining": {
      title: "Casual & Fine Dining",
      desc: "Table occupancy, dining turnover, waiter hand-gesture requests, and steward pacing.",
      recommendedKits: [
        { model: "Listerr One Dome AI Camera", count: 2, role: "Ceiling Dining Floor Coverage" },
        { model: "Listerr One Bullet AI Camera", count: 1, role: "Main Entrance Guest Counting" },
        { model: "Listerr One Kitchen Hygiene Camera", count: 1, role: "Plating Quality at the Pass" },
      ],
      edgeBoxNeeded: false,
      savingsEstimate: "₹80,000 - ₹1,40,000 / mo",
      roiHighlights: [
        "+18% faster table turnover (alerts captain when table left uncleared > 5 min)",
        "Zero missed guest service calls via raised-hand pose estimation",
        "Live color-coded floor map for host stand seating optimization",
      ],
    },
    "cloud-kitchen": {
      title: "Cloud Kitchen & Delivery Hub",
      desc: "Hygiene gear compliance, FSSAI audit logging, and delivery bag verification at the pass.",
      recommendedKits: [
        { model: "Listerr One Kitchen Hygiene Camera", count: 2, role: "Hot Line & Cold Prep Stations" },
        { model: "Listerr One Turret AI Camera", count: 1, role: "Dispatch Counter & Rider Hand-off" },
        { model: "Vision AI Edge Box", count: 1, role: "Local Offline Inference & Pass Storage" },
      ],
      edgeBoxNeeded: true,
      savingsEstimate: "₹45,000 - ₹75,000 / mo",
      roiHighlights: [
        "100% automated cap, glove & apron shift compliance logs",
        "High-res plating & packing snapshot captured per aggregator dispatch",
        "Zero aggregator packaging dispute penalties",
      ],
    },
    cafe: {
      title: "Café & Bakery",
      desc: "Peak-hour barista staffing, display counter dwell time, and footfall conversion.",
      recommendedKits: [
        { model: "Listerr One Turret AI Camera", count: 1, role: "Bakery Billing Counter" },
        { model: "Listerr One 360° Fisheye AI Camera", count: 1, role: "Lounge Seating Dwell Heatmap" },
        { model: "Listerr One Digital Signage Screen", count: 1, role: "Afternoon Snack Specials" },
      ],
      edgeBoxNeeded: false,
      savingsEstimate: "₹35,000 - ₹60,000 / mo",
      roiHighlights: [
        "Identifies dead tables and optimal pastry display placement",
        "Measures footfall-to-bill ratio to evaluate impulse bakery purchases",
        "Triggers afternoon specials on screens during slow hours",
      ],
    },
    prasadam: {
      title: "Temple Prasadam Counters & Religious Trusts",
      desc: "Massive crowd throughput, queue pacing, safety, and counter audit transparency.",
      recommendedKits: [
        { model: "Listerr One Turret AI Camera", count: 2, role: "Multi-window Distribution Queues" },
        { model: "Listerr One Bullet AI Camera", count: 2, role: "Entry/Exit Crowd Line-crossing" },
        { model: "Listerr One Kitchen Hygiene Camera", count: 2, role: "Prasadam Preparation Halls" },
        { model: "Vision AI Edge Box", count: 1, role: "Heavy Edge Ingestion & Local Storage" },
      ],
      edgeBoxNeeded: true,
      savingsEstimate: "High Crowd Safety & Zero Bottlenecks",
      roiHighlights: [
        "Continuous crowd counting and queue pacing across distribution queues",
        "Food safety monitoring in large-scale holy kitchen prep halls",
        "Works 100% offline during intermittent temple network dropouts",
      ],
    },
    "food-court": {
      title: "Mall Food Court & Multi-Outlet Concourse",
      desc: "Common seating availability, tray clearing coordination, and tenant footfall comparison.",
      recommendedKits: [
        { model: "Listerr One 360° Fisheye AI Camera", count: 3, role: "Central Seating Zone Heatmaps" },
        { model: "Listerr One Dome AI Camera", count: 4, role: "Table Clearing & Seat Turnover" },
        { model: "Vision AI Edge Box", count: 1, role: "Multi-tenant Camera Orchestration" },
      ],
      edgeBoxNeeded: true,
      savingsEstimate: "₹1,50,000 - ₹3,00,000 / mo",
      roiHighlights: [
        "Directs hungry guests to open seating sections via digital display boards",
        "Cuts uncleared tray table dwell times by 40%",
        "Comparative footfall analytics across food court tenant kiosks",
      ],
    },
  }

  const currentPreset = outletPresets[outletType]

  return (
    <div className="bg-bg">
      {/* Flagship Hero (Blue and White Theme) */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50/80 via-white to-blue-50/40 py-20 text-blue-950 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.1),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-bold text-blue-700 shadow-xs backdrop-blur">
              <Camera className="h-3.5 w-3.5 text-blue-600" />
              Listerr One AI Camera Series · Product Catalogue
            </div>

            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              See more. Serve better.
            </p>

            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-blue-950">
              Vision AI Built for{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Indian Restaurants & F&B
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              Most outlet cameras only record. Nobody watches the footage until something
              goes wrong. The Listerr One series watches for you: it counts guests,
              measures queues, tracks table status, and checks kitchen hygiene — turning
              video into live numbers and alerts.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-600/25">
                <a href="#camera-range">Explore the 6 Camera Models</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-blue-200 bg-white text-blue-700 hover:bg-blue-50 font-bold"
              >
                <a href="#outlet-configurator">Configure Your Outlet</a>
              </Button>
            </div>
          </div>

          {/* Value Props Row (Blue & White) */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-blue-100 pt-8 sm:grid-cols-4 lg:grid-cols-6 text-center">
            <div className="p-3 bg-white rounded-xl border border-blue-100/80 shadow-2xs">
              <p className="text-sm font-bold text-blue-950">On-Device AI</p>
              <p className="text-xs text-slate-500 mt-1">Runs locally on camera</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-blue-100/80 shadow-2xs">
              <p className="text-sm font-bold text-blue-950">Works Offline</p>
              <p className="text-xs text-slate-500 mt-1">Syncs when online</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-blue-100/80 shadow-2xs">
              <p className="text-sm font-bold text-blue-950">Privacy Blurring</p>
              <p className="text-xs text-slate-500 mt-1">Faces & plates masked</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-blue-100/80 shadow-2xs">
              <p className="text-sm font-bold text-blue-950">Single-Cable PoE</p>
              <p className="text-xs text-slate-500 mt-1">Power + Gigabit data</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-blue-100/80 shadow-2xs">
              <p className="text-sm font-bold text-blue-950">POS Paired</p>
              <p className="text-xs text-slate-500 mt-1">Petpooja & Restroworks</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-blue-100/80 shadow-2xs">
              <p className="text-sm font-bold text-blue-950">WhatsApp Alerts</p>
              <p className="text-xs text-slate-500 mt-1">Instant captain pings</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 7-Point Advantage (Page 2) */}
      <section className="py-16 lg:py-24 border-b border-border bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-listerr-600">
              The Listerr Difference
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              The 7-Point Advantage
            </h2>
            <p className="mt-3 text-base text-fg-muted">
              Why leading Indian restaurant chains choose Listerr Vision AI over ordinary
              surveillance systems.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SEVEN_POINT_ADVANTAGES.map((adv) => (
              <div
                key={adv.number}
                className="relative rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-listerr-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-listerr-50 text-base font-extrabold text-brand-listerr-600">
                  {adv.number}
                </div>
                <h3 className="mt-4 text-lg font-bold text-fg">{adv.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{adv.desc}</p>
              </div>
            ))}

            {/* CTA Card */}
            <div className="rounded-2xl border border-brand-listerr-200 bg-gradient-to-br from-brand-listerr-500 to-indigo-600 p-6 text-white shadow-md flex flex-col justify-between">
              <div>
                <span className="rounded bg-white/20 px-2 py-0.5 text-xs font-bold">
                  Zero Replacement Cost
                </span>
                <h3 className="mt-3 text-xl font-bold">Already Have CCTV Cameras?</h3>
                <p className="mt-2 text-xs text-brand-listerr-100 leading-relaxed">
                  The Vision AI Edge Box upgrades your existing Hikvision, CP Plus, or
                  Dahua cameras into smart sensors in under 30 minutes.
                </p>
              </div>
              <Button
                asChild
                className="mt-6 bg-white text-brand-listerr-900 hover:bg-brand-listerr-50 font-bold rounded-xl"
              >
                <Link href="/hardware/ai-cameras/edge-box">View Edge Box Specs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Loop: See -> Understand -> Measure -> Act (Page 3) */}
      <section className="py-16 lg:py-24 border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-listerr-600">
              How It Works
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              From Footage to Decisions
            </h2>
            <p className="mt-3 text-base text-fg-muted">
              A camera that only records adds to your work. A Listerr AI camera takes work
              off your plate. Every camera follows the same four-step loop.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-surface-sunken p-6 relative">
              <span className="text-3xl font-black text-brand-listerr-200">01</span>
              <div className="mt-2 flex items-center gap-2">
                <Camera className="h-5 w-5 text-brand-listerr-600" />
                <h3 className="text-lg font-bold text-fg">See</h3>
              </div>
              <p className="mt-2 text-sm text-fg-muted">
                Cameras capture the counter, floor, kitchen, and entrance around the clock.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface-sunken p-6 relative">
              <span className="text-3xl font-black text-brand-listerr-200">02</span>
              <div className="mt-2 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-brand-listerr-600" />
                <h3 className="text-lg font-bold text-fg">Understand</h3>
              </div>
              <p className="mt-2 text-sm text-fg-muted">
                Listerr Vision AI detects, tracks, and classifies on the device, frame by
                frame.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface-sunken p-6 relative">
              <span className="text-3xl font-black text-brand-listerr-200">03</span>
              <div className="mt-2 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-brand-listerr-600" />
                <h3 className="text-lg font-bold text-fg">Measure</h3>
              </div>
              <p className="mt-2 text-sm text-fg-muted">
                Events become numbers: footfall, wait times, table turns, compliance rates.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-listerr-300 bg-brand-listerr-50/50 p-6 relative ring-1 ring-brand-listerr-500/20">
              <span className="text-3xl font-black text-brand-listerr-300">04</span>
              <div className="mt-2 flex items-center gap-2">
                <Zap className="h-5 w-5 fill-brand-listerr-600 text-brand-listerr-600" />
                <h3 className="text-lg font-bold text-brand-listerr-900">Act</h3>
              </div>
              <p className="mt-2 text-sm text-brand-listerr-800">
                Alerts reach WhatsApp, the dashboard updates, and digital signage & POS
                respond.
              </p>
            </div>
          </div>

          {/* Example Box from PDF Page 3 (Blue & White) */}
          <div className="mt-10 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-6 text-white sm:p-8 shadow-xl shadow-blue-600/15">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="rounded bg-white/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                  Real-World Example
                </span>
                <h4 className="mt-2 text-xl font-bold">Counter Queue Reactive Pacing</h4>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100">
                  The camera counts five people in the queue zone and estimates a four-minute
                  wait. The manager gets a WhatsApp alert, and the digital menu board
                  instantly switches to quick-serve combos until the line clears.
                </p>
              </div>
              <Button asChild className="font-bold rounded-xl whitespace-nowrap bg-white text-blue-700 hover:bg-blue-50 shadow-md">
                <Link href="/hardware/ai-cameras/turret">Explore Turret Camera</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Ways Our Cameras Understand a Scene (Page 4) */}
      <section className="py-16 lg:py-24 border-b border-border bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-listerr-600">
              Computer Vision Tasks
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              Eight Ways Our Cameras Understand a Scene
            </h2>
            <p className="mt-3 text-base text-fg-muted">
              Listerr Vision AI combines eight core computer-vision tasks, running live on
              the camera.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VISION_AI_TASKS.map((task, idx) => (
              <div
                key={task.id}
                onClick={() => setSelectedTaskIdx(idx)}
                className={`cursor-pointer rounded-2xl border p-5 transition ${
                  selectedTaskIdx === idx
                    ? "border-brand-listerr-500 bg-white ring-2 ring-brand-listerr-500/20 shadow-md"
                    : "border-border bg-white hover:border-brand-listerr-200 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-fg-subtle">0{idx + 1}</span>
                  <span className="rounded bg-brand-listerr-50 px-2 py-0.5 text-[10px] font-bold text-brand-listerr-700">
                    On-Device
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border bg-slate-100 my-2 shadow-xs">
                  <Image
                    src={task.image}
                    alt={task.title}
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                </div>

                <h3 className="mt-3 text-base font-bold text-fg">{task.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                  {task.description}
                </p>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-[10px] uppercase font-bold text-fg-subtle">
                    Application:
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-brand-listerr-700">
                    {task.application}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How Tasks Combine into Solutions (Page 4 Bottom) */}
          <div className="mt-12 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-fg-muted">
              How Tasks Combine into Outlet Solutions:
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-surface-sunken p-4 text-center">
                <p className="text-xs text-fg-muted">Detection + Zones + Tracking</p>
                <p className="mt-1 text-sm font-bold text-fg">Queue Management</p>
              </div>
              <div className="rounded-xl border border-border bg-surface-sunken p-4 text-center">
                <p className="text-xs text-fg-muted">Detection + Classification</p>
                <p className="mt-1 text-sm font-bold text-fg">Kitchen Hygiene Checks</p>
              </div>
              <div className="rounded-xl border border-border bg-surface-sunken p-4 text-center">
                <p className="text-xs text-fg-muted">Tracking + Floor Zones</p>
                <p className="mt-1 text-sm font-bold text-fg">Heatmaps & Dwell Time</p>
              </div>
              <div className="rounded-xl border border-border bg-surface-sunken p-4 text-center">
                <p className="text-xs text-fg-muted">Pose + Table Zones</p>
                <p className="mt-1 text-sm font-bold text-fg">Service Request Alerts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Hardware Devices Showcase (Pages 5 - 10) */}
      <section id="camera-range" className="py-16 lg:py-24 border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-listerr-600">
                Hardware Portfolio
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
                The Listerr One AI Camera Range
              </h2>
              <p className="mt-2 max-w-2xl text-base text-fg-muted">
                Engineered for commercial kitchens, bustling dining rooms, and high-rush
                counters. Every model runs Vision AI on the device itself.
              </p>
            </div>

            {/* Quick Model Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {CAMERAS_DATA.map((cam) => (
                <button
                  key={cam.id}
                  onClick={() => setSelectedCameraId(cam.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    selectedCameraId === cam.id
                      ? "bg-brand-listerr-600 text-white shadow-sm"
                      : "bg-surface-sunken text-fg-muted hover:bg-border hover:text-fg"
                  }`}
                >
                  {cam.formFactor}
                </button>
              ))}
            </div>
          </div>

          {/* Active Camera Detailed Spotlight */}
          <div className="mt-10 rounded-3xl border border-border bg-gradient-to-br from-white via-surface-raised to-brand-listerr-50/20 p-6 shadow-lg sm:p-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Device Info & Specs */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-brand-listerr-100 px-3 py-1 text-xs font-extrabold text-brand-listerr-800">
                    {selectedCamera.visualBadge}
                  </span>
                  <span className="text-xs text-fg-muted">
                    Form Factor: <strong>{selectedCamera.formFactor}</strong>
                  </span>
                </div>

                <h3 className="mt-3 text-3xl font-black text-fg sm:text-4xl">
                  {selectedCamera.name}
                </h3>
                <p className="mt-2 text-base font-medium text-brand-listerr-700">
                  {selectedCamera.tagline}
                </p>

                {/* Best For Tags */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-fg-subtle">Best For:</span>
                  {selectedCamera.bestFor.map((bf) => (
                    <span
                      key={bf}
                      className="rounded bg-white border border-border px-2.5 py-0.5 text-xs font-semibold text-fg"
                    >
                      {bf}
                    </span>
                  ))}
                </div>

                {/* Core Hardware Specs Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-border bg-white p-3">
                    <p className="text-[10px] uppercase font-bold text-fg-subtle">Sensor</p>
                    <p className="mt-1 text-xs font-bold text-fg">
                      {selectedCamera.coreSpecs.resolution}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-3">
                    <p className="text-[10px] uppercase font-bold text-fg-subtle">Connectivity</p>
                    <p className="mt-1 text-xs font-bold text-fg">
                      {selectedCamera.coreSpecs.connectivity}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-3">
                    <p className="text-[10px] uppercase font-bold text-fg-subtle">Casing</p>
                    <p className="mt-1 text-xs font-bold text-fg">
                      {selectedCamera.coreSpecs.weatherOrRating}
                    </p>
                  </div>
                </div>

                {/* Recommended Vision AI Solutions */}
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-fg-subtle">
                    Recommended Vision AI Solutions:
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {selectedCamera.visionAiCapabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 rounded-lg border border-border/80 bg-white p-3"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-listerr-600" />
                        <div>
                          <p className="text-xs font-bold text-fg">{cap.title}</p>
                          <p className="text-[11px] text-fg-muted leading-tight mt-0.5">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placement Recommendation */}
                <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-xs text-blue-900">
                  <strong>Placement:</strong> {selectedCamera.recommendedPlacement}
                </div>

                {/* CTA Link to Dedicated Page */}
                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button asChild variant="listerr" className="w-full sm:w-auto rounded-xl font-bold shadow-md">
                    <Link href={`/hardware/ai-cameras/${selectedCamera.id}`}>
                      View Complete {selectedCamera.formFactor} Specs
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto rounded-xl border-blue-200 bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                    <a href="#outlet-configurator">Calculate Outlet ROI</a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Real Hardware Studio Shot & Live View Demonstration */}
              <div className="lg:col-span-5 space-y-4">
                {/* Real Scraped Hardware Photo */}
                <div className="relative aspect-[4/3] w-full rounded-2xl border border-blue-100 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-4 shadow-xl overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                  <Image
                    src={selectedCamera.image}
                    alt={selectedCamera.name}
                    fill
                    className="object-contain p-2 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 450px"
                    priority
                  />
                  <div className="absolute top-3 left-3 z-10 flex gap-2">
                    <span className="rounded bg-black/75 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                      ON-DEVICE AI
                    </span>
                    <span className="rounded bg-black/75 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-blue-300">
                      {selectedCamera.formFactor.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* What It Sees Live View Card (Blue & White Theme) */}
                <div className="rounded-2xl border border-blue-100 bg-white p-5 text-blue-950 shadow-md">
                  <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-bold tracking-wider uppercase text-blue-950">
                        What It Sees (Live View)
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-600 font-bold">
                      ON-DEVICE AI · 25 FPS
                    </span>
                  </div>

                  <div className="mt-3 aspect-video rounded-xl border border-blue-100 bg-slate-900 overflow-hidden relative shadow-inner">
                    <Image
                      src={selectedCamera.liveViewImage}
                      alt={`${selectedCamera.name} What It Sees`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-2.5">
                      <p className="text-[11px] text-white font-medium">
                        {selectedCamera.liveViewDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl bg-blue-50/60 border border-blue-100 p-2.5 text-xs text-blue-950">
                    <p className="font-bold text-blue-900">Privacy Guarantee:</p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-slate-600">
                      Faces and license plates are blurred on the camera before saving or
                      exporting. Continuous video stays inside your outlet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outlet Analytics Dashboard Preview (Page 13) */}
      <section className="py-16 lg:py-24 border-b border-border bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-listerr-600">
              Operations Intelligence
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              Numbers Your Outlet Manager Can Act On
            </h2>
            <p className="mt-3 text-base text-fg-muted">
              Every event the cameras detect lands in the Listerr dashboard alongside your
              POS sales. You see how many people came in, how long they waited, and how
              many bought something.
            </p>
          </div>

          {/* Sample Mansarovar Outlet Dashboard Card */}
          <div className="mt-12 rounded-3xl border border-border bg-white p-6 shadow-md sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                <h3 className="text-lg font-bold text-fg">
                  Listerr Vision AI · Outlet Dashboard
                </h3>
              </div>
              <span className="rounded-md bg-surface-sunken px-3 py-1 text-xs font-semibold text-fg-muted">
                Mansarovar Outlet · Tuesday
              </span>
            </div>

            {/* Top 4 KPI Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-border bg-surface-sunken p-5">
                <p className="text-xs font-bold text-fg-muted">Footfall Today</p>
                <p className="mt-2 text-3xl font-black text-fg">1,386</p>
                <p className="mt-1 text-xs font-semibold text-emerald-600">
                  +8% vs last Tuesday
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface-sunken p-5">
                <p className="text-xs font-bold text-fg-muted">Average Queue Wait</p>
                <p className="mt-2 text-3xl font-black text-fg">3m 22s</p>
                <p className="mt-1 text-xs font-semibold text-amber-600">
                  Peak 6m 24s at 8 pm
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface-sunken p-5">
                <p className="text-xs font-bold text-fg-muted">Table Turnover</p>
                <p className="mt-2 text-3xl font-black text-fg">48 min</p>
                <p className="mt-1 text-xs text-fg-muted">Lunch 41 · Dinner 55</p>
              </div>

              <div className="rounded-2xl border border-border bg-surface-sunken p-5">
                <p className="text-xs font-bold text-fg-muted">Visitors Who Billed</p>
                <p className="mt-2 text-3xl font-black text-brand-listerr-600">60%</p>
                <p className="mt-1 text-xs text-fg-muted">836 bills ÷ 1,386 visitors</p>
              </div>
            </div>

            {/* Split Row: Hygiene Checks & Live Alerts */}
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Hygiene Compliance by Shift */}
              <div className="rounded-2xl border border-border p-5">
                <h4 className="text-sm font-bold text-fg">
                  Kitchen Hygiene Compliance (% checks passed by shift)
                </h4>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-fg">
                      <span>Morning Shift</span>
                      <span>97%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-surface-sunken">
                      <div className="h-2 rounded-full bg-emerald-500" style={{ width: "97%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-fg">
                      <span>Afternoon Shift</span>
                      <span>93%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-surface-sunken">
                      <div className="h-2 rounded-full bg-emerald-500" style={{ width: "93%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-fg">
                      <span>Evening Peak</span>
                      <span className="text-amber-600 font-bold">86%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-surface-sunken">
                      <div className="h-2 rounded-full bg-amber-500" style={{ width: "86%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-fg">
                      <span>Night Closing</span>
                      <span>91%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-surface-sunken">
                      <div className="h-2 rounded-full bg-emerald-500" style={{ width: "91%" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Today's Alerts Feed */}
              <div className="rounded-2xl border border-border p-5">
                <h4 className="text-sm font-bold text-fg">Today's Real-Time Alerts</h4>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2.5 rounded-lg bg-red-50 p-2.5 text-xs text-red-900 border border-red-200">
                    <span className="h-2 w-2 rounded-full bg-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">8:04 pm</strong> — Queue above 5 min at Counter #1
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-lg bg-amber-50 p-2.5 text-xs text-amber-900 border border-amber-200">
                    <span className="h-2 w-2 rounded-full bg-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">7:31 pm</strong> — Table 12 left uncleared for 9 min
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-lg bg-amber-50 p-2.5 text-xs text-amber-900 border border-amber-200">
                    <span className="h-2 w-2 rounded-full bg-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">6:10 pm</strong> — No gloves detected on kitchen line 2
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-lg bg-blue-50 p-2.5 text-xs text-blue-900 border border-blue-200">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">1:15 pm</strong> — Lunch footfall 18% above forecast
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Manager Takeaway Actions (From PDF Page 13) */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-border pt-6">
              <div className="rounded-xl border border-border p-4 bg-surface-raised">
                <p className="text-xs font-bold text-fg">Staff the Peaks</p>
                <p className="mt-1 text-xs text-fg-muted leading-relaxed">
                  Queue wait passes 5 minutes around 1 pm and again from 7 to 8 pm. Opening a
                  second counter targets the worst wait spikes.
                </p>
              </div>
              <div className="rounded-xl border border-border p-4 bg-surface-raised">
                <p className="text-xs font-bold text-fg">Find Lost Sales</p>
                <p className="mt-1 text-xs text-fg-muted leading-relaxed">
                  550 visitors left without a bill. Comparing that by hour with queue wait
                  shows whether long lines are turning guests away.
                </p>
              </div>
              <div className="rounded-xl border border-border p-4 bg-surface-raised">
                <p className="text-xs font-bold text-fg">Coach the Evening Shift</p>
                <p className="mt-1 text-xs text-fg-muted leading-relaxed">
                  Hygiene compliance falls to 86% in the evening, the lowest of the day and a
                  clear focus for supervisors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Outlet Reactive Rules Engine (Page 14) */}
      <section className="py-16 lg:py-24 border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-listerr-600">
              The Listerr Advantage
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              A Camera Wired into the Whole Outlet
            </h2>
            <p className="mt-3 text-base text-fg-muted">
              A stand-alone AI camera gives you another dashboard to check. A Listerr camera
              connects to the same platform that runs your billing, screens, and messages.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {REACTIVE_RULES_EXAMPLES.map((rule, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-border bg-surface-raised p-5 transition hover:border-brand-listerr-400 hover:shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="rounded bg-brand-listerr-100 px-2 py-0.5 text-xs font-extrabold text-brand-listerr-800">
                    IF
                  </span>
                  <p className="text-sm font-bold text-fg">{rule.condition}</p>
                  <span className="hidden sm:inline text-xs text-fg-subtle">
                    ({rule.source})
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-0 border-border pt-3 md:pt-0">
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-extrabold text-emerald-800">
                    THEN
                  </span>
                  <p className="text-xs font-medium text-fg-muted max-w-md">
                    {rule.action}
                  </p>
                  <span className="rounded-full bg-white border border-border px-2.5 py-0.5 text-[10px] font-bold text-fg-subtle whitespace-nowrap">
                    {rule.destination}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Outlet Configurator & ROI Calculator (Blue & White Theme) */}
      <section
        id="outlet-configurator"
        className="py-16 lg:py-24 border-b border-blue-100 bg-gradient-to-b from-blue-50/60 via-white to-blue-50/40 text-blue-950"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200">
              Interactive Outlet Configurator
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-blue-950">
              Find the Right Vision AI Setup for Your Outlet
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Select your establishment type to see recommended camera models, edge
              processing requirements, and estimated walkout reductions.
            </p>
          </div>

          {/* Outlet Type Selector Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {[
              { id: "qsr", label: "Quick-Service (QSR)" },
              { id: "fine-dining", label: "Casual & Fine Dining" },
              { id: "cloud-kitchen", label: "Cloud Kitchen" },
              { id: "cafe", label: "Café & Bakery" },
              { id: "prasadam", label: "Temple Prasadam" },
              { id: "food-court", label: "Food Court" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setOutletType(tab.id as any)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                  outletType === tab.id
                    ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-500"
                    : "bg-white text-slate-700 border border-blue-200 hover:bg-blue-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Configurator Result Canvas (Blue & White) */}
          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-500/5 sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left Column: Recommended Kit */}
              <div className="lg:col-span-7">
                <span className="text-xs uppercase font-bold tracking-wider text-blue-600">
                  Recommended Equipment Package
                </span>
                <h3 className="mt-1 text-2xl font-extrabold text-blue-950 sm:text-3xl">
                  {currentPreset.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{currentPreset.desc}</p>

                <div className="mt-6 space-y-3">
                  {currentPreset.recommendedKits.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/30 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                          {item.count}x
                        </span>
                        <div>
                          <p className="text-sm font-bold text-blue-950">{item.model}</p>
                          <p className="text-xs text-slate-500">{item.role}</p>
                        </div>
                      </div>
                      <span className="rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-mono text-emerald-700 font-bold">
                        INCLUDED
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-3 text-xs text-slate-600">
                  <Cpu className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span>
                    Vision AI Edge Box:{" "}
                    <strong className="text-blue-950">
                      {currentPreset.edgeBoxNeeded
                        ? "Recommended for High Throughput"
                        : "Optional (Cameras Run AI On-Device)"}
                    </strong>
                  </span>
                </div>
              </div>

              {/* Right Column: ROI & Estimated Impact (Vibrant Blue Card) */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-6 text-white shadow-lg">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Projected Operational Impact
                  </span>
                  <p className="mt-1 text-3xl font-black text-white">
                    {currentPreset.savingsEstimate}
                  </p>
                  <p className="text-xs text-blue-100">Estimated value created per outlet</p>

                  <ul className="mt-6 space-y-3">
                    {currentPreset.roiHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-white">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/20 pt-6">
                  <p className="text-xs text-blue-100 mb-3">
                    Includes site survey, mounting, zone setup, staff training & 1-year warranty.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl shadow-lg"
                  >
                    <Link href="/contact">Book Site Survey for {currentPreset.title}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started & Site Survey Contact (Pages 16 & 17) */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-surface-raised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-listerr-600">
              Getting Started
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              From First Call to Live Dashboard in Four Steps
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-listerr-50 text-sm font-black text-brand-listerr-700">
                1
              </span>
              <h3 className="mt-4 text-base font-bold text-fg">Site Survey</h3>
              <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                We walk the outlet and map what to measure and where each camera goes.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-listerr-50 text-sm font-black text-brand-listerr-700">
                2
              </span>
              <h3 className="mt-4 text-base font-bold text-fg">Installation</h3>
              <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                Cameras or Edge Box installed, networked, and connected to Listerr.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-listerr-50 text-sm font-black text-brand-listerr-700">
                3
              </span>
              <h3 className="mt-4 text-base font-bold text-fg">Zones & Rules</h3>
              <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                Queues, tables, and count lines drawn; alert rules agreed with you.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-listerr-50 text-sm font-black text-brand-listerr-700">
                4
              </span>
              <h3 className="mt-4 text-base font-bold text-fg">Training & Go-Live</h3>
              <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                Managers are trained on the dashboard and alerts, then we go live.
              </p>
            </div>
          </div>

          {/* Book Site Survey Direct Banner (Page 16/17) */}
          <div className="mt-14 rounded-3xl border border-border bg-gradient-to-r from-brand-listerr-600 to-indigo-700 p-8 text-white shadow-xl sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <span className="rounded bg-white/20 px-3 py-1 text-xs font-bold">
                  Corporate Office: Tilak Tower, Mansarovar, Jaipur
                </span>
                <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                  Book a Site Survey Today
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-listerr-100 sm:text-base">
                  Tell us about your outlet and we will suggest the cameras and solutions to
                  start with. Free on-site feasibility report for multi-outlet brands.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-listerr-900 hover:bg-brand-listerr-50 font-bold rounded-xl shadow-lg"
                >
                  <a href="tel:+919145989198">
                    <PhoneCall className="mr-2 h-4 w-4" /> Call 9145989198
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl"
                >
                  <a href="mailto:marketplace@listerr.in">
                    <Mail className="mr-2 h-4 w-4" /> marketplace@listerr.in
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
