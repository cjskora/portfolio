/**
 * Builds a URL for a file living in the /public folder so it keeps working
 * under the GitHub Pages sub-path (e.g. /portfolio/).
 *
 * asset('resume.pdf')            -> /portfolio/resume.pdf
 * asset('images/headshot.jpg')   -> /portfolio/images/headshot.jpg
 */
export function asset(path) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base.replace(/\/$/, '')}/${String(path).replace(/^\//, '')}`
}

export default asset
