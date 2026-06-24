import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function ContactPage() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate send (replace with EmailJS integration)
    await new Promise((r) => setTimeout(r, 1200))

    // EmailJS integration placeholder:
    // await emailjs.send(
    //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //   { ...form },
    //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    // )

    toast.success(t('contact.success'))
    setForm({ name: '', email: '', phone: '', projectType: '', message: '' })
    setLoading(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20">
        <div className="container-waha">
          <AnimatedSection>
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-lime-cream/50">
              {t('contact.label')}
            </span>
            <h1 className="font-sora font-bold text-4xl md:text-6xl hero-text mt-4 mb-6 leading-tight">
              {t('contact.headline')}
            </h1>
            <p className="font-inter text-lime-cream/60 text-lg max-w-xl leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-waha">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <AnimatedSection direction="left" className="lg:col-span-2 space-y-10">
              
              {/* Offices */}
              <div>
                <h2 className="font-sora font-semibold text-xl text-foreground mb-6">
                  Our Offices
                </h2>
                <div className="space-y-8">
                  
                  {/* Dubai Branch */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pine/10 rounded-sm flex items-center justify-center shrink-0 mt-1">
                      <MapPin size={18} className="text-pine" />
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-base text-foreground mb-1">Dubai Branch</h3>
                      <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-2">
                        Sulthan Building, Al - Raffa Street,<br/>Bur Dubai, Dubai - UAE
                      </p>
                      <a href="tel:+971567850662" className="font-inter text-sm font-medium text-pine hover:underline flex items-center gap-2">
                        <Phone size={12} /> +971 56 785 0662
                      </a>
                    </div>
                  </div>

                  {/* Kerala HQ */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pine/10 rounded-sm flex items-center justify-center shrink-0 mt-1">
                      <MapPin size={18} className="text-pine" />
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-base text-foreground mb-1">Kerala Headquarter</h3>
                      <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-2">
                        Mogral, Kasaragod, Kerala
                      </p>
                      <div className="flex flex-col gap-1.5">
                        <a href="tel:+919995587428" className="font-inter text-sm font-medium text-pine hover:underline flex items-center gap-2">
                          <Phone size={12} /> +91 99955 87428
                        </a>
                        <a href="tel:+919188417424" className="font-inter text-sm font-medium text-pine hover:underline flex items-center gap-2">
                          <Phone size={12} /> +91 91884 17424
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Team Members */}
              <div>
                <h2 className="font-sora font-semibold text-xl text-foreground mb-6">
                  Direct Contacts
                </h2>
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pine/5 rounded-full border border-pine/10 flex items-center justify-center shrink-0">
                      <span className="font-sora font-bold text-sm text-pine">AT</span>
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-sm text-foreground">Ahmed Thanseef</h3>
                      <p className="font-inter text-xs text-muted-foreground mb-1.5">Interior Designer</p>
                      <a href="tel:+919995587428" className="font-inter text-xs font-medium text-pine hover:underline flex items-center gap-1.5">
                        <Phone size={10} /> +91 99955 87428
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pine/5 rounded-full border border-pine/10 flex items-center justify-center shrink-0">
                      <span className="font-sora font-bold text-sm text-pine">FS</span>
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-sm text-foreground">Fathimath Sabeena</h3>
                      <p className="font-inter text-xs text-muted-foreground mb-1.5">Interior Designer</p>
                      <a href="tel:+919188417424" className="font-inter text-xs font-medium text-pine hover:underline flex items-center gap-1.5">
                        <Phone size={10} /> +91 91884 17424
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" delay={0.1} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="font-inter text-xs text-foreground">
                      {t('contact.name')} *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="border-border focus:border-pine rounded-sm font-inter text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="font-inter text-xs text-foreground">
                      {t('contact.email')} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="border-border focus:border-pine rounded-sm font-inter text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="font-inter text-xs text-foreground">
                      {t('contact.phone')}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="border-border focus:border-pine rounded-sm font-inter text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="projectType" className="font-inter text-xs text-foreground">
                      {t('contact.projectType')}
                    </Label>
                    <Select onValueChange={(val) => setForm({ ...form, projectType: val })}>
                      <SelectTrigger id="projectType" className="border-border rounded-sm font-inter text-sm">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">{t('contact.types.residential')}</SelectItem>
                        <SelectItem value="commercial">{t('contact.types.commercial')}</SelectItem>
                        <SelectItem value="landscape">{t('contact.types.landscape')}</SelectItem>
                        <SelectItem value="other">{t('contact.types.other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="font-inter text-xs text-foreground">
                    {t('contact.message')} *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, location, budget range, and timeline..."
                    className="border-border focus:border-pine rounded-sm font-inter text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-pine text-lime-cream hover:bg-pine/90 font-sora font-semibold tracking-wide rounded-sm py-3 h-auto"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-lime-cream/30 border-t-lime-cream rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={15} /> {t('contact.submit')}
                    </span>
                  )}
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

