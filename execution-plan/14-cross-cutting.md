# 14 — Cross-Cutting Concerns

Items that touch every page. Owned by Task 17 but referenced across all builds.

## Analytics

### GA4 + Meta Pixel

Both load lazily after cookie consent (analytics category) is granted. Implementation:

```
lib/analytics/
├── track.ts          # Unified event tracker (sends to GA4 + Pixel)
├── gtag.ts           # GA4 wrapper
├── pixel.ts          # Meta Pixel wrapper
└── consent.ts        # Cookie consent state hook
```

### Event taxonomy (sitewide)

| Event | When |
|---|---|
| `page_view` | Auto on route change |
| `cta_click` | All CTA buttons; payload `{label, page, position}` |
| `signup_started` | Reaches /signup |
| `signup_completed` | Signup form success |
| `demo_booked` | Calendly confirms |
| `pricing_plan_clicked` | Plan card CTA |
| `comparison_row_expanded` | vs/storyly row click |
| `blog_article_viewed` | Blog detail page |
| `docs_search` | Doc search submit |
| `form_submitted` | Any form success |
| `form_error` | Form validation failure |

### Vercel Speed Insights + Web Analytics

Enable both for real-user Core Web Vitals + privacy-respecting analytics. No cookies required.

## Forms

All forms go through a single submission helper. Phase 1 backend: Resend (transactional
email) or Formspark (form-as-a-service). Phase 2+ may move to a custom `/api/*` route.

### Form list

| Form | Fields | Destination |
|---|---|---|
| Waitlist | email | Resend list `waitlist` |
| Get Started / Signup | email, password (or magic link) | Placeholder → product app |
| Book a Demo | name, work email, company, role, plan interest | Email to sales@ + Calendly link |
| Contact | name, email, company, message, area | Email to area-appropriate inbox |
| Network apply | role, name, email, portfolio URL, message | Email to partnerships@ |
| Newsletter (blog) | email | Resend list `newsletter` |

### Validation
- Client: React Hook Form + Zod resolver
- Server: re-validate with same Zod schema before sending
- Honeypot field (hidden input bots auto-fill) to deter spam
- Optional Cloudflare Turnstile / Vercel BotID on high-risk forms (contact, network apply)

### Error handling
- Inline field errors with `aria-describedby`
- Top-of-form error summary with anchor links if multiple errors
- Submit button shows loading state, then success/error state
- Success: replace form with success message + next-step CTA
- Failure: keep form, show toast, focus first error

## Deployment

### Vercel project setup
- Framework: Next.js
- Node version: 24 LTS (current default)
- Output: Fluid Compute (default)
- Production branch: `main`
- Preview branches: all PRs
- Environment variables: pulled with `vercel env pull .env.local`

### Required environment variables
```
NEXT_PUBLIC_SITE_URL=https://listerr.in
RESEND_API_KEY=
RESEND_WAITLIST_LIST_ID=
RESEND_NEWSLETTER_LIST_ID=
FORMSPARK_FORM_ID=
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_CALENDLY_URL=
SALES_EMAIL=sales@listerr.in
SUPPORT_EMAIL=support@listerr.in
PARTNERSHIPS_EMAIL=partnerships@listerr.in
PRESS_EMAIL=press@listerr.in
# Optional Phase 3
VERCEL_AI_GATEWAY_API_KEY=  # For AI demo sandbox
```

### Vercel platform features to enable
- **Vercel Web Analytics** — privacy-respecting traffic data
- **Vercel Speed Insights** — real-user CWV
- **Vercel Firewall** — basic rules: rate-limit `/api/contact` and `/api/network-apply` (10/min/IP); block known bot UAs
- **Vercel BotID** — on high-value forms (Phase 2+)
- **Vercel AI Gateway** — Phase 2+ for AI demo sandbox; not required for marketing site itself

### Custom domains
- Primary: `listerr.in` (apex, redirect www → apex or vice versa, pick one)
- Preview: `*.vercel.app` auto-issued
- Status: `status.listerr.in` (third-party uptime page, linked from footer)

### Performance budget enforcement
- Lighthouse CI as a GitHub Action on every PR
- Bundle analyzer (`@next/bundle-analyzer`) reviewed at end of each phase
- Image audit: AVIF/WebP only, < 200KB per asset

## SEO infrastructure

See `12-seo-cta.md` for keyword strategy. Implementation files:

```
lib/seo/
├── schema.ts         # JSON-LD generators (Organization, Product, Article, FAQPage, BreadcrumbList)
├── metadata.ts       # Default + page-specific Next metadata helpers
└── og.ts             # OG image config

app/
├── sitemap.ts        # Auto-generated from route manifest
├── robots.ts
└── api/og/route.tsx  # Dynamic OG image generator (next/og)
```

## Internationalisation (out of scope, but plan for it)

- All copy lives in TS constants files (`lib/content/*.ts`), not hard-coded in JSX
- This makes a future `next-intl` migration mechanical, not a rewrite
- Phase 1: `en-IN` only (`<html lang="en-IN">`)
- Phase 4+ (out of scope): Hindi homepage as proof point

## Accessibility infrastructure

- `axe-core` in dev mode (via `@axe-core/react`) — logs violations to console
- Lighthouse CI accessibility score must be ≥ 95
- Manual screen-reader pass on P0 pages before launch (VoiceOver Mac + TalkBack Android)
- Keyboard-only navigation pass on P0 pages

## Error & monitoring

- `app/error.tsx` and `app/not-found.tsx` branded with primary CTA back home
- Sentry (optional Phase 2) for client-side error tracking
- Vercel deployment notifications to a Slack channel

## Content management

Phase 1: copy lives in TS constants. Acceptable because the site is mostly static
marketing content and we want to ship.

Phase 2 (optional): consider headless CMS (Sanity / Contentful) if marketing team needs
to edit copy without PRs. Decision deferred.

Blog and changelog use **local MDX** files in `content/` — version-controlled, no CMS
needed.
