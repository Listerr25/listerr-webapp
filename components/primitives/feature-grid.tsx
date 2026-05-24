import type { LucideIcon } from "lucide-react"

import { IconBadge } from "@/components/primitives/icon-badge"
import type { BrandSlug } from "@/lib/brand"

export function FeatureGrid({
  items,
}: {
  items: Array<{
    title: string
    description: string
    icon: LucideIcon
    brand?: BrandSlug
  }>
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-xl border border-border bg-white p-6 shadow-sm"
        >
          <IconBadge icon={item.icon} brand={item.brand} />
          <h3 className="mt-5 text-xl font-bold text-fg">{item.title}</h3>
          <p className="mt-3 leading-7 text-fg-muted">{item.description}</p>
        </article>
      ))}
    </div>
  )
}
