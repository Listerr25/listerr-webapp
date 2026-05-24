import type { LucideIcon } from "lucide-react"
import { Layers, LayoutDashboard, PenTool, Users } from "lucide-react"

export type BrandSlug = "listerr" | "seller" | "network" | "storyboard"

export type Brand = {
  slug: BrandSlug
  name: string
  shortName: string
  href: string
  description: string
  token: string
  bg: string
  border: string
  text: string
  icon: LucideIcon
}

export const brands: Record<BrandSlug, Brand> = {
  listerr: {
    slug: "listerr",
    name: "Listerr",
    shortName: "Core",
    href: "/listerr",
    description: "Core engagement platform for Stories, Reels, and Lists.",
    token: "brand.listerr",
    bg: "bg-brand-listerr-50",
    border: "border-brand-listerr-600",
    text: "text-brand-listerr-700",
    icon: Layers,
  },
  seller: {
    slug: "seller",
    name: "Seller Studio",
    shortName: "Studio",
    href: "/seller-studio",
    description: "Merchant command centre for catalogue, content, orders, and ads.",
    token: "brand.seller",
    bg: "bg-brand-seller-50",
    border: "border-brand-seller-600",
    text: "text-brand-seller-700",
    icon: LayoutDashboard,
  },
  network: {
    slug: "network",
    name: "Listerr Network",
    shortName: "Network",
    href: "/network",
    description: "Creator and partner marketplace for commerce growth.",
    token: "brand.network",
    bg: "bg-brand-network-50",
    border: "border-brand-network-600",
    text: "text-brand-network-700",
    icon: Users,
  },
  storyboard: {
    slug: "storyboard",
    name: "Storyboard",
    shortName: "Storyboard",
    href: "/storyboard",
    description: "Content creation studio for shoppable commerce media.",
    token: "brand.storyboard",
    bg: "bg-brand-storyboard-50",
    border: "border-brand-storyboard-600",
    text: "text-brand-storyboard-700",
    icon: PenTool,
  },
}

export const brandList = Object.values(brands)
