import Reveal from './Reveal'

/**
 * Consistent section header: small accent eyebrow, title, supporting line.
 */
function SectionHeading({ eyebrow, title, description, align = 'center', id }) {
  const centered = align === 'center'

  return (
    <Reveal className={centered ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p className="eyebrow">
          <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
          {eyebrow}
        </p>
      )}

      <h2 id={id} className="mt-3 text-3xl font-bold text-fg sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-muted ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default SectionHeading
