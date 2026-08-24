import { Link } from 'react-router-dom'
import Icon from './Icon'
import SocialLinks from './SocialLinks'
import { siteConfig } from '../data/site'

const sections = [
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Resume', to: '/resume' },
]

function Footer() {
  return (
    <footer className="no-print border-t border-line bg-surface2/50">
      <div className="shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient text-sm font-bold text-white">
                CS
              </span>
              <span className="text-sm font-semibold text-fg">{siteConfig.name}</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>

            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5">
              {sections.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-8">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.schoolEmail}`}
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <Icon name="graduation" className="h-4 w-4" />
                  {siteConfig.schoolEmail}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="rule mt-10" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with React, Vite, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
