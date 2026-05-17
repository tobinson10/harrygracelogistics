import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQS = [
  {
    q: 'How long does international shipping from Lagos take?',
    a: 'Delivery times vary by destination and service type. Air freight to UK/US typically takes 3–7 business days. Sea freight takes 15–45 days depending on the destination. Express air services can deliver in 2–4 days to most major cities.',
  },
  {
    q: 'How does customs clearance work?',
    a: 'Our licensed customs brokers handle all import and export documentation on your behalf. We prepare shipping manifests, commercial invoices, packing lists, certificates of origin, and any destination-specific permits. Customs fees and duties at the destination country are communicated upfront.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers (domestic and international SWIFT/wire), online payments via card, and mobile payments. Corporate clients can arrange credit terms. All pricing is provided in NGN and USD equivalents with no hidden fees.',
  },
  {
    q: 'How do I track my shipment?',
    a: 'Every shipment receives a unique Harrygrace tracking number (HGL-YYYY-XXXX). You can track in real time using our tracking tool on this website, or receive automated SMS/email updates at each milestone. Our WhatsApp support can also provide instant status updates.',
  },
  {
    q: 'Do you offer cargo insurance?',
    a: 'Yes. We strongly recommend cargo insurance for all international shipments. We offer comprehensive all-risk cover that protects against loss, damage, and theft throughout the entire journey. Insurance is calculated as a percentage of the declared cargo value.',
  },
  {
    q: 'Can you ship personal effects and household goods?',
    a: 'Absolutely. We frequently handle personal effects, household goods, and diaspora shipments. We offer complete packing services, inventory documentation, and door-to-door delivery for individuals sending goods overseas or returning to Nigeria.',
  },
  {
    q: 'What items are prohibited from shipping?',
    a: 'Prohibited items include narcotics, weapons, explosive materials, counterfeit goods, and endangered species. Some items require special permits (pharmaceuticals, electronics, food products). Contact us before shipping any regulated goods and our compliance team will advise accordingly.',
  },
  {
    q: 'How do I get a shipping quote?',
    a: 'You can request a free quote through our contact form, WhatsApp, or by calling our Lagos office directly. Provide us with the cargo dimensions, weight, origin, and destination, and we\'ll respond with a detailed quote within 2 business hours.',
  },
]

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState<number | null>(0)

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
      id="faq"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: 'var(--color-slate)' }}
    >
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5" style={{ background: 'var(--color-gold)' }} />
            <span
              className="text-[11px] tracking-[3px] uppercase font-semibold"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}
            >
              Got Questions?
            </span>
            <div className="w-8 h-0.5" style={{ background: 'var(--color-gold)' }} />
          </div>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)', letterSpacing: '1px' }}
          >
            FREQUENTLY ASKED
            <span className="block text-gold-gradient">QUESTIONS</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                background: '#fff',
                border: open === i ? '1.5px solid rgba(201,168,76,0.5)' : '1.5px solid rgba(11,30,61,0.08)',
                transitionDelay: `${0.05 * i}s`,
                boxShadow: open === i ? '0 8px 32px rgba(201,168,76,0.1)' : '0 2px 8px rgba(11,30,61,0.04)',
              }}
            >
              {/* Question */}
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-semibold text-[14.5px] leading-snug"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: open === i ? 'var(--color-navy)' : 'var(--color-ink)',
                  }}
                >
                  {faq.q}
                </span>
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: open === i ? 'var(--color-gold)' : 'rgba(11,30,61,0.07)',
                  }}
                >
                  {open === i ? (
                    <ChevronUp size={15} style={{ color: 'var(--color-navy)' }} />
                  ) : (
                    <ChevronDown size={15} style={{ color: 'var(--color-ink-muted)' }} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className="faq-answer px-6"
                style={{ paddingBottom: open === i ? '20px' : '0' }}
                aria-hidden={open !== i}
              >
                <div
                  className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-60' : 'max-h-0'}`}
                >
                  <p
                    className="text-[13.5px] leading-relaxed pt-1"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)' }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-10 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)' }}>
            Still have questions? Our team is ready to help.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[13px] transition-all hover:opacity-90"
            style={{
              background: 'var(--color-navy)',
              color: '#fff',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
