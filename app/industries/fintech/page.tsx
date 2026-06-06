import type { Metadata } from "next"
import { IndustryPage } from "@/components/industry/industry-page"

export const metadata: Metadata = { alternates: { canonical: "/industries/fintech" }, title: "FinTech Industry", description: "DPDP-ready commerce engagement for banks, NBFCs, and fintech apps.",
  openGraph: {
    url: "/industries/fintech",
    title: "FinTech Industry",
    description: "DPDP-ready commerce engagement for banks, NBFCs, and fintech apps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech Industry",
    description: "DPDP-ready commerce engagement for banks, NBFCs, and fintech apps.",
  },
}

export default function Page() {
  return <IndustryPage title="Build Trust, Drive Activation, Cross-Sell Products" description="Compliant content experiences for banks, NBFCs, and fintech apps. DPDP-ready, India data residency, audit logs." useCases={[{title:"Stories",description:"Product explainers and KYC step-by-step flows.",href:"/use-cases/stories"},{title:"AI Personalisation",description:"Next-best-product and contextual education.",href:"/use-cases/ai-personalisation"},{title:"Smart Flows",description:"Activation and dormant-user re-engagement.",href:"/use-cases/smart-flows"}]} metrics={[{value:"2.1x",label:"Product activation"},{value:"DPDP",label:"Compliance ready"},{value:"India",label:"Residency option"}]} caseStudy="FinTech activation placeholder study for explainers and Smart Flows." integrations={["WebEngage","MoEngage","Segment","Razorpay","GA4","Custom API","S3","CRM"]} teamLabel="FinTech Team" />
}
