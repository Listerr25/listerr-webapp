import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CAMERAS_DATA } from "@/lib/camera-data"
import { CameraProductDetail } from "@/components/hardware/camera-product-page"

const product = CAMERAS_DATA.find((c) => c.id === "turret")!

export const metadata: Metadata = {
  title: "Listerr One Turret AI Camera — Counters, Queue Length & POS Pairing",
  description:
    "Eyeball camera aimed at counters and order points. Measures queue wait, counter service duration, and triggers dynamic digital signage menus.",
  alternates: { canonical: "/hardware/ai-cameras/turret" },
}

export default function TurretPage() {
  if (!product) return notFound()
  return <CameraProductDetail product={product} />
}
