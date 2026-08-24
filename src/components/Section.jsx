/**
 * Consistent vertical rhythm for every block on the page. `tone="muted"` swaps
 * in the alternate surface so sections visually alternate down the page.
 */
function Section({ id, tone = 'base', className = '', children }) {
  const toneClass = tone === 'muted' ? 'bg-surface2/50' : 'bg-base'

  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-line/60 py-16 sm:py-20 lg:py-24 ${toneClass} ${className}`}
    >
      <div className="shell">{children}</div>
    </section>
  )
}

export default Section
