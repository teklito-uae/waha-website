import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Home, Building2, TreePine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import AnimatedSection from '@/components/AnimatedSection'
import { projects } from '@/data/projects'
import { localBusinessSchema } from '@/lib/schema'

const serviceIcons: Record<string, React.ElementType> = {
  Home,
  Building2,
  TreePine,
}

const stats = [
  { key: 'stat1', labelKey: 'stat1label' },
  { key: 'stat2', labelKey: 'stat2label' },
  { key: 'stat3', labelKey: 'stat3label' },
]

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── Hero ───────────────────────────────── */}
      <section className="relative min-h-screen hero-bg flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(236,242,168,0.04)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(74,103,65,0.15)_0%,_transparent_60%)]" />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#ecf2a8 1px, transparent 1px), linear-gradient(90deg, #ecf2a8 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="container-waha relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-lime-cream/20 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-lime-cream/60 animate-pulse" />
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-lime-cream/60">
              {t('hero.tagline')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sora font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl hero-text leading-[1.1] tracking-tight mb-6 text-balance"
          >
            {t('hero.headline')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-inter text-base md:text-lg text-lime-cream/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-lime-cream text-pine hover:bg-lime-cream/90 font-sora font-semibold tracking-wide rounded-sm px-8"
            >
              <Link to="/projects">{t('hero.cta1')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-lime-cream/30 text-lime-cream hover:bg-lime-cream/10 hover:border-lime-cream/60 font-sora font-semibold tracking-wide rounded-sm px-8"
            >
              <Link to="/contact">{t('hero.cta2')}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="font-inter text-xs tracking-[0.2em] text-lime-cream/30 uppercase">
            {t('hero.scroll')}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-lime-cream/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Philosophy ─────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container-waha">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Stats */}
            <AnimatedSection direction="left">
              <div className="grid grid-cols-3 gap-6">
                {stats.map(({ key, labelKey }, i) => (
                  <div key={key} className="text-center">
                    <div className="font-sora font-bold text-4xl md:text-5xl text-pine mb-2">
                      {t(`philosophy.${key}`)}
                    </div>
                    <div className="font-inter text-xs text-muted-foreground tracking-wide">
                      {t(`philosophy.${labelKey}`)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="right" delay={0.15}>
              <span className="font-inter text-xs tracking-[0.25em] uppercase text-muted-foreground">
                {t('philosophy.label')}
              </span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-foreground mt-3 mb-6">
                {t('philosophy.headline')}
              </h2>
              <p className="font-inter text-base text-muted leading-relaxed mb-4">
                {t('philosophy.body1')}
              </p>
              <p className="font-inter text-base text-muted leading-relaxed">
                {t('philosophy.body2')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Featured Projects Carousel ──────────── */}
      <section className="py-20 bg-card">
        <div className="container-waha">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-inter text-xs tracking-[0.25em] uppercase text-muted-foreground">
                {t('projects.label')}
              </span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-foreground mt-2">
                {t('projects.headline')}
              </h2>
            </div>
            <Link
              to="/projects"
              className="font-inter text-sm text-pine hover:text-sage flex items-center gap-2 link-underline shrink-0"
            >
              {t('projects.viewAll')} <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Carousel
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {projects.map((project) => (
                  <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link to={`/projects/${project.slug}`} className="block group">
                      <div className="relative overflow-hidden rounded-sm bg-accent-light aspect-[4/5]">
                        {project.heroImage ? (
                          <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-pine/10 to-pine/30 flex items-end p-6">
                            <span className="font-sora text-sm text-pine/40">
                              Photo coming soon
                            </span>
                          </div>
                        )}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-pine/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                          <div>
                            <p className="font-inter text-xs text-lime-cream/60 mb-1">
                              {project.category} · {project.location}
                            </p>
                            <h3 className="font-sora font-semibold text-lg text-lime-cream">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="font-inter text-xs text-muted-foreground mb-1">
                          {project.category} · {project.year}
                        </p>
                        <h3 className="font-sora font-semibold text-foreground group-hover:text-pine transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-2 mt-8">
                <CarouselPrevious className="relative left-0 translate-y-0 border-pine/20 text-pine hover:bg-pine hover:text-lime-cream" />
                <CarouselNext className="relative right-0 translate-y-0 border-pine/20 text-pine hover:bg-pine hover:text-lime-cream" />
              </div>
            </Carousel>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Teaser ─────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container-waha">
          <AnimatedSection className="text-center mb-14">
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-muted-foreground">
              {t('services.label')}
            </span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
              {t('services.headline')}
            </h2>
            <p className="font-inter text-muted max-w-xl mx-auto">
              {t('services.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'Home', titleKey: 'services.headline', label: 'Residential Design', desc: 'Full-service luxury villa and apartment interior design in Kasaragod and Kerala.', to: '/services' },
              { icon: 'Building2', label: 'Commercial Design', desc: 'Bespoke interiors for offices, retail, and hospitality spaces.', to: '/services' },
              { icon: 'TreePine', label: 'Landscape Design', desc: 'Outdoor living and garden environments rooted in Kerala\'s natural beauty.', to: '/services' },
            ].map((s, i) => {
              const Icon = serviceIcons[s.icon]
              return (
                <AnimatedSection key={s.label} delay={i * 0.1}>
                  <Card className="border-border hover:border-pine/30 transition-colors duration-300 rounded-sm group cursor-pointer h-full">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-sm bg-pine/8 flex items-center justify-center mb-6 group-hover:bg-pine/15 transition-colors">
                        <Icon size={22} className="text-pine" />
                      </div>
                      <h3 className="font-sora font-semibold text-lg text-foreground mb-3">
                        {s.label}
                      </h3>
                      <p className="font-inter text-sm text-muted leading-relaxed mb-5">
                        {s.desc}
                      </p>
                      <Link
                        to={s.to}
                        className="font-inter text-xs text-pine flex items-center gap-1.5 hover:gap-3 transition-all link-underline"
                      >
                        {t('services.learnMore')} <ArrowRight size={12} />
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────── */}
      <section className="hero-bg py-24">
        <div className="container-waha text-center">
          <AnimatedSection>
            <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl hero-text mb-4">
              {t('cta.headline')}
            </h2>
            <p className="font-inter text-lime-cream/60 mb-8 text-lg">
              {t('cta.subtitle')}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-lime-cream text-pine hover:bg-lime-cream/90 font-sora font-semibold tracking-wide rounded-sm px-10"
            >
              <Link to="/contact">{t('cta.button')}</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
