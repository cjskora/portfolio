import { motion } from 'framer-motion'
import ExperienceCard from '../components/ExperienceCard'
import { experienceData } from '../data/content'

function Resume() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Resume
            </h1>
            <p className="text-gray-600 mb-6">
              Christopher Skora | Nanotechnology Engineering Student
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-600">
              <a href="mailto:cjskora@gmail.com" className="hover:text-primary-purple transition-colors">
                cjskora@gmail.com
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/cjskora/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-purple transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/cjskora"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-purple transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-purple pb-2">
              Education
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">University of Waterloo</h3>
                  <p className="text-primary-purple font-medium">Nanotechnology Engineering</p>
                </div>
                <span className="text-gray-500 text-sm">Expected Graduation</span>
              </div>
              <p className="text-gray-600 text-sm">
                Waterloo, ON
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-purple pb-2">
              Research Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} />
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-purple pb-2">
              Technical Skills
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Programming & Analysis</h3>
                  <p className="text-gray-700 text-sm">Python, Jupyter, NumPy, SciPy, Matplotlib, Pandas, H5py, CERN ROOT</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Instrumentation</h3>
                  <p className="text-gray-700 text-sm">CAEN Digitizers (DT2751), WaveDump2, CoMPASS, FPGA Configuration</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Detector Systems</h3>
                  <p className="text-gray-700 text-sm">SiPM, HPGe Detectors, Coincidence Detection, Energy Calibration</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Laboratory Techniques</h3>
                  <p className="text-gray-700 text-sm">UV-Vis Spectroscopy, Waveform Analysis, Data Acquisition Systems</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-primary-purple text-white font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
