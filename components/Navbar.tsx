'use client'

import { useState, useEffect } from 'react'

const links = [
  { id: 'about', label: '01 / about' },
  { id: 'projects', label: '02 / work' },
  { id: 'skills', label: '03 / stack' },
  { id: 'contact', label: '04 / contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const r = el.getBoundingClientRect()
          if (r.top <= 120 && r.bottom >= 120) {
            setActive(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
          <div className="brand-mark"><span>R</span></div>
          <div className="brand-text">
            <b>Raymond Reyes</b>
            <small>AICrafterLab LLC</small>
          </div>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollTo(l.id) }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
        >
          Hire Raymond{' '}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H8M17 7V16" />
          </svg>
        </a>
      </div>
    </nav>
  )
}
