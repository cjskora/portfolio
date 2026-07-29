import { useState } from 'react'

/**
 * Image that hides itself (or renders a fallback) when the file is missing.
 * Lets us ship the site before every asset is dropped into /public.
 */
function SmartImage({ src, alt, className = '', fallback = null, ...rest }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) return fallback

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}

export default SmartImage
