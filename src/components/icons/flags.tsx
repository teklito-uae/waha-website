import type { SVGProps } from "react"

// Emoji flags fall back to plain "AE"/"IN" text on systems without a color-emoji
// font, so these are drawn as flat SVGs to render identically everywhere.
export function UaeFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 20" {...props}>
      <rect width="30" height="20" fill="#00732f" />
      <rect y="6.667" width="30" height="6.667" fill="#ffffff" />
      <rect y="13.333" width="30" height="6.667" fill="#000000" />
      <rect width="7.5" height="20" fill="#ff0000" />
    </svg>
  )
}

export function IndiaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 20" {...props}>
      <rect width="30" height="6.667" fill="#ff9933" />
      <rect y="6.667" width="30" height="6.667" fill="#ffffff" />
      <rect y="13.333" width="30" height="6.667" fill="#138808" />
      <circle cx="15" cy="10" r="2.2" fill="none" stroke="#000080" strokeWidth="0.3" />
      <circle cx="15" cy="10" r="0.4" fill="#000080" />
    </svg>
  )
}
