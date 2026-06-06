"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Cpu,
  Gamepad2,
  Languages,
  Layers,
  LayoutDashboard,
  MessageSquareText,
  Mic,
  PackageCheck,
  PenTool,
  PlaySquare,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Trophy,
  Users,
  Video,
  Zap,
  Check,
  Phone,
  BookOpen,
  Workflow,
  Star,
  Globe,
  Boxes,
  CreditCard,
  TrendingUp,
  Eye,
  Heart,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { integrationLogos } from "@/components/integration-logos"

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL HOOK
   ═══════════════════════════════════════════════════ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, visible }
}

/* ═══════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════ */
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 1800
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

/* ═══════════════════════════════════════════════════
   HERO PRODUCT MOCKUP (animated screens)
   ═══════════════════════════════════════════════════ */
function HeroMockup() {
  const [screen, setScreen] = useState(0)
  const screens = [
    {
      label: "Stories Live",
      stat: "₹18.4Cr GMV",
      gradient: "from-brand-listerr-500 to-brand-listerr-700",
      icon: PlaySquare,
    },
    {
      label: "AI Order",
      stat: "WhatsApp Checkout",
      gradient: "from-amber-400 to-orange-600",
      icon: Bot,
    },
    {
      label: "Creator Reel",
      stat: "Meta Ads Synced",
      gradient: "from-brand-storyboard-500 to-brand-storyboard-700",
      icon: Video,
    },
    {
      label: "Smart Flows",
      stat: "40% Less Waste",
      gradient: "from-brand-seller-500 to-brand-seller-700",
      icon: Zap,
    },
  ]

  useEffect(() => {
    const t = setInterval(() => setScreen((s) => (s + 1) % screens.length), 3000)
    return () => clearInterval(t)
  }, [screens.length])

  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Glow behind */}
      <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-brand-listerr-400/20 via-brand-storyboard-400/10 to-brand-seller-400/20 blur-3xl" />

      {/* Main card */}
      <div className="relative rounded-3xl border border-white/20 bg-white/80 p-2 shadow-2xl backdrop-blur-xl">
        <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-6">
          {/* Top bar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs font-semibold text-fg-muted">listerr.in/dashboard</span>
          </div>

          {/* Screen cards */}
          <div className="relative h-52 overflow-hidden rounded-xl">
            {screens.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} p-6 text-white transition-all duration-700 ${
                    i === screen
                      ? "translate-y-0 opacity-100"
                      : i < screen || (screen === 0 && i === screens.length - 1 && screen !== i)
                      ? "-translate-y-full opacity-0"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  <Icon className="mb-3 h-10 w-10 opacity-90" />
                  <p className="text-2xl font-extrabold">{s.label}</p>
                  <p className="mt-1 text-sm font-medium opacity-80">{s.stat}</p>
                </div>
              )
            })}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setScreen(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === screen ? "w-6 bg-brand-listerr-600" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["2.4x", "CVR"],
              ["₹500Cr", "GMV"],
              ["2Bn", "Views"],
            ].map(([val, label]) => (
              <div key={label} className="rounded-lg bg-white p-3 text-center shadow-sm">
                <p className="text-lg font-extrabold text-fg">{val}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-fg-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating phone mockup */}
      <div className="absolute -bottom-6 -right-4 z-10 hidden w-36 animate-float-delayed rounded-[24px] border-[6px] border-slate-800 bg-white p-2 shadow-2xl md:block">
        <div className="rounded-[16px] bg-gradient-to-b from-brand-listerr-100 to-white p-2">
          <div className="h-16 rounded-lg bg-gradient-to-br from-brand-listerr-400 to-brand-listerr-600" />
          <div className="mt-2 h-2 rounded-full bg-slate-200" />
          <div className="mt-1 h-2 w-3/4 rounded-full bg-slate-100" />
          <div className="mt-3 rounded-md bg-brand-listerr-600 px-2 py-1.5 text-center text-[8px] font-bold text-white">
            Shop Now
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   CATALOG STORY CAROUSEL
   ═══════════════════════════════════════════════════ */
const catalogStories = [
  { title: "Fashion Lookbook", category: "Story", gradient: "from-pink-500/80 to-rose-600/90", icon: ShoppingBag, video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcosmetics.mp4" },
  { title: "Flash Sale", category: "Reel", gradient: "from-amber-400/80 to-orange-500/90", icon: Zap, video: "https://cdn.listerr.network/media/Listerr%20website/listerrford2c.mp4" },
  { title: "New Arrivals", category: "Catalog", gradient: "from-brand-listerr-500/80 to-indigo-600/90", icon: Store, video: "https://cdn.listerr.network/media/Listerr%20website/listerrforfurniture.mp4" },
  { title: "Behind The Scenes", category: "Video", gradient: "from-purple-500/80 to-violet-600/90", icon: Video, video: "https://cdn.listerr.network/media/Listerr%20website/listerrforrealestate.mp4" },
  { title: "Product Showcase", category: "Story", gradient: "from-cyan-500/80 to-blue-600/90", icon: Eye, video: "https://cdn.listerr.network/media/Listerr%20website/2.mp4" },
  { title: "Festival Collection", category: "Campaign", gradient: "from-red-500/80 to-pink-600/90", icon: Heart, video: "https://cdn.listerr.network/media/Listerr%20website/listerrforbakery.mp4" },
  { title: "Trending Now", category: "Reel", gradient: "from-brand-network-400/80 to-brand-network-600/90", icon: TrendingUp, video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcafe.mp4" },
]

function CatalogCarousel() {
  const [activeStory, setActiveStory] = useState<typeof catalogStories[0] | null>(null)

  return (
    <section className="overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-fg-muted">
          Storytelling Commerce in Action
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="animate-marquee flex w-max gap-5 pl-4">
          {[...catalogStories, ...catalogStories].map((story, i) => {
            const Icon = story.icon
            return (
              <div
                key={`${story.title}-${i}`}
                onClick={() => setActiveStory(story)}
                className="group w-52 shrink-0 cursor-pointer block"
              >
                <div
                  className="relative h-72 overflow-hidden rounded-2xl p-5 text-white shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
                >
                  {/* Background video */}
                  <video
                    src={story.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                  />
                  {/* Gradient overlay - lowered opacity to make video pop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <span className="relative z-10 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {story.category}
                  </span>

                  <div className="relative z-10 mt-auto flex h-full flex-col justify-end pb-2">
                    <Icon className="mb-1 h-6 w-6 opacity-90 text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Story Video Modal (Ultra-clean and minimal) */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg animate-scale-in">
          {/* Close button click capture */}
          <div className="absolute inset-0" onClick={() => setActiveStory(null)} />

          {/* Vertical smartphone-style card (scaled down to feel like a compact widget) */}
          <div className="relative z-10 w-full max-w-[300px] aspect-[9/16] rounded-3xl border border-white/10 bg-black shadow-2xl overflow-hidden flex flex-col justify-end">
            
            {/* Background video */}
            <video
              src={activeStory.video}
              autoPlay
              loop
              playsInline
              controls
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Top info and close button (Compact) */}
            <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/80 to-transparent z-20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <activeStory.icon className="h-4 w-4 text-brand-listerr-400" />
                <div>
                  <p className="text-xs font-bold leading-none">{activeStory.title}</p>
                  <span className="text-[9px] font-medium text-white/60 tracking-wider uppercase mt-0.5 block">{activeStory.category}</span>
                </div>
              </div>
              <button 
                onClick={() => setActiveStory(null)}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   PLATFORMS SECTION (Redesigned)
   ═══════════════════════════════════════════════════ */
const platformData = [
  {
    slug: "listerr" as const,
    name: "Listerr",
    tagline: "Core Engagement",
    description: "Stories, Reels, and Lists that convert browsers into buyers.",
    href: "/listerr",
    gradient: "from-brand-listerr-500 to-brand-listerr-700",
    lightBg: "bg-brand-listerr-50",
    textColor: "text-brand-listerr-700",
    borderColor: "border-brand-listerr-200",
    icon: Layers,
    mockupItems: ["Story Views: 2.4M", "Active Lists: 12K", "CVR: 2.4x"],
  },
  {
    slug: "seller" as const,
    name: "Seller Studio",
    tagline: "Merchant Command Centre",
    description: "Catalogue, content, orders, and ads — all in one dashboard.",
    href: "/seller-studio",
    gradient: "from-brand-seller-500 to-brand-seller-700",
    lightBg: "bg-brand-seller-50",
    textColor: "text-brand-seller-700",
    borderColor: "border-brand-seller-200",
    icon: LayoutDashboard,
    mockupItems: ["Orders Today: 847", "Revenue: ₹4.2L", "ROAS: 3.8x"],
  },
  {
    slug: "network" as const,
    name: "Listerr Network",
    tagline: "Creator Marketplace",
    description: "Connect with creators and partners for commerce growth.",
    href: "/network",
    gradient: "from-brand-network-500 to-brand-network-600",
    lightBg: "bg-brand-network-50",
    textColor: "text-brand-network-700",
    borderColor: "border-brand-network-200",
    icon: Users,
    mockupItems: ["Active Creators: 5K", "Reach: 48M", "Campaigns: 128"],
  },
  {
    slug: "storyboard" as const,
    name: "Storyboard",
    tagline: "Content Studio",
    description: "Create shoppable commerce media in minutes, not days.",
    href: "/storyboard",
    gradient: "from-brand-storyboard-500 to-brand-storyboard-700",
    lightBg: "bg-brand-storyboard-50",
    textColor: "text-brand-storyboard-700",
    borderColor: "border-brand-storyboard-200",
    icon: PenTool,
    mockupItems: ["Templates: 200+", "Published: 12K", "Avg CTR: 8.4%"],
  },
]

function PlatformsSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Four Platforms, One Stack
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl lg:text-6xl">
            Everything commerce teams need.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {platformData.map((p, idx) => {
            const Icon = p.icon
            return (
              <Link
                href={p.href}
                key={p.slug}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border ${p.borderColor} bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                {/* Gradient header with mockup */}
                <div className={`bg-gradient-to-br ${p.gradient} p-5 text-white`}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">{p.tagline}</span>
                  </div>
                  {/* Mini mockup */}
                  <div className="space-y-1.5">
                    {p.mockupItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-sm"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold text-fg">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-fg-muted">{p.description}</p>
                  <span className={`mt-4 inline-flex items-center gap-2 text-sm font-bold ${p.textColor}`}>
                    Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   GROWTH SECTORS (moved up) — Premium visual cards
   ═══════════════════════════════════════════════════ */
const sectors = [
  {
    name: "E-Commerce",
    stat: "2.4x homepage CVR",
    description: "Turn every storefront visit into a shoppable story experience.",
    href: "/industries/ecommerce",
    gradient: "from-indigo-600 via-purple-600 to-violet-700",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    name: "EdTech",
    stat: "40% Day-7 retention lift",
    description: "Engage learners with interactive content that drives course completion.",
    href: "/industries/edtech",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    name: "FinTech",
    stat: "More assisted applications",
    description: "Guide users through applications with smart engagement touchpoints.",
    href: "/industries/fintech",
    gradient: "from-blue-500 via-blue-600 to-cyan-700",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    name: "Media & OTT",
    stat: "Higher content recirculation",
    description: "Keep viewers engaged with personalized content discovery loops.",
    href: "/industries/media-ott",
    gradient: "from-pink-500 via-rose-600 to-red-700",
    icon: Video,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    name: "Food & Delivery",
    stat: "Repeat ordering moments",
    description: "Create craveable moments that make customers order again and again.",
    href: "/industries/food-delivery",
    gradient: "from-amber-500 via-orange-500 to-red-600",
    icon: Store,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    name: "Travel",
    stat: "Better package discovery",
    description: "Inspire travellers with visual storytelling that sells destinations.",
    href: "/industries/travel",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format&q=80",
  },
]

function GrowthSectors() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="section-padding bg-surface-raised">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Industries
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            Built for India&apos;s fastest-growing sectors.
          </h2>
          <p className="mt-4 text-lg text-fg-muted leading-8">
            From D2C to EdTech, Listerr powers engagement where it matters most.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => {
            const Icon = s.icon
            return (
              <Link
                key={s.href}
                href={s.href}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image area */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent`} />

                  {/* Floating icon badge */}
                  <div className={`absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Stat badge - glassmorphism */}
                  <div className="absolute bottom-3 right-3 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-fg shadow-sm backdrop-blur-md">
                    {s.stat}
                  </div>

                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ transform: "skewX(-15deg)" }} />
                </div>

                {/* Text content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold text-fg">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-fg-muted">{s.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-bold text-brand-listerr-700">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   USE-CASE VISUAL MATRIX
   ═══════════════════════════════════════════════════ */
const useCases = [
  {
    title: "Shoppable Stories",
    stat: "2.4x CVR",
    gradient: "from-brand-listerr-600/80 to-indigo-700/90",
    icon: PlaySquare,
    description: "Full-screen stories that let customers swipe and shop.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=500&fit=crop&auto=format&q=80",
  },
  {
    title: "Video Commerce",
    stat: "+58% Engagement",
    gradient: "from-brand-storyboard-500/80 to-rose-700/90",
    icon: Video,
    description: "Short reels and live video for product launches.",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=500&fit=crop&auto=format&q=80",
  },
  {
    title: "Gamification",
    stat: "4.1x Repeat Rate",
    gradient: "from-amber-500/80 to-orange-600/90",
    icon: Gamepad2,
    description: "Streaks, rewards, challenges that drive repeat purchases.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=500&fit=crop&auto=format&q=80",
  },
  {
    title: "AI Personalisation",
    stat: "12+ Languages",
    gradient: "from-purple-600/80 to-violet-800/90",
    icon: Sparkles,
    description: "Content and product paths adapted to each shopper.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=500&fit=crop&auto=format&q=80",
  },
  {
    title: "Catalog Storytelling",
    stat: "3-5x Opt-ins",
    gradient: "from-brand-seller-500/80 to-emerald-700/90",
    icon: BookOpen,
    description: "Transform boring catalogues into immersive stories.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=500&fit=crop&auto=format&q=80",
  },
  {
    title: "Smart Flows",
    stat: "40% Fewer Waste",
    gradient: "from-cyan-600/80 to-blue-700/90",
    icon: Workflow,
    description: "Lifecycle journeys connected to ads, CRM, and events.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop&auto=format&q=80",
  },
]

function UseCaseMatrix() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
              Use Cases
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Build the moments that convert.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/use-cases/stories">Explore All Use Cases</Link>
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc, i) => {
            const Icon = uc.icon
            return (
               <Link
                key={uc.title}
                href="/access"
                className={`group relative overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl block cursor-pointer ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Visual card */}
                <div
                  className="relative flex h-64 flex-col justify-end p-6 text-white overflow-hidden bg-muted"
                >
                  {/* Background image */}
                  <Image
                    src={uc.image}
                    alt={uc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay - lowered opacity to make video pop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <Icon className="relative z-10 mb-3 h-8 w-8 opacity-90" />
                  <h3 className="relative z-10 text-2xl font-extrabold">{uc.title}</h3>
                  <p className="relative z-10 mt-1 text-sm opacity-80">{uc.description}</p>

                  {/* Stat badge */}
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-black/30 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                    {uc.stat}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   LISTERR AI SHOWCASE
   ═══════════════════════════════════════════════════ */
const aiFeatures = [
  {
    id: "calling",
    title: "AI Calling",
    description: "Intelligent voice calls that understand Hindi, English, and Hinglish to close orders.",
    icon: Phone,
    mockup: {
      lines: [
        { speaker: "AI", text: "Namaste! Aapka order confirm karein?" },
        { speaker: "Customer", text: "Haan, blue kurta M size" },
        { speaker: "AI", text: "Done! COD confirmed. Delivery in 3 days." },
      ],
    },
  },
  {
    id: "cataloging",
    title: "AI Cataloging",
    description: "Upload a photo — get titles, descriptions, tags, and pricing in seconds.",
    icon: Boxes,
    mockup: {
      lines: [
        { speaker: "Input", text: "📸 Product photo uploaded" },
        { speaker: "AI", text: "Title: Blue Chikankari Kurta" },
        { speaker: "AI", text: "Tags: ethnic, summer, cotton · ₹1,299" },
      ],
    },
  },
  {
    id: "automation",
    title: "AI Automation",
    description: "Auto-trigger flows based on cart abandonment, browsing, and purchase history.",
    icon: Workflow,
    mockup: {
      lines: [
        { speaker: "Trigger", text: "Cart abandoned → 2hr wait" },
        { speaker: "AI", text: "WhatsApp nudge sent with 10% off" },
        { speaker: "Result", text: "✓ Recovered ₹2.4L this week" },
      ],
    },
  },
  {
    id: "recommendations",
    title: "AI Recommendations",
    description: "Personalized product suggestions that learn from every interaction.",
    icon: Sparkles,
    mockup: {
      lines: [
        { speaker: "User", text: "Browsed: summer dresses, floral prints" },
        { speaker: "AI", text: "Recommended: Cotton Maxi + Accessories" },
        { speaker: "Result", text: "↑ 34% higher AOV" },
      ],
    },
  },
]

function AIShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const { ref, visible } = useReveal()

  useEffect(() => {
    const t = setInterval(() => setActiveTab((s) => (s + 1) % aiFeatures.length), 4000)
    return () => clearInterval(t)
  }, [])

  const active = aiFeatures[activeTab]
  const ActiveIcon = active.icon

  return (
    <section ref={ref} className="relative overflow-hidden bg-ai-bg py-24 text-ai-fg md:py-32">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, #fbbf24 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Floating glows */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-brand-listerr-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 animate-float-delayed rounded-full bg-ai-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className={`mb-14 max-w-3xl ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ai-accent">
            Listerr AI
          </p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl lg:text-6xl">
            Commerce that talks, listens, and sells.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            Voice, text, and intelligent automation — built for Indian languages and Indian commerce.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Tabs */}
          <div className="flex flex-col gap-3">
            {aiFeatures.map((f, i) => {
              const Icon = f.icon
              const isActive = i === activeTab
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-500 ${
                    isActive
                      ? "animate-pulse-glow border-ai-accent/30 bg-ai-surface"
                      : "border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive ? "bg-ai-accent text-ai-bg" : "bg-white/10 text-white/60"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className={`font-bold transition-colors ${isActive ? "text-ai-accent" : "text-white/80"}`}>
                      {f.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/50">{f.description}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Animated mockup */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-ai-surface p-6 shadow-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ai-accent text-ai-bg">
                  <ActiveIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold text-white">{active.title}</p>
                  <p className="text-xs text-white/50">Live simulation</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>

              <div className="space-y-3 rounded-xl bg-ai-bg p-5">
                {active.mockup.lines.map((line, i) => (
                  <div
                    key={`${activeTab}-${i}`}
                    className={`flex ${line.speaker === "AI" || line.speaker === "Result" ? "" : "justify-end"}`}
                    style={{ animation: `fade-in-up 0.5s ease ${i * 0.3}s both` }}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl px-4 py-3 text-sm ${
                        line.speaker === "AI"
                          ? "bg-ai-accent text-ai-bg font-semibold"
                          : line.speaker === "Result"
                          ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                          : "bg-white/8 text-white/80"
                      }`}
                    >
                      <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider opacity-60">
                        {line.speaker}
                      </span>
                      {line.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI CTA */}
        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild variant="ai" size="xl">
            <Link href="/ai/ai-calling">Explore Listerr AI</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="xl"
            className="border-white/25 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/contact">Book AI Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   PRICING (moved up)
   ═══════════════════════════════════════════════════ */
const pricingTiers = [
  {
    name: "Starter",
    price: "₹12k",
    period: "/mo",
    description: "For early brands launching shoppable engagement.",
    features: ["Stories and Reels", "Basic analytics", "Email support", "Up to 10K monthly views"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹35k",
    period: "/mo",
    description: "For teams scaling lifecycle engagement and ads loops.",
    features: ["Smart Flows", "Meta Ads sync", "Priority support", "Unlimited views", "A/B testing"],
    popular: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description: "For larger commerce teams with AI and network needs.",
    features: ["Listerr AI add-ons", "Custom integrations", "Dedicated success manager", "SLA guarantee", "SSO"],
    popular: false,
  },
]

function PricingSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
            Start lean, scale when it works.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 ${
                tier.popular
                  ? "border-brand-listerr-200 bg-white shadow-xl ring-2 ring-brand-listerr-100"
                  : "border-border bg-white shadow-sm hover:shadow-md"
              } ${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {tier.popular && (
                <>
                  <div className="animate-gradient-border absolute -inset-[1px] -z-10 rounded-2xl opacity-30" />
                  <span className="absolute right-5 top-5 rounded-full bg-brand-listerr-50 px-3 py-1 text-xs font-bold text-brand-listerr-700">
                    Most Popular
                  </span>
                </>
              )}
              <h3 className="text-xl font-bold text-fg">{tier.name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-fg-muted">{tier.description}</p>
              <p className="mt-6">
                <span className="text-5xl font-extrabold text-fg">{tier.price}</span>
                <span className="text-lg text-fg-muted">{tier.period}</span>
              </p>
              <Button
                asChild
                variant={tier.popular ? "listerr" : "outline"}
                className="mt-6 w-full"
                size="lg"
              >
                <Link href="/pricing">See Full Pricing</Link>
              </Button>
              <ul className="mt-7 grid gap-3 text-sm text-fg-muted">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   CASE STUDY / SOCIAL PROOF
   ═══════════════════════════════════════════════════ */
function CaseStudy() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="section-padding bg-surface-raised">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-4xl rounded-3xl border border-border bg-white p-10 shadow-md md:p-14 ${
            visible ? "animate-scale-in" : "opacity-0"
          }`}
        >
          <p className="text-sm font-bold text-brand-listerr-700">Featured Case Study</p>
          <blockquote className="mt-6 text-2xl font-extrabold leading-snug text-fg md:text-4xl">
            &ldquo;Listerr helped our team turn storefront traffic into repeat buyers — the results
            were instant.&rdquo;
          </blockquote>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["+58%", "Engagement"],
              ["2.3x", "CVR Lift"],
              ["4.1x", "Repeat Rate"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl bg-brand-listerr-50 p-4 text-center"
              >
                <p className="text-2xl font-extrabold text-brand-listerr-700">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-brand-listerr-600/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/case-studies"
            className="mt-8 inline-flex items-center gap-2 font-bold text-brand-listerr-700 hover:gap-3 transition-all"
          >
            Read the full story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   INTEGRATIONS (redesigned, moved near footer)
   ═══════════════════════════════════════════════════ */
const integrationNames = [
  "Shopify", "WooCommerce", "Razorpay", "Stripe",
  "Meta Ads", "Google Ads", "WhatsApp", "MoEngage",
  "CleverTap", "WebEngage", "Segment", "GA4",
  "WordPress", "Instagram", "Facebook", "Google Slides",
]

function IntegrationsSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Integrations
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold text-fg md:text-5xl">
            Connect with the commerce tools your teams already use.
          </h2>
        </div>

        {/* Hub and spoke visual */}
        <div className="relative mx-auto max-w-4xl">
          {/* Center hub */}
          <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-brand-listerr-500 to-brand-listerr-700 shadow-2xl">
            <div className="text-center text-white">
              <Layers className="mx-auto h-8 w-8" />
              <span className="mt-1 block text-[10px] font-bold">LISTERR</span>
            </div>
          </div>

          {/* Connection lines (decorative) */}
          <div className="absolute left-1/2 top-14 h-[1px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-listerr-200 to-transparent animate-line-pulse" />

          {/* Integration cards grid */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {integrationNames.map((integ, i) => (
              <div
                key={integ}
                className={`group flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {integrationLogos[integ] ? integrationLogos[integ]() : null}
                <span className="text-sm font-bold text-fg">{integ}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 font-bold text-brand-listerr-700 transition-all hover:gap-3"
            >
              View all integrations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SHOPIFY GROWTH (Shopify spotlight)
   ═══════════════════════════════════════════════════ */
function ShopifyGrowth() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="section-padding bg-brand-seller-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className={`grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-seller-700">
              Shopify Growth
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-fg md:text-5xl">
              Listerr + Shopify: Stories, AI Orders, Meta Sync.
            </h2>
            <div className="mt-7 grid gap-3 text-fg-muted">
              {["One-click install", "Shoppable storefront Stories", "Meta Ads loop", "AI-powered catalogue sync"].map((item) => (
                <p key={item} className="flex items-center gap-3">
                  <PackageCheck className="h-5 w-5 text-brand-seller-700" />
                  {item}
                </p>
              ))}
            </div>
            <Button asChild variant="seller" size="xl" className="mt-8">
              <Link href="/use-cases/shopify">Get the Shopify App</Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-brand-seller-100 bg-white p-6 shadow-xl">
            <div className="grid gap-4 rounded-xl bg-surface-sunken p-5 sm:grid-cols-3">
              {["2.4x homepage CVR", "3-5x more lead opt-ins", "40% fewer ROAS-negative campaigns"].map((stat) => (
                <div key={stat} className="rounded-lg bg-white p-5 text-center text-lg font-extrabold text-fg shadow-sm">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   CTA BAND
   ═══════════════════════════════════════════════════ */
function CTABandPremium() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-listerr-700 via-brand-listerr-600 to-brand-listerr-500 py-20 text-white">
      {/* Decorative */}
      <div className="absolute -right-20 -top-20 h-64 w-64 animate-float rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 animate-float-delayed rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold md:text-5xl">Ready to grow with Listerr?</h2>
          <p className="mt-3 text-lg text-white/70">Start free, no credit card required.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="xl"
            className="bg-white text-brand-listerr-700 hover:bg-brand-listerr-50 shadow-lg"
          >
            <Link href="/access">JOIN LISTERR</Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-white/35 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/contact">Talk to Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function HomePageClient() {
  return (
    <div className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-listerr-50 via-white to-white py-20 md:py-28 lg:py-32">
        {/* Floating orbs */}
        <div className="absolute -left-32 -top-32 h-96 w-96 animate-float rounded-full bg-brand-listerr-100/50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 animate-float-delayed rounded-full bg-brand-storyboard-100/50 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-48 w-48 animate-float-slow rounded-full bg-brand-seller-100/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:gap-14 md:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-listerr-200 bg-brand-listerr-50 px-4 py-1.5 text-xs font-bold text-brand-listerr-700">
              <Sparkles className="h-3.5 w-3.5" />
              India&apos;s #1 Commerce Engagement Platform
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.02] text-fg md:text-6xl lg:text-7xl">
              List Karo,{" "}
              <span className="bg-gradient-to-r from-brand-listerr-600 via-brand-storyboard-500 to-brand-network-500 bg-clip-text text-transparent">
                Brand Ko Viral Karo.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-fg-muted md:text-xl">
              India&apos;s Most Complete Commerce Engagement Platform — Stories, Reels, AI Ordering,
              and Smart Flows, all in one stack.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="listerr" size="xl" className="shadow-lg shadow-brand-listerr-600/20">
                <Link href="/access">JOIN LISTERR</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/platform">See All Products</Link>
              </Button>
            </div>
            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-fg-muted sm:gap-6">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" /> No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" /> 200+ brands
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" /> 12+ languages
              </span>
            </div>
          </div>

          {/* Hero video */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Glow behind */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-brand-listerr-400/20 via-brand-storyboard-400/10 to-brand-seller-400/20 blur-3xl" />
            <video
              src="https://cdn.listerr.network/media/Listerr%20website/listerrcover.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="relative z-10 w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ─── CATALOG CAROUSEL ─────────────────────── */}
      <CatalogCarousel />

      {/* ─── METRICS ──────────────────────────────── */}
      <section className="border-y border-border bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8">
          {[
            { value: 200, suffix: "+", label: "Brands Trust Us" },
            { value: 500, prefix: "₹", suffix: "Cr+", label: "Attributed GMV" },
            { value: 2, suffix: "Bn+", label: "Story Views Served" },
            { value: 12, suffix: "+", label: "Indian Languages" },
          ].map((m) => (
            <div key={m.label} className="relative text-center lg:text-left">
              <p className="text-4xl font-extrabold text-fg md:text-5xl">
                <AnimatedCounter target={m.value} suffix={m.suffix} prefix={m.prefix || ""} />
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-fg-muted">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOUR PLATFORMS ───────────────────────── */}
      <PlatformsSection />

      {/* ─── GROWTH SECTORS ───────────────────────── */}
      <GrowthSectors />

      {/* ─── USE CASE MATRIX ──────────────────────── */}
      <UseCaseMatrix />

      {/* ─── LISTERR AI ──────────────────────────── */}
      <AIShowcase />

      {/* ─── PRICING ──────────────────────────────── */}
      <PricingSection />

      {/* ─── CASE STUDY ──────────────────────────── */}
      <CaseStudy />

      {/* ─── SHOPIFY GROWTH ──────────────────────── */}
      <ShopifyGrowth />

      {/* ─── INTEGRATIONS ────────────────────────── */}
      <IntegrationsSection />

      {/* ─── CTA ──────────────────────────────────── */}
      <CTABandPremium />
    </div>
  )
}
