import { Container } from "@/components/layout/Container"
import { trustPoints } from "@/data/trust"

export function TrustStrip() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title}>
              <point.icon className="size-5 text-primary" />
              <h3 className="mt-3 font-display text-base text-foreground">{point.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
