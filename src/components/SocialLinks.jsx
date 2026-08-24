import Icon from './Icon'
import { siteConfig } from '../data/site'

const links = [
  { name: 'linkedin', label: 'LinkedIn', href: siteConfig.linkedin, external: true },
  { name: 'github', label: 'GitHub', href: siteConfig.github, external: true },
  { name: 'mail', label: 'Email', href: `mailto:${siteConfig.email}`, external: false },
]

function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map(({ name, label, href, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
          >
            <Icon name={name} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
