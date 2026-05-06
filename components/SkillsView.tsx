import type { ReactNode } from 'react'

function L({ n, children }: { n: number; children?: ReactNode }) {
  return (
    <div className="code-line">
      <span className="ln">{n}</span>
      <span className="code">{children}</span>
    </div>
  )
}

export default function SkillsView() {
  return (
    <div className="code-file">
      <L n={1}><span className="cm">// skills.ts — What I actually use in production</span></L>
      <L n={2}><span className="cm">// No bullshit. Only tools that run on live products today.</span></L>
      <L n={3} />

      {/* AI & LLM */}
      <L n={4}>
        <span className="kw">interface </span>
        <span className="ty">AIStack</span>
        <span className="pu"> {'{'}</span>
      </L>
      <L n={5}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">primary</span>
          <span className="pu">: </span>
          <span className="str">'Claude API'</span>
          <span className="pu"> | </span>
          <span className="str">'Prompt Engineering'</span>
          <span className="pu"> | </span>
          <span className="str">'Tool Use / Agents'</span>
        </span>
      </L>
      <L n={6}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">advanced</span>
          <span className="pu">: </span>
          <span className="ty">Array</span>
          <span className="pu">{'<'}</span>
          <span className="str">'RAG'</span>
          <span className="pu"> | </span>
          <span className="str">'Embeddings'</span>
          <span className="pu"> | </span>
          <span className="str">'Streaming'</span>
          <span className="pu"> | </span>
          <span className="str">'Vision'</span>
          <span className="pu">{'>'}</span>
        </span>
      </L>
      <L n={7}><span className="pu">{'}'}</span></L>
      <L n={8} />

      {/* Frontend */}
      <L n={9}>
        <span className="kw">interface </span>
        <span className="ty">FrontendStack</span>
        <span className="pu"> {'{'}</span>
      </L>
      <L n={10}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">framework</span>
          <span className="pu">: </span>
          <span className="str">'Next.js'</span>
          <span className="cm" style={{ marginLeft: 12 }}>// App Router · daily driver</span>
        </span>
      </L>
      <L n={11}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">daily</span>
          <span className="pu">: [</span>
          <span className="str">'React'</span>
          <span className="pu">, </span>
          <span className="str">'TypeScript'</span>
          <span className="pu">, </span>
          <span className="str">'Tailwind'</span>
          <span className="pu">, </span>
          <span className="str">'Server Actions'</span>
          <span className="pu">, </span>
          <span className="str">'shadcn/ui'</span>
          <span className="pu">]</span>
        </span>
      </L>
      <L n={12}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">other</span>
          <span className="pu">: </span>
          <span className="str">'Web Components'</span>
        </span>
      </L>
      <L n={13}><span className="pu">{'}'}</span></L>
      <L n={14} />

      {/* Backend */}
      <L n={15}>
        <span className="kw">interface </span>
        <span className="ty">BackendStack</span>
        <span className="pu"> {'{'}</span>
      </L>
      <L n={16}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">database</span>
          <span className="pu">: </span>
          <span className="str">'Supabase'</span>
          <span className="pu"> | </span>
          <span className="str">'PostgreSQL'</span>
        </span>
      </L>
      <L n={17}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">features</span>
          <span className="pu">: [</span>
          <span className="str">'Edge Functions'</span>
          <span className="pu">, </span>
          <span className="str">'RLS Policies'</span>
          <span className="pu">, </span>
          <span className="str">'Realtime'</span>
          <span className="pu">]</span>
        </span>
      </L>
      <L n={18}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">runtime</span>
          <span className="pu">: </span>
          <span className="str">'Node.js'</span>
        </span>
      </L>
      <L n={19}><span className="pu">{'}'}</span></L>
      <L n={20} />

      {/* Automation */}
      <L n={21}>
        <span className="kw">interface </span>
        <span className="ty">AutomationStack</span>
        <span className="pu"> {'{'}</span>
      </L>
      <L n={22}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">primary</span>
          <span className="pu">: </span>
          <span className="str">'n8n'</span>
          <span className="cm" style={{ marginLeft: 12 }}>// production workflows daily</span>
        </span>
      </L>
      <L n={23}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">integrations</span>
          <span className="pu">: [</span>
          <span className="str">'WhatsApp / Baileys'</span>
          <span className="pu">, </span>
          <span className="str">'Webhooks'</span>
          <span className="pu">, </span>
          <span className="str">'CRM'</span>
          <span className="pu">, </span>
          <span className="str">'Cron'</span>
          <span className="pu">]</span>
        </span>
      </L>
      <L n={24}><span className="pu">{'}'}</span></L>
      <L n={25} />

      {/* Infra */}
      <L n={26}>
        <span className="kw">interface </span>
        <span className="ty">InfraStack</span>
        <span className="pu"> {'{'}</span>
      </L>
      <L n={27}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">payments</span>
          <span className="pu">: </span>
          <span className="str">'Stripe'</span>
          <span className="cm" style={{ marginLeft: 12 }}>// subscriptions + one-time</span>
        </span>
      </L>
      <L n={28}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">deploy</span>
          <span className="pu">: [</span>
          <span className="str">'Vercel'</span>
          <span className="pu">, </span>
          <span className="str">'Cloudflare'</span>
          <span className="pu">]</span>
        </span>
      </L>
      <L n={29}>
        <span style={{ paddingLeft: 24 }}>
          <span className="pr">auth</span>
          <span className="pu">: [</span>
          <span className="str">'WebAuthn'</span>
          <span className="pu">, </span>
          <span className="str">'Magic Links'</span>
          <span className="pu">, </span>
          <span className="str">'OAuth'</span>
          <span className="pu">]</span>
        </span>
      </L>
      <L n={30}><span className="pu">{'}'}</span></L>
      <L n={31} />

      {/* Type union */}
      <L n={32}>
        <span className="kw">type </span>
        <span className="ty">Stack</span>
        <span className="op"> = </span>
        <span className="ty">AIStack</span>
        <span className="op"> & </span>
        <span className="ty">FrontendStack</span>
        <span className="op"> & </span>
        <span className="ty">BackendStack</span>
        <span className="op"> & </span>
        <span className="ty">AutomationStack</span>
        <span className="op"> & </span>
        <span className="ty">InfraStack</span>
      </L>
      <L n={33} />
      <L n={34}>
        <span className="kw">const </span>
        <span className="va">stack</span>
        <span className="pu">: </span>
        <span className="ty">Stack</span>
        <span className="op"> = </span>
        <span className="fn">raymond</span>
        <span className="pu">.</span>
        <span className="fn">getStack</span>
        <span className="pu">()</span>
      </L>
      <L n={35} />
      <L n={36}>
        <span className="kw">export </span>
        <span className="kw">default </span>
        <span className="va">stack</span>
      </L>
    </div>
  )
}
