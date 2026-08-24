import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin gradient bar pinned to the very top that tracks reading progress.
 */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const width = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX: width }}
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-accent-gradient"
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
