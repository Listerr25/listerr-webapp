import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { brands, type BrandSlug } from "@/lib/brand"
import { cn } from "@/lib/utils"

export function PlatformCard({ brand }: { brand: BrandSlug }) {
  const item = brands[brand]
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className={cn(
        "group rounded-xl border border-border border-t-4 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        item.border
      )}
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-lg",
          item.bg,
          item.text
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-xl font-bold text-fg">{item.name}</h3>
      <p className="mt-3 min-h-14 leading-7 text-fg-muted">{item.description}</p>
      <span
        className={cn(
          "mt-5 inline-flex items-center gap-2 text-sm font-bold",
          item.text
        )}
      >
        Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
