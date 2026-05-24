import Link from "next/link"

import { Button } from "@/components/ui/button"

export function CTABand() {
  return (
    <section className="bg-gradient-to-r from-brand-listerr-700 to-brand-listerr-500 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Ready to grow with Listerr?
          </h2>
          <p className="mt-3 text-white/82">Start free, no credit card required.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="xl" className="bg-white text-brand-listerr-700 hover:bg-brand-listerr-50">
            <Link href="/signup">Start Free</Link>
          </Button>
          <Button asChild size="xl" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10">
            <Link href="/contact">Talk to Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
