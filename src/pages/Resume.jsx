import { useEffect, useState } from 'react'
import ExperienceCard from '../components/ExperienceCard'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import SkillsGrid from '../components/SkillsGrid'
import { educationData, experienceData } from '../data/content'
import { siteConfig } from '../data/site'

function SectionTitle({ icon, children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/12 text-accent">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <h2 className="text-xl font-bold text-fg sm:text-2xl">{children}</h2>
      <span className="rule ml-2 hidden flex-1 sm:block" />
    </div>
  )
}

/**
 * The PDF is dropped in manually, so probe for it before rendering an <object>.
 * Without this, a missing file on GitHub Pages would render the SPA 404 page
 * inside the preview frame.
 */
function useResumeAvailable(url) {
  const [available, setAvailable] = useState(null) // null = still checking

  useEffect(() => {
    let cancelled = false

    fetch(url, { method: 'HEAD' })
      .then((response) => {
        const type = response.headers.get('content-type') || ''
        if (!cancelled) setAvailable(response.ok && !type.includes('text/html'))
      })
      .catch(() => {
        if (!cancelled) setAvailable(false)
      })

    return () => {
      cancelled = true
    }
  }, [url])

  return available
}

function Resume() {
  const pdfAvailable = useResumeAvailable(siteConfig.resumePdf)

  return (
    <div className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80">
        <div className="bg-grid mask-fade absolute inset-0 opacity-60" />
        <div className="absolute -top-24 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-accent/20 blur-[110px]" />
      </div>

      <div className="shell py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <Reveal className="text-center">
            <p className="eyebrow justify-center">
              <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
              Curriculum vitae
            </p>
            <h1 className="mt-3 text-4xl font-extrabold text-fg sm:text-5xl">Resume</h1>
            <p className="mt-3 text-base text-muted">
              {siteConfig.name} — {siteConfig.title}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                <Icon name="mail" className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                <Icon name="linkedin" className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                <Icon name="github" className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="no-print mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={siteConfig.resumePdf}
                download={siteConfig.resumeDownloadName}
                className="btn-primary"
              >
                <Icon name="download" className="h-4 w-4" />
                Download PDF
              </a>
              <a
                href={siteConfig.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Icon name="external" className="h-4 w-4" />
                Open in new tab
              </a>
            </div>
          </Reveal>

          {/* PDF preview */}
          <Reveal delay={0.05} className="no-print mt-14">
            <SectionTitle icon="download">Document preview</SectionTitle>
            <div className="card overflow-hidden p-2">
              {pdfAvailable === false ? (
                <div className="image-slot h-64 w-full rounded-2xl">
                  <Icon name="download" className="h-6 w-6" />
                  <p className="max-w-sm px-6 text-xs leading-relaxed">
                    Add <span className="font-mono text-accent">public/resume.pdf</span> to show the
                    inline preview here. The buttons above already point at that file.
                  </p>
                </div>
              ) : pdfAvailable === null ? (
                <div className="h-64 w-full animate-pulse rounded-2xl bg-surface2" />
              ) : (
                <object
                  data={siteConfig.resumePdf}
                  type="application/pdf"
                  className="h-[560px] w-full rounded-2xl bg-surface2 sm:h-[820px]"
                  aria-label="Resume PDF preview"
                >
                  <div className="image-slot h-64 w-full rounded-2xl">
                    <Icon name="download" className="h-6 w-6" />
                    <p className="max-w-sm px-6 text-xs leading-relaxed">
                      This browser can&apos;t display the PDF inline.{' '}
                      <a
                        href={siteConfig.resumePdf}
                        className="font-semibold text-accent underline"
                        download={siteConfig.resumeDownloadName}
                      >
                        Download it instead.
                      </a>
                    </p>
                  </div>
                </object>
              )}
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.05} className="mt-14">
            <SectionTitle icon="graduation">Education</SectionTitle>
            <div className="space-y-4">
              {educationData.map((entry) => (
                <div key={entry.school} className="card p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <SmartImage
                        src={entry.logo}
                        alt={`${entry.school} logo`}
                        hideWhenMissing
                        className="mt-0.5 h-10 w-10 shrink-0 rounded-xl border border-line bg-surface2 object-contain p-1"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-fg">{entry.school}</h3>
                        <p className="mt-0.5 text-sm font-semibold text-accent">{entry.program}</p>
                        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted">
                          <Icon name="mapPin" className="h-3.5 w-3.5" />
                          {entry.location}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface2 px-2.5 py-1 font-mono text-xs text-muted">
                      <Icon name="calendar" className="h-3.5 w-3.5" />
                      {entry.duration}
                    </span>
                  </div>

                  {entry.details?.length > 0 && (
                    <ul className="mt-5 space-y-2.5">
                      {entry.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Experience */}
          <div className="mt-14">
            <Reveal>
              <SectionTitle icon="chip">Research experience</SectionTitle>
            </Reveal>
            <ol className="space-y-4">
              {experienceData.map((experience, index) => (
                <ExperienceCard
                  key={experience.role}
                  experience={experience}
                  index={index}
                  timeline={false}
                />
              ))}
            </ol>
          </div>

          {/* Skills */}
          <div className="mt-14">
            <Reveal>
              <SectionTitle icon="code">Technical skills</SectionTitle>
            </Reveal>
            <SkillsGrid />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
