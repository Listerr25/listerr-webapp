"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Camera,
  Eye,
  Zap,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Clock,
  Shield,
  MessageSquare,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Maximize2,
  Tv,
  Filter,
  SlidersHorizontal,
  Layers,
  Activity,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CAMERAS_DATA,
  VISION_AI_TASKS,
  CAMERA_CATEGORIES,
  VISION_TASK_CATEGORIES,
  type CameraProduct,
  type VisionAiTask,
} from "@/lib/camera-data"

export function HomeVisionAiSection({ isDarkTheme = false }: { isDarkTheme?: boolean }) {
  // Camera filter and selection state
  const [selectedCameraCategory, setSelectedCameraCategory] = useState<string>("all")
  const [selectedCameraId, setSelectedCameraId] = useState<string>("turret")

  // Vision Task filter and selection state
  const [selectedTaskCategory, setSelectedTaskCategory] = useState<string>("all")
  const [selectedTaskId, setSelectedTaskId] = useState<string>("object-detection")

  // Filtered Cameras
  const filteredCameras = useMemo(() => {
    if (selectedCameraCategory === "all") return CAMERAS_DATA
    return CAMERAS_DATA.filter((cam) => cam.category === selectedCameraCategory)
  }, [selectedCameraCategory])

  const selectedCamera = useMemo(() => {
    const found = filteredCameras.find((c) => c.id === selectedCameraId)
    if (found) return found
    return filteredCameras[0] || CAMERAS_DATA[2]
  }, [filteredCameras, selectedCameraId])

  // Filtered Vision AI Tasks
  const filteredTasks = useMemo(() => {
    if (selectedTaskCategory === "all") return VISION_AI_TASKS
    return VISION_AI_TASKS.filter((task) => task.category === selectedTaskCategory)
  }, [selectedTaskCategory])

  const selectedTask = useMemo(() => {
    const found = filteredTasks.find((t) => t.id === selectedTaskId)
    if (found) return found
    return filteredTasks[0] || VISION_AI_TASKS[0]
  }, [filteredTasks, selectedTaskId])

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-blue-50/60 via-white to-blue-50/40 text-blue-950 border-y border-blue-100">
      {/* Background ambient blue glow & subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(37,99,235,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Category Badge */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-xs backdrop-blur-md">
            <Camera className="h-4 w-4 text-blue-600" />
            Listerr One AI Camera Series · Hardware & Vision AI
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-blue-950">
            See more.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Serve better.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Most outlet cameras only record. Nobody watches the footage until something goes wrong.
            The <strong>Listerr One AI Camera Series</strong> watches for you — counting guests, measuring queues,
            tracking table status, and checking kitchen hygiene in real time.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-900 shadow-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" /> On-Device AI (Zero Cloud Lag)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-900 shadow-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" /> Video Stays Inside Outlet
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-900 shadow-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" /> Single-Cable PoE
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-900 shadow-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" /> DPDP Act 2023 Face Blurring
            </span>
          </div>
        </div>

        {/* ─── INTERACTIVE CAMERA HARDWARE SHOWCASE ─── */}
        <div className="mt-14">
          
          {/* Responsive Filter Bar for Hardware Models */}
          <div className="rounded-2xl border border-blue-100 bg-white/90 p-3 sm:p-4 shadow-sm backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-950">
                  Filter by Placement Zone:
                </span>
              </div>

              {/* Mobile Dropdown Filter (Visible on small screens) */}
              <div className="block sm:hidden w-full">
                <select
                  value={selectedCameraCategory}
                  onChange={(e) => {
                    const val = e.target.value
                    setSelectedCameraCategory(val)
                    const matching = val === "all" ? CAMERAS_DATA : CAMERAS_DATA.filter((c) => c.category === val)
                    if (matching.length > 0) setSelectedCameraId(matching[0].id)
                  }}
                  className="w-full rounded-xl border border-blue-200 bg-blue-50/50 py-2.5 px-3 text-xs font-bold text-blue-950 focus:border-blue-500 focus:outline-none"
                >
                  {CAMERA_CATEGORIES.map((cat) => {
                    const count = cat.id === "all" ? CAMERAS_DATA.length : CAMERAS_DATA.filter((c) => c.category === cat.id).length
                    return (
                      <option key={cat.id} value={cat.id}>
                        {cat.label} ({count})
                      </option>
                    )
                  })}
                </select>
              </div>

              {/* Desktop/Tablet Pill Filter */}
              <div className="hidden sm:flex flex-wrap items-center gap-1.5">
                {CAMERA_CATEGORIES.map((cat) => {
                  const isSelected = selectedCameraCategory === cat.id
                  const count = cat.id === "all" ? CAMERAS_DATA.length : CAMERAS_DATA.filter((c) => c.category === cat.id).length
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCameraCategory(cat.id)
                        const matching = cat.id === "all" ? CAMERAS_DATA : CAMERAS_DATA.filter((c) => c.category === cat.id)
                        if (matching.length > 0) setSelectedCameraId(matching[0].id)
                      }}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-xs shadow-blue-600/30"
                          : "bg-blue-50/60 text-slate-600 hover:bg-blue-100/60 hover:text-blue-900"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                          isSelected ? "bg-white/25 text-white" : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Model Selector Tabs (Filtered) */}
            <div className="mt-3 pt-3 border-t border-blue-100/80 flex items-center justify-start overflow-x-auto gap-2 no-scrollbar scroll-smooth">
              {filteredCameras.map((cam) => {
                const active = cam.id === selectedCamera.id
                return (
                  <button
                    key={cam.id}
                    onClick={() => setSelectedCameraId(cam.id)}
                    className={`flex-shrink-0 flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 ${
                      active
                        ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-500"
                        : "bg-white text-slate-700 border border-blue-100 hover:bg-blue-50 hover:text-blue-900 shadow-2xs"
                    }`}
                  >
                    <Camera className={`h-3.5 w-3.5 ${active ? "text-white" : "text-blue-600"}`} />
                    <span>{cam.formFactor}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                        active ? "bg-white/20 text-white" : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {cam.visualBadge.split("&")[0]}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Model Spotlight Card */}
          <div className="mt-6 rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-500/5 p-5 sm:p-8 lg:p-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Real Hardware Studio Shot (Blue/White Frame) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-2xl border border-blue-100 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center p-6 shadow-md group overflow-hidden">
                  <div className="absolute inset-0 bg-radial-gradient from-blue-500/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={selectedCamera.image}
                      alt={selectedCamera.name}
                      fill
                      className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority
                    />
                  </div>

                  {/* Badges on Hardware Frame */}
                  <div className="absolute top-3 left-3 z-10 flex gap-2">
                    <span className="rounded bg-black/75 backdrop-blur-sm border border-white/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                      ON-DEVICE AI
                    </span>
                    <span className="rounded bg-black/75 backdrop-blur-sm border border-white/10 px-2 py-0.5 text-[10px] font-mono text-blue-300">
                      PoE GIGABIT
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="rounded bg-black/75 backdrop-blur-sm border border-white/10 px-2 py-0.5 text-[10px] font-mono text-white">
                      {selectedCamera.coreSpecs.weatherOrRating.split(" ")[0]}
                    </span>
                  </div>
                </div>

                {/* Specs quick pills (Blue & White) */}
                <div className="mt-4 grid grid-cols-3 gap-2 w-full text-center">
                  <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-2.5">
                    <p className="text-[10px] font-mono text-blue-600 uppercase font-bold">Sensor</p>
                    <p className="text-xs font-bold text-blue-950 truncate">{selectedCamera.coreSpecs.resolution.split(" ")[0]}</p>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-2.5">
                    <p className="text-[10px] font-mono text-blue-600 uppercase font-bold">Power</p>
                    <p className="text-xs font-bold text-blue-950 truncate">{selectedCamera.coreSpecs.power.split(" ")[0]}</p>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-2.5">
                    <p className="text-[10px] font-mono text-blue-600 uppercase font-bold">Storage</p>
                    <p className="text-xs font-bold text-blue-950 truncate">Local Edge</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Model Details, Live View Image & Actions */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-0.5 text-xs font-bold">
                      {selectedCamera.visualBadge}
                    </span>
                    <span className="text-xs text-slate-500">
                      Placement: <strong className="text-slate-700">{selectedCamera.recommendedPlacement.slice(0, 65)}...</strong>
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl sm:text-3xl font-black text-blue-950">
                    {selectedCamera.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {selectedCamera.tagline}
                  </p>

                  {/* What It Sees Live View Graphic */}
                  <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/30 p-4">
                    <div className="flex items-center justify-between mb-2.5 border-b border-blue-100 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-950">
                          What It Sees (Live View)
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold">
                        ANONYMOUS DETECTIONS ONLY
                      </span>
                    </div>

                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-blue-100 bg-white shadow-xs">
                      <Image
                        src={selectedCamera.liveViewImage}
                        alt={`${selectedCamera.name} What It Sees`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 550px"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-3">
                        <p className="text-xs text-white font-medium">
                          {selectedCamera.liveViewDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedCamera.visionAiCapabilities.slice(0, 4).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 rounded-xl border border-blue-100 bg-white p-2.5 shadow-2xs">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-blue-950">{cap.title}</p>
                          <p className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-1">{cap.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-4 border-t border-blue-100">
                  <Button asChild className="w-full sm:w-auto rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-600/20">
                    <Link href={`/hardware/ai-cameras/${selectedCamera.id}`}>
                      View Complete {selectedCamera.formFactor} Specs <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto rounded-xl border-blue-200 bg-white text-blue-700 hover:bg-blue-50 font-bold">
                    <Link href="/hardware/ai-cameras">
                      Explore All 6 Cameras
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="w-full sm:w-auto rounded-xl text-blue-600 hover:bg-blue-50 hover:text-blue-800 font-bold">
                    <Link href="/integrations">
                      See 35+ Integrations
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 8 COMPUTER VISION TASKS SECTION WITH RESPONSIVE FILTER ─── */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              The Vision Intelligence Engine
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-blue-950">
              Eight Ways Our Cameras Understand a Scene
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Each camera runs one or more of these core neural vision tasks directly on-device to power automated outlet workflows. Filter by operational objective below:
            </p>
          </div>

          {/* Filter Bar for Vision Tasks */}
          <div className="mt-8 rounded-2xl border border-blue-100 bg-white/95 p-3.5 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-950">
                  Filter by AI Objective:
                </span>
              </div>

              {/* Mobile Select Dropdown */}
              <div className="block sm:hidden w-full">
                <select
                  value={selectedTaskCategory}
                  onChange={(e) => {
                    const cat = e.target.value
                    setSelectedTaskCategory(cat)
                    const matching = cat === "all" ? VISION_AI_TASKS : VISION_AI_TASKS.filter((t) => t.category === cat)
                    if (matching.length > 0) setSelectedTaskId(matching[0].id)
                  }}
                  className="w-full rounded-xl border border-blue-200 bg-blue-50/50 py-2.5 px-3 text-xs font-bold text-blue-950 focus:border-blue-500 focus:outline-none"
                >
                  {VISION_TASK_CATEGORIES.map((cat) => {
                    const count = cat.id === "all" ? VISION_AI_TASKS.length : VISION_AI_TASKS.filter((t) => t.category === cat.id).length
                    return (
                      <option key={cat.id} value={cat.id}>
                        {cat.label} ({count})
                      </option>
                    )
                  })}
                </select>
              </div>

              {/* Desktop/Tablet Filter Pills */}
              <div className="hidden sm:flex flex-wrap items-center gap-2">
                {VISION_TASK_CATEGORIES.map((cat) => {
                  const isSelected = selectedTaskCategory === cat.id
                  const count = cat.id === "all" ? VISION_AI_TASKS.length : VISION_AI_TASKS.filter((t) => t.category === cat.id).length
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedTaskCategory(cat.id)
                        const matching = cat.id === "all" ? VISION_AI_TASKS : VISION_AI_TASKS.filter((t) => t.category === cat.id)
                        if (matching.length > 0) setSelectedTaskId(matching[0].id)
                      }}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-xs shadow-blue-600/30"
                          : "bg-blue-50/60 text-slate-600 hover:bg-blue-100/60 hover:text-blue-900"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                          isSelected ? "bg-white/25 text-white" : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Showing count indicator */}
            <div className="mt-3 pt-2.5 border-t border-blue-50 flex items-center justify-between text-xs text-slate-500">
              <span>
                Showing <strong>{filteredTasks.length}</strong> of <strong>{VISION_AI_TASKS.length}</strong> neural capabilities
              </span>
              {selectedTaskCategory !== "all" && (
                <button
                  onClick={() => setSelectedTaskCategory("all")}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  Reset to All (8)
                </button>
              )}
            </div>
          </div>

          {/* Filtered Grid: Only displaying options relevant to selected filter */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
            {filteredTasks.map((task) => {
              const isSelected = task.id === selectedTask.id
              return (
                <div
                  key={task.id}
                  onClick={() => setSelectedTaskId(task.id)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all duration-200 relative overflow-hidden group flex flex-col justify-between ${
                    isSelected
                      ? "border-blue-500 bg-blue-50/50 shadow-md shadow-blue-500/10 ring-2 ring-blue-500"
                      : "border-blue-100 bg-white hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-blue-100 bg-blue-50/50 mb-3 shadow-2xs">
                      <Image
                        src={task.image}
                        alt={task.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      <div className="absolute top-2 left-2 bg-blue-950/80 backdrop-blur rounded px-2 py-0.5 text-[9px] font-mono text-white">
                        {task.categoryLabel}
                      </div>
                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-blue-600 rounded-full p-1 text-white shadow-xs">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                      {task.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {task.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-blue-100">
                    <p className="text-[10px] uppercase font-bold text-blue-600">F&B Application:</p>
                    <p className="text-xs text-slate-800 font-semibold truncate mt-0.5">
                      {task.application}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Interactive Active Task Live Inspector (Provides context for currently selected task) */}
          <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50/40 p-5 sm:p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 text-blue-800 px-2.5 py-0.5 text-[11px] font-bold">
                  <Activity className="h-3.5 w-3.5 text-blue-600" />
                  Active Vision Benchmark: {selectedTask.title}
                </div>
                <h4 className="mt-2 text-lg sm:text-xl font-black text-blue-950">
                  {selectedTask.title} · {selectedTask.application}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedTask.description} Running locally on hardware with <strong>&lt; 18ms neural latency</strong>, completely offline without streaming raw video outside your store.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2">
                <div className="rounded-xl border border-blue-100 bg-white p-3 text-center shadow-2xs flex-1">
                  <p className="text-[10px] font-mono text-blue-600 uppercase font-bold">Processing Latency</p>
                  <p className="text-sm font-black text-blue-950">&lt; 18ms On-Edge</p>
                </div>
                <Button asChild size="sm" className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold">
                  <Link href="/hardware/ai-cameras">
                    See Models Running This <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 4-STEP CLOSED LOOP & INTEGRATIONS BANNER (BLUE & WHITE) ─── */}
        <div className="mt-16 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-6 sm:p-8 text-white shadow-xl shadow-blue-600/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Edge-to-Cloud Closed Reactive Loop
              </span>
              <h4 className="mt-2 text-xl sm:text-2xl font-black text-white">
                Cameras + Vision AI + POS + Signage + WhatsApp on One Platform
              </h4>
              <p className="mt-2 max-w-2xl text-xs sm:text-sm text-blue-100 leading-relaxed">
                When a queue exceeds 6 guests at the counter, the camera triggers digital menu boards to show quick-serve combos, and sends an alert to the store manager. When footfall spikes without billing, walkout warnings notify supervisors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <Button asChild className="w-full sm:w-auto rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-extrabold shadow-md">
                <Link href="/hardware/ai-cameras">
                  Explore Hardware Hub
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto rounded-xl border-white/40 bg-transparent text-white hover:bg-white/10 font-bold">
                <Link href="/integrations">
                  View 35+ Connectors
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
