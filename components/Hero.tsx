'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'

const roles = ['AI-First Developer', 'SaaS Builder', 'Automation Engineer', 'Full-Stack Dev']

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(29, 155, 140, ${p.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // GSAP entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    if (photoRef.current) {
      tl.fromTo(photoRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
    }
    if (headingRef.current) {
      tl.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    }
    if (subRef.current) {
      tl.fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    }
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
    }
  }, [])

  // Role rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(29,155,140,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(29,155,140,0.05),transparent_50%)]" />

      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 opacity-0"
            >
              <span className="text-text-muted text-2xl sm:text-3xl font-normal block mb-2">
                Hi, I&apos;m
              </span>
              <span className="text-text">Raymond </span>
              <span className="text-teal">Reyes</span>
            </h1>

            {/* Rotating role */}
            <div className="h-10 mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-teal-light text-lg sm:text-xl font-semibold"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p
              ref={subRef}
              className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-8 opacity-0"
            >
              I turn complex ideas into working products, using AI as a force multiplier.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0">
              <button
                onClick={() => scrollTo('#projects')}
                className="px-8 py-3.5 bg-teal hover:bg-teal-dark text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-teal/25 flex items-center gap-2 justify-center"
              >
                View My Work
                <ArrowDown size={16} />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="px-8 py-3.5 border border-teal text-teal hover:bg-teal/10 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 justify-center"
              >
                <Mail size={16} />
                Let&apos;s Talk
              </button>
            </div>
          </div>

          {/* Photo */}
          <div ref={photoRef} className="flex-shrink-0 opacity-0">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Rotating border */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #1D9B8C, transparent, #1D9B8C)',
                  animation: 'rotate-border 8s linear infinite',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full bg-navy" />
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-teal/10 blur-xl" />
              {/* Photo */}
              <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-navy">
                <Image
                  src="/photo.jpg"
                  alt="Raymond Reyes"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  )
}
