import type { Metadata } from "next"
import { HardwareCatalogClient } from "@/components/v2/hardware-catalog-client"

export const metadata: Metadata = {
  title: "04 IoT & Commercial Hardware · Listerr One",
  description: "Listerr One commercial displays, touch kiosks, video walls, size matrix, and Vision AI cameras series.",
}

export default function V2HardwarePage() {
  return <HardwareCatalogClient />
}

