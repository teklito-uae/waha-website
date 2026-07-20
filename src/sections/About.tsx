import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Container } from "@/components/layout/Container"
import { ImagePlaceholder } from "@/components/layout/ImagePlaceholder"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { companyStats } from "@/data/stats"

export function About() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About Waha Interiors"
            title="We design interiors that feel like you."
            description="Waha Interiors is a full-service interior design studio based in the UAE. We believe that a well-designed space has the power to elevate the way you live, work, and feel."
          />

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Learn More About Us
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative">
          <ImagePlaceholder
            label="Studio photography"
            className="aspect-[4/3] w-full rounded-xl"
          />

          <div className="absolute -bottom-6 -right-6 flex gap-6 rounded-xl border border-border bg-card p-6 shadow-sm dark:border-brand-foreground/10">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl text-foreground dark:text-card-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground dark:text-card-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
