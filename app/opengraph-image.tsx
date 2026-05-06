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
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Centered card */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 120px',
          gap: 0,
        }}>
          {/* Role label */}
          <div style={{
            color: '#1D9B8C',
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 18,
            display: 'flex',
          }}>
            AI-First Full-Stack Developer
          </div>

          {/* Name */}
          <div style={{
            color: '#ffffff',
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-3px',
            marginBottom: 32,
            display: 'flex',
          }}>
            Raymond Reyes
          </div>

          {/* Divider */}
          <div style={{
            width: '60px',
            height: '3px',
            background: '#1D9B8C',
            borderRadius: '2px',
            marginBottom: 32,
            display: 'flex',
          }} />

          {/* Stack */}
          <div style={{
            color: '#666',
            fontSize: 18,
            letterSpacing: '0.06em',
            marginBottom: 36,
            display: 'flex',
          }}>
            Next.js · Supabase · Claude API · Stripe · n8n
          </div>

          {/* URL */}
          <div style={{
            color: '#2BD4BD',
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.08em',
            display: 'flex',
          }}>
            raymondreyes.dev
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
