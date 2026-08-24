import { motion } from 'framer-motion'
import Icon from './Icon'
import SmartImage from './SmartImage'

/**
 * Timeline entry. The vertical rail and dot are drawn by the parent list on
 * medium screens and up; on mobile it collapses to a plain card.
 */
function ExperienceCard({ experience, index = 0, timeline = true }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${timeline ? 'sm:pl-12' : ''}`}
    >
      {timeline && (
        <span
          aria-hidden="true"
          className="absolute left-[9px] top-7 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-base bg-accent shadow-glow-accent sm:block"
        />
      )}

      <div className="card p-5 transition duration-300 hover:border-accent/40 hover:shadow-lift sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <SmartImage
              src={experience.logo}
              alt={`${experience.company} logo`}
              hideWhenMissing
              className="mt-0.5 h-10 w-10 shrink-0 rounded-xl border border-line bg-surface2 object-contain p-1"
            />
            <div>
              <h3 className="text-lg font-bold leading-snug text-fg">{experience.role}</h3>
              <p className="mt-0.5 text-sm font-semibold text-accent">{experience.company}</p>
              <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="mapPin" className="h-3.5 w-3.5" />
                  {experience.location}
                </span>
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface2 px-2.5 py-1 font-mono text-xs text-muted">
            <Icon name="calendar" className="h-3.5 w-3.5" />
            {experience.duration}
          </span>
        </div>

        {experience.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span key={tag} className="chip-accent">
                {tag}
              </span>
            ))}
          </div>
        )}

        <ul className="mt-5 space-y-2.5">
          {experience.achievements.map((achievement) => (
            <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span
                aria-hidden="true"
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  )
}

export default ExperienceCard
