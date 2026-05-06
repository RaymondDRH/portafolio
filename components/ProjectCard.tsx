'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import type { Project } from '@/lib/projects'

type Props = {
  project: Project
  index: number
}

const placeholderColors: Record<string, string> = {
  foundry: 'from-teal/20 to-navy',
  ccever: 'from-blue-500/20 to-navy',
  'ai-invoice': 'from-purple-500/20 to-navy',
  'business-name': 'from-orange-500/20 to-navy',
  'n8n-showcase': 'from-pink-500/20 to-navy',
  'chatbot-widget': 'from-teal/20 to-navy',
  'client-portal': 'from-indigo-500/20 to-navy',
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative rounded-2xl border border-border bg-navy-mid overflow-hidden hover:border-teal/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal/10"
    >
      {/* Image / placeholder */}
      <div
        className={`relative h-48 bg-gradient-to-br ${placeholderColors[project.id] ?? 'from-teal/10 to-navy'} flex items-center justify-center overflow-hidden`}
      >
        <div className="text-5xl opacity-20 select-none font-bold text-teal">
          {project.title.slice(0, 2).toUpperCase()}
        </div>
        {project.featured && (
          <span className="absolute top-3 right-3 px-2 py-0.5 bg-teal text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-text font-bold text-lg mb-2 group-hover:text-teal transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-teal/10 text-teal text-[11px] rounded-md border border-teal/20 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-teal transition-colors font-medium"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-teal transition-colors font-medium"
            >
              <Code2 size={13} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
