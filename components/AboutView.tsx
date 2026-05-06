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
        Started from zero — no CS degree, no bootcamp. Just curiosity, consistency, and a lot of building.
        I help businesses leverage AI and automation to grow — but I don&apos;t just sell services, I build actual products.
      </p>
      <p className="md-p">
        Mid-level developer with <span className="md-em">senior-level AI integration skills</span>.
        That combination is rare and increasingly valuable. Most devs know how to call an API.
        I know how to design a product <em>around</em> AI from day one.
      </p>

      <h2 className="md-h2">What makes me different</h2>
      <ul className="md-ul">
        <li><span className="md-strong">7 live products</span> — not side projects, real users and real auth</li>
        <li>End-to-end builder: architecture → UI → billing → deployment</li>
        <li>AI-first stack: <code className="md-code">Claude API</code> + production-tested patterns</li>
        <li>Self-taught — which means I learn whatever I need, when I need it</li>
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
      </p>

      <h2 className="md-h2">Philosophy</h2>
      <div className="md-blockquote">
        Concepts over shortcuts. AI is a tool — you need to know what to ask, and why what it
        tells you might be wrong.
      </div>
      <p className="md-p">
        I push back when someone wants to copy-paste code without understanding it.
        I care about developers growing, not just shipping.
      </p>

      <h2 className="md-h2">Availability</h2>
      <ul className="md-ul">
        <li>Open to <span className="md-strong">full-time roles</span> — <code className="md-code">$70K–$120K</code> range</li>
        <li>Available for <span className="md-strong">freelance / consulting</span> projects</li>
        <li>Based in <span className="md-strong">USA</span> · 100% remote</li>
        <li>Response time: <code className="md-code">&lt; 24 hours</code></li>
      </ul>
    </div>
  )
}
