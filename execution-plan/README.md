# Listerr Website — Execution Plan

This folder contains the complete execution plan for building **listerr.in** as specified in
`Listerr_Complete_Website_Blueprint.docx` (Confidential, May 2026).

## Source of truth

| Layer | Location |
|---|---|
| Product blueprint | `../Listerr_Complete_Website_Blueprint.docx` |
| Design system (master) | `../design-system/listerr/MASTER.md` |
| Per-page design overrides | `../design-system/listerr/pages/<slug>.md` |
| This execution plan | this folder |
| Tasks (live status) | TaskList in Claude Code |

## Plan files

| # | File | Covers |
|---|---|---|
| 00 | `00-overview.md` | Goals, scope, success metrics, decisions locked |
| 01 | `01-sitemap.md` | Full 40+ page sitemap with priority (§19) |
| 02 | `02-information-architecture.md` | Routing, mega-menu, footer (§21), URL canonical |
| 03 | `03-design-system.md` | Tokens, multi-brand palette, typography, components |
| 04 | `04-homepage-spec.md` | Section-by-section homepage (§20) |
| 05 | `05-platforms.md` | Listerr / Seller Studio / Network / Storyboard (§1-4) |
| 06 | `06-use-cases.md` | All 9 use cases (§5-13) |
| 07 | `07-listerr-ai.md` | 5 AI products (§14-18) |
| 08 | `08-industries.md` | 6 industry pages |
| 09 | `09-resources-company.md` | Blog, case studies, docs, about, legal |
| 10 | `10-pricing.md` | INR pricing + AI add-ons (§22) |
| 11 | `11-competitive.md` | vs Storyly positioning (§23) |
| 12 | `12-seo-cta.md` | Keyword clusters + CTA hierarchy (§24) |
| 13 | `13-phasing-roadmap.md` | Phase 0 → 3 with task mapping |
| 14 | `14-cross-cutting.md` | SEO, analytics, forms, deployment |
| 15 | `15-cross-verification.md` | Section-by-section blueprint coverage check |

## How to use

1. Start with `00-overview.md` for the executive summary.
2. Before implementing any page, read its spec file (e.g. homepage → `04`).
3. Pull design tokens from `../design-system/listerr/MASTER.md`; for page-specific overrides
   check `../design-system/listerr/pages/<slug>.md`.
4. Update `15-cross-verification.md` checkmarks as pages ship.
5. Use TaskList to claim work; tasks map to phases per `13-phasing-roadmap.md`.

## Key decisions locked

| Decision | Choice |
|---|---|
| Codebase | Fresh Next.js 15 App Router project (legacy repo archived) |
| Phasing | P0 → P1 → P2 |
| Brand approach | Multi-brand per platform (Indigo / Teal / Orange / Pink) |
| Typography | Plus Jakarta Sans (single family) |
| Icons | Lucide (SVG, no emoji) |
| UI primitives | shadcn/ui on Tailwind |
| Pattern | Enterprise Gateway with mega-menu |
| Stack | Next.js 15, React 19, Tailwind 3, TypeScript, Vercel deploy |
