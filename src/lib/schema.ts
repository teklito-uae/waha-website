export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WAHA Interiors',
  description:
    'Premium interior design firm based in Kasaragod, Kerala, India. Specializing in residential, commercial, and landscape design in Kasaragod, Mogral, and surrounding areas.',
  url: 'https://wahainteriors.com',
  telephone: '+91-XXXXX-XXXXX',
  email: 'hello@wahainteriors.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kasaragod',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.4996',
    longitude: '74.9869',
  },
  openingHours: 'Mo-Sa 09:00-18:00',
  sameAs: [
    'https://instagram.com/wahainteriors',
    'https://linkedin.com/company/wahainteriors',
  ],
  priceRange: '₹₹₹',
  currenciesAccepted: 'INR',
  areaServed: [
    'Kasaragod',
    'Mogral',
    'Manjeshwar',
    'Kanhangad',
    'Kerala',
    'India',
  ],
  serviceType: [
    'Residential Interior Design',
    'Commercial Interior Design',
    'Landscape Design',
  ],
}

export const faqSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const articleSchema = (post: {
  title: string
  excerpt: string
  author: string
  date: string
  slug: string
  image: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  author: {
    '@type': 'Organization',
    name: post.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'WAHA Interiors',
    url: 'https://wahainteriors.com',
  },
  datePublished: post.date,
  image: `https://wahainteriors.com${post.image}`,
  url: `https://wahainteriors.com/blog/${post.slug}`,
})
