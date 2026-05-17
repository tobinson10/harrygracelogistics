import { useEffect, useRef, useState } from 'react'
import { Search, MapPin, Package, Truck, CheckCircle2, Clock } from 'lucide-react'

const DEMO_STEPS = [
  { label: 'Shipment Received', location: 'Lagos, Nigeria', time: 'Dec 14 – 09:12', done: true },
  { label: 'Customs Clearance', location: 'Murtala Mohammed Airport', time: 'Dec 14 – 14:45', done: true },
  { label: 'In Transit – Air Freight', location: 'Enroute London Heathrow', time: 'Dec 15 – 02:30', done: true },
  { label: 'Arrived at Destination Hub', location: 'London, United Kingdom', time: 'Dec 15 – 16:20', done: false },
  { label: 'Out for Delivery', location: 'London Local Depot', time: 'Estimated Dec 16', done: false },
]

const SAMPLE_IDS = ['HGL-2025-7831', 'HGL-2025-4492', 'HGL-2025-9017']

export default function Tracking() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [trackingId, setTrackingId] = useState('')
  const [searching, setSearching] = useState(false)
  const [result, setResult] = useState<null | 'found' | 'notfound'>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  // Animate steps when result found
  useEffect(() => {
    if (result !== 'found') return
    setActiveStep(0)
    const timer = setInterval(() => {
      setActiveStep(s => {
        if (s >= DEMO_STEPS.length - 1) { clearInterval(timer); return s }
        return s + 1
      })
    }, 400)
    return () => clearInterval(timer)
  }, [result])

  const handleSearch = () => {
    if (!trackingId.trim()) return
    setSearching(true)
    setResult(null)
    setTimeout(() => {
      setSearching(false)
      const found = SAMPLE_IDS.some(id =>
        id.toLowerCase().includes(trackingId.toLowerCase())
      ) || trackingId.startsWith('HGL')
      setResult(found ? 'found' : 'notfound')
    }, 1800)
  }

  const handleSample = (id: string) => {
    setTrackingId(id)
    setResult(null)
  }

  return (
    <section
      id="tracking"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--color-navy)' }}
    >
      {/* BG decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 60%), radial-gradient(circle at 80% 20%, #C9A84C 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-10">
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
              Live Tracking
            </span>
            <div className="w-8 h-0.5" style={{ background: 'var(--color-gold)' }} />
          </div>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] text-white leading-tight mb-3"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '1px' }}
          >
            TRACK YOUR
            <span className="block text-gold-gradient">SHIPMENT</span>
          </h2>
          <p
            className="text-white/60 max-w-lg mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Enter your Harrygrace tracking number to get real-time updates on your shipment's location and status.
          </p>
        </div>

        {/* Search box */}
        <div
          className={`rounded-2xl p-6 lg:p-8 mb-8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                type="text"
                placeholder="Enter tracking ID (e.g. HGL-2025-7831)"
                value={trackingId}
                onChange={e => setTrackingId(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-white placeholder:text-white/30 text-[14.5px] outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  fontFamily: 'var(--font-body)',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.6)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={searching}
              className="px-8 py-4 rounded-xl font-bold text-[14px] transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #DDB96A 100%)',
                color: 'var(--color-navy)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {searching ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70"/>
                  </svg>
                  Searching...
                </span>
              ) : (
                'Track Now'
              )}
            </button>
          </div>

          {/* Sample IDs */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-white/40 text-[12px]" style={{ fontFamily: 'var(--font-body)' }}>
              Try sample:
            </span>
            {SAMPLE_IDS.map(id => (
              <button
                key={id}
                onClick={() => handleSample(id)}
                className="text-[12px] px-3 py-1 rounded-lg transition-colors"
                style={{
                  background: 'rgba(201,168,76,0.12)',
                  color: 'var(--color-gold)',
                  fontFamily: 'var(--font-heading)',
                  border: '1px solid rgba(201,168,76,0.25)',
                }}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        {/* Result: not found */}
        {result === 'notfound' && (
          <div
            className="rounded-2xl p-6 text-center animate-fade-in"
            style={{
              background: 'rgba(255,80,80,0.08)',
              border: '1px solid rgba(255,80,80,0.25)',
            }}
          >
            <p className="text-red-400 font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
              Tracking ID not found. Please check your ID or contact support.
            </p>
          </div>
        )}

        {/* Result: found — progress tracker */}
        {result === 'found' && (
          <div
            className="rounded-2xl p-6 lg:p-8 animate-fade-in"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(201,168,76,0.3)',
            }}
          >
            {/* Shipment header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div>
                <div className="text-white/40 text-[11px] tracking-[2px] uppercase mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  Tracking Number
                </div>
                <div className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                  {trackingId}
                </div>
              </div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold"
                style={{
                  background: 'rgba(201,168,76,0.15)',
                  color: 'var(--color-gold)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                In Transit
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-0">
              {DEMO_STEPS.map((step, i) => {
                const isActive = i <= activeStep
                const isLast = i === DEMO_STEPS.length - 1
                return (
                  <div key={i} className="flex gap-4">
                    {/* Line + dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500"
                        style={{
                          background: isActive
                            ? step.done
                              ? 'rgba(201,168,76,0.3)'
                              : 'rgba(201,168,76,0.15)'
                            : 'rgba(255,255,255,0.06)',
                          border: isActive
                            ? '2px solid rgba(201,168,76,0.7)'
                            : '2px solid rgba(255,255,255,0.12)',
                          transform: isActive ? 'scale(1)' : 'scale(0.85)',
                        }}
                      >
                        {step.done && isActive ? (
                          <CheckCircle2 size={14} style={{ color: 'var(--color-gold)' }} />
                        ) : isActive ? (
                          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-gold)' }} />
                        ) : (
                          <Clock size={14} className="text-white/20" />
                        )}
                      </div>
                      {!isLast && (
                        <div
                          className="w-0.5 flex-1 my-1 min-h-[32px] transition-all duration-700"
                          style={{
                            background: isActive
                              ? 'rgba(201,168,76,0.4)'
                              : 'rgba(255,255,255,0.08)',
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`pb-6 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                      <div
                        className="font-semibold text-[14px] mb-1"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          color: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {step.label}
                      </div>
                      <div className="flex items-center gap-3 text-[12px]">
                        <span className="flex items-center gap-1.5 text-white/50">
                          <MapPin size={11} />
                          {step.location}
                        </span>
                        <span className="text-white/30">·</span>
                        <span style={{ color: isActive ? 'rgba(201,168,76,0.8)' : 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-body)' }}>
                          {step.time}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
