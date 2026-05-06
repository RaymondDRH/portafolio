type SkillGroup = {
  name: string
  meta: string
  primary: string[]
  rest: string[]
}

const GROUPS: SkillGroup[] = [
  {
    name: 'AI & LLM',
    meta: 'core',
    primary: ['Claude API', 'Prompt Engineering', 'Tool Use / Agents'],
    rest: ['RAG', 'Embeddings', 'Streaming', 'Vision', 'Gemini API'],
  },
  {
    name: 'Frontend',
    meta: 'daily',
    primary: ['Next.js', 'React', 'TypeScript'],
    rest: ['Tailwind CSS', 'Server Actions', 'shadcn/ui', 'Web Components'],
  },
  {
    name: 'Backend & DB',
    meta: 'production',
    primary: ['Supabase', 'PostgreSQL', 'Node.js'],
    rest: ['Edge Functions', 'RLS Policies', 'Realtime', 'REST / tRPC'],
  },
  {
    name: 'Automation',
    meta: 'active',
    primary: ['n8n', 'WhatsApp / Baileys'],
    rest: ['Webhooks', 'CRM integrations', 'Cron jobs', 'Zapier'],
  },
  {
    name: 'Infra & Auth',
    meta: 'live',
    primary: ['Stripe', 'Vercel', 'Cloudflare'],
    rest: ['WebAuthn', 'Magic Links', 'OAuth', 'DNS / SSL', 'VPS / cPanel'],
  },
  {
    name: 'CMS & E-commerce',
    meta: 'client work',
    primary: ['WordPress', 'WooCommerce'],
    rest: ['Plugin config', 'Performance tuning', 'Theme dev'],
  },
]

export default function SkillsView() {
  return (
    <div className="skills-view">
      <h2 className="view-title">Skills</h2>
      <div className="view-sub">// What I actually use in production — no fluff</div>

      <div className="skill-groups">
        {GROUPS.map(g => (
          <div key={g.name} className="skill-group">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span className="skill-group-name">{g.name}</span>
              <span className="skill-group-meta">{g.meta}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {g.primary.map(s => (
                <span key={s} className="skill-pill primary">{s}</span>
              ))}
              {g.rest.map(s => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
