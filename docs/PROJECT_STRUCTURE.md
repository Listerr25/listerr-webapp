# Project Structure

This document explains where new code should go.

## App Routes

`app/` contains Next.js App Router routes. Keep route files thin when possible and use
templates or shared components from `components/`.

Important files:

- `app/layout.tsx`: root layout, global nav/footer, font, default metadata.
- `app/page.tsx`: homepage.
- `app/sitemap.ts`: route manifest for search engines.
- `app/robots.ts`: crawler rules.
- `app/%5Fdev/primitives/page.tsx`: escaped `/_dev/primitives` route for design-system QA.

## Components

Current production components are grouped by responsibility:

- `components/site/`: global website shell components.
- `components/primitives/`: reusable section-level building blocks.
- `components/marketing/`: generic marketing page template.
- `components/platform/`: platform page template.
- `components/use-cases/`: use-case page template.
- `components/ai/`: Listerr AI page template.
- `components/industry/`: industry page template.
- `components/pricing/`: pricing page interactive UI.
- `components/ui/`: shadcn/ui and Radix wrappers.
- `components/legacy/`: older compatibility components still used by `/access`, `/seller`, and `/help`.

Do not add new production components to the root of `components/`. Create or reuse a
domain folder.

## Shared Data And Utilities

`lib/` contains shared non-UI code:

- `lib/brand.ts`: platform brand metadata and Tailwind class mappings.
- `lib/pricing.ts`: plans, AI add-ons, comparison rows, FAQs, INR formatter.
- `lib/comparison/storyly.ts`: Storyly comparison table.
- `lib/utils.ts`: `cn()` helper.

New static content constants should live under `lib/` or a focused subfolder such as
`lib/content/`.

## Design And Planning

- `design-system/`: design reference material.
- `execution-plan/`: implementation blueprint and phase roadmap.
- `Listerr_Complete_Website_Blueprint.docx`: original product blueprint.

These are source-of-truth planning assets and should not be mixed into runtime code.

## Styling

- `tailwind.config.js`: brand tokens, semantic colors, shadows, radius, font family.
- `app/globals.css`: global base styles, selection, focus-visible, reduced-motion rules.

## Assets

Use `public/` for static assets. Prefer descriptive names and subfolders:

```text
public/
  images/
  logos/
  og/
```

Avoid remote placeholder images in production pages unless there is a clear reason.

## Route Naming

Follow the execution plan:

- lowercase
- kebab-case
- no trailing slash
- namespace routes by domain, such as `/use-cases/*`, `/ai/*`, `/industries/*`

## Verification

Use:

```bash
npm run typecheck
npm run build
```

Run typecheck after build if both are run in parallel, because `.next/types` can be
regenerated during `next build`.
