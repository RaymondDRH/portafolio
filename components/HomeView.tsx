import type { ReactNode } from 'react'

function L({ n, children }: { n: number; children?: ReactNode }) {
  return (
    <div className="code-line">
      <span className="ln">{n}</span>
      <span className="code">{children}</span>
    </div>
  )
}

export default function HomeView() {
  return (
    <div className="code-file">
      <L n={1}><span className="cm">// home.tsx — raymond_reyes.dev</span></L>
      <L n={2}><span className="cm">// AI-First Full-Stack Developer · AICrafterLab LLC</span></L>
      <L n={3} />
      <L n={4}>
        <span className="kw">import </span>
        <span className="kw">type </span>
        <span className="pu">{'{ '}</span>
        <span className="ty">Developer</span>
        <span className="pu">{' } '}</span>
        <span className="kw">from </span>
        <span className="str">'@/types'</span>
      </L>
      <L n={5} />
      <L n={6}><span className="cm">/**</span></L>
      <L n={7}><span className="cm">&nbsp;* Raymond Reyes — Builds AI-powered products that actually ship.</span></L>
      <L n={8}><span className="cm">&nbsp;* Not a tutorial guy. Not a consultant. A real builder.</span></L>
      <L n={9}><span className="cm">&nbsp;*/</span></L>
      <L n={10} />
      <L n={11}>
        <span className="kw">const </span>
        <span className="va">raymond</span>
        <span className="pu">: </span>
        <span className="ty">Developer </span>
        <span className="op">= </span>
        <span className="pu">{'{'}</span>
      </L>
      <L n={12}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">name</span>
          <span className="pu">:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <span className="str">"Raymond Reyes"</span>
          <span className="pu">,</span>
        </span>
      </L>
      <L n={13}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">title</span>
          <span className="pu">:&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <span className="str">"AI-First Full-Stack Developer"</span>
          <span className="pu">,</span>
        </span>
      </L>
      <L n={14}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">company</span>
          <span className="pu">:&nbsp;&nbsp; </span>
          <span className="str">"AICrafterLab LLC — Founder"</span>
          <span className="pu">,</span>
        </span>
      </L>
      <L n={15}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">location</span>
          <span className="pu">:&nbsp; </span>
          <span className="str">"USA · Remote-first"</span>
          <span className="pu">,</span>
        </span>
      </L>
      <L n={16}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">available</span>
          <span className="pu">: </span>
          <span className="kw">true</span>
          <span className="pu">,</span>
          <span className="cm" style={{ marginLeft: 16 }}>// ← open to opportunities</span>
          <span className="avail-dot" style={{ marginLeft: 8 }} />
        </span>
      </L>
      <L n={17} />
      <L n={18}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">contact</span>
          <span className="pu">: </span>
          <span className="pu">{'{'}</span>
        </span>
      </L>
      <L n={19}>
        <span style={{ paddingLeft: 48 }}>
          <span className="pr">email</span>
          <span className="pu">:&nbsp;&nbsp; </span>
          <a href="mailto:raymondreyesh@gmail.com" className="str" style={{ color: 'var(--syn-string)', textDecoration: 'none' }}>
            "raymondreyesh@gmail.com"
          </a>
          <span className="pu">,</span>
        </span>
      </L>
      <L n={20}>
        <span style={{ paddingLeft: 48 }}>
          <span className="pr">github</span>
          <span className="pu">:&nbsp; </span>
          <a href="https://github.com/RaymondDRH" target="_blank" rel="noopener noreferrer" className="str" style={{ color: 'var(--syn-string)', textDecoration: 'none' }}>
            "github.com/RaymondDRH"
          </a>
          <span className="pu">,</span>
        </span>
      </L>
      <L n={21}>
        <span style={{ paddingLeft: 24 }}><span className="pu">{'}'}</span><span className="pu">,</span></span>
      </L>
      <L n={22} />
      <L n={23}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">stack</span>
          <span className="pu">:&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <span className="pu">['</span>
          <span className="str">Next.js</span>
          <span className="pu">', '</span>
          <span className="str">Supabase</span>
          <span className="pu">', '</span>
          <span className="str">Claude API</span>
          <span className="pu">', '</span>
          <span className="str">Stripe</span>
          <span className="pu">', '</span>
          <span className="str">n8n</span>
          <span className="pu">'],</span>
        </span>
      </L>
      <L n={24} />
      <L n={25}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">shipped</span>
          <span className="pu">:&nbsp;&nbsp; </span>
          <span className="num">7</span>
          <span className="pu">,</span>
          <span className="cm" style={{ marginLeft: 16 }}>// production products live</span>
        </span>
      </L>
      <L n={26}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">aiYears</span>
          <span className="pu">:&nbsp;&nbsp; </span>
          <span className="num">3</span>
          <span className="pu">,</span>
          <span className="cm" style={{ marginLeft: 16 }}>// years building with AI</span>
        </span>
      </L>
      <L n={27}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">response</span>
          <span className="pu">: </span>
          <span className="num">24</span>
          <span className="pu">,</span>
          <span className="cm" style={{ marginLeft: 16 }}>// hour avg response time</span>
        </span>
      </L>
      <L n={28}><span className="pu">{'}'}</span></L>
      <L n={29} />
      <L n={30}>
        <span className="kw">export </span>
        <span className="kw">default </span>
        <span className="va">raymond</span>
      </L>

      {/* Runtime output */}
      <div className="home-output">
        <div className="home-output-line" style={{ color: 'var(--syn-comment)', fontStyle: 'italic', marginBottom: 8 }}>
          $ node raymond.ts
        </div>
        <div className="home-output-line">
          <span className="home-output-ok">✓</span>
          <span className="home-output-val">Available for full-time &amp; freelance</span>
        </div>
        <div className="home-output-line">
          <span className="home-output-ok">✓</span>
          <span className="home-output-val">7 products shipped in production</span>
        </div>
        <div className="home-output-line">
          <span className="home-output-ok">✓</span>
          <span className="home-output-val">3 years building AI applications</span>
        </div>
        <div className="home-output-line">
          <span className="home-output-bolt">⚡</span>
          <span className="home-output-val">24h response guarantee</span>
        </div>
      </div>

      <div className="home-cta">
        <a href="mailto:raymondreyesh@gmail.com" className="home-cta-btn primary">
          $ hire raymond
        </a>
        <button
          className="home-cta-btn secondary"
          onClick={() => document.dispatchEvent(new CustomEvent('vsc-open', { detail: 'projects' }))}
        >
          $ view projects
        </button>
      </div>
    </div>
  )
}
