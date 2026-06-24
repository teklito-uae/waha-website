import { useTranslation } from 'react-i18next'
import AnimatedSection from '@/components/AnimatedSection'
import { Separator } from '@/components/ui/separator'
import { Shield, Zap, Heart, Star } from 'lucide-react'

const timeline = [
  { year: '2022', key: '2022' },
  { year: '2023', key: '2023' },
  { year: '2024', key: '2024' },
  { year: '2025', key: '2025' },
]

const values = [
  { key: 'serenity', icon: Heart },
  { key: 'precision', icon: Zap },
  { key: 'authenticity', icon: Shield },
  { key: 'excellence', icon: Star },
]

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20">
        <div className="container-waha">
          <AnimatedSection>
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-lime-cream/50">
              {t('about.label')}
            </span>
            <h1 className="font-sora font-bold text-4xl md:text-6xl hero-text mt-4 mb-6 leading-tight">
              {t('about.headline')}
            </h1>
            <p className="font-inter text-lime-cream/60 text-lg max-w-2xl leading-relaxed">
              {t('about.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-waha max-w-3xl">
          <AnimatedSection>
            <p className="font-inter text-lg text-muted leading-relaxed mb-5">
              WAHA Interiors was founded in Kasaragod, Kerala, with a single conviction: that beautiful, intentional design should be accessible to everyone in our community. We started small — one project, one family, one home at a time.
            </p>
            <p className="font-inter text-lg text-muted leading-relaxed mb-5">
              Today, we serve clients across Kasaragod, Mogral, Manjeshwar, and Kanhangad. Every project we take on is shaped by our deep understanding of Kerala's climate, culture, and architectural heritage.
            </p>
            <p className="font-inter text-lg text-muted leading-relaxed">
              The name "WAHA" means oasis — a place of calm, beauty, and refuge. That is what we strive to create for every client. Not just a decorated room, but a space that genuinely changes how you feel at home.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card">
        <div className="container-waha">
          <AnimatedSection className="mb-14">
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-muted-foreground">
              {t('about.timeline.label')}
            </span>
            <h2 className="font-sora font-bold text-3xl text-foreground mt-3">
              Our Journey
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
            <div className="space-y-12">
              {timeline.map(({ year, key }, i) => (
                <AnimatedSection key={year} delay={i * 0.1}>
                  <div className={`flex items-start gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="font-sora font-bold text-4xl text-pine/20 mb-1">{year}</div>
                      <p className="font-inter text-muted text-sm leading-relaxed">
                        {t(`about.timeline.${key}`)}
                      </p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-pine border-2 border-background -translate-x-1.5 mt-2" />
                    <div className="md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-waha">
          <AnimatedSection className="text-center mb-14">
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-muted-foreground">
              {t('about.values.label')}
            </span>
            <h2 className="font-sora font-bold text-3xl text-foreground mt-3">What Drives Us</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ key, icon: Icon }, i) => (
              <AnimatedSection key={key} delay={i * 0.1}>
                <div className="p-8 border border-border rounded-sm hover:border-pine/30 transition-colors group">
                  <div className="w-10 h-10 bg-pine/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-pine/20 transition-colors">
                    <Icon size={18} className="text-pine" />
                  </div>
                  <h3 className="font-sora font-semibold text-foreground mb-2">
                    {t(`about.values.${key}`)}
                  </h3>
                  <p className="font-inter text-sm text-muted leading-relaxed">
                    {t(`about.values.${key}Desc`)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-bg py-20">
        <div className="container-waha text-center">
          <AnimatedSection>
            <h2 className="font-sora font-bold text-3xl md:text-4xl hero-text mb-4">
              {t('cta.headline')}
            </h2>
            <p className="font-inter text-lime-cream/60 mb-8">{t('cta.subtitle')}</p>
            <a
              href="/contact"
              className="inline-block bg-lime-cream text-pine font-sora font-semibold px-10 py-3 rounded-sm hover:bg-lime-cream/90 transition-colors"
            >
              {t('cta.button')}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

