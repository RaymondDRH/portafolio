export default function AboutView() {
  return (
    <div className="about-content">
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', marginBottom: 20 }}>
        # about.md
      </div>

      <h1 className="md-h1">Raymond Reyes</h1>
      <div className="md-blockquote">
        I build AI-native products that ship. Not mockups, not demos — real things real people use.
      </div>

      <h2 className="md-h2">Background</h2>
      <p className="md-p">
        B.S. in Information Sciences, CCNA certified, and 7+ years building for real clients
        before AI became mainstream. Started with WordPress and client work, evolved into
        full-stack development, and since 2025 I&apos;ve been building exclusively with AI-native stacks.
      </p>
      <p className="md-p">
        Mid-level developer with <span className="md-em">senior-level AI integration skills</span>.
        That combination is rare and increasingly valuable. Most devs know how to call an API.
        I know how to design a product <em>around</em> AI from day one.
      </p>

      <h2 className="md-h2">Career path</h2>
      <ul className="md-ul">
        <li><span className="md-strong">2018–2021 · Bump Media</span> — Web developer. WordPress, WooCommerce, client sites end-to-end.</li>
        <li><span className="md-strong">2021–2024 · Digital Crafter Lab</span> — Lead web developer. 10+ client projects, e-commerce, performance tuning.</li>
        <li><span className="md-strong">2025–Present · Independent</span> — AI-First Full-Stack Developer. 7 production products built with Next.js, Supabase, Claude API, Stripe.</li>
      </ul>

      <h2 className="md-h2">What makes me different</h2>
      <ul className="md-ul">
        <li><span className="md-strong">7 live products</span> — not side projects, real users and real auth</li>
        <li>End-to-end builder: architecture → UI → billing → deployment</li>
        <li>AI-first stack: <code className="md-code">Claude API</code> + production-tested patterns</li>
        <li>Client background — I understand what businesses actually need, not just what looks good technically</li>
      </ul>

      <h2 className="md-h2">Stack in production</h2>
      <p className="md-p">
        <span className="md-badge">Next.js</span>
        <span className="md-badge">TypeScript</span>
        <span className="md-badge">Supabase</span>
        <span className="md-badge">PostgreSQL</span>
        <span className="md-badge">Claude API</span>
        <span className="md-badge">Stripe</span>
        <span className="md-badge">n8n</span>
        <span className="md-badge">Cloudflare</span>
        <span className="md-badge">Vercel</span>
        <span className="md-badge">WebAuthn</span>
        <span className="md-badge">WordPress</span>
        <span className="md-badge">WooCommerce</span>
      </p>

      <h2 className="md-h2">Education</h2>
      <ul className="md-ul">
        <li><span className="md-strong">B.S. Information Sciences</span> — Univ. Politécnica Territorial Andrés Eloy Blanco (2006–2011)</li>
        <li><span className="md-strong">CCNA Routing &amp; Switching</span> — Cisco Networking Academy (2016)</li>
      </ul>

      <h2 className="md-h2">Availability</h2>
      <ul className="md-ul">
        <li>Open to <span className="md-strong">full-time roles</span> — competitive salary, aligned with AI-First developer market</li>
        <li>Available for <span className="md-strong">freelance / consulting</span> projects</li>
        <li>Based in <span className="md-strong">USA</span> · 100% remote</li>
        <li>Response time: <code className="md-code">&lt; 24 hours</code></li>
      </ul>
    </div>
  )
}
