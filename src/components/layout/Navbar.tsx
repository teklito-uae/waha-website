import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import wahaLogo from '@/assets/waha-interior-logo.png'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const leftLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.about', to: '/about' },
  { key: 'nav.services', to: '/services' },
]

const rightLinks = [
  { key: 'nav.projects', to: '/projects' },
  { key: 'nav.blog', to: '/blog' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('waha-lang', next)
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'font-inter text-sm tracking-wide transition-colors duration-200 link-underline',
      isActive ? 'text-lime-cream' : 'text-lime-cream/65 hover:text-lime-cream'
    )

  return (
    <header
      className={cn(
        'left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'fixed top-0 bg-[#1a2e14]/95 backdrop-blur-md shadow-lg shadow-[#0f1a0b]/30'
          : 'absolute top-0 bg-transparent'
      )}
    >
      <div className="container-waha h-16 md:h-20 grid grid-cols-[1fr_auto_1fr] items-center gap-4">

        {/* LEFT — Nav links */}
        <nav className="hidden md:flex items-center gap-7">
          {leftLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {t(link.key)}
            </NavLink>
          ))}
        </nav>

        {/* CENTER — Logo */}
        <Link to="/" className="flex items-center justify-center group">
          <img
            src={wahaLogo}
            alt="WAHA Interiors Logo"
            className="h-10 md:h-12 w-auto object-contain group-hover:opacity-85 transition-opacity duration-200"
          />
        </Link>

        {/* RIGHT — Right nav links + language + CTA */}
        <div className="hidden md:flex items-center justify-end gap-7">
          {rightLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {t(link.key)}
            </NavLink>
          ))}

          <div className="flex items-center gap-3 ml-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="font-inter text-xs tracking-widest text-lime-cream/55 hover:text-lime-cream transition-colors border border-lime-cream/20 hover:border-lime-cream/40 rounded px-2.5 py-1"
            >
              {i18n.language === 'en' ? 'عربي' : 'EN'}
            </button>

            <Button
              asChild
              size="sm"
              className="bg-lime-cream text-[#2A3717] hover:bg-lime-cream/90 font-inter text-xs tracking-wide rounded-sm px-4"
            >
              <Link to="/contact">{t('nav.getInTouch')}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-end col-start-3">
          <button
            className="text-lime-cream p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#1a2e14] border-t border-lime-cream/10 overflow-hidden"
          >
            <div className="container-waha py-6 flex flex-col gap-5">
              {[...leftLinks, ...rightLinks].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'font-sora text-lg font-semibold transition-colors',
                      isActive ? 'text-lime-cream' : 'text-lime-cream/60'
                    )
                  }
                >
                  {t(link.key)}
                </NavLink>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-lime-cream/10">
                <button
                  onClick={toggleLang}
                  className="font-inter text-xs text-lime-cream/60 hover:text-lime-cream border border-lime-cream/20 rounded px-2.5 py-1"
                >
                  {i18n.language === 'en' ? 'عربي | Arabic' : 'EN | English'}
                </button>
                <Button
                  asChild
                  size="sm"
                  className="bg-lime-cream text-[#2A3717] hover:bg-lime-cream/90 text-xs"
                  onClick={() => setOpen(false)}
                >
                  <Link to="/contact">{t('nav.getInTouch')}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
