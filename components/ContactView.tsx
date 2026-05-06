import type { ReactNode } from 'react'

function Channel({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode
  label: string
  value: string
  href?: string
}) {
  const inner = (
    <>
      <span className="contact-channel-icon">{icon}</span>
      <div className="contact-channel-info">
        <span className="contact-channel-label">{label}</span>
        <span className="contact-channel-value">{value}</span>
      </div>
    </>
  )
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-channel">
        {inner}
      </a>
    )
  }
  return <div className="contact-channel" style={{ cursor: 'default' }}>{inner}</div>
}

export default function ContactView() {
  return (
    <div className="skills-view">
      <h2 className="view-title">Contact</h2>
      <div className="view-sub">// Let&apos;s build something — I respond within 24 hours</div>

      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.7, maxWidth: 480, margin: 0 }}>
          Open to full-time roles ($70K–$120K) and freelance/consulting projects.
          Based in USA, available for remote work worldwide.
        </p>
      </div>

      <div className="contact-channels">
        <Channel
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" /></svg>}
          label="Email"
          value="raymondreyesh@gmail.com"
          href="mailto:raymondreyesh@gmail.com"
        />
        <Channel
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>}
          label="GitHub"
          value="github.com/RaymondDRH"
          href="https://github.com/RaymondDRH"
        />
        <Channel
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}
          label="LinkedIn"
          value="linkedin.com/in/raymond-reyes"
          href="https://linkedin.com/in/raymond-reyes"
        />
        <Channel
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M7 12h10M7 8h10M7 16h6" /></svg>}
          label="NOVA — AI Assistant"
          value="Ask me anything in the terminal below"
        />
      </div>
    </div>
  )
}
