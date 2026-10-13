"use client"

import { useState } from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CAMERAS_DATA, VISION_AI_TASKS, type CameraProduct } from "@/lib/camera-data"

export function HomeVisionAiSection({ isDarkTheme = false }: { isDarkTheme?: boolean }) {
  const [selectedCameraId, setSelectedCameraId] = useState<string>("turret")
  const [selectedTaskId, setSelectedTaskId] = useState<string>("object-detection")

  const selectedCamera =
    CAMERAS_DATA.find((c) => c.id === selectedCameraId) || CAMERAS_DATA[2]
  const selectedTask =
    VISION_AI_TASKS.find((t) => t.id === selectedTaskId) || VISION_AI_TASKS[0]

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
          {/* Model Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
            {CAMERAS_DATA.map((cam) => {
              const active = cam.id === selectedCameraId
              return (
                <button
                  key={cam.id}
                  onClick={() => setSelectedCameraId(cam.id)}
                  className={`flex-shrink-0 flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                    active
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-2 ring-blue-500"
                      : "bg-white text-slate-700 border border-blue-100 hover:bg-blue-50 hover:text-blue-900 shadow-xs"
                  }`}
                >
                  <Camera className={`h-4 w-4 ${active ? "text-white" : "text-blue-600"}`} />
                  <span>{cam.formFactor}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    active ? "bg-white/20 text-white" : "bg-blue-50 text-blue-700"
                  }`}>
                    {cam.visualBadge.split("&")[0]}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Model Spotlight Card */}
          <div className="mt-6 rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-500/5 p-6 sm:p-8 lg:p-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Real Hardware Studio Shot (Blue/White Frame) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-2xl border border-blue-100 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center p-6 shadow-md group overflow-hidden">
                  {/* Subtle inner blue glow */}
                  <div className="absolute inset-0 bg-radial-gradient from-blue-500/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Scraped Hardware Photo */}
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

                  {/* What It Sees Live View Graphic (Clean Blue/White Frame) */}
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

                {/* CTAs (Responsive Mobile & Desktop) */}
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

        {/* ─── 8 COMPUTER VISION TASKS SECTION ─── */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              The Vision Intelligence Engine
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-blue-950">
              Eight Ways Our Cameras Understand a Scene
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Each camera runs one or more of these 8 core neural vision tasks directly on-device to power automated outlet workflows.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {VISION_AI_TASKS.map((task, idx) => {
              const isSelected = task.id === selectedTaskId
              return (
                <div
                  key={task.id}
                  onClick={() => setSelectedTaskId(task.id)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all duration-200 relative overflow-hidden group ${
                    isSelected
                      ? "border-blue-500 bg-blue-50/40 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500"
                      : "border-blue-100 bg-white hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-blue-100 bg-blue-50/50 mb-3 shadow-2xs">
                    <Image
                      src={task.image}
                      alt={task.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 250px"
                    />
                    <div className="absolute top-1.5 left-1.5 bg-blue-950/80 backdrop-blur rounded px-1.5 py-0.5 text-[9px] font-mono text-white">
                      TASK 0{idx + 1}
                    </div>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                    {task.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-slate-500 line-clamp-2">
                    {task.description}
                  </p>

                  <div className="mt-2 pt-2 border-t border-blue-100">
                    <p className="text-[10px] uppercase font-bold text-blue-600">Application:</p>
                    <p className="text-[11px] text-slate-700 font-semibold truncate">{task.application}</p>
                  </div>
                </div>
              )
            })}
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
