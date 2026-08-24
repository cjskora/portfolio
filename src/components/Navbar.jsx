import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'
import ThemeToggle from './ThemeToggle'
import { siteConfig } from '../data/site'

const sectionLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
]

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

/** Highlights the nav item for whichever section is currently in view. */
function useActiveSection(ids, enabled) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!enabled) {
      setActive(null)
      return
    }

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids, enabled])

  return active
}

function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const onHome = pathname === '/'
  const active = useActiveSection(
    sectionLinks.map((link) => link.id),
    onHome,
  )

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-base/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:text-fg"
      >
        Skip to content
      </a>

      <nav className="shell" aria-label="Main">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="group flex items-center gap-2.5" aria-label="Home">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient text-sm font-bold text-white shadow-soft">
              CS
            </span>
            <span className="hidden text-sm font-semibold text-fg sm:block">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {sectionLinks.map(({ id, label }) => (
              <Link
                key={id}
                to={`/#${id}`}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  onHome && active === id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {onHome && active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-surface2"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                {label}
              </Link>
            ))}

            <Link
              to="/resume"
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === '/resume' ? 'text-accent' : 'text-muted hover:text-fg'
              }`}
            >
              Resume
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden rounded-xl border border-line bg-surface px-4 py-2 text-sm font-semibold text-fg transition hover:border-accent/50 hover:text-accent lg:inline-flex"
            >
              Get in touch
            </a>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line text-muted transition hover:text-fg md:hidden"
            >
              <Icon name={open ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="shell flex flex-col gap-1 py-3">
              {sectionLinks.map(({ id, label }) => (
                <Link
                  key={id}
                  to={`/#${id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-surface2 hover:text-fg"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/resume"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-surface2 hover:text-fg"
              >
                Resume
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 rounded-lg bg-surface2 px-3 py-2.5 text-sm font-semibold text-fg"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
