import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'

/**
 * Full-screen image viewer for the project galleries and the lab strip.
 * Closes on Escape / backdrop click, steps with the arrow keys.
 */
function Lightbox({ items = [], index, onClose, onIndexChange }) {
  const isOpen = index !== null && index >= 0 && index < items.length
  const item = isOpen ? items[index] : null

  const step = useCallback(
    (delta) => {
      if (!items.length) return
      onIndexChange((index + delta + items.length) % items.length)
    },
    [index, items.length, onIndexChange],
  )

  useEffect(() => {
    if (!isOpen) return

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }

    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose, step])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.caption || 'Image viewer'}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <Icon name="close" />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                aria-label="Previous image"
                className="absolute left-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:bg-white/10 hover:text-white sm:left-6"
              >
                <Icon name="chevronLeft" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                aria-label="Next image"
                className="absolute right-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:bg-white/10 hover:text-white sm:right-6"
              >
                <Icon name="chevronRight" />
              </button>
            </>
          )}

          <motion.img
            key={item.src}
            src={item.src}
            alt={item.caption || ''}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
          />

          <div className="mt-4 flex items-center gap-3 text-sm text-white/70">
            {item.caption && <span>{item.caption}</span>}
            {items.length > 1 && (
              <span className="font-mono text-xs text-white/50">
                {index + 1} / {items.length}
              </span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Lightbox
