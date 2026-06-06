# Development

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Default URL:

```text
http://localhost:3000
```

## Verify

```bash
npm run typecheck
npm run build
```

Combined:

```bash
npm run check
```

## Known Tooling Notes

- `npm run lint` uses the old `next lint` command and currently prompts for setup.
- `next.config.mjs` skips type and lint validation during `next build`; use
  `npm run typecheck` explicitly.
- Run `npm run build` and `npm run typecheck` sequentially. Running them in
  parallel can temporarily invalidate `.next/types` while Next regenerates build
  artifacts.

## Adding A New Marketing Page

1. Add a route under `app/`.
2. Prefer an existing template:
   - `SimpleMarketingPage`
   - `PlatformPage`
   - `UseCasePage`
   - `AIPage`
   - `IndustryPage`
3. Add metadata in the route file.
4. Add the route to `app/sitemap.ts`.
5. Run `npm run typecheck` and `npm run build`.

## Adding A New Shared Component

Place it in the closest domain folder:

- `components/site/`
- `components/primitives/`
- `components/marketing/`
- `components/platform/`
- `components/use-cases/`
- `components/ai/`
- `components/industry/`
- `components/pricing/`

Avoid adding new files directly under `components/`.
