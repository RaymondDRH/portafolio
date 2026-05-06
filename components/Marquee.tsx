const items = [
  'Claude API', 'Next.js', 'Supabase', 'Stripe', 'TypeScript', 'n8n', 'PostgreSQL', 'Cloudflare',
  'Claude API', 'Next.js', 'Supabase', 'Stripe', 'TypeScript', 'n8n', 'PostgreSQL', 'Cloudflare',
]

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="marquee-item">
            <span>{item}</span>
            <span>✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
