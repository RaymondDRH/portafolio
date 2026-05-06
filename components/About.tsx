'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stack = [
  { name: 'Next.js', icon: '▲', color: '#ffffff' },
  { name: 'React', icon: '⚛', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
  { name: 'Tailwind', icon: '✦', color: '#38BDF8' },
  { name: 'Supabase', icon: '⚡', color: '#3ECF8E' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  { name: 'Claude AI', icon: '◆', color: '#1D9B8C' },
  { name: 'Gemini', icon: '✦', color: '#4285F4' },
  { name: 'n8n', icon: '⟳', color: '#EA4B71' },
  { name: 'Stripe', icon: 'S', color: '#635BFF' },
  { name: 'Cloudflare', icon: '☁', color: '#F6821F' },
  { name: 'WordPress', icon: 'W', color: '#21759B' },
  { name: 'Vercel', icon: '▲', color: '#ffffff' },
  { name: 'Node.js', icon: '⬡', color: '#339933' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-navy-mid">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-8">
            Building real products,{' '}
            <span className="text-teal">not just code</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Story */}
            <div className="space-y-4">
              <p className="text-text-muted leading-relaxed">
                I started from zero — no formal computer science degree, no bootcamp. I learned by building real things for real people, using AI as my co-pilot every step of the way.
              </p>
              <p className="text-text-muted leading-relaxed">
                Today I run <span className="text-teal font-medium">AICrafterLab LLC</span>, an AI + digital marketing agency where I help businesses digitize and automate their operations using modern AI tools.
              </p>
              <p className="text-text-muted leading-relaxed">
                I&apos;ve built SaaS platforms, church management systems, WhatsApp automation bots, and AI-powered tools — all shipped to production. My edge is combining full-stack development with deep AI integration from day one.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <div className="px-4 py-2 border border-border rounded-lg text-sm text-text-muted">
                  📍 Based in USA
                </div>
                <div className="px-4 py-2 border border-border rounded-lg text-sm text-text-muted">
                  🌎 Available Remote
                </div>
                <div className="px-4 py-2 border border-teal/30 bg-teal/5 rounded-lg text-sm text-teal">
                  ✓ Open to opportunities
                </div>
              </div>
            </div>

            {/* Stack icons */}
            <div>
              <p className="text-sm text-text-muted mb-4 font-medium">Technologies I work with:</p>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {stack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="group relative flex flex-col items-center gap-1 p-3 rounded-xl border border-border bg-navy hover:border-teal/40 hover:bg-teal/5 transition-all duration-200 cursor-default"
                  >
                    <span
                      className="text-lg font-bold"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </span>
                    <span className="text-[10px] text-text-muted text-center leading-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
