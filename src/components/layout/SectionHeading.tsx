import { Asterisk } from "lucide-react"

import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  titleClassName?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleClassName,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <div
        className={cn(
          "flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-accent uppercase",
          align === "center" && "justify-center"
        )}
      >
        <Asterisk className="size-3.5" strokeWidth={2.5} />
        <span>{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "mt-3 font-display text-4xl font-medium leading-[1.1] text-foreground md:text-5xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
