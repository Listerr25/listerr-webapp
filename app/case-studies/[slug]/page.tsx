import type { Metadata } from "next"
import { CTABand, MetricsStrip, SectionContainer } from "@/components/primitives"

export const metadata: Metadata = {
  title: "Case Study",
  description: "Listerr case study template.",
}

export function generateStaticParams() {
  return [
    { slug: "d2c-beauty" },
    { slug: "edtech-app" },
    { slug: "media-ott" },
  ]
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const name = slug
    .split("-")
    .map((word) => word.toUpperCase() === "D2C" ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <>
      <SectionContainer>
        <article className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Case study
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">
            {name}: +2.4x homepage CVR in 90 days
          </h1>
          <p className="mt-6 text-lg leading-8 text-fg-muted">
            Dynamic case-study template for challenge, solution, products used,
            result metrics, customer quote, and CTA.
          </p>
        </article>
      </SectionContainer>
      <SectionContainer className="bg-surface-raised">
        <MetricsStrip
          metrics={[
            { value: "+58%", label: "Engagement" },
            { value: "2.3x", label: "CVR" },
            { value: "4.1x", label: "Repeat rate" },
            { value: "90d", label: "Timeframe" },
          ]}
        />
      </SectionContainer>
      <CTABand />
    </>
  )
}
