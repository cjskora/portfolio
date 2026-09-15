import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { HexLattice, Orbits } from './NanoBackdrop'
import SmartImage from './SmartImage'
import SocialLinks from './SocialLinks'
import { siteConfig } from '../data/site'

const EASE = [0.22, 1, 0.36, 1]
const rise = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

// `isolate` on the section makes it its own stacking context. Without it the
// -z-10 backdrop paints before the app wrapper's opaque background and vanishes
// behind it.
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Nano-themed background art: graphene lattice, orbital shells, and a
          soft blue wash. All decorative and hidden from assistive tech. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="mask-fade absolute inset-0 text-accent/40 dark:text-accent/28">
          <HexLattice className="absolute inset-0" />
        </div>
        <Orbits className="absolute -right-24 -top-32 h-[520px] w-[520px] animate-drift text-accent/60 dark:text-accent/50" />
        <Orbits className="absolute -bottom-64 -left-40 hidden h-[440px] w-[440px] text-accent/35 lg:block" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-accent/15 blur-[130px]" />
      </div>

      <div className="shell pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:gap-16">
          {/* Copy */}
          <div>
            <motion.div {...rise(0)} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open to co-op and research roles
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <Icon name="mapPin" className="h-4 w-4" />
                {siteConfig.location}
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="mt-6 text-4xl font-extrabold leading-[1.05] text-fg sm:text-5xl lg:text-6xl"
            >
              {siteConfig.name}
              <span className="mt-2 block text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
                {siteConfig.title}
              </span>
            </motion.h1>

            <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              University of Waterloo student working on experimental physics instrumentation and
              nanoscale devices. I build and commission radiation detectors, tune digitizers and
              coincidence logic, fabricate in the cleanroom, and write the Python that turns raw
              waveforms into calibrated results.
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View projects
                <Icon name="arrowDown" className="h-4 w-4" />
              </a>
              <Link to="/resume" className="btn-outline">
                <Icon name="download" className="h-4 w-4" />
                Resume
              </Link>
            </motion.div>

            <motion.div {...rise(0.32)} className="mt-8">
              <SocialLinks />
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative">
              {/* Soft blue halo behind the photo */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-4xl bg-accent/20 blur-2xl"
              />

              <div className="card relative overflow-hidden rounded-4xl p-2">
                <SmartImage
                  src={siteConfig.headshot}
                  alt={`${siteConfig.name} portrait`}
                  label="Add images/headshot.jpg"
                  className="aspect-[4/5] w-full rounded-3xl object-cover"
                />

                <div className="pointer-events-none absolute inset-2 rounded-3xl ring-1 ring-inset ring-white/10" />
              </div>

              {/* Floating detail card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="card absolute -bottom-6 -left-4 hidden w-56 gap-3 p-4 sm:flex"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                  <Icon name="wave" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-fg">Coincidence spectroscopy</p>
                  <p className="mt-0.5 font-mono text-[11px] text-muted">HPGe + SiPM at SNOLAB</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
