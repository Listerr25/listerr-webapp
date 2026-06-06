# 04 — Homepage Spec (§20)

Route: `/`
Brand: Listerr Indigo (primary), Listerr AI section uses dark navy + gold accent.

The homepage must communicate **4 platforms · 9 use cases · 5 AI products** while converting
in under 5 seconds. Prioritise clarity and progression.

## Section 1 — Sticky Navigation

Implemented in `components/site/SiteNav.tsx` (shared across site; see `02-information-architecture.md`).

Behaviour:
- Sticky at top with `bg-white/80 backdrop-blur` on scroll
- Mega-menu opens on hover (desktop) and click (touch)
- Solid white background after 80px scroll

## Section 2 — Hero

Layout: split (text left, mockup stack right) on desktop; stacked centered on mobile.

| Element | Content |
|---|---|
| H1 | **"India's Most Complete Commerce Engagement Platform"** |
| Subhead | Stories, Reels, AI Ordering, and Smart Flows — all in one platform, built for Indian brands |
| Primary CTA | `Start Free Trial →` (filled Indigo `.600`) |
| Secondary CTA | `See All Products` (ghost outline) |
| Visual | Animated multi-screen mockup cycling through all 4 platform UIs (3s per frame, fade-crossfade) |
| Trust strip | `200+ brands · ₹500Cr+ in attributed GMV · 2Bn+ Story Views` |

Implementation:
- Background: subtle Indigo radial gradient (`from-brand.listerr.50 via-white to-white`)
- Mockup: 4 stacked device frames (desktop + mobile) with crossfade animation
- Respect `prefers-reduced-motion`: show first frame only

## Section 3 — Four Platforms Strip

4 brand-colored cards in a row (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).

| Card | Brand | Icon | 1-line description | Link |
|---|---|---|---|---|
| Listerr | Indigo | `Layers` | Core engagement platform — Stories, Reels, Lists | `Explore →` `/listerr` |
| Seller Studio | Teal | `LayoutDashboard` | Merchant command centre for e-commerce | `Explore →` `/seller-studio` |
| Listerr Network | Orange | `Users` | Creator & partner marketplace | `Explore →` `/network` |
| Storyboard | Pink | `PenTool` | Content creation studio | `Explore →` `/storyboard` |

Card spec: white background, brand-colored 4px top border, brand-tinted icon badge,
hover lift `shadow-md` + 2px translateY(-2px).

## Section 4 — Use Case Tabs

Horizontal tab strip with animated demo panel.

Tabs (in order): `Stories · Reels · Lists · Gamification · AI Personalisation · Smart Flows`

Each tab panel contains:
- Left: animated demo (60fps Lottie or short MP4 loop, 6–8s)
- Right: 2-line description + 2 outcome stats (large numbers)
- `Learn more →` link to corresponding `/use-cases/*` page

Implementation: `<Tabs>` shadcn primitive; lazy-load demo media for non-default tabs.

Default active: `Stories`.

## Section 5 — Listerr AI Feature Block

**Dark section** (navy `dark.bg` `#0B1020`). Signals premium product line.

| Element | Content |
|---|---|
| H2 | **"Introducing Listerr AI — Commerce That Talks, Listens, and Sells"** |
| Subhead | Voice, text, and intelligent order management — built for Indian languages and Indian commerce |
| Pills row | `AI Calling` · `Text Ordering` · `Voice Ordering` · `Listerr Order` · `AI Cataloging` |
| Primary CTA | `Explore Listerr AI →` (gold `dark.accent` filled) |
| Secondary CTA | `Book AI Demo` (ghost outline white) |
| Visual | Floating phone mockup showing AI call transcription / WhatsApp text order flow |

Pill spec: rounded-full, semi-transparent white border, gold hover state.

## Section 6 — Shopify Highlight

Dedicated section for the fastest-growing merchant segment.

| Element | Content |
|---|---|
| H2 | **"Listerr + Shopify: Add Stories. Take AI Orders. Sync Meta Ads. All in one click."** |
| Visual | Shopify storefront screenshot with Stories embed overlay |
| Bullets (3) | One-click install · Shoppable storefront Stories · Meta Ads loop |
| Stat callouts | `2.4x homepage CVR` · `3–5x more lead opt-ins` · `40% fewer ROAS-negative campaigns` |
| Primary CTA | `Get the Shopify App →` (filled brand.seller green-teal — Shopify-coded) |

Background: subtle Shopify-green tint (`brand.seller.50`).

## Section 7 — Social Proof Metrics Strip

Full-width band with 4 large stats:

| Metric | Number |
|---|---|
| Active brands | `200+` |
| Attributed GMV | `₹500Cr+` |
| Story views delivered | `2Bn+` |
| Indian languages supported | `12+` |

Stat spec: 56px display weight 800, label 14px uppercase weight 600 muted.

## Section 8 — Featured Case Study Teaser

Single full-bleed case study card.

| Element | Content |
|---|---|
| Brand logo + name | (Dynamic — featured rotates monthly) |
| Headline quote | Pull from case study |
| 3 result metrics | e.g. `+58% engagement`, `2.3x CVR`, `4.1x repeat rate` |
| CTA | `Read the full story →` |

Implementation: pulls top case study via `lib/featured-case-study.ts`.

## Section 9 — Integration Logos Grid

20+ partner/integration logos in a 6×4 grid (responsive: 3-col mobile).

Categories surfaced visually: E-Commerce · CRM · Analytics · Ads · Payments · CMS · WhatsApp · CDP

CTA below: `View all integrations →` `/integrations`

## Section 10 — Industry Carousel

7 industry pills, horizontally scrollable on mobile, grid on desktop.

E-Commerce · EdTech · FinTech · Media & OTT · Food & Delivery · Travel · FMCG

Each pill = icon + industry name + 1-line outcome stat (e.g. "EdTech: 40% Day-7 retention lift").
Link to `/industries/<slug>`.

## Section 11 — Pricing Teaser

3 pricing cards (Starter / Growth / Scale). Enterprise mentioned as "Custom" with link.

Reuse `PricingCard` component. Growth has `Most Popular ★` badge.

CTA below cards: `See full pricing →` `/pricing`

## Section 12 — Bottom CTA Band

Full-width section with brand gradient (Indigo → light Indigo).

| Element | Content |
|---|---|
| H2 | **"Ready to grow with Listerr?"** |
| Sub | Start free, no credit card required |
| Primary CTA | `Start Free →` |
| Secondary CTA | `Talk to Sales` |

## Footer

See `02-information-architecture.md`.

## Page-level concerns

- `<title>`: `Listerr — India's Most Complete Commerce Engagement Platform`
- `<meta name="description">`: ≤ 158 chars summary
- OG image: dynamic generated via `/api/og?title=...`
- JSON-LD: `Organization` + `WebSite` + `SoftwareApplication` schemas
- `lang="en-IN"`
- Preload hero mockup images
- All section media `loading="lazy"` except hero (`loading="eager"`)
- Hero motion respects `prefers-reduced-motion`

## Per-page override file

`design-system/listerr/pages/homepage.md` — to be created at implementation time if any
section needs deviation from MASTER (e.g. Listerr AI section overrides bg + accent tokens).
