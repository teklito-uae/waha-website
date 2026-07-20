import { cn } from "@/lib/utils"

/**
 * Original brand-consistent line-art branch motif (no source asset was supplied
 * for this — see docs/design-tokens.md). Matches the stroke weight of the
 * waha-logo-patterned-line assets so it reads as part of the same family.
 */
export function LeafMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 140"
      fill="none"
      className={cn("text-brand-foreground/25", className)}
      aria-hidden="true"
    >
      <path
        d="M4 136C34 110 46 78 46 40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M46 40C46 40 20 36 14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M46 40C46 40 66 32 66 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M30 78C30 78 8 74 2 54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M30 78C30 78 52 72 54 50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 110C14 110 -6 104 -10 86"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 110C14 110 36 106 40 86"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
