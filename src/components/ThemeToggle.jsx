import { motion } from 'framer-motion'
import Icon from './Icon'
import { useTheme } from '../context/ThemeContext'

/**
 * Two-state pill switch. Dark is the site default, light is opt-in.
 */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative inline-flex h-9 w-[68px] items-center rounded-full border border-line bg-surface2 p-1 transition hover:border-accent/40"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 34 }}
        className={`absolute h-7 w-7 rounded-full bg-accent-gradient shadow-soft ${
          isDark ? 'left-1' : 'left-[34px]'
        }`}
        aria-hidden="true"
      />

      <span className="relative z-10 flex w-full items-center justify-between px-1.5">
        <Icon
          name="moon"
          className={`h-4 w-4 transition-colors ${isDark ? 'text-white' : 'text-muted'}`}
        />
        <Icon
          name="sun"
          className={`h-4 w-4 transition-colors ${isDark ? 'text-muted' : 'text-white'}`}
        />
      </span>
    </button>
  )
}

export default ThemeToggle
