import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ExperienceCard from '../components/ExperienceCard'
import { projectsData, experienceData } from '../data/content'

function Home() {
  return (
    <div>
      <Hero />
      
      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              A collection of my research and technical projects in experimental physics and detector systems
            </p>
            
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
              Experience
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Research positions at SNOLAB focusing on detector systems and experimental physics
            </p>
            
            <div className="grid gap-6 md:grid-cols-1 max-w-4xl mx-auto">
              {experienceData.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
