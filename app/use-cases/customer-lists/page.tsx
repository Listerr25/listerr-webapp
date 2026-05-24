import type { Metadata } from "next"
import { ListChecks, ListOrdered, ShoppingBag, Vote } from "lucide-react"

import { UseCasePage } from "@/components/use-cases/use-case-page"

export const metadata: Metadata = {
  title: "Customer Lists — Listerr's signature interactive format",
  description:
    "Curated, ranked, interactive customer lists that users browse, vote, save, and buy from.",
}

export default function CustomerListsUseCasePage() {
  return (
    <UseCasePage
      eyebrow="Signature format"
      title="Customer Lists — Listerr's Signature, First-of-Its-Kind Format"
      subtitle="Curated, ranked, interactive collections users browse, vote, and save. Perfect for discovery and editorial."
      cardsTitle="List formats"
      cards={[
        { title: "Ranked Product Lists", description: "Top 10 bestsellers that auto-update from inventory.", icon: ListOrdered },
        { title: "Curated Editorial Lists", description: "Editor-controlled discovery collections.", icon: ListChecks },
        { title: "User-Voted Lists", description: "Community top-pick badges that create social proof.", icon: Vote },
        { title: "Deal & Offer Lists", description: "Time-sensitive lists that refresh for flash moments.", icon: ShoppingBag },
      ]}
      checklist={[
        "Native ranked collections",
        "Browse, vote, and save interactions",
        "Auto-updating inventory-backed lists",
        "Editor-controlled curated lists",
        "SEO-friendly list pages",
        "Reusable in homepage, PDP, email, and push",
        "Low drop-off compared with banners",
        "List-click and save analytics",
      ]}
      metrics={[
        { value: "1st", label: "Native list format" },
        { value: "3-5x", label: "Lead opt-ins" },
        { value: "+40%", label: "Retention potential" },
        { value: "SEO", label: "Best-category capture" },
      ]}
      funnel={["Discovery", "Comparison", "Social proof", "Purchase intent"]}
    />
  )
}
