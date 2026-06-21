export interface Project {
  id: string
  slug: string
  title: string
  category: 'Residential' | 'Commercial' | 'Landscape'
  location: string
  year: string
  area: string
  heroImage: string
  images: string[]
  brief: string
  tags: string[]
}

// Placeholder projects — replace heroImage and images with your own photos
export const projects: Project[] = [
  {
    id: '1',
    slug: 'mogral-villa-sanctuary',
    title: 'Mogral Villa Sanctuary',
    category: 'Residential',
    location: 'Mogral, Kasaragod',
    year: '2025',
    area: '3,200 sq ft',
    heroImage: '/images/projects/project-1-hero.jpg',
    images: [
      '/images/projects/project-1-1.jpg',
      '/images/projects/project-1-2.jpg',
      '/images/projects/project-1-3.jpg',
    ],
    brief: 'A complete residential transformation of a traditional family villa in Mogral. The brief was to create a serene, modern oasis while respecting the heritage architecture of the original structure.',
    tags: ['Minimalist', 'Heritage', 'Kerala Fusion'],
  },
  {
    id: '2',
    slug: 'kasaragod-commercial-hub',
    title: 'Kasaragod Commercial Hub',
    category: 'Commercial',
    location: 'Kasaragod Town',
    year: '2025',
    area: '1,800 sq ft',
    heroImage: '/images/projects/project-2-hero.jpg',
    images: [
      '/images/projects/project-2-1.jpg',
      '/images/projects/project-2-2.jpg',
    ],
    brief: 'A modern office and showroom designed to communicate professionalism and creativity. Clean lines and the brand\'s identity were woven into every detail.',
    tags: ['Commercial', 'Modern', 'Branding'],
  },
  {
    id: '3',
    slug: 'manjeshwar-residence',
    title: 'Manjeshwar Residence',
    category: 'Residential',
    location: 'Manjeshwar, Kasaragod',
    year: '2024',
    area: '2,600 sq ft',
    heroImage: '/images/projects/project-3-hero.jpg',
    images: [
      '/images/projects/project-3-1.jpg',
      '/images/projects/project-3-2.jpg',
    ],
    brief: 'A new-build residence designed from the ground up with biophilic principles. Natural materials, maximized natural light, and indoor greenery define this home.',
    tags: ['Biophilic', 'New Build', 'Natural'],
  },
  {
    id: '4',
    slug: 'kanhangad-garden-retreat',
    title: 'Kanhangad Garden Retreat',
    category: 'Landscape',
    location: 'Kanhangad, Kasaragod',
    year: '2024',
    area: '5,000 sq ft garden',
    heroImage: '/images/projects/project-4-hero.jpg',
    images: [
      '/images/projects/project-4-1.jpg',
      '/images/projects/project-4-2.jpg',
    ],
    brief: 'A landscape transformation that turned an overgrown plot into a structured, beautiful garden retreat. Traditional Kerala plants were combined with contemporary hardscaping.',
    tags: ['Landscape', 'Garden', 'Outdoor Living'],
  },
]
