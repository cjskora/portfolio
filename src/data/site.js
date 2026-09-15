import { asset } from '../utils/asset'

export const siteConfig = {
  name: 'Christopher Skora',
  title: 'Nanotechnology Engineering Student',
  tagline:
    'Detector systems, nanofabrication, and the analysis pipelines that turn raw signals into results.',
  location: 'Waterloo, ON',
  url: 'https://cjskora.github.io/portfolio/',
  email: 'cjskora@uwaterloo.ca',
  altEmail: 'cjskora@gmail.com',
  phone: '289-707-5581',
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
