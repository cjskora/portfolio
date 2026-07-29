import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ExperienceCard from '../components/ExperienceCard'
import { projectsData, experienceData } from '../data/content'

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function Home() {
  return (
    <div>
      <Hero />

      <section id="projects" className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 dark:bg-ink-soft/40">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal}>
            <h2 className="mb-3 text-center text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Featured Projects
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-300">
              A collection of my research and technical projects in experimental physics and detector systems
            </p>

            <div className="mx-auto grid max-w-4xl gap-6">
              {projectsData.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal}>
            <h2 className="mb-3 text-center text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Experience
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-300">
              Research positions at SNOLAB focusing on detector systems and experimental physics
            </p>

            <div className="mx-auto grid max-w-4xl gap-6">
              {experienceData.map((experience, index) => (
                <ExperienceCard key={experience.role} experience={experience} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
