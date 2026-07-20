export interface Project {
  title: string
  location: string
}

// No project photography was supplied — rendered via ImagePlaceholder
// until real images are provided (see docs/design-tokens.md).
export const featuredProjects: Project[] = [
  { title: "Modern Villa Interior", location: "Dubai, UAE" },
  { title: "Luxury Apartment", location: "Downtown Dubai" },
  { title: "Executive Office", location: "Business Bay, Dubai" },
  { title: "Boutique Café", location: "Jumeirah, Dubai" },
]
