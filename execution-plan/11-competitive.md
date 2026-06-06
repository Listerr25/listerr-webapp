# 11 — Competitive Positioning (§23)

Route: `/vs/storyly`

**Rule:** Never attack Storyly. Own the territory they can't.
**Message:** *"Storyly built the category globally. Listerr built it for India — and then went further with AI commerce."*

## Page structure

1. **Hero** — H1 "Storyly Alternative for India". Sub explains positioning above (verbatim).
2. **Statement of respect** — Short paragraph: Storyly built the category; Listerr is built for what India needs.
3. **Comparison table** — full 17-row differentiator matrix
4. **Three differentiator deep-dives** — each as a section:
   - India-first (DPDP, INR, residency, languages)
   - First-class Customer Lists format
   - Listerr AI & MCP layer
5. **Pricing comparison** — show entry price difference (₹9,999/mo vs Storyly enterprise-first)
6. **Migration path** — "Coming from Storyly?" — 3-step migration steps
7. **Customer quote** — brand who switched (placeholder until real)
8. **Bottom CTA** — `Start Free Trial` + `Book India Demo`

## Comparison table (verbatim from blueprint §23)

| Differentiator | Listerr ✅ | Storyly |
|---|---|---|
| India Data Residency | ✅ Available | ❌ Not available |
| INR Billing | ✅ Full INR pricing | ❌ USD only |
| Indian Language Support | ✅ 12+ incl. Hindi, Tamil | 🟡 Limited |
| Customer Lists Format | ✅ First-class native format | ❌ Not available |
| Gamification Built-in | ✅ Streaks, scratch, spin | 🟡 Limited |
| AI Calling Commerce | ✅ Full AI call ordering | ❌ Not available |
| AI Text / Voice Ordering | ✅ WhatsApp + in-app | ❌ Not available |
| AI Content Cataloging | ✅ Auto-enrich via AI | ❌ Not available |
| Shopify App (India) | ✅ Deep native integration | 🟡 Basic plugin |
| Meta & Google Sync | ✅ Full bi-directional | 🟡 Partial |
| CleverTap/WebEngage Native | ✅ Yes — built-in | 🟡 Via middleware |
| Creator Network / Marketplace | ✅ Listerr Network | ❌ Not available |
| No-Code Content Studio | ✅ Storyboard | 🟡 Basic editor |
| Seller Command Centre | ✅ Seller Studio | ❌ Not available |
| DPDP (India) Compliance | ✅ Full compliance | 🟡 GDPR only |
| Startup-Friendly Entry Price | ✅ From ₹9,999/mo | ❌ Enterprise-first |
| India Customer Support (IST) | ✅ Hindi + English | ❌ Global timezone |

## Implementation

- `<ComparisonMatrix>` component, data-driven from `lib/comparison/storyly.ts`
- Each cell uses `CheckCircle` (✅ green), `XCircle` (❌ neutral grey, NOT red — we don't attack), `AlertCircle` (🟡 yellow/amber for partial)
- Each cell also has aria-label text ("Listerr: Available", "Storyly: Not available")
- Row click expands a short explanation tooltip/disclosure
- Sticky table header on scroll
- Mobile: cards instead of a wide table (each differentiator becomes its own card with both sides)

## Three deep-dive sections

### 1. India-first by design
Sub: "DPDP, INR billing, 12+ Indian languages, India data residency."

3-card row:
- DPDP compliance built-in (badge + audit trail icon)
- INR billing + GST invoicing (₹ icon)
- 12 Indian languages (flag/script visual)

### 2. Customer Lists — the format Storyly doesn't have
Sub: "Lists are why we're called Listerr. They're not a feature add-on — they're a first-class format."

Visual: side-by-side mockup of a List vs a Story carousel.

### 3. Listerr AI & MCP — conversational commerce
Sub: "Voice calling, text ordering, voice ordering, OMS, AI cataloging — Storyly doesn't have any of these."

Visual: 5-pill row (the AI products) on dark navy background.

## Migration path section

"Coming from Storyly?" — 3 numbered cards:
1. Export your Story library (Listerr import tool handles JSON/MP4)
2. Connect your app/SDK (works alongside Storyly during migration)
3. Switch over when ready (no double-billing window)

CTA: `Talk to migration specialist →`

## SEO

- `<title>`: `Storyly Alternative India — Listerr · INR Pricing · AI Commerce`
- `<meta description>`: Hits "Storyly alternative India" keyword from §24 cluster
- Target keyword cluster: `Storyly alternative India`, `Storyly India pricing`, `app engagement platform India 2026`
- Internal links from: pricing page CTA, homepage footer, all platform pages
- JSON-LD: `FAQPage` for the comparison rows (each row reframed as FAQ)
