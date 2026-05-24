import type { Metadata } from "next"

import { SectionContainer } from "@/components/primitives"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Listerr SaaS terms covering subscriptions, acceptable use, IP, GST, INR billing, liability, termination, and India jurisdiction.",
}

const sections = [
  ["acceptance", "Acceptance"],
  ["account", "Account and subscription"],
  ["use", "Acceptable use"],
  ["ip", "IP and licence"],
  ["confidentiality", "Confidentiality"],
  ["payment", "Payment and taxes"],
  ["liability", "Liability limits"],
  ["indemnification", "Indemnification"],
  ["termination", "Termination"],
  ["law", "Governing law"],
  ["disputes", "Dispute resolution"],
  ["contact", "Contact"],
]

export default function TermsPage() {
  return (
    <>
      <SectionContainer className="bg-brand-listerr-50">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-listerr-700">
            Last updated: May 24, 2026
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-fg md:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg leading-8 text-fg-muted">
            These terms govern access to Listerr&apos;s commerce engagement
            platform, website, APIs, integrations, and managed services.
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
            <section id="acceptance">
              <h2 className="text-2xl font-extrabold text-fg">Acceptance</h2>
              <p className="mt-4 leading-8">
                By accessing or using Listerr, you agree to these Terms. If you
                use Listerr for an organisation, you confirm that you are
                authorised to bind that organisation.
              </p>
            </section>
            <section id="account">
              <h2 className="text-2xl font-extrabold text-fg">Account and subscription</h2>
              <p className="mt-4 leading-8">
                You are responsible for account accuracy, credential security,
                user permissions, and all activity under your account.
                Subscription access depends on the selected plan, usage limits,
                and any executed order form.
              </p>
            </section>
            <section id="use">
              <h2 className="text-2xl font-extrabold text-fg">Acceptable use</h2>
              <p className="mt-4 leading-8">
                You may not misuse the services, attempt unauthorised access,
                interfere with platform security, upload unlawful content,
                violate third-party rights, send spam, or use Listerr for illegal
                or deceptive commerce activity.
              </p>
            </section>
            <section id="ip">
              <h2 className="text-2xl font-extrabold text-fg">IP and licence</h2>
              <p className="mt-4 leading-8">
                Listerr retains ownership of the platform, software, design,
                documentation, and underlying technology. You retain ownership of
                your content, catalogue, customer data, and campaign materials,
                and grant Listerr a limited licence to process them to provide
                the services.
              </p>
            </section>
            <section id="confidentiality">
              <h2 className="text-2xl font-extrabold text-fg">Confidentiality</h2>
              <p className="mt-4 leading-8">
                Each party must protect non-public information received from the
                other party and use it only for the purpose of providing or using
                the services.
              </p>
            </section>
            <section id="payment">
              <h2 className="text-2xl font-extrabold text-fg">Payment and taxes</h2>
              <p className="mt-4 leading-8">
                Paid plans are billed in Indian Rupees unless otherwise agreed.
                Fees are exclusive of applicable taxes. GST will be charged where
                required under Indian law. Late payments may lead to suspension
                after reasonable notice.
              </p>
            </section>
            <section id="liability">
              <h2 className="text-2xl font-extrabold text-fg">Liability limits</h2>
              <p className="mt-4 leading-8">
                To the maximum extent permitted by law, Listerr will not be
                liable for indirect, incidental, special, consequential, or lost
                profit damages. Direct liability is limited to fees paid for the
                affected service during the preceding twelve months, unless a
                separate written agreement states otherwise.
              </p>
            </section>
            <section id="indemnification">
              <h2 className="text-2xl font-extrabold text-fg">Indemnification</h2>
              <p className="mt-4 leading-8">
                You agree to defend and indemnify Listerr against claims arising
                from your content, unlawful use, violation of these Terms, or
                infringement of third-party rights.
              </p>
            </section>
            <section id="termination">
              <h2 className="text-2xl font-extrabold text-fg">Termination</h2>
              <p className="mt-4 leading-8">
                Either party may terminate according to the applicable order form
                or plan terms. Listerr may suspend access for security risk,
                non-payment, or material breach after appropriate notice where
                feasible.
              </p>
            </section>
            <section id="law">
              <h2 className="text-2xl font-extrabold text-fg">Governing law</h2>
              <p className="mt-4 leading-8">
                These Terms are governed by the laws of India, without regard to
                conflict-of-law principles.
              </p>
            </section>
            <section id="disputes">
              <h2 className="text-2xl font-extrabold text-fg">Dispute resolution</h2>
              <p className="mt-4 leading-8">
                The parties will first attempt good-faith resolution. Unresolved
                disputes will be subject to courts located in Bengaluru,
                Karnataka, India, unless a signed agreement specifies otherwise.
              </p>
            </section>
            <section id="contact" className="rounded-xl border border-border bg-surface-raised p-6">
              <h2 className="text-2xl font-extrabold text-fg">Contact</h2>
              <p className="mt-4 leading-8">
                Listerr Technologies Pvt. Ltd.<br />
                Bengaluru, Karnataka, India<br />
                Email: legal@listerr.in
              </p>
            </section>
          </article>
        </div>
      </SectionContainer>
    </>
  )
}
