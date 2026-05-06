export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Raymond Reyes · <a href="https://github.com/aicrafterlabllc" target="_blank" rel="noopener noreferrer">AICrafterLab LLC</a></div>
        <div style={{ color: 'var(--text-faint)' }}>Built with Next.js · Deployed on Vercel</div>
      </div>
    </footer>
  )
}
