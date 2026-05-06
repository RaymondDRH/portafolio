type Props = {
  size?: number
  animated?: boolean
  simplified?: boolean
}

export default function RobotGlyph({ size = 64, animated = true, simplified = false }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <defs>
        <linearGradient id="robotBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      {/* Antenna */}
      <line x1="40" y1="14" x2="40" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="12" r="2.5" fill="currentColor">
        {animated && <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite" />}
      </circle>
      {/* Head */}
      <rect x="22" y="22" width="36" height="30" rx="6" stroke="currentColor" strokeWidth="2" fill={simplified ? 'none' : 'url(#robotBody)'} />
      {/* Inner panel */}
      <rect x="26" y="26" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      {/* Eyes */}
      <circle cx="32" cy="36" r="2.5" fill="currentColor">
        {animated && <animate attributeName="r" values="2.5;0.5;2.5" dur="4s" repeatCount="indefinite" />}
      </circle>
      <circle cx="48" cy="36" r="2.5" fill="currentColor">
        {animated && <animate attributeName="r" values="2.5;0.5;2.5" dur="4s" repeatCount="indefinite" />}
      </circle>
      {/* Mouth */}
      <line x1="34" y1="44" x2="46" y2="44" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
      {/* Side ears */}
      <rect x="18" y="32" width="4" height="10" rx="1" fill="currentColor" fillOpacity="0.6" />
      <rect x="58" y="32" width="4" height="10" rx="1" fill="currentColor" fillOpacity="0.6" />
      {/* Neck */}
      <line x1="36" y1="52" x2="36" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="44" y1="52" x2="44" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Body */}
      <rect x="28" y="58" width="24" height="14" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="34" cy="65" r="1.5" fill="currentColor" fillOpacity="0.7" />
      <circle cx="40" cy="65" r="1.5" fill="currentColor" fillOpacity="0.7" />
      <circle cx="46" cy="65" r="1.5" fill="currentColor" fillOpacity="0.7" />
    </svg>
  )
}
