"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

function labelFor(segment: string) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Ai ", "AI ")
}

export function BreadcrumbBar() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length < 2) return null

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-white">
      <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm text-fg-muted md:px-6 lg:px-8">
        <li>
          <Link href="/" className="font-semibold hover:text-fg">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`
          const isLast = index === segments.length - 1

          return (
            <li key={href} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-fg-subtle" />
              {isLast ? (
                <span className="font-semibold text-fg">{labelFor(segment)}</span>
              ) : (
                <Link href={href} className="font-semibold hover:text-fg">
                  {labelFor(segment)}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
