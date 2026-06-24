import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { blogPosts } from '@/data/blog'
import { articleSchema } from '@/lib/schema'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <div className="min-h-screen hero-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-sora text-3xl hero-text mb-4">Article not found</h1>
          <Link to="/blog" className="font-inter text-lime-cream/60 hover:text-lime-cream flex items-center gap-2 justify-center">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />

      {/* Hero */}
      <div className="hero-bg pt-24 pb-8">
        <div className="container-waha">
          <Link to="/blog" className="inline-flex items-center gap-2 font-inter text-sm text-lime-cream/60 hover:text-lime-cream transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 font-inter text-xs text-lime-cream/50 border border-lime-cream/20 px-2.5 py-0.5 rounded-sm">
                  <Tag size={9} />{tag}
                </span>
              ))}
            </div>
            <h1 className="font-sora font-bold text-3xl md:text-5xl hero-text leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 font-inter text-xs text-lime-cream/50">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      {post.image && (
        <div className="hero-bg pb-12">
          <div className="container-waha max-w-5xl">
            <div className="aspect-[16/7] overflow-hidden rounded-sm">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )}

      {/* Article Body */}
      <section className="section-padding bg-background">
        <div className="container-waha">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div
                className="prose prose-sm max-w-none font-inter text-foreground
                  prose-headings:font-sora prose-headings:text-foreground
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-muted prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/##\s(.+)/g, '<h2>$1</h2>').replace(/###\s(.+)/g, '<h3>$1</h3>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }}
              />
            </AnimatedSection>

            {/* Author card */}
            <AnimatedSection delay={0.1} className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pine rounded-sm flex items-center justify-center">
                  <span className="font-sora font-bold text-lime-cream text-sm">W</span>
                </div>
                <div>
                  <p className="font-sora font-semibold text-foreground text-sm">{post.author}</p>
                  <p className="font-inter text-xs text-muted-foreground">Interior Design Studio, Kasaragod, Kerala</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="section-padding bg-card">
          <div className="container-waha">
            <h2 className="font-sora font-bold text-2xl text-foreground mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="group block border border-border rounded-sm overflow-hidden hover:border-pine/30 transition-colors">
                  <div className="aspect-[16/9] bg-accent-light overflow-hidden">
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-pine/10" />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-inter text-xs text-muted-foreground mb-1">{p.date} · {p.readTime}</p>
                    <h3 className="font-sora font-semibold text-sm text-foreground group-hover:text-pine transition-colors">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

