'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-teal">R</span>
          <span className="text-text">R</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-text-muted hover:text-text transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#contact')}
            className="px-5 py-2 bg-teal hover:bg-teal-dark text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-teal/20"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-muted hover:text-text"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md border-b border-border px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-text-muted hover:text-text transition-colors text-left text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLink('#contact')}
              className="mt-2 px-5 py-2.5 bg-teal hover:bg-teal-dark text-white rounded-lg text-sm font-semibold transition-colors w-full"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
