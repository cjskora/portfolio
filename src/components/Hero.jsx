import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SmartImage from './SmartImage'
import { siteConfig } from '../data/site'

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="absolute -right-20 top-0 -z-10 h-96 w-96 rounded-full bg-pale-purple opacity-40 blur-3xl dark:bg-primary-purple/20" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-14">
        <div className="text-center md:text-left">
          <motion.h1 {...fade(0.05)} className="text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            {siteConfig.name}
          </motion.h1>

          <motion.p
            {...fade(0.15)}
            className="mt-3 text-xl font-medium text-primary-purple md:text-2xl dark:text-light-purple"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            {...fade(0.25)}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:mx-0 dark:text-gray-300"
          >
            University of Waterloo student passionate about experimental physics, detector systems,
            and data analysis. Experienced in nuclear instrumentation, waveform digitization, and
            building analysis pipelines for precision radioisotope studies.
          </motion.p>

          <motion.div
            {...fade(0.35)}
            className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <a
              href="#projects"
              className="rounded-lg bg-primary-purple px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-purple-700 hover:shadow-lg"
            >
              View Projects
            </a>
            <Link
              to="/resume"
              className="rounded-lg border-2 border-primary-purple bg-white px-6 py-3 font-medium text-primary-purple transition-colors hover:bg-pale-purple dark:border-light-purple dark:bg-transparent dark:text-light-purple dark:hover:bg-primary-purple/10"
            >
              Resume
            </Link>
          </motion.div>
        </div>

        <motion.div {...fade(0.2)} className="order-first flex justify-center md:order-none">
          <div className="relative">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl bg-pale-purple dark:bg-primary-purple/30" />
            <SmartImage
              src={siteConfig.headshot}
              alt={`${siteConfig.name} headshot`}
              className="h-44 w-44 rounded-2xl border border-gray-200 object-cover shadow-lg sm:h-56 sm:w-56 md:h-64 md:w-64 dark:border-ink-line"
              fallback={
                <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-dashed border-primary-purple/50 bg-pale-purple/40 text-4xl font-bold text-primary-purple sm:h-56 sm:w-56 md:h-64 md:w-64 dark:border-light-purple/40 dark:bg-ink-soft dark:text-light-purple">
                  CS
                </div>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
