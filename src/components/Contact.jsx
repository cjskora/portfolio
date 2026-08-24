import { Link } from 'react-router-dom'
import Icon from './Icon'
import Reveal from './Reveal'
import SocialLinks from './SocialLinks'
import { siteConfig } from '../data/site'

function Contact() {
  return (
    <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 text-center shadow-soft sm:p-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
      </div>

      <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent-gradient text-white shadow-soft">
        <Icon name="mail" />
      </span>

      <h2 className="mt-5 text-2xl font-bold text-fg sm:text-3xl">Let&apos;s talk instrumentation</h2>
      <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted">
        I&apos;m looking for co-op and research work in detector systems, experimental physics, and
        scientific data analysis. The fastest way to reach me is email.
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <a href={`mailto:${siteConfig.email}`} className="btn-primary">
          <Icon name="mail" className="h-4 w-4" />
          {siteConfig.email}
        </a>
        <Link to="/resume" className="btn-outline">
          View resume
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>

      <SocialLinks className="mt-8 justify-center" />
    </Reveal>
  )
}

export default Contact
