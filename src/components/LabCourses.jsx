import Icon from './Icon'
import Reveal from './Reveal'
import { labCoursesData } from '../data/content'

/**
 * The Nanotechnology Engineering laboratory sequence, second year through the
 * fourth-year specialisation labs. Course codes follow the Waterloo calendar.
 */
function LabCourses() {
  const { intro, calendarUrl, courses } = labCoursesData

  return (
    <div>
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-base leading-relaxed text-muted">{intro}</p>
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:gap-2.5"
        >
          Browse the NE course calendar
          <Icon name="external" className="h-4 w-4" />
        </a>
      </Reveal>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <Reveal
            as="li"
            key={course.code}
            delay={index * 0.05}
            className="card flex flex-col p-5 transition duration-300 hover:border-accent/40 hover:shadow-lift"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-sm font-semibold text-accent">{course.code}</span>
              <span className="chip shrink-0">{course.year}</span>
            </div>

            <h3 className="mt-3 text-sm font-bold leading-snug text-fg">{course.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{course.summary}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

export default LabCourses
