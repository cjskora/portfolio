import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pale-purple rounded-full filter blur-3xl opacity-30 -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Christopher Skora
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-purple font-medium mb-6"
          >
            Nanotechnology Engineering Student
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed"
          >
            <p>
              University of Waterloo student passionate about experimental physics, detector systems, 
              and data analysis. Experienced in nuclear instrumentation, waveform digitization, 
              and building analysis pipelines for precision radioisotope studies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary-purple text-white font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#experience"
              className="px-6 py-3 bg-white text-primary-purple font-medium rounded-lg border-2 border-primary-purple hover:bg-pale-purple transition-colors"
            >
              Experience
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
