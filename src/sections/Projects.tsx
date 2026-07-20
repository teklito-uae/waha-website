import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { Link } from "react-router-dom"

import { Container } from "@/components/layout/Container"
import { ImagePlaceholder } from "@/components/layout/ImagePlaceholder"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { featuredProjects } from "@/data/projects"

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Featured Projects" title="Spaces We're Proud Of" />

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-foreground underline-offset-4 hover:text-accent hover:underline"
            >
              View All Projects
              <ArrowRight className="size-4" />
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => emblaApi?.scrollPrev()}
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-accent"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => emblaApi?.scrollNext()}
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-accent"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-6 flex">
              {featuredProjects.map((project) => (
                <div
                  key={project.title}
                  className="group min-w-0 flex-[0_0_85%] pl-6 sm:flex-[0_0_60%] lg:flex-[0_0_40%]"
                >
                  <div className="overflow-hidden rounded-xl">
                    <ImagePlaceholder
                      label={project.title}
                      className="aspect-[4/3] rounded-xl transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between lg:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-foreground underline-offset-4 hover:text-accent hover:underline"
          >
            View All Projects
            <ArrowRight className="size-4" />
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-accent"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => emblaApi?.scrollNext()}
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-accent"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
