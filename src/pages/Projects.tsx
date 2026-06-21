import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'

type Category = 'All' | 'Residential' | 'Commercial' | 'Landscape'
const categories: Category[] = ['All', 'Residential', 'Commercial', 'Landscape']

export default function ProjectsPage() {
  const { t } = useTranslation()
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20">
        <div className="container-waha">
          <AnimatedSection>
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-lime-cream/50">
              {t('projects.label')}
            </span>
            <h1 className="font-sora font-bold text-4xl md:text-6xl hero-text mt-4 mb-6">
              {t('projects.headline')}
            </h1>
            <p className="font-inter text-lime-cream/60 text-lg max-w-xl">
              {t('projects.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-background">
        <div className="container-waha">
          {/* Filter tabs */}
          <AnimatedSection className="flex gap-3 flex-wrap mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-inter text-sm px-5 py-2 rounded-sm border transition-all ${
                  active === cat
                    ? 'bg-pine text-lime-cream border-pine'
                    : 'border-border text-muted-foreground hover:border-pine/40'
                }`}
              >
                {t(`projects.${cat.toLowerCase()}`)}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={(i % 3) * 0.08}>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-sm bg-accent-light aspect-[4/5]">
                    {project.heroImage ? (
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pine/5 to-pine/20 flex items-center justify-center">
                        <span className="font-sora text-sm text-pine/30">Photo coming soon</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-pine/70 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-6">
                      <div>
                        <p className="font-inter text-xs text-lime-cream/60 mb-1">{project.location} · {project.year}</p>
                        <h3 className="font-sora font-semibold text-lg text-lime-cream mb-3">{project.title}</h3>
                        <span className="inline-flex items-center gap-1.5 font-inter text-xs text-lime-cream/80">
                          {t('projects.viewProject')} <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-start justify-between">
                    <div>
                      <h3 className="font-sora font-semibold text-foreground group-hover:text-pine transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-inter text-xs text-muted-foreground mt-0.5">
                        {project.location} · {project.area}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-[10px] border-border text-muted-foreground shrink-0 mt-0.5">
                      {project.category}
                    </Badge>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-inter text-muted-foreground">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
