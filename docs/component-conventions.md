# Component Conventions (for section-builder agents)

Read this + `docs/design-tokens.md` before writing a section. You should not need to
open the original reference screenshots — everything visual you need is already
distilled into these two docs plus the section spec you were given.

## What already exists — reuse it, don't rebuild it

| Path | Exports | Purpose |
|---|---|---|
| `src/components/layout/Container.tsx` | `Container` | Max-width + gutter wrapper for every section |
| `src/components/layout/SectionHeading.tsx` | `SectionHeading` | Eyebrow (asterisk + gold uppercase label) + H2 + optional description |
| `src/components/layout/ThemeProvider.tsx` | `ThemeProvider`, `useTheme` | Already wraps the whole app in `App.tsx` — just call `useTheme()` if a component needs to branch on theme |
| `src/components/layout/ThemeToggle.tsx` | `ThemeToggle` | Sun/moon button, used in `Navbar` |
| `src/components/layout/LeafMotif.tsx` | `LeafMotif` | SVG branch motif, `CtaBanner` corner decoration |
| `src/components/layout/ImagePlaceholder.tsx` | `ImagePlaceholder` | Every photo slot until real photography exists |
| `src/lib/utils.ts` | `cn` | `clsx` + `tailwind-merge` — use for any conditional/merged className |
| `src/components/ui/*` | shadcn primitives | `button`, `badge`, `separator`, `accordion`, `navigation-menu`, `sheet` already installed. Run `npx shadcn@latest add <name>` for more (e.g. `carousel`, `dropdown-menu`) rather than hand-rolling |

## Data lives in `src/data/`, not in components

Every section takes **no props** — it imports its own typed content:

| File | Export | Used by |
|---|---|---|
| `data/nav.ts` | `primaryNavLinks`, `servicesNavLink`, `secondaryNavLinks` | `Navbar` |
| `data/clients.ts` | `trustedClients: string[]` | `ClientsCarousel` |
| `data/services.ts` | `services: Service[]`, `additionalServices` | `Services` |
| `data/projects.ts` | `featuredProjects: Project[]` | `Projects` |
| `data/stats.ts` | `companyStats: Stat[]` | `About`, `CtaBanner` |
| `data/trust.ts` | `trustPoints: TrustPoint[]` | `TrustStrip` |

If a section needs content not covered above, add it to the relevant `data/*.ts` file
(typed, exported) rather than inlining literals in the component.

## File & export conventions

- One component per file, **named export** matching the filename (e.g.
  `export function Hero()` in `Hero.tsx`) — matches every primitive built so far.
  No default exports except page-level route components if React Router prefers it
  (not required either way; stay consistent with the rest of the file).
- Sections live in `src/sections/`, are self-contained, and only depend on
  `components/layout/*`, `components/ui/*`, `data/*`, and `lib/utils`. They must
  **not** import from another file in `src/sections/` — that's what keeps them
  buildable in parallel.
- Responsive breakpoints: Tailwind defaults (`sm` 640 / `md` 768 / `lg` 1024 /
  `xl` 1280). Design for mobile-first, with the desktop layout (as described in the
  section spec) landing at `lg:`.

## Buttons

- Primary CTA: `<Button className="h-12 rounded-full px-7 text-sm">Label</Button>`
  (pill, `bg-primary`/`text-primary-foreground` from the `default` variant).
- Secondary CTA (text link + arrow, no pill): `<Button variant="link" className="h-auto p-0 text-sm">Label →</Button>`
  or a plain `<Link>`/`<a>` styled with `underline-offset-4 hover:underline` plus a
  Lucide `ArrowRight` icon — either is fine, prefer the shadcn `Button` when it's
  clearly a call-to-action, plain link markup when it's inline in a paragraph.

## Images

Until real photography/logos are supplied, every image slot is an
`ImagePlaceholder` sized via `className` (aspect ratio + radius). Don't invent
external image URLs (no Unsplash/placeholder services) — keep the swap-in for real
assets a pure one-line change per callsite.

## Icons

Import individually from `lucide-react` (`import { Armchair } from "lucide-react"`),
default `size-4`/`size-5`, recolor via `text-*` utilities. Services already carry
their icon component in `data/services.ts` (`service.icon`) — render it as
`<service.icon className="size-6 text-primary" />`, don't re-map icons by title
in the component.
