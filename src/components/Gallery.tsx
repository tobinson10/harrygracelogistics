import { useEffect, useRef, useState } from 'react'

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    alt: 'Container ship at sea',
    label: 'Sea Freight',
    span: 'lg:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    alt: 'Cargo airplane in flight',
    label: 'Air Freight',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    alt: 'Shipping containers at port',
    label: 'Port Operations',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    alt: 'Modern warehouse interior',
    label: 'Warehousing',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
    alt: 'Delivery trucks on highway',
    label: 'Road Freight',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80',
    alt: 'Parcel delivery at door',
    label: 'Last-Mile Delivery',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=600&q=80',
    alt: 'Cargo being loaded on aircraft',
    label: 'Cargo Handling',
    span: 'lg:col-span-2',
  },
]

export default function Gallery() {
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
      id="gallery"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: 'var(--color-navy-dark)' }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
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
              Our Operations
            </span>
            <div className="w-8 h-0.5" style={{ background: 'var(--color-gold)' }} />
          </div>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '1px' }}
          >
            LOGISTICS IN
            <span className="block text-gold-gradient">ACTION</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${img.span} ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                height: i === 0 ? '280px' : i === 6 ? '260px' : '200px',
                transitionDelay: `${0.06 * i}s`,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div
                className="gallery-overlay absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(7,20,42,0.9), transparent)' }}
              >
                <span
                  className="text-white text-[13px] font-semibold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {img.label}
                </span>
              </div>

              {/* Label pill (always visible) */}
              <div
                className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg text-[11px] font-semibold"
                style={{
                  background: 'rgba(201,168,76,0.2)',
                  border: '1px solid rgba(201,168,76,0.4)',
                  color: 'var(--color-gold)',
                  fontFamily: 'var(--font-heading)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
