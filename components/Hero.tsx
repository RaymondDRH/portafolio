'use client'

import RobotGlyph from './RobotGlyph'

export default function Hero() {
  const year = new Date().getFullYear()

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Text */}
          <div>
            <div className="hero-status reveal in">
              <span className="status-dot" />
              Available for full-time + freelance · {year}
            </div>
            <h1 className="reveal in reveal-delay-1">
              Building <span className="accent">AI-native</span><br />
              products that<br />
              <span className="stroke">actually ship.</span>
            </h1>
            <p className="hero-sub reveal in reveal-delay-2">
              I&apos;m <b>Raymond Reyes</b> — an AI-first full-stack developer and founder of <b>AICrafterLab</b>. I build production SaaS with Claude, Next.js, Supabase, and Stripe.
            </p>
            <div className="hero-cta-row reveal in reveal-delay-3">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                See selected work{' '}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#" className="btn btn-ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                </svg>{' '}
                Download résumé
              </a>
            </div>
            <div className="hero-meta reveal in reveal-delay-4">
              <div><b>USA · Remote</b>Location</div>
              <div><b>$70K – $120K</b>Full-time range</div>
              <div><b>Open</b>Freelance AI work</div>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual reveal in reveal-delay-2">
            <div className="orbit-stack">
              <div className="orbit-ring r1" />
              <div className="orbit-ring r2" />
              <div className="orbit-ring r3" />
            </div>
            <div className="hero-glyph" style={{ color: 'var(--accent-2)' }}>
              <RobotGlyph size={220} animated />
              <div className="hero-glyph-label">NOVA · v2.6</div>
            </div>
            <div className="float-tag t1">claude-sonnet-4.5</div>
            <div className="float-tag t2">$ npm run ship</div>
            <div className="float-tag t3">supabase / edge</div>
            <div className="float-tag t4">7 products live</div>
          </div>
        </div>
      </div>
    </section>
  )
}
