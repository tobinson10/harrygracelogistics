'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Track Shipment', href: '#tracking' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Contact', href: '#contact' },
]

interface NavProps {
  dark: boolean
  onToggleDark: () => void
}

export default function Nav({ dark, onToggleDark }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${sec}`)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-scrolled py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
  <img 
    src="/logo.png" 
    alt="HarryGrace International Logistics" 
    className="w-10 h-10 object-contain"
  />
</div>
            <div className="text-left">
              <div
                className="font-display text-white tracking-widest text-[17px] leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                HARRYGRACE
              </div>
              <div
                className="text-[9px] tracking-[3px] text-gold uppercase leading-none mt-0.5"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}
              >
                International Logistics
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-[13.5px] font-medium tracking-wide transition-all duration-200 ${
                    activeLink === link.href
                      ? 'text-gold bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/8'
                  }`}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: activeLink === link.href ? 'var(--color-gold)' : undefined,
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={onToggleDark}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Get Quote CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg text-navy text-[13px] font-semibold tracking-wide transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #DDB96A 100%)',
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-navy)',
              }}
            >
              Get Quote
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-all"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 lg:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-72 h-full flex flex-col pt-20 pb-8 px-6 transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ background: 'var(--color-navy)' }}
        >
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-left py-4 border-b border-white/10 text-[15px] font-medium transition-colors ${
                activeLink === link.href ? 'text-gold' : 'text-white/80 hover:text-white'
              }`}
              style={{
                fontFamily: 'var(--font-heading)',
                color: activeLink === link.href ? 'var(--color-gold)' : undefined,
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-6 px-6 py-3 rounded-xl text-navy font-bold text-[14px] gold-gradient"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </>
  )
}
