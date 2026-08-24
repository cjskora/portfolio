import { useMemo, useState } from 'react'
import Icon from './Icon'
import Lightbox from './Lightbox'
import SmartImage from './SmartImage'

/**
 * Responsive image grid with a lightbox.
 *
 * Tiles whose file is still missing render as dashed placeholders and are not
 * clickable, so the layout stays intact while assets are being added.
 */
function Gallery({ items = [], columns = 'sm:grid-cols-2 lg:grid-cols-3', aspect = 'aspect-[4/3]' }) {
  const [ready, setReady] = useState(() => ({}))
  const [openIndex, setOpenIndex] = useState(null)

  // The lightbox only ever cycles through images that actually loaded.
  const available = useMemo(() => items.filter((item) => ready[item.src]), [items, ready])

  if (!items.length) return null

  const open = (src) => {
    const position = available.findIndex((item) => item.src === src)
    if (position !== -1) setOpenIndex(position)
  }

  return (
    <>
      <div className={`grid gap-4 ${columns}`}>
        {items.map((item) => {
          const isReady = Boolean(ready[item.src])

          return (
            <figure key={item.src} className="group">
              <button
                type="button"
                disabled={!isReady}
                onClick={() => open(item.src)}
                aria-label={isReady ? `View larger: ${item.caption || 'image'}` : undefined}
                className={`relative block w-full overflow-hidden rounded-xl border border-line bg-surface2 ${aspect} ${
                  isReady ? 'cursor-zoom-in' : 'cursor-default'
                }`}
              >
                <SmartImage
                  src={item.src}
                  alt={item.caption || ''}
                  label={item.caption}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  onStatusChange={(status) =>
                    status === 'ready' && setReady((prev) => ({ ...prev, [item.src]: true }))
                  }
                />

                {isReady && (
                  <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/55 via-transparent to-transparent p-2 opacity-0 transition group-hover:opacity-100">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 text-white backdrop-blur-sm">
                      <Icon name="expand" className="h-4 w-4" />
                    </span>
                  </span>
                )}
              </button>

              {item.caption && (
                <figcaption className="mt-2 text-xs text-muted">{item.caption}</figcaption>
              )}
            </figure>
          )
        })}
      </div>

      <Lightbox
        items={available}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </>
  )
}

export default Gallery
