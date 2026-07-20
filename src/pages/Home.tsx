import { About } from "@/sections/About"
import { BlogHighlights } from "@/sections/BlogHighlights"
import { CtaBanner } from "@/sections/CtaBanner"
import { Hero } from "@/sections/Hero"
import { Projects } from "@/sections/Projects"
import { Services } from "@/sections/Services"
import { Testimonials } from "@/sections/Testimonials"
import { TrustStrip } from "@/sections/TrustStrip"

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <BlogHighlights />
      <CtaBanner />
      <TrustStrip />
    </>
  )
}
