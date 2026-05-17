import { Globe, Mail, Phone, MapPin } from 'lucide-react'

const SERVICES = [
  'International Shipping',
  'Air Freight',
  'Sea Freight',
  'Door-to-Door Delivery',
  'Cargo Handling',
  'Customs Clearance',
  'Warehousing',
  'Express Delivery',
]

const LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Track Shipment', href: '#tracking' },
  { label: 'Global Coverage', href: '#coverage' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
]

const SOCIALS = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter/X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: 'var(--color-navy-dark)' }}>
      {/* Top bar */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, var(--color-navy-dark), var(--color-gold), var(--color-navy-dark))' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center gold-gradient">
                <Globe size={20} className="text-navy" style={{ color: 'var(--color-navy)' }} />
              </div>
              <div>
                <div className="font-display text-white tracking-widest text-[15px] leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                  HARRYGRACE
                </div>
                <div className="text-[8px] tracking-[2.5px] uppercase leading-none mt-0.5" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}>
                  International Logistics
                </div>
              </div>
            </div>
            <p className="text-white/50 text-[13px] leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Lagos-based logistics and shipping company connecting Nigeria to 47+ countries worldwide since 2013.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[11px] tracking-[2px] uppercase font-bold mb-5"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-white/50 hover:text-white text-[13px] transition-colors text-left flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all group-hover:w-2"
                      style={{ background: 'var(--color-gold)' }}
                    />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-[11px] tracking-[2px] uppercase font-bold mb-5"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {LINKS.map((l, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-white/50 hover:text-white text-[13px] transition-colors text-left flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all group-hover:w-2"
                      style={{ background: 'var(--color-gold)' }}
                    />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4
              className="text-[11px] tracking-[2px] uppercase font-bold mb-5"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
            >
              Contact Info
            </h4>
            <div className="space-y-3 mb-7">
              {[
                { Icon: MapPin, text: '45 Apapa Road, Apapa, Lagos, Nigeria' },
                { Icon: Phone, text: '+234 801 234 5678' },
                { Icon: Mail, text: 'info@harrygrace-logistics.com' },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-2.5 text-white/50 text-[12.5px]" style={{ fontFamily: 'var(--font-body)' }}>
                  <Icon size={13} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-gold)' }} />
                  {text}
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h5
                className="text-[11px] tracking-[2px] uppercase font-bold mb-3"
                style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
              >
                Newsletter
              </h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2.5 rounded-lg text-[12.5px] outline-none text-white placeholder:text-white/30"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    fontFamily: 'var(--font-body)',
                  }}
                />
                <button
                  className="px-3 py-2.5 rounded-lg font-bold text-[12px] transition-all hover:opacity-90"
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C 0%, #DDB96A 100%)',
                    color: 'var(--color-navy)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px]"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-white/35" style={{ fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} Harrygrace International Logistics Venture. All rights reserved.
          </p>
          <div className="flex gap-5 text-white/35">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t, i) => (
              <button
                key={i}
                className="hover:text-white/70 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
