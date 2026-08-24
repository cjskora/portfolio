import Icon from './Icon'
import Reveal from './Reveal'
import SmartImage from './SmartImage'
import { aboutData } from '../data/content'

function About() {
  return (
    <div>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Portrait / lab photo. Sticky so it stays beside the copy on tall screens. */}
        <Reveal className="relative lg:sticky lg:top-24">
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-4xl bg-accent-gradient opacity-[0.12] blur-2xl"
          />
          <figure className="card relative overflow-hidden rounded-3xl p-2">
            <SmartImage
              src={aboutData.image}
              alt={aboutData.imageCaption}
              label="Add images/about.jpg"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            {aboutData.imageCaption && (
              <figcaption className="px-3 pb-2 pt-3 text-xs text-muted">
                {aboutData.imageCaption}
              </figcaption>
            )}
          </figure>
        </Reveal>

        {/* Copy */}
        <Reveal delay={0.1}>
          <h3 className="text-2xl font-bold leading-snug text-fg sm:text-3xl">
            {aboutData.heading}
          </h3>

          <div className="mt-5 space-y-4">
            {aboutData.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      {aboutData.focus?.length > 0 && (
        <Reveal delay={0.15} className="mt-12">
          <div className="rule" />
          <p className="eyebrow mt-8">Current focus</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutData.focus.map((item) => (
              <li
                key={item}
                className="card flex items-start gap-3 p-4 text-sm font-medium text-fg transition duration-300 hover:border-accent/40"
              >
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </div>
  )
}

export default About
