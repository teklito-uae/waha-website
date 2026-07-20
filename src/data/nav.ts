export interface NavLink {
  label: string
  href: string
}

export const primaryNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
]

export const servicesNavLink: NavLink = { label: "Services", href: "/services" }

export const secondaryNavLinks: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]
