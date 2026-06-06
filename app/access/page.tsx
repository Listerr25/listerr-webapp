import type { Metadata } from "next"
import AccessForm from "@/components/legacy/access-form"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Get Early Access",
  description: "Sign up for exclusive early access to Listerr — AI-driven commerce, Generative AI, and Google My Business.",
  alternates: { canonical: "/access" },
  openGraph: {
    url: "/access",
    title: "Get Early Access",
    description: "Sign up for exclusive early access to Listerr — AI-driven commerce, Generative AI, and Google My Business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Early Access",
    description: "Sign up for exclusive early access to Listerr — AI-driven commerce, Generative AI, and Google My Business.",
  },
}


export default function AccessPage() {
  return (
    <section className="min-h-[85vh] bg-gradient-to-br from-brand-listerr-50/60 via-white to-white py-16 md:py-24 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-fg tracking-tight">Get Exclusive Early Access to Listerr</h1>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto leading-relaxed">
              Be among the first to harness the power of AI-driven commerce—sign up now and start attracting consumers through Generative AI and Google My Business.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-border/80 shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-fg">Why Join Early?</h2>
              <ul className="space-y-4">
                {[
                  "Priority access to all features",
                  "Exclusive onboarding support",
                  "Shape the future of Listerr with your feedback",
                  "Special early adopter pricing",
                  "Be part of our founding community",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-success mr-3 mt-1 flex-shrink-0 h-5 w-5" />
                    <span className="text-fg-muted font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-fg">Request Access</h2>
              <AccessForm />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-fg-muted">
              Have questions? Contact us at{" "}
              <a href="mailto:support@listerr.in" className="font-semibold text-brand-listerr-700 hover:underline">
                support@listerr.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
