import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Container } from "@/components/layout/Container"
import { LeafMotif } from "@/components/layout/LeafMotif"
import { companyStats } from "@/data/stats"
import ctaBackground from "@/assets/images/bg-elements/waha-logo-pattern-with-dark-bg.webp"

export function CtaBanner() {
  return (
    <Container className="py-16 md:py-24">
      <div
        className="relative overflow-hidden rounded-2xl bg-brand bg-cover bg-center px-8 py-12 text-brand-foreground md:rounded-3xl md:px-14 md:py-16"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        <LeafMotif className="pointer-events-none absolute -bottom-4 -left-4 size-32 md:size-40" />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Let's create a space
              <br />
              that's uniquely yours.
            </h2>
            <p className="mt-3 max-w-sm text-brand-foreground/80">
              Tell us about your project and our team will get back to you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            {companyStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-brand-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}

            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-foreground px-7 text-sm font-medium text-brand transition-colors hover:bg-brand-foreground/90"
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
