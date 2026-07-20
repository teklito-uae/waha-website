import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Container } from "@/components/layout/Container"
import { LeafMotif } from "@/components/layout/LeafMotif"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { services, type Service } from "@/data/services"

const FEATURE_TITLE = "Interior Design"
const ACCENT_TITLES = new Set(["Design Consultation", "Documentation"])

// Open-source (Unsplash) photography standing in for real project photos.
const SERVICE_IMAGES: Record<string, string> = {
  "Interior Design":
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  "Architectural Design":
    "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=900&q=80",
  Renders:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  "Project Management":
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  "Custom Design":
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80",
  "Interior Styling":
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
}

// Explicit order so the two accent (photo-less) tiles land apart from each
// other once the grid auto-places them around the 2x2 feature card.
const GRID_ORDER = [
  "Architectural Design",
  "Renders",
  "Project Management",
  "Design Consultation",
  "Custom Design",
  "Interior Styling",
  "Documentation",
]

export function Services() {
  const feature = services.find((service) => service.title === FEATURE_TITLE)
  const rest = GRID_ORDER.map((title) =>
    services.find((service) => service.title === title)
  ).filter((service): service is Service => Boolean(service))

  if (!feature) return null

  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Design Solutions"
            description="From first sketch to final styling, here's a look at the core services we bring to every project."
          />

          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent"
          >
            View all services
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]">
          <FeatureCard service={feature} image={SERVICE_IMAGES[feature.title]} />

          {rest.map((service) =>
            ACCENT_TITLES.has(service.title) ? (
              <AccentCard key={service.title} service={service} />
            ) : (
              <PhotoCard key={service.title} service={service} image={SERVICE_IMAGES[service.title]} />
            )
          )}

          <ViewAllCard count={services.length} />
        </div>
      </Container>
    </section>
  )
}

function FeatureCard({ service, image }: { service: Service; image: string }) {
  return (
    <Link
      to="/services"
      className="group relative isolate block min-h-[420px] overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:col-span-2 sm:min-h-[460px] lg:col-span-2 lg:row-span-2 lg:min-h-0"
    >
      <img
        src={image}
        alt={service.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

      <span className="absolute left-6 top-6 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-md">
        <service.icon className="size-3.5" />
        Signature Service
      </span>

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
        <h3 className="font-display text-3xl text-white md:text-4xl">{service.title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80 md:text-base">
          {service.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.bullets.slice(0, 3).map((bullet) => (
            <span
              key={bullet}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur-sm"
            >
              {bullet}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Explore the service
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function PhotoCard({ service, image }: { service: Service; image: string }) {
  return (
    <Link
      to="/services"
      className="group relative isolate block min-h-[240px] overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl lg:min-h-0"
    >
      <img
        src={image}
        alt={service.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/0 transition-colors duration-500 group-hover:from-black/90" />
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

      <div className="absolute left-5 top-5 z-10 flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-0.5">
        <service.icon className="size-5" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <h3 className="font-display text-lg text-white">{service.title}</h3>
        <p className="mt-0 max-h-0 overflow-hidden text-xs leading-relaxed text-white/80 opacity-0 transition-all duration-500 ease-out group-hover:mt-1.5 group-hover:max-h-16 group-hover:opacity-100">
          {service.description}
        </p>
      </div>
    </Link>
  )
}

function AccentCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services"
      className="group relative isolate flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl bg-brand p-6 shadow-sm ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:ring-accent/40 lg:min-h-0"
    >
      <LeafMotif className="pointer-events-none absolute -bottom-6 -right-6 size-28 text-brand-foreground/10 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-6" />
      <div className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-accent/15 blur-2xl transition-transform duration-700 group-hover:scale-125" />

      <div className="relative z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-accent transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-6">
        <service.icon className="size-5" />
      </div>

      <div className="relative z-10">
        <h3 className="font-display text-xl text-brand-foreground">{service.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-brand-foreground/70">{service.description}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
          Learn more
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function ViewAllCard({ count }: { count: number }) {
  return (
    <Link
      to="/services"
      className="group relative isolate flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border-2 border-dashed border-border bg-muted/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:bg-accent/5 lg:min-h-0"
    >
      <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
        {count} Services
      </span>
      <div>
        <h3 className="font-display text-xl text-foreground">View All Services</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Styling, documentation, project management &amp; more.
        </p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
        Explore
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
