# 01 — Full Sitemap (§19)

Authoritative URL list. 47 routes total. Priority drives phasing.

## Core (5)

| Page | URL | Priority | Phase |
|---|---|---|---|
| Homepage | `/` | P0 | 1 |
| Platform Overview | `/platform` | P0 | 2 |
| Features | `/features` | P0 | 2 |
| Pricing | `/pricing` | P0 | 1 |
| Integrations | `/integrations` | P1 | 2 |

## Platforms (12)

| Page | URL | Priority | Phase |
|---|---|---|---|
| Listerr (Core) | `/listerr` | P1 | 2 |
| Seller Studio | `/seller-studio` | P0 | 1 |
| Seller Studio — Catalogue | `/seller-studio/catalogue` | P1 | 2 |
| Seller Studio — Content | `/seller-studio/content` | P1 | 2 |
| Seller Studio — Orders | `/seller-studio/orders` | P1 | 2 |
| Seller Studio — Ads | `/seller-studio/ads` | P1 | 2 |
| Seller Studio — Analytics | `/seller-studio/analytics` | P2 | 3 |
| Listerr Network | `/network` | P0 | 1 |
| Network — Creators | `/network/creators` | P1 | 2 |
| Network — Brands | `/network/brands` | P1 | 2 |
| Network — Agencies | `/network/agencies` | P1 | 2 |
| Network — Publishers | `/network/publishers` | P2 | 3 |
| Network — Apply | `/network/apply` | P1 | 2 |
| Storyboard | `/storyboard` | P0 | 1 |
| Storyboard — Templates | `/storyboard/templates` | P1 | 2 |
| Storyboard — AI Editor | `/storyboard/ai-editor` | P1 | 2 |
| Storyboard — Pricing | `/storyboard/pricing` | P2 | 3 |

## Use Cases (9)

| Page | URL | Priority | Phase |
|---|---|---|---|
| Stories | `/use-cases/stories` | P0 | 1 |
| Reels & Video | `/use-cases/reels` | P0 | 1 |
| Customer Lists | `/use-cases/customer-lists` | P0 | 1 |
| Gamification | `/use-cases/gamification` | P1 | 2 |
| AI Personalisation | `/use-cases/ai-personalisation` | P1 | 2 |
| Smart Flows | `/use-cases/smart-flows` | P1 | 2 |
| Meta & Google Sync | `/use-cases/meta-google-sync` | P1 | 2 |
| Shopify Growth | `/use-cases/shopify` | P0 | 1 |

## Listerr AI (5)

| Page | URL | Priority | Phase |
|---|---|---|---|
| AI Calling | `/ai/ai-calling` | P0 | 1 |
| AI Text Ordering | `/ai/text-ordering` | P0 | 1 |
| AI Voice Ordering | `/ai/voice-ordering` | P0 | 1 |
| Listerr Order (OMS) | `/ai/listerr-order` | P1 | 2 |
| AI Content Cataloging | `/ai/content-cataloging` | P1 | 2 |

## Industries (6)

| Page | URL | Priority | Phase |
|---|---|---|---|
| E-Commerce | `/industries/ecommerce` | P1 | 2 |
| EdTech | `/industries/edtech` | P1 | 2 |
| FinTech | `/industries/fintech` | P1 | 2 |
| Media & OTT | `/industries/media-ott` | P1 | 2 |
| Food & Delivery | `/industries/food-delivery` | P2 | 3 |
| Travel | `/industries/travel` | P2 | 3 |

## Resources (4)

| Page | URL | Priority | Phase |
|---|---|---|---|
| Blog | `/blog` + `/blog/[slug]` | P1 | 2 |
| Case Studies | `/case-studies` + `/case-studies/[slug]` | P1 | 2 |
| Documentation | `/docs` + `/docs/[...slug]` | P1 | 2 |
| Changelog | `/changelog` | P2 | 3 |

## Company (4)

| Page | URL | Priority | Phase |
|---|---|---|---|
| About Us | `/about` | P1 | 2 |
| Careers | `/careers` | P2 | 3 |
| Contact Us | `/contact` | P1 | 2 |
| Partners | `/partners` | P2 | 3 |
| Press Kit | `/press-kit` | P2 | 3 |

## Competitive

| Page | URL | Priority | Phase |
|---|---|---|---|
| vs Storyly | `/vs/storyly` | P1 | 2 |

## Legal (2)

| Page | URL | Priority | Phase |
|---|---|---|---|
| Privacy Policy | `/privacy` | P0 | 1 |
| Terms of Service | `/terms` | P0 | 1 |
| Cookie Policy | `/cookies` | P1 | 2 |
| Status | `/status` (external, link only) | — | — |

## Utility / system

| Page | URL | Notes |
|---|---|---|
| 404 | `not-found.tsx` | Branded with primary CTA back to home |
| 500 | `error.tsx` | Branded with reload + contact link |
| Sitemap | `/sitemap.xml` | App Router `sitemap.ts` |
| Robots | `/robots.txt` | App Router `robots.ts` |
| OG fallback | `/api/og` | Dynamic OG image generator |

## Page counts

- **P0** (Phase 1): 16 pages
- **P1** (Phase 2): ~22 pages (including blog/case-study/docs templates)
- **P2** (Phase 3): ~9 pages

Total unique routes: **47** (+ dynamic blog/case-study/docs entries).
