import { useEffect, useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight, ArrowDown, ChevronLeft, ChevronRight,
  Home, Building2, TreePine, Star, Quote,
  MapPin, Phone, CheckCircle2, Award, Users, Sofa,
  PhoneCall, Lightbulb, PenTool, Key, ChefHat, Hammer,
  Palette, Store, Utensils, Leaf, Ruler, Armchair
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/AnimatedSection'

// ── Hero slides ───────────────────────────────────────────
import heroLiving from '@/assets/hero-living.png'
import heroBedroom from '@/assets/hero-bedroom.png'
import heroKitchen from '@/assets/hero-kitchen.png'
import aboutStudio from '@/assets/about-studio.png'
import project1 from '@/assets/project-1.png'
import project2 from '@/assets/project-2.png'
import mapBg from '@/assets/hero-bg/map-bg@xxl.webp'

const heroSlides = [
  {
    img: heroLiving,
    tag: 'Living Spaces',
    headline: 'Where Calm Meets\nCraftsmanship',
    sub: 'Luxury living rooms rooted in Kerala\'s warmth and natural beauty.',
  },
  {
    img: heroBedroom,
    tag: 'Bedrooms',
    headline: 'Your Personal\nSanctuary',
    sub: 'Sleep better in spaces designed with intention and care.',
  },
  {
    img: heroKitchen,
    tag: 'Kitchens & Dining',
    headline: 'The Heart of\nEvery Home',
    sub: 'Open-plan kitchens where meals become memories.',
  },
]

const stats = [
  { icon: Award, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '40+', label: 'Happy Families' },
  { icon: MapPin, value: '5+', label: 'Districts Served' },
  { icon: Sofa, value: '3', label: 'Design Specialities' },
]

const services = [
  {
    icon: Palette,
    title: 'Residential Design',
    desc: 'Full-service interior design for villas, apartments, and bungalows across Kerala and the UAE.',
    features: ['Space Planning', 'Material Selection', 'Lighting Design'],
  },
  {
    icon: Store,
    title: 'Commercial Design',
    desc: 'Tailored interiors for offices, retail shops, boutiques, and hospitality spaces that reflect your brand.',
    features: ['Brand Identity', 'Ergonomic Layouts', 'Customer Flow'],
  },
  {
    icon: Utensils,
    title: 'Modular Kitchens',
    desc: 'Bespoke, highly functional, and aesthetically pleasing kitchens customized for your culinary needs.',
    features: ['Smart Storage', 'Premium Appliances', 'Durable Finishes'],
  },
  {
    icon: Armchair,
    title: 'Custom Furniture',
    desc: 'Designed and crafted locally to perfectly fit your space, style, and functional requirements.',
    features: ['Bespoke Designs', 'Premium Woodwork', 'Upholstery'],
  },
  {
    icon: Leaf,
    title: 'Landscape & Outdoor',
    desc: 'Curated gardens, courtyards, and outdoor living spaces inspired by Kerala\'s lush natural landscape.',
    features: ['Planting Plans', 'Water Features', 'Outdoor Seating'],
  },
  {
    icon: Ruler,
    title: 'Turnkey Execution',
    desc: 'From initial concept to final handover, we manage the entire build process with our in-house teams.',
    features: ['Project Management', 'Quality Control', 'Timely Delivery'],
  },
]

const featuredProjects = [
  { id: 1, img: project1, title: 'Al-Noor Villa', location: 'Mogral, Kasaragod', category: 'Residential', year: '2024' },
  { id: 2, img: project2, title: 'Green Leaf Office', location: 'Kanhangad', category: 'Commercial', year: '2024' },
  { id: 3, img: heroKitchen, title: 'The Kerala Kitchen', location: 'Manjeshwar', category: 'Residential', year: '2023' },
  { id: 4, img: heroLiving, title: 'Zen Living Space', location: 'Kasaragod', category: 'Residential', year: '2024' },
  { id: 5, img: heroBedroom, title: 'Calm Sanctuary', location: 'Mogral', category: 'Residential', year: '2023' },
  { id: 6, img: aboutStudio, title: 'WAHA Studio', location: 'Kasaragod', category: 'Commercial', year: '2022' },
  { id: 7, img: project1, title: 'Courtyard Garden', location: 'Kanhangad', category: 'Landscape', year: '2024' },
  { id: 8, img: project2, title: 'Boutique Retail', location: 'Manjeshwar', category: 'Commercial', year: '2024' },
]

const processSteps = [
  { num: '01', icon: PhoneCall, title: 'Discovery Call', desc: 'We listen to your vision, lifestyle, budget, and timeline during a free 30-min consultation.' },
  { num: '02', icon: Lightbulb, title: 'Concept & Mood', desc: 'We present mood boards, colour palettes, and spatial concepts for your approval.' },
  { num: '03', icon: PenTool, title: 'Design & Detail', desc: 'Full drawings, material sourcing, vendor coordination, and BOQ finalisation.' },
  { num: '04', icon: Key, title: 'Delivery & Styling', desc: 'We oversee execution and hand over a beautifully finished, styled space.' },
]

const testimonials = [
  {
    name: 'Ashraf K.',
    location: 'Mogral, Kasaragod',
    stars: 5,
    text: 'WAHA transformed our villa into something we never imagined. Every corner feels intentional. Truly the best interior design experience in Kasaragod.',
  },
  {
    name: 'Sahla Fathima',
    location: 'Kanhangad',
    stars: 5,
    text: 'From the first meeting to the final handover, the team was professional and creative. Our living room is now our family\'s favourite place.',
  },
  {
    name: 'Noushad P.',
    location: 'Manjeshwar',
    stars: 5,
    text: 'They understood our taste immediately. The olive and beige palette they chose for our bedroom is exactly the serenity we were looking for.',
  },
]

// ── Hero Carousel ─────────────────────────────────────────
function HeroCarousel() {
  const [selected, setSelected] = useState(0)
  const total = heroSlides.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((idx: number) => setSelected(idx), [])
  const prev = useCallback(() => setSelected(s => (s - 1 + total) % total), [total])
  const next = useCallback(() => setSelected(s => (s + 1) % total), [total])

  useEffect(() => {
    timerRef.current = setInterval(next, 6500)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [next])

  const wordVariants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
    visible: (i: number) => ({
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { delay: 0.2 + i * 0.075, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  const subVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  }

  const btnVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-[#0f1a0b]">
      {/* Stack slides with crossfade */}
      {heroSlides.map((slide, i) => (
        <AnimatePresence key={i}>
          {selected === i && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {/* Background image with subtle zoom-in on entry */}
              <motion.img
                src={slide.img}
                alt={slide.tag}
                initial={{ scale: 1.06 }}
                animate={{ scale: 1.0 }}
                transition={{ duration: 8, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark olive shadow overlay - darker at top for navbar visibility, solid at bottom for seamless blend */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a0b]/90 via-[#3D4F22]/35 to-[#0f1a0b]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a0b]/50 via-transparent to-[#0f1a0b]/50" />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Dedicated bottom blur fade to perfectly blend with the brand section below */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f1a0b] via-[#0f1a0b]/80 to-transparent z-10 pointer-events-none" />

      {/* Content — always on top, centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
            className="flex flex-col items-center max-w-5xl mx-auto"
          >
            {/* Tag pill */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-[#F5F5DC]/20 rounded-full backdrop-blur-sm bg-[#3D4F22]/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FAF59] animate-pulse" />
              <span className="font-inter text-[11px] tracking-[0.3em] uppercase text-[#F5F5DC]/60">
                {heroSlides[selected].tag}
              </span>
            </motion.span>

            {/* Headline — word by word, lighter weight */}
            <h1 className="font-sora font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] hero-text leading-[1.1] tracking-[-0.01em] mb-7">
              {heroSlides[selected].headline.split('\n').map((line, li) => (
                <span key={li} className="block">
                  {line.split(' ').map((word, wi) => (
                    <motion.span
                      key={`${li}-${wi}`}
                      custom={li * 5 + wi}
                      variants={wordVariants}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              variants={subVariants}
              className="font-inter font-light text-base md:text-lg text-[#F5F5DC]/55 max-w-lg leading-relaxed mb-10 tracking-wide"
            >
              {heroSlides[selected].sub}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={btnVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg"
                className="bg-[#F5F5DC] text-[#2A3717] hover:bg-[#F5F5DC]/92 font-inter font-medium tracking-wide rounded-sm px-10 py-6 text-sm"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg"
                className="border-[#F5F5DC]/30 text-[#F5F5DC] hover:bg-white/8 hover:border-[#F5F5DC]/55 font-inter font-medium tracking-wide rounded-sm px-10 py-6 text-sm bg-transparent backdrop-blur-sm"
              >
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrows */}
      <button onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/5 border border-white/15 rounded-sm flex items-center justify-center text-[#F5F5DC]/70 hover:bg-white/12 hover:text-[#F5F5DC] transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={17} />
      </button>
      <button onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/5 border border-white/15 rounded-sm flex items-center justify-center text-[#F5F5DC]/70 hover:bg-white/12 hover:text-[#F5F5DC] transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={17} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-600 rounded-full ${selected === i ? 'w-7 h-1 bg-[#F5F5DC]' : 'w-1 h-1 bg-[#F5F5DC]/30 hover:bg-[#F5F5DC]/60'
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 md:right-12 z-20 font-inter text-[9px] text-[#F5F5DC]/25 tracking-[0.35em]">
        {String(selected + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-8 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-inter text-[9px] tracking-[0.35em] text-[#F5F5DC]/22 uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>
          <ArrowDown size={12} className="text-[#F5F5DC]/22" />
        </motion.div>
      </motion.div>
    </section>
  )
}


// ── Cinematic Typography Services ─────────────────────────
function CinematicServices() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Map scroll progress to horizontal translation.
  // At 0.5 (exactly middle of the screen), the text is perfectly centered (0%).
  const xTop = useTransform(scrollYProgress, [0, 0.5, 1], ['25%', '0%', '-25%'])
  const xBottom = useTransform(scrollYProgress, [0, 0.5, 1], ['-25%', '0%', '25%'])

  return (
    <section ref={containerRef} className="relative py-24 md:py-36 bg-[#f7f7f7] overflow-hidden flex flex-col items-center justify-center pointer-events-none w-full">
      
      {/* Subtle background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] z-0">
        <div className="font-sora font-black text-[20vw] leading-none whitespace-nowrap text-pine select-none">
          WAHA
        </div>
      </div>

      {/* Top Layer - Solid */}
      <motion.div
        style={{ x: xTop }}
        className="relative z-10 whitespace-nowrap font-sora font-black text-[5vw] md:text-[3.5vw] leading-[1.1] text-pine uppercase tracking-tighter"
      >
        Interior Design <span className="font-light text-pine/30 mx-4 md:mx-8">|</span> Custom Furniture <span className="font-light text-pine/30 mx-4 md:mx-8">|</span> Turnkey Execution <span className="font-light text-pine/30 mx-4 md:mx-8">|</span> Space Planning <span className="font-light text-pine/30 mx-4 md:mx-8">|</span> Styling
      </motion.div>

      {/* Bottom Layer - Hollow/Outline styling using webkit-text-stroke */}
      <motion.div
        className="relative z-10 whitespace-nowrap font-sora font-black text-[5vw] md:text-[3.5vw] leading-[1.1] uppercase tracking-tighter text-transparent mt-2 md:mt-3"
        style={{
          x: xBottom,
          WebkitTextStroke: '1px #1a2e14',
        }}
      >
        Project Management <span className="font-light text-pine/30 mx-4 md:mx-8" style={{ WebkitTextStroke: '0' }}>|</span> Renovation <span className="font-light text-pine/30 mx-4 md:mx-8" style={{ WebkitTextStroke: '0' }}>|</span> Landscape <span className="font-light text-pine/30 mx-4 md:mx-8" style={{ WebkitTextStroke: '0' }}>|</span> Architecture <span className="font-light text-pine/30 mx-4 md:mx-8" style={{ WebkitTextStroke: '0' }}>|</span> 3D Visualization
      </motion.div>

    </section>
  )
}


// ── Company Overview Component ─────────────────────────────
function CompanySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  // Map image drifts from slightly above to slightly below as user scrolls
  const mapY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <section ref={containerRef} className="relative section-padding overflow-hidden text-lime-cream">
      {/* ── Parallax map layer ── */}
      <motion.div
        style={{ y: mapY }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] z-0"
      >
        <img
          src={mapBg}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── Gradient overlays to blend map into pine green ── */}
      {/* Bottom-to-top: opaque pine → translucent pine so map is barely visible */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-pine/95 via-pine/85 to-[#2A5238]/80" />
      {/* Extra vignette on the sides */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-pine/60 via-transparent to-pine/60" />

      {/* ── Content ── */}
      <div className="container-waha relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <AnimatedSection direction="left" className="lg:w-1/2">
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-lime-cream/40 mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-lime-cream/40" />
              Headquartered in Kerala · Working Globally
            </span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-lime-cream mb-6 leading-tight mt-3">
              A Premium Interior Design & Build Studio
            </h2>
            <div className="space-y-6 font-inter text-sm md:text-base text-lime-cream/70 leading-relaxed max-w-lg mb-10">
              <p>
                From concept and 3D visualization to execution and bespoke furnishings, WAHA Interiors delivers every stage of your dream space through our dedicated in-house teams.
              </p>
              <p>
                With skilled designers, project managers, and execution specialists working under one roof, we ensure complete accountability, seamless delivery, and uncompromising quality.
              </p>
              <p className="text-lime-cream font-medium">
                One vision. One team. One responsibility.
              </p>
            </div>

            {/* Location Pills */}
            <div className="flex flex-wrap gap-3 mt-12">
              {['KASARAGOD HQ', 'DUBAI BRANCH', 'MANGALORE', 'KANNUR'].map((loc) => (
                <div key={loc} className="px-5 py-2.5 rounded-full border border-lime-cream/20 text-[10px] sm:text-xs font-inter tracking-[0.2em] text-lime-cream/80 hover:bg-lime-cream/10 backdrop-blur-sm transition-colors cursor-default">
                  {loc}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Column - Stats Grid */}
          <AnimatedSection direction="right" className="lg:w-1/2">
            <div className="grid grid-cols-2 border border-lime-cream/20 rounded-xl overflow-hidden h-full min-h-[400px] backdrop-blur-sm bg-white/[0.03]">
              {[
                { value: '3+', label: 'Years of Excellence' },
                { value: '50+', label: 'Projects Completed' },
                { value: '5+', label: 'Districts Served' },
                { value: '100%', label: 'In-House Execution' },
                { value: '40+', label: 'Happy Families' },
                { value: '2', label: 'Global Locations' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 sm:p-8 md:p-10 flex flex-col justify-center border-lime-cream/20 hover:bg-lime-cream/5 transition-colors ${i % 2 === 0 ? 'border-r' : ''
                    } ${i < 4 ? 'border-b' : ''}`}
                >
                  <div className="font-sora font-bold text-4xl md:text-5xl text-lime-cream mb-3">
                    {stat.value}
                  </div>
                  <div className="font-inter text-[10px] sm:text-xs text-lime-cream/60 uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ── Process Component ─────────────────────────────────────
function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Create a parallax transform moving the background from -20% to 20%
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  return (
    <section ref={containerRef} className="relative section-padding overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
      >
        <img
          src={aboutStudio}
          alt="Process Background"
          className="w-full h-full object-cover opacity-[0.15] grayscale"
        />
      </motion.div>
      <div className="absolute inset-0 bg-pine/95 z-0" /> {/* Dark overlay */}

      <div className="container-waha relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="font-inter text-xs tracking-[0.25em] uppercase text-lime-cream/40 block mb-3">How We Work</span>
          <h2 className="font-sora font-bold text-3xl md:text-5xl text-lime-cream mt-3">
            Our Design Process
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {processSteps.map(({ num, icon: Icon, title, desc }, i) => (
            <AnimatedSection key={num} delay={i * 0.15}>
              <div className="relative h-full p-8 rounded-2xl bg-white/[0.03] border border-lime-cream/10 hover:border-lime-cream/30 hover:bg-white/[0.08] transition-all duration-500 group backdrop-blur-sm">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-full bg-lime-cream/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-lime-cream/20 transition-all duration-500">
                    <Icon size={24} className="text-lime-cream" />
                  </div>
                  <div className="font-sora font-bold text-5xl text-lime-cream/10 group-hover:text-lime-cream/20 transition-colors duration-500">
                    {num}
                  </div>
                </div>
                <h3 className="font-sora font-semibold text-xl text-lime-cream mb-4">{title}</h3>
                <p className="font-inter text-sm text-lime-cream/60 leading-relaxed group-hover:text-lime-cream/80 transition-colors">{desc}</p>

                {/* Connecting dash lines for desktop */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-4 xl:-right-6 w-8 xl:w-12 border-t border-dashed border-lime-cream/15" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Main Component ────────────────────────────────────────
export default function HomePage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('All')
  const tabs = ['All', 'Residential', 'Commercial', 'Landscape']

  const filteredProjects = featuredProjects.filter(p => activeTab === 'All' || p.category === activeTab)

  return (
    <>
      {/* 1. HERO SLIDER */}
      <HeroCarousel />

      {/* 1.5. BRAND PARTNERS */}
      <section className="bg-[#0f1a0b] py-10 md:py-16 border-b border-[#556B2F]/20 relative z-20">
        <div className="container-waha">
          <p className="text-center font-inter text-xs text-lime-cream/40 uppercase tracking-[0.2em] mb-8 md:mb-10">
            Trusted by Premium Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {['KOHLER', 'HÄFELE', 'HETTICH', 'SAINT-GOBAIN', 'ASIAN PAINTS'].map((brand) => (
              <div key={brand} className="font-sora font-semibold text-lg md:text-2xl text-lime-cream tracking-widest hover:text-white transition-colors duration-300">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.75 CINEMATIC SERVICES */}
      <CinematicServices />

      {/* 2. ABOUT / PHILOSOPHY (Redesigned) */}
      <section className="section-padding bg-background overflow-hidden relative">
        <div className="container-waha relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <AnimatedSection>
              <span className="font-inter text-xs tracking-[0.25em] uppercase text-sage block mb-4">
                Our Philosophy
              </span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-foreground mt-3 mb-5 leading-tight">
                We believe every home deserves to be a sanctuary.
              </h2>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                WAHA means <em className="text-pine not-italic font-semibold">oasis</em> — a place of calm, beauty, and refuge. We blend the warmth of Kerala's architectural heritage with clean, modern sensibilities to create spaces that are timeless, not trendy.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <AnimatedSection direction="right" className="md:col-span-5">
              <div className="space-y-8 pr-0 md:pr-8">
                <div>
                  <h3 className="font-sora font-bold text-2xl text-foreground mb-3">Honest Craftsmanship</h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">We source the finest local materials and work with master craftsmen to ensure every detail is executed perfectly.</p>
                </div>
                <div>
                  <h3 className="font-sora font-bold text-2xl text-foreground mb-3">Intentional Design</h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">Design isn't just about how it looks, but how it feels. We design for flow, light, and the way you actually live.</p>
                </div>
                <Button asChild className="bg-pine text-lime-cream hover:bg-pine/90 font-sora font-semibold rounded-sm px-8 mt-4">
                  <Link to="/about">Discover Our Story <ArrowRight size={14} className="ml-2" /></Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="md:col-span-7" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                  <img src={aboutStudio} alt="WAHA Interiors Studio" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 md:-left-12 bg-pine text-lime-cream p-8 rounded-xl shadow-xl max-w-[280px] hidden sm:block">
                  <Quote size={24} className="text-lime-cream/30 mb-4" />
                  <p className="font-sora font-semibold text-lg italic leading-tight">
                    "Creating spaces that feel like coming home."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. TAILORED DESIGN SERVICES (Expanded) */}
      <section className="section-padding bg-beige">
        <div className="container-waha">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="font-inter text-xs tracking-[0.25em] uppercase text-sage block mb-4">What We Do</span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
                Comprehensive Design Services
              </h2>
            </div>
            <p className="font-inter text-muted-foreground max-w-sm md:text-right">
              From concept to completion — we handle every detail so you can focus on living.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="group bg-white border border-[#D4CFA8]/50 rounded-2xl p-7 hover:border-[#556B2F]/50 hover:shadow-xl hover:shadow-[#556B2F]/10 transition-all duration-500 h-full flex flex-col hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#556B2F]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#556B2F] transition-all duration-500 shadow-sm border border-[#556B2F]/10">
                    <s.icon size={20} className="text-[#556B2F] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-sora font-bold text-xl text-foreground mb-3 group-hover:text-[#556B2F] transition-colors">{s.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>

                  <div className="pt-5 mt-5 border-t border-[#D4CFA8]/30">
                    <Link to="/services" className="font-inter font-medium text-sm text-[#556B2F] flex items-center gap-2 group-hover:gap-4 transition-all w-fit">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS */}
      <section className="section-padding bg-background">
        <div className="container-waha">
          {/* Header & Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <AnimatedSection>
              <span className="font-inter text-xs tracking-[0.25em] uppercase text-sage">Portfolio</span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-foreground mt-2">
                Recent Projects
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-inter text-sm transition-all duration-300 ${activeTab === tab
                    ? 'bg-pine text-lime-cream shadow-md'
                    : 'bg-transparent text-muted-foreground hover:bg-pine/5 border border-border hover:border-pine/30'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </AnimatedSection>
          </div>

          {/* Grid - 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.slice(0, 8).map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group block h-full"
                >
                  <Link to="/projects" className="flex flex-col h-full">
                    {/* Increased border radius to rounded-2xl (1rem) / rounded-3xl */}
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-accent-light shadow-sm flex-1">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-pine/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                        <div>
                          <p className="font-inter text-xs text-lime-cream/80 mb-1">{p.category} · {p.location}</p>
                          <h3 className="font-sora font-semibold text-lg text-lime-cream mb-3">{p.title}</h3>
                          <span className="inline-flex items-center gap-1.5 font-inter text-xs text-lime-cream group-hover:gap-3 transition-all">
                            View Project <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 px-1">
                      <p className="font-inter text-xs text-muted-foreground mb-1">{p.category}</p>
                      <h3 className="font-sora font-semibold text-foreground group-hover:text-pine transition-colors truncate">{p.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-14 text-center">
            <Link to="/projects" className="font-inter text-sm text-pine inline-flex items-center gap-2 hover:gap-4 transition-all link-underline">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. COMPANY OVERVIEW & STATS */}
      <CompanySection />

      {/* 6. PROCESS */}
      <ProcessSection />

      {/* 7. TESTIMONIALS */}
      <section className="section-padding bg-[#FAFAEF]">
        <div className="container-waha">
          <AnimatedSection className="text-center mb-14">
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-[#6B8A3A]">Client Stories</span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-foreground mt-3">
              What Our Clients Say
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-[#D4CFA8] rounded-sm p-7 hover:border-[#556B2F]/30 hover:shadow-md hover:shadow-[#556B2F]/5 transition-all h-full">
                  <Quote size={28} className="text-[#556B2F]/20 mb-4" />
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-sora font-semibold text-sm text-foreground">{t.name}</div>
                      <div className="font-inter text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <MapPin size={10} /> {t.location}
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <Star key={si} size={13} className="text-[#8FAF59] fill-[#8FAF59]" />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY WAHA */}
      <section className="section-padding bg-background">
        <div className="container-waha">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="font-inter text-xs tracking-[0.25em] uppercase text-[#6B8A3A]">Why WAHA</span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-foreground mt-3 mb-8">
                The WAHA Difference
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Locally Rooted', desc: 'Based in Kasaragod — we know the climate, materials, and vendors that work best for Kerala homes.' },
                  { title: 'Transparent Pricing', desc: 'No hidden costs. We share a clear BOQ upfront and stick to the agreed budget.' },
                  { title: 'Personal Attention', desc: 'One dedicated designer for your project from day one to final handover.' },
                  { title: 'End-to-End Service', desc: 'We handle design, procurement, and site supervision — you just enjoy the result.' },
                ].map(({ title, desc }, i) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-7 h-7 bg-[#556B2F] text-[#F5F5DC] flex items-center justify-center rounded-sm shrink-0 font-sora font-bold text-xs mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="font-sora font-semibold text-foreground mb-1">{title}</div>
                      <div className="font-inter text-sm text-muted-foreground leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: CTA card */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-[#556B2F] rounded-sm p-10 text-center">
                <div className="w-14 h-14 bg-[#F5F5DC]/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Phone size={24} className="text-[#F5F5DC]" />
                </div>
                <h3 className="font-sora font-bold text-2xl text-[#F5F5DC] mb-3">Start Your Project Today</h3>
                <p className="font-inter text-sm text-[#F5F5DC]/60 leading-relaxed mb-8">
                  Book a free 30-minute consultation. No commitment, no pressure — just a friendly conversation about your dream space.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#F5F5DC] text-[#3D4F22] hover:bg-[#F5F5DC]/90 font-sora font-semibold rounded-sm mb-3"
                >
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
                <p className="font-inter text-xs text-[#F5F5DC]/40">
                  Serving Kasaragod · Mogral · Manjeshwar · Kanhangad
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 9. CTA BANNER */}
      <section className="hero-bg py-28">
        <div className="container-waha text-center">
          <AnimatedSection>
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-[#F5F5DC]/40 mb-4 block">
              Ready to Begin?
            </span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl hero-text mb-4 leading-tight mt-3">
              Let's Build Your<br />Dream Space Together
            </h2>
            <p className="font-inter text-[#F5F5DC]/60 mb-10 text-lg max-w-xl mx-auto">
              Premium interior design services in Kasaragod, Kerala — rooted in craft, driven by care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#F5F5DC] text-[#3D4F22] hover:bg-[#F5F5DC]/90 font-sora font-semibold tracking-wide rounded-sm px-10"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#F5F5DC]/30 text-[#F5F5DC] hover:bg-[#F5F5DC]/10 bg-transparent font-sora font-semibold tracking-wide rounded-sm px-10"
              >
                <Link to="/projects">See Our Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
