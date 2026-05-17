import { useEffect, useRef, useState } from 'react'
import {
  Globe, Plane, Ship, Home, Package, FileText, Warehouse, Zap,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Globe,
    title: 'International Shipping',
    desc: 'Door-to-door shipping solutions from Lagos to destinations worldwide with full documentation support.',
    highlight: true,
  },
  {
    icon: Plane,
    title: 'Air Freight',
    desc: 'Express air cargo services for time-sensitive shipments. Fast, secure, and reliable air freight from Lagos to any airport.',
    highlight: false,
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    desc: 'Cost-effective FCL and LCL ocean freight solutions for large cargo volumes. Comprehensive port-to-port and door-to-door options.',
    highlight: false,
  },
  {
    icon: Home,
    title: 'Door-to-Door Delivery',
    desc: 'Complete pickup from your location to final delivery anywhere globally. We handle every step so you don\'t have to.',
    highlight: false,
  },
  {
    icon: Package,
    title: 'Cargo Handling',
    desc: 'Professional handling, consolidation, and packaging of all cargo types including fragile, hazardous, and oversized items.',
    highlight: true,
  },
  {
    icon: FileText,
    title: 'Customs Clearance',
    desc: 'Expert customs brokerage ensuring smooth clearance through Nigerian customs and international borders without delays.',
    highlight: false,
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    desc: 'Secure, temperature-controlled warehousing facilities in Lagos for short and long-term cargo storage solutions.',
    highlight: false,
  },
  {
    icon: Zap,
    title: 'Express Delivery',
    desc: 'Same-day and next-day express delivery options for urgent shipments within Nigeria and priority international lanes.',
    highlight: false,
  },
]

export default function Services() {
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
    <section id="services" ref={ref} className="py-24 lg:py-32" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div
          className={`max-w-2xl mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5" style={{ background: 'var(--color-gold)' }} />
            <span
              className="text-[11px] tracking-[3px] uppercase font-semibold"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
            >
              What We Offer
            </span>
          </div>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)', letterSpacing: '1px' }}
          >
            COMPREHENSIVE
            <span className="block text-gold-gradient">LOGISTICS SERVICES</span>
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)' }}
          >
            From single parcels to full container loads, we have the expertise and network to move your cargo anywhere in the world.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={i}
                className={`service-card relative rounded-2xl p-6 border cursor-pointer transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${svc.highlight ? '' : ''}`}
                style={{
                  background: svc.highlight ? 'var(--color-navy)' : 'var(--color-slate)',
                  border: svc.highlight
                    ? '1px solid rgba(201,168,76,0.4)'
                    : '1px solid rgba(11,30,61,0.08)',
                  transitionDelay: `${0.05 * i + 0.1}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: svc.highlight
                      ? 'rgba(201,168,76,0.2)'
                      : 'rgba(11,30,61,0.07)',
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: svc.highlight ? 'var(--color-gold)' : 'var(--color-navy)' }}
                  />
                </div>

                <h3
                  className="text-[16px] font-bold mb-3 leading-snug"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: svc.highlight ? '#fff' : 'var(--color-navy)',
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-[13.5px] leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: svc.highlight ? 'rgba(255,255,255,0.65)' : 'var(--color-ink-muted)',
                  }}
                >
                  {svc.desc}
                </p>

                {/* Gold accent corner */}
                {svc.highlight && (
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-bl-2xl rounded-tr-2xl opacity-20"
                    style={{ background: 'var(--color-gold)' }}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div
          className={`mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-muted) 100%)',
            border: '1px solid rgba(201,168,76,0.25)',
          }}
        >
          <div>
            <h3
              className="text-xl font-bold text-white mb-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Need a custom shipping solution?
            </h3>
            <p
              className="text-white/60 text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Our logistics experts are ready to design a tailored plan for your business.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-7 py-3.5 rounded-xl font-bold text-navy text-[14px] transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #C9A84C 0%, #DDB96A 100%)',
              color: 'var(--color-navy)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}
