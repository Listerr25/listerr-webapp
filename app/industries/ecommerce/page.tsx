import type { Metadata } from "next"
import { IndustryPage } from "@/components/industry/industry-page"

export const metadata: Metadata = { alternates: { canonical: "/industries/ecommerce" }, title: "E-Commerce Industry", description: "Listerr for Indian D2C and Shopify merchants.",
  openGraph: {
    url: "/industries/ecommerce",
    title: "E-Commerce Industry",
    description: "Listerr for Indian D2C and Shopify merchants.",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Industry",
    description: "Listerr for Indian D2C and Shopify merchants.",
  },
}

export default function Page() {
  return <IndustryPage title="Built for Indian D2C and Shopify Merchants" description="Shoppable Stories, AI ordering, Meta + Google sync, and a unified seller dashboard." useCases={[{title:"Shopify Growth",description:"Deep Shopify content, AI ordering, and ads loop.",href:"/use-cases/shopify"},{title:"Stories",description:"Shoppable owned-surface Stories for conversion.",href:"/use-cases/stories"},{title:"AI Calling",description:"Voice agents for order capture and recovery.",href:"/ai/ai-calling"}]} metrics={[{value:"2.4x",label:"Homepage CVR"},{value:"15-30%",label:"Cart recovery"},{value:"60%",label:"Catalogue performance"}]} caseStudy="D2C beauty brand, ₹50L+ monthly GMV placeholder study." integrations={["Shopify","WooCommerce","Razorpay","Meta Ads","Google Ads","WhatsApp","Shiprocket","GA4"]} teamLabel="E-Commerce Team" />
}
