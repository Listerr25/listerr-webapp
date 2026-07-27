import type { Metadata } from "next"

import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = {
  alternates: { canonical: "/cancellation" },
  title: "Cancellation Policy",
  description:
    "Listerr Cancellation Policy covering subscriptions, free trials, AI add-ons, enterprise cancellation, data retention, and account reactivation.",
  openGraph: {
    url: "/cancellation",
    title: "Cancellation Policy",
    description:
      "Listerr Cancellation Policy covering subscriptions, free trials, AI add-ons, enterprise cancellation, data retention, and account reactivation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation Policy",
    description:
      "Listerr Cancellation Policy covering subscriptions, free trials, AI add-ons, enterprise cancellation, data retention, and account reactivation.",
  },
}

const sections = [
  ["overview", "Overview"],
  ["how-to-cancel", "How to Cancel"],
  ["monthly", "Monthly Subscriptions"],
  ["annual", "Annual Subscriptions"],
  ["free-trial", "Free Trial Cancellation"],
  ["ai-addon", "AI Add-On Cancellation"],
  ["enterprise", "Enterprise Plan Cancellation"],
  ["effect", "Effect of Cancellation"],
  ["reactivation", "Reactivation"],
  ["changes", "Changes to This Policy"],
  ["contact", "Contact"],
]

export default function CancellationPage() {
  return (
    <>
      <SectionContainer className="bg-brand-listerr-50">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Effective: July 27, 2026
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">
            Cancellation Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-fg-muted">
            Listerr — Orifinity Private Limited. This policy governs how you can cancel your subscriptions and add-on services on Listerr.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav className="rounded-xl border border-border bg-white p-4 shadow-sm">
              <p className="mb-3 text-sm font-bold text-fg">Contents</p>
              <div className="grid gap-2">
                {sections.map(([id, label]) => (
                  <a key={id} href={`#${id}`} className="text-sm text-fg-muted hover:text-fg">
                    {label}
                  </a>
                ))}
              </div>
            </nav>
          </aside>
          <article className="max-w-[70ch] space-y-10 text-fg-muted">
            <section id="overview">
              <h2 className="text-2xl font-extrabold text-fg">1. Overview</h2>
              <p className="mt-4 leading-8">
                This Cancellation Policy applies to all subscriptions and add-on services purchased through Listerr, the commerce engagement platform operated by Orifinity Private Limited. By subscribing to any Listerr plan, you agree to the terms set out below.
              </p>
            </section>
            <section id="how-to-cancel">
              <h2 className="text-2xl font-extrabold text-fg">2. How to Cancel</h2>
              <p className="mt-4 leading-8">
                You may cancel your subscription through any of the following methods:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Via the Seller Studio dashboard: <strong>Account &gt; Subscription &gt; Cancel Subscription</strong>.</li>
                <li>By emailing <strong>marketplace@listerr.in</strong> with the subject line: <em>&quot;Subscription Cancellation Request — [Your Account Email]&quot;</em>.</li>
              </ul>
              <p className="mt-4 leading-8">
                Cancellations are effective at the end of the then-current billing cycle. Access to the platform continues until that date. No further charges are made after cancellation is confirmed.
              </p>
            </section>
            <section id="monthly">
              <h2 className="text-2xl font-extrabold text-fg">3. Monthly Subscriptions</h2>
              <p className="mt-4 leading-8">
                Monthly plans (Starter, Growth, or Scale) may be cancelled at any time. Upon cancellation:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Access to the plan continues until the last day of the current billing month.</li>
                <li>The subscription does not auto-renew after cancellation is confirmed.</li>
                <li>No partial-month or pro-rata refunds are issued for unused days remaining in the billing period.</li>
              </ul>
            </section>
            <section id="annual">
              <h2 className="text-2xl font-extrabold text-fg">4. Annual Subscriptions</h2>
              <p className="mt-4 leading-8">
                Annual plans (which carry a 20% discount over monthly rates) may be cancelled at any time. Upon cancellation:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Access continues until the last day of the annual subscription term.</li>
                <li>Refund eligibility for annual plans is governed by the Refund Policy.</li>
                <li>Annual renewal charges cancelled within 48 hours of the renewal date will be reviewed for refund eligibility.</li>
              </ul>
            </section>
            <section id="free-trial">
              <h2 className="text-2xl font-extrabold text-fg">5. Free Trial Cancellation</h2>
              <p className="mt-4 leading-8">
                Free trials may be cancelled at any time without charge. If a free trial is not cancelled before the trial period expires, the account will automatically convert to the selected paid plan and the applicable subscription fee will be charged. No credit card is required to start a free trial; billing is initiated only upon explicit upgrade or trial conversion.
              </p>
            </section>
            <section id="ai-addon">
              <h2 className="text-2xl font-extrabold text-fg">6. AI Add-On Cancellation</h2>
              <p className="mt-4 leading-8">
                Listerr AI products (AI Calling, AI Text Ordering, AI Voice Ordering, Listerr Order, AI Content Cataloging) are available as standalone add-ons and may be cancelled independently from the base plan.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Metered usage (per-minute, per-order, per-session) is billed up to and including the date of cancellation.</li>
                <li>Fixed monthly AI add-on fees are subject to the same terms as monthly subscriptions.</li>
                <li>Cancellation takes effect at the end of the current billing period unless otherwise agreed in writing.</li>
              </ul>
            </section>
            <section id="enterprise">
              <h2 className="text-2xl font-extrabold text-fg">7. Enterprise Plan Cancellation</h2>
              <p className="mt-4 leading-8">
                Enterprise plan cancellations are exclusively governed by the terms of the signed Order Form or Master Service Agreement executed between the customer and Orifinity Private Limited. Customers on Enterprise plans should contact their Dedicated Customer Success Manager for guidance on cancellation procedures, notice periods, and data handling.
              </p>
            </section>
            <section id="effect">
              <h2 className="text-2xl font-extrabold text-fg">8. Effect of Cancellation</h2>
              <p className="mt-4 leading-8">
                Upon cancellation of a subscription:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Full platform access is maintained until the end of the paid billing period.</li>
                <li>Following the end of the billing period, your account will enter a 30-day data retention window during which you may export your content, catalogue, and campaign data.</li>
                <li>After the 30-day retention window, all account data — including Stories, Reels, catalogues, and analytics — will be permanently deleted from Listerr servers.</li>
                <li>Orifinity Private Limited is not liable for data lost due to failure to export within the retention window.</li>
              </ul>
            </section>
            <section id="reactivation">
              <h2 className="text-2xl font-extrabold text-fg">9. Reactivation</h2>
              <p className="mt-4 leading-8">
                A cancelled account may be reactivated at any time by subscribing to any available Listerr plan. Reactivation within the 30-day data retention window may allow recovery of previously stored data. Reactivation after the retention window results in a new account with no prior data. Reactivated accounts are not entitled to any prior promotional pricing.
              </p>
            </section>
            <section id="changes">
              <h2 className="text-2xl font-extrabold text-fg">10. Changes to This Policy</h2>
              <p className="mt-4 leading-8">
                Orifinity Private Limited reserves the right to modify this Cancellation Policy at any time. Changes will be communicated via email to the registered account address and/or published at listerr.in/terms. Continued use of the platform after the effective date of any update constitutes acceptance of the revised policy.
              </p>
            </section>
            <section id="contact" className="rounded-xl border border-border bg-surface-raised p-6">
              <h2 className="text-2xl font-extrabold text-fg">11. Contact</h2>
              <p className="mt-4 leading-8">
                For cancellation requests, questions, or assistance, contact:
              </p>
              <p className="mt-4 leading-8">
                <strong>Email:</strong> <a href="mailto:marketplace@listerr.in" className="text-brand-listerr-700 font-bold hover:underline">marketplace@listerr.in</a><br />
                <strong>Orifinity Private Limited</strong><br />
                <strong>Headquarter:</strong> Shop No. 2, Opp. Old PNB Bank, Phulera, Dist. Jaipur – 303338, Rajasthan.<br />
                <strong>Corporate Office:</strong> Tilak Tower, 1st Floor, Sector 101, Madhyam Marg, Mansarovar, Jaipur, Rajasthan – 302020.
              </p>
            </section>
          </article>
        </div>
      </SectionContainer>
    </>
  )
}
