'use client'

import { useMemo } from 'react'
import { useState, useEffect, useRef } from 'react'

function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now()
            const dur = 1400
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / dur)
              const eased = 1 - Math.pow(1 - p, 3)
              setN(Math.round(to * eased))
              if (p < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])

  return <b ref={ref}>{n}</b>
}

const SKILL_GROUPS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 007 4.5v.5A3 3 0 005 8a3 3 0 001 2.2A3 3 0 005 13a3 3 0 002 2.8v.7a2.5 2.5 0 005 0V2z" />
        <path d="M14.5 2A2.5 2.5 0 0117 4.5v.5a3 3 0 012 3 3 3 0 01-1 2.2A3 3 0 0119 13a3 3 0 01-2 2.8v.7a2.5 2.5 0 01-5 0V2" />
      </svg>
    ),
    title: 'AI & LLM', meta: 'PRIMARY', span: 'span-6',
    skills: [
      { name: 'Claude API', primary: true },
      { name: 'Prompt engineering', primary: true },
      { name: 'Tool use / agents', primary: true },
      { name: 'RAG' },
      { name: 'Embeddings' },
      { name: 'Streaming' },
      { name: 'Function calling' },
      { name: 'Vision' },
    ],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 8l10 6 10-6-10-6zM2 16l10 6 10-6M2 12l10 6 10-6" />
      </svg>
    ),
    title: 'Frontend', meta: 'DAILY', span: 'span-6',
    skills: [
      { name: 'Next.js', primary: true },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind' },
      { name: 'Server Actions' },
      { name: 'shadcn/ui' },
      { name: 'Web Components' },
    ],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
      </svg>
    ),
    title: 'Backend & Data', meta: 'DAILY', span: 'span-4',
    skills: [
      { name: 'Supabase', primary: true },
      { name: 'PostgreSQL' },
      { name: 'Edge Functions' },
      { name: 'RLS policies' },
      { name: 'Node.js' },
    ],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Automation', meta: 'AGENCY', span: 'span-4',
    skills: [
      { name: 'n8n', primary: true },
      { name: 'Baileys / WhatsApp' },
      { name: 'Webhooks' },
      { name: 'CRM integrations' },
      { name: 'Cron / queues' },
    ],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.8-3.8a6 6 0 01-7.9 7.9l-6.9 6.9a2.1 2.1 0 11-3-3l6.9-6.9a6 6 0 017.9-7.9l-3.8 3.8z" />
      </svg>
    ),
    title: 'Infra & Payments', meta: 'PROD', span: 'span-4',
    skills: [
      { name: 'Stripe', primary: true },
      { name: 'Vercel' },
      { name: 'Cloudflare' },
      { name: 'WebAuthn' },
      { name: 'Magic Links' },
      { name: 'OAuth' },
    ],
  },
]

function GitHubCard() {
  const cells = useMemo(() => {
    const arr: number[] = []
    let seed = 7
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 }
    for (let i = 0; i < 7 * 26; i++) {
      const r = rand()
      let level = 0
      if (r > 0.35) level = 1
      if (r > 0.55) level = 2
      if (r > 0.75) level = 3
      if (r > 0.9) level = 4
      if (i > 7 * 18 && r > 0.3) level = Math.min(4, level + 1)
      arr.push(level)
    }
    return arr
  }, [])

  return (
    <div className="gh-card reveal">
      <div className="gh-head">
        <div>
          <div className="skill-cat-title" style={{ marginBottom: 4 }}>GitHub activity</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>
            @RaymondDRH · last 6 months
          </div>
        </div>
        <div className="gh-stats">
          <div><Counter to={847} />commits</div>
          <div><Counter to={42} />PRs merged</div>
          <div><Counter to={18} />repos</div>
        </div>
      </div>
      <div className="heatmap">
        {cells.map((l, i) => (
          <div key={i} className={`cell${l > 0 ? ` l${l}` : ''}`} />
        ))}
      </div>
      <div className="gh-legend">
        less
        <div className="swatch" style={{ background: 'rgba(255,255,255,0.03)' }} />
        <div className="swatch" style={{ background: 'rgba(29,155,140,0.2)' }} />
        <div className="swatch" style={{ background: 'rgba(29,155,140,0.4)' }} />
        <div className="swatch" style={{ background: 'rgba(29,155,140,0.65)' }} />
        <div className="swatch" style={{ background: 'var(--accent)' }} />
        more
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ paddingBlock: 'var(--section-py)' }}>
      <div className="container">
        <div className="projects-head">
          <div>
            <div className="eyebrow reveal">03 — Stack</div>
            <h2 className="section-title reveal reveal-delay-1">The tools I <em>actually use</em><br />in production.</h2>
          </div>
          <p className="section-lede reveal reveal-delay-2">
            No bullshit list of every framework I&apos;ve heard of. This is what runs on my live products today.
          </p>
        </div>
        <div className="skills-grid">
          {SKILL_GROUPS.map((g, i) => (
            <div key={g.title} className={`skill-cat ${g.span} reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="skill-cat-head">
                <div className="skill-cat-icon">{g.icon}</div>
                <div className="skill-cat-title">{g.title}</div>
                <div className="skill-cat-meta">{g.meta}</div>
              </div>
              <div className="skill-list">
                {g.skills.map((s) => (
                  <div key={s.name} className={`skill${s.primary ? ' primary' : ''}`}>
                    {s.primary && <span className="dot" />}
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <GitHubCard />
      </div>
    </section>
  )
}
