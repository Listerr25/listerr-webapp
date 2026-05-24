import type { Metadata } from "next"
import { FileSpreadsheet, Package, ShoppingBag, Tags } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = { title: "Seller Studio Catalogue", description: "Catalogue manager for Shopify, WooCommerce, CSV imports, AI tagging, and product enrichment." }

export default function Page() {
  return <SimpleMarketingPage eyebrow="Seller Studio" title="Catalogue Manager for Commerce Teams" description="Sync, clean, enrich, and activate your product catalogue for Stories, Reels, ads, and AI ordering." features={[{title:"Shopify Sync",description:"Products, variants, inventory, and images stay current.",icon:ShoppingBag},{title:"CSV Import",description:"Map, validate, and import bulk catalogue files.",icon:FileSpreadsheet},{title:"AI Auto-Tagging",description:"Category, occasion, season, audience, and style tags.",icon:Tags},{title:"Product Health",description:"Find missing images, weak descriptions, and low-quality metadata.",icon:Package}]} checklist={["Shopify and WooCommerce sync","CSV import mapping","AI enrichment and tagging","Variant and inventory awareness","Catalogue health scoring","Powers Stories, Reels, Lists, Ads, and AI"]} metrics={[{value:"60%",label:"Higher catalogue performance"},{value:"10m",label:"First sync"},{value:"5k+",label:"SKU add-on ready"},{value:"1",label:"Commerce source"}]} related={[{label:"Content",href:"/seller-studio/content"},{label:"AI Cataloging",href:"/ai/content-cataloging"},{label:"Pricing",href:"/pricing"}]} />
}
