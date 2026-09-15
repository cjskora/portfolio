import { asset } from '../utils/asset'

/**
 * All copy and image paths for the site live here.
 *
 * Images resolve to files inside /public/images/. Every slot renders a labelled
 * placeholder until the file exists, so you can drop them in one at a time
 * without ever shipping a broken image. See ASSETS.md for the full list.
 */

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */
export const aboutData = {
  heading: 'Building the instruments that make rare events measurable',
  paragraphs: [
    "I'm a Nanotechnology Engineering student at the University of Waterloo, working where hardware meets data. Most of my time goes into instrumentation: getting sensors, digitizers, and trigger logic to agree with each other, then writing the analysis that turns the resulting waveforms into a number someone can trust.",
    'At SNOLAB I helped build and commission the first underground HPGe–SiPM coincidence detector for the RAMPS program, took it through its first science run, and wrote the Python pipeline that produced the calibrated spectra. The term before that I worked on optical calibration and cleanliness QA for the SNO+ neutrino experiment.',
    'Back on campus that same instinct shows up in the cleanroom, fabricating and characterising MIS devices, and in side projects like a 3D-printed triboelectric generator. I like problems where a careful measurement is the whole game: understanding a noise floor, chasing a timing offset, or proving that a peak is real.',
  ],
  image: asset('images/about.jpg'),
  imageCaption: 'Underground at SNOLAB',
  focus: [
    'Detector integration & commissioning',
    'Coincidence timing and trigger logic',
    'Cleanroom fabrication & metrology',
    'Waveform analysis pipelines',
  ],
}

/* -------------------------------------------------------------------------- */
/* Short personal excerpt                                                     */
/* -------------------------------------------------------------------------- */
export const personalData = {
  heading: 'Away from the bench',
  text: "When I'm not chasing a signal, I'm usually on a mountain. Skiing is the thing I plan my winters around, and it turns out to be good practice for research: read the terrain, commit to a line, adjust before you run out of room. I'm also the person on a team who volunteers to figure out the tooling nobody wants to touch.",
  image: asset('images/skiing.jpg'),
  imageCaption: 'Somewhere above the treeline',
}

/* -------------------------------------------------------------------------- */
/* Toolkit                                                                    */
/*                                                                            */
/* Grouped the same way as the resume so the two stay in sync. `highlight`     */
/* pulls a group into the wide feature card at the top of the section.         */
/* -------------------------------------------------------------------------- */
export const skillsData = [
  {
    heading: 'Data & Automation',
    icon: 'code',
    highlight: true,
    blurb:
      'Turning raw detector output into calibrated, publication-ready physics. This is where most of my time goes.',
    items: [
      'Python 3',
      'Jupyter',
      'NumPy',
      'SciPy',
      'Matplotlib',
      'Pandas',
      'H5py / HDF5',
      'CERN ROOT',
      'MATLAB',
      'DAQ integration',
      'Remote monitoring',
    ],
  },
  {
    heading: 'Electrical & Instrumentation',
    icon: 'chip',
    highlight: true,
    blurb:
      'Detector hardware and the measurement chain around it, from bias and triggering through to characterisation.',
    items: [
      'HPGe',
      'SiPM',
      'CAEN DT2751',
      'WaveDump2',
      'CoMPASS',
      'Coincidence logic',
      'Energy calibration',
      'C–V / I–V',
      'Four-point probe',
      'Probe station',
      'Oscilloscopes',
    ],
  },
  {
    heading: 'Fabrication Processes',
    icon: 'beaker',
    items: [
      'Photolithography',
      'PECVD',
      'RIE',
      'Al sputtering',
      'Wet etching',
      'RCA cleaning',
      'Ellipsometry',
      'DEKTAK profilometry',
    ],
  },
  {
    heading: 'CAD & Design',
    icon: 'wave',
    items: [
      'SolidWorks',
      'AutoCAD',
      'PCB layout',
      'Mechanical enclosure design',
      'FDM 3D printing',
    ],
  },
  {
    heading: 'Manufacturing & Quality',
    icon: 'check',
    items: [
      'Hands-on prototyping',
      'Cleanroom fabrication',
      'Process characterisation',
      'Defect inspection',
      'Quality assurance',
      'SPC',
      'Root-cause analysis',
    ],
  },
  {
    heading: 'Characterisation',
    icon: 'chart',
    items: [
      'UV-Vis spectroscopy',
      'FTIR',
      'Raman',
      'XRD',
      'SEM',
      'Turbidity & density analysis',
      'Particulate counting',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* Education                                                                  */
/* -------------------------------------------------------------------------- */
export const educationData = [
  {
    school: 'University of Waterloo',
    program: 'BASc, Nanotechnology Engineering (Co-op)',
    location: 'Waterloo, ON',
    duration: 'Sept. 2023 – Expected Apr. 2028',
    logo: asset('images/logos/uwaterloo.png'),
    details: [
      'Interdisciplinary program spanning nanoscale device fabrication, materials characterisation, electronics, and instrumentation, with six co-op terms.',
      'Selected coursework: Microfabrication & Thin Films, Nanoprobing & Lithography, Electronic Circuits, Structures & Properties of Nanomaterials, Quantum Mechanics, Statistical Thermodynamics.',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* Laboratory coursework                                                      */
/*                                                                            */
/* The NE program runs a hands-on lab course every term alongside the lecture  */
/* stream. Course codes and titles follow the Waterloo undergraduate calendar. */
/* -------------------------------------------------------------------------- */
export const labCoursesData = {
  intro:
    'Nanotechnology Engineering pairs almost every core course with its own laboratory. Running from second year through to the fourth-year specialisation labs, this is where most of my hands-on fabrication and characterisation experience comes from.',
  calendarUrl:
    'https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/courses?group=Nanotechnology%20Engineering%20(NE)',
  courses: [
    {
      code: 'NE 220L',
      title: 'Materials Science and Engineering Laboratory',
      year: '2A',
      summary:
        'Mechanical, thermal, electrical, and structural characterisation of metals, polymers, ceramics, and composites across length scales.',
    },
    {
      code: 'NE 226L',
      title: 'Laboratory Characterization Methods',
      year: '2B',
      summary:
        'Six core instruments end to end: FTIR, Raman, and UV-Vis spectroscopy, ellipsometry, XRD, and SEM.',
    },
    {
      code: 'NE 320L',
      title: 'Characterization of Materials Laboratory',
      year: '3A',
      summary:
        'Synthesis and characterisation of nanomaterials, including the colloidal quantum dot work in the gallery above.',
    },
    {
      code: 'NE 330L',
      title: 'Macromolecular Science Laboratory',
      year: '3B',
      summary:
        'Synthesis and characterisation of polymers, copolymers, and soft nanostructures.',
    },
    {
      code: 'NE 340L',
      title: 'Microfabrication and Thin-film Technology Laboratory',
      year: '3B',
      summary:
        'Full cleanroom process flow: PECVD and sputter deposition, photolithography, dry and wet etching, then C–V and I–V analysis of the finished MIS structures.',
    },
    {
      code: 'NE 454 / NE 455',
      title: 'Fourth-year specialisation laboratories',
      year: '4A / 4B',
      summary:
        'Two-term design-and-build sequence across nano-electronics, nano-instrumentation, nanobiosystems, and nanostructured materials, taking a device from simulation and mask layout through fabrication and testing.',
    },
  ],
}

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */
export const projectsData = [
  {
    id: 'ramps-coincidence-detector',
    title: 'HPGe–SiPM Coincidence Detector for RAMPS',
    year: '2026',
    shortDescription:
      "SNOLAB's first underground HPGe–SiPM coincidence detector, built and commissioned through its first science run.",
    fullDescription:
      'RAMPS (RadioActive isotope Measurement Program at SNOLAB) searches for the fifth-forbidden electron-capture decay of Lu-176, a transition that has never been measured. The detector pairs a CTBT high-purity germanium detector from Health Canada with a silicon photomultiplier from Canadian Nuclear Laboratories, reading a LuAG crystal source inside ultra-low-background shielding. The SiPM sees the atomic de-excitation as scintillation light while the HPGe resolves the nuclear de-excitation gammas, and a timing coincidence window between them suppresses the overwhelming beta background. I handled detector integration, characterisation, and calibration, and designed the SiPM mounting fixture used for the next run.',
    status: 'Completed',
    techStack: [
      'HPGe',
      'SiPM',
      'CAEN DT2751',
      'WaveDump2',
      'CoMPASS',
      'Coincidence logic',
      'SolidWorks',
    ],
    achievements: [
      'Built and commissioned the detector through hands-on assembly and integration of a dual-coldhead HPGe, a custom SiPM mounting fixture, and the DAQ system',
      'Configured a pre-release CAEN DT2751 FPGA digitizer, tuning triggering, coincidence windows, and region-of-interest parameters for coincidence spectroscopy',
      'Isolated the EC* signature using the 27 keV cut: with Q_EC* = 109 keV and an 82.13 keV gamma, the remaining 26.87 keV appears as scintillation light in the crystal',
      'Debugged hardware–firmware integration faults on the pre-release digitizer in collaboration with CAEN engineering',
      'Designed and deployed a VNC-based remote DAQ and monitoring system, enabling 30+ hours of unattended operation',
      'Designed the SiPM holder in CAD for machining ahead of the second science run',
    ],
    links: [
      {
        label: 'SiPM holder drawing (PDF)',
        href: asset('documents/sipm-holder-ctbt.pdf'),
        icon: 'external',
      },
    ],
    cover: asset('images/projects/ramps-detector-cover.jpg'),
    gallery: [
      {
        src: asset('images/projects/ramps-experiment-layout.jpg'),
        caption:
          'Dual coincidence layout: two HPGe channels and four SiPM channels into the digitizer',
      },
      {
        src: asset('images/projects/ramps-sipm-hpge-mounted.jpg'),
        caption: 'SiPM board mounted to the HPGe endcap inside the copper shielding',
      },
      {
        src: asset('images/projects/ramps-shielding-cavity.jpg'),
        caption: 'Detector and source inside the ultra-low-background shielding',
      },
      {
        src: asset('images/projects/ramps-sipm-holder-cad.jpg'),
        caption: 'CAD model of the SiPM holder designed for the next science run',
      },
      {
        src: asset('images/projects/ramps-cad-drawing.jpg'),
        caption: 'Machining drawing for the SiPM holder',
      },
      {
        src: asset('images/projects/ramps-decay-scheme.jpg'),
        caption: 'Lu-176 decay scheme: the EC* branch to Yb-176 against the dominant β− cascade',
      },
      {
        src: asset('images/projects/ramps-27kev-cut.jpg'),
        caption: 'The 27 keV cut: 109 keV EC Q-value minus the 82.13 keV gamma',
      },
      {
        src: asset('images/projects/ramps-bench-digitizer.jpg'),
        caption: 'Bench testing SiPM response through the digitizer',
      },
      {
        src: asset('images/projects/ramps-oscilloscope.jpg'),
        caption: 'HPGe pulse checks on the oscilloscope',
      },
      {
        src: asset('images/projects/ramps-wavedump-pulses.jpg'),
        caption: 'Full pulses captured in WaveDump2 during commissioning',
      },
      {
        src: asset('images/projects/ramps-rise-time.jpg'),
        caption: 'Pulse rise time measurement used to set the trigger',
      },
      {
        src: asset('images/projects/ramps-pulse-decay.jpg'),
        caption: 'Pulse decay characterisation',
      },
      {
        src: asset('images/projects/ramps-first-pulses.jpg'),
        caption: 'Finding the first coincidence waveforms underground',
      },
    ],
  },
  {
    id: 'ramps-pipeline',
    title: 'RAMPS Coincidence Analysis Pipeline',
    year: '2026',
    shortDescription:
      'Python pipeline that reads millions of SiPM and HPGe wave events, calibrates both channels, and applies the physics cut.',
    fullDescription:
      'Science Run 1 produced more than 20 TB of waveform data over four days, including calibration runs with Eu-152, Fe-55, and Ba-133 and 30+ hours of science data with no dead time. This pipeline processes that raw binary DAQ output: baseline correction, pulse integration and peak extraction, independent energy calibration of the HPGe and summed SiPM channels against known gamma lines, then coincidence selection and the 3–27 keV SiPM cut that isolates the electron-capture signature. It produces the calibrated spectra, 2D coincidence maps, and calibration summaries used in the collaboration reports.',
    status: 'Completed',
    note: 'First paper is on the way.',
    techStack: ['Python 3', 'Jupyter', 'NumPy', 'SciPy', 'Matplotlib', 'H5py', 'HDF5'],
    achievements: [
      'Processed 20+ TB of raw binary DAQ output into calibrated, analysis-ready HDF5 datasets',
      'Reduced β− background by roughly 99% through coincidence selection and the SiPM region-of-interest cut',
      'Calibrated the HPGe channel to about 3% resolution with sub-keV fit residuals across the 54, 88, 202, and 307 keV lines',
      'Produced the calibrated spectra, 2D HPGe-versus-SiPM coincidence maps, and calibration summaries used for the preliminary results',
      'Resolved the 88.35 keV Hf-176 peak surviving the 3–27 keV SiPM cut, the signature the measurement depends on',
    ],
    links: [
      {
        label: 'RAMPS_Analysis_Script on GitHub',
        href: 'https://github.com/cjskora/RAMPS_Analysis_Script',
        icon: 'github',
        external: true,
      },
    ],
    linkNote:
      'The public repository was written in the final stretch of my term and later finalised by the students who picked the analysis up after me.',
    cover: asset('images/projects/ramps-pipeline-cover.jpg'),
    gallery: [
      {
        src: asset('images/projects/ramps-waveforms.jpg'),
        caption: 'Coincident SiPM and HPGe waveforms from a single event',
      },
      {
        src: asset('images/projects/ramps-integration-window.jpg'),
        caption: 'SiPM integration window: 50 samples pre-peak, 350 post-peak',
      },
      {
        src: asset('images/projects/ramps-sipm-calibration.jpg'),
        caption: 'SiPM charge histogram, derivative peak finding, and the resulting calibration',
      },
      {
        src: asset('images/projects/ramps-sipm-spectrum.jpg'),
        caption: 'Calibrated SiPM energy spectrum',
      },
      {
        src: asset('images/projects/ramps-charge-amplitude.jpg'),
        caption: 'SiPM charge versus peak amplitude, confirming a linear response',
      },
      {
        src: asset('images/projects/ramps-calibration-fit.jpg'),
        caption: 'HPGe calibration fit with sub-keV residuals and the calibrated spectrum',
      },
      {
        src: asset('images/projects/ramps-coincidence-2d.jpg'),
        caption: 'HPGe versus combined SiPM energy, 2D coincidence map',
      },
      {
        src: asset('images/projects/ramps-annotated-2d.jpg'),
        caption: 'Working notes on the 2D histogram, identifying each line by hand',
      },
      {
        src: asset('images/projects/ramps-roi-zoom.jpg'),
        caption: '50–110 keV zoom: the 88.35 keV peak surviving the 3–27 keV SiPM cut',
      },
      {
        src: asset('images/projects/ramps-cut-comparison.jpg'),
        caption: 'No cut against coincidence against SiPM ROI, log and linear',
      },
      {
        src: asset('images/projects/ramps-early-spectrum.jpg'),
        caption: 'An early pulse-height spectrum from the first commissioning runs',
      },
    ],
  },
  {
    id: 'snoplus-optical',
    title: 'SNO+ Optical Calibration & Scintillator QA',
    year: '2025',
    shortDescription:
      'Laserball calibration analysis and cleanliness QA for a kilotonne-scale neutrino detector.',
    fullDescription:
      'SNO+ is a 780 tonne liquid scintillator neutrino experiment reading out through roughly 9,600 photomultiplier tubes inside a 12 m acrylic vessel, two kilometres underground. I worked on the optical calibration of its scintillator phase using the Laserball, an isotropic multi-wavelength source driven by a nitrogen-pumped dye laser. Analysing its data in ROOT and Python showed a clear wavelength-dependent bias in reconstructed source position, which traces back to how absorption and re-emission in the scintillator vary between 405 nm and 500 nm. Alongside the optics work I ran process QA on the scintillator itself and monthly cleanliness inspections of the underground lab.',
    status: 'Completed',
    techStack: [
      'CERN ROOT',
      'Python',
      'Laserball calibration',
      'UV-Vis spectrophotometry',
      'Turbidity & density analysis',
    ],
    achievements: [
      'Measured wavelength-shifter emission spectra and PMT timing across six laser excitation wavelengths, combining ROOT and Python for the analysis',
      'Characterised a wavelength-dependent position reconstruction bias and tied it to scintillator absorption and re-emission behaviour',
      'Ran process quality assurance on LAB/PPO/Bis-MSB samples using UV-Vis spectrophotometry, turbidity, and density analysis across plant sampling ports',
      'Executed monthly quality-control inspections across a 5,000 m² Class 100 underground laboratory using particulate counting and swipe testing',
    ],
    cover: asset('images/projects/snoplus-cover.jpg'),
    gallery: [
      {
        src: asset('images/projects/snoplus-vessel.jpg'),
        caption: 'Inside the acrylic vessel during the scintillator phase',
      },
      {
        src: asset('images/projects/snoplus-calibration-setup.jpg'),
        caption: 'Laserball deployment geometry, from the clean room deck into the vessel',
      },
      {
        src: asset('images/projects/snoplus-laserball.jpg'),
        caption:
          'Laserball source assembly (Fig. 2.8, Valder et al. 2023, arXiv:2310.12745)',
      },
      {
        src: asset('images/projects/snoplus-dye-laser.jpg'),
        caption: 'Dye laser cells generating the calibration wavelengths',
      },
      {
        src: asset('images/projects/snoplus-laser-spectra.jpg'),
        caption: 'Measured emission spectra for each dye against the N2 laser line',
      },
      {
        src: asset('images/projects/snoplus-position-residuals.jpg'),
        caption: 'Position reconstruction residuals across all six wavelengths',
      },
      {
        src: asset('images/projects/snoplus-residual-405.jpg'),
        caption: 'Y residual at 405 nm, rising steadily with true position',
      },
      {
        src: asset('images/projects/snoplus-residual-500.jpg'),
        caption: 'Y residual at 500 nm, where the trend inverts',
      },
      {
        src: asset('images/projects/snoplus-timing-405.jpg'),
        caption: 'PMT hit-time residuals at 405 nm, showing pre-fire and re-emission',
      },
      {
        src: asset('images/projects/snoplus-timing-500.jpg'),
        caption: 'PMT hit-time residuals at 500 nm, with no re-emission shoulder',
      },
      {
        src: asset('images/projects/snoplus-control-room.jpg'),
        caption: 'Control room during a Laserball deployment',
      },
      {
        src: asset('images/projects/snoplus-uvvis.jpg'),
        caption: 'UV-Vis spectrophotometer used for scintillator optical QA',
      },
    ],
  },
  {
    id: 'mis-device-fabrication',
    title: 'MIS Capacitor Fabrication & Characterisation',
    year: '2026',
    shortDescription:
      'End-to-end cleanroom process flow for metal–insulator–semiconductor capacitors on p-type silicon.',
    fullDescription:
      'A full fabrication run for MIS capacitors carried out in the Nanotechnology Engineering cleanroom and metrology suite: RCA cleaning, PECVD silicon nitride deposition, photolithography, reactive ion etching, aluminium sputtering, and PAN wet etching, followed by optical defect inspection and electrical test. The interesting part was closing the loop between process and measurement, using metrology to explain what the C–V and I–V curves were telling us about film quality and contact integrity.',
    status: 'Completed',
    techStack: [
      'RCA cleaning',
      'PECVD SiNx',
      'Photolithography',
      'RIE',
      'Al sputtering',
      'Ellipsometry',
      'DEKTAK',
      'C–V / I–V',
    ],
    achievements: [
      'Executed the complete fabrication process for MIS capacitors on p-type Si',
      'Performed optical defect inspection of the SiNx dielectric and Al contact structures to identify patterning and contact imperfections after selective etching',
      'Quantified film thickness, uniformity, resistivity, and device performance using ellipsometry, DEKTAK profilometry, four-point probe, and C–V/I–V sweeps',
    ],
    cover: asset('images/projects/mis-cover.jpg'),
    gallery: [
      {
        src: asset('images/projects/mis-wafer.jpg'),
        caption: 'Patterned wafer after selective etching',
      },
      {
        src: asset('images/projects/mis-inspection.jpg'),
        caption: 'Optical defect inspection of the dielectric and contacts',
      },
      {
        src: asset('images/projects/mis-cv-iv.jpg'),
        caption: 'C–V and I–V characterisation of the finished capacitors',
      },
    ],
  },
  {
    id: 'triboelectric-nanogenerator',
    title: 'Triboelectric Nanogenerator for Wind Energy Capture',
    shortDescription:
      'A 3D-printed rotating triboelectric generator designed to harvest energy from low-speed wind.',
    fullDescription:
      'Designed and built a triboelectric nanogenerator that converts wind-driven motion into usable charge. The work ran end to end: developing a design blueprint for the generator, translating it into a printable CAD assembly, then iterating through a prototyping phase on the rotor, housing, and contact surfaces. Later revisions focused on optimizing the geometry for efficient wind energy capture, and bench experiments characterized the electrical output of the assembled device.',
    status: 'Prototype',
    techStack: [
      'SolidWorks',
      'FDM 3D Printing',
      'Triboelectric Effect',
      'Prototyping',
      'Voltage Characterization',
    ],
    achievements: [
      'Developed a full design blueprint for the generator and translated it into a printable CAD assembly',
      'Worked through a prototyping phase on the 3D-printed rotor, housing, and triboelectric contact surfaces',
      'Optimized the design for efficient wind energy capture across the operating range',
      'Measured a notable 5.3 V potential difference at half capacity during bench experiments',
    ],
    cover: asset('images/projects/teng-cover.jpg'),
    gallery: [
      {
        src: asset('images/projects/teng-prototype-top.jpg'),
        caption: 'Printed rotor housing with triboelectric strip and probe lead',
      },
      {
        src: asset('images/projects/teng-prototype-angled.jpg'),
        caption: 'Assembled prototype on its test stand, shaft and output wiring',
      },
      {
        src: asset('images/projects/teng-cad-blueprint.jpg'),
        caption: 'CAD blueprint of the generator assembly',
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* Experience                                                                 */
/* -------------------------------------------------------------------------- */
export const experienceData = [
  {
    role: 'RAMPS Detector & DAQ Researcher',
    company: 'SNOLAB',
    location: 'Lively, ON',
    duration: 'Jan. 2026 – Apr. 2026',
    logo: asset('images/logos/snolab.png'),
    tags: ['Detector commissioning', 'FPGA digitizers', 'Python analysis'],
    achievements: [
      "Built and commissioned SNOLAB's first underground HPGe–SiPM coincidence detector through hands-on assembly and integration of a dual-coldhead HPGe, a custom SiPM mounting fixture, and the DAQ system",
      'Reduced β− background by roughly 99% by developing a Python pipeline to process raw binary DAQ output and isolate detector waveforms, enabling HPGe energy calibration to about 3% resolution',
      'Debugged hardware–firmware integration issues on a pre-release CAEN DT2751 digitizer, resolving acquisition faults in collaboration with CAEN engineering',
      'Designed and deployed a VNC-based remote DAQ and monitoring system, enabling 30+ hours of unattended operation and collection of 20+ TB of waveform data during the first science run',
    ],
  },
  {
    role: 'SNO+ QA & Cleanliness Assistant',
    company: 'SNOLAB',
    location: 'Lively, ON',
    duration: 'Sept. 2025 – Dec. 2025',
    logo: asset('images/logos/snolab.png'),
    tags: ['CERN ROOT', 'Optical calibration', 'UV-Vis spectrophotometry'],
    achievements: [
      'Measured wavelength-shifter emission spectra and timing across multiple laser excitation wavelengths using the SNO+ Laserball calibration system, combining ROOT and Python for test-data analysis',
      'Performed process quality assurance on LAB/PPO/Bis-MSB scintillator samples using UV-Vis spectrophotometry, turbidity, and density analysis across sampling ports throughout the SNO+ plant',
      'Executed monthly quality-control inspections across a 5,000 m² Class 100 underground laboratory using particulate counting and swipe testing, documenting and reporting contamination status to collaborating groups',
    ],
  },
  {
    role: 'EV Diagnostics & Systems Design',
    company: 'UWAFT Electric Car Design Team',
    location: 'Waterloo, ON',
    duration: 'Oct. 2023 – Apr. 2024',
    tags: ['AutoCAD', 'SolidWorks', 'PCB layout'],
    achievements: [
      'Converted EV electrical schematics into PCB layouts and designed mechanical enclosures using AutoCAD and SolidWorks, supporting electrical and mechanical system integration',
      'Applied statistical process control and structured root-cause analysis to diagnose Cadillac Lyriq electrical faults and improve system performance',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* Talks                                                                      */
/* -------------------------------------------------------------------------- */
export const talksData = [
  {
    title: 'RAMPS: Commissioning & Science Run 1',
    venue: 'SNOLAB end-of-term seminar',
    date: 'April 2026',
    summary:
      'Detector design, the 27 keV coincidence cut, and preliminary results from the first science run.',
    file: asset('documents/ramps-science-run-1.pdf'),
  },
  {
    title: 'Introduction to the RAMPS Project',
    venue: 'SNOLAB start-of-term seminar',
    date: 'January 2026',
    summary:
      'The Lu-176 electron-capture measurement, why it matters for electroweak coupling, and the triple coincidence technique.',
    file: asset('documents/ramps-introduction.pdf'),
  },
  {
    title: 'Calibration of SNO+ using the LaserBall',
    venue: 'SNOLAB end-of-term seminar',
    date: 'December 2025',
    summary:
      'Laserball deployment, PMT timing, and the wavelength-dependent position reconstruction bias.',
    file: asset('documents/snoplus-laserball-calibration.pdf'),
  },
]

/* -------------------------------------------------------------------------- */
/* Lab gallery strip                                                          */
/*                                                                            */
/* A free-form set of photos. Add or remove entries freely - the grid reflows  */
/* and any missing file shows a placeholder tile.                             */
/* -------------------------------------------------------------------------- */
export const galleryData = [
  {
    src: asset('images/gallery/ramps-group.jpg'),
    caption: 'The RAMPS team during Science Run 1',
  },
  {
    src: asset('images/gallery/ramps-team-selfie.jpg'),
    caption: 'Late night in the counting room',
  },
  {
    src: asset('images/gallery/detector-bench.jpg'),
    caption: 'Detector and cabling inside the open shielding',
  },
  {
    src: asset('images/gallery/snolab-deck.jpg'),
    caption: 'Scaffolding around the detector deck, two kilometres underground',
  },
  {
    src: asset('images/gallery/snolab-overview.jpg'),
    caption: 'Looking down over the SNOLAB underground lab floor',
  },
  {
    src: asset('images/gallery/quantum-dots.jpg'),
    caption: 'Colloidal quantum dots under UV excitation, NE 320L',
  },
]
