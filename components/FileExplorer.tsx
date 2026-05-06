import { FILES, FileId } from './VSCodeShell'

const FILE_ICONS: Record<string, string> = {
  tsx: '⚛',
  js:  '🟨',
  ts:  '📘',
  md:  '📄',
}

export default function FileExplorer({
  active,
  open,
  onOpen,
}: {
  active: FileId
  open: FileId[]
  onOpen: (id: FileId) => void
}) {
  return (
    <div className="vsc-explorer">
      {/* Open Editors */}
      {open.length > 0 && (
        <div style={{ marginBottom: 8 }}>
          <div className="vsc-explorer-label">
            <span style={{ fontSize: 9 }}>▾</span>
            Open Editors
          </div>
          {open.map(id => {
            const f = FILES.find(f => f.id === id)!
            return (
              <div
                key={id}
                className={`vsc-explorer-file sub${active === id ? ' active' : ''}`}
                onClick={() => onOpen(id)}
              >
                <span className={`ext-${f.ext}`}>{f.name}</span>
              </div>
            )
          })}
        </div>
      )}

      {/* Project tree */}
      <div>
        <div className="vsc-explorer-label">
          <span style={{ fontSize: 9 }}>▾</span>
          RAYMOND-REYES-DEV
        </div>

        <div className="vsc-explorer-label" style={{ paddingLeft: 24, fontSize: 12 }}>
          <span style={{ fontSize: 9 }}>▾</span>
          src
        </div>

        {FILES.map(f => (
          <div
            key={f.id}
            className={`vsc-explorer-file${active === f.id ? ' active' : ''}`}
            onClick={() => onOpen(f.id)}
          >
            <span style={{ fontSize: 13 }}>{FILE_ICONS[f.ext] ?? '📄'}</span>
            <span className={`ext-${f.ext}`}>{f.name}</span>
          </div>
        ))}

        <a
          href="/raymond-reyes-resume.html"
          target="_blank"
          rel="noopener noreferrer"
          className="vsc-explorer-file"
          style={{ textDecoration: 'none' }}
          title="Open resume"
        >
          <span style={{ fontSize: 13 }}>📋</span>
          <span style={{ color: '#f48771' }}>resume.pdf</span>
        </a>

        <div
          className={`vsc-explorer-file${active === 'package' ? ' active' : ''}`}
          onClick={() => onOpen('package')}
        >
          <span style={{ fontSize: 13 }}>📦</span>
          <span className="ext-json">package.json</span>
        </div>

        <div
          className={`vsc-explorer-file${active === 'env' ? ' active' : ''}`}
          onClick={() => onOpen('env')}
        >
          <span style={{ fontSize: 13 }}>🔒</span>
          <span className="ext-env">.env.local</span>
        </div>
      </div>
    </div>
  )
}
