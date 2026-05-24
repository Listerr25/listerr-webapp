import type { Metadata } from "next"
import { Download, FileText, Image, Newspaper } from "lucide-react"
import { SimpleMarketingPage } from "@/components/marketing/simple-marketing-page"

export const metadata: Metadata = {
  title: "Press Kit",
  description: "Listerr press kit, logos, boilerplate, screenshots, and media contact.",
}

export default function PressKitPage() {
  return (
    <SimpleMarketingPage
      eyebrow="Press kit"
      title="Listerr Brand and Press Resources"
      description="Download logos, product screenshots, boilerplate copy, founder assets, and press contact information."
      primaryCta={{ label: "Contact Press", href: "mailto:press@listerr.in" }}
      secondaryCta={{ label: "Read About Listerr", href: "/about" }}
      features={[
        { title: "Logo Downloads", description: "Light, dark, SVG, and PNG logo pack placeholders.", icon: Download },
        { title: "Product Screenshots", description: "Homepage, Seller Studio, Storyboard, and AI surfaces.", icon: Image },
        { title: "Boilerplate Copy", description: "Approved short and long company descriptions.", icon: FileText },
        { title: "Press Contact", description: "press@listerr.in for media requests.", icon: Newspaper },
      ]}
      checklist={[
        "Logo asset sections",
        "Founder photo placeholder",
        "Product screenshot placeholder",
        "Boilerplate copy area",
        "Recent press coverage structure",
        "Press contact CTA",
      ]}
      related={[
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  )
}
