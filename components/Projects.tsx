import ProjectCard from './ProjectCard'
import { projects } from '@/lib/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
          Things I&apos;ve <span className="text-teal">built</span>
        </h2>
        <p className="text-text-muted mb-12 max-w-lg">
          Real products shipped to production — not side projects or tutorials. Each one solves an actual problem.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
