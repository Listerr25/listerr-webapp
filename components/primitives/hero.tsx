import Link from "next/link"
import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type HeroVariant = "split" | "centered" | "dark"

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
  variant = "split",
}: {
  eyebrow?: string
  title: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  children?: ReactNode
  variant?: HeroVariant
}) {
  const dark = variant === "dark"

  return (
    <section
      className={cn(
        "overflow-hidden py-20 md:py-28",
        dark
          ? "bg-ai-bg text-ai-fg"
          : "bg-gradient-to-br from-brand-listerr-50 via-white to-white text-fg"
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:px-8",
          variant === "split" ? "lg:grid-cols-[1fr_0.9fr] lg:items-center" : "text-center"
        )}
      >
        <div className={cn(variant !== "split" && "mx-auto max-w-4xl")}>
          {eyebrow ? (
            <p
              className={cn(
                "mb-5 text-xs font-bold uppercase tracking-[0.18em]",
                dark ? "text-ai-accent" : "text-brand-listerr-700"
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-3xl text-lg leading-8 md:text-xl",
              variant !== "split" && "mx-auto",
              dark ? "text-white/76" : "text-fg-muted"
            )}
          >
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className={cn("mt-9 flex flex-wrap gap-3", variant !== "split" && "justify-center")}>
              {primaryCta ? (
                <Button asChild variant={dark ? "ai" : "listerr"} size="xl">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className={dark ? "border-white/25 bg-transparent text-white hover:bg-white/10" : ""}
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          )}
        </div>
        {children ? <div>{children}</div> : null}
      </div>
    </section>
  )
}
