# AGENTS.md

Portfolio for Yash Kamble. Next.js App Router, React 19, TypeScript, Tailwind v4,
Motion, shadcn-style UI on Base UI (`base-vega`), Tabler icons. Single-package
pnpm workspace.

## Hard rules

- **pnpm only.** Install root deps with `pnpm add <pkg> -w`. Never npm/yarn.
- **Icons: `@tabler/icons-react` only.** Never import `lucide-react` — the
  installed `1.23.0` is broken and fails `pnpm build`.
- Cross-folder imports use `@/`. Relative imports only for siblings within a
  feature.
- Files/folders **kebab-case**. Components **PascalCase**. Hooks `useX`.
  Types `TX`. Constants `UPPER_SNAKE`. Handlers `handleX`.
- Add `"use client"` only for hooks, browser APIs, or Motion.
- Style with Tailwind utilities + `cn()` from `@/lib/utils`. Use tokens from
  `app/globals.css`; no CSS modules/styled-components.
- Do not add page widths or nav to `app/layout.tsx` — it is global-only.

## Commands and definition of done

```bash
pnpm dev
pnpm lint
npx tsc --noEmit
pnpm build
```

No test suite exists. Done = lint + typecheck (+ `pnpm build` when routes,
layouts, or shared components changed). After moving `app/` routes, run
`rm -rf .next/types` or a build so stale route types stop breaking `tsc`.

## Structure

```text
app/
  layout.tsx              # fonts, providers, analytics, transition frame
  globals.css             # Tailwind v4 + light/dark tokens
  (site)/                 # pages WITH navbar + designation
    layout.tsx            # chrome + max-w-2xl container
    page.tsx              # "/"
    about/ experience/ work/[id]/
  crafts/                 # standalone; own sidebar shell, no site chrome
    layout.tsx  page.tsx
common/                   # constants.ts (data + registries), types.ts
components/
  ui/                     # shadcn/Base UI primitives
  navigation/ layouts/ icons/
  dotted-underline.tsx
features/<feature>/       # components + index.ts public surface
hooks/ lib/ public/work-images/
```

Route groups `(name)` do not affect URLs. `(site)` exists to inherit chrome.

## Where to put things

| Task | Location |
| --- | --- |
| Page with navbar + designation | `app/(site)/<route>/page.tsx` |
| Standalone/full-bleed page | `app/<route>/page.tsx` + its own `layout.tsx` |
| Project/work data | `WORK` in `common/constants.ts` |
| Timeline data | `EXPERIENCES` in `common/constants.ts` |
| Nav links | `NAV_ROUTES` in `common/constants.ts` |
| Stack icons | `ICONS` registry, referenced by key |
| Domain types | `common/types.ts` (`T` prefix) |

`WORK_NEWEST_FIRST` auto-sorts by `updatedAt`. Work images live in
`public/work-images/<project>/`; remote hosts need `next.config.ts`.

## Reusable components — reuse, do not duplicate

| Component | Use |
| --- | --- |
| `SectionWrapper` | Section label + spacing |
| `TransitionWrapper` | Route blur/fade frame |
| `Navbar`, `NavList` | Site chrome / route links |
| `CraftsSidebar` | `/crafts` sidebar shell |
| `Sidebar*`, `Sheet*`, `Button`, `Input`, `Separator`, `Skeleton`, `Tooltip` | UI primitives in `components/ui/` |
| `DottedUnderline` | Hand-drawn link underline |
| `StatusPing` | Pulsing availability dot |
| `TooltipStack`, `TechStackSection` | Icon grid with tooltips |
| `CopyEmail` | Copy-to-clipboard email |
| `WorkCard`, `WorkRow`, `WorkSection` | Project presentation |
| `ExperienceSection`, `ExperienceStack` | Timeline / stack icons |
| `Designation` | Avatar + name/role header |

Feature modules export their public surface from `features/<feature>/index.ts`.

## Adding shadcn components

Style is `base-vega` on Base UI (`@base-ui/react`), **not Radix**. The CLI emits
wrong imports for this repo; after running it, rewrite:

| Generated | Replace with |
| --- | --- |
| `from "cn"` | `from "@/lib/utils"` |
| `@/registry/base-vega/ui/*` | `@/components/ui/*` |
| `@/registry/base-vega/hooks/*` | `@/hooks/*` |
| `IconPlaceholder` / lucide icons | Tabler equivalents |

Do not install the `cn` npm package.

## Styling language

Neutral palette; `font-mono` for meta labels/dates; `font-instrument-serif` for
accents; muted gray body copy. Dark surfaces are opt-in with the `dark` class on
a subtree (see `/crafts`).

## Commits

- Conventional Commits: `<type>(<scope>): <summary>`; imperative, lowercase.
  Types: `feat fix refactor perf style docs chore build test`.
- **"commit all changes" means split into logical, coherent commits** (routing,
  feature, docs, etc.), not one giant commit. Stage explicit paths.
- Inspect `git status`, `git diff`, `git log --oneline -10` first.
- Never commit `.env`, secrets, `node_modules/`, `.next/`. No amend, force-push,
  or push unless explicitly requested.
