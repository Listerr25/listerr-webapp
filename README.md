# Listerr Webapp

Marketing and product website for **Listerr**, India's commerce engagement platform.

The app is built with Next.js App Router and implements the execution plan in
`execution-plan/`: homepage, pricing, platforms, use cases, Listerr AI, industries,
resources, company pages, legal pages, sitemap, and robots.

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 3
- shadcn/ui + Radix primitives
- Lucide React icons
- Plus Jakarta Sans via `next/font`

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run build
npm run check
```

Notes:

- `npm run build` currently skips Next's built-in type and lint validation because
  `next.config.mjs` has those flags enabled.
- `npm run typecheck` is the explicit TypeScript verification step.
- `npm run lint` is still the legacy Next lint command and prompts for setup in this repo.

## Project Structure

```text
app/                    Next.js routes, metadata, sitemap, robots
components/site/        Current global shell: nav, mobile nav, footer, breadcrumbs
components/primitives/  Reusable marketing section primitives
components/marketing/   Generic marketing page templates
components/platform/    Platform page template
components/use-cases/   Use-case page template
components/ai/          Listerr AI page template
components/industry/    Industry page template
components/pricing/     Pricing page client UI
components/ui/          shadcn/ui primitives
components/legacy/      Older compatibility components used by /access, /seller, /help
lib/                    Shared data, brand tokens, pricing, utilities
design-system/          Design source material
execution-plan/         Implementation plan and blueprint mapping
docs/                   Project maintenance docs
public/                 Static assets
```

More detail: [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md).

## Route Coverage

The site has implemented route coverage across:

- Phase 1: homepage, pricing, P0 platforms, P0 use cases, P0 AI, privacy, terms
- Phase 2: platform depth, remaining P1 use cases and AI, industries, resources, company, vs Storyly
- Phase 3: changelog, careers, press kit, P2 platform pages, P2 industries

Sitemap and robots are implemented in:

- `app/sitemap.ts`
- `app/robots.ts`

## Key Source Files

- `app/layout.tsx`: global shell, font, metadata defaults
- `app/page.tsx`: homepage
- `lib/brand.ts`: multi-brand platform mapping
- `lib/pricing.ts`: pricing plans, comparison matrix, AI add-ons, FAQs
- `lib/comparison/storyly.ts`: Storyly comparison matrix
- `tailwind.config.js`: Listerr brand and semantic tokens
- `app/globals.css`: global base styles and accessibility defaults

## Current Gaps

These are intentionally left for production hardening:

- ESLint setup
- Real form backend for contact, demo, network apply, newsletter
- Cookie-consent-gated GA4 and Meta Pixel
- Dynamic OG image route
- Full MDX/RSS pipeline for blog, docs, and case studies
- Real image/media assets replacing placeholders

## Deployment

Target deployment is Vercel.

Recommended production checks before deploy:

```bash
npm run check
npm audit
```

The current dependency tree reports audit findings; review before production release.
