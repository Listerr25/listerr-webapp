# 00 — Overview

## Mission

Ship **listerr.in** — the marketing + product website for India's most complete commerce
engagement platform. The site must communicate **4 platforms · 9 use cases · 5 AI products ·
40+ pages** while converting visitors in under 5 seconds.

Positioning anchor (never deviate): *"Storyly built the category globally. Listerr built it
for India — and then went further with AI commerce."*

## In scope

- All pages in §19 sitemap (40+ routes)
- Mega-menu navigation and 5-column footer per §21
- Homepage exactly per §20 section blueprint
- INR pricing pages per §22
- vs-Storyly competitive page per §23
- SEO keyword clusters and CTA hierarchy per §24
- Lead forms (waitlist, demo, contact, network application)
- GA4 + Meta Pixel + JSON-LD across the site
- Light mode as primary; dark mode applied selectively (Listerr AI sections)

## Out of scope (for this engagement)

- The actual product/app behind the marketing site (Stories SDK, Seller Studio dashboard, etc.)
- Authenticated areas (`/app`, `/login` — placeholders only)
- Backend APIs (forms post to Resend/Formspark or similar managed service)
- AI demo sandbox functionality (UI shell built; sandbox itself is product-team work)

## Success metrics

| KPI | Target |
|---|---|
| Lighthouse Performance (P0 pages) | ≥ 90 mobile, ≥ 95 desktop |
| Lighthouse Accessibility | ≥ 95 |
| LCP | < 2.5s on 3G Fast |
| CLS | < 0.1 |
| INP | < 200ms |
| WCAG | AA across all pages, AAA for body text |
| SEO indexing | 100% of P0+P1 pages in `sitemap.xml`, valid JSON-LD |

## Design foundations (locked via ui-ux-pro-max)

| Token | Choice |
|---|---|
| Landing pattern | Enterprise Gateway (mega-menu, multi-solution paths) |
| Visual style | Flat design + bold geometric blocks; WCAG AAA; scroll-snap; large type |
| Typography | Plus Jakarta Sans single family — 400/500/600/700/800 |
| Brand palette | Indigo (Listerr) / Teal (Seller Studio) / Orange (Network) / Pink (Storyboard) |
| Iconography | Lucide React, SVG only |
| Motion | 150–300ms ease, transform/opacity only, respect prefers-reduced-motion |

Source: `../design-system/listerr/MASTER.md`

## Phasing summary

- **Phase 0 — Foundation** · Bootstrap, tokens, shell, primitives (Tasks 1–4)
- **Phase 1 — P0 launch** · Homepage, pricing, 3 platforms, 4 use-cases, 3 AI pages, legal (Tasks 5–10) — 16 pages
- **Phase 2 — P1 depth** · Platform sub-pages, remaining use-cases, industries, vs-Storyly, resources (Tasks 11–15) — ~18 pages
- **Phase 3 — P2 polish** · Changelog, careers, partners, press, remaining industries (Task 16)
- **Cross-cutting** · SEO, analytics, forms, deploy (Task 17)

Detail in `13-phasing-roadmap.md`.

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| Scope creep across 40+ pages | Strict P0/P1/P2 gating; ship in slices |
| Multi-brand color discipline drifting | Single source of truth in Tailwind config + per-platform `BrandBadge` |
| Content not ready when pages built | Each spec file lists copy blocks lifted from blueprint verbatim |
| Performance regression with motion-heavy hero | Reduced-motion fallback; transform/opacity-only animations |
| WCAG failures from brand colors | Pre-checked contrast pairs in `03-design-system.md` |
| INR pricing changes mid-build | Pricing pulled from a single `lib/pricing.ts` constants file |

## Glossary

- **MAU** — monthly active users (pricing tier metric)
- **DPDP** — Digital Personal Data Protection Act (India)
- **GMV** — gross merchandise value
- **MCP** — Model Context Protocol (Listerr AI layer)
- **OMS** — order management system (Listerr Order)
- **D2C** — direct-to-consumer brands
