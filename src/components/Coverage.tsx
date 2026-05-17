import { useEffect, useRef, useState } from 'react'

/* Simplified SVG world map — key city coordinates as [cx, cy] on a 900x450 viewBox */
const CITIES = [
  { name: 'Lagos', cx: 430, cy: 248, home: true },
  { name: 'London', cx: 452, cy: 132 },
  { name: 'New York', cx: 248, cy: 152 },
  { name: 'Toronto', cx: 232, cy: 138 },
  { name: 'Dubai', cx: 558, cy: 198 },
  { name: 'Beijing', cx: 692, cy: 162 },
  { name: 'Johannesburg', cx: 492, cy: 300 },
  { name: 'Paris', cx: 456, cy: 134 },
  { name: 'Berlin', cx: 468, cy: 126 },
  { name: 'Sydney', cx: 762, cy: 320 },
  { name: 'Mumbai', cx: 600, cy: 216 },
  { name: 'São Paulo', cx: 296, cy: 308 },
]

const ROUTES = CITIES.filter(c => !c.home).map(c => ({
  from: { cx: 430, cy: 248 },
  to: { cx: c.cx, cy: c.cy },
  name: c.name,
}))

const REGIONS = [
  { name: 'North America', countries: ['USA', 'Canada', 'Mexico'], color: '#3B82F6' },
  { name: 'Europe', countries: ['UK', 'Germany', 'France', 'Netherlands', 'Italy', 'Spain'], color: '#8B5CF6' },
  { name: 'Middle East', countries: ['Dubai (UAE)', 'Saudi Arabia', 'Qatar', 'Kuwait'], color: '#F59E0B' },
  { name: 'Asia', countries: ['China', 'India', 'Japan', 'South Korea', 'Singapore'], color: '#10B981' },
  { name: 'Africa', countries: ['South Africa', 'Ghana', 'Kenya', 'Egypt', 'Cameroon'], color: '#EF4444' },
  { name: 'Americas', countries: ['Brazil', 'USA', 'Canada', 'Jamaica', 'Trinidad'], color: '#06B6D4' },
]

export default function Coverage() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

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
      id="coverage"
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
              Global Network
            </span>
            <div className="w-8 h-0.5" style={{ background: 'var(--color-gold)' }} />
          </div>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] text-white leading-tight mb-3"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '1px' }}
          >
            SHIPPING TO
            <span className="block text-gold-gradient">47+ COUNTRIES</span>
          </h2>
          <p
            className="text-white/60 max-w-lg mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            From our Lagos hub, we connect Nigeria to the world — every major city, every continent.
          </p>
        </div>

        {/* Map */}
        <div
          className={`relative rounded-2xl overflow-hidden mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{
            background: 'rgba(11,30,61,0.8)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <svg
            viewBox="0 0 900 450"
            className="w-full"
            style={{ height: 'clamp(260px, 40vw, 420px)' }}
          >
            {/* Ocean background */}
            <rect width="900" height="450" fill="rgba(7,20,42,0.6)" />

            {/* Simple continental shapes as paths */}
            {/* North America */}
            <path d="M 80 80 L 280 70 L 290 200 L 220 240 L 170 220 L 100 180 Z" fill="rgba(21,40,72,0.9)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
            {/* South America */}
            <path d="M 200 240 L 320 240 L 340 380 L 260 400 L 200 360 Z" fill="rgba(21,40,72,0.9)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
            {/* Europe */}
            <path d="M 420 90 L 520 80 L 530 150 L 460 160 L 430 140 Z" fill="rgba(21,40,72,0.9)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
            {/* Africa */}
            <path d="M 400 170 L 520 170 L 540 320 L 460 360 L 400 320 Z" fill="rgba(21,40,72,0.9)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
            {/* Middle East / Asia */}
            <path d="M 530 140 L 760 120 L 780 240 L 680 280 L 560 260 L 530 200 Z" fill="rgba(21,40,72,0.9)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
            {/* Australia */}
            <path d="M 710 280 L 820 280 L 830 360 L 750 380 L 700 340 Z" fill="rgba(21,40,72,0.9)" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>

            {/* Route lines from Lagos */}
            {visible && ROUTES.map((route, i) => {
              const mx = (route.from.cx + route.to.cx) / 2
              const my = Math.min(route.from.cy, route.to.cy) - 50
              return (
                <path
                  key={i}
                  d={`M ${route.from.cx} ${route.from.cy} Q ${mx} ${my} ${route.to.cx} ${route.to.cy}`}
                  fill="none"
                  stroke="rgba(201,168,76,0.35)"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  className="route-path"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              )
            })}

            {/* City dots */}
            {CITIES.map((city, i) => (
              <g key={i} className="cursor-pointer" onMouseEnter={() => setHoveredCity(city.name)} onMouseLeave={() => setHoveredCity(null)}>
                {city.home ? (
                  <>
                    <circle cx={city.cx} cy={city.cy} r="10" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1.5"/>
                    <circle cx={city.cx} cy={city.cy} r="5" fill="#C9A84C"/>
                    <circle cx={city.cx} cy={city.cy} r="10" fill="transparent" stroke="#C9A84C" strokeWidth="1">
                      <animate attributeName="r" values="10;18;10" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  </>
                ) : (
                  <>
                    <circle cx={city.cx} cy={city.cy} r="4" fill="rgba(201,168,76,0.3)" stroke="#C9A84C" strokeWidth="1"/>
                    <circle cx={city.cx} cy={city.cy} r="2.5" fill="#C9A84C" opacity="0.9"/>
                  </>
                )}
                {/* Label */}
                {(hoveredCity === city.name || city.home) && (
                  <text
                    x={city.cx + 8}
                    y={city.cy + 4}
                    fontSize="8"
                    fill={city.home ? '#C9A84C' : 'rgba(255,255,255,0.9)'}
                    fontFamily="var(--font-heading)"
                    fontWeight={city.home ? '700' : '500'}
                  >
                    {city.name}
                  </text>
                )}
              </g>
            ))}

            {/* Lagos label always visible */}
            <text x="442" y="245" fontSize="8" fill="#C9A84C" fontFamily="'Syne', sans-serif" fontWeight="700">Lagos</text>
          </svg>
        </div>

        {/* Region cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {REGIONS.map((region, i) => (
            <div
              key={i}
              className="rounded-xl p-4 hover:scale-[1.03] transition-transform cursor-default"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="text-[10px] tracking-[2px] uppercase font-bold mb-2"
                style={{ color: region.color, fontFamily: 'var(--font-heading)' }}
              >
                {region.name}
              </div>
              {region.countries.map((c, j) => (
                <div
                  key={j}
                  className="text-[11.5px] text-white/60 leading-snug"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {c}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
