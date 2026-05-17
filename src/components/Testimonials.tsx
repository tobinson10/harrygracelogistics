import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Adebayo Okonkwo',
    title: 'CEO, Okonkwo Trading Company',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: 'Harrygrace handled the import of industrial equipment from China for our new factory. Everything was cleared through customs faster than any previous provider, and delivered door-to-door within the promised window. Absolutely exceptional service.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80',
  },
  {
    name: 'Sarah Mitchell',
    title: 'Import Manager, Meridian Retail Ltd',
    location: 'Birmingham, United Kingdom',
    rating: 5,
    text: 'We\'ve been using Harrygrace to ship goods from Nigeria to our UK warehouses for three years. Their reliability is unmatched. The live tracking feature gives us full visibility, and their team is always reachable when we need updates.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80',
  },
  {
    name: 'Chen Yuxiang',
    title: 'Procurement Director, SinoTrade Corp',
    location: 'Shenzhen, China',
    rating: 5,
    text: 'Moving goods from Lagos to our distribution centers in China required a trusted partner. Harrygrace coordinated everything seamlessly — documentation, customs, freight forwarding. I recommend them to every Nigerian supplier we work with.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80',
  },
  {
    name: 'Fatima Al-Hassan',
    title: 'Business Owner, Al-Hassan Imports',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Shipping fabric and textile goods from Lagos to Dubai used to be stressful. With Harrygrace, everything is straightforward. Their team handled all the paperwork, gave me regular updates, and delivered on time. I\'m a customer for life.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=96&q=80',
  },
  {
    name: 'Emeka Nwachukwu',
    title: 'Diaspora Client',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'I sent a large personal shipment from Lagos back to Canada — electronics, clothing, household items. Harrygrace packaged everything professionally, handled Canadian customs, and delivered to my door. Genuinely impressive for the price.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!autoplay) return
    const t = setInterval(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), 4500)
    return () => clearInterval(t)
  }, [autoplay])

  const prev = () => { setAutoplay(false); setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) }
  const next = () => { setAutoplay(false); setCurrent(c => (c + 1) % TESTIMONIALS.length) }

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: '#fff' }}
    >
      <div className="max-w-5xl mx-auto px-5 lg:px-10">
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
              Client Stories
            </span>
            <div className="w-8 h-0.5" style={{ background: 'var(--color-gold)' }} />
          </div>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)', letterSpacing: '1px' }}
          >
            WHAT OUR
            <span className="block text-gold-gradient">CLIENTS SAY</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`relative transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Cards */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-600"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 p-8 lg:p-12" style={{ background: 'var(--color-slate)' }}>
                  {/* Quote mark */}
                  <div
                    className="text-[80px] leading-none font-serif mb-2 -mt-4 select-none"
                    style={{ color: 'rgba(201,168,76,0.2)', fontFamily: 'Georgia, serif' }}
                  >
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} fill="#C9A84C" style={{ color: 'var(--color-gold)' }} />
                    ))}
                  </div>

                  {/* Text */}
                  <p
                    className="text-[15px] lg:text-[16.5px] leading-relaxed mb-8"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)', fontStyle: 'italic' }}
                  >
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                      style={{ border: '3px solid rgba(201,168,76,0.4)' }}
                    />
                    <div>
                      <div
                        className="font-bold text-[15px]"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}
                      >
                        {t.name}
                      </div>
                      <div
                        className="text-[12.5px]"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)' }}
                      >
                        {t.title}
                      </div>
                      <div
                        className="text-[11px] mt-0.5"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}
                      >
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i) }}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: current === i ? '28px' : '8px',
                    background: current === i ? 'var(--color-gold)' : 'rgba(11,30,61,0.2)',
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: 'var(--color-navy)',
                  color: '#fff',
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C 0%, #DDB96A 100%)',
                  color: 'var(--color-navy)',
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
