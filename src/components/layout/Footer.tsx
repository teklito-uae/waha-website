import { Link } from "react-router-dom"

import footerBg from "@/assets/images/footer/waha-footer-bg-mountain-green.webp"
import wahaLogo from "@/assets/images/logo/waha-interiors-logo-light-green-and-whiite.webp"
import { Container } from "@/components/layout/Container"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/social"

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

const serviceLinks = [
  { label: "Interior Design", href: "/services" },
  { label: "Architecture", href: "/services" },
  { label: "Visualization", href: "/services" },
  { label: "Consultation", href: "/services" },
]

const socialLinks = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
]

const columnHeadingClassName =
  "text-sm font-semibold uppercase tracking-wide text-brand-foreground/60"

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-brand text-brand-foreground md:min-h-[640px]">
      <img
        src={footerBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-bottom opacity-70"
      />
      <div className="absolute inset-0 -z-20 bg-brand/55" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_20%,transparent_65%,var(--brand)_100%)]" />

      <Container className="pt-14 pb-8 md:pt-40 md:pb-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-10 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <img src={wahaLogo} alt="Waha Interiors" className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-brand-foreground/70">
              Designing spaces that inspire life.
            </p>
          </div>

          <div>
            <h3 className={columnHeadingClassName}>Navigation</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-brand-foreground/80 transition-colors hover:text-brand-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={columnHeadingClassName}>Services</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-brand-foreground/80 transition-colors hover:text-brand-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className={columnHeadingClassName}>Contact</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-brand-foreground/80">
              <li>Dubai, United Arab Emirates</li>
              {/* Placeholder contact details pending real business information */}
              <li>+971 4 000 0000</li>
              <li>hello@wahainteriors.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px bg-brand-foreground/15 md:mt-16" />

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-brand-foreground/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Waha Interiors. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-brand-foreground/60 transition-colors hover:text-brand-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
