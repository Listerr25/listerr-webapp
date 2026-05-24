import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function SectionContainer({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode
  className?: string
  innerClassName?: string
}) {
  return (
    <section className={cn("section-padding", className)}>
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 md:px-6 lg:px-8",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}
