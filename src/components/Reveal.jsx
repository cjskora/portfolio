import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Scroll-triggered fade + rise. One place to tune the site's motion feel.
 */
function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 18,
  duration = 0.6,
  once = true,
  className = '',
  ...rest
}) {
  const Tag = motion[as] ?? motion.div

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
