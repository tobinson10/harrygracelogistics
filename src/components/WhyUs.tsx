import { useEffect, useRef, useState } from 'react'
import {
  Zap, MapPin, DollarSign, Shield, Headphones, Users,
} from 'lucide-react'

const REASONS = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'Express air and sea freight options ensuring your shipments reach their destination within the fastest possible timeframe.',
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    desc: 'GPS-enabled live tracking on every shipment. Know exactly where your cargo is at any moment, from Lagos to the final mile.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    desc: 'Competitive, transparent pricing with no hidden fees. We negotiate the best carrier rates and pass the savings to you.',
  },
  {
    icon: Shield,
    title: 'Secure Packaging',
    desc: 'Professional cargo packaging and handling ensures your goods arrive in perfect condition, fully insured against loss or damage.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Our dedicated support team is available around the clock to answer questions and resolve any shipping concerns instantly.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Over 12 years of combined logistics expertise. Our licensed customs brokers and freight specialists handle every complexity.',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="why-us"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--color-slate)' }}
    >
      {/* Diagonal bg element */}
      <div
        className="absolute -right-20 top-0 bottom-0 w-2/5 hidden lg:block"
        style={{
          background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-muted) 100%)',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: header + image */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ background: 'var(--color-gold)' }} />
              <span
                className="text-[11px] tracking-[3px] uppercase font-semibold"
                style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
              >
                Our Advantage
              </span>
            </div>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)', letterSpacing: '1px' }}
            >
              WHY CLIENTS
              <span className="block text-gold-gradient">CHOOSE US</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)' }}
            >
              In a world of logistics providers, Harrygrace stands apart through consistent reliability, transparent communication, and a genuine commitment to getting your cargo where it needs to be.
            </p>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '240px' }}>
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                alt="Logistics trucks"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(11,30,61,0.3), transparent)' }}
              />
              <div
                className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3"
                style={{ background: 'rgba(7,20,42,0.85)' }}
              >
                <p className="text-white/80 text-[13px]" style={{ fontFamily: 'var(--font-body)' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>98.7%</span> on-time delivery rate across all international routes
                </p>
              </div>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {REASONS.map((r, i) => {
              const Icon = r.icon
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-5 transition-all duration-700 group hover:scale-[1.02] ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(11,30,61,0.08)',
                    boxShadow: '0 4px 20px rgba(11,30,61,0.06)',
                    transitionDelay: `${0.08 * i + 0.2}s`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: 'rgba(201,168,76,0.12)' }}
                  >
                    <Icon size={20} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <h3
                    className="font-bold text-[15px] mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)' }}
                  >
                    {r.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
