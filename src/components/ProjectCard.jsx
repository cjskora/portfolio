import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Gallery from './Gallery'
import Icon from './Icon'
import SmartImage from './SmartImage'

function StatusBadge({ status }) {
  const done = status === 'Completed'

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur ${
        done
          ? 'bg-emerald-500/15 text-emerald-600 ring-1 ring-inset ring-emerald-500/30 dark:text-emerald-300'
          : 'bg-amber-500/15 text-amber-700 ring-1 ring-inset ring-amber-500/30 dark:text-amber-300'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${done ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      {status}
    </span>
  )
}

function ProjectCard({ project, index = 0, featured = false, className = '' }) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()
  const gallery = project.gallery ?? []

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`card group overflow-hidden transition duration-300 hover:border-accent/40 hover:shadow-lift ${className}`}
    >
      {/* Cover */}
      <div
        className={`relative overflow-hidden border-b border-line bg-surface2 ${
          featured ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[16/10]'
        }`}
      >
        <SmartImage
          src={project.cover}
          alt={`${project.title} cover image`}
          label="Add a cover image"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent"
        />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <StatusBadge status={project.status} />
          {project.year && (
            <span className="rounded-full bg-black/30 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur">
              {project.year}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-bold leading-snug text-fg sm:text-xl">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="chip-accent">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="chip">+{project.techStack.length - 4}</span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
        >
          {expanded ? 'Hide details' : 'Read more'}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <Icon name="chevronDown" className="h-4 w-4" />
          </motion.span>
        </button>
      </div>

      {/* Details */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-surface2/60"
          >
            <div className="space-y-6 p-5 sm:p-6">
              <div>
                <h4 className="eyebrow">Overview</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.fullDescription}</p>
              </div>

              {project.achievements?.length > 0 && (
                <div>
                  <h4 className="eyebrow">Highlights</h4>
                  <ul className="mt-3 space-y-2">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3 text-sm text-muted">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="eyebrow">Stack</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {gallery.length > 0 && (
                <div>
                  <h4 className="eyebrow">Gallery</h4>
                  <div className="mt-3">
                    <Gallery items={gallery} columns="sm:grid-cols-3" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default ProjectCard
