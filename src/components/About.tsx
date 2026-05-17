import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Shield, Clock, Globe } from 'lucide-react'

const STATS = [
  { end: 47, suffix: '+', label: 'Countries Served', icon: Globe },
  { end: 15000, suffix: '+', label: 'Successful Deliveries', icon: CheckCircle2 },
  { end: 3200, suffix: '+', label: 'Happy Clients', icon: Shield },
  { end: 12, suffix: ' yrs', label: 'Years of Experience', icon: Clock },
]

function useCountUp(end: number, duration: number = 2000, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, active])
  return count
}

function StatCard({ stat, active }: { stat: typeof STATS[0]; active: boolean }) {
  const count = useCountUp(stat.end, 2200, active)
  const Icon = stat.icon

  const display =
    stat.end >= 1000
      ? (count >= 1000 ? `${(count / 1000).toFixed(1)}K` : count.toString())
      : count.toString()

  return (
    <div
      className="text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg group"
      style={{
        background: 'rgba(201,168,76,0.06)',
        border: '1px solid rgba(201,168,76,0.2)',
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
        style={{ background: 'rgba(201,168,76,0.15)' }}
      >
        <Icon size={22} style={{ color: 'var(--color-gold)' }} />
      </div>
      <div
        className="text-4xl lg:text-5xl font-bold mb-1"
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--color-gold)',
          letterSpacing: '1px',
        }}
      >
        {display}{stat.suffix}
      </div>
      <div
        className="text-[12px] tracking-[1.5px] uppercase font-medium"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink-muted)' }}
      >
        {stat.label}
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: 'var(--color-slate)' }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5" style={{ background: 'var(--color-gold)' }} />
            <span
              className="text-[11px] tracking-[3px] uppercase font-semibold"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
            >
              Who We Are
            </span>
          </div>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)', letterSpacing: '1px' }}
          >
            NIGERIA'S TRUSTED
            <span className="block text-gold-gradient">LOGISTICS PARTNER</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Story */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)' }}
            >
              Founded in Lagos, Nigeria, <strong style={{ color: 'var(--color-navy)' }}>Harrygrace International Logistics Venture</strong> has grown from a local courier service into a world-class logistics powerhouse serving clients across 47 countries. We bridge Nigeria to the global marketplace.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)' }}
            >
              Our expert team handles every stage of the logistics chain — from pickup at your Lagos location to last-mile delivery at international destinations. We combine deep local knowledge with global carrier partnerships to ensure your shipments arrive on time, every time.
            </p>

            {/* Key points */}
            {[
              'Licensed customs broker with 12+ years of regulatory expertise',
              'Real-time GPS tracking on all international shipments',
              'Full cargo insurance and secure packaging solutions',
              '24/7 dedicated customer support in English and Yoruba',
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-3 mb-4">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--color-gold)' }}
                />
                <span
                  className="text-[14.5px] leading-snug"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}
                >
                  {pt}
                </span>
              </div>
            ))}

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[14px] text-white tracking-wide transition-all hover:opacity-90 hover:shadow-lg"
              style={{
                background: 'var(--color-navy)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Work With Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Right: image + stats */}
          <div
            className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Image */}
            <div className="relative mb-8 rounded-2xl overflow-hidden" style={{ height: '280px' }}>
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Warehouse operations"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-4 left-4 glass rounded-xl px-4 py-3"
                style={{ background: 'rgba(7,20,42,0.85)' }}
              >
                <div className="text-white/60 text-[10px] tracking-[2px] uppercase mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  Headquartered In
                </div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                  Apapa, Lagos — Nigeria
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <StatCard key={i} stat={stat} active={visible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
