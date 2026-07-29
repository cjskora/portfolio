import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/resume', label: 'Resume' },
]

function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-sm dark:border-ink-line dark:bg-ink/90">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 transition-colors hover:text-primary-purple dark:text-white dark:hover:text-light-purple"
          >
            CS
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 sm:flex">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(to)
                      ? 'text-primary-purple dark:text-light-purple'
                      : 'text-gray-600 hover:text-primary-purple dark:text-gray-300 dark:hover:text-light-purple'
                  }`}
                >
                  {label}
                  {isActive(to) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-purple dark:bg-light-purple"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 sm:hidden dark:border-ink-line dark:text-gray-300"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="flex flex-col pb-3 sm:hidden">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(to)
                    ? 'bg-pale-purple/50 text-primary-purple dark:bg-ink-soft dark:text-light-purple'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-ink-soft'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
