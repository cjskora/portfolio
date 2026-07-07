import { motion } from 'framer-motion'

function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
          <p className="text-primary-purple font-medium">{experience.company}</p>
        </div>
        <span className="text-gray-500 text-sm mt-1 md:mt-0">{experience.duration}</span>
      </div>
      
      <p className="text-gray-600 text-sm mb-3">{experience.location}</p>
      
      <ul className="space-y-2">
        {experience.achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start text-gray-700 text-sm">
            <span className="text-primary-purple mr-2 mt-1 flex-shrink-0">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ExperienceCard
