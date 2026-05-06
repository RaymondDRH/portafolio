'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  onOpen: () => void
  isOpen: boolean
}

export default function RayMascot({ onOpen, isOpen }: Props) {
  const [blinking, setBlinking] = useState(false)
  const [hovered, setHovered] = useState(false)

  // Blink every 8-10 seconds
  useEffect(() => {
    const blink = () => {
      setBlinking(true)
      setTimeout(() => setBlinking(false), 200)
    }
    const interval = setInterval(blink, 8000 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [])

  if (isOpen) return null

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5, type: 'spring' }}
        onClick={onOpen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 focus:outline-none group"
        aria-label="Chat with RAY"
      >
        {/* Float animation wrapper */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="relative w-full h-full"
        >
          {/* Glow */}
          <motion.div
            animate={hovered ? { opacity: 1, scale: 1.2 } : { opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-teal/30 rounded-full blur-md"
          />

          {/* Robot SVG */}
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-lg"
          >
            {/* Body / base */}
            <rect x="16" y="34" width="32" height="20" rx="6" fill="#0D1525" stroke="#1D9B8C" strokeWidth="1.5" />

            {/* Head hexagon-ish (rounded rect) */}
            <motion.rect
              x="14" y="10" width="36" height="28" rx="10"
              fill="#0D1525"
              stroke="#1D9B8C"
              strokeWidth="1.5"
              animate={hovered ? { rotate: [0, -3, 3, 0] } : {}}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: '32px 24px' }}
            />

            {/* Antenna */}
            <line x1="32" y1="10" x2="32" y2="4" stroke="#1D9B8C" strokeWidth="1.5" strokeLinecap="round" />
            <motion.circle
              cx="32" cy="3" r="2"
              fill="#2DD4BF"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />

            {/* Eyes */}
            {blinking ? (
              <>
                <rect x="20" y="20" width="8" height="2" rx="1" fill="#2DD4BF" />
                <rect x="36" y="20" width="8" height="2" rx="1" fill="#2DD4BF" />
              </>
            ) : (
              <>
                <motion.rect
                  x="20" y="18" width="8" height="8" rx="2"
                  fill="#2DD4BF"
                  animate={hovered ? { scaleY: [1, 0.7, 1] } : {}}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: '24px 22px' }}
                />
                <motion.rect
                  x="36" y="18" width="8" height="8" rx="2"
                  fill="#2DD4BF"
                  animate={hovered ? { scaleY: [1, 0.7, 1] } : {}}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  style={{ transformOrigin: '40px 22px' }}
                />
                {/* Eye shine */}
                <rect x="22" y="20" width="2" height="2" rx="1" fill="white" opacity="0.6" />
                <rect x="38" y="20" width="2" height="2" rx="1" fill="white" opacity="0.6" />
              </>
            )}

            {/* Mouth */}
            <rect x="24" y="30" width="16" height="3" rx="1.5" fill="#1D9B8C" opacity="0.6" />

            {/* Body details */}
            <circle cx="24" cy="44" r="3" fill="#1D9B8C" opacity="0.6" />
            <circle cx="32" cy="44" r="3" fill="#2DD4BF" opacity="0.8" />
            <circle cx="40" cy="44" r="3" fill="#1D9B8C" opacity="0.6" />

            {/* Arms */}
            <rect x="8" y="36" width="8" height="12" rx="4" fill="#0D1525" stroke="#1D9B8C" strokeWidth="1.5" />
            <rect x="48" y="36" width="8" height="12" rx="4" fill="#0D1525" stroke="#1D9B8C" strokeWidth="1.5" />
          </svg>

          {/* Tooltip */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-navy-mid border border-teal/30 text-text text-xs px-3 py-2 rounded-lg shadow-xl"
              >
                Ask me anything ✦
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-navy-mid border-r border-t border-teal/30 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.button>
    </AnimatePresence>
  )
}
