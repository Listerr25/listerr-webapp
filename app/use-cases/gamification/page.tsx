import type { Metadata } from "next"
import { Disc3, Flame, ListOrdered, Sparkles, Target, Trophy } from "lucide-react"
import { UseCasePage } from "@/components/use-cases/use-case-page"

export const metadata: Metadata = { alternates: { canonical: "/use-cases/gamification" }, title: "Gamification for Commerce", description: "Streaks, spin wheels, scratch cards, badges, challenges, and leaderboards for commerce engagement.",
  openGraph: {
    url: "/use-cases/gamification",
    title: "Gamification for Commerce",
    description: "Streaks, spin wheels, scratch cards, badges, challenges, and leaderboards for commerce engagement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamification for Commerce",
    description: "Streaks, spin wheels, scratch cards, badges, challenges, and leaderboards for commerce engagement.",
  },
}

export default function Page() {
  return <UseCasePage eyebrow="Gamification" title="Turn Passive Users Into Daily Engaged Customers" subtitle="Streaks, scratch cards, spin-the-wheel, badges — embedded in your content, no separate gaming SDK." cardsTitle="Mechanics" cards={[{title:"Daily Streaks",description:"Reward daily engagement with visible counters.",icon:Flame},{title:"Spin the Wheel",description:"Lucky draw moments inside Story frames.",icon:Disc3},{title:"Scratch Cards",description:"Reveal discounts with high-engagement mechanics.",icon:Sparkles},{title:"Badges & Levels",description:"Reward purchases, reviews, and referrals.",icon:Trophy},{title:"Challenges",description:"Complete 3 purchases for Gold status.",icon:Target},{title:"Leaderboards",description:"Rank top buyers, reviewers, and referrers.",icon:ListOrdered}]} checklist={["Embedded mechanics","No separate gaming SDK","Reward rules","Streak counters","Offer reveals","Step-by-step analytics"]} metrics={[{value:"3x",label:"DAU with streaks"},{value:"25%+",label:"Higher ATC"},{value:"4x",label:"Review submission"},{value:"6",label:"Mechanics"}]} funnel={["Activation","Habit","Reward","Repeat"]} />
}
