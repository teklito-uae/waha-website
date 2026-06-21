import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { blogPosts } from '@/data/blog'

export default function BlogPage() {
  const { t } = useTranslation()
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20">
        <div className="container-waha">
          <AnimatedSection>
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-lime-cream/50">
              {t('blog.label')}
            </span>
            <h1 className="font-sora font-bold text-4xl md:text-6xl hero-text mt-4 mb-6">
              {t('blog.headline')}
            </h1>
            <p className="font-inter text-lime-cream/60 text-lg max-w-xl">
              {t('blog.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-waha">
          {/* Featured */}
          <AnimatedSection className="mb-16">
            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border rounded-sm overflow-hidden hover:border-pine/30 transition-colors">
                <div className="aspect-[16/9] bg-accent-light overflow-hidden">
                  {featured.image ? (
                    <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full bg-pine/10 flex items-center justify-center">
                      <span className="text-pine/30 text-sm">Image coming soon</span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-inter text-xs bg-pine text-lime-cream px-2.5 py-0.5 rounded-sm">Featured</span>
                    <span className="font-inter text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={11} /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-sora font-bold text-2xl text-foreground mb-3 group-hover:text-pine transition-colors">
                    {featured.title}
                  </h2>
                  <p className="font-inter text-sm text-muted leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="font-inter text-sm text-pine flex items-center gap-1.5 hover:gap-3 transition-all">
                    {t('blog.readMore')} <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.08}>
                <Link to={`/blog/${post.slug}`} className="group block border border-border rounded-sm overflow-hidden hover:border-pine/30 transition-colors">
                  <div className="aspect-[16/9] bg-accent-light overflow-hidden">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full bg-pine/10 flex items-center justify-center">
                        <span className="text-pine/30 text-xs">Image coming soon</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-inter text-xs text-muted-foreground">{post.date}</span>
                      <span className="font-inter text-xs text-muted-foreground flex items-center gap-1">
                        <Clock size={10} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-sora font-semibold text-foreground mb-2 group-hover:text-pine transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-inter text-xs text-muted leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 font-inter text-[10px] text-muted-foreground border border-border px-2 py-0.5 rounded-sm">
                          <Tag size={9} />{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
