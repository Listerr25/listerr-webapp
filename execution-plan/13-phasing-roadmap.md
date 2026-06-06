# 13 — Phasing & Roadmap

Maps the live task list (TaskList in Claude Code) to the four execution phases. Each task
has an explicit Definition of Done (DoD) so completion is unambiguous.

## Phase 0 — Foundation

**Goal:** Shell, tokens, primitives. Nothing user-facing yet.

### Task 1 — Bootstrap fresh Next.js project
- Create `listerr-web/` (new dir, sibling to current repo); archive current repo as `listerr-webapp-legacy/`
- `pnpm create next-app@latest listerr-web --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"`
- Install: `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`, `class-variance-authority`, `zod`, `react-hook-form`, `@hookform/resolvers`
- Initialise shadcn/ui: `pnpm dlx shadcn@latest init`
- Copy `Listerr_Complete_Website_Blueprint.docx`, `execution-plan/`, `design-system/listerr/` into new repo
- Set up `pnpm-lock.yaml`, `.gitignore`, basic ESLint + Prettier
- **DoD:** `pnpm dev` shows blank page on localhost:3000; linting passes; design-system folder present

### Task 2 — Tokenize multi-brand design system
- Implement `tailwind.config.ts` with palette from `03-design-system.md`
- Add `app/globals.css` with CSS variables (light + dark scope)
- Verify each brand `.600` color has WCAG AA contrast with white text
- Create `lib/brand.ts` mapping platform slug → brand color tokens
- Plus Jakarta Sans loaded via `next/font/google`
- **DoD:** test page renders all brand colors + text scale + spacing rhythm correctly

### Task 3 — Build shell: mega-menu nav + 5-column footer
- `components/site/SiteNav.tsx` — sticky desktop nav with mega-menu panels per `02-information-architecture.md`
- `components/site/MobileNav.tsx` — full-screen Sheet with accordion sections
- `components/site/SiteFooter.tsx` — 5-column footer + bottom legal bar
- `components/site/Breadcrumb.tsx` — auto-generates from route segments
- Keyboard accessibility: trap focus in mega-menu, Esc closes, Tab cycles
- **DoD:** every link in mega-menu and footer routes to a placeholder page (even if 404 for now); mobile sheet opens/closes; keyboard nav works

### Task 4 — Build shared section primitives
- `SectionContainer`, `Hero` (3 variants), `MetricsStrip`, `FeatureGrid`, `PlatformCard`, `LogoCloud`, `TestimonialCard`, `CTABand`, `PricingCard`, `ComparisonRow`, `IconBadge`, `BrandBadge`
- Storybook-style demo page at `/_dev/primitives` (excluded from sitemap, dev-only)
- **DoD:** demo page renders every primitive in every variant

---

## Phase 1 — P0 launch (16 pages)

**Goal:** Public-facing site that explains the core proposition and converts.

### Task 5 — Homepage (§20 spec)
Full implementation of `04-homepage-spec.md`. All 12 sections.
- **DoD:** Lighthouse ≥ 90 mobile / ≥ 95 desktop; all CTAs wired; OG image generates

### Task 6 — Pricing pages
`/pricing` per `10-pricing.md`. All 4 plans, AI add-on table, FAQ.
- **DoD:** Pricing constants in `lib/pricing.ts`; billing toggle works; INR formatting correct; JSON-LD Product schema valid

### Task 7 — Platform pages (3 of 4 — Listerr Core is P1)
`/seller-studio`, `/network`, `/storyboard` per `05-platforms.md` template.
- **DoD:** each page brand-themed correctly; sub-page anchor strip links work; CTAs wired

### Task 8 — Use cases (4 P0)
`/use-cases/stories`, `/use-cases/reels`, `/use-cases/customer-lists`, `/use-cases/shopify` per `06-use-cases.md`.
- **DoD:** consistent template; animated demos in hero; analytics block populated; related case study card present

### Task 9 — Listerr AI pages (3 P0)
`/ai/ai-calling`, `/ai/text-ordering`, `/ai/voice-ordering` per `07-listerr-ai.md`.
- **DoD:** dark theme correctly scoped to /ai routes; all 5 product pills consistent; "Book AI Demo" CTA wired

### Task 10 — Legal: Privacy + Terms
`/privacy`, `/terms` per `09-resources-company.md`.
- **DoD:** DPDP-compliant Privacy Policy with grievance officer block; ToS specifies India jurisdiction + GST + INR; readable typography with TOC

---

## Phase 2 — P1 depth (~22 pages)

**Goal:** Round out the surface — every blueprint section has a page.

### Task 11 — Remaining sub-pages
- `/seller-studio/{catalogue,content,orders,ads}`
- `/network/{creators,brands,agencies}` + `/network/apply`
- `/storyboard/{templates,ai-editor}`
- **DoD:** each is a meaningful deep-dive on a single module, not a stub

### Task 12 — Remaining use-cases + AI pages
- `/use-cases/{gamification,ai-personalisation,smart-flows,meta-google-sync}`
- `/integrations`
- `/ai/listerr-order`, `/ai/content-cataloging`
- **DoD:** content lifted from blueprint, brand-themed, CTAs wired

### Task 13 — Industry pages (4 priority verticals)
- `/industries/{ecommerce,edtech,fintech,media-ott}` per `08-industries.md`
- **DoD:** each uses shared industry template; outcome metrics populated

### Task 14 — Platform Overview, Features, Listerr Core, vs Storyly
- `/platform`, `/features`, `/listerr`, `/vs/storyly`
- `/about`, `/contact`, `/partners` (P1 cut)
- **DoD:** vs/storyly comparison table fully populated with 17 rows; About has leadership grid

### Task 15 — Resources
- `/blog` index + `[slug]` template + 5 seed articles
- `/case-studies` index + `[slug]` template + 3 seed studies
- `/docs` shell + Getting Started + SDK skeletons
- **DoD:** MDX pipeline works; article RSS feed valid; docs sidebar nav works

---

## Phase 3 — P2 polish (~9 pages)

### Task 16 — Long-tail pages
- `/changelog`, `/careers`, `/press-kit`
- `/seller-studio/analytics`, `/network/publishers`, `/storyboard/pricing`
- `/industries/{food-delivery,travel}`
- **DoD:** all blueprint pages now exist; sitemap covers them

---

## Cross-cutting (parallel to all phases)

### Task 17 — SEO, analytics, forms, deployment
- `app/sitemap.ts`, `app/robots.ts`
- JSON-LD per page type (helpers in `lib/seo/schema.ts`)
- GA4 + Meta Pixel wiring (cookie-consent-gated)
- Forms: Resend or Formspark; Zod validation; honeypot anti-spam
- Vercel deployment with preview branches; Vercel AI Gateway env scaffold for the AI demo sandbox; basic Vercel Firewall rules (rate-limit /api/contact)
- OG image generator at `/api/og` (Next.js `ImageResponse`)
- **DoD:** Lighthouse SEO 100; valid sitemap.xml; pixel/GA4 verified in respective consoles; preview URL deploys on every PR

---

## Rough sequencing & dependencies

```
Task 1 (bootstrap)
  └── Task 2 (tokens)
       └── Task 3 (shell)
            └── Task 4 (primitives)
                 ├── Task 5 (homepage)
                 ├── Task 6 (pricing)
                 ├── Task 7 (platforms)
                 ├── Task 8 (use cases)
                 ├── Task 9 (AI pages)
                 └── Task 10 (legal)
                      └── Tasks 11-15 (P1)
                           └── Task 16 (P2)

Task 17 (cross-cutting) runs in parallel from Task 5 onward.
```

## Rough effort estimate (single-developer reference)

| Phase | Effort |
|---|---|
| Phase 0 (Tasks 1–4) | 3–5 days |
| Phase 1 (Tasks 5–10) | 8–12 days |
| Phase 2 (Tasks 11–15) | 10–15 days |
| Phase 3 (Task 16) | 3–5 days |
| Cross-cutting (Task 17) | Spread across all phases |
| **Total** | **24–37 days** |

These are reference estimates with shared primitives doing heavy lifting; real timeline
depends on content readiness, design assets, and review cycles.
