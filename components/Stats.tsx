'use client'

import { useState, useEffect, useRef } from 'react'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now()
            const dur = 1400
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / dur)
              const eased = 1 - Math.pow(1 - p, 3)
              setN(Math.round(to * eased))
              if (p < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])

  return <span ref={ref}>{n}{suffix}</span>
}

export default function Stats() {
  return (
    <section style={{ paddingTop: 'calc(60px * var(--density))', paddingBottom: 'calc(60px * var(--density))' }}>
      <div className="container">
        <div className="stats reveal">
          <div className="stat">
            <div className="stat-value"><Counter to={7} /><sup>+</sup></div>
            <div className="stat-label">Products shipped</div>
          </div>
          <div className="stat">
            <div className="stat-value"><Counter to={3} /><sup>yr</sup></div>
            <div className="stat-label">Building with AI</div>
          </div>
          <div className="stat">
            <div className="stat-value"><Counter to={100} suffix="%" /></div>
            <div className="stat-label">Self-taught</div>
          </div>
          <div className="stat">
            <div className="stat-value"><Counter to={24} /><sup>h</sup></div>
            <div className="stat-label">Avg response time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
