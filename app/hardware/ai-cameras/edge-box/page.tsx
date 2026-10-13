import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CAMERAS_DATA } from "@/lib/camera-data"
import { CameraProductDetail } from "@/components/hardware/camera-product-page"

const product = CAMERAS_DATA.find((c) => c.id === "edge-box")!

export const metadata: Metadata = {
  title: "Listerr Vision AI Edge Box — CCTV Retrofit Appliance for Existing Cameras",
  description:
    "Upgrade existing Hikvision, CP Plus, and Dahua cameras with Listerr Vision AI. Local edge processing, multi-camera feeds, and offline synchronization.",
  alternates: { canonical: "/hardware/ai-cameras/edge-box" },
}

export default function EdgeBoxPage() {
  if (!product) return notFound()
  return <CameraProductDetail product={product} />
}
