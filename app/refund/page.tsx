import type { Metadata } from "next"

import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = {
  alternates: { canonical: "/refund" },
  title: "Refund Policy",
  description:
    "Listerr Refund Policy covering monthly & annual subscriptions, AI add-ons, billing errors, SLA credits, GST, and refund request instructions.",
  openGraph: {
    url: "/refund",
    title: "Refund Policy",
    description:
      "Listerr Refund Policy covering monthly & annual subscriptions, AI add-ons, billing errors, SLA credits, GST, and refund request instructions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy",
    description:
      "Listerr Refund Policy covering monthly & annual subscriptions, AI add-ons, billing errors, SLA credits, GST, and refund request instructions.",
  },
}

const sections = [
  ["overview", "Overview"],
  ["principle", "General Principle"],
  ["free-trials", "Free Trials"],
  ["monthly", "Monthly Subscriptions"],
  ["annual", "Annual Subscriptions"],
  ["ai-addons", "AI Add-On Charges"],
  ["billing-errors", "Billing Errors"],
  ["plan-changes", "Plan Downgrades & Upgrades"],
  ["service-credits", "SLA Service Credits"],
  ["taxes", "GST and Taxes"],
  ["non-refundable", "Non-Refundable Items"],
  ["how-to-request", "How to Request a Refund"],
  ["changes", "Changes to This Policy"],
  ["contact", "Contact"],
]

export default function RefundPage() {
  return (
    <>
      <SectionContainer className="bg-brand-listerr-50">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Effective: July 27, 2026
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">
            Refund Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-fg-muted">
            Listerr — Orifinity Private Limited. This policy governs all refund claims arising from subscriptions and add-on services purchased through Listerr.
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
                This Refund Policy governs all refund claims arising from subscriptions and add-on services purchased through Listerr, the commerce engagement platform operated by Orifinity Private Limited. All fees are charged in Indian Rupees (INR) and are exclusive of applicable taxes including GST.
              </p>
            </section>
            <section id="principle">
              <h2 className="text-2xl font-extrabold text-fg">2. General Principle</h2>
              <p className="mt-4 leading-8">
                All subscription fees paid to Orifinity Private Limited are non-refundable unless explicitly provided otherwise in this policy or in a signed Order Form. Listerr does not issue pro-rata refunds for partially used billing periods. Cancellation of a subscription does not automatically entitle the subscriber to a refund.
              </p>
            </section>
            <section id="free-trials">
              <h2 className="text-2xl font-extrabold text-fg">3. Free Trials</h2>
              <p className="mt-4 leading-8">
                Listerr free trials require no credit card and incur no charges. No refund claim applies to the free trial period. If a free trial converts to a paid plan upon expiry, the refund terms applicable to that plan (as set out in sections 4 and 5 below) apply from the date of the first charge.
              </p>
            </section>
            <section id="monthly">
              <h2 className="text-2xl font-extrabold text-fg">4. Monthly Subscriptions</h2>
              <p className="mt-4 leading-8">
                Fees for monthly subscription plans (Starter at ₹9,999/mo, Growth at ₹29,999/mo, and Scale at ₹79,999/mo) are non-refundable once the billing cycle has commenced. Specifically:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>No refund is issued for the current billing month, regardless of when within the month the cancellation is submitted.</li>
                <li>Subscribers who cancel a monthly plan will retain full access until the last day of the paid month.</li>
                <li>No partial-month or pro-rata refund is available under any circumstance for monthly plans.</li>
              </ul>
            </section>
            <section id="annual">
              <h2 className="text-2xl font-extrabold text-fg">5. Annual Subscriptions</h2>
              <p className="mt-4 leading-8">
                Annual subscriptions (which carry a 20% discount over monthly rates) are subject to the following refund terms:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Cancellations submitted within 7 calendar days of the initial annual subscription purchase date are eligible for a full refund of the annual fee paid, less any applicable payment gateway or transaction charges.</li>
                <li>Cancellations submitted after 7 calendar days from the initial purchase date are non-refundable. Access continues until the end of the annual subscription term.</li>
                <li>Annual renewal charges cancelled within 48 hours of the renewal date are eligible for a full refund of the renewal amount. Cancellations requested after 48 hours of renewal are non-refundable.</li>
                <li>Refunds for eligible annual cancellations will be processed to the original payment method within 7 to 10 business days.</li>
              </ul>
            </section>
            <section id="ai-addons">
              <h2 className="text-2xl font-extrabold text-fg">6. AI Add-On Charges</h2>
              <p className="mt-4 leading-8">
                Listerr AI products are billed on a metered and/or monthly flat-fee basis. The following refund terms apply:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Metered charges (AI Calling at ₹3/min, AI Text Ordering at ₹0.50/order, AI Voice Ordering at ₹1/session) reflect actual usage and are non-refundable.</li>
                <li>Monthly flat fees for Listerr Order (₹5,000/mo) and AI Content Cataloging (₹2,000/mo) are subject to the same terms as monthly subscriptions.</li>
                <li>In cases of verified technical failure or platform error attributable solely to Listerr, usage credits may be issued at the discretion of Orifinity Private Limited. Credits are applied to future invoices and are not redeemable as cash.</li>
              </ul>
            </section>
            <section id="billing-errors">
              <h2 className="text-2xl font-extrabold text-fg">7. Billing Errors</h2>
              <p className="mt-4 leading-8">
                If you believe you have been charged an incorrect amount, you must notify Listerr within 30 calendar days of the disputed charge. Requests submitted after this window may not be honoured.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Email <strong>marketplace@listerr.in</strong> with the subject: <em>&quot;Billing Error — [Your Account Email]&quot;</em>.</li>
                <li>Include: your account email, the disputed amount, charge date, invoice number (if available), and a brief description of the error.</li>
                <li>Verified billing errors will be corrected and refunded in full within 7 business days of confirmation.</li>
                <li>Refunds are credited to the original payment method used at the time of the transaction.</li>
              </ul>
            </section>
            <section id="plan-changes">
              <h2 className="text-2xl font-extrabold text-fg">8. Plan Downgrades and Upgrades</h2>
              <p className="mt-4 leading-8">
                Subscribers may change their plan at any time subject to the following:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Plan downgrades take effect at the start of the next billing cycle. No refund is issued for the difference in plan price for the current billing period.</li>
                <li>Plan upgrades take effect immediately. The additional charge for the upgrade is calculated on a pro-rata basis for the remainder of the current billing period.</li>
              </ul>
            </section>
            <section id="service-credits">
              <h2 className="text-2xl font-extrabold text-fg">9. Service Credits for SLA Breaches</h2>
              <p className="mt-4 leading-8">
                Uptime SLAs (99.9% for Scale plans; custom SLAs for Enterprise plans) are defined in the applicable Order Form or platform documentation. In the event of a verified SLA breach:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Eligible customers may claim service credits as defined in the Order Form or SLA documentation.</li>
                <li>Service credits are applied exclusively as a deduction against future invoices and cannot be redeemed as cash or transferred.</li>
                <li>SLA credits are not available for Starter or Growth plan subscribers unless expressly agreed in writing.</li>
              </ul>
            </section>
            <section id="taxes">
              <h2 className="text-2xl font-extrabold text-fg">10. GST and Taxes</h2>
              <p className="mt-4 leading-8">
                All prices are exclusive of Goods and Services Tax (GST) as applicable under Indian law. GST is charged separately on all invoices. Orifinity Private Limited is not able to issue GST refunds directly; customers seeking GST refunds must file claims with the relevant tax authorities in accordance with applicable Indian tax law. GST invoices are issued in compliance with Indian GST regulations.
              </p>
            </section>
            <section id="non-refundable">
              <h2 className="text-2xl font-extrabold text-fg">11. Non-Refundable Items</h2>
              <p className="mt-4 leading-8">
                The following are expressly non-refundable under this policy:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Fees for any billing period already commenced (monthly or annual).</li>
                <li>Metered AI add-on usage charges.</li>
                <li>Setup fees, onboarding fees, or professional services fees, if any.</li>
                <li>Payments made under a custom Enterprise Agreement, which are governed solely by that agreement.</li>
                <li>Fees where the primary reason for refund is a change of business need, non-use of the platform, or dissatisfaction with features that were accurately described prior to purchase.</li>
              </ul>
            </section>
            <section id="how-to-request">
              <h2 className="text-2xl font-extrabold text-fg">12. How to Request a Refund</h2>
              <p className="mt-4 leading-8">
                To submit a refund request, email <strong>marketplace@listerr.in</strong> with the subject line: <em>&quot;Refund Request — [Your Account Email]&quot;</em>. Your request must include:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">
                <li>Full name and registered account email address.</li>
                <li>Plan name and billing cycle (monthly or annual).</li>
                <li>Date and amount of the charge.</li>
                <li>Reason for the refund request.</li>
              </ul>
              <p className="mt-4 leading-8">
                Refund requests are reviewed within 5 business days of receipt. Approved refunds are processed within 7 to 10 business days and credited to the original payment method.
              </p>
            </section>
            <section id="changes">
              <h2 className="text-2xl font-extrabold text-fg">13. Changes to This Policy</h2>
              <p className="mt-4 leading-8">
                Orifinity Private Limited reserves the right to amend this Refund Policy at any time. Changes will be communicated via email to registered account holders and/or published at listerr.in/terms. Continued use of the platform following the effective date of any amendment constitutes acceptance of the updated policy.
              </p>
            </section>
            <section id="contact" className="rounded-xl border border-border bg-surface-raised p-6">
              <h2 className="text-2xl font-extrabold text-fg">14. Contact</h2>
              <p className="mt-4 leading-8">
                For refund requests or queries related to this policy, contact:
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
