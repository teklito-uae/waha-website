import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { serviceAreaKeywords } from "@/data/serviceAreas"
import { cn } from "@/lib/utils"

export function ServiceAreas() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="py-14 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Where We Work"
          title="Interior Design Services Across the UAE & Kerala"
          description="From our studios in Bur Dubai and Kasaragod, we serve clients across the region with interior design, architecture, and visualization services."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="relative mt-6 sm:mt-10">
          <div
            className={cn(
              "flex flex-wrap justify-center gap-1.5 overflow-hidden sm:gap-2.5 sm:!max-h-none sm:overflow-visible",
              !expanded && "max-h-[118px]"
            )}
          >
            {serviceAreaKeywords.map((keyword) => (
              <Badge
                key={keyword}
                variant="outline"
                className="h-auto rounded-full border-border px-3 py-1.5 text-xs font-normal text-muted-foreground sm:px-4 sm:py-2 sm:text-sm"
              >
                {keyword}
              </Badge>
            ))}
          </div>

          {!expanded ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent sm:hidden" />
          ) : null}
        </div>

        <div className="mt-3 flex justify-center sm:hidden">
          <Button
            variant="ghost"
            size="sm"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
            className="text-muted-foreground"
          >
            {expanded ? "View Less" : "View More"}
            <ChevronDown
              className={cn("size-3.5 transition-transform", expanded && "rotate-180")}
            />
          </Button>
        </div>
      </Container>
    </section>
  )
}
