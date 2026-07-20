import { motion } from "framer-motion"
import { ArrowRight, Asterisk } from "lucide-react"

import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { ClientsCarousel } from "@/sections/ClientsCarousel"
import heroImage from "@/assets/images/hero/waha-hero-luxury-living-room.webp"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[62vh] flex-col overflow-hidden sm:min-h-[75vh] md:min-h-[92vh]">
      <img
        src={heroImage}
        alt="Sunlit modern living room with a grey sofa, warm wood coffee table and a brass arc lamp"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/35 to-black/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/10 to-transparent"
      />

      <Container className="relative flex flex-1 flex-col justify-center gap-6 pt-14 pb-10 md:gap-8 md:pt-24 md:pb-16 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            <Asterisk className="size-3.5" strokeWidth={2.5} />
            <span>Redefining Your Space</span>
          </div>

          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-brand-foreground md:text-7xl">
            <span className="font-bold">Designing Spaces</span>
            <br className="hidden sm:block" />
            <span className="font-medium">That Inspire Life.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-brand-foreground/80">
            At Waha Interiors, we create timeless, functional and beautiful
            spaces that reflect who you are.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button className="h-12 rounded-full px-7 text-sm">
              Explore Our Work
            </Button>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-foreground underline-offset-4 hover:underline"
            >
              Our Services
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </Container>

      <div className="relative border-t border-brand-foreground/15 bg-black/20 py-6 backdrop-blur-md md:py-7">
        <Container>
          <ClientsCarousel />
        </Container>
      </div>
    </section>
  )
}
