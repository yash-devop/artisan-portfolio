# SEO

Portfolio SEO setup for `https://portfolio.emberbuild.in`.

Primary positioning: **Design Engineer / Full Stack Engineer** based in India.

## Decisions

- Production domain: `https://portfolio.emberbuild.in`
- Indexed: homepage and crafts content
- Removed: empty `/about` page
- Placeholder craft pages: `noindex, follow` until they have real content
- Search Console and Bing submission: deferred until after deploy

## Status

| Section | Status |
| --- | --- |
| 1. SEO foundation | Done |
| 2. Route metadata and rendering | Done |
| 3. Crafts indexing | Done |
| 4. Sitemap, robots, manifest | Done |
| 5. On-page semantics | Done |
| 6. Structured data | Done |
| 7. Images and performance | Done |
| 8. Validation | Done |
| 9. Search Console / Bing | Pending external setup |

---

## Section 1 — SEO foundation

**Files**

- `lib/seo.ts`
- `app/layout.tsx`
- `app/(site)/layout.tsx`
- `app/(site)/page.tsx`

**Implemented**

- Shared `SITE_URL`, `SITE_NAME`, `SITE_TITLE`, `SITE_DESCRIPTION`, `SITE_KEYWORDS`, `SOCIAL_LINKS`, `DEFAULT_OG_IMAGE`, and `absoluteUrl()`.
- Root `metadataBase` uses `SITE_URL`.
- Title template: `%s - Yash Kamble`.
- Default title, description, keywords, authors, creator, publisher, and category.
- OpenGraph and Twitter defaults using `/og-image.png`.
- Crawl directives:
  - `index: true`
  - `follow: true`
  - `max-image-preview: large`
  - `max-snippet: -1`
  - `max-video-preview: -1`
- Verification env support:
  - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
  - `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- Removed the inherited root canonical.
- Homepage canonical set to `/`.
- Site chrome wrapped in `<header>`; page content in `<main>`.

**Guardrail**

Do not add `alternates.canonical` to the root layout or `app/crafts/layout.tsx`. Canonicals must be set per route.

---

## Section 2 — Route metadata and rendering

**Files**

- `app/(site)/experience/page.tsx`
- `app/(site)/work/page.tsx`
- `app/(site)/work/[id]/page.tsx`
- `features/work/index.ts`
- `features/work/work-list.tsx`
- `features/work/work-detail.tsx`

**Implemented**

- `/experience`: unique title, description, and canonical.
- `/work`: server page with unique metadata; Motion list moved to `WorkList`.
- `/work/[id]`:
  - Server page with `generateMetadata()`.
  - `generateStaticParams()` from `WORK`.
  - `dynamicParams = false`.
  - Invalid project IDs return `notFound()`.
  - Animated UI moved to `WorkDetail`.
  - Per-project title, description, canonical, OpenGraph, and Twitter metadata.
- Added `features/work/index.ts` as the feature public surface.
- Removed `app/(site)/about/page.tsx`.

---

## Section 3 — Crafts indexing

**Files**

- `app/crafts/page.tsx`
- `app/crafts/layout.tsx`
- `lib/crafts-seo.ts`
- Craft route `page.tsx` files
- `app/crafts/(challenges)/30days/day2-switch/layout.tsx`
- `app/crafts/(challenges)/30days/day5-tasklist/layout.tsx`

**Implemented**

- Replaced the `/crafts` redirect with a real landing page listing all craft routes.
- Added unique title, description, canonical, OpenGraph, and Twitter metadata for every craft route.
- Added metadata layouts for the client-only Day 2 and Day 5 pages.
- Real craft pages are indexable.

**Noindex until content exists**

- `/crafts/button`
- `/crafts/code-block`
- `/crafts/package-installer`
- `/crafts/popover`
- `/crafts/modal`
- `/crafts/navigation-menu`

---

## Section 4 — Sitemap, robots, manifest

**Files**

- `app/sitemap.ts`
- `app/robots.ts`
- `app/manifest.ts`

**Implemented**

- Sitemap includes:
  - `/`
  - `/work`
  - `/experience`
  - `/work/1` through `/work/4`
  - `/crafts`
  - all indexable craft routes
- Placeholder craft pages are excluded from the sitemap.
- Work URLs use `updatedAt` as `lastModified`.
- `robots.txt` allows crawling and points to the sitemap.
- Manifest includes site name, description, start URL, display mode, colors, and favicon.

**Generated routes**

- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`

---

## Section 5 — On-page semantics

**Files**

- `app/(site)/layout.tsx`
- `app/not-found.tsx`
- `components/layouts/section-wrapper.tsx`
- `features/crafts/crafts-sidebar.tsx`
- `features/experience/experience.tsx`
- `features/home/designation.tsx`
- `features/home/home.tsx`
- `features/work/work-card.tsx`
- `features/work/work-detail.tsx`
- `features/work/work-list.tsx`
- `features/work/work-row.tsx`
- `features/work/work-section.tsx`

**Implemented**

- Shared `Designation` name and role changed from headings to `<p>`.
- Site chrome wrapped in `<header>`.
- Homepage has a visually hidden `<h1>`.
- Section labels are `<h2>`.
- `/work` has an `<h1>`.
- Work rows use `<h2>`; homepage work cards use `<h3>`.
- Work detail uses:
  - `<article>`
  - breadcrumb navigation
  - project `<h1>`
  - `<time dateTime>` for dates
  - semantic project-links `<nav>`
- Experience companies support `headingLevel="h2" | "h3"`.
- Nested `<button>` inside `<Link>` removed from homepage and work sections.
- Crafts content area uses `<main>`.
- 404 heading changed to `<h1>`.

**Intentionally skipped**

- No `<h1>` was added to `/experience`.
- No `<h1>` was added to craft demo pages.

---

## Section 6 — Structured data

**Files**

- `components/seo/json-ld.tsx`
- `lib/structured-data.ts`

**Implemented**

- Reusable JSON-LD renderer with `<` escaping.
- Schemas:
  - `Person`
  - `WebSite`
  - `ProfilePage`
  - `CollectionPage`
  - `ItemList`
  - `CreativeWork`
  - `BreadcrumbList`

**Route coverage**

| Route | Schema types |
| --- | --- |
| `/` | Person, WebSite, ProfilePage |
| `/work` | ItemList, BreadcrumbList |
| `/work/[id]` | CreativeWork, BreadcrumbList |
| `/experience` | BreadcrumbList |
| `/crafts` | CollectionPage, BreadcrumbList |

**Person schema includes**

- Name
- URL
- Job title
- Description
- Email
- GitHub, LinkedIn, and X profiles
- `knowsAbout`
- Country

---

## Section 7 — Images and performance

**Files**

- `features/work/work-card.tsx`
- `features/work/work-row.tsx`
- `features/work/work-detail.tsx`
- `next.config.ts`

**Implemented**

- Removed all `unoptimized` usage.
- Added descriptive alt text:
  - Project cards
  - Work rows
  - Project screenshots
- Added responsive `sizes`.
- Added `priority` to the first project screenshot.
- Removed the `console.log` from `work-card.tsx`.
- Enabled AVIF and WebP output in `next.config.ts`.

---

## Section 8 — Validation

**Commands**

```bash
pnpm lint
npx tsc --noEmit
pnpm build
```

**Verified**

- Lint passes.
- TypeScript passes.
- Production build passes.
- JSON-LD blocks parse successfully in generated HTML.
- `/work/[id]` is statically generated for projects 1–4.
- `/sitemap.xml`, `/robots.txt`, and `/manifest.webmanifest` are generated.
- Indexable pages have correct titles, canonicals, and robots directives.

**Still recommended after deploy**

- Lighthouse SEO and performance audit.
- PageSpeed Insights.
- Google Rich Results Test.
- Schema Markup Validator.
- Mobile usability check.

---

## Section 9 — Search Console and Bing

**Environment variables**

```bash
NEXT_PUBLIC_SITE_URL=https://portfolio.emberbuild.in
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_BING_SITE_VERIFICATION=
```

**After deploy**

1. Verify `portfolio.emberbuild.in` in Google Search Console.
2. Submit `https://portfolio.emberbuild.in/sitemap.xml`.
3. Request indexing for:
   - `/`
   - `/work`
   - `/work/1` through `/work/4`
   - `/crafts`
   - indexable craft pages
4. Repeat verification and sitemap submission in Bing Webmaster Tools.
5. Monitor:
   - queries and impressions
   - pages reported as “Crawled — currently not indexed”
   - Core Web Vitals
   - structured data errors

Do not commit verification tokens to the repository. Keep them in `.env` locally and in the Vercel environment settings.

---

## Pending copy alignment

The current code still uses “Frontend Developer” and “Frontend Engineer” in several places. If the final positioning is **Design Engineer / Full Stack Engineer**, update:

- `lib/seo.ts`
  - `SITE_DESCRIPTION`
  - `SITE_KEYWORDS`
  - `DEFAULT_OG_IMAGE.alt`
- `lib/structured-data.ts`
  - `jobTitle`
  - `ProfilePage.name`
- `features/home/home.tsx`
  - homepage intro copy
- `common/constants.ts`
  - experience roles where appropriate

Keep the positioning consistent across metadata, page copy, structured data, and social profiles.

---

## Key files

| File | Purpose |
| --- | --- |
| `lib/seo.ts` | Shared site metadata constants |
| `lib/crafts-seo.ts` | Crafts route metadata registry |
| `lib/structured-data.ts` | JSON-LD schema builders |
| `components/seo/json-ld.tsx` | JSON-LD renderer |
| `app/layout.tsx` | Root metadata |
| `app/sitemap.ts` | Sitemap |
| `app/robots.ts` | Robots rules |
| `app/manifest.ts` | Web manifest |
| `app/(site)/work/[id]/page.tsx` | Project metadata and static params |
| `app/crafts/page.tsx` | Crafts landing page |
