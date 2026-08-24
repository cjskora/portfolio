import Icon from './Icon'
import Reveal from './Reveal'
import { skillsData } from '../data/content'

function SkillsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {skillsData.map((group, index) => (
        <Reveal
          key={group.heading}
          delay={index * 0.08}
          className="card group p-5 transition duration-300 hover:border-accent/40 hover:shadow-lift sm:p-6"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent transition group-hover:bg-accent/20">
              <Icon name={group.icon} />
            </span>
            <h3 className="text-base font-bold text-fg">{group.heading}</h3>
          </div>

          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  )
}

export default SkillsGrid
