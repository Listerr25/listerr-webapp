import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CAMERAS_DATA } from "@/lib/camera-data"
import { CameraProductDetail } from "@/components/hardware/camera-product-page"

const product = CAMERAS_DATA.find((c) => c.id === "kitchen-hygiene")!

export const metadata: Metadata = {
  title: "Listerr One Kitchen Hygiene Camera — Caps, Gloves, Aprons & Plating Audits",
  description:
    "Steam-resistant sealed wipe-clean camera for commercial and cloud kitchens. Real-time cap, glove, apron checks, hand-wash compliance, and pass plating photos.",
  alternates: { canonical: "/hardware/ai-cameras/kitchen-hygiene" },
}

export default function KitchenHygienePage() {
  if (!product) return notFound()
  return <CameraProductDetail product={product} />
}
