import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CAMERAS_DATA } from "@/lib/camera-data"
import { CameraProductDetail } from "@/components/hardware/camera-product-page"

const product = CAMERAS_DATA.find((c) => c.id === "fisheye")!

export const metadata: Metadata = {
  title: "Listerr One 360° Fisheye AI Camera — Panoramic Floor Heatmaps & Dwell Time",
  description:
    "One ceiling camera that sees the whole room. Builds footfall dwell heatmaps and room occupancy for open-plan restaurants and retail.",
  alternates: { canonical: "/hardware/ai-cameras/fisheye" },
}

export default function FisheyePage() {
  if (!product) return notFound()
  return <CameraProductDetail product={product} />
}
