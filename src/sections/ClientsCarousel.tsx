import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

import { trustedClients } from "@/data/clients"

export function ClientsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true })

  return (
    <div className="flex items-center gap-6">
      <div className="hidden shrink-0 items-center gap-4 md:flex">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/60">
          Our Trusted Clients
        </span>
        <button
          type="button"
          aria-label="Previous client"
          onClick={() => emblaApi?.scrollPrev()}
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-brand-foreground/25 text-brand-foreground transition-colors hover:border-brand-foreground/60"
        >
          <ChevronLeft className="size-4" />
        </button>
      </div>

      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/60 md:hidden">
        Our Trusted Clients
      </span>

      <div ref={emblaRef} className="min-w-0 flex-1 overflow-hidden">
        <div className="flex">
          {trustedClients.map((client) => (
            <div key={client} className="mr-10 shrink-0 last:mr-0 md:mr-14">
              <span className="whitespace-nowrap text-lg font-bold uppercase tracking-widest text-brand-foreground/50 transition-colors hover:text-brand-foreground/90">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Next client"
        onClick={() => emblaApi?.scrollNext()}
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-brand-foreground/25 text-brand-foreground transition-colors hover:border-brand-foreground/60"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  )
}
