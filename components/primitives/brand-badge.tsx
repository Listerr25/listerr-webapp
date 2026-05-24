import { brands, type BrandSlug } from "@/lib/brand"
import { cn } from "@/lib/utils"

export function BrandBadge({
  brand,
  className,
}: {
  brand: BrandSlug
  className?: string
}) {
  const item = brands[brand]

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold",
        item.bg,
        item.text,
        className
      )}
    >
      {item.name}
    </span>
  )
}
