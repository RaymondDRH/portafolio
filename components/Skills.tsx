'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    color: '#61DAFB',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    color: '#3ECF8E',
    skills: ['Node.js', 'Supabase', 'PostgreSQL', 'REST APIs', 'API Routes', 'Edge Functions'],
  },
  {
    category: 'AI & Automation',
    color: '#1D9B8C',
    skills: ['Claude API', 'Gemini API', 'n8n', 'Zapier', 'AI Agents', 'Prompt Engineering', 'WhatsApp Bots'],
  },
  {
    category: 'CMS & E-commerce',
    color: '#21759B',
    skills: ['WordPress', 'WooCommerce', 'Plugin Config', 'Custom Themes', 'Page Builders'],
  },
  {
    category: 'Infrastructure & Hosting',
    color: '#F6821F',
    skills: ['Vercel', 'Cloudflare', 'DNS Config', 'SSL Certificates', 'VPS', 'cPanel', 'Stripe'],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 bg-navy-mid">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
          My <span className="text-teal">tech stack</span>
        </h2>
        <p className="text-text-muted mb-12 max-w-lg">
          Tools and technologies I use to build products from idea to production.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl border border-border bg-navy hover:border-teal/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <h3 className="font-semibold text-text">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.1 + si * 0.04, duration: 0.3 }}
                    className="px-3 py-1 bg-navy-mid border border-border text-text-muted text-xs rounded-lg hover:border-teal/40 hover:text-teal transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
