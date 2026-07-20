# Waha Interiors — Design Tokens (authoritative)

This is the source of truth for colors, type, spacing, motion, and brand assets.
Read this instead of re-deriving anything from the original reference screenshots —
they no longer need to be consulted for section work.

## Color (Tailwind utilities — defined in `src/index.css`)

Theme-aware tokens (swap automatically between light/dark via the `.dark` class,
toggled by `ThemeProvider`/`ThemeToggle`):

| Utility | Role |
|---|---|
| `bg-background` / `text-foreground` | Page base — stays the same white/cream + dark-ink pairing in **both** light and dark theme, by design (see note below) |
| `bg-background-alt` | Alternate section banding, `#FAF9F5` in both themes |
| `bg-card` / `text-card-foreground` | Card surfaces — light theme: white card on white page; dark theme: switches to forest green `#163526` with warm off-white text, the same look as `bg-brand` |
| `bg-primary` / `text-primary-foreground` | Primary buttons/interactive (pill-shaped) |
| `bg-secondary` / `text-secondary-foreground` | Secondary surfaces/fills |
| `bg-muted` / `text-muted-foreground` | Low-emphasis text, subtle backgrounds |
| `bg-accent` / `text-accent-foreground` | Muted gold `#B8A77A` — eyebrow labels, small asterisk icons, hover accents |
| `border-border` | Hairline 1px borders (already the default via `@layer base`) |
| `ring-ring` | Focus rings |

Fixed-brand tokens (**do not** swap with theme — CTA banner, Footer, and the
navbar's top info bar):

| Utility | Value |
|---|---|
| `bg-brand` | `#163526` forest green, constant in both themes |
| `bg-brand-alt` | `#122B1F`, constant — darker hover/pressed shade of `brand` |
| `text-brand-foreground` | `#F5F3EC` warm off-white, constant |

Exception: the navbar's top info bar (hours/phone/social row) uses `bg-brand`
in light theme but `dark:bg-brand-alt` in dark theme, so it visibly shifts
color when the theme toggles rather than blending into the (also-green) main
nav row below it.

Standard shadcn extras also available if a component needs them:
`popover`, `destructive`, `input`, `chart-1..5`, `sidebar*` (see `src/index.css`).
`popover`/`sidebar` follow `card` into forest green in dark theme too (dropdown
flyouts, the mobile nav sheet).

**Dark theme is intentionally scoped, not a full inversion.** The page canvas
(`background`/`background-alt`/`foreground`) is identical in light and dark —
only chrome and card-like surfaces (`Navbar`, `card`, `popover`, `sidebar`,
mobile nav `Sheet`) switch to the forest-green brand look. Components built
directly on top of `bg-card`/`bg-popover` (e.g. `Services.tsx`, `About.tsx`)
pair `text-foreground`/`text-muted-foreground` with a `dark:text-card-foreground`
/`dark:text-card-foreground/70` override so their text stays legible once the
card goes dark — do the same for any new card-style block rather than relying
on `text-foreground` alone.

## Typography

| Utility | Font | Use |
|---|---|---|
| `font-display` | Glorida (self-hosted, weights 100–900 + italics) | All H1–H3 headings |
| `font-sans` | Inter (Google Fonts, loaded in `index.html`) | Body copy, nav, buttons, forms — this is Tailwind's default so you rarely need to specify it explicitly |
| `font-arabic-display` | RH-Zak (self-hosted) | Arabic headings — future RTL phase only |
| `font-arabic-sans` | Cairo (self-hosted) | Arabic body text — future RTL phase only |

Heading scale used by `SectionHeading` (`src/components/layout/SectionHeading.tsx`):
H2 = `text-4xl md:text-5xl font-medium leading-[1.1]`. Hero H1 should go larger
(`text-5xl md:text-7xl`) — build it directly in `Hero.tsx`, `SectionHeading` is for
the standard section pattern (eyebrow + H2 + optional description), not the hero.

Eyebrow label pattern (small gold uppercase label with an asterisk icon) is already
built into `SectionHeading` — don't rebuild it by hand; compose it.

## Spacing / Layout

- Use `<Container>` (`src/components/layout/Container.tsx`) for horizontal max-width
  + padding on every section — don't hand-roll `mx-auto max-w-*` again. It's
  `max-w-[1400px]` with responsive padding up to `lg:px-14` (56px) — deliberately
  narrower than common laptop viewport widths (1440–1512px) so the layout reads as
  a genuinely centered/contained layout with visible outer margins, not a fluid
  full-bleed one, even on a 14" laptop.
- Section vertical rhythm: `py-24 md:py-32 lg:py-36` as the default for a full section
  wrapper (adjust down for tighter sections like the trusted-clients strip).
- 8px base spacing scale — stick to Tailwind's default spacing scale (which is
  already 4px-based/multiples), avoid arbitrary pixel values unless matching a
  specific reference measurement.

## Radius & Borders

- Buttons: pill (`rounded-full`).
- Cards: `rounded-lg` (`--radius: 1rem` maps `rounded-lg` → 1rem). Use `rounded-xl`
  for larger feature cards/images.
- Hero image / any large architectural photo block: asymmetric large radius, e.g.
  `rounded-tl-none rounded-tr-[4rem] rounded-br-[4rem] rounded-bl-none` (adjust per
  composition) — not uniform on all four corners.
- No heavy shadows. `shadow-sm` at most, only on hover.

## Motion — minimal (per brand direction)

- No page-wide scroll-triggered stagger reveals.
- Hero only: a single fade+8px-translate-up on mount (~300ms ease-out) — use
  `framer-motion`'s `initial`/`animate` on the hero text block only, not every section.
- Hover states: short (~150–200ms) — underline/opacity on links, `hover:border-accent`
  on service cards, `hover:scale-[1.02]` on project images. Use plain Tailwind
  `transition-*` utilities for these; reserve `framer-motion` for the one hero
  entrance and nothing else unless a later spec explicitly asks for more.
- Theme toggle already has a 150ms color transition on `body` — don't add more.

## Brand assets (`src/assets/`)

| Import path | Use |
|---|---|
| `assets/images/wordmark/waha-logo-word-mark-golden-color.webp` | Full lockup on **light** backgrounds |
| `assets/images/wordmark/waha-logo-word-mark-light-green.webp` | Full lockup on **dark** backgrounds (footer, CTA, and dark theme navbar) |
| `assets/images/icons/waha-logo-icon-dark-green.webp` | Icon-only mark on **light** backgrounds (mobile compact navbar) |
| `assets/images/icons/waha-logo-icon-light-green.webp` | Icon-only mark on **dark** backgrounds |
| `assets/images/icons/waha-logo-icon-green.webp` | Hover/active state variant |
| `assets/images/bg-elements/bg-element-shape-outlined.webp` | Oversized low-opacity watermark (e.g. behind Hero text) |
| `assets/images/bg-elements/patterned-line/*-green.webp` / `*-light-green.webp` | Decorative divider strip on **light** sections |
| `assets/images/bg-elements/patterned-line/*-white.webp` | Decorative divider strip on **dark** sections |
| `assets/images/bg-elements/service-card-bg.webp` | Dark card background (baked-in asterisk mark + URL) for the "View all services" card in the Services carousel |
| `components/layout/LeafMotif.tsx` | Original SVG line-art branch motif for the CTA banner corner (no source asset existed for this) |

**No client logos, and no interior/project photography were supplied.** Use:
- `src/data/clients.ts` — plain client name strings, render as styled wordmark text
  (letter-spaced uppercase, `text-foreground/60`), not image placeholders.
- `components/layout/ImagePlaceholder.tsx` — for every hero/about/project photo slot.
  It's a drop-in `<div>` (gradient + icon), sized entirely by the `className` you pass
  (e.g. `className="aspect-[4/5] rounded-xl"`). Swapping in real photography later is
  a one-line change per usage site.

## Icons

`lucide-react`. The small asterisk glyph used throughout (eyebrow labels, "Additional
Services" card) is the `Asterisk` icon, not a cropped copy of the logo file — this
keeps it crisp at any size and recolorable via `text-*` utilities.
