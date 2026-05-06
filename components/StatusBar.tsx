export default function StatusBar({
  lang,
  panelOpen,
  onTerminal,
}: {
  lang: string
  panelOpen: boolean
  onTerminal: () => void
}) {
  return (
    <div className="vsc-statusbar">
      <div className="vsc-statusbar-left">
        <div className="vsc-status-item" style={{ background: 'rgba(0,0,0,0.15)', gap: 5 }}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zM2.5 2a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zM9 2.5A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zM1 10.5A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zM9 10.5A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z" />
          </svg>
          main
        </div>
        <div className="vsc-status-item">✓ 0 &nbsp;⚠ 0</div>
      </div>

      <div className="vsc-statusbar-right">
        <div
          className={`vsc-status-item vsc-nova-btn${panelOpen ? '' : ' closed'}`}
          onClick={onTerminal}
          title="Chat with Raymond's AI Assistant (Ctrl+`)"
        >
          <span className={`nova-dot${panelOpen ? '' : ' pulse'}`} />
          ✦ Ask RAY {panelOpen ? '▼' : '▲'}
        </div>
        <div className="vsc-status-item">{lang}</div>
        <div className="vsc-status-item">UTF-8</div>
        <div className="vsc-status-item">LF</div>
        <div className="vsc-status-item">Spaces: 2</div>
      </div>
    </div>
  )
}
