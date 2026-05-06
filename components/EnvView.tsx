const C = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--syn-comment)' }}>{children}</span>
)
const K = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--syn-var)' }}>{children}</span>
)
const S = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--syn-string)' }}>{children}</span>
)
const R = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--text-faint)', letterSpacing: '0.05em' }}>{children}</span>
)

export default function EnvView() {
  return (
    <div style={{ padding: '20px 48px 60px' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', marginBottom: 16 }}>
        .env.local
      </div>
      <pre style={{
        fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 2,
        color: 'var(--text)', margin: 0, whiteSpace: 'pre-wrap',
      }}>
<C># ── AI ──────────────────────────────────</C>{'\n'}
<K>ANTHROPIC_API_KEY</K>=<R>sk-ant-api03-••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••</R>{'\n'}
{'\n'}
<C># ── App ─────────────────────────────────</C>{'\n'}
<K>NEXT_PUBLIC_URL</K>=<S>https://raymondreyes.dev</S>{'\n'}
<K>NODE_ENV</K>=<S>production</S>{'\n'}
{'\n'}
<C># ── Do not commit this file to git ──────</C>{'\n'}
<C># ── Add keys directly in Vercel dashboard</C>
      </pre>
    </div>
  )
}
