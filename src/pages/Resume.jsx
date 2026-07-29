import { motion } from 'framer-motion'
import ExperienceCard from '../components/ExperienceCard'
import { experienceData } from '../data/content'
import { siteConfig } from '../data/site'

const skills = [
  {
    heading: 'Programming & Analysis',
    body: 'Python, Jupyter, NumPy, SciPy, Matplotlib, Pandas, H5py, CERN ROOT',
  },
  {
    heading: 'Instrumentation',
    body: 'CAEN Digitizers (DT2751), WaveDump2, CoMPASS, FPGA Configuration',
  },
  {
    heading: 'Detector Systems',
    body: 'SiPM, HPGe Detectors, Coincidence Detection, Energy Calibration',
  },
  {
    heading: 'Laboratory Techniques',
    body: 'UV-Vis Spectroscopy, Waveform Analysis, Data Acquisition Systems',
  },
]

const sectionHeading =
  'mb-6 border-b-2 border-primary-purple pb-2 text-2xl font-bold text-gray-900 dark:border-light-purple dark:text-white'

function Resume() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">Resume</h1>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {siteConfig.name} | {siteConfig.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-purple dark:hover:text-light-purple">
                {siteConfig.email}
              </a>
              <span aria-hidden="true">•</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-purple dark:hover:text-light-purple"
              >
                LinkedIn
              </a>
              <span aria-hidden="true">•</span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-purple dark:hover:text-light-purple"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="no-print mb-12 flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.resumePdf}
              download="Christopher-Skora-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-purple px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-purple-700 hover:shadow-lg"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download PDF
            </a>
            <a
              href={siteConfig.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-purple px-6 py-3 font-medium text-primary-purple transition-colors hover:bg-pale-purple dark:border-light-purple dark:text-light-purple dark:hover:bg-primary-purple/10"
            >
              Open in new tab
            </a>
          </div>

          <div className="no-print mb-12">
            <h2 className={sectionHeading}>Resume Preview</h2>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100 dark:border-ink-line dark:bg-ink-soft">
              <object
                data={siteConfig.resumePdf}
                type="application/pdf"
                className="h-[600px] w-full sm:h-[840px]"
                aria-label="Resume PDF preview"
              >
                <div className="p-8 text-center text-sm text-gray-600 dark:text-gray-300">
                  Your browser can&apos;t display the PDF inline.{' '}
                  <a
                    href={siteConfig.resumePdf}
                    className="font-medium text-primary-purple underline dark:text-light-purple"
                  >
                    Download the resume instead.
                  </a>
                </div>
              </object>
            </div>
          </div>

          <div className="mb-12">
            <h2 className={sectionHeading}>Education</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-ink-line dark:bg-ink-soft">
              <div className="mb-2 flex flex-col justify-between sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">University of Waterloo</h3>
                  <p className="font-medium text-primary-purple dark:text-light-purple">
                    Nanotechnology Engineering
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Expected Graduation</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Waterloo, ON</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className={sectionHeading}>Research Experience</h2>
            <div className="space-y-6">
              {experienceData.map((experience, index) => (
                <ExperienceCard key={experience.role} experience={experience} index={index} />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h2 className={sectionHeading}>Technical Skills</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-ink-line dark:bg-ink-soft">
              <div className="grid gap-4 md:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill.heading}>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{skill.heading}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{skill.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
