import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import wahaLogo from '@/assets/waha-interior-logo.png'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.about', to: '/about' },
  { key: 'nav.services', to: '/services' },
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
    const next = i18n.language === 'en' ? 'ml' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('waha-lang', next)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-pine/95 backdrop-blur-md shadow-lg shadow-pine/20'
          : 'bg-transparent'
      )}
    >
      <div className="container-waha flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={wahaLogo}
            alt="WAHA Interiors Logo"
            className="h-10 md:h-12 w-auto object-contain group-hover:opacity-85 transition-opacity duration-200"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'font-inter text-sm tracking-wide transition-colors duration-200 link-underline',
                  isActive
                    ? 'text-lime-cream'
                    : 'text-lime-cream/70 hover:text-lime-cream'
                )
              }
            >
              {t(link.key)}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="font-inter text-xs tracking-widest text-lime-cream/60 hover:text-lime-cream transition-colors border border-lime-cream/20 hover:border-lime-cream/40 rounded px-2 py-1"
          >
            {i18n.language === 'en' ? 'മല' : 'EN'}
          </button>

          <Button
            asChild
            size="sm"
            className="bg-lime-cream text-pine hover:bg-lime-cream/90 font-inter text-xs tracking-wide rounded-sm"
          >
            <Link to="/contact">{t('nav.getInTouch')}</Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-lime-cream p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-pine border-t border-lime-cream/10 overflow-hidden"
          >
            <div className="container-waha py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
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
                  className="font-inter text-xs text-lime-cream/60 hover:text-lime-cream border border-lime-cream/20 rounded px-2 py-1"
                >
                  {i18n.language === 'en' ? 'മല | Malayalam' : 'EN | English'}
                </button>
                <Button
                  asChild
                  size="sm"
                  className="bg-lime-cream text-pine hover:bg-lime-cream/90 text-xs"
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
