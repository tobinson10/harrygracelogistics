import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Package } from 'lucide-react'

const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80',
    alt: 'Container ship at sea',
  },
  {
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80',
    alt: 'Cargo airplane',
  },
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    alt: 'Shipping containers at port',
  },
]

const STATS = [
  { value: '47+', label: 'Countries Served' },
  { value: '15K+', label: 'Deliveries Made' },
  { value: '3.2K+', label: 'Happy Clients' },
  { value: '12 Yrs', label: 'Of Experience' },
]

export default function Hero() {
  const [slide, setSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const interval = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5500)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{ opacity: slide === i ? 1 : 0 }}
        >
          <img
            src={s.img}
            alt={s.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Decorative gold line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)' }}
      />

      {/* Floating badge */}
      <div
        className="absolute top-28 right-6 lg:right-16 animate-float glass rounded-2xl px-4 py-3 hidden md:block"
        style={{ animationDelay: '1s' }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white text-[12px] font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
            Live Tracking Available
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              background: 'rgba(201,168,76,0.15)',
              border: '1px solid rgba(201,168,76,0.4)',
              transitionDelay: '0.1s',
            }}
          >
            <Package size={13} style={{ color: 'var(--color-gold)' }} />
            <span
              className="text-[11px] tracking-[2px] uppercase font-semibold"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
            >
              Lagos-Based Global Logistics
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] text-white mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '1px', transitionDelay: '0.2s' }}
          >
            FAST & RELIABLE
            <span className="block text-gold-gradient">INTERNATIONAL</span>
            LOGISTICS
          </h1>

          {/* Sub-headline accent */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.35s' }}
          >
            <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--color-gold)' }} />
            <span
              className="text-sm uppercase tracking-[3px]"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
            >
              From Lagos To The World
            </span>
          </div>

          {/* Description */}
          <p
            className={`text-white/75 text-lg leading-relaxed mb-8 max-w-xl transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ fontFamily: 'var(--font-body)', transitionDelay: '0.45s' }}
          >
            Harrygrace International Logistics Venture delivers your cargo safely to any corner of the world. Air freight, sea freight, door-to-door delivery, and customs clearance — all handled with precision.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.55s' }}
          >
            <button
              onClick={() => scrollTo('tracking')}
              className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-[15px] tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #DDB96A 100%)',
                color: 'var(--color-navy)',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 8px 32px rgba(201,168,76,0.4)',
              }}
            >
              <Package size={17} />
              Track Shipment
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-[15px] tracking-wide text-white transition-all duration-300 hover:bg-white/15 hover:scale-[1.03]"
              style={{
                border: '2px solid rgba(255,255,255,0.35)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Get a Quote
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.7s' }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl px-5 py-4 text-center border border-white/10"
            >
              <div
                className="text-3xl lg:text-4xl font-bold mb-1 text-gold-gradient"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '1px' }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/60 text-[11px] tracking-[1.5px] uppercase"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              slide === i ? 'w-8 bg-gold' : 'w-2 bg-white/40'
            }`}
            style={{ background: slide === i ? 'var(--color-gold)' : undefined }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 right-6 lg:right-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
      >
        <span className="text-[10px] tracking-[2px] uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
          Scroll
        </span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/70 animate-bounce" />
        </div>
      </button>
    </section>
  )
}
