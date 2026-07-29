# Adding your resume and images

Everything in the `public/` folder is copied to the site root as-is, so a file
named `resume.pdf` there is served at
`https://cjskora.github.io/portfolio/resume.pdf`.

Nothing breaks while a file is missing: images hide themselves and the PDF
preview shows a download link instead. Add them whenever you're ready, then run
`npm run deploy`.

## Resume

Export your LaTeX source (`pdflatex resume.tex`) and save the result as
`public/resume.pdf`. The Resume page's Download button, the "Open in new tab"
link, and the inline preview all point at that one file.

To change the filename users see when they download it, edit the `download`
attribute in `src/pages/Resume.jsx`.

## Images

Drop files in `public/images/` using these names:

| File                                          | Where it shows up                                             | Suggested size        |
| --------------------------------------------- | ------------------------------------------------------------- | --------------------- |
| `headshot.jpg`                                | Hero section on the home page. Falls back to a "CS" monogram. | ~600x600, square crop |
| `og-image.jpg`                                | Link preview card for Google, LinkedIn, iMessage              | 1200x630              |
| `projects/coincidence-detector.jpg`           | Cover image, project 1                                        | ~1600x900             |
| `projects/coincidence-detector-setup.jpg`     | Gallery, project 1                                            | ~1600x900             |
| `projects/coincidence-detector-digitizer.jpg` | Gallery, project 1                                            | ~1600x900             |
| `projects/ramps-pipeline.jpg`                 | Cover image, project 2                                        | ~1600x900             |
| `projects/ramps-spectrum.jpg`                 | Gallery, project 2                                            | ~1600x900             |
| `projects/ramps-waveform.jpg`                 | Gallery, project 2                                            | ~1600x900             |
| `projects/snoplus-optical.jpg`                | Cover image, project 3                                        | ~1600x900             |
| `projects/snoplus-laserball.jpg`              | Gallery, project 3                                            | ~1600x900             |
| `projects/snoplus-uvvis.jpg`                  | Gallery, project 3                                            | ~1600x900             |

Keep each file under roughly 500 KB so pages stay fast on mobile data.

To rename, add, or remove images, edit `cover` and `gallery` in
`src/data/content.js`. The headshot path lives in `src/data/site.js`.

## Already in public/

- `favicon.svg` - purple CS monogram used as the browser tab icon
- `404.html` - GitHub Pages SPA fallback so `/portfolio/resume` works as a direct link
- `robots.txt` and `sitemap.xml` - search engine crawling hints
- `.nojekyll` - stops GitHub Pages from running Jekyll over the build output
