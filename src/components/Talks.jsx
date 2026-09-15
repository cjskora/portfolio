import { useEffect, useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import { talksData } from '../data/content'

/**
 * Seminar slide decks. Each entry probes for its PDF so a talk that has not
 * been uploaded yet renders as plain text instead of a link to a 404.
 */
function useFileAvailable(url) {
  const [available, setAvailable] = useState(null)

  useEffect(() => {
    let cancelled = false

    fetch(url, { method: 'HEAD' })
      .then((response) => {
        const type = response.headers.get('content-type') || ''
        if (!cancelled) setAvailable(response.ok && !type.includes('text/html'))
      })
      .catch(() => {
        if (!cancelled) setAvailable(false)
      })

    return () => {
      cancelled = true
    }
  }, [url])

  return available
}

function TalkRow({ talk, index }) {
  const available = useFileAvailable(talk.file)

  return (
    <Reveal
      as="li"
      delay={index * 0.06}
      className="card flex flex-col gap-4 p-5 transition duration-300 hover:border-accent/40 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-6"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
          <Icon name="file" />
        </span>
        <div>
          <h3 className="text-base font-bold leading-snug text-fg">{talk.title}</h3>
          <p className="mt-1 text-xs text-muted">
            {talk.venue} · {talk.date}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{talk.summary}</p>
        </div>
      </div>

      {available ? (
        <a
          href={talk.file}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline shrink-0 self-start px-4 py-2 sm:self-center"
        >
          Slides
          <Icon name="external" className="h-4 w-4" />
        </a>
      ) : (
        <span className="shrink-0 self-start rounded-xl border border-dashed border-line px-4 py-2 text-xs text-muted sm:self-center">
          Slides to be added
        </span>
      )}
    </Reveal>
  )
}

function Talks() {
  return (
    <ol className="grid gap-4">
      {talksData.map((talk, index) => (
        <TalkRow key={talk.title} talk={talk} index={index} />
      ))}
    </ol>
  )
}

export default Talks
