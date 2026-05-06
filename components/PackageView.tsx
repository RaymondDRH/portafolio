const K = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--syn-prop)' }}>{children}</span>
)
const S = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--syn-string)' }}>{children}</span>
)
const N = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--syn-number)' }}>{children}</span>
)
const P = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'var(--text-dim)' }}>{children}</span>
)

export default function PackageView() {
  return (
    <div style={{ padding: '20px 48px 60px' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', marginBottom: 16 }}>
        package.json
      </div>
      <pre style={{
        fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.7,
        color: 'var(--text)', margin: 0, whiteSpace: 'pre-wrap',
      }}>
<P>{'{'}</P>{'\n'}
{'  '}<K>"name"</K><P>: </P><S>"raymond-reyes-portfolio"</S><P>,</P>{'\n'}
{'  '}<K>"version"</K><P>: </P><S>"1.0.0"</S><P>,</P>{'\n'}
{'  '}<K>"private"</K><P>: </P><N>true</N><P>,</P>{'\n'}
{'\n'}
{'  '}<K>"scripts"</K><P>: {'{'}</P>{'\n'}
{'    '}<K>"dev"</K><P>: </P><S>"next dev"</S><P>,</P>{'\n'}
{'    '}<K>"build"</K><P>: </P><S>"next build"</S><P>,</P>{'\n'}
{'    '}<K>"start"</K><P>: </P><S>"next start"</S>{'\n'}
{'  '}<P>{'}'}</P><P>,</P>{'\n'}
{'\n'}
{'  '}<K>"dependencies"</K><P>: {'{'}</P>{'\n'}
{'    '}<K>"@anthropic-ai/sdk"</K><P>: </P><S>"^0.94.0"</S><P>,</P>{'\n'}
{'    '}<K>"next"</K><P>: </P><S>"16.2.4"</S><P>,</P>{'\n'}
{'    '}<K>"react"</K><P>: </P><S>"19.2.4"</S><P>,</P>{'\n'}
{'    '}<K>"react-dom"</K><P>: </P><S>"19.2.4"</S><P>,</P>{'\n'}
{'    '}<K>"framer-motion"</K><P>: </P><S>"^12.38.0"</S><P>,</P>{'\n'}
{'    '}<K>"gsap"</K><P>: </P><S>"^3.15.0"</S><P>,</P>{'\n'}
{'    '}<K>"lucide-react"</K><P>: </P><S>"^1.14.0"</S>{'\n'}
{'  '}<P>{'}'}</P><P>,</P>{'\n'}
{'\n'}
{'  '}<K>"devDependencies"</K><P>: {'{'}</P>{'\n'}
{'    '}<K>"typescript"</K><P>: </P><S>"^5"</S><P>,</P>{'\n'}
{'    '}<K>"@types/react"</K><P>: </P><S>"^19"</S><P>,</P>{'\n'}
{'    '}<K>"@types/node"</K><P>: </P><S>"^20"</S><P>,</P>{'\n'}
{'    '}<K>"tailwindcss"</K><P>: </P><S>"^4"</S><P>,</P>{'\n'}
{'    '}<K>"eslint"</K><P>: </P><S>"^9"</S><P>,</P>{'\n'}
{'    '}<K>"eslint-config-next"</K><P>: </P><S>"16.2.4"</S>{'\n'}
{'  '}<P>{'}'}</P>{'\n'}
<P>{'}'}</P>
      </pre>
    </div>
  )
}
