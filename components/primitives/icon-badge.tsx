import type { LucideIcon } from "lucide-react"

import { brands, type BrandSlug } from "@/lib/brand"
import { cn } from "@/lib/utils"

export function IconBadge({
  icon: Icon,
  brand = "listerr",
  className,
}: {
  icon: LucideIcon
  brand?: BrandSlug
  className?: string
}) {
  const item = brands[brand]

  return (
    <span
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-lg",
        item.bg,
        item.text,
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </span>
  )
}
