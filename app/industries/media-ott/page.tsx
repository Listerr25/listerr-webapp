import type { Metadata } from "next"
import { IndustryPage } from "@/components/industry/industry-page"

export const metadata: Metadata = { alternates: { canonical: "/industries/media-ott" }, title: "Media & OTT Industry", description: "Listerr for show discovery, curation, reels, and retention loops.",
  openGraph: {
    url: "/industries/media-ott",
    title: "Media & OTT Industry",
    description: "Listerr for show discovery, curation, reels, and retention loops.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & OTT Industry",
    description: "Listerr for show discovery, curation, reels, and retention loops.",
  },
}

export default function Page() {
  return <IndustryPage title="Keep Viewers in Your App with Snackable Discovery" description="Stories and Reels for show teasers, Customer Lists for curation, gamification for season passes." useCases={[{title:"Reels",description:"Show teasers and behind-the-scenes vertical video.",href:"/use-cases/reels"},{title:"Customer Lists",description:"Top 10 watch lists and editorial curation.",href:"/use-cases/customer-lists"},{title:"Gamification",description:"Binge badges and watch streaks.",href:"/use-cases/gamification"}]} metrics={[{value:"+38%",label:"Time in app"},{value:"2.7x",label:"List CTR"},{value:"+22%",label:"Renewal lift"}]} caseStudy="Media OTT placeholder study for reels, lists, and watch streaks." integrations={["Firebase","Segment","Amplitude","Mixpanel","Braze","WebEngage","GA4","Custom CMS"]} teamLabel="Media Team" />
}
