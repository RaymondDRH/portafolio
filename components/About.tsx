import RobotGlyph from './RobotGlyph'

export default function About() {
  return (
    <section id="about" style={{ paddingBlock: 'var(--section-py)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Portrait card */}
          <div className="about-portrait reveal">
            <div className="portrait-grid" />
            <div className="portrait-glyph" style={{ color: 'var(--accent)' }}>
              <RobotGlyph size={180} animated />
            </div>
            <div className="portrait-meta">
              <span>RAYMOND_REYES.svg</span>
              <span><b>● live</b></span>
            </div>
          </div>

          {/* Body */}
          <div className="about-body">
            <div className="eyebrow reveal">01 — About</div>
            <h2 className="section-title reveal reveal-delay-1">
              A builder with <em>no shortcut</em><br />
              but the AI ones.
            </h2>
            <p className="reveal reveal-delay-2">
              No CS degree. No bootcamp. I started from <b>zero</b> and learned by shipping real products for real people, with AI as my co-pilot.
            </p>
            <p className="reveal reveal-delay-2">
              Today I run <b>AICrafterLab</b>, a small AI + digital marketing agency, and I build <b>SaaS products</b> end-to-end — from Claude prompt chains to Stripe webhooks to deploy. I&apos;m based in the USA and available remote for full-time roles in the $70K–$120K range, or freelance AI projects.
            </p>
            <p className="reveal reveal-delay-3">
              The pitch is simple: I&apos;m a mid-level developer with senior-level AI integration skills, and I ship faster than someone who learned the old way.
            </p>

            <div className="principles">
              {[
                { n: '01', t: 'Ship beats perfect', b: 'A live product teaches you more in a week than a tutorial does in a month.' },
                { n: '02', t: 'AI is a multiplier, not a crutch', b: 'I write prompts the way good engineers write specs. Boring, precise, deterministic.' },
                { n: '03', t: 'Boring stack, sharp edges', b: 'Next.js + Supabase + Stripe + Claude. Reliable plumbing, novel intelligence on top.' },
              ].map((p, i) => (
                <div key={p.n} className={`principle reveal reveal-delay-${i + 1}`}>
                  <div className="principle-num">{p.n}</div>
                  <div>
                    <h4>{p.t}</h4>
                    <p>{p.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
