import About from '../components/About'
import Contact from '../components/Contact'
import ExperienceCard from '../components/ExperienceCard'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import LabCourses from '../components/LabCourses'
import NanoBackdrop from '../components/NanoBackdrop'
import Personal from '../components/Personal'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import SkillsGrid from '../components/SkillsGrid'
import Talks from '../components/Talks'
import { experienceData, galleryData, projectsData } from '../data/content'

function Home() {
  return (
    <>
      <Hero />

      <Section id="about" tone="muted">
        <SectionHeading
          eyebrow="About"
          title="Hardware, signals, and the analysis in between"
          align="center"
        />
        <div className="mt-12">
          <About />
        </div>
        <div className="mt-8">
          <Personal />
        </div>
      </Section>

      <Section id="projects">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Detector systems, analysis frameworks, and hardware built for precision measurements. Expand any card for the full write-up and images."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          {projectsData.map((project, index) => {
            // The lead project always spans both columns so it reads as the
            // headline. The last card also spans when it would otherwise be
            // left alone in a half-width slot, so the grid never ends ragged.
            const isLead = index === 0
            const isOrphan = index === projectsData.length - 1 && projectsData.length % 2 === 0
            const wide = isLead || isOrphan

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={wide}
                className={wide ? 'lg:col-span-2' : ''}
              />
            )
          })}
        </div>
      </Section>

      {/* Toolkit sits directly after the work so the tools have context. */}
      <Section id="toolkit" tone="muted" className="relative isolate overflow-hidden">
        <NanoBackdrop variant="wafer" tone="text-accent/15" />
        <SectionHeading
          eyebrow="Toolkit"
          title="What I work with"
          description="Grouped the way I actually use them. The two highlighted areas are where I go deepest."
        />
        <div className="mt-12">
          <SkillsGrid />
        </div>
      </Section>

      <Section id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Two consecutive research terms at SNOLAB, from optical calibration and cleanliness QA on SNO+ through to commissioning the RAMPS coincidence detector."
        />
        <ol className="relative mt-12 space-y-6">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[9px] top-6 hidden w-px bg-line sm:block"
          />
          {experienceData.map((experience, index) => (
            <ExperienceCard key={experience.role} experience={experience} index={index} />
          ))}
        </ol>
      </Section>

      <Section id="labs" tone="muted">
        <SectionHeading
          eyebrow="Coursework"
          title="Laboratory experience"
          description="Every core Nanotechnology Engineering course comes with a lab. This is the hands-on track behind the fabrication and characterisation skills above."
        />
        <div className="mt-12">
          <LabCourses />
        </div>
      </Section>

      <Section id="talks">
        <SectionHeading
          eyebrow="Presentations"
          title="Talks"
          description="End-of-term seminars given at SNOLAB on the RAMPS detector and SNO+ optical calibration."
        />
        <div className="mt-12">
          <Talks />
        </div>
      </Section>

      <Section id="gallery" tone="muted">
        <SectionHeading
          eyebrow="From the lab"
          title="Gallery"
          description="Benches, racks, quantum dots, and a few shots from two kilometres underground. Click any image to enlarge."
        />
        <div className="mt-12">
          <Gallery items={galleryData} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </Section>

      <Section id="contact">
        <Contact />
      </Section>
    </>
  )
}

export default Home
