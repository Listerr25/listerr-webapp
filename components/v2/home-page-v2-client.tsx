"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Heart,
  Sparkles,
  Zap,
  ShoppingBag,
  Store,
  Layers,
  Bot,
  Video,
  Check,
  CheckCircle2,
  Workflow,
  Users,
  Compass,
  CreditCard,
  MessageCircle,
  TrendingUp,
  X,
  Plus,
  Flame,
  Award,
  Globe,
  Star,
  Eye,
  SlidersHorizontal,
  RotateCcw,
  Grid3X3,
  Copy,
  User,
  Palette,
  PenTool,
  Boxes,
  ShieldCheck,
  Phone,
  BookOpen,
  Gamepad2,
  ShoppingCart,
  Maximize2,
  Volume2,
  VolumeX,
  PackageCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { integrationLogos } from "@/components/integration-logos"

/* ═══════════════════════════════════════════════════
   HERO 5 DECK CARDS (Real V1 Listerr Footage)
   ═══════════════════════════════════════════════════ */
const HERO_LISTERR_CARDS = [
  {
    id: "card-fashion",
    title: "Fashion Lookbook",
    subtitle: "Shoppable Stories & Try-On",
    brand: "@snitch_fashion",
    tag: "Stories Live",
    stat: "3.2x CVR",
    accent: "#2563EB",
    badgeBg: "bg-blue-600",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcosmetics.mp4",
  },
  {
    id: "card-flash-sale",
    title: "Flash Sale D2C",
    subtitle: "AI WhatsApp Instant Checkout",
    brand: "@mamaearth_india",
    tag: "AI Ordering",
    stat: "+64% GMV",
    accent: "#1D4ED8",
    badgeBg: "bg-blue-700",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrford2c.mp4",
  },
  {
    id: "card-flagship",
    title: "Listerr Engagement",
    subtitle: "Stories, Reels & AI Flows",
    brand: "@listerr_live",
    tag: "Flagship Reel",
    stat: "₹50Cr+ GMV",
    accent: "#3B82F6",
    badgeBg: "bg-blue-500",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrcover.mp4",
  },
  {
    id: "card-new-arrivals",
    title: "New Arrivals Catalog",
    subtitle: "Multi-Channel Catalog Sync",
    brand: "@wakefit_home",
    tag: "Seller Studio",
    stat: "4.1x Repeat",
    accent: "#1E40AF",
    badgeBg: "bg-blue-800",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforfurniture.mp4",
  },
  {
    id: "card-trending",
    title: "Trending Stories",
    subtitle: "Smart Automated Drops & Retention",
    brand: "@bluetokai_coffee",
    tag: "Smart Flows",
    stat: "2M+ Views",
    accent: "#0284C7",
    badgeBg: "bg-sky-600",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcafe.mp4",
  },
]

/* ═══════════════════════════════════════════════════
   FULL CATALOG STORIES (Real V1 Videos)
   ═══════════════════════════════════════════════════ */
const CATALOG_STORIES = [
  {
    title: "Fashion Lookbook",
    category: "Story",
    tag: "Cosmetics & Apparel",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcosmetics.mp4",
    stat: "3.2x CVR",
    brand: "@snitch_lookbook",
  },
  {
    title: "Flash Sale",
    category: "Reel",
    tag: "D2C Flash Drop",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrford2c.mp4",
    stat: "+64% GMV",
    brand: "@mamaearth_d2c",
  },
  {
    title: "New Arrivals",
    category: "Catalog",
    tag: "Furniture & Decor",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforfurniture.mp4",
    stat: "4.1x Repeat",
    brand: "@wakefit_living",
  },
  {
    title: "Behind The Scenes",
    category: "Video",
    tag: "Lifestyle & Tours",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforrealestate.mp4",
    stat: "1.8M Views",
    brand: "@prestige_spaces",
  },
  {
    title: "Product Showcase",
    category: "Story",
    tag: "Gadgets & Wearables",
    video: "https://cdn.listerr.network/media/Listerr%20website/2.mp4",
    stat: "8.4% CTR",
    brand: "@boat_lifestyle",
  },
  {
    title: "Festival Collection",
    category: "Campaign",
    tag: "Bakery & Gourmet",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforbakery.mp4",
    stat: "3.8x ROI",
    brand: "@theobroma_delight",
  },
  {
    title: "Trending Now",
    category: "Reel",
    tag: "Artisan Cafe",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcafe.mp4",
    stat: "2M Views",
    brand: "@bluetokai_roasters",
  },
]

/* ═══════════════════════════════════════════════════
   EXPANDING SHOWCASE DECK (6 Cards for Scene 3)
   ═══════════════════════════════════════════════════ */
const EXPANDING_DECK_CARDS = [
  {
    id: "exp-1",
    title: "Listerr Stories",
    category: "Fashion Lookbook",
    brand: "@snitch",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcosmetics.mp4",
    stat: "3.2x CVR",
    highlight: "Swipe to Buy",
  },
  {
    id: "exp-2",
    title: "AI Voice Order",
    category: "WhatsApp Cart",
    brand: "@mamaearth",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrford2c.mp4",
    stat: "+64% GMV",
    highlight: "Instant UPI",
  },
  {
    id: "exp-3",
    title: "Shoppable Reels",
    category: "Meta Ads Synced",
    brand: "@listerr_network",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrcover.mp4",
    stat: "₹18.4Cr GMV",
    highlight: "In-Video Tap",
  },
  {
    id: "exp-4",
    title: "Catalogue Studio",
    category: "Multi-Store Sync",
    brand: "@wakefit",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforfurniture.mp4",
    stat: "4.1x Repeat",
    highlight: "Auto Sync",
  },
  {
    id: "exp-5",
    title: "Smart Retention",
    category: "Automated Triggers",
    brand: "@bluetokai",
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcafe.mp4",
    stat: "2M Views",
    highlight: "Drop Alerts",
  },
  {
    id: "exp-6",
    title: "Creator Affiliates",
    category: "Regional Reach",
    brand: "@boat_audio",
    video: "https://cdn.listerr.network/media/Listerr%20website/2.mp4",
    stat: "5K+ Creators",
    highlight: "Commission Split",
  },
]

const TRUSTED_BRANDS = [
  "SNITCH", "MAMAEARTH", "WAKEFIT", "BLUE TOKAI", "BOAT", "SUGAR", "MINIMALIST", "BOMBAY SHAVING CO"
]

const PLATFORMS_DATA = [
  {
    slug: "listerr",
    name: "Listerr Engagement",
    tagline: "Stories, Reels & Lists",
    description: "Transform mobile visitors into buyers through high-converting shoppable stories, reels, and curated lists.",
    stat: "2.4x CVR",
    href: "/listerr",
    icon: Layers,
    features: ["Interactive Story Widgets", "In-Video One-Tap Checkout", "Live Inventory Sync"],
  },
  {
    slug: "seller",
    name: "Seller Studio",
    tagline: "Merchant Command Centre",
    description: "Catalogue management, real-time analytics, automated WhatsApp drop notifications, and Meta ad campaign sync.",
    stat: "₹4.2L / Day",
    href: "/seller-studio",
    icon: Store,
    features: ["Single-Click Catalog Import", "Automated Drop Triggers", "Unified ROAS Dashboard"],
  },
  {
    slug: "network",
    name: "Listerr Network",
    tagline: "Creator Marketplace",
    description: "Connect Indian D2C brands with 5,000+ vetted regional creators to produce shoppable reels with attributed attribution.",
    stat: "5K+ Creators",
    href: "/network",
    icon: Users,
    features: ["Commission Split Flow", "Regional Language Matching", "Real-Time GMV Payouts"],
  },
  {
    slug: "storyboard",
    name: "Storyboard Studio",
    tagline: "Shoppable Commerce Media",
    description: "Build studio-grade shoppable interactive video feeds in minutes without technical overhead or complex SDK setup.",
    stat: "8.4% CTR",
    href: "/storyboard",
    icon: Video,
    features: ["200+ E-Commerce Templates", "Auto-Subtitles in 12 Languages", "Lightweight <35KB Embed"],
  },
]

/* ═══════════════════════════════════════════════════
   GROWTH SECTORS (Exact V1 Content)
   ═══════════════════════════════════════════════════ */
const SECTORS_DATA = [
  {
    name: "E-Commerce",
    stat: "2.4x homepage CVR",
    description: "Turn every storefront visit into a shoppable story experience.",
    href: "/industries/ecommerce",
    gradient: "from-blue-600 via-blue-700 to-indigo-800",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    name: "EdTech",
    stat: "40% Day-7 retention lift",
    description: "Engage learners with interactive content that drives course completion.",
    href: "/industries/edtech",
    gradient: "from-blue-500 via-sky-600 to-blue-700",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    name: "FinTech",
    stat: "More assisted applications",
    description: "Guide users through applications with smart engagement touchpoints.",
    href: "/industries/fintech",
    gradient: "from-blue-600 via-blue-800 to-slate-900",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    name: "Media & OTT",
    stat: "Higher content recirculation",
    description: "Keep viewers engaged with personalized content discovery loops.",
    href: "/industries/media-ott",
    gradient: "from-sky-500 via-blue-600 to-blue-800",
    icon: Video,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    name: "Food & Delivery",
    stat: "Repeat ordering moments",
    description: "Create craveable moments that make customers order again and again.",
    href: "/industries/food-delivery",
    gradient: "from-blue-600 via-indigo-600 to-blue-900",
    icon: Store,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    name: "Travel",
    stat: "Better package discovery",
    description: "Inspire travellers with visual storytelling that sells destinations.",
    href: "/industries/travel",
    gradient: "from-sky-600 via-blue-700 to-indigo-800",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format&q=80",
  },
]

/* ═══════════════════════════════════════════════════
   INTEGRATIONS (Exact V1 Names)
   ═══════════════════════════════════════════════════ */
const INTEGRATION_NAMES = [
  "Shopify", "WooCommerce", "Razorpay", "Stripe",
  "Meta Ads", "Google Ads", "WhatsApp", "MoEngage",
  "CleverTap", "WebEngage", "Segment", "GA4",
  "WordPress", "Instagram", "Facebook", "Google Slides",
]

const USE_CASES = [
  {
    title: "Shoppable Stories",
    stat: "2.4x CVR",
    description: "Full-screen stories that let customers swipe, explore product variants, and buy in one tap.",
    icon: Play,
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcosmetics.mp4",
  },
  {
    title: "Video Commerce Reels",
    stat: "+58% Engagement",
    description: "Short reels and live creator videos designed specifically for Indian mobile shoppers.",
    icon: Video,
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrford2c.mp4",
  },
  {
    title: "Gamification & Streaks",
    stat: "4.1x Repeat Rate",
    description: "Streaks, scratch cards, and unlockable rewards that bring buyers back every week.",
    icon: Gamepad2,
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrcover.mp4",
  },
  {
    title: "AI Voice & WhatsApp",
    stat: "12+ Languages",
    description: "Voice and text ordering tailored to Hindi, Hinglish, Tamil, Telugu, and English.",
    icon: Bot,
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforfurniture.mp4",
  },
  {
    title: "Smart Catalogue Stories",
    stat: "3-5x Opt-ins",
    description: "Transform static PDF or Excel product lists into dynamic shoppable micro-sites.",
    icon: BookOpen,
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforbakery.mp4",
  },
  {
    title: "Automated Drop Flows",
    stat: "40% Less Waste",
    description: "Lifecycle journeys tied directly to stock alerts, back-in-stock pings, and ad campaigns.",
    icon: Workflow,
    video: "https://cdn.listerr.network/media/Listerr%20website/listerrforcafe.mp4",
  },
]

export default function HomePageV2Client() {
  // Video modal
  const [activeVideoModal, setActiveVideoModal] = useState<{
    url: string
    title: string
    brand: string
  } | null>(null)

  // ── HERO CARD ANIMATION (tobe.mp4 - Completely Automatic) ──
  const [togetherRatio, setTogetherRatio] = useState(1) // Starts stacked, then fans out
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // ── SCENE 3 AUTOMATIC EXPANDING DECK FORMATIONS ──
  const [scene3Mode, setScene3Mode] = useState<"cascade" | "arc" | "stacked" | "spread">("cascade")

  // Auto-cycle through formations: cascade -> arc -> stacked -> spread
  useEffect(() => {
    const modes: ("cascade" | "arc" | "stacked" | "spread")[] = ["cascade", "arc", "stacked", "spread"]
    const interval = setInterval(() => {
      setScene3Mode((prev) => {
        const currentIdx = modes.indexOf(prev)
        return modes[(currentIdx + 1) % modes.length]
      })
    }, 3400)
    return () => clearInterval(interval)
  }, [])

  // ── SCENE 4 SPOTLIGHT LIKES ──
  const [spotlightLiked, setSpotlightLiked] = useState(false)
  const [spotlightLikes, setSpotlightLikes] = useState(1284)

  // Screen width detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    window.addEventListener("orientationchange", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("orientationchange", checkMobile)
    }
  }, [])

  // Completely automatic spread & together cycle (runs reliably on mobile & desktop)
  useEffect(() => {
    // Initial entrance: start together (1) then fan out horizontally at distinct paces (0)
    const entranceTimer = setTimeout(() => {
      setTogetherRatio(0)
    }, 350)

    // Continuous auto-animation: alternates between spread (0) and together (1) every 3.4 seconds
    const cycleInterval = setInterval(() => {
      setTogetherRatio((prev) => (prev > 0.5 ? 0 : 1))
    }, 3400)

    return () => {
      clearTimeout(entranceTimer)
      clearInterval(cycleInterval)
    }
  }, [])

  const handleSpotlightLike = () => {
    if (!spotlightLiked) {
      setSpotlightLikes((prev) => prev + 1)
      setSpotlightLiked(true)
    } else {
      setSpotlightLikes((prev) => prev - 1)
      setSpotlightLiked(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 antialiased overflow-x-hidden">
      


      {/* ─── SCENE 1: HERO SECTION WITH SIGNATURE CARD ANIMATION ─────── */}
      <section
        id="hero"
        ref={heroRef}
        className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-visible bg-gradient-to-b from-blue-50/50 via-white to-white"
      >
        {/* Subtle decorative blue orbs */}
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-48 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          
          {/* Top Pill (Exact V1 Content) */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            India&apos;s #1 Commerce Engagement Platform
          </div>

          {/* Large Hero Headline (Exact V1 Content) */}
          <h1 className="mx-auto max-w-4xl text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-950 leading-[1.08]">
            List Karo,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 bg-clip-text text-transparent">
              Brand Ko Viral Karo.
            </span>
          </h1>

          {/* ─── THE 5-CARD HORIZONTAL FAN & STACK ANIMATION (tobe.mp4) ─── */}
          <div
            id="deck"
            className="relative mt-8 md:mt-10 mx-auto max-w-5xl h-[310px] sm:h-[350px] md:h-[380px] flex items-center justify-center perspective-1200 overflow-visible"
          >
            
            {/* Left Floating Speech Bubble (@snitch) */}
            <div
              style={{
                transform: `translateY(${togetherRatio * 20}px) scale(${1 - togetherRatio * 0.25})`,
                opacity: Math.max(1 - togetherRatio * 1.5, 0),
                transition: "all 0.4s ease-out",
              }}
              className="absolute -top-3 left-4 sm:left-12 md:left-20 z-40"
            >
              <div className="bubble-tag-blue rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-blue-600/30 animate-gentle-bounce flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                @snitch &bull; 3.2x CVR
              </div>
            </div>

            {/* Right Floating Speech Bubble (@mamaearth) */}
            <div
              style={{
                transform: `translateY(${togetherRatio * 20}px) scale(${1 - togetherRatio * 0.25})`,
                opacity: Math.max(1 - togetherRatio * 1.5, 0),
                transition: "all 0.4s ease-out",
              }}
              className="absolute -top-2 right-4 sm:right-12 md:right-20 z-40"
            >
              <div className="bubble-tag-navy rounded-full bg-blue-800 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-blue-800/30 animate-gentle-bounce flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                @mamaearth &bull; +64% GMV
              </div>
            </div>

            {/* The 5 Cards Deck: Moving horizontally at distinct paces and coming together */}
            <div className="relative flex items-center justify-center w-full h-full">
              {HERO_LISTERR_CARDS.map((card, idx) => {
                const total = HERO_LISTERR_CARDS.length
                const centerIdx = Math.floor(total / 2) // index 2
                const distance = idx - centerIdx // -2, -1, 0, 1, 2
                const isHovered = hoveredCardIdx === idx

                // Horizontal pacing multipliers:
                const spreadUnit = isMobile ? 70 : 138
                const spreadAngle = isMobile ? 6 : 7.2
                const spreadY = isMobile ? 6 : 9

                const spreadX = distance * spreadUnit
                const stackedX = distance * 4.5

                const currentX = spreadX * (1 - togetherRatio) + stackedX * togetherRatio
                const currentRotate = (distance * spreadAngle) * (1 - togetherRatio) + (distance * 1.5) * togetherRatio
                const currentY = (Math.abs(distance) * spreadY) * (1 - togetherRatio) + (distance * 2) * togetherRatio
                const currentScale = (1 - Math.abs(distance) * 0.02) * (1 - togetherRatio) + (1 - Math.abs(distance) * 0.015) * togetherRatio

                const finalX = currentX
                const finalY = isHovered ? -22 : currentY
                const finalRotate = isHovered ? 0 : currentRotate
                const finalScale = isHovered ? 1.10 : currentScale
                const finalZIndex = isHovered ? 60 : (30 - Math.abs(distance) * 2)

                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setHoveredCardIdx(idx)}
                    onMouseLeave={() => setHoveredCardIdx(null)}
                    onClick={() => setActiveVideoModal({ url: card.video, title: card.title, brand: card.brand })}
                    style={{
                      transform: `translateX(${finalX}px) translateY(${finalY}px) rotate(${finalRotate}deg) scale(${finalScale})`,
                      zIndex: finalZIndex,
                      transition: "transform 0.95s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease",
                    }}
                    className={`group absolute w-[132px] sm:w-[185px] md:w-[215px] aspect-[4/5] rounded-3xl overflow-hidden border-[3px] bg-slate-900 shadow-blue-deck cursor-pointer select-none ${
                      isHovered ? "border-blue-500 shadow-2xl ring-4 ring-blue-400/30" : "border-white"
                    }`}
                  >
                    {/* Background Video (Original V1 Video Footage) */}
                    <video
                      src={card.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />

                    {/* Gradient Overlay (Rich Blue Tint at bottom) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/25 to-transparent" />

                    {/* Top Tag Pill */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-white/90 border border-blue-200/50 px-2.5 py-0.5 text-[9px] font-extrabold text-blue-900 uppercase tracking-wider backdrop-blur-md shadow-sm">
                        {card.tag}
                      </span>
                      <span className={`rounded-full ${card.badgeBg} text-white px-2 py-0.5 text-[9px] font-bold shadow-sm`}>
                        {card.stat}
                      </span>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left text-white">
                      <p className="text-xs font-extrabold truncate leading-tight tracking-tight">
                        {card.title}
                      </p>
                      <p className="text-[10px] text-blue-200 mt-0.5 truncate font-medium">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Hover Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-950/30 backdrop-blur-[2px]">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl transition-transform transform group-hover:scale-110">
                        <Play className="h-5 w-5 fill-current ml-0.5 text-blue-600" />
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Subtle spacing between deck and subtitle */}
          <div className="mt-4" />

          {/* Subtitle (Exact V1 Content) */}
          <p className="mx-auto mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            India&apos;s Most Complete Commerce Engagement Platform — Stories, Reels, AI Ordering,
            and Smart Flows, all in one stack.
          </p>

          {/* CTA Buttons (Exact V1 Content, White & Blue Style) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-6 text-sm shadow-xl shadow-blue-600/25 transition-all hover:scale-105"
            >
              <Link href="/access">JOIN LISTERR</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-blue-200 bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-6 text-sm shadow-sm"
            >
              <Link href="/platform">See All Products</Link>
            </Button>
          </div>

          {/* Trust Strip (Exact V1 Content) */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" /> No credit card
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" /> 200+ brands
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" /> 12+ languages
            </span>
          </div>
        </div>
      </section>

      {/* ─── SCENE 2: LIVE METRICS STRIP ─────────────────────────────── */}
      <section id="metrics" className="border-y border-blue-100 bg-white py-14 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8">
          {[
            { value: "200+", label: "Brands Trust Us", sub: "Active D2C and Enterprise Stores" },
            { value: "₹50Cr+", label: "Attributed GMV", sub: "Generated via stories & reels" },
            { value: "2M+", label: "Story Views Served", sub: "Zero buffer CDN streaming" },
            { value: "12+", label: "Indian Languages", sub: "Hindi, Tamil, Telugu, Kannada & more" },
          ].map((m) => (
            <div
              key={m.label}
              className="relative text-center lg:text-left rounded-2xl border border-blue-100/70 bg-gradient-to-br from-white to-blue-50/40 p-6 shadow-sm hover:border-blue-300 transition-colors"
            >
              <p className="text-4xl font-extrabold text-blue-900 md:text-5xl tracking-tight">
                {m.value}
              </p>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-widest text-blue-600">
                {m.label}
              </p>
              <p className="mt-1 text-xs text-slate-500 font-normal">
                {m.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SCENE 3: INTERACTIVE EXPANDING MEDIA DECK (tobe.mp4 00:13) ── */}
      <section id="expanding-showcase" className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
                Multi-View Showcase
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-blue-950 md:text-5xl tracking-tight">
                Connect your catalog to the world of viral commerce.
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Experience how Listerr presents your products: choose between cascading flow, 3D fan, stack, and interactive product grid.
              </p>
            </div>

            {/* Auto Formation Live Indicator (No Buttons) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-blue-700 shadow-sm self-start md:self-auto backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-slate-500 font-medium">Auto Formation:</span>
              <span className="capitalize text-blue-900 font-extrabold">{scene3Mode} Flow</span>
            </div>
          </div>

          {/* Dynamic Media Stage with Continuous Auto Formations */}
          <div className="relative min-h-[460px] md:min-h-[500px] w-full rounded-3xl border border-blue-100 bg-white/80 backdrop-blur-md p-6 sm:p-10 shadow-lg flex items-center justify-center">
            <div className="relative w-full h-[400px] flex items-center justify-center perspective-1200 overflow-visible">
              {EXPANDING_DECK_CARDS.map((item, idx) => {
                const total = EXPANDING_DECK_CARDS.length
                const center = 2.5
                const d = idx - center // -2.5, -1.5, -0.5, 0.5, 1.5, 2.5

                let tx = 0
                let ty = 0
                let rot = 0
                let sc = 1

                if (scene3Mode === "cascade") {
                  // Staggered staircase diagonal
                  tx = d * (isMobile ? 48 : 120)
                  ty = d * (isMobile ? 14 : 18)
                  rot = d * (isMobile ? 2.5 : 3)
                } else if (scene3Mode === "arc") {
                  // Curved arch
                  tx = d * (isMobile ? 48 : 125)
                  ty = Math.abs(d) * (isMobile ? 12 : 16)
                  rot = d * (isMobile ? 4.5 : 6)
                } else if (scene3Mode === "stacked") {
                  // Center stacked deck
                  tx = d * 6
                  ty = d * 2
                  rot = d * 1.5
                  sc = 1 - Math.abs(d) * 0.02
                } else if (scene3Mode === "spread") {
                  // Horizontal spread
                  tx = d * (isMobile ? 50 : 130)
                  ty = 0
                  rot = 0
                  sc = 1
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveVideoModal({ url: item.video, title: item.title, brand: item.brand })}
                    style={{
                      transform: `translateX(${tx}px) translateY(${ty}px) rotate(${rot}deg) scale(${sc})`,
                      zIndex: 10 + idx,
                      transition: "all 0.95s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    className="group absolute w-[128px] sm:w-[180px] md:w-[210px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white bg-slate-900 shadow-blue-deck cursor-pointer hover:!scale-110 hover:!z-50 hover:border-blue-400 transition"
                  >
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-black/20 to-transparent" />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="rounded-full bg-blue-600/90 text-white px-2 py-0.5 text-[9px] font-bold">
                        {item.highlight}
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <p className="text-xs font-bold truncate">{item.title}</p>
                      <p className="text-[10px] text-blue-200 truncate">{item.stat}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-blue-950/30">
                      <span className="h-10 w-10 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg">
                        <Play className="h-4 w-4 fill-current ml-0.5 text-blue-600" />
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCENE 4: INTERACTIVE SPOTLIGHT CARD (tobe.mp4 00:32) ─────── */}
      <section id="spotlight" className="py-20 md:py-28 bg-white border-y border-blue-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
              Spotlight Experience
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-blue-950 md:text-5xl tracking-tight">
              One-tap interactive engagement.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Shoppers double-tap to like, swipe to inspect variants, and buy without ever leaving the story experience.
            </p>
          </div>

          <div className="relative mx-auto max-w-md">
            {/* Center Spotlight Smartphone Card */}
            <div className="relative rounded-[32px] border-4 border-blue-600 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/16] group">
              <video
                src="https://cdn.listerr.network/media/Listerr%20website/listerrcover.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-transparent to-black/40" />

              {/* Top Handle Pill */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
                <div className="flex items-center gap-2 bg-blue-950/60 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-extrabold">@snitch_exclusive</span>
                </div>
                <button
                  onClick={handleSpotlightLike}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md transition-all ${
                    spotlightLiked
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <Heart className={`h-3.5 w-3.5 ${spotlightLiked ? "fill-current" : ""}`} />
                  <span>{spotlightLikes}</span>
                </button>
              </div>

              {/* Bottom In-Video Checkout Pill */}
              <div className="absolute bottom-5 left-4 right-4 z-20">
                <div className="rounded-2xl bg-white/95 backdrop-blur-md p-3.5 text-slate-900 shadow-xl border border-blue-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold text-blue-950">Autumn Oversized Knit</p>
                    <p className="text-[11px] font-bold text-blue-600">₹1,899 &bull; Free Delivery</p>
                  </div>
                  <Button
                    size="sm"
                    className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-4"
                    onClick={() => setActiveVideoModal({
                      url: "https://cdn.listerr.network/media/Listerr%20website/listerrcover.mp4",
                      title: "Listerr Stories Live",
                      brand: "@snitch",
                    })}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCENE 5: AUTO-PLAYING FULL VIDEO CAROUSEL (V1 Stories) ──── */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 text-center mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
            Live Stream Stories
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-blue-950 md:text-5xl tracking-tight">
            Storytelling commerce in real-time action.
          </h2>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Hover to expand &bull; Click to play with sound
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          
          <div className="animate-marquee flex w-max gap-6 pl-4">
            {[...CATALOG_STORIES, ...CATALOG_STORIES].map((story, i) => (
              <div
                key={`${story.title}-${i}`}
                onClick={() => setActiveVideoModal({ url: story.video, title: story.title, brand: story.brand })}
                className="group w-56 shrink-0 cursor-pointer block"
              >
                <div className="relative h-80 overflow-hidden rounded-3xl border-2 border-white bg-slate-900 shadow-blue-deck transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <video
                    src={story.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-black/20 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-blue-600/90 text-white px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider backdrop-blur-sm">
                      {story.category}
                    </span>
                    <span className="rounded-full bg-white/90 text-blue-900 px-2 py-0.5 text-[9px] font-bold">
                      {story.stat}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <p className="text-xs font-extrabold leading-tight">{story.title}</p>
                    <p className="text-[10px] text-blue-200 mt-0.5">{story.tag}</p>
                  </div>

                  {/* Hover Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-950/30">
                    <span className="h-11 w-11 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-xl">
                      <Play className="h-4 w-4 fill-current ml-0.5 text-blue-600" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCENE 6: FOUR PLATFORMS, ONE STACK (Exact V1 Content) ──── */}
      <section id="platforms" className="py-20 md:py-28 bg-white border-t border-blue-100">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
              Four Platforms, One Stack
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-blue-950 md:text-5xl tracking-tight">
              Everything commerce teams need to scale.
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Consolidate story widgets, reels, merchant operations, and regional creator partnerships under a single unified engine.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PLATFORMS_DATA.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.slug}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-blue-50 border border-blue-200/60 px-2.5 py-1 text-[11px] font-extrabold text-blue-700">
                        {p.stat}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-blue-950 tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-1">
                      {p.tagline}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      {p.description}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-blue-50 pt-4">
                      {p.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-blue-50">
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                    >
                      Explore platform <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── GROWTH SECTORS / INDUSTRIES (Exact V1 Content) ──────────── */}
      <section id="industries" className="py-20 md:py-28 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20 border-t border-blue-100">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
              Industries
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-blue-950 md:text-5xl tracking-tight">
              Built for India&apos;s fastest-growing sectors.
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
              From D2C to EdTech, Listerr powers engagement where it matters most.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SECTORS_DATA.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300"
                >
                  {/* Image area */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-black/20 to-transparent" />

                    {/* Floating icon badge */}
                    <div className={`absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Stat badge */}
                    <div className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-blue-950 shadow-sm backdrop-blur-md">
                      {s.stat}
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-extrabold text-blue-950 tracking-tight">{s.name}</h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">{s.description}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-blue-600">
                      <span>Explore</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SCENE 7: USE-CASE VISUAL MATRIX (6 Media Cards) ────────── */}
      <section id="use-cases" className="py-20 md:py-28 bg-gradient-to-b from-blue-50/40 to-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
                Use Cases
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-blue-950 md:text-5xl tracking-tight">
                Build the moments that convert.
              </h2>
            </div>
            <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <Link href="/use-cases/stories">Explore All Use Cases</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((uc) => {
              const Icon = uc.icon
              return (
                <div
                  key={uc.title}
                  onClick={() => setActiveVideoModal({ url: uc.video, title: uc.title, brand: "@listerr" })}
                  className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <video
                      src={uc.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-black/20 to-transparent" />
                    
                    <span className="absolute top-3 right-3 rounded-full bg-blue-600/90 text-white px-2.5 py-0.5 text-xs font-bold">
                      {uc.stat}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="h-4 w-4 text-blue-300" />
                        <h3 className="text-base font-extrabold leading-tight">{uc.title}</h3>
                      </div>
                      <p className="text-xs text-blue-100 leading-snug">{uc.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SCENE 8: LISTERR AI AUTOMATION ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-y border-blue-100">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-white to-blue-50/40 p-8 md:p-14 shadow-xl shadow-blue-500/5">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-extrabold text-blue-800">
                  <Bot className="h-3.5 w-3.5 text-blue-600" /> Listerr AI Ordering
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
                  Turn WhatsApp chats &amp; DMs into instant revenue.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Listerr AI handles automated customer product inquiries, auto-creates shopping carts from story replies, and guides buyers through WhatsApp UPI checkout in seconds.
                </p>

                <div className="mt-8 space-y-3.5">
                  {[
                    "AI Voice & Text Ordering in 12 Indian regional languages",
                    "Automated Abandoned Cart Recovery via WhatsApp templates",
                    "Instant UPI payment links with 0 payment drop-off",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 rounded-full bg-blue-100 text-blue-600 items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span className="text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-9">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-7 shadow-lg shadow-blue-600/20"
                  >
                    <Link href="/ai">Explore AI Features</Link>
                  </Button>
                </div>
              </div>

              {/* Chat Simulator */}
              <div className="relative rounded-2xl border border-blue-200 bg-white p-6 shadow-md">
                <div className="flex items-center justify-between pb-4 border-b border-blue-100">
                  <div className="flex items-center gap-2.5">
                    <span className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                      AI
                    </span>
                    <div>
                      <p className="text-xs font-extrabold text-blue-950">Listerr Commerce Agent</p>
                      <p className="text-[10px] text-blue-600 font-semibold">Online &bull; WhatsApp Live</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-full">
                    UPI Active
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="bg-slate-50 border border-blue-100 rounded-2xl rounded-tl-sm p-3.5 text-xs text-slate-700 shadow-sm max-w-[85%]">
                    <p className="font-semibold text-blue-950">Buyer @priya_m:</p>
                    <p className="mt-1">I saw the oversized linen shirt in your Instagram story. Do you have it in Size M?</p>
                  </div>
                  <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm p-3.5 text-xs shadow-md ml-auto max-w-[85%]">
                    <p className="font-bold text-blue-100">Listerr AI:</p>
                    <p className="mt-1">Yes Priya! Linen Shirt (Olive, M) is in stock. ₹1,499 with free express delivery. Click to pay via GPay/PhonePe:</p>
                    <div className="mt-2.5 rounded-xl bg-white/15 p-2 flex items-center justify-between">
                      <span className="font-extrabold text-white text-[11px]">Instant UPI Checkout</span>
                      <span className="bg-white text-blue-600 font-extrabold px-2 py-0.5 rounded text-[10px]">PAY ₹1,499</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCENE 9: BRAND LOGO STRIP ───────────────────────────────── */}
      <section className="py-12 bg-white border-b border-blue-100/70 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 text-center mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            Trusted by fast-growing Indian D2C leaders
          </p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="animate-marquee flex w-max gap-8 items-center pl-4">
            {[...TRUSTED_BRANDS, ...TRUSTED_BRANDS].map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="rounded-full border border-blue-100 bg-blue-50/40 px-6 py-2.5 text-xs font-extrabold tracking-widest text-blue-900 shadow-sm"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCENE 10: PRICING (White & Blue) ────────────────────────── */}
      <section id="pricing" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
            Transparent Pricing
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-blue-950 md:text-5xl tracking-tight">
            Plans built to grow with your brand.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Start free, scale seamlessly. No hidden fees or surprise overages.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto text-left">
            {[
              {
                title: "Starter",
                price: "₹4,999",
                period: "/month",
                desc: "Ideal for emerging D2C brands starting with shoppable stories.",
                features: ["Up to 50K Story Views", "Unlimited Story Creation", "Shopify & WooCommerce Sync", "Standard Support"],
                button: "Start Free Trial",
                highlight: false,
              },
              {
                title: "Growth",
                price: "₹14,999",
                period: "/month",
                desc: "For scaling brands scaling video reels and WhatsApp checkout.",
                features: ["Up to 250K Story Views", "AI WhatsApp Ordering Flow", "Meta Ads Sync & ROAS Tracker", "Priority 24/7 Support"],
                button: "Get Growth Plan",
                highlight: true,
              },
              {
                title: "Enterprise",
                price: "Custom",
                period: "",
                desc: "For multi-brand retailers and high-volume e-commerce empires.",
                features: ["Unlimited Story & Reel Views", "Dedicated Account Strategist", "Custom AI Voice & DM Agents", "Custom SLA & Enterprise Security"],
                button: "Talk to Sales",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  plan.highlight
                    ? "border-2 border-blue-600 bg-gradient-to-b from-blue-50/40 via-white to-white shadow-xl shadow-blue-500/10 -translate-y-2"
                    : "border border-blue-100 bg-white shadow-sm hover:border-blue-300"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-extrabold text-blue-950">{plan.title}</h3>
                  <p className="mt-2 text-xs text-slate-500">{plan.desc}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-blue-950 tracking-tight">{plan.price}</span>
                    <span className="text-xs font-semibold text-slate-500">{plan.period}</span>
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-blue-50 pt-6">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="h-4 w-4 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button
                    asChild
                    className={`w-full rounded-full font-extrabold text-xs py-5 ${
                      plan.highlight
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                        : "border border-blue-200 bg-white text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    <Link href="/access">{plan.button}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCENE 11: CTA BAND (White & Blue) ───────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-extrabold text-white backdrop-blur-md">
            Ready to scale your store?
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Start converting browsers into loyal buyers today.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Join 200+ top Indian brands using Listerr to drive ₹50Cr+ in commerce. Setup takes less than 10 minutes.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-blue-700 hover:bg-blue-50 font-extrabold px-8 py-6 text-sm shadow-xl"
            >
              <Link href="/access">JOIN LISTERR TODAY</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 font-bold px-8 py-6 text-sm"
            >
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY / SOCIAL PROOF (Exact V1 Content) ────────────── */}
      <section className="py-20 bg-gradient-to-b from-blue-50/40 to-white border-y border-blue-100">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-blue-200 bg-white p-8 md:p-14 shadow-lg shadow-blue-500/5 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
              Featured Case Study
            </span>
            <blockquote className="mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-blue-950 tracking-tight">
              &ldquo;Listerr helped our team turn storefront traffic into repeat buyers — the results were instant.&rdquo;
            </blockquote>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["+58%", "Engagement"],
                ["2.3x", "CVR Lift"],
                ["4.1x", "Repeat Rate"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 text-center"
                >
                  <p className="text-3xl font-extrabold text-blue-700">{value}</p>
                  <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center sm:text-left">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition"
              >
                Read the full story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SHOPIFY GROWTH SPOTLIGHT (Exact V1 Content) ─────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-blue-100">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
                Shopify Growth
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
                Listerr + Shopify: Stories, AI Orders, Meta Sync.
              </h2>
              <div className="mt-6 space-y-3.5 text-slate-600 text-sm">
                {[
                  "One-click install",
                  "Shoppable storefront Stories",
                  "Meta Ads loop",
                  "AI-powered catalogue sync",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3 font-medium">
                    <span className="flex h-5 w-5 rounded-full bg-blue-100 text-blue-600 items-center justify-center shrink-0">
                      <PackageCheck className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </p>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 mt-8 shadow-md shadow-blue-600/20">
                <Link href="/use-cases/shopify">Get the Shopify App</Link>
              </Button>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-blue-50/40 p-6 sm:p-8 shadow-lg">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  "2.4x homepage CVR",
                  "3-5x more lead opt-ins",
                  "40% fewer ROAS-negative campaigns",
                ].map((stat) => (
                  <div key={stat} className="rounded-2xl border border-blue-100 bg-white p-5 text-center text-sm font-extrabold text-blue-950 shadow-sm">
                    {stat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTEGRATIONS SECTION (Exact V1 Hub & 16 Logos) ──────────── */}
      <section id="integrations" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
              Integrations
            </span>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold text-blue-950 md:text-5xl tracking-tight">
              Connect with the commerce tools your teams already use.
            </h2>
          </div>

          {/* Hub and spoke visual */}
          <div className="relative mx-auto max-w-4xl">
            {/* Center hub */}
            <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl shadow-blue-600/30">
              <div className="text-center">
                <Layers className="mx-auto h-7 w-7" />
                <span className="mt-0.5 block text-[9px] font-extrabold tracking-wider">LISTERR</span>
              </div>
            </div>

            {/* Connection lines */}
            <div className="absolute left-1/2 top-12 h-[1px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

            {/* Integration cards grid */}
            <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4">
              {INTEGRATION_NAMES.map((integ) => (
                <div
                  key={integ}
                  className="group flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-300"
                >
                  {integrationLogos[integ] ? integrationLogos[integ]() : null}
                  <span className="text-xs font-extrabold text-blue-950">{integ}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition"
              >
                View all integrations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER (Exact V1 Content) ───────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Start turning engagement into revenue.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-blue-100 leading-relaxed">
            Join hundreds of Indian D2C brands lifting conversion, retention, and repeat sales with Listerr.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-blue-700 hover:bg-blue-50 font-extrabold px-8 py-6 text-sm shadow-xl"
            >
              <Link href="/access">JOIN LISTERR TODAY</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 font-bold px-8 py-6 text-sm"
            >
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── SMARTPHONE-FRAME MODAL VIDEO PLAYER ─────────────────────── */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/80 p-4 backdrop-blur-md animate-scale-in">
          <div className="absolute inset-0" onClick={() => setActiveVideoModal(null)} />
          <div className="relative z-10 w-full max-w-[320px] aspect-[9/16] rounded-3xl border-2 border-white/40 bg-black shadow-2xl overflow-hidden flex flex-col justify-end">
            <video
              src={activeVideoModal.url}
              autoPlay
              controls
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-blue-950/90 to-transparent z-20 flex items-center justify-between text-white">
              <div>
                <p className="text-xs font-extrabold">{activeVideoModal.title}</p>
                <p className="text-[10px] text-blue-200">{activeVideoModal.brand}</p>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition backdrop-blur-md"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
