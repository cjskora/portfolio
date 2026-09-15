import Icon from './Icon'
import Reveal from './Reveal'
import { skillsData } from '../data/content'

/**
 * The toolkit. Groups flagged `highlight` are promoted into wide feature cards
 * at the top with a short blurb; the rest fill a compact grid underneath.
 */
function FeatureCard({ group, delay }) {
  return (
    <Reveal
      delay={delay}
      className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface p-6 shadow-soft transition duration-300 hover:border-accent/50 hover:shadow-lift sm:p-7"
    >
      {/* Faint atomic lattice keyed to the accent, marks these as the headline
          groups without introducing a second colour. */}
      <div
        aria-hidden="true"
        className="bg-lattice mask-fade-b pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-white shadow-soft dark:text-base">
            <Icon name={group.icon} />
          </span>
          <div>
            <h3 className="text-base font-bold text-fg sm:text-lg">{group.heading}</h3>
            <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
              Core strength
            </p>
          </div>
        </div>

        {group.blurb && (
          <p className="mt-4 text-sm leading-relaxed text-muted">{group.blurb}</p>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <li key={item} className="chip-accent">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

function CompactCard({ group, delay }) {
  return (
    <Reveal
      delay={delay}
      className="card group p-5 transition duration-300 hover:border-accent/40 hover:shadow-lift"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent transition group-hover:bg-accent/20">
          <Icon name={group.icon} className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-bold text-fg">{group.heading}</h3>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

function SkillsGrid() {
  const featured = skillsData.filter((group) => group.highlight)
  const rest = skillsData.filter((group) => !group.highlight)

  return (
    <div className="space-y-6">
      {featured.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((group, index) => (
            <FeatureCard key={group.heading} group={group} delay={index * 0.08} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((group, index) => (
            <CompactCard key={group.heading} group={group} delay={index * 0.06} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SkillsGrid
