import type { Metadata } from "next"
import { AiCamerasHubClient } from "@/components/hardware/ai-cameras-hub-client"

export const metadata: Metadata = {
  title: "Listerr One AI Camera Series — Vision AI for Indian Restaurants & F&B Outlets",
  description:
    "Turn outlet CCTV into live operational data. Measure queues, table turnover, entrance footfall, and kitchen hygiene with on-camera AI and WhatsApp alerts.",
  alternates: { canonical: "/hardware/ai-cameras" },
  openGraph: {
    url: "/hardware/ai-cameras",
    title: "Listerr One AI Camera Series | Listerr",
    description:
      "See more. Serve better. Bullet, Dome, Turret, 360° Fisheye, Kitchen Hygiene cameras and Vision AI Edge Box built for Indian F&B.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Listerr One AI Camera Series — Vision AI for F&B",
    description:
      "On-device Vision AI for Indian restaurants. Pairs with Petpooja, Restroworks, WhatsApp alerts, and digital signage.",
  },
}

export default function AiCamerasPage() {
  return <AiCamerasHubClient />
}
