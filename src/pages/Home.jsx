import About from '../components/About'
import Contact from '../components/Contact'
import ExperienceCard from '../components/ExperienceCard'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import SkillsGrid from '../components/SkillsGrid'
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
      </Section>

      <Section id="projects">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Detector systems and analysis frameworks built for precision measurements. Expand any card for the full write-up and images."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              // The lead project spans both columns so it reads as the headline.
              featured={index === 0}
              className={index === 0 ? 'lg:col-span-2' : ''}
            />
          ))}
        </div>
      </Section>

      <Section id="gallery" tone="muted">
        <SectionHeading
          eyebrow="From the lab"
          title="Gallery"
          description="Benches, racks, spectra, and a few shots from two kilometres underground. Click any image to enlarge."
        />
        <div className="mt-12">
          <Gallery items={galleryData} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </Section>

      <Section id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Research terms"
          description="Two consecutive research placements at SNOLAB, from optical calibration for SNO+ through to commissioning a coincidence detector for RAMPS."
        />
        <ol className="relative mt-12 space-y-6">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[9px] top-6 hidden w-px bg-gradient-to-b from-accent/60 via-line to-transparent sm:block"
          />
          {experienceData.map((experience, index) => (
            <ExperienceCard key={experience.role} experience={experience} index={index} />
          ))}
        </ol>
      </Section>

      <Section id="skills" tone="muted">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills"
          description="The instruments, languages, and techniques I reach for day to day."
        />
        <div className="mt-12">
          <SkillsGrid />
        </div>
      </Section>

      <Section id="contact">
        <Contact />
      </Section>
    </>
  )
}

export default Home
