const stroke = 'var(--accent)'
const dim = 'rgba(204,204,204,0.2)'

function ProjectVisual({ kind }: { kind: string }) {
  switch (kind) {
    case 'foundry':
      return (
        <svg viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice">
          <rect x="40" y="30" width="240" height="140" rx="8" fill="rgba(255,255,255,0.03)" stroke={dim} />
          <circle cx="55" cy="45" r="3" fill="#ff5f57" />
          <circle cx="65" cy="45" r="3" fill="#febc2e" />
          <circle cx="75" cy="45" r="3" fill="#28c840" />
          <rect x="55" y="60" width="60" height="6" rx="2" fill={stroke} />
          <rect x="55" y="72" width="180" height="3" rx="1" fill={dim} />
          <rect x="55" y="80" width="140" height="3" rx="1" fill={dim} />
          <rect x="55" y="100" width="80" height="40" rx="4" fill="rgba(29,155,140,0.2)" stroke={stroke} />
          <rect x="145" y="100" width="90" height="40" rx="4" fill="rgba(29,155,140,0.05)" stroke={dim} />
          <path d="M295 100 L335 100 M325 92 L335 100 L325 108" stroke={stroke} strokeWidth="1.5" fill="none" />
          <rect x="350" y="60" width="210" height="80" rx="8" fill="rgba(29,155,140,0.08)" stroke={stroke} />
          <text x="362" y="80" fill="var(--text)" fontFamily="var(--font-mono)" fontSize="10">$ build me a saas landing</text>
          <text x="362" y="98" fill="var(--text-dim)" fontFamily="var(--font-mono)" fontSize="9">→ generating components...</text>
          <text x="362" y="114" fill="var(--accent-2,#2BD4BD)" fontFamily="var(--font-mono)" fontSize="9">✓ deployed in 47s</text>
          <rect x="362" y="124" width="120" height="6" rx="3" fill={stroke} opacity="0.6" />
        </svg>
      )
    case 'cc':
      return (
        <svg viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice">
          <circle cx="120" cy="100" r="50" fill="none" stroke={dim} strokeWidth="1" />
          <circle cx="120" cy="100" r="30" fill="none" stroke={stroke} strokeWidth="1" />
          <rect x="105" y="85" width="30" height="30" rx="4" fill="rgba(29,155,140,0.2)" stroke={stroke} />
          <path d="M115 100 L120 105 L130 95" stroke={stroke} fill="none" strokeWidth="2" strokeLinecap="round" />
          <path d="M170 100 Q220 80 280 100" stroke={dim} fill="none" strokeDasharray="2 4" />
          <path d="M170 100 Q220 120 280 130" stroke={dim} fill="none" strokeDasharray="2 4" />
          <rect x="280" y="60" width="180" height="40" rx="20" fill="rgba(255,255,255,0.04)" stroke={stroke} />
          <circle cx="300" cy="80" r="8" fill="#25D366" opacity="0.8" />
          <rect x="315" y="74" width="80" height="4" rx="2" fill="var(--text)" />
          <rect x="315" y="82" width="60" height="3" rx="1" fill={dim} />
          <rect x="280" y="110" width="180" height="20" rx="10" fill="rgba(255,255,255,0.02)" />
          <circle cx="295" cy="120" r="6" fill={stroke} opacity="0.4" />
          <rect x="308" y="117" width="80" height="6" rx="3" fill={dim} />
        </svg>
      )
    case 'invoice':
      return (
        <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
          <rect x="60" y="20" width="180" height="160" rx="6" fill="rgba(255,255,255,0.04)" stroke={dim} />
          <rect x="75" y="35" width="60" height="6" rx="2" fill={stroke} />
          <rect x="75" y="50" width="40" height="3" rx="1" fill={dim} />
          <line x1="75" y1="70" x2="225" y2="70" stroke={dim} />
          <rect x="75" y="80" width="100" height="3" rx="1" fill={dim} />
          <rect x="195" y="80" width="30" height="3" rx="1" fill={stroke} />
          <rect x="75" y="92" width="80" height="3" rx="1" fill={dim} />
          <rect x="195" y="92" width="30" height="3" rx="1" fill={stroke} />
          <rect x="75" y="104" width="120" height="3" rx="1" fill={dim} />
          <rect x="195" y="104" width="30" height="3" rx="1" fill={stroke} />
          <line x1="75" y1="125" x2="225" y2="125" stroke={dim} />
          <rect x="155" y="135" width="40" height="6" rx="2" fill="var(--text)" />
          <rect x="200" y="135" width="25" height="6" rx="2" fill={stroke} />
        </svg>
      )
    case 'name':
      return (
        <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(40 ${30 + i * 36})`}>
              <rect width="220" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke={dim} />
              <rect x="12" y="9" width="80" height="10" rx="2" fill="var(--text)" opacity="0.7" />
              <rect x="100" y="11" width="50" height="6" rx="2" fill={dim} />
              <circle cx={185 + (i % 2) * 8} cy="14" r="4" fill={i < 2 ? stroke : '#555'} />
            </g>
          ))}
        </svg>
      )
    case 'n8n':
      return (
        <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
          <rect x="20" y="80" width="60" height="40" rx="6" fill="rgba(29,155,140,0.1)" stroke={stroke} />
          <text x="50" y="105" textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="10">trigger</text>
          <path d="M80 100 L120 100" stroke={dim} />
          <rect x="120" y="50" width="60" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke={dim} />
          <text x="150" y="75" textAnchor="middle" fill="var(--text)" fontFamily="var(--font-mono)" fontSize="10">claude</text>
          <rect x="120" y="110" width="60" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke={dim} />
          <text x="150" y="135" textAnchor="middle" fill="var(--text)" fontFamily="var(--font-mono)" fontSize="10">whatsapp</text>
          <path d="M180 70 Q220 70 240 100" stroke={dim} fill="none" />
          <path d="M180 130 Q220 130 240 100" stroke={dim} fill="none" />
          <rect x="240" y="80" width="50" height="40" rx="6" fill="rgba(29,155,140,0.1)" stroke={stroke} />
          <text x="265" y="105" textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="10">crm</text>
        </svg>
      )
    case 'chat':
      return (
        <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
          <rect x="60" y="30" width="180" height="140" rx="12" fill="rgba(255,255,255,0.04)" stroke={dim} />
          <rect x="60" y="30" width="180" height="30" rx="12" fill="rgba(29,155,140,0.15)" />
          <circle cx="80" cy="45" r="8" fill={stroke} />
          <rect x="95" y="42" width="50" height="6" rx="2" fill="var(--text)" />
          <rect x="80" y="80" width="100" height="20" rx="10" fill="rgba(255,255,255,0.04)" />
          <rect x="120" y="110" width="100" height="20" rx="10" fill={stroke} opacity="0.8" />
          <rect x="80" y="140" width="80" height="20" rx="10" fill="rgba(255,255,255,0.04)" />
        </svg>
      )
    case 'portal':
      return (
        <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(30 ${30 + i * 48})`}>
              <rect width="240" height="36" rx="6" fill="rgba(255,255,255,0.03)" stroke={dim} />
              <circle cx="22" cy="18" r="6" fill={i === 0 ? stroke : i === 1 ? '#febc2e' : dim} />
              <rect x="40" y="10" width="80" height="6" rx="2" fill="var(--text)" />
              <rect x="40" y="22" width="120" height="4" rx="1" fill={dim} />
              <rect x="180" y="13" width="48" height="12" rx="6" fill={i === 0 ? 'rgba(29,155,140,0.2)' : 'rgba(255,255,255,0.04)'} stroke={i === 0 ? stroke : dim} />
            </g>
          ))}
        </svg>
      )
    default:
      return null
  }
}

type Project = {
  n: string
  name: string
  status: 'live' | 'built'
  blurb: string
  tags: string[]
  visual: string
  liveUrl?: string
}

const PROJECTS: Project[] = [
  {
    n: '01', name: 'Foundry', status: 'live',
    blurb: 'AI-powered web presence SaaS that builds complete, production websites from a single prompt — auth, content, hosting and Stripe billing wired in.',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Claude API'],
    visual: 'foundry',
    liveUrl: 'https://getfoundry.io',
  },
  {
    n: '02', name: 'CCEver Hub', status: 'live',
    blurb: 'Church management platform with WebAuthn passkey auth and a WhatsApp automation bot that handles announcements, attendance, and reminders.',
    tags: ['Next.js', 'Supabase', 'Baileys', 'WebAuthn'],
    visual: 'cc',
  },
  {
    n: '03', name: 'AI Invoice Generator', status: 'built',
    blurb: 'Generates polished PDF invoices from a sentence, using Claude.',
    tags: ['Next.js', 'Claude API'],
    visual: 'invoice',
  },
  {
    n: '04', name: 'AI Business Name Generator', status: 'built',
    blurb: 'Generates business names and live-checks domain availability via Cloudflare.',
    tags: ['Next.js', 'Claude API', 'Cloudflare'],
    visual: 'name',
  },
  {
    n: '05', name: 'n8n Automation Showcase', status: 'built',
    blurb: 'A gallery of real production workflows: WhatsApp bots, CRM integrations, AI pipelines.',
    tags: ['n8n', 'Next.js', 'Webhooks'],
    visual: 'n8n',
  },
  {
    n: '06', name: 'AI Chatbot Widget', status: 'built',
    blurb: 'Embeddable chatbot any business can drop in with one snippet — built as a Web Component.',
    tags: ['Web Component', 'Claude API'],
    visual: 'chat',
  },
  {
    n: '07', name: 'Client Portal', status: 'built',
    blurb: 'Lightweight client portal: project status, deliverable approvals, magic-link auth.',
    tags: ['Next.js', 'Supabase', 'Magic Link'],
    visual: 'portal',
  },
]

export default function ProjectsView() {
  return (
    <div>
      <div className="projects-view-header">
        <h2 className="projects-view-title">Projects</h2>
        <div className="projects-view-sub">// 7 production products shipped — real users, real auth, real billing</div>
      </div>
      <div className="projects-grid-vsc">
        {PROJECTS.map((p) => (
          <div key={p.n} className="proj-card">
            <div className="proj-card-visual">
              <ProjectVisual kind={p.visual} />
            </div>
            <div className="proj-card-body">
              <div className="proj-card-head">
                <span className="proj-card-name">{p.name}</span>
                <span className={`proj-badge ${p.status}`}>
                  ● {p.status}
                </span>
              </div>
              <p className="proj-card-blurb">{p.blurb}</p>
              <div className="proj-card-tags">
                {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
              </div>
            </div>
            <div className="proj-card-footer">
              {p.liveUrl ? (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
                  View live
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </a>
              ) : (
                <span className="proj-built-label">Built ✓</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
