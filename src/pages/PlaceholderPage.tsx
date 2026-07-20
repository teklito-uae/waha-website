import { Container } from "@/components/layout/Container"

/** Minimal stand-in for routes not yet built out (About, Services, Projects, Blog, Contact). */
export function PlaceholderPage({ title }: { title: string }) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-3 py-24 text-center">
      <h1 className="font-display text-4xl font-medium text-foreground">{title}</h1>
      <p className="text-muted-foreground">This page is coming soon.</p>
    </Container>
  )
}
