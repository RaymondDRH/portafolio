import { FILES, FileId } from './VSCodeShell'

const EXT_ICONS: Record<string, string> = {
  tsx: '⚛',
  js:  '🟨',
  ts:  '📘',
  md:  '📄',
}

export default function TabBar({
  tabs,
  active,
  onSelect,
  onClose,
}: {
  tabs: FileId[]
  active: FileId
  onSelect: (id: FileId) => void
  onClose: (id: FileId, e: React.MouseEvent) => void
}) {
  return (
    <div className="vsc-tabbar">
      {tabs.map(id => {
        const f = FILES.find(f => f.id === id)!
        const isActive = id === active
        return (
          <div
            key={id}
            className={`vsc-tab${isActive ? ' active' : ''}`}
            onClick={() => onSelect(id)}
          >
            <span style={{ fontSize: 12, opacity: 0.8 }}>{EXT_ICONS[f.ext] ?? '📄'}</span>
            <span>{f.name}</span>
            <button
              className="vsc-tab-close"
              onClick={e => onClose(id, e)}
              title="Close"
            >
              ×
            </button>
          </div>
        )
      })}
    </div>
  )
}
