# 10 — Pricing (§22)

Route: `/pricing` (master)
Also: `/storyboard/pricing` (P2 standalone Storyboard pricing).

INR pricing is a **direct differentiator** vs Storyly's USD pricing — call this out
visually with a "Priced in INR" badge near the price.

## Layout

1. **Hero** — H1 "Pricing for Indian Brands. INR. No Hidden Fees."
   Sub: "Start free. Scale on revenue, not arbitrary USD bills."
2. **Billing toggle** — Monthly / Annual (Annual badge: "Save 20%")
3. **4 plan cards** — Starter, Growth (★), Scale, Enterprise
4. **Plan comparison table** — full feature matrix below the cards
5. **Listerr AI add-on pricing table** — separate section
6. **FAQs** — accordion (10–15 entries)
7. **Trust band** — DPDP, India data residency, INR billing, no credit card required
8. **Bottom CTA** — "Talk to Sales" + "Compare with Storyly →" link to `/vs/storyly`

## Listerr Core plans (blueprint §22)

### Starter — ₹9,999 / month
*For startups and small brands launching engagement for the first time.*
- 50,000 MAU included
- Stories & Lists formats
- 5 team members
- Basic analytics
- Email support
- Listerr branding on content

### Growth ★ Most Popular — ₹29,999 / month
*For scaling D2C brands ready to drive serious engagement and conversions.*
- 500,000 MAU included
- All formats: Stories, Reels, Lists, Gamification
- AI Personalisation (standard)
- Unlimited A/B tests
- 20 team members
- Advanced analytics & revenue attribution
- No Listerr branding
- 3 Smart Flows
- Chat + email support

### Scale — ₹79,999 / month
*For high-traffic platforms with advanced AI and personalisation requirements.*
- 5 million MAU included
- All formats + custom formats on request
- Unlimited team members
- Full AI Personalisation suite
- Unlimited Smart Flows
- Real-time analytics API
- Dedicated Customer Success Manager
- 99.9% SLA
- India data residency option

### Enterprise — Custom
*For large platforms, banks, and enterprises with 10M+ users or compliance requirements.*
- Unlimited MAU
- On-premise or private cloud option
- White-label available
- Custom SLAs & contracts
- Security review & pen-test support
- DPDP + GDPR DPAs
- Dedicated engineering support

## Listerr AI add-on pricing (table)

| AI Product | Pricing | Included In |
|---|---|---|
| AI Calling | ₹3 per minute of AI call time | Scale & Enterprise |
| AI Text Ordering | ₹0.50 per order processed | Growth, Scale, Enterprise |
| AI Voice Ordering | ₹1 per voice order session | Scale & Enterprise |
| Listerr Order (OMS) | ₹5,000/mo (up to 10K orders) | All plans as add-on |
| AI Content Cataloging | ₹2,000/mo (up to 5,000 SKUs) | All plans as add-on |

## Plan comparison matrix (full table)

Columns: Starter · Growth · Scale · Enterprise
Rows (grouped):
- **Volume:** MAU, Smart Flows, Team members, A/B tests
- **Formats:** Stories, Reels, Lists, Gamification, Custom formats
- **AI:** AI Personalisation level, Multi-armed bandit, Cohort builder
- **Analytics:** Basic, Advanced, Revenue attribution, Real-time API
- **Support:** Email, Chat, CSM, SLA
- **Compliance:** DPDP, India residency, On-premise, White-label, DPAs
- **Branding:** Listerr branding on content (Starter only)

Implement as a `<table>` (semantically correct) with sticky header and zebra striping.
Each ✓/✗ also has an icon (not colour-only).

## FAQ accordion (10–15 entries)

Sample seed (extend at content time):
1. What counts as a Monthly Active User (MAU)?
2. Can I switch plans mid-cycle?
3. Do you offer annual discounts?
4. Is there a free trial?
5. How does AI Calling pricing work for outbound campaigns?
6. Do you charge for failed text orders?
7. What is included in "India data residency"?
8. Do you support GST invoicing?
9. Is on-premise available on plans below Enterprise?
10. Can I bring my own WhatsApp Business API?
11. What if I exceed my MAU cap?
12. How do you handle DPDP compliance?
13. Do you offer educational / non-profit discounts?
14. How quickly can I onboard?
15. Who owns the data I collect through Listerr?

## Implementation

- Pricing constants in `lib/pricing.ts` (single source of truth)
  ```ts
  export const PLANS = [
    { id: 'starter',  name: 'Starter',  priceMonthly: 9999,   priceAnnual: 95988,  ... },
    { id: 'growth',   name: 'Growth',   priceMonthly: 29999,  priceAnnual: 287988, popular: true, ... },
    { id: 'scale',    name: 'Scale',    priceMonthly: 79999,  priceAnnual: 767988, ... },
    { id: 'enterprise', name: 'Enterprise', custom: true, ... },
  ] as const
  ```
- `<PricingCard>` consumes this
- `<PricingMatrix>` consumes this
- `<AIAddonTable>` consumes a separate `AI_ADDONS` constant
- Billing toggle state is per-page React state (no global store)
- Currency formatter respects `en-IN` locale: `₹9,999` (with comma)

## CTA per card

- Starter: `Start Free →` (free trial, no card)
- Growth: `Start Free Trial →` (most-popular highlight)
- Scale: `Talk to Sales →`
- Enterprise: `Contact Enterprise →`

## SEO

- `<title>`: `Listerr Pricing — INR plans from ₹9,999/mo · India's commerce engagement platform`
- `<meta description>`: Mentions INR, free trial, no credit card
- JSON-LD: `Product` + `Offer` for each plan with priceCurrency `INR`
- Internal links from: homepage §11 (pricing teaser), every platform page bottom CTA, footer
