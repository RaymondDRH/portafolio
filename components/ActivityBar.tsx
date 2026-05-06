export default function ActivityBar({
  sidebarOpen,
  onToggle,
  onSearch,
  onSkills,
  onContact,
  onTheme,
  onChat,
  theme,
}: {
  sidebarOpen: boolean
  onToggle: () => void
  onSearch: () => void
  onSkills: () => void
  onContact: () => void
  onTheme: () => void
  onChat: () => void
  theme: 'dark' | 'light'
}) {
  return (
    <div className="vsc-activitybar">
      <div className="vsc-actbar-top">
        {/* Explorer */}
        <button
          className={`vsc-actbar-btn${sidebarOpen ? ' active' : ''}`}
          onClick={onToggle}
          title="Explorer (Ctrl+B)"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
          </svg>
        </button>

        {/* Search → Command Palette */}
        <button className="vsc-actbar-btn" onClick={onSearch} title="Go to file (Ctrl+P)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>

        {/* Extensions → Skills */}
        <button className="vsc-actbar-btn" onClick={onSkills} title="Skills">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="9" height="9" rx="2" />
            <rect x="13" y="2" width="9" height="9" rx="2" />
            <rect x="2" y="13" width="9" height="9" rx="2" />
            <path d="M13 17.5h9M17.5 13v9" />
          </svg>
        </button>

        {/* Account → Contact */}
        <button className="vsc-actbar-btn" onClick={onContact} title="Contact">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </button>

        {/* Theme toggle */}
        <button className="vsc-actbar-btn" onClick={onTheme} title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
          {theme === 'dark' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>

        {/* Chat — only visible on mobile */}
        <button className="vsc-actbar-btn vsc-actbar-btn--chat" onClick={onChat} title="Ask NOVA — AI Assistant">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </button>
      </div>

      <div className="vsc-actbar-bottom" />
    </div>
  )
}
