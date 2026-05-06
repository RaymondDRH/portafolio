'use client'

import { useEffect, useRef } from 'react'

export default function RobotFAB({ onClick }: { onClick: () => void }) {
  const eye1Ref = useRef<SVGRectElement>(null)
  const eye2Ref = useRef<SVGRectElement>(null)

  useEffect(() => {
    const blink = () => {
      const e1 = eye1Ref.current
      const e2 = eye2Ref.current
      if (!e1 || !e2) return
      e1.style.transition = e2.style.transition = 'transform 0.06s ease'
      e1.style.transform = e2.style.transform = 'scaleY(0.1)'
      setTimeout(() => {
        e1.style.transform = e2.style.transform = 'scaleY(1)'
      }, 100)
    }
    const schedule = () => {
      const delay = 6000 + Math.random() * 5000
      setTimeout(() => { blink(); schedule() }, delay)
    }
    schedule()
  }, [])

  return (
    <button className="robot-fab" onClick={onClick} aria-label="Ask RAY — AI Assistant">
      <svg
        width="54" height="64"
        viewBox="0 0 54 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="robot-svg"
      >
        {/* ── Antenna ── */}
        <line x1="27" y1="2" x2="27" y2="10" stroke="#1D9B8C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="27" cy="2" r="3" fill="#2BD4BD" className="robot-antenna-dot" />

        {/* ── Head ── */}
        <rect x="8" y="10" width="38" height="28" rx="7" fill="#1D9B8C" opacity="0.18" stroke="#1D9B8C" strokeWidth="1.8" />

        {/* ── Eyes ── */}
        <rect
          ref={eye1Ref}
          x="13" y="19" width="10" height="10" rx="2.5"
          fill="#2BD4BD"
          style={{ transformOrigin: '18px 24px' }}
        />
        <rect
          ref={eye2Ref}
          x="31" y="19" width="10" height="10" rx="2.5"
          fill="#2BD4BD"
          style={{ transformOrigin: '36px 24px' }}
        />

        {/* ── Mouth ── */}
        <path d="M18 34 Q27 38.5 36 34" stroke="#1D9B8C" strokeWidth="1.6" strokeLinecap="round" fill="none" />

        {/* ── Neck ── */}
        <rect x="22" y="38" width="10" height="5" rx="2" fill="#1D9B8C" opacity="0.4" />

        {/* ── Body ── */}
        <rect x="10" y="43" width="34" height="18" rx="6" fill="#1D9B8C" opacity="0.14" stroke="#1D9B8C" strokeWidth="1.6" />

        {/* ── Chest light ── */}
        <circle cx="27" cy="52" r="3.5" fill="#2BD4BD" opacity="0.6" />

        {/* ── Side arms ── */}
        <rect x="2" y="45" width="7" height="12" rx="3.5" fill="#1D9B8C" opacity="0.35" stroke="#1D9B8C" strokeWidth="1.2" />
        <rect x="45" y="45" width="7" height="12" rx="3.5" fill="#1D9B8C" opacity="0.35" stroke="#1D9B8C" strokeWidth="1.2" />
      </svg>
    </button>
  )
}
