import { motion } from 'framer-motion'

function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-ink-line dark:bg-ink-soft"
    >
      <div className="mb-3 flex flex-col md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.role}</h3>
          <p className="font-medium text-primary-purple dark:text-light-purple">{experience.company}</p>
        </div>
        <span className="mt-1 text-sm text-gray-500 md:mt-0 dark:text-gray-400">{experience.duration}</span>
      </div>

      <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">{experience.location}</p>

      <ul className="space-y-2">
        {experience.achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
            <span className="mr-2 mt-1 flex-shrink-0 text-primary-purple dark:text-light-purple">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ExperienceCard
