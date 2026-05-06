'use client'

export default function HomeView() {
  return (
    <div className="home-view">
      <div className="home-avail">
        <span className="avail-dot" />
        Available for hire
      </div>

      <h1 className="home-name">Raymond Reyes</h1>
      <div className="home-role">AI-First Full-Stack Developer</div>

      <p className="home-bio">
        I build AI-native products from scratch — real auth, real billing, real users.
        From prompt chains to production in days, not months. No demos, no tutorials.
        Things that actually ship.
      </p>

      <div className="home-stats">
        <div className="home-stat">
          <span className="home-stat-num">7+</span>
          <span className="home-stat-label">Products shipped</span>
        </div>
        <div className="home-stat">
          <span className="home-stat-num">3yr</span>
          <span className="home-stat-label">AI development</span>
        </div>
        <div className="home-stat">
          <span className="home-stat-num">24h</span>
          <span className="home-stat-label">Response time</span>
        </div>
      </div>

      <div className="home-ctas">
        <button
          className="home-cta-btn primary"
          onClick={() => document.dispatchEvent(new CustomEvent('vsc-open', { detail: 'projects' }))}
        >
          → View projects
        </button>
        <a href="mailto:raymondreyesh@gmail.com" className="home-cta-btn secondary">
          Hire me
        </a>
      </div>

      <div className="home-tags">
        {['Next.js', 'TypeScript', 'Supabase', 'Claude API', 'Stripe', 'n8n', 'Cloudflare'].map(t => (
          <span key={t} className="home-tag">{t}</span>
        ))}
      </div>
    </div>
  )
}
