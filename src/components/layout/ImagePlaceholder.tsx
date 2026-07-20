import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Stand-in for real photography, which design-file/ does not include yet.
 * Swap for an <img>/<picture> once photography is supplied — every usage
 * site only needs its className changed, no structural rework.
 */
export function ImagePlaceholder({
  label,
  className,
}: {
  label?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary via-secondary/60 to-muted text-muted-foreground",
        className
      )}
    >
      <ImageIcon className="size-8 opacity-50" strokeWidth={1.5} />
      {label ? <span className="text-xs opacity-60">{label}</span> : null}
    </div>
  )
}
