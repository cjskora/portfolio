import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SmartImage from './SmartImage'

function StatusBadge({ status }) {
  const done = status === 'Completed'
  return (
    <span
      className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
        done
          ? 'bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-300'
          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-500/15 dark:text-yellow-300'
      }`}
    >
      {status}
    </span>
  )
}

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const gallery = project.gallery ?? []

  return (
    <motion.div
      layout
      className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg dark:border-ink-line dark:bg-ink-soft"
    >
      <button
        type="button"
        onClick={() => setIsExpanded((v) => !v)}
        aria-expanded={isExpanded}
        className="w-full text-left"
      >
        <SmartImage
          src={project.cover}
          alt={project.title}
          className="h-48 w-full border-b border-gray-200 object-cover sm:h-56 dark:border-ink-line"
        />

        <div className="p-6">
          <div className="mb-3 flex items-start justify-between gap-4">
            <h3 className="flex-1 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            <StatusBadge status={project.status} />
          </div>

          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{project.shortDescription}</p>

          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-pale-purple px-2 py-1 text-xs font-medium text-primary-purple dark:bg-primary-purple/20 dark:text-light-purple"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                  +{project.techStack.length - 3} more
                </span>
              )}
            </div>

            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-primary-purple dark:text-light-purple"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-200 bg-gray-50 dark:border-ink-line dark:bg-ink"
          >
            <div className="space-y-5 p-6">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Description</h4>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {project.fullDescription}
                </p>
              </div>

              {project.achievements?.length > 0 && (
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Key Achievements</h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {project.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-primary-purple bg-white px-3 py-1 text-xs font-medium text-primary-purple dark:border-light-purple/50 dark:bg-ink-soft dark:text-light-purple"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {gallery.length > 0 && (
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Gallery</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {gallery.map((item) => (
                      <figure key={item.src} className="overflow-hidden rounded-lg">
                        <SmartImage
                          src={item.src}
                          alt={item.caption || project.title}
                          className="h-48 w-full rounded-lg border border-gray-200 object-cover dark:border-ink-line"
                        />
                        {item.caption && (
                          <figcaption className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            {item.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProjectCard
