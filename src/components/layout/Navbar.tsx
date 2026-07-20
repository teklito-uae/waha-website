import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Clock, Menu } from "lucide-react"

import { Container } from "@/components/layout/Container"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import { useTheme } from "@/components/layout/ThemeProvider"
import { Button, buttonVariants } from "@/components/ui/button"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/social"
import { IndiaFlag, UaeFlag } from "@/components/icons/flags"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { primaryNavLinks, secondaryNavLinks, servicesNavLink } from "@/data/nav"

import wordmarkLight from "@/assets/images/logo/waha-interiors-logo-green-and-dark.webp"
import wordmarkDark from "@/assets/images/logo/waha-interiors-logo-light-green-and-whiite.webp"

const serviceCategoryLinks = [
  { label: "Interior Design", href: "/services" },
  { label: "Architectural Design", href: "/services" },
  { label: "View All Services", href: "/services" },
]

// Placeholder contact numbers pending real business information
const topBarPhoneNumbers = [
  { country: "UAE", flag: UaeFlag, number: "+971 4 000 0000" },
  { country: "India", flag: IndiaFlag, number: "+91 98765 43210" },
]

const topBarSocialLinks = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
]

const navLinkClasses = (active: boolean) =>
  cn(
    "rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground dark:hover:bg-brand-alt dark:hover:text-brand-foreground",
    active ? "text-foreground dark:text-brand-foreground" : "text-foreground/70 dark:text-brand-foreground/70"
  )

const mobileNavLinkClasses = (active: boolean) =>
  cn(
    "rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-muted hover:text-foreground dark:hover:bg-brand-alt dark:hover:text-brand-foreground",
    active ? "text-foreground dark:text-brand-foreground" : "text-foreground/80 dark:text-brand-foreground/80"
  )

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const wordmark = theme === "dark" ? wordmarkDark : wordmarkLight
  const isActive = (href: string) => location.pathname === href

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background transition-shadow duration-200 dark:border-brand-foreground/15 dark:bg-brand dark:text-brand-foreground",
        scrolled ? "shadow-sm dark:shadow-md" : ""
      )}
    >
      {/* Top bar: hides on scroll via a grid-rows collapse (animatable, no JS height calc) */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          scrolled ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              "hidden border-b border-brand-foreground/10 bg-brand text-brand-foreground transition-[opacity,background-color] duration-200 lg:block dark:bg-brand-alt",
              scrolled ? "opacity-0" : "opacity-100"
            )}
          >
            <Container className="flex h-7 items-center justify-between gap-6 text-xs">
              <p className="flex items-center gap-1.5 text-brand-foreground/80">
                <Clock className="size-3.5" />
                Mon &ndash; Sat: 9:00 AM &ndash; 7:00 PM
              </p>

              <div className="flex items-center gap-5">
                <div className="flex items-center gap-4">
                  {topBarPhoneNumbers.map(({ country, flag: Flag, number }) => (
                    <a
                      key={country}
                      href={`tel:${number.replace(/\s+/g, "")}`}
                      className="flex items-center gap-1.5 text-brand-foreground/80 transition-colors hover:text-brand-foreground"
                    >
                      <Flag className="h-3 w-4 shrink-0 rounded-[1px]" aria-hidden="true" />
                      <span className="sr-only">{country}:</span>
                      {number}
                    </a>
                  ))}
                </div>

                <span className="h-3.5 w-px bg-brand-foreground/20" aria-hidden="true" />

                <div className="flex items-center gap-3">
                  {topBarSocialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="text-brand-foreground/70 transition-colors hover:text-brand-foreground"
                    >
                      <Icon className="size-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <Container className="flex h-14 items-center justify-between gap-4 lg:h-16">
        {/* Left: primary nav (desktop) */}
        <div className="hidden flex-1 items-center gap-1 lg:flex">
          {primaryNavLinks.map((link) => (
            <Link key={link.href} to={link.href} className={navLinkClasses(isActive(link.href))}>
              {link.label}
            </Link>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={navLinkClasses(isActive(servicesNavLink.href))}
                >
                  {servicesNavLink.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-52 gap-1">
                    {serviceCategoryLinks.map((item) => (
                      <li key={item.label}>
                        <NavigationMenuLink render={<Link to={item.href} />}>
                          {item.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile: full wordmark logo */}
        <Link to="/" className="flex items-center lg:hidden" aria-label="Waha Interiors home">
          <img src={wordmark} alt="Waha Interiors" className="h-6 w-auto" />
        </Link>

        {/* Center: full wordmark (desktop) */}
        <Link
          to="/"
          className="hidden shrink-0 items-center lg:flex"
          aria-label="Waha Interiors home"
        >
          <img src={wordmark} alt="Waha Interiors" className="h-8 w-auto" />
        </Link>

        {/* Right: secondary nav + theme toggle + CTA (desktop) */}
        <div className="hidden flex-1 items-center justify-end gap-1 lg:flex">
          {secondaryNavLinks.map((link) => (
            <Link key={link.href} to={link.href} className={navLinkClasses(isActive(link.href))}>
              {link.label}
            </Link>
          ))}
          <ThemeToggle className="ml-1" />
          <Link
            to="/contact"
            className={cn(buttonVariants(), "ml-2 h-10 rounded-full px-6 text-sm")}
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-sm">
              <SheetHeader className="flex-row items-center justify-between border-b border-border dark:border-brand-foreground/15">
                <Link to="/" className="flex items-center" aria-label="Waha Interiors home">
                  <img src={wordmark} alt="Waha Interiors" className="h-8 w-auto" />
                </Link>
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {primaryNavLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={<Link to={link.href} />}
                    className={mobileNavLinkClasses(isActive(link.href))}
                  >
                    {link.label}
                  </SheetClose>
                ))}

                <SheetClose
                  render={<Link to={servicesNavLink.href} />}
                  className={mobileNavLinkClasses(isActive(servicesNavLink.href))}
                >
                  {servicesNavLink.label}
                </SheetClose>
                <div className="flex flex-col gap-1 pl-3">
                  {serviceCategoryLinks.map((item) => (
                    <SheetClose
                      key={item.label}
                      render={<Link to={item.href} />}
                      className="rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground dark:text-brand-foreground/70 dark:hover:bg-brand-alt dark:hover:text-brand-foreground"
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                </div>

                <Separator className="my-2 dark:bg-brand-foreground/15" />

                {secondaryNavLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={<Link to={link.href} />}
                    className={mobileNavLinkClasses(isActive(link.href))}
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>

              <SheetFooter className="gap-3 border-t border-border p-4 dark:border-brand-foreground/15">
                <ThemeToggle className="self-start" />
                <SheetClose
                  render={
                    <Link
                      to="/contact"
                      className={cn(buttonVariants(), "h-12 w-full rounded-full text-sm")}
                    />
                  }
                >
                  Let&apos;s Talk
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
