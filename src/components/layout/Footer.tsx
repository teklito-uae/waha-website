import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Globe, Link2, Mail, MapPin, Phone } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import wahaLogo from '@/assets/waha-interior-logo.png'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-pine text-lime-cream/80">
      <div className="container-waha py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src={wahaLogo}
                alt="WAHA Interiors"
                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="font-inter text-sm leading-relaxed text-lime-cream/60 mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/wahainteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-lime-cream/20 rounded-sm flex items-center justify-center hover:border-lime-cream/60 hover:text-lime-cream transition-all"
                aria-label="Instagram"
              >
                <Globe size={15} />
              </a>
              <a
                href="https://linkedin.com/company/wahainteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-lime-cream/20 rounded-sm flex items-center justify-center hover:border-lime-cream/60 hover:text-lime-cream transition-all"
                aria-label="LinkedIn"
              >
                <Link2 size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sora text-sm font-semibold text-lime-cream tracking-widest uppercase mb-5">
              {t('footer.links')}
            </h3>
            <ul className="space-y-3">
              {[
                { label: t('nav.home'), to: '/' },
                { label: t('nav.about'), to: '/about' },
                { label: t('nav.projects'), to: '/projects' },
                { label: t('nav.blog'), to: '/blog' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-inter text-sm text-lime-cream/60 hover:text-lime-cream transition-colors link-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sora text-sm font-semibold text-lime-cream tracking-widest uppercase mb-5">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {['Residential Design', 'Commercial Design', 'Landscape Design'].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="font-inter text-sm text-lime-cream/60 hover:text-lime-cream transition-colors link-underline"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-sora text-sm font-semibold text-lime-cream tracking-widest uppercase mb-6">
              {t('footer.contact')}
            </h3>
            
            <div className="space-y-8">
              {/* Dubai Branch */}
              <div>
                <p className="font-inter text-[10px] font-bold text-lime-cream/50 uppercase tracking-widest mb-3">Dubai Branch</p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5">
                    <MapPin size={14} className="mt-0.5 shrink-0 text-lime-cream/40" />
                    <span className="font-inter text-sm text-lime-cream/60 leading-relaxed">Sulthan Building, Al - Raffa Street,<br/>Bur Dubai, UAE</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone size={14} className="shrink-0 text-lime-cream/40" />
                    <a href="tel:+971567850662" className="font-inter text-sm text-lime-cream/60 hover:text-lime-cream transition-colors">+971 56 785 0662</a>
                  </li>
                </ul>
              </div>

              {/* Kerala HQ */}
              <div>
                <p className="font-inter text-[10px] font-bold text-lime-cream/50 uppercase tracking-widest mb-3">Kerala HQ</p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5">
                    <MapPin size={14} className="mt-0.5 shrink-0 text-lime-cream/40" />
                    <span className="font-inter text-sm text-lime-cream/60 leading-relaxed">Mogral, Kasaragod, Kerala</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Phone size={14} className="mt-0.5 shrink-0 text-lime-cream/40" />
                    <div className="flex flex-col gap-1.5">
                      <a href="tel:+919995587428" className="font-inter text-sm text-lime-cream/60 hover:text-lime-cream transition-colors">+91 99955 87428</a>
                      <a href="tel:+919188417424" className="font-inter text-sm text-lime-cream/60 hover:text-lime-cream transition-colors">+91 91884 17424</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-lime-cream/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-lime-cream/40">{t('footer.copyright')}</p>
          <p className="font-inter text-xs text-lime-cream/30">
            Designed & built with care in Kasaragod, Kerala
          </p>
        </div>
      </div>
    </footer>
  )
}

