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
        width="56" height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="robot-svg"
      >
        {/* ── Glow ── */}
        <circle cx="28" cy="28" r="27" fill="#0f1117" stroke="#1D9B8C" strokeWidth="1.5" />

        {/* ── Antenna ── */}
        <line x1="28" y1="10" x2="28" y2="17" stroke="#1D9B8C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="28" cy="9" r="2.5" fill="#2BD4BD" className="robot-antenna-dot" />

        {/* ── Head ── */}
        <rect x="16" y="17" width="24" height="20" rx="4" fill="#1D9B8C" opacity="0.15" stroke="#1D9B8C" strokeWidth="1.2" />

        {/* ── Eyes ── */}
        <rect
          ref={eye1Ref}
          x="19.5" y="23" width="6" height="6" rx="1.5"
          fill="#2BD4BD"
          style={{ transformOrigin: '22.5px 26px' }}
        />
        <rect
          ref={eye2Ref}
          x="30.5" y="23" width="6" height="6" rx="1.5"
          fill="#2BD4BD"
          style={{ transformOrigin: '33.5px 26px' }}
        />

        {/* ── Mouth ── */}
        <path d="M22 33.5 Q28 36 34 33.5" stroke="#1D9B8C" strokeWidth="1.2" strokeLinecap="round" fill="none" />

        {/* ── Body ── */}
        <rect x="19" y="39" width="18" height="10" rx="3" fill="#1D9B8C" opacity="0.12" stroke="#1D9B8C" strokeWidth="1" />
        <line x1="28" y1="39" x2="28" y2="49" stroke="#1D9B8C" strokeWidth="0.8" opacity="0.5" />

        {/* ── Side bolts ── */}
        <circle cx="16" cy="43" r="1.5" fill="#1D9B8C" opacity="0.5" />
        <circle cx="40" cy="43" r="1.5" fill="#1D9B8C" opacity="0.5" />
      </svg>
    </button>
  )
}
