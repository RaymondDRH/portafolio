import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Raymond Reyes — AI-First Full-Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 90px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '4px',
          background: '#1D9B8C',
          display: 'flex',
        }} />

        {/* Role label */}
        <div style={{
          color: '#1D9B8C',
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: 20,
          display: 'flex',
        }}>
          AI-First Full-Stack Developer
        </div>

        {/* Name */}
        <div style={{
          color: '#ffffff',
          fontSize: 80,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-2px',
          marginBottom: 28,
          display: 'flex',
        }}>
          Raymond Reyes
        </div>

        {/* Stack tags row */}
        <div style={{
          display: 'flex',
          gap: 10,
          marginBottom: 48,
          flexWrap: 'wrap',
        }}>
          {['Next.js', 'Supabase', 'Claude API', 'Stripe', 'n8n'].map(tag => (
            <div key={tag} style={{
              background: 'rgba(29,155,140,0.15)',
              border: '1px solid rgba(29,155,140,0.35)',
              color: '#2BD4BD',
              fontSize: 16,
              fontWeight: 600,
              padding: '6px 16px',
              borderRadius: '4px',
              display: 'flex',
            }}>
              {tag}
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 48 }}>
          {[
            { num: '7+', label: 'Products shipped' },
            { num: '3yr', label: 'AI development' },
            { num: '24h', label: 'Response time' },
          ].map(s => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ color: '#ffffff', fontSize: 36, fontWeight: 800, display: 'flex' }}>{s.num}</div>
              <div style={{ color: '#666', fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* URL bottom right */}
        <div style={{
          position: 'absolute',
          bottom: 40, right: 90,
          color: '#444',
          fontSize: 16,
          display: 'flex',
        }}>
          raymondreyes.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
