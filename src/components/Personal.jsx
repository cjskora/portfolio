import Reveal from './Reveal'
import SmartImage from './SmartImage'
import { personalData } from '../data/content'

/**
 * Short personal aside. Deliberately compact so it reads as a footnote to the
 * technical work rather than competing with it.
 */
function Personal() {
  return (
    <Reveal className="card overflow-hidden">
      <div className="grid gap-0 md:grid-cols-[minmax(0,0.85fr)_1fr]">
        <figure className="relative">
          <SmartImage
            src={personalData.image}
            alt={personalData.imageCaption}
            label="Add images/skiing.jpg"
            className="h-full min-h-[220px] w-full object-cover"
          />
        </figure>

        <div className="p-6 sm:p-8">
          <p className="eyebrow">
            <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
            Off the clock
          </p>
          <h3 className="mt-3 text-xl font-bold text-fg sm:text-2xl">{personalData.heading}</h3>
          <p className="mt-4 text-base leading-relaxed text-muted">{personalData.text}</p>
        </div>
      </div>
    </Reveal>
  )
}

export default Personal
