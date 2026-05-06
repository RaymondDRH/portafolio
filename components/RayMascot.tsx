'use client'

import { useState, useEffect } from 'react'

type Props = {
  onOpen: () => void
  isOpen: boolean
}

export default function RayMascot({ onOpen, isOpen }: Props) {
  const [blinking, setBlinking] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const blink = () => {
      setBlinking(true)
      setTimeout(() => setBlinking(false), 200)
    }
    const interval = setInterval(blink, 8000 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [])

  if (isOpen || !visible) return null

  return (
    <div className="mascot">
      <button className="mascot-bot" onClick={onOpen} aria-label="Chat with NOVA">
        {/* Our custom robot SVG */}
        <svg viewBox="0 0 64 64" fill="none" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <rect x="16" y="34" width="32" height="20" rx="6" fill="rgba(4,17,15,0.8)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          {/* Head */}
          <rect x="14" y="10" width="36" height="28" rx="10" fill="rgba(4,17,15,0.8)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          {/* Antenna */}
          <line x1="32" y1="10" x2="32" y2="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="32" cy="3" r="2" fill="white">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
          {/* Eyes */}
          {blinking ? (
            <>
              <rect x="20" y="20" width="8" height="2" rx="1" fill="white" />
              <rect x="36" y="20" width="8" height="2" rx="1" fill="white" />
            </>
          ) : (
            <>
              <rect x="20" y="18" width="8" height="8" rx="2" fill="white" />
              <rect x="36" y="18" width="8" height="8" rx="2" fill="white" />
              <rect x="22" y="20" width="2" height="2" rx="1" fill="rgba(4,17,15,0.6)" />
              <rect x="38" y="20" width="2" height="2" rx="1" fill="rgba(4,17,15,0.6)" />
            </>
          )}
          {/* Mouth */}
          <rect x="24" y="30" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
          {/* Body details */}
          <circle cx="24" cy="44" r="3" fill="rgba(255,255,255,0.4)" />
          <circle cx="32" cy="44" r="3" fill="rgba(255,255,255,0.7)" />
          <circle cx="40" cy="44" r="3" fill="rgba(255,255,255,0.4)" />
          {/* Arms */}
          <rect x="8" y="36" width="8" height="12" rx="4" fill="rgba(4,17,15,0.8)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <rect x="48" y="36" width="8" height="12" rx="4" fill="rgba(4,17,15,0.8)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        </svg>
      </button>
      <div className="mascot-tip">Ask NOVA about Raymond →</div>
    </div>
  )
}
