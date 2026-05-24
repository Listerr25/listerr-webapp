import type { Metadata } from "next"
import { BrainCircuit, Clock, MapPin, Target } from "lucide-react"
import { UseCasePage } from "@/components/use-cases/use-case-page"

export const metadata: Metadata = { title: "AI Personalisation", description: "Real-time AI scoring across Stories, Reels, and Lists for personalised commerce content." }

export default function Page() {
  return <UseCasePage eyebrow="AI Personalisation" title="Every User Sees the Content Most Likely to Convert Them" subtitle="Real-time AI scoring across Stories, Reels, and Lists. No manual segmentation rules." cardsTitle="Signal categories" cards={[{title:"Behavioural",description:"Pages, searches, cart, orders, and content engagement.",icon:BrainCircuit},{title:"Contextual",description:"Time, day, device, location, and weather.",icon:Clock},{title:"Demographic",description:"Language, platform source, and broad audience traits.",icon:MapPin},{title:"Campaign",description:"Promotions, inventory, margin goals, and business rules.",icon:Target}]} checklist={["A/B testing engine","Multi-armed bandit","Dynamic content injection","Cohort builder","Real-time scoring","Continuous retraining"]} metrics={[{value:"4",label:"Signal groups"},{value:"Real-time",label:"Ranking"},{value:"AI",label:"Traffic shifting"},{value:"12+",label:"Languages"}]} funnel={["Context capture","Content scoring","Best content shown","Model learns"]} />
}
