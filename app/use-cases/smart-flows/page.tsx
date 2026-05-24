import type { Metadata } from "next"
import { Package, PartyPopper, RefreshCcw, ShoppingCart, Tag } from "lucide-react"
import { UseCasePage } from "@/components/use-cases/use-case-page"

export const metadata: Metadata = { title: "Smart Flows", description: "Outcome-driven multi-step commerce flows for cart recovery, onboarding, re-engagement, post-purchase, and festivals." }

export default function Page() {
  return <UseCasePage eyebrow="Smart Flows" title="Define an Outcome. Listerr Builds the Multi-Step Flow." subtitle="From cart recovery to festival sale — orchestrated, trigger-based content sequences." cardsTitle="Flow types" cards={[{title:"Cart Recovery",description:"Story to discount to AI nudge to WhatsApp.",icon:ShoppingCart},{title:"New User Onboarding",description:"Welcome, feature tour, offer, and gamified invite.",icon:PartyPopper},{title:"Re-engagement",description:"Exclusive offer and reward for dormant users.",icon:RefreshCcw},{title:"Post-Purchase",description:"Thank you, unboxing, cross-sell, and review request.",icon:Package},{title:"Festival Sale",description:"Teaser, launch, deals list, flash sale, last chance.",icon:Tag}]} checklist={["Visual drag-and-drop builder","Event, time, and segment triggers","Exit conditions","Multi-channel steps","AI call and text actions","Step conversion analytics"]} metrics={[{value:"15-30%",label:"Cart recovery"},{value:"+40%",label:"Day-7 retention"},{value:"20-25%",label:"Reactivation"},{value:"5",label:"Flow types"}]} funnel={["Trigger","Content step","AI action","Outcome"]} />
}
