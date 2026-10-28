# AGENTS.md

Project guidance for coding agents working in this repository.

## Project overview

Personal portfolio for Yash Kamble. Next.js App Router, React 19, TypeScript,
Tailwind CSS v4, Motion, shadcn-style UI (Base UI primitives), and Tabler icons.

## Commands

Use **pnpm** (the repo is a single-package pnpm workspace; `packageManager` is
`pnpm@11.13.1`). Do not use npm/yarn for installs.

```bash
pnpm dev              # local dev server
pnpm lint             # eslint
npx tsc --noEmit      # typecheck (no package script)
pnpm build            # production build; also validates routes/types
pnpm add <pkg> -w     # install a root dependency (pnpm workspace root)
```

Before considering a task done, run `pnpm lint`, `npx tsc --noEmit`, and
`pnpm build` when the change touches routes, layouts, or shared components.
If you move `app/` routes, delete stale generated types (`rm -rf .next/types`)
or run a build so TypeScript stops referencing old paths.

## Folder structure

```text
app/
  layout.tsx                  # root shell: fonts, providers, transition frame
  globals.css                 # Tailwind v4 + design tokens (light/dark)
  not-found.tsx
  (site)/                     # route group: pages WITH navbar + designation
    layout.tsx                # chrome + max-w-2xl page container
    page.tsx                  # "/" home
    about/page.tsx
    experience/page.tsx
    work/page.tsx
    work/[id]/page.tsx
  crafts/                     # standalone area WITHOUT navbar/designation
    layout.tsx                # shadcn sidebar shell
    page.tsx                  # "/crafts"

common/
  constants.ts                # NAV_ROUTES, EXPERIENCES, WORK, ICONS registry
  types.ts                    # shared types (T-prefixed)

components/
  ui/                         # shadcn/Base UI primitives (button, sidebar, ...)
  navigation/                 # navbar, nav-list
  layouts/                    # page/section/transition wrappers
  icons/                      # brand SVG icons, one file per icon
  dotted-underline.tsx

features/                     # feature modules: components + local index.ts
  home/                       # home, designation, copy-email, status-ping
  work/                       # work-section, work-row, work-card
  experience/                 # experience, experience-stack
  tech-stack/                 # tech-stack, tooltip-stack
  crafts/                     # crafts-sidebar

hooks/                        # use-mobile, useCopyToClipboard
lib/                          # utils (cn), date formatters
public/                       # static assets, work images under work-images/
```

Route groups `(name)` do not affect URLs. `(site)` exists so the navbar and
designation are inherited automatically by every page inside it. Pages that
need a different chrome (like `/crafts`) live outside the group and provide
their own `layout.tsx`.

## Naming conventions

- **Folders and files: kebab-case** (`work-card.tsx`, `nav-list.tsx`,
  `use-copy-to-clipboard` style). Do not use PascalCase or snake_case filenames.
- **React components: PascalCase exports**, matching the file
  (`work-card.tsx` → `WorkCard`).
- **Hooks: camelCase with `use` prefix** (`useCopyToClipboard`). The existing
  `useCopyToClipboard.ts` file is an accepted exception; prefer kebab-case for
  new hook files (`use-mobile.ts`).
- **Types/interfaces: `T` prefix** for domain models (`TWork`, `TStack`,
  `TExperiences`). Local prop types can stay inline.
- **Constants: `UPPER_SNAKE_CASE`** (`NAV_ROUTES`, `WORK_NEWEST_FIRST`).
- **Event handlers: `handleX`**, booleans read as adjectives (`isActive`,
  `isMobile`).
- **Imports: `@/` alias** for cross-folder imports. Relative imports are only
  used inside the same feature or for local siblings.

## Creating pages and chrome

- New regular page: add it under `app/(site)/<route>/page.tsx`. It automatically
  gets the navbar + designation.
- New standalone/full-bleed page: place it outside `(site)` and add a
  `layout.tsx` if it needs its own shell.
- Keep `app/layout.tsx` limited to global concerns (fonts, providers, analytics,
  page transition frame). Do not add page-level widths or nav there.
- The `(site)` layout owns the `max-w-2xl mx-auto px-4` container.

## Reusable components

Prefer reusing these instead of duplicating markup:

| Component | Location | Use |
| --- | --- | --- |
| `SectionWrapper` | `components/layouts/section-wrapper.tsx` | Section label + spacing on home |
| `TransitionWrapper` | `components/layouts/transition-wrapper.tsx` | Route change blur/fade animation |
| `Navbar`, `NavList` | `components/navigation/` | Site chrome and route links |
| `CraftsSidebar` | `features/crafts/crafts-sidebar.tsx` | Full sidebar shell for `/crafts` |
| `Sidebar*`, `Sheet*`, `Button`, `Input`, `Separator`, `Skeleton`, `Tooltip` | `components/ui/` | shadcn-style primitives |
| `DottedUnderline` | `components/dotted-underline.tsx` | Hand-drawn link underline |
| `StatusPing` | `features/home/status-ping.tsx` | Pulsing availability dot |
| `TooltipStack` / `TechStackSection` | `features/tech-stack/` | Icon grid with tooltips |
| `CopyEmail` | `features/home/copy-email.tsx` | Copy-to-clipboard email affordance |
| `WorkCard`, `WorkRow`, `WorkSection` | `features/work/` | Project presentation |
| `ExperienceSection`, `ExperienceStack` | `features/experience/` | Timeline and stack icons |
| `Designation` | `features/home/designation.tsx` | Avatar + name/role header |

Feature modules export their public surface from a local `index.ts` when used
outside the feature.

## Styling

- Tailwind CSS v4 utilities in JSX; no CSS modules or styled-components.
- Use `cn()` from `@/lib/utils` to merge conditional classes.
- Design tokens live in `app/globals.css` (`:root` and `.dark`). Reuse tokens
  (`bg-background`, `text-muted-foreground`, `bg-sidebar`, etc.) for shadcn UI.
- Visual language: neutral palette, `font-mono` for meta labels/dates,
  `font-instrument-serif` for accents, muted gray body copy.
- Dark surfaces are opt-in per subtree with the `dark` class (see crafts layout).
- Client components require `"use client"` at the top. Keep pages/layouts as
  server components unless they use hooks, browser APIs, or Motion.

## UI library notes

- **Icons: use `@tabler/icons-react`.** `lucide-react@1.23.0` in this repo is
  broken (missing internal modules and fails `pnpm build`); do not import it.
- shadcn registry style is `base-vega` on Base UI (`@base-ui/react`), not Radix.
- The shadcn CLI currently emits `cn` npm imports and `@/registry/...` paths for
  this style. When adding registry components, rewrite:
  - `from "cn"` → `from "@/lib/utils"`
  - `@/registry/base-vega/ui/*` → `@/components/ui/*`
  - `@/registry/base-vega/hooks/*` → `@/hooks/*`
  - Replace `IconPlaceholder` / lucide icon imports with Tabler equivalents.
- Do not add the `cn` npm package.

## Content and data

- Add/edit projects in `WORK` (`common/constants.ts`). `WORK_NEWEST_FIRST` sorts
  by `updatedAt` automatically.
- Add/edit timeline entries in `EXPERIENCES`.
- Register stack icons in the `ICONS` object and reference them by key.
- Work images live in `public/work-images/<project>/`; remote images need a
  host entry in `next.config.ts`.
- Navigation links come from `NAV_ROUTES`.

## Git and commits

- Follow Conventional Commits: `<type>(<scope>): <summary>`.
  Types: `feat`, `fix`, `refactor`, `perf`, `style`, `docs`, `chore`, `build`,
  `test`. Summary is imperative, lowercase, and concise.
- **When asked to "commit all changes", split the work into logical, coherent
  commits instead of one giant commit.** Group by concern, for example:
  1. `refactor(routing): move site pages into (site) route group`
  2. `feat(crafts): add shadcn sidebar layout`
  3. `docs(agents): document project structure and conventions`
- Stage explicit paths per commit. Inspect `git status`, `git diff`, and
  `git log --oneline -10` first.
- Never commit `.env`, secrets, `node_modules/`, or `.next/`. Do not amend,
  force-push, or push unless explicitly requested.
- Keep commit history aligned with the existing style (see `git log`).
