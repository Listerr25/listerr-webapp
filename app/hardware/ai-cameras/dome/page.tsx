import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CAMERAS_DATA } from "@/lib/camera-data"
import { CameraProductDetail } from "@/components/hardware/camera-product-page"

const product = CAMERAS_DATA.find((c) => c.id === "dome")!

export const metadata: Metadata = {
  title: "Listerr One Dome AI Camera — Dining Halls, Table Occupancy & Service Requests",
  description:
    "Discreet ceiling camera for dining rooms and food courts. Tracks table turnover, uncleared cleaning alerts, and raised-hand service requests.",
  alternates: { canonical: "/hardware/ai-cameras/dome" },
}

export default function DomePage() {
  if (!product) return notFound()
  return <CameraProductDetail product={product} />
}
