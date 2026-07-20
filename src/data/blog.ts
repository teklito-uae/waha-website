// Placeholder editorial content pending real blog posts. Photography is
// open-source (Unsplash) standing in for real project/lifestyle photos,
// same convention already used for the Services section.
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "timeless-design-principles-modern-villas",
    title: "5 Timeless Design Principles for Modern Villas",
    excerpt:
      "The details that separate a villa that feels current for a season from one that still feels right a decade from now.",
    category: "Design Tips",
    date: "Jun 18, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "choosing-the-perfect-color-palette",
    title: "How to Choose the Perfect Color Palette for Your Home",
    excerpt:
      "A simple framework for picking colors that work together in every room, in every light, all year round.",
    category: "Color & Finishes",
    date: "May 27, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "downtown-dubai-apartment-transformation",
    title: "Inside a Downtown Dubai Apartment Transformation",
    excerpt:
      "A walkthrough of how a compact apartment became a warm, layered home without losing an inch of function.",
    category: "Project Spotlight",
    date: "Apr 09, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80",
  },
]
