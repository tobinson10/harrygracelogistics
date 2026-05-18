import { useEffect, useRef, useState } from 'react'
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSent(true)
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    }, 1800)
  }

  const update = (k: string, v: string) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: '#fff' }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div
          className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5" style={{ background: 'var(--color-gold)' }} />
            <span
              className="text-[11px] tracking-[3px] uppercase font-semibold"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
            >
              Get In Touch
            </span>
          </div>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)', letterSpacing: '1px' }}
          >
            START YOUR SHIPMENT
            <span className="block text-gold-gradient">TODAY</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Info cards */}
            {[
              {
                icon: MapPin,
                label: 'Lagos Office',
                lines: ['Wing 204 Nahco complex, Muritala Mohammed International Airport', 'Lagos State', 'Nigeria'],
              },
              {
                icon: Phone,
                label: 'Phone & WhatsApp',
                lines: ['+234 706 830 3284'],
              },
              {
                icon: Mail,
                label: 'Email',
                lines: ['harryosa8@gmail.com', 'harryosa8@gmail.com'],
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="flex gap-4 mb-6 p-5 rounded-2xl transition-all hover:shadow-md"
                  style={{
                    background: 'var(--color-slate)',
                    border: '1px solid rgba(11,30,61,0.07)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,168,76,0.15)' }}
                  >
                    <Icon size={19} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <div>
                    <div
                      className="font-bold text-[13px] mb-1.5 uppercase tracking-wide"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}
                    >
                      {item.label}
                    </div>
                    {item.lines.map((line, j) => (
                      <div
                        key={j}
                        className="text-[13.5px]"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)' }}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2347068303284?text=Hello%20Harrygrace%20Logistics%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-6 py-4 rounded-2xl font-bold text-white text-[14px] transition-all hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #1DA851 100%)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* Map embed */}
            <div className="mt-6 rounded-2xl overflow-hidden" style={{ height: '200px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7200069853!2d3.3587876!3d6.4474844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68110a3%3A0xb9f24a291f24cf29!2sApapa%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Harrygrace Logistics Office Location"
              />
            </div>
          </div>

          {/* Right: form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div
              className="rounded-2xl p-8 lg:p-10"
              style={{
                background: 'var(--color-slate)',
                border: '1px solid rgba(11,30,61,0.08)',
              }}
            >
              {sent ? (
                <div className="text-center py-12 animate-fade-in">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(201,168,76,0.15)' }}
                  >
                    <CheckCircle2 size={32} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}
                  >
                    Message Received!
                  </h3>
                  <p
                    className="text-base max-w-sm mx-auto mb-6"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)' }}
                  >
                    Thank you for reaching out. Our team will respond within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-3 rounded-xl font-bold text-[13px] text-white"
                    style={{ background: 'var(--color-navy)', fontFamily: 'var(--font-heading)' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[12px] font-semibold mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => update('name', e.target.value)}
                      />
                      {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => update('email', e.target.value)}
                      />
                      {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[12px] font-semibold mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+234 XXX XXX XXXX"
                        value={form.phone}
                        onChange={e => update('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>
                        Service Required
                      </label>
                      <select
                        className="form-input"
                        value={form.service}
                        onChange={e => update('service', e.target.value)}
                      >
                        <option value="">Select a service</option>
                        <option>International Shipping</option>
                        <option>Air Freight</option>
                        <option>Sea Freight</option>
                        <option>Door-to-Door Delivery</option>
                        <option>Customs Clearance</option>
                        <option>Warehousing</option>
                        <option>Express Delivery</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-[12px] font-semibold mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Tell us about your shipment — origin, destination, cargo type, dimensions, and timeline..."
                      value={form.message}
                      onChange={e => update('message', e.target.value)}
                    />
                    {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-[15px] transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-60"
                    style={{
                      background: 'linear-gradient(135deg, #C9A84C 0%, #DDB96A 100%)',
                      color: 'var(--color-navy)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {submitting ? (
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70"/>
                      </svg>
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message & Get Quote
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
