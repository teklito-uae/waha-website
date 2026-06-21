import { useTranslation } from 'react-i18next'
import { Home, Building2, TreePine, CheckCircle2, Search, Lightbulb, Ruler, Package } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { services, faqs } from '@/data/services'
import { faqSchema } from '@/lib/schema'

const icons: Record<string, React.ElementType> = { Home, Building2, TreePine }

const processSteps = [
  { icon: Search, label: 'Discovery', desc: 'We listen deeply to understand your vision, lifestyle, and budget.' },
  { icon: Lightbulb, label: 'Concept', desc: 'We present mood boards, space plans, and material palettes for your approval.' },
  { icon: Ruler, label: 'Design', desc: 'Detailed drawings, specifications, and sourcing are completed.' },
  { icon: Package, label: 'Delivery', desc: 'We coordinate execution and hand over your finished space.' },
]

export default function ServicesPage() {
  const { t } = useTranslation()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="hero-bg pt-32 pb-20">
        <div className="container-waha">
          <AnimatedSection>
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-lime-cream/50">
              {t('services.label')}
            </span>
            <h1 className="font-sora font-bold text-4xl md:text-6xl hero-text mt-4 mb-6 leading-tight">
              Spaces Crafted with Intention
            </h1>
            <p className="font-inter text-lime-cream/60 text-lg max-w-2xl leading-relaxed">
              {t('services.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding bg-background">
        <div className="container-waha">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = icons[service.icon]
              return (
                <AnimatedSection key={service.id} delay={i * 0.1}>
                  <div className="p-8 border border-border rounded-sm hover:border-pine/30 transition-colors h-full group">
                    <div className="w-12 h-12 bg-pine/8 rounded-sm flex items-center justify-center mb-6 group-hover:bg-pine/15 transition-colors">
                      <Icon size={22} className="text-pine" />
                    </div>
                    <h2 className="font-sora font-bold text-xl text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="font-inter text-sm text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <CheckCircle2 size={13} className="text-pine shrink-0" />
                          <span className="font-inter text-sm text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="container-waha">
          <AnimatedSection className="text-center mb-14">
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-muted-foreground">How We Work</span>
            <h2 className="font-sora font-bold text-3xl text-foreground mt-3">Our Process</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(({ icon: Icon, label, desc }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="relative p-6 border border-border rounded-sm">
                  <div className="absolute -top-3 -left-3 w-7 h-7 bg-pine text-lime-cream flex items-center justify-center rounded-sm font-sora font-bold text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <Icon size={20} className="text-pine mb-4 mt-2" />
                  <h3 className="font-sora font-semibold text-foreground mb-2">{label}</h3>
                  <p className="font-inter text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-waha max-w-3xl">
          <AnimatedSection className="mb-10">
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-muted-foreground">FAQ</span>
            <h2 className="font-sora font-bold text-3xl text-foreground mt-3">Common Questions</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-sm px-6 data-[state=open]:border-pine/30"
                >
                  <AccordionTrigger className="font-sora font-semibold text-sm text-foreground text-left hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-sm text-muted leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-bg py-20">
        <div className="container-waha text-center">
          <AnimatedSection>
            <h2 className="font-sora font-bold text-3xl md:text-4xl hero-text mb-4">{t('cta.headline')}</h2>
            <p className="font-inter text-lime-cream/60 mb-8">{t('cta.subtitle')}</p>
            <a href="/contact" className="inline-block bg-lime-cream text-pine font-sora font-semibold px-10 py-3 rounded-sm hover:bg-lime-cream/90 transition-colors">
              Book a Consultation
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
