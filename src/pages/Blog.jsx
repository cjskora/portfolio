import { motion } from 'framer-motion'

function Blog() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Technical Blog
          </h1>
          <p className="mb-12 text-gray-600 dark:text-gray-300">
            Insights and writeups on experimental physics, detector systems, and data analysis
          </p>

          <div className="rounded-lg border border-primary-purple bg-pale-purple/30 p-8 text-center dark:border-light-purple/40 dark:bg-ink-soft">
            <svg
              className="mx-auto mb-4 h-16 w-16 text-primary-purple dark:text-light-purple"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              Blog Posts Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Technical writeups and insights from my research and projects will be published here
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
