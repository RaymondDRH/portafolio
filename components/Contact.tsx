'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:raymondreyesh@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(29,155,140,0.06),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Let&apos;s build something{' '}
            <span className="text-teal">together</span>
          </h2>
          <p className="text-text-muted mb-10 max-w-md mx-auto">
            Open to full-time roles, freelance projects, and collaborations. I respond within 24 hours.
          </p>

          {/* Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="mailto:raymondreyesh@gmail.com"
              className="flex items-center gap-2 text-text-muted hover:text-teal transition-colors font-medium"
            >
              <Mail size={18} />
              raymondreyesh@gmail.com
            </a>
            <a
              href="https://github.com/RaymondDRH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-teal transition-colors font-medium"
            >
              <Github size={18} />
              RaymondDRH
            </a>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-xl mx-auto text-left space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-text-muted mb-1.5 font-medium">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-navy-mid border border-border rounded-xl text-text placeholder-text-muted/50 text-sm focus:outline-none focus:border-teal transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-1.5 font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-navy-mid border border-border rounded-xl text-text placeholder-text-muted/50 text-sm focus:outline-none focus:border-teal transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-1.5 font-medium">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 bg-navy-mid border border-border rounded-xl text-text placeholder-text-muted/50 text-sm focus:outline-none focus:border-teal transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-teal hover:bg-teal-dark text-white rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-teal/20 flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <CheckCircle size={18} />
                  Opening your email client...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          <p className="mt-10 text-text-muted/50 text-sm">
            © {new Date().getFullYear()} Raymond Reyes. Founder of{' '}
            <a
              href="https://github.com/aicrafterlabllc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              AICrafterLab LLC
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
