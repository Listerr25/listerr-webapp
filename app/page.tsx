import type { Metadata } from "next"
import { HomePageV2Client } from "@/components/v2/home-page-v2-client"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return <HomePageV2Client />
}
