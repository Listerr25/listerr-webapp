import type { Metadata } from "next"
import { CalendarDays, MousePointer2, Smartphone, Sparkles } from "lucide-react"

import { PlatformPage } from "@/components/platform/platform-page"

export const metadata: Metadata = {
  alternates: { canonical: "/storyboard" },
  title: "Storyboard — The No-Code Content Studio for Stories & Reels",
  description:
    "AI-assisted editor with brand kits, templates, scheduling, and multi-platform export for commerce content teams.",
  openGraph: {
    url: "/storyboard",
    title: "Storyboard — The No-Code Content Studio for Stories & Reels",
    description: "AI-assisted editor with brand kits, templates, scheduling, and multi-platform export for commerce content teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storyboard — The No-Code Content Studio for Stories & Reels",
    description: "AI-assisted editor with brand kits, templates, scheduling, and multi-platform export for commerce content teams.",
  },
}

export default function StoryboardPage() {
  return (
    <PlatformPage
      brand="storyboard"
      eyebrow="From idea to published Story in under 5 minutes"
      title="Storyboard — The No-Code Content Studio for Stories & Reels"
      subtitle="AI-assisted editor for marketers, designers, and growth teams. Brand kit, templates, scheduler, multi-platform export."
      primaryCta={{ label: "Create Your First Story Free", href: "/signup" }}
      secondaryCta={{ label: "Browse Templates", href: "/storyboard/templates" }}
      summary={[
        "Create shoppable Stories and Reels without design or engineering bottlenecks.",
        "Use AI to draft headlines, CTAs, captions, and product-led copy in brand tone.",
        "Preview across iPhone, Android, tablet, and web before publishing.",
        "Plan content weeks ahead with a calendar and publishing workflow.",
        "Export to MP4 or GIF for Instagram, WhatsApp, and campaign reuse.",
      ]}
      modules={[
        {
          title: "Visual Editor",
          description: "Drag-and-drop canvas with layers, animations, transitions, and media library.",
          icon: MousePointer2,
        },
        {
          title: "AI Content Writer",
          description: "Paste a product URL and AI drafts headline, CTA, and caption.",
          icon: Sparkles,
        },
        {
          title: "Multi-Platform Preview",
          description: "Preview on iPhone, Android, tablet, and web before publish.",
          icon: Smartphone,
        },
        {
          title: "Content Calendar",
          description: "Plan weeks ahead, set publish times, and manage editorial calendars.",
          icon: CalendarDays,
        },
      ]}
      positioning={{
        title: "Designed for growth teams that ship every week",
        body: "Storyboard combines templates, brand governance, AI drafting, and multi-format export so commerce teams can publish at campaign speed.",
      }}
      customers={[
        "Marketing teams",
        "Growth managers",
        "D2C designers",
        "Agencies",
        "Solo creators",
      ]}
      anchors={[
        { label: "Templates", href: "/storyboard/templates" },
        { label: "AI Editor", href: "/storyboard/ai-editor" },
        { label: "Pricing", href: "/storyboard/pricing" },
      ]}
      integrations={["Listerr", "Shopify", "Instagram", "WhatsApp", "Figma", "Google Drive"]}
    />
  )
}
