# 12 — SEO & CTA Strategy (§24)

## Keyword clusters (priority order)

### Platform & category keywords
- `interactive content platform India`
- `in-app stories SDK India`
- `embed stories in app India`
- `Storyly alternative India`
- `Storyly India pricing`
- `app engagement platform India 2026`

**Target pages:** Homepage, `/listerr`, `/platform`, `/vs/storyly`, `/pricing`

### Product keywords
- `shoppable stories app`
- `in-app reels widget`
- `customer list engagement`
- `gamification SDK India`
- `AI order calling India`
- `WhatsApp ordering AI`
- `voice commerce India`
- `AI product cataloging`

**Target pages:** Use-case pages, `/ai/*` pages

### Shopify keywords
- `Shopify stories app India`
- `shoppable stories Shopify`
- `Shopify engagement tool India`

**Target pages:** `/use-cases/shopify`, `/seller-studio`, `/industries/ecommerce`

### Long-tail / blog keywords
- `how to add stories to Shopify store`
- `AI calling for D2C brands India`
- `reduce Shopify cart abandonment`
- `best gamification app for Indian ecommerce`
- `WhatsApp order automation India`

**Target pages:** Blog articles (seed list in `09-resources-company.md`)

## On-page SEO checklist (every page)

- [ ] Unique `<title>` ≤ 60 chars including brand suffix
- [ ] Unique `<meta description>` ≤ 158 chars
- [ ] Single H1 per page matching primary keyword intent
- [ ] H2/H3 hierarchy sequential, contains secondary keywords
- [ ] Canonical URL set via `metadata.alternates.canonical`
- [ ] `lang="en-IN"` on `<html>`
- [ ] Open Graph: og:title, og:description, og:image (1200×630), og:type
- [ ] Twitter Card: summary_large_image
- [ ] JSON-LD schema appropriate to page type (Organization on home, Product on pricing, Article on blog, etc.)
- [ ] Internal links to 3+ other relevant pages
- [ ] Image alt text descriptive
- [ ] No broken links (CI check)
- [ ] Page appears in `sitemap.xml`

## Technical SEO

### Sitemap (`app/sitemap.ts`)
Auto-generated from a route manifest. Includes lastModified, changeFrequency, priority per
the §19 sitemap (P0 = priority 1.0, P1 = 0.8, P2 = 0.5).

### Robots (`app/robots.ts`)
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://listerr.in/sitemap.xml
```

### Structured data (JSON-LD)

| Page type | Schema |
|---|---|
| Homepage | `Organization` + `WebSite` + `SoftwareApplication` |
| Pricing | `Product` + `Offer` per plan (priceCurrency `INR`) |
| Blog index | `Blog` + `BreadcrumbList` |
| Blog article | `BlogPosting` + `Person` (author) + `BreadcrumbList` |
| Case study | `Article` + `Organization` (customer) |
| FAQ sections | `FAQPage` |
| vs Storyly | `FAQPage` (each row → Q/A) |
| All sub-pages | `BreadcrumbList` |

### Performance budgets (Core Web Vitals)

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| TTFB | < 800ms |
| Total JS (initial) | < 200KB gzipped |
| Hero image | AVIF, < 100KB |

### Image optimisation
- `next/image` everywhere
- AVIF + WebP fallback
- Explicit width/height (no layout shift)
- Lazy loading except hero
- Responsive `sizes` for every image

### Font loading
- `next/font/google` (Plus Jakarta Sans) with `display: 'swap'` and `preload: true`
- Subset to latin (no Devanagari unless needed for UI Hindi text)

## CTA hierarchy (§24)

| Level | Button label | Target |
|---|---|---|
| Primary (sitewide) | `Start Free Trial →` | Free account signup, no credit card |
| Secondary | `Book a Demo` | Calendly booking for personalised walkthrough |
| AI-specific | `Try Listerr AI` | Separate AI demo flow / text+voice sandbox |
| Shopify | `Get the Shopify App` | Shopify App Store install link |
| Network | `Join as Creator / Brand` | `/network/apply` application form |
| Storyboard | `Create Your First Story Free` | Storyboard free tier signup |

### CTA placement rules
- Every page has **exactly one primary CTA** above the fold
- Secondary CTA always visible alongside primary
- Bottom-of-page CTA band on every page
- Sticky `Get Started` in nav (never disappears)
- On scroll past hero (>800px), optionally show a slim sticky bottom bar with CTA (mobile only)

### CTA copy rules
- Imperative verb first (`Start`, `Get`, `Book`, `Talk to`, `Create`)
- Specifies the outcome (`Free Trial` not just `Start`)
- Arrow `→` indicates forward action (primary only)
- Never "Click here", "Submit", "Learn more without target"

## Analytics events fired by CTAs

| Event | Trigger | Payload |
|---|---|---|
| `cta_click_primary` | Any primary CTA tapped | `page`, `position` (hero / band / nav) |
| `cta_click_secondary` | Any secondary CTA tapped | `page`, `position` |
| `signup_started` | Reaches signup page | `source_page` |
| `demo_booked` | Calendly confirms booking | `plan_interest` |
| `pricing_plan_clicked` | Plan card CTA | `plan_id` |
| `comparison_row_expanded` | vs Storyly row click | `row_id` |

Wired through GA4 + Meta Pixel via a shared `lib/analytics/track.ts` helper.
