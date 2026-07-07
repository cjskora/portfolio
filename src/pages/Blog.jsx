import { motion } from 'framer-motion'

function Blog() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Blog
          </h1>
          <p className="text-gray-600 mb-12">
            Insights and writeups on experimental physics, detector systems, and data analysis
          </p>
          
          <div className="bg-pale-purple/30 border border-primary-purple rounded-lg p-8 text-center">
            <svg
              className="w-16 h-16 text-primary-purple mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Blog Posts Coming Soon
            </h2>
            <p className="text-gray-600">
              Technical writeups and insights from my research and projects will be published here
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
