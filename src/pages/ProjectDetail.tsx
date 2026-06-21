import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Calendar, Maximize } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/AnimatedSection'
import { projects } from '@/data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const related = projects.filter((p) => p.slug !== slug).slice(0, 3)

  if (!project) {
    return (
      <div className="min-h-screen hero-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-sora text-3xl hero-text mb-4">Project not found</h1>
          <Link to="/projects" className="font-inter text-lime-cream/60 hover:text-lime-cream flex items-center gap-2 justify-center">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Back link */}
      <div className="hero-bg pt-24 pb-8">
        <div className="container-waha">
          <Link to="/projects" className="inline-flex items-center gap-2 font-inter text-sm text-lime-cream/60 hover:text-lime-cream transition-colors">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-bg pb-0">
        <div className="container-waha pb-16">
          <div className="aspect-[16/7] overflow-hidden rounded-sm bg-pine/30">
            {project.heroImage ? (
              <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-sora text-lime-cream/30">Image coming soon</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-waha">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Brief */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Badge variant="outline" className="mb-4 border-pine/20 text-pine">{project.category}</Badge>
                <h1 className="font-sora font-bold text-3xl md:text-4xl text-foreground mb-6">{project.title}</h1>
                <p className="font-inter text-base text-muted leading-relaxed">{project.brief}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-inter text-xs bg-accent-light text-pine px-3 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Meta */}
            <AnimatedSection delay={0.15} className="space-y-5">
              <div className="border border-border rounded-sm p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-pine mt-0.5 shrink-0" />
                  <div>
                    <p className="font-inter text-xs text-muted-foreground mb-0.5">Location</p>
                    <p className="font-sora font-semibold text-sm text-foreground">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-pine mt-0.5 shrink-0" />
                  <div>
                    <p className="font-inter text-xs text-muted-foreground mb-0.5">Year</p>
                    <p className="font-sora font-semibold text-sm text-foreground">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Maximize size={16} className="text-pine mt-0.5 shrink-0" />
                  <div>
                    <p className="font-inter text-xs text-muted-foreground mb-0.5">Area</p>
                    <p className="font-sora font-semibold text-sm text-foreground">{project.area}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Image Carousel */}
          {project.images.length > 0 && (
            <AnimatedSection className="mt-16" delay={0.2}>
              <h2 className="font-sora font-semibold text-xl text-foreground mb-6">Project Gallery</h2>
              <Carousel opts={{ align: 'start', loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                  {project.images.map((img, i) => (
                    <CarouselItem key={i} className="pl-4 md:basis-1/2">
                      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-accent-light">
                        <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex gap-2 mt-4">
                  <CarouselPrevious className="relative left-0 translate-y-0 border-pine/20 text-pine hover:bg-pine hover:text-lime-cream" />
                  <CarouselNext className="relative right-0 translate-y-0 border-pine/20 text-pine hover:bg-pine hover:text-lime-cream" />
                </div>
              </Carousel>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-card">
          <div className="container-waha">
            <h2 className="font-sora font-bold text-2xl text-foreground mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/projects/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm bg-accent-light">
                    {p.heroImage ? (
                      <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-pine/10 flex items-center justify-center">
                        <span className="text-pine/30 text-xs">Photo coming soon</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-sora font-semibold text-foreground mt-3 group-hover:text-pine transition-colors">{p.title}</h3>
                  <p className="font-inter text-xs text-muted-foreground mt-0.5">{p.category} · {p.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
