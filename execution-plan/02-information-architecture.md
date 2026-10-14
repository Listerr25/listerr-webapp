# 02 — Information Architecture (§21)

## Mega-menu structure (desktop ≥1024px)

Top-level nav (left → right):

```
LOGO   Platform ▾   Solutions ▾   Listerr AI ▾   Resources ▾   Company ▾        Log In   [Get Started]
```

### Platform ▾ (4-col mega panel)

| Listerr | Seller Studio | Listerr Network | Storyboard |
|---|---|---|---|
| Indigo icon | Teal icon | Orange icon | Pink icon |
| Core engagement | Merchant command centre | Creator marketplace | Content studio |
| `/listerr` | `/seller-studio` | `/network` | `/storyboard` |

Footer of panel: `Features →` `Integrations →` `Platform Overview →`

### Solutions ▾ (3-col mega panel)

**Use Cases** — Stories · Reels & Video · Customer Lists · Gamification · AI Personalisation · Smart Flows · Meta & Google Sync · Shopify Growth

**Industries** — E-Commerce · EdTech · FinTech · Media & OTT · Food & Delivery · Travel

**Featured** — Latest case study card

### Listerr AI ▾ (premium dark panel)

Dedicated top-level (signals premium product line):

- AI Calling for E-Commerce → `/ai/ai-calling`
- AI Text Ordering → `/ai/text-ordering`
- AI Voice Ordering → `/ai/voice-ordering`
- Listerr Order (OMS) → `/ai/listerr-order`
- AI Content Cataloging → `/ai/content-cataloging`

Panel CTA: **Book AI Demo →**

### Resources ▾ (1-col)

Blog · Case Studies · Documentation · Changelog · Storyboard Templates

### Company ▾ (1-col)

About · Careers · Contact · Partners · Press Kit

## Header CTAs (right side)

| Element | Behavior |
|---|---|
| Log In | Links to `/login` (placeholder, opens product app subdomain when ready) |
| Get Started | Primary button → `/signup` (free trial signup) |

## Mobile nav (<1024px)

- Hamburger icon (left) opens full-screen sheet
- Sheet sections collapsed into accordion groups matching desktop top-level
- Sticky bottom CTAs: `Log In` (ghost) + `Get Started` (filled primary)
- Close with X or swipe-down on mobile gesture

## Footer (5 columns)

| Col 1: Brand | Col 2: Platform | Col 3: Use Cases | Col 4: Listerr AI | Col 5: Company |
|---|---|---|---|---|
| Logo wordmark | Listerr | Stories | AI Calling | About |
| "India's Commerce Engagement OS" | Seller Studio | Reels | Text Ordering | Careers |
| Social icons (LinkedIn, X, Instagram, YouTube) | Listerr Network | Customer Lists | Voice Ordering | Blog |
| Made in India 🇮🇳 badge | Storyboard | Gamification | Listerr Order | Case Studies |
| | Features | AI Personalisation | AI Cataloging | Docs |
| | Integrations | Smart Flows | | Contact |
| | | Shopify | | |

**Bottom bar:**
`© 2026 Orifinity Private Limited` · `Privacy` · `Terms` · `Cookies` · `Status` · `GST: XXXXXXXXXXXX`

## URL conventions

- Lowercase, kebab-case (`/use-cases/customer-lists` not `/CustomerLists`)
- No trailing slash
- No query strings for navigation (filters/sort are query-driven, navigation is path-driven)
- Sub-pages nested under platform parent (`/seller-studio/catalogue` not `/catalogue`)
- AI products under `/ai/` namespace
- Industries under `/industries/` namespace
- Use cases under `/use-cases/` namespace
- Competitive pages under `/vs/` namespace (e.g. `/vs/storyly`)

## Breadcrumbs

Required on all sub-pages (≥2 levels deep):

```
Home  ›  Seller Studio  ›  Catalogue
```

Implementation: `<Breadcrumb>` shadcn component, JSON-LD `BreadcrumbList` schema attached.

## Routing implementation (Next.js App Router)

```
app/
├── layout.tsx               # Root layout: nav, footer, fonts, analytics
├── page.tsx                 # Homepage
├── platform/page.tsx
├── features/page.tsx
├── pricing/page.tsx
├── integrations/page.tsx
├── listerr/page.tsx
├── seller-studio/
│   ├── page.tsx
│   ├── catalogue/page.tsx
│   ├── content/page.tsx
│   ├── orders/page.tsx
│   ├── ads/page.tsx
│   └── analytics/page.tsx
├── network/
│   ├── page.tsx
│   ├── creators/page.tsx
│   ├── brands/page.tsx
│   ├── agencies/page.tsx
│   ├── publishers/page.tsx
│   └── apply/page.tsx
├── storyboard/
│   ├── page.tsx
│   ├── templates/page.tsx
│   ├── ai-editor/page.tsx
│   └── pricing/page.tsx
├── use-cases/
│   ├── stories/page.tsx
│   ├── reels/page.tsx
│   ├── customer-lists/page.tsx
│   ├── gamification/page.tsx
│   ├── ai-personalisation/page.tsx
│   ├── smart-flows/page.tsx
│   ├── meta-google-sync/page.tsx
│   └── shopify/page.tsx
├── ai/
│   ├── ai-calling/page.tsx
│   ├── text-ordering/page.tsx
│   ├── voice-ordering/page.tsx
│   ├── listerr-order/page.tsx
│   └── content-cataloging/page.tsx
├── industries/
│   ├── ecommerce/page.tsx
│   ├── edtech/page.tsx
│   ├── fintech/page.tsx
│   ├── media-ott/page.tsx
│   ├── food-delivery/page.tsx
│   └── travel/page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── case-studies/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── docs/
│   ├── page.tsx
│   └── [...slug]/page.tsx
├── changelog/page.tsx
├── about/page.tsx
├── careers/page.tsx
├── contact/page.tsx
├── partners/page.tsx
├── press-kit/page.tsx
├── vs/storyly/page.tsx
├── privacy/page.tsx
├── terms/page.tsx
├── cookies/page.tsx
├── not-found.tsx
├── error.tsx
├── sitemap.ts
├── robots.ts
└── api/og/route.tsx
```
