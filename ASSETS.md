# Adding your resume, images, and slide decks

Everything in `public/` is copied to the site root as-is, so a file saved at
`public/resume.pdf` is served from
`https://cjskora.github.io/portfolio/resume.pdf`.

Nothing breaks while a file is missing. Image slots render a dashed placeholder
labelled with the filename they expect, the resume page swaps its PDF preview
for a short note, and each talk shows "Slides to be added" instead of linking to
a 404. Add files whenever you're ready and push to `main` — the GitHub Actions
workflow rebuilds and deploys automatically.

## Resume

Save the PDF as `public/resume.pdf`. The Download button, the "Open in new tab"
link, and the inline preview all point at that one file.

The filename visitors see when downloading is set by `resumeDownloadName` in
`src/data/site.js`.

## Slide decks

The Talks section links these. Already in place:

| File                             | Talk                                        |
| -------------------------------- | ------------------------------------------- |
| `documents/sipm-holder-ctbt.pdf` | SiPM holder drawing (linked from Project 1) |

Still to add:

| File                                          | Talk                                    |
| --------------------------------------------- | --------------------------------------- |
| `documents/ramps-science-run-1.pdf`           | RAMPS: Commissioning & Science Run 1    |
| `documents/ramps-introduction.pdf`            | Introduction to the RAMPS Project       |
| `documents/snoplus-laserball-calibration.pdf` | Calibration of SNO+ using the LaserBall |

Export the three PowerPoint decks to PDF under those names and drop them in
`public/documents/`. Titles, venues, and dates live in `talksData` in
`src/data/content.js`.

## Images

All paths below are relative to `public/`. JPG is assumed but PNG and WebP work
just as well — if you change the extension, update the matching path in
`src/data/content.js` or `src/data/site.js`.

### Identity

| File                  | Where it appears                           | Suggested size          |
| --------------------- | ------------------------------------------ | ----------------------- |
| `images/headshot.jpg` | Hero, right-hand portrait card             | 900x1125 (4:5 portrait) |
| `images/about.jpg`    | About section, lab photo                   | 1600x1200 (4:3)         |
| `images/skiing.jpg`   | "Off the clock" personal card              | 1200x1200 (square-ish)  |
| `images/og-image.jpg` | Link previews (Google, LinkedIn, iMessage) | 1200x630                |

From the photos you sent: the white-shirt portrait is `headshot.jpg`, the ski
shot is `skiing.jpg`, and either SNOLAB environment photo works for `about.jpg`.

### Logos

Transparent PNG or SVG works best. These are optional — the card simply omits
the logo when the file is absent.

| File                         | Where it appears                   | Suggested size |
| ---------------------------- | ---------------------------------- | -------------- |
| `images/logos/snolab.png`    | Both SNOLAB experience cards       | 128x128        |
| `images/logos/uwaterloo.png` | Education entry on the Resume page | 128x128        |

### Project 1 — HPGe–SiPM Coincidence Detector

| File                                          | Caption shown                                     |
| --------------------------------------------- | ------------------------------------------------- |
| `images/projects/ramps-detector-cover.jpg`    | cover                                             |
| `images/projects/ramps-sipm-hpge-mounted.jpg` | SiPM board mounted to the HPGe endcap             |
| `images/projects/ramps-shielding-cavity.jpg`  | Source and detector inside the shielding          |
| `images/projects/ramps-sipm-holder-cad.jpg`   | CAD model of the SiPM holder                      |
| `images/projects/ramps-bench-digitizer.jpg`   | Bench testing SiPM response through the digitizer |
| `images/projects/ramps-oscilloscope.jpg`      | HPGe pulse checks on the oscilloscope             |
| `images/projects/ramps-first-pulses.jpg`      | Finding the first coincidence waveforms           |

Mapping from your "Website Image Reference" deck: the two "Initial Science Run
SiPM & HPGe Detector setup" photos are the cover and `-sipm-hpge-mounted`, the
copper cavity shot is `-shielding-cavity`, the CAD render is `-sipm-holder-cad`,
the laptop and oscilloscope pair are `-bench-digitizer` and `-oscilloscope`, and
the person at the laptop is `-first-pulses`.

### Project 2 — RAMPS Analysis Pipeline

Screenshots from the Science Run 1 deck work directly here.

| File                                        | Caption shown                              |
| ------------------------------------------- | ------------------------------------------ |
| `images/projects/ramps-pipeline-cover.jpg`  | cover                                      |
| `images/projects/ramps-waveforms.jpg`       | Coincident SiPM and HPGe waveforms         |
| `images/projects/ramps-hpge-spectrum.jpg`   | Energy-calibrated HPGe spectrum            |
| `images/projects/ramps-sipm-spectrum.jpg`   | Calibrated SiPM energy spectrum            |
| `images/projects/ramps-coincidence-2d.jpg`  | HPGe versus combined SiPM 2D map           |
| `images/projects/ramps-roi-zoom.jpg`        | 50–110 keV zoom with the 3–27 keV SiPM cut |
| `images/projects/ramps-calibration-fit.jpg` | HPGe calibration fit and residuals         |

### Project 3 — SNO+ Optical Calibration

| File                                             | Caption shown                             |
| ------------------------------------------------ | ----------------------------------------- |
| `images/projects/snoplus-cover.jpg`              | cover                                     |
| `images/projects/snoplus-laserball.jpg`          | Laserball source and umbilical assembly   |
| `images/projects/snoplus-dye-laser.jpg`          | Dye laser cells                           |
| `images/projects/snoplus-control-room.jpg`       | Control room during a deployment          |
| `images/projects/snoplus-uvvis.jpg`              | UV-Vis spectrophotometer                  |
| `images/projects/snoplus-position-residuals.jpg` | Position residuals across six wavelengths |
| `images/projects/snoplus-timing.jpg`             | PMT hit-time residuals at 405 and 500 nm  |

### Project 4 — MIS Capacitor Fabrication

| File                                 | Caption shown                           |
| ------------------------------------ | --------------------------------------- |
| `images/projects/mis-cover.jpg`      | cover                                   |
| `images/projects/mis-wafer.jpg`      | Patterned wafer after selective etching |
| `images/projects/mis-inspection.jpg` | Optical defect inspection               |
| `images/projects/mis-cv-iv.jpg`      | C–V and I–V characterisation            |

### Project 5 — Triboelectric Nanogenerator

| File                                        | Caption shown                     |
| ------------------------------------------- | --------------------------------- |
| `images/projects/teng-cover.jpg`            | cover                             |
| `images/projects/teng-prototype-top.jpg`    | Printed rotor housing, overhead   |
| `images/projects/teng-prototype-angled.jpg` | Assembled prototype on test stand |
| `images/projects/teng-cad-blueprint.jpg`    | CAD blueprint of the assembly     |

Your two prototype photos map to `-prototype-top` (overhead) and
`-prototype-angled`. Either one cropped wide also works as the cover.

Suggested size for covers: 1920x1080 or wider. Gallery images: 1200x900.

### Lab gallery strip

The "From the lab" section on the home page. Captions live in `galleryData` in
`src/data/content.js`.

| File                                 | Caption shown                           |
| ------------------------------------ | --------------------------------------- |
| `images/gallery/ramps-group.jpg`     | The RAMPS team after Science Run 1      |
| `images/gallery/snolab-deck.jpg`     | Scaffolding around the detector deck    |
| `images/gallery/snolab-overview.jpg` | Looking down over the underground floor |
| `images/gallery/quantum-dots.jpg`    | Colloidal quantum dots under UV         |
| `images/gallery/cleanroom.jpg`       | Cleanroom and metrology suite           |
| `images/gallery/sem.jpg`             | Scanning electron microscope session    |

Clicking any loaded gallery or project image opens a full-screen lightbox with
arrow-key navigation. Placeholders are not clickable.

> **On the cleanroom and SEM photos:** the two slots above are left for your own
> photos. Images on the University of Waterloo Nanotechnology Engineering site
> are the university's copyrighted material, so republishing them on a personal
> site needs permission from the department. Easier options: take your own shots
> next time you're in the suite, ask the department for permission or a media
> kit, or delete those two entries from `galleryData` and let the grid reflow.

## Adding, renaming, or removing slots

Everything is data-driven, so you rarely need to touch a component:

- Project covers and galleries: `projectsData` in `src/data/content.js`
- Lab gallery: `galleryData`
- Slide decks: `talksData`
- Lab courses: `labCoursesData`
- Headshot, about photo, resume path, contact details: `src/data/site.js`
- Experience and education logos: `experienceData` / `educationData`

Wrap every path in the `asset()` helper so it keeps working under the
`/portfolio/` sub-path on GitHub Pages.

Keep each file under roughly 500 KB so the page stays quick on mobile data.

## Already in public/

- `documents/sipm-holder-ctbt.pdf` — SiPM holder drawing, linked from Project 1
- `favicon.svg` — blue CS monogram used as the browser tab icon
- `404.html` — GitHub Pages SPA fallback so `/portfolio/resume` works as a direct link
- `robots.txt` and `sitemap.xml` — search engine crawling hints
- `.nojekyll` — stops GitHub Pages from running Jekyll over the build output
