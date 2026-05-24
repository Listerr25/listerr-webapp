import type { Metadata } from "next"
import Link from "next/link"

import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Listerr Privacy Policy covering data collection, DPDP rights, processing, retention, residency, and grievance contact.",
}

const sections = [
  ["data-collected", "Data collected"],
  ["purposes", "Purposes of processing"],
  ["grounds", "Grounds for processing"],
  ["sharing", "Sharing with third parties"],
  ["transfers", "Cross-border transfer"],
  ["rights", "Your DPDP rights"],
  ["retention", "Data retention"],
  ["residency", "India data residency"],
  ["cookies", "Cookies"],
  ["contact", "Grievance Officer"],
]

export default function PrivacyPage() {
  return (
    <>
      <SectionContainer className="bg-brand-listerr-50">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Last updated: May 24, 2026
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-fg-muted">
            This policy explains how Listerr collects, uses, stores, shares, and
            protects personal data when you use our website, products, and
            managed commerce engagement services.
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
            <section id="data-collected">
              <h2 className="text-2xl font-extrabold text-fg">Data collected</h2>
              <p className="mt-4 leading-8">
                We may collect account details, contact information, company
                information, billing data, product catalogue data, campaign
                content, usage events, device details, support messages, and
                customer interaction data processed on behalf of our customers.
              </p>
            </section>
            <section id="purposes">
              <h2 className="text-2xl font-extrabold text-fg">Purposes of processing</h2>
              <p className="mt-4 leading-8">
                We process data to provide Listerr services, operate Stories,
                Reels, Lists, AI Ordering and Smart Flows, support integrations,
                process payments, improve reliability, prevent abuse, provide
                support, and send service or marketing communications where
                permitted.
              </p>
            </section>
            <section id="grounds">
              <h2 className="text-2xl font-extrabold text-fg">Grounds for processing</h2>
              <p className="mt-4 leading-8">
                Processing may be based on consent, contract performance,
                legitimate business needs, compliance with law, fraud prevention,
                or customer instructions where Listerr acts as a processor.
              </p>
            </section>
            <section id="sharing">
              <h2 className="text-2xl font-extrabold text-fg">Sharing with third parties</h2>
              <p className="mt-4 leading-8">
                We do not sell personal data. We may share data with hosting,
                payments, analytics, communication, security, support, and
                integration providers under appropriate contractual safeguards,
                and with authorities where required by law.
              </p>
            </section>
            <section id="transfers">
              <h2 className="text-2xl font-extrabold text-fg">Cross-border transfer</h2>
              <p className="mt-4 leading-8">
                Some service providers may process data outside India. Where this
                occurs, we use contractual and operational safeguards and comply
                with applicable Indian law and customer data-processing terms.
              </p>
            </section>
            <section id="rights">
              <h2 className="text-2xl font-extrabold text-fg">Your DPDP rights</h2>
              <p className="mt-4 leading-8">
                Subject to applicable law, you may request access, correction,
                completion, updating, erasure, grievance redressal, or withdrawal
                of consent. Customers using Listerr to process their end-user
                data remain responsible for responding to data principal requests
                where they determine the processing purpose.
              </p>
            </section>
            <section id="retention">
              <h2 className="text-2xl font-extrabold text-fg">Data retention</h2>
              <p className="mt-4 leading-8">
                We retain data for as long as needed to provide services, comply
                with legal obligations, resolve disputes, enforce agreements, and
                support audit or security requirements. Customer-controlled data
                can be deleted according to the applicable plan and contract.
              </p>
            </section>
            <section id="residency">
              <h2 className="text-2xl font-extrabold text-fg">India data residency commitment</h2>
              <p className="mt-4 leading-8">
                Listerr offers India data residency options on eligible plans for
                customers with regulatory, enterprise, or procurement
                requirements.
              </p>
            </section>
            <section id="cookies">
              <h2 className="text-2xl font-extrabold text-fg">Cookies</h2>
              <p className="mt-4 leading-8">
                We use necessary cookies and may use analytics or marketing
                cookies with consent. See the <Link className="font-bold text-brand-listerr-700" href="/cookies">Cookie Policy</Link> for details.
              </p>
            </section>
            <section id="contact" className="rounded-xl border border-border bg-surface-raised p-6">
              <h2 className="text-2xl font-extrabold text-fg">Grievance Officer</h2>
              <p className="mt-4 leading-8">
                Grievance Officer, Listerr Technologies Pvt. Ltd.<br />
                India HQ: Bengaluru, Karnataka, India<br />
                Email: grievance@listerr.in
              </p>
            </section>
          </article>
        </div>
      </SectionContainer>
    </>
  )
}
