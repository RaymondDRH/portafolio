'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import ActivityBar from './ActivityBar'
import FileExplorer from './FileExplorer'
import TabBar from './TabBar'
import StatusBar from './StatusBar'
import HomeView from './HomeView'
import ProjectsView from './ProjectsView'
import SkillsView from './SkillsView'
import AboutView from './AboutView'
import ContactView from './ContactView'

export type FileId = 'home' | 'projects' | 'skills' | 'about' | 'contact'

export type FileMeta = {
  id: FileId
  name: string
  ext: string
  language: string
}

export const FILES: FileMeta[] = [
  { id: 'home',     name: 'home.tsx',    ext: 'tsx', language: 'TypeScript JSX' },
  { id: 'projects', name: 'projects.js', ext: 'js',  language: 'JavaScript'     },
  { id: 'skills',   name: 'skills.ts',   ext: 'ts',  language: 'TypeScript'     },
  { id: 'about',    name: 'about.md',    ext: 'md',  language: 'Markdown'       },
  { id: 'contact',  name: 'contact.tsx', ext: 'tsx', language: 'TypeScript JSX' },
]

function EditorView({ id }: { id: FileId }) {
  switch (id) {
    case 'home':     return <HomeView />
    case 'projects': return <ProjectsView />
    case 'skills':   return <SkillsView />
    case 'about':    return <AboutView />
    case 'contact':  return <ContactView />
  }
}

type Msg = { role: 'user' | 'bot'; text: string }
const INIT_MSG: Msg = {
  role: 'bot',
  text: "NOVA v1.0.0 — Raymond's AI assistant. Ask me anything about his work, stack, or availability.",
}
const SUGGESTIONS = [
  "What does Raymond build?",
  "Is he available for hire?",
  "What's his AI stack?",
]

export default function VSCodeShell() {
  const [active, setActive]       = useState<FileId>('home')
  const [open, setOpen]           = useState<FileId[]>(['home'])
  const [sidebarOpen, setSidebar] = useState(true)
  const [panelOpen, setPanel]     = useState(false)
  const [msgs, setMsgs]           = useState<Msg[]>([INIT_MSG])
  const [input, setInput]         = useState('')
  const [busy, setBusy]           = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)


  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = panelRef.current.scrollHeight
  }, [msgs, busy])

  const openFile = useCallback((id: FileId) => {
    setOpen(prev => (prev.includes(id) ? prev : [...prev, id]))
    setActive(id)
  }, [])

  const closeTab = useCallback((id: FileId, e: React.MouseEvent) => {
    e.stopPropagation()
    setOpen(prev => {
      const next = prev.filter(f => f !== id)
      if (active === id) setActive(next[next.length - 1] ?? 'home')
      return next.length ? next : ['home']
    })
  }, [active])

  useEffect(() => {
    const handleVscOpen = (e: Event) => {
      const id = (e as CustomEvent).detail as FileId
      openFile(id)
    }
    document.addEventListener('vsc-open', handleVscOpen)
    return () => document.removeEventListener('vsc-open', handleVscOpen)
  }, [openFile])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'b') { e.preventDefault(); setSidebar(o => !o) }
      if (e.ctrlKey && e.key === '`') { e.preventDefault(); setPanel(o => !o) }
      if (e.ctrlKey && e.key >= '1' && e.key <= '5') {
        e.preventDefault()
        const file = FILES[parseInt(e.key) - 1]
        if (file) openFile(file.id)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [openFile])

  const send = async (text?: string) => {
    const q = (text ?? input).trim()
    if (!q || busy) return
    const userMsg: Msg = { role: 'user', text: q }
    const newMsgs = [...msgs, userMsg]
    setMsgs(newMsgs)
    setInput('')
    setBusy(true)
    try {
      const apiMsgs = newMsgs
        .filter((m, i) => !(m.role === 'bot' && i === 0))
        .map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text }))
      const res  = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMsgs }),
      })
      const data = await res.json()
      setMsgs(prev => [...prev, { role: 'bot', text: data.content }])
    } catch {
      setMsgs(prev => [...prev, { role: 'bot', text: 'Connection error. Email: raymondreyesh@gmail.com' }])
    } finally {
      setBusy(false)
    }
  }

  const meta = FILES.find(f => f.id === active)!

  return (
    <div className="vsc-shell">
      {/* ── Titlebar ── */}
      <div className="vsc-titlebar">
        <div className="vsc-titlebar-dots">
          <div className="vsc-dot red" />
          <div className="vsc-dot yellow" />
          <div className="vsc-dot green" />
        </div>
        <div className="vsc-titlebar-center">{meta.name} — raymond-reyes.dev</div>
        <div className="vsc-titlebar-right">Ctrl+B sidebar · Ctrl+` terminal · Ctrl+1-5 files</div>
      </div>

      {/* ── Body ── */}
      <div className="vsc-body">
        <ActivityBar sidebarOpen={sidebarOpen} onToggle={() => setSidebar(o => !o)} />

        {sidebarOpen && (
          <div className="vsc-sidebar-backdrop" onClick={() => setSidebar(false)} />
        )}
        <div className={`vsc-sidebar${sidebarOpen ? ' mobile-open' : ''}`} style={{ display: sidebarOpen ? undefined : 'none' }}>
          <div className="vsc-sidebar-header">Explorer</div>
          <FileExplorer active={active} open={open} onOpen={(id) => { openFile(id); setSidebar(false) }} />
        </div>

        {/* Editor area */}
        <div className="vsc-editor-area">
          <TabBar tabs={open} active={active} onSelect={setActive} onClose={closeTab} />

          <div className="vsc-breadcrumb">
            <span>raymond-reyes-dev</span>
            <span className="sep">›</span>
            <span>src</span>
            <span className="sep">›</span>
            <span className="bc-active">{meta.name}</span>
          </div>

          <div className="vsc-editor-panel-split">
            <div className="vsc-editor">
              <div className="vsc-editor-content">
                <EditorView id={active} />
              </div>
            </div>

            {!panelOpen && (
              <button className="vsc-panel-hint" onClick={() => setPanel(true)}>
                <span className="vsc-panel-hint-dot" />
                <span>✦ Ask RAY — Chat with Raymond&apos;s AI assistant</span>
                <span className="vsc-panel-hint-arrow">↑</span>
              </button>
            )}

            {panelOpen && (
              <div className="vsc-panel">
                <div className="vsc-panel-tabs">
                  <span className="vsc-panel-tab active">TERMINAL</span>
                  <span className="vsc-panel-tab muted">PROBLEMS</span>
                  <span className="vsc-panel-tab muted">OUTPUT</span>
                  <button className="vsc-panel-close" onClick={() => setPanel(false)} title="Close panel">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="vsc-terminal-body" ref={panelRef}>
                  <div className="term-line">
                    <span className="term-prompt">raymond@portfolio:~$</span>
                    <span className="term-cmd"> ./nova --chat</span>
                  </div>
                  <div className="term-spacer" />
                  {msgs.map((m, i) => (
                    <div key={i} className="term-msg">
                      {m.role === 'user' ? (
                        <><span className="term-you">you ›</span><span className="term-user-text">{m.text}</span></>
                      ) : (
                        <><span className="term-nova">NOVA</span><span className="term-bot-text">{m.text}</span></>
                      )}
                    </div>
                  ))}
                  {busy && <div className="term-typing">NOVA is typing...</div>}
                  {msgs.length <= 1 && (
                    <div className="term-suggestions">
                      {SUGGESTIONS.map(s => (
                        <button key={s} className="term-suggest-btn" onClick={() => send(s)}>{s}</button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="vsc-terminal-input-row">
                  <span className="term-input-prompt">you ›</span>
                  <input
                    ref={inputRef}
                    className="vsc-terminal-input"
                    placeholder="ask NOVA anything..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && send()}
                    disabled={busy}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <StatusBar lang={meta.language} panelOpen={panelOpen} onTerminal={() => setPanel(o => !o)} />
    </div>
  )
}
