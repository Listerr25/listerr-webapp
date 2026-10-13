import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CAMERAS_DATA } from "@/lib/camera-data"
import { CameraProductDetail } from "@/components/hardware/camera-product-page"

const product = CAMERAS_DATA.find((c) => c.id === "bullet")!

export const metadata: Metadata = {
  title: "Listerr One Bullet AI Camera — Outdoor, Footfall & Drive-Thru Vision",
  description:
    "Long-reach outdoor camera for entrances, parking, and drive-thru lanes. Tracks footfall line-crossing, free parking bays, and after-hours alerts.",
  alternates: { canonical: "/hardware/ai-cameras/bullet" },
}

export default function BulletPage() {
  if (!product) return notFound()
  return <CameraProductDetail product={product} />
}
