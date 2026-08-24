import { asset } from '../utils/asset'

export const siteConfig = {
  name: 'Christopher Skora',
  title: 'Nanotechnology Engineering Student',
  tagline: 'Radiation detectors, coincidence spectroscopy, and the analysis pipelines behind them.',
  location: 'Waterloo, ON / Lively, ON',
  url: 'https://cjskora.github.io/portfolio/',
  email: 'cjskora@gmail.com',
  schoolEmail: 'cjskora@uwaterloo.ca',
  linkedin: 'https://www.linkedin.com/in/cjskora/',
  github: 'https://github.com/cjskora',

  // Drop these files into /public (or /public/images) with these exact names.
  // Anything still missing renders a labelled placeholder instead of breaking.
  headshot: asset('images/headshot.jpg'),
  aboutImage: asset('images/about.jpg'),
  resumePdf: asset('resume.pdf'),
  resumeDownloadName: 'Christopher-Skora-Resume.pdf',
}

export default siteConfig
