'use client'

import { useState, useEffect, useRef } from 'react'
import { FILES, FileId } from './VSCodeShell'

export default function CommandPalette({
  onOpen,
  onClose,
}: {
  onOpen: (id: FileId) => void
  onClose: () => void
}) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = FILES.filter(f =>
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.id.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    setSelected(0)
  }, [query])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') setSelected(s => Math.min(s + 1, results.length - 1))
      if (e.key === 'ArrowUp') setSelected(s => Math.max(s - 1, 0))
      if (e.key === 'Enter' && results[selected]) {
        onOpen(results[selected].id)
        onClose()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [results, selected, onOpen, onClose])

  const FILE_COLORS: Record<string, string> = {
    tsx: '#519aba', js: '#e8c06a', ts: '#519aba', md: '#89b4e8',
  }

  return (
    <div className="cp-backdrop" onClick={onClose}>
      <div className="cp-modal" onClick={e => e.stopPropagation()}>
        <div className="cp-input-row">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-faint)', flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            className="cp-input"
            placeholder="Go to file..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <span className="cp-esc" onClick={onClose}>esc</span>
        </div>
        <div className="cp-results">
          {results.map((f, i) => (
            <div
              key={f.id}
              className={`cp-item${i === selected ? ' active' : ''}`}
              onClick={() => { onOpen(f.id); onClose() }}
              onMouseEnter={() => setSelected(i)}
            >
              <span style={{ color: FILE_COLORS[f.ext] ?? 'var(--text-dim)', fontSize: 13 }}>
                {f.ext === 'tsx' ? '⚛' : f.ext === 'js' ? '▪' : f.ext === 'ts' ? '◆' : '◻'}
              </span>
              <span className="cp-item-name">{f.name}</span>
              <span className="cp-item-lang">{f.language}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
