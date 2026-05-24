import type { Metadata } from "next"
import { Clapperboard, PackageSearch, Play, Star, UserRoundCheck } from "lucide-react"

import { UseCasePage } from "@/components/use-cases/use-case-page"

export const metadata: Metadata = {
  title: "Reels & Video — Shoppable vertical video inside your app",
  description:
    "TikTok-style vertical video with shoppable overlays, creator attribution, autoplay, and revenue analytics.",
}

export default function ReelsUseCasePage() {
  return (
    <UseCasePage
      eyebrow="Reels & Video"
      title="Reels Inside Your Brand App — Users Don't Have to Leave to Watch"
      subtitle="TikTok-style vertical video with shoppable overlays, embedded anywhere in your app."
      cardsTitle="Reel types"
      cards={[
        { title: "Product Showcase", description: "15-60 second demos with product context.", icon: PackageSearch },
        { title: "UGC Reels", description: "Permissioned creator and customer videos.", icon: UserRoundCheck },
        { title: "How-to Tutorial", description: "Education-led commerce moments.", icon: Play },
        { title: "Unboxing & Review", description: "Trust-building video for consideration.", icon: Star },
        { title: "Behind the Scenes", description: "Brand storytelling without leaving your owned surface.", icon: Clapperboard },
      ]}
      checklist={[
        "Pinned product name, price, and Add to Cart",
        "TikTok-style vertical feed",
        "Silent autoplay on scroll",
        "Seamless loop playback",
        "Creator attribution",
        "Network creator profile links",
        "Product tap-through tracking",
        "Revenue attribution by reel",
      ]}
      metrics={[
        { value: "15-60s", label: "Product videos" },
        { value: "+58%", label: "Engagement" },
        { value: "2.3x", label: "Conversion lift" },
        { value: "4.1x", label: "Repeat rate" },
      ]}
      funnel={["Awareness", "Product education", "Cart assist", "Remarketing"]}
    />
  )
}
