# Adding your resume and images

Everything in `public/` is copied to the site root as-is, so a file saved at
`public/resume.pdf` is served from
`https://cjskora.github.io/portfolio/resume.pdf`.

Nothing breaks while a file is missing. Image slots render a dashed placeholder
labelled with the filename they expect, and the resume page swaps its PDF
preview for a short note. Add files whenever you're ready and push to `main` —
the GitHub Actions workflow rebuilds and deploys automatically.

## Resume

Save the PDF as `public/resume.pdf`. The Download button, the "Open in new tab"
link, and the inline preview all point at that one file.

The filename visitors see when downloading is set by `resumeDownloadName` in
`src/data/site.js`.

## Images

All paths below are relative to `public/`. JPG is assumed but PNG and WebP work
just as well — if you change the extension, update the matching path in
`src/data/content.js` or `src/data/site.js`.

### Identity

| File                  | Where it appears                           | Suggested size          |
| --------------------- | ------------------------------------------ | ----------------------- |
| `images/headshot.jpg` | Hero, right-hand portrait card             | 900x1125 (4:5 portrait) |
| `images/about.jpg`    | About section, lab photo                   | 1600x1200 (4:3)         |
| `images/og-image.jpg` | Link previews (Google, LinkedIn, iMessage) | 1200x630                |

### Logos

Transparent PNG or SVG works best. These are optional — the card simply omits
the logo when the file is absent.

| File                         | Where it appears                   | Suggested size |
| ---------------------------- | ---------------------------------- | -------------- |
| `images/logos/snolab.png`    | Both SNOLAB experience cards       | 128x128        |
| `images/logos/uwaterloo.png` | Education entry on the Resume page | 128x128        |

### Project covers and galleries

Covers are wide. The first project is the featured card and renders at roughly
21:9; the other two render at 16:10. Gallery tiles are cropped to 4:3.

| File                                                 | Where it appears  |
| ---------------------------------------------------- | ----------------- |
| `images/projects/coincidence-detector.jpg`           | Project 1 cover   |
| `images/projects/coincidence-detector-setup.jpg`     | Project 1 gallery |
| `images/projects/coincidence-detector-digitizer.jpg` | Project 1 gallery |
| `images/projects/coincidence-detector-shielding.jpg` | Project 1 gallery |
| `images/projects/ramps-pipeline.jpg`                 | Project 2 cover   |
| `images/projects/ramps-spectrum.jpg`                 | Project 2 gallery |
| `images/projects/ramps-waveform.jpg`                 | Project 2 gallery |
| `images/projects/ramps-calibration.jpg`              | Project 2 gallery |
| `images/projects/snoplus-optical.jpg`                | Project 3 cover   |
| `images/projects/snoplus-laserball.jpg`              | Project 3 gallery |
| `images/projects/snoplus-uvvis.jpg`                  | Project 3 gallery |
| `images/projects/snoplus-detector.jpg`               | Project 3 gallery |

Suggested size for covers: 1920x1080 or wider. Gallery images: 1200x900.

### Lab gallery strip

The "From the lab" section on the home page. Six slots by default, and the grid
reflows if you add or remove entries in `galleryData`.

| File                        |
| --------------------------- |
| `images/gallery/lab-01.jpg` |
| `images/gallery/lab-02.jpg` |
| `images/gallery/lab-03.jpg` |
| `images/gallery/lab-04.jpg` |
| `images/gallery/lab-05.jpg` |
| `images/gallery/lab-06.jpg` |

Suggested size: 1200x900. Captions live in `galleryData` in
`src/data/content.js`.

Clicking any loaded gallery or project image opens a full-screen lightbox with
arrow-key navigation. Placeholders are not clickable.

## Adding, renaming, or removing slots

Everything is data-driven, so you rarely need to touch a component:

- Project covers and galleries: `projectsData` in `src/data/content.js`
- Lab gallery: `galleryData` in `src/data/content.js`
- Headshot, about photo, resume path: `src/data/site.js`
- Experience and education logos: `experienceData` / `educationData` in
  `src/data/content.js`

Wrap every path in the `asset()` helper so it keeps working under the
`/portfolio/` sub-path on GitHub Pages.

Keep each file under roughly 500 KB so the page stays quick on mobile data.

## Already in public/

- `favicon.svg` — gradient CS monogram used as the browser tab icon
- `404.html` — GitHub Pages SPA fallback so `/portfolio/resume` works as a direct link
- `robots.txt` and `sitemap.xml` — search engine crawling hints
- `.nojekyll` — stops GitHub Pages from running Jekyll over the build output
