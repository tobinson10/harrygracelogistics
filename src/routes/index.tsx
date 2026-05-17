import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Tracking from '@/components/Tracking'
import WhyUs from '@/components/WhyUs'
import Coverage from '@/components/Coverage'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'

export const Route = createFileRoute('/')({
  component: HarrygraceHome,
})

function HarrygraceHome() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('hgl-dark')
    if (stored === 'true') setDark(true)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('hgl-dark', String(dark))
  }, [dark])

  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <Nav dark={dark} onToggleDark={() => setDark(d => !d)} />
      <main>
        <Hero />
        <About />
        <Services />
        <Tracking />
        <WhyUs />
        <Coverage />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
