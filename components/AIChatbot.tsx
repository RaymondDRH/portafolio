'use client'

import { useState, useRef, useEffect } from 'react'
import RayMascot from './RayMascot'

type Message = {
  role: 'user' | 'bot'
  text: string
}

const SUGGESTIONS = [
  'What does Raymond build?',
  'Is he available for freelance?',
  "What's his AI stack?",
  'Show me his best project',
]

const INITIAL: Message = {
  role: 'bot',
  text: "Hey 👋 I'm NOVA, Raymond's AI assistant. Ask me anything about his work, stack, or availability.",
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, busy])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

  const send = async (text?: string) => {
    const q = (text ?? input).trim()
    if (!q || busy) return

    const userMsg: Message = { role: 'user', text: q }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setBusy(true)

    try {
      const apiMessages = newMessages
        .filter((m, i) => !(m.role === 'bot' && i === 0))
        .map((m) => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'bot', text: data.content }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: 'Hmm, something went wrong. Try emailing Raymond directly at raymondreyesh@gmail.com.' },
      ])
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <RayMascot onOpen={() => setOpen(true)} isOpen={open} />

      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat with NOVA">
          <div className="chat-head">
            <div className="chat-avatar">
              <svg width="20" height="20" viewBox="0 0 80 80" fill="none" style={{ color: 'white' }}>
                <line x1="40" y1="14" x2="40" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="40" cy="12" r="2.5" fill="currentColor" />
                <rect x="22" y="22" width="36" height="30" rx="6" stroke="currentColor" strokeWidth="2" />
                <circle cx="32" cy="36" r="2.5" fill="currentColor" />
                <circle cx="48" cy="36" r="2.5" fill="currentColor" />
                <line x1="34" y1="44" x2="46" y2="44" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="chat-head-text">
              <b>NOVA</b>
              <small>online · trained on Raymond</small>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>{m.text}</div>
            ))}
            {busy && (
              <div className="msg bot typing">
                <span /><span /><span />
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="chat-suggest">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}

          <div className="chat-input-row">
            <input
              ref={inputRef}
              className="chat-input"
              placeholder="Ask about Raymond's work..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              disabled={busy}
            />
            <button
              className="chat-send"
              onClick={() => send()}
              disabled={busy || !input.trim()}
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
