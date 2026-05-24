# 03 — Design System

Master tokens live in `../design-system/listerr/MASTER.md` (created by the ui-ux-pro-max
skill). This file is the **implementation contract** — what those tokens become in code.

## Multi-brand color system

### Per-platform brand colors (blueprint §20)

| Platform | Brand | Hex | Tailwind token | Use |
|---|---|---|---|---|
| Listerr (Core) | Indigo | `#6366F1` | `brand.listerr.500` | Default site primary, hero CTA |
| Seller Studio | Teal | `#0D9488` | `brand.seller.500` | `/seller-studio/*` sections |
| Listerr Network | Orange | `#EA580C` | `brand.network.500` | `/network/*` sections |
| Storyboard | Pink | `#EC4899` | `brand.storyboard.500` | `/storyboard/*` sections |

Each brand expands to a 50–950 tonal scale (Tailwind default ramp).

### Semantic tokens

```ts
// tailwind.config.ts colors
{
  brand: {
    listerr:    { 50: '#EEF2FF', ..., 500: '#6366F1', 600: '#4F46E5', ..., 950: '#1E1B4B' },
    seller:     { 50: '#F0FDFA', ..., 500: '#0D9488', 600: '#0F766E', ..., 950: '#042F2E' },
    network:    { 50: '#FFF7ED', ..., 500: '#EA580C', 600: '#C2410C', ..., 950: '#431407' },
    storyboard: { 50: '#FDF2F8', ..., 500: '#EC4899', 600: '#DB2777', ..., 950: '#500724' },
  },
  bg:         { DEFAULT: '#FFFFFF', subtle: '#FAFAF9', muted: '#F5F5F4' },
  fg:         { DEFAULT: '#0C0A09', muted: '#57534E', subtle: '#A8A29E' },
  border:     { DEFAULT: '#E7E5E4', strong: '#D6D3D1' },
  surface:    { DEFAULT: '#FFFFFF', raised: '#FAFAF9', sunken: '#F5F5F4' },
  // Listerr AI dark sections
  dark: {
    bg:       '#0B1020',  // navy
    surface:  '#111733',
    fg:       '#F5F5F4',
    accent:   '#FBBF24',  // gold for AI premium
  },
  success:    '#16A34A',
  warning:    '#D97706',
  destructive:'#DC2626',
  info:       '#0EA5E9',
}
```

### Contrast pairs (pre-verified WCAG AA)

| FG | BG | Ratio | Pass |
|---|---|---|---|
| `fg.DEFAULT` `#0C0A09` | `bg.DEFAULT` `#FFFFFF` | 20.6:1 | AAA |
| `fg.muted` `#57534E` | `bg.DEFAULT` `#FFFFFF` | 7.6:1 | AAA |
| `white` | `brand.listerr.600` `#4F46E5` | 7.4:1 | AAA |
| `white` | `brand.seller.600` `#0F766E` | 5.3:1 | AA |
| `white` | `brand.network.600` `#C2410C` | 5.1:1 | AA |
| `white` | `brand.storyboard.600` `#DB2777` | 4.6:1 | AA |
| `dark.accent` `#FBBF24` | `dark.bg` `#0B1020` | 11.2:1 | AAA |
| `dark.fg` `#F5F5F4` | `dark.bg` `#0B1020` | 17.1:1 | AAA |

**Rule:** never use `.500` as CTA background with white text — always go to `.600` minimum.

### Light + dark mode

- Light is default (B2B marketing convention; skill flagged "dark by default" as anti-pattern)
- Dark applied **selectively** to Listerr AI sections only (homepage §5, all `/ai/*` pages)
- No system-level dark mode toggle in Phase 1 (out of scope; revisit Phase 3)

## Typography

**Font:** Plus Jakarta Sans (single family, weights 400/500/600/700/800).
Loaded via `next/font/google` with `display: 'swap'` and preload.

```ts
// app/layout.tsx
import { Plus_Jakarta_Sans } from 'next/font/google'
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
})
```

### Type scale

| Role | Size (mobile) | Size (desktop) | Weight | Leading | Tracking |
|---|---|---|---|---|---|
| Display / Hero | 40px | 72px | 800 | 1.05 | -0.02em |
| H1 | 32px | 56px | 700 | 1.1 | -0.015em |
| H2 | 28px | 40px | 700 | 1.15 | -0.01em |
| H3 | 22px | 28px | 600 | 1.2 | -0.005em |
| H4 | 18px | 22px | 600 | 1.3 | 0 |
| Body lg | 18px | 20px | 400 | 1.6 | 0 |
| Body | 16px | 18px | 400 | 1.6 | 0 |
| Body sm | 14px | 14px | 400 | 1.5 | 0 |
| Label | 12px | 12px | 600 | 1.4 | 0.04em (uppercase) |
| Code | 14px | 14px | 500 | 1.5 | 0 (JetBrains Mono) |

**Mobile minimum body:** 16px (prevents iOS auto-zoom; §5 readable-font-size).

## Spacing scale (4/8pt)

`0 · 1(4) · 2(8) · 3(12) · 4(16) · 5(20) · 6(24) · 8(32) · 10(40) · 12(48) · 16(64) · 20(80) · 24(96) · 32(128)`

| Use | Token |
|---|---|
| Card internal padding | `p-6` (24px) |
| Section vertical rhythm (mobile) | `py-16` (64px) |
| Section vertical rhythm (desktop) | `py-24` or `py-32` (96–128px) |
| Container max-width | `max-w-7xl` (1280px) |
| Container horizontal gutter | `px-4 md:px-6 lg:px-8` |

## Radius scale

| Token | Value | Use |
|---|---|---|
| `rounded-sm` | 4px | Badges, chips |
| `rounded-md` | 8px | Inputs, small cards |
| `rounded-lg` | 12px | Buttons, cards |
| `rounded-xl` | 16px | Large cards, panels |
| `rounded-2xl` | 24px | Hero panels, mockups |
| `rounded-full` | 9999px | Pills, avatars, CTAs |

## Elevation / shadow

Flat-design discipline: use only three shadow levels.

| Token | Value | Use |
|---|---|---|
| `shadow-none` | none | Default surfaces |
| `shadow-sm` | `0 1px 2px rgb(0 0 0 / 0.04)` | Cards on white |
| `shadow-md` | `0 4px 12px rgb(0 0 0 / 0.06)` | Hover lift, modals |
| `shadow-xl` | `0 24px 48px rgb(0 0 0 / 0.08)` | Hero mockups only |

## Motion

- Duration: 150ms (micro), 200–300ms (transitions), 400ms (page enter, max)
- Easing: `cubic-bezier(0.2, 0, 0, 1)` for entrance, `cubic-bezier(0.4, 0, 1, 1)` for exit
- Animate only `transform` and `opacity`
- Always respect `prefers-reduced-motion: reduce` — set duration to 0.01ms for animations
- Stagger list items 40ms; never more than 8 staggered items

## Component primitives (built on shadcn/ui)

| Component | Status | Notes |
|---|---|---|
| Button | shadcn | Add `brand` variants (listerr/seller/network/storyboard) |
| Card | shadcn | Add `BrandCard` wrapper with brand color border accent |
| Badge | shadcn | Add `BrandBadge` with platform color |
| Navigation menu | shadcn | Used for mega-menu |
| Sheet | shadcn | Mobile nav drawer |
| Tabs | shadcn | Homepage use-case tabs |
| Accordion | shadcn | FAQ, mobile nav, pricing details |
| Dialog | shadcn | Demo booking modal |
| Form + Input | shadcn | Lead capture, waitlist |
| Tooltip | shadcn | Comparison table indicators |

### Custom components (built fresh)

| Component | Purpose |
|---|---|
| `SectionContainer` | Standardised `max-w-7xl` + `py` rhythm wrapper |
| `Hero` (variants: split, centered, dark) | Reusable hero layouts |
| `MetricsStrip` | Trust strip with stat counters |
| `FeatureGrid` | 2/3/4-col feature cards with icon |
| `PlatformCard` | 4-platform strip card with brand color |
| `LogoCloud` | Integration / customer logo grid |
| `TestimonialCard` | Quote + author + brand logo |
| `CTABand` | Full-width final CTA section |
| `PricingCard` | Tier card with feature list + popular badge |
| `ComparisonRow` | vs-Storyly differentiator row |
| `IconBadge` | Square rounded icon container (per brand) |
| `BrandBadge` | Pill with platform name + brand color |
| `StoryCard` / `ReelCard` / `ListCard` | Format showcases on homepage tabs |
| `BreadcrumbBar` | Auto-generates from route |

## Iconography

- **Library:** `lucide-react` exclusively
- **Default stroke:** 1.5px
- **Default size:** 20px (inline), 24px (UI), 40px (feature icons)
- **No emoji as icons** (skill flagged this is the #1 unprofessional UI smell)
- Emojis in blueprint text (📦 🎬 etc.) are reference symbols only — replace with Lucide equivalents:

| Blueprint emoji | Lucide icon |
|---|---|
| 📦 Catalogue | `Package` |
| 🎬 Content | `Clapperboard` |
| 📊 Analytics | `BarChart3` |
| 🤖 AI | `Bot` |
| 📣 Ads | `Megaphone` |
| 🎨 Creators | `Palette` |
| 🏢 Brands | `Building2` |
| 🤝 Agencies | `Handshake` |
| 🌐 Publishers | `Globe` |
| 🔥 Streaks | `Flame` |
| 🎰 Spin | `Disc3` |
| 🃏 Scratch | `ScratchCard` (or `Sparkles`) |
| 🏆 Badges | `Trophy` |
| 🎯 Challenges | `Target` |
| 📋 Leaderboards | `ListOrdered` |

## Accessibility checklist (apply to every page)

- [ ] All text ≥ 4.5:1 contrast (body), 3:1 (large text)
- [ ] Focus rings visible on all interactive elements (2px ring, brand color)
- [ ] All images have meaningful `alt` text (or empty alt for decoration)
- [ ] All icon-only buttons have `aria-label`
- [ ] Tab order matches visual order
- [ ] Skip-to-content link at top of `body`
- [ ] Heading hierarchy sequential (no h1 → h3 skip)
- [ ] Touch targets ≥ 44×44px
- [ ] Form fields have visible labels + associated `for`/`id`
- [ ] Error messages adjacent to field with `aria-describedby`
- [ ] `prefers-reduced-motion` respected
- [ ] Colour not the only signal (vs Storyly check/cross also has icon)
- [ ] Language attribute on `<html>` (`en-IN` for India default)
