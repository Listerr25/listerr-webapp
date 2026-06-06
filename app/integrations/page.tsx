import type { Metadata } from "next"
import { Code2, CreditCard, Megaphone, MessageCircle, PlugZap, ShoppingBag } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { alternates: { canonical: "/integrations" }, title: "Integrations", description: "Connect Listerr with e-commerce, CRM, analytics, ads, payments, CMS, WhatsApp, CDP, and design tools.",
  openGraph: {
    url: "/integrations",
    title: "Integrations",
    description: "Connect Listerr with e-commerce, CRM, analytics, ads, payments, CMS, WhatsApp, CDP, and design tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations",
    description: "Connect Listerr with e-commerce, CRM, analytics, ads, payments, CMS, WhatsApp, CDP, and design tools.",
  },
}

export default function Page() {
  return <SimpleMarketingPage eyebrow="Integrations" title="One SDK. Infinite Connectivity. No Rip-and-Replace." description="Listerr plugs into your existing stack — e-commerce, CRM, analytics, ads, payments, CMS, communication, and CDP." primaryCta={{label:"View SDK Docs",href:"/docs"}} secondaryCta={{label:"Talk Integrations",href:"/contact"}} features={[{title:"E-Commerce",description:"Shopify, WooCommerce, Magento, BigCommerce, custom REST.",icon:ShoppingBag},{title:"Ads",description:"Meta Ads Manager, Google Ads, TikTok for Business.",icon:Megaphone},{title:"Payments",description:"Razorpay, PayU, Cashfree, Paytm, and UPI flows.",icon:CreditCard},{title:"Communication",description:"WhatsApp Business API, Twilio, Gupshup, MSG91.",icon:MessageCircle},{title:"SDKs",description:"iOS, Android, React Native, Flutter, and Web JS.",icon:Code2},{title:"Data",description:"Segment, Rudderstack, mParticle, and analytics tools.",icon:PlugZap}]} checklist={["E-commerce sync","CRM and marketing integrations","Analytics events","Ad platform loops","Payment links","Communication channels","CDP support","SDK documentation shell"]} metrics={[{value:"9",label:"Categories"},{value:"5",label:"SDK targets"},{value:"20+",label:"Tools surfaced"},{value:"REST",label:"Custom support"}]} related={[{label:"Docs",href:"/docs"},{label:"Seller Studio",href:"/seller-studio"},{label:"Shopify",href:"/use-cases/shopify"}]} />
}
