import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
}: {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}) {
  return (
    <article className="relative rounded-xl border border-border bg-white p-6 shadow-sm">
      {popular ? (
        <span className="absolute right-5 top-5 rounded-full bg-brand-listerr-50 px-3 py-1 text-xs font-bold text-brand-listerr-700">
          Most Popular
        </span>
      ) : null}
      <h3 className="text-xl font-bold text-fg">{name}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-fg-muted">{description}</p>
      <p className="mt-6 text-4xl font-extrabold text-fg">{price}</p>
      <Button asChild variant={popular ? "listerr" : "outline"} className="mt-6 w-full">
        <Link href="/pricing">See full pricing</Link>
      </Button>
      <ul className="mt-6 grid gap-3 text-sm text-fg-muted">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
