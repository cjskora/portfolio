import { useState } from 'react'

function PlaceholderIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 16.5 8.4 11a1.5 1.5 0 0 1 2.1 0l3.3 3.3m0 0 2.1-2.1a1.5 1.5 0 0 1 2.1 0L21 15m-6.1-.7L21 15M4.5 4.5h15a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V6a1.5 1.5 0 0 1 1.5-1.5Z"
      />
    </svg>
  )
}

/**
 * Image that degrades to a labelled placeholder when the file has not been
 * added to /public yet, so an unfinished asset never looks like a broken page.
 *
 * - `fallback`  render something completely custom instead of the placeholder
 * - `label`     text shown inside the default placeholder
 * - `hideWhenMissing` render nothing at all if the file is absent
 */
function SmartImage({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  fallback,
  label,
  hideWhenMissing = false,
  onStatusChange,
  ...rest
}) {
  const [status, setStatus] = useState('loading') // loading | ready | missing

  const update = (next) => {
    setStatus(next)
    onStatusChange?.(next)
  }

  if (!src || status === 'missing') {
    if (hideWhenMissing) return null
    if (fallback !== undefined) return fallback

    return (
      <div className={`image-slot ${className}`} role="img" aria-label={label || alt || 'Image placeholder'}>
        <PlaceholderIcon />
        <span className="px-3 text-[11px] font-medium uppercase tracking-wider">
          {label || alt || 'Image coming soon'}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => update('ready')}
      onError={() => update('missing')}
      className={`${className} transition-opacity duration-500 ${
        status === 'ready' ? 'opacity-100' : 'opacity-0'
      } ${wrapperClassName}`}
      {...rest}
    />
  )
}

export default SmartImage
