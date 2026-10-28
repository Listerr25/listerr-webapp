import type { Metadata } from "next"
import { HardwareCatalogClient } from "@/components/v2/hardware-catalog-client"

export const metadata: Metadata = {
  title: "Commercial Displays & Touch Kiosks",
  description: "Listerr One commercial displays, touch kiosks, video walls, size matrix, and Vision AI cameras series.",
  alternates: {
    canonical: "/hardware",
  },
}

export default function V2HardwarePage() {
  return <HardwareCatalogClient />
}

