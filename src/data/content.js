export const projectsData = [
  {
    title: "Dual Coincidence Radioactive Isotope Detector",
    shortDescription: "Next-generation coincidence detector using SiPM and HPGe for precision nuclear measurements",
    fullDescription: "Developed a dual-detector coincidence system combining a Silicon photomultiplier (SiPM) with a High-purity germanium (HPGe) detector for advanced radioisotope detection. The system utilizes state-of-the-art waveform digitization software and FPGA-based signal processing for precise coincidence timing and event correlation.",
    status: "Completed",
    techStack: ["SiPM", "HPGe Detector", "CAEN DT2751", "WaveDump2", "FPGA", "Coincidence Logic"],
    achievements: [
      "Achieved operational readiness for first science run at SNOLAB",
      "Optimized coincidence timing windows for sub-microsecond precision",
      "Validated system performance through Lu-176 decay measurements"
    ],
    image: null
  },
  {
    title: "RAMPS Coincidence Analysis Pipeline",
    shortDescription: "Python analysis framework for dual-detector beta-gamma coincidence measurements",
    fullDescription: "Built a comprehensive Python/Jupyter offline analysis pipeline for the RAMPS pilot experiment at SNOLAB. The framework processes multi-channel digitizer waveforms, performs baseline correction and peak extraction, executes independent energy calibration on both detector channels using known gamma lines, and applies coincidence cuts to isolate correlated decay signatures from background noise.",
    status: "Completed",
    techStack: ["Python 3", "Jupyter", "NumPy", "SciPy", "Matplotlib", "H5py", "CAEN Digitizers"],
    achievements: [
      "Automated full waveform processing pipeline for multi-channel data",
      "Implemented dual-channel energy calibration against reference gamma sources",
      "Generated publication-quality calibrated energy spectra and visualizations",
      "Optimized HDF5 dataset management for efficient large-scale data handling"
    ],
    image: null
  },
  {
    title: "SNO+ Optical Calibration & Analysis",
    shortDescription: "Detector validation and optical characterization for neutrino physics experiment",
    fullDescription: "Validated the optical performance of the SNO+ neutrino detector through systematic calibration data analysis using CERN ROOT. Deployed and operated the Laserball calibration source to characterize detector response, and conducted UV-Vis spectroscopy measurements to quantify liquid scintillator optical properties and contamination levels.",
    status: "Completed",
    techStack: ["CERN ROOT", "UV-Vis Spectroscopy", "Laserball Calibration", "Data Analysis"],
    achievements: [
      "Validated optical calibration system readiness for physics operations",
      "Quantified scintillator transparency and contamination levels",
      "Supported detector commissioning and performance optimization"
    ],
    image: null
  }
]

export const experienceData = [
  {
    role: "RAMPS Student Research Assistant",
    company: "SNOLAB",
    location: "Lively, ON",
    duration: "January 2026 – April 2026",
    achievements: [
      "Commissioned a custom SiPM/HPGe coincidence detector system by leading detector integration, characterization, and calibration, delivering full operational readiness validated through the experiment's first science run in support of a search for the fifth-forbidden electron-capture decay of Lu-176",
      "Configured and optimized a CAEN DT2751 FPGA waveform digitizer by tuning detector triggering, coincidence timing windows, and region-of-interest parameters, enabling precise coincidence spectroscopy",
      "Built a Python-based analysis pipeline that produced calibrated energy spectra and publication-quality visualizations by implementing waveform baseline correction, signal extraction, coincidence event selection, and HDF5-based dataset management in Jupyter Notebook",
      "Improved pre-release DAQ software reliability for WaveDump2 and CoMPASS by identifying waveform acquisition and analysis bugs during early deployment, delivering feedback that shaped the integration workflow for the next-generation digitizer",
      "Achieved calibrated detector response across multiple gamma-ray energy lines by performing systematic energy calibration and characterization, optimizing measurement sensitivity for precision radioisotope studies"
    ]
  },
  {
    role: "SNO+ Research Assistant",
    company: "SNOLAB",
    location: "Lively, ON",
    duration: "September 2025 – December 2025",
    achievements: [
      "Validated optical performance of the SNO+ detector by analyzing calibration and response data in CERN ROOT, supporting detector validation ahead of physics operations",
      "Verified optical calibration system readiness by deploying and operating the Laserball calibration source, directly contributing to detector performance characterization",
      "Quantified liquid scintillator optical transparency and contamination levels by conducting UV-Vis spectroscopy, providing analytical data that informed purification process decisions before detector refill"
    ]
  }
]
