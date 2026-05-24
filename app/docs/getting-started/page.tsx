import type { Metadata } from "next"
import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = { title: "Getting Started Docs", description: "Install Listerr SDKs and publish your first Story." }

export default function Page() {
  return <SectionContainer><article className="mx-auto max-w-[70ch]"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">Docs</p><h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">Getting Started</h1><ol className="mt-8 list-decimal space-y-4 pl-5 leading-8 text-fg-muted"><li>Create a Listerr workspace.</li><li>Install the Web JS, iOS, Android, React Native, or Flutter SDK.</li><li>Generate an API key and environment ID.</li><li>Create your first Story in Storyboard or Seller Studio.</li><li>Publish to a test route, verify analytics, then go live.</li></ol></article></SectionContainer>
}
