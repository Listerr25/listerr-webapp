import type { Metadata } from "next"
import { IndustryPage } from "@/components/industry/industry-page"

export const metadata: Metadata = { title: "EdTech Industry", description: "Listerr for course discovery, learner activation, and daily engagement." }

export default function Page() {
  return <IndustryPage title="Boost Course Discovery, Activation, and Daily Engagement" description="Onboarding Stories, Gamification streaks, Smart Flows for re-engagement, and AI personalised content for learners." useCases={[{title:"Stories",description:"Onboarding and course teaser experiences.",href:"/use-cases/stories"},{title:"Gamification",description:"Daily learning streaks and rewards.",href:"/use-cases/gamification"},{title:"AI Personalisation",description:"Course recommendations by learner context.",href:"/use-cases/ai-personalisation"}]} metrics={[{value:"+40%",label:"Day-7 retention"},{value:"3x",label:"DAU with streaks"},{value:"4x",label:"Content engagement"}]} caseStudy="EdTech app placeholder study for onboarding, streaks, and Smart Flows." integrations={["Firebase","MoEngage","WebEngage","Segment","Razorpay","WhatsApp","GA4","Custom API"]} teamLabel="EdTech Team" />
}
