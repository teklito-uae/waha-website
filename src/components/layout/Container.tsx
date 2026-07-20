import type { ElementType, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface ContainerProps {
  as?: ElementType
  children: ReactNode
  className?: string
}

export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1400px] px-6 sm:px-8 md:px-10 lg:px-14",
        className
      )}
    >
      {children}
    </Tag>
  )
}
