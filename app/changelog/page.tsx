import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = {
  title: "Changelog",
  description: "Listerr product release notes and changelog.",
}

const entries = [
  {
    version: "0.3.0",
    date: "May 2026",
    category: "New",
    items: [
      "Phase 3 blueprint coverage routes added.",
      "Long-tail platform, industry, and company pages now represented.",
      "Sitemap includes P0, P1, and P2 surfaces.",
    ],
  },
  {
    version: "0.2.0",
    date: "May 2026",
    category: "Improved",
    items: [
      "Phase 2 depth pages added for platforms, use cases, industries, and resources.",
      "Dynamic blog, case-study, and docs shells added.",
    ],
  },
  {
    version: "0.1.0",
    date: "May 2026",
    category: "New",
    items: ["Foundation, homepage, pricing, P0 platforms, P0 use cases, and legal pages."],
  },
]

export default function ChangelogPage() {
  return (
    <SectionContainer>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
        Product updates
      </p>
      <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">
        Changelog
      </h1>
      <div className="mt-10 space-y-5">
        {entries.map((entry) => (
          <article key={entry.version} className="rounded-xl border border-border bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-extrabold text-fg">{entry.version}</h2>
              <Badge>{entry.category}</Badge>
              <span className="text-sm font-semibold text-fg-muted">{entry.date}</span>
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-fg-muted">
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}
