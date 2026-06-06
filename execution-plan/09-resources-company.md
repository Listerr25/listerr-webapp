# 09 — Resources, Company, Legal

## Resources

### Blog — `/blog` + `/blog/[slug]`

**Purpose:** SEO + thought leadership for keyword clusters in §24.

#### Index page (`/blog`)
- Hero with H1 "Listerr Blog — Commerce, Engagement, AI"
- Filter chips by category (Stories, AI, Shopify, Industry insight)
- Card grid (3-col desktop, 1-col mobile): cover image + category badge + title + excerpt + author + date
- Pagination (12 per page)
- Newsletter signup band at the bottom

#### Article page (`/blog/[slug]`)
- Hero: category, title, author with avatar, date, reading time
- Cover image (16:9, optimised AVIF)
- Long-form MDX content (max-width 65ch, line-height 1.7)
- TOC sidebar (sticky on desktop, top accordion on mobile) auto-generated from H2/H3
- Inline CTAs every 600–800 words
- Related articles (3 cards) at the end
- Author bio block
- Comments disabled (Phase 1); add Cusdis/Giscus in Phase 3 if needed
- JSON-LD: `BlogPosting` schema

#### Seed content (Phase 2)
At least 5 articles before launch:
1. "How to Add Stories to Your Shopify Store in 10 Minutes"
2. "AI Calling for D2C Brands in India: The Definitive Guide"
3. "Reducing Shopify Cart Abandonment with Smart Flows"
4. "Best Gamification Patterns for Indian E-Commerce"
5. "WhatsApp Order Automation in India: A 2026 Playbook"

(Keywords lifted directly from §24 long-tail cluster.)

---

### Case Studies — `/case-studies` + `/case-studies/[slug]`

#### Index page
- Filter by industry + by use case
- Card grid: brand logo, headline result, industry chip, 3 result chips
- "Read story →" link per card

#### Detail page
Structured template (data-driven):
- Brand logo + name + industry + size
- Hero: results headline (e.g. "+2.4x homepage CVR in 90 days")
- The Challenge (2–3 paragraphs)
- The Solution (which Listerr products used)
- The Results (3–6 metric tiles)
- Customer quote (pull-quote with attribution)
- "Want results like this?" CTA band
- JSON-LD: `Article` + `Organization` (customer brand) schemas

#### Seed content (Phase 2)
3 placeholder studies (real ones when product/customers ship):
- D2C Beauty (Seller Studio + Shopify + AI Calling)
- EdTech App (Gamification + Smart Flows)
- Media OTT (Reels + Customer Lists)

---

### Documentation — `/docs` + `/docs/[...slug]`

**Purpose:** Developer onboarding for SDK + REST API. Lower polish than marketing pages.

#### Structure
- Left sidebar (sticky): nested nav, search box at top
- Center column: MDX content max-width 70ch
- Right column: page TOC (desktop only)

#### Initial sections
- Getting Started (install, auth, first Story)
- SDKs (iOS, Android, React Native, Flutter, Web JS)
- REST API reference
- Webhooks
- Authentication & security
- Integrations (Shopify, WooCommerce, etc.)
- Listerr AI (calling, text, voice APIs)
- Changelog snippets

Phase 1 ships the **shell + Getting Started + iOS/Android/Web JS skeleton**. Full docs are
product-team responsibility but the chassis is here.

---

### Changelog — `/changelog` (P2)

Reverse-chronological list of releases.

Per entry: version, date, category badges (New / Improved / Fixed), bullet list.

Powered by MDX files in `content/changelog/*.mdx`.

RSS feed at `/changelog/rss.xml`.

---

## Company

### About — `/about`

Sections:
1. Hero: **"Building India's Commerce Engagement OS"**
2. Mission paragraph
3. Founding story (short)
4. Leadership grid (avatars + name + role + LinkedIn)
5. Investors / backers logo strip (if applicable)
6. Values (3–4 cards)
7. Stats (years, brands, GMV, team size)
8. CTA: `Join the team` → `/careers`

### Careers — `/careers` (P2)

- Hero with values rapid-fire
- Open roles list (grouped by department)
- Each role: title, location (Remote / Bengaluru / Mumbai etc.), employment type, link to JD
- "No open role fits? Send us your CV" form
- Powered by an Airtable/Greenhouse embed or static MDX in Phase 1

### Contact — `/contact`

Sections:
1. Hero: "Talk to the Listerr team"
2. 4-card grid:
   - Sales: `sales@listerr.in`
   - Support: `support@listerr.in`
   - Partnerships: `partnerships@listerr.in`
   - Press: `press@listerr.in`
3. Contact form (name, work email, company, message, area-of-interest dropdown)
4. Office addresses (India HQ)
5. Map embed (optional)
6. Social links

Form posts to managed service (Resend/Formspark). Phase 1 acceptable to use Google Form
embed as fallback (matches current repo's approach).

### Partners — `/partners` (P2)

- Hero: "Build with and for Listerr"
- Partner categories: Agency Partners, Technology Partners, Solution Partners, Resellers
- Featured partner logos
- "Become a Partner" application CTA
- Partner directory (P3)

### Press Kit — `/press-kit` (P2)

- Logo downloads (light/dark, SVG/PNG)
- Brand guidelines link (PDF)
- Founder photos
- Product screenshots
- Boilerplate copy
- Recent press coverage

---

## Legal

### Privacy Policy — `/privacy` (P0)

DPDP-compliant. Sections required:
- Data collected
- Purposes of processing
- Grounds for processing
- Sharing with third parties
- Cross-border transfer (if any)
- User rights under DPDP (access, correction, erasure, grievance)
- Data retention
- India data residency commitment
- Cookies (link to /cookies)
- Contact: Grievance Officer with India mailing address + email
- Last updated date

Layout: sticky left-side TOC, max-width 70ch reading column, anchor links to each section.

### Terms of Service — `/terms` (P0)

Standard SaaS ToS with India jurisdiction. Sections:
- Acceptance
- Account / subscription
- Acceptable use
- IP / licence
- Confidentiality
- Payment & taxes (mention GST, INR)
- Liability limits
- Indemnification
- Termination
- Governing law (India)
- Dispute resolution
- Contact

### Cookie Policy — `/cookies` (P1)

- What cookies are
- Cookies used (categorised: necessary, analytics, marketing)
- How to manage
- Link to consent banner settings
- Last updated date

### Cookie consent banner

Implemented as a footer-pinned banner on first visit. Categories: necessary (always on),
analytics (toggle), marketing (toggle). Stored in `localStorage` + cookie. GA4 + Pixel
respect the choice.
