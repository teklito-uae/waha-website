// Placeholder client quotes pending real, permissioned testimonials.
export interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: "Fatima R.",
    role: "Villa Owner, Arabian Ranches",
    quote:
      "Waha Interiors understood exactly what we wanted before we could even put it into words. Our villa finally feels like us — calm, warm, and beautifully put together.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Apartment Owner, Downtown Dubai",
    quote:
      "From the first concept board to the final styling session, the process was seamless. They kept us informed at every stage and the craftsmanship speaks for itself.",
    rating: 5,
  },
  {
    name: "Amira S.",
    role: "Founder, Boutique Café, Jumeirah",
    quote:
      "Our café needed a look that felt like a destination, not just a place to grab coffee. The team delivered a space our customers photograph before they even sit down.",
    rating: 5,
  },
]
