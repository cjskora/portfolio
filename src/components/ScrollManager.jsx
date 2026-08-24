import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router does not restore scroll position or honour `#hash` targets on
 * its own. This sends the user to the top on a page change, or to the matching
 * section when the URL carries a hash (e.g. `/#projects` from the Resume page).
 */
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const { hash } = location

    if (hash) {
      // Wait a frame so the target section exists after a route change.
      const raf = requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)))
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else window.scrollTo({ top: 0 })
      })
      return () => cancelAnimationFrame(raf)
    }

    window.scrollTo({ top: 0 })
  }, [location.key, location.pathname, location.hash])

  return null
}

export default ScrollManager
