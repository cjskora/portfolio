# Site assets

Everything in `public/` is copied to the site root as-is, so `public/resume.pdf`
is served from `https://cjskora.github.io/portfolio/resume.pdf`.

**54 of the 63 referenced assets are in place.** They were extracted from your
source material and mapped to the slots below. Anything still missing renders a
labelled dashed placeholder rather than a broken image, so the site is safe to
deploy as-is.

Paths are declared in `src/data/content.js` and `src/data/site.js`, always
wrapped in the `asset()` helper so they keep working under the `/portfolio/`
sub-path.

## Where the images came from

| Source                                        | Used for                                                                                        |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `Website Image Reference.pdf`                 | Headshot, ski photo, bench/scope photos, control room, UV-Vis, SNOLAB environment, quantum dots |
| `Winter 2026 Final Presentation - RAMPS.pptx` | Science Run 1 plots, detector photos, decay scheme, DAQ layout, SNOLAB logo                     |
| `SNO+ Calibration presentation.pptx`          | Laserball, dye laser, residual and timing plots                                                 |
| `RAMPS Science Run 1 Plots.pptx`              | Additional spectra                                                                              |
| `Desktop/RAMPS/ScreenShots` + `Data`          | WaveDump captures, rise time, pulse decay, annotated 2D histogram                               |
| `SIPM HOLDER - CTBT.pdf`                      | Rendered page 1 as the machining drawing                                                        |

Images were pulled at original resolution (PowerPoint files are zip archives,
so `ppt/media/` holds the untouched originals), then resized to a 1920 px long
edge and saved as progressive JPEG. Photos at quality 85, plots and line art at
93 so axis labels stay legible. Every file is under 500 KB; the whole build is
about 17 MB.

## Still to add

| File                                        | Slot                                 |
| ------------------------------------------- | ------------------------------------ |
| `images/logos/uwaterloo.png`                | Education entry on the Resume page   |
| `images/projects/mis-cover.jpg`             | MIS project cover                    |
| `images/projects/mis-wafer.jpg`             | MIS gallery                          |
| `images/projects/mis-inspection.jpg`        | MIS gallery                          |
| `images/projects/mis-cv-iv.jpg`             | MIS gallery                          |
| `images/projects/teng-cover.jpg`            | Triboelectric project cover          |
| `images/projects/teng-prototype-top.jpg`    | Triboelectric gallery, overhead shot |
| `images/projects/teng-prototype-angled.jpg` | Triboelectric gallery, angled shot   |
| `images/projects/teng-cad-blueprint.jpg`    | Triboelectric gallery, CAD blueprint |

The two triboelectric prototype photos exist only as chat attachments, not as
files on this machine, so they could not be written automatically. Save them as
`teng-prototype-top.jpg` (overhead, showing the strip and probe lead) and
`teng-prototype-angled.jpg` (angled, on the test stand) in
`public/images/projects/`. Either one cropped wide also works as the cover.

No MIS fabrication photos were found on disk. If you have wafer or micrograph
shots from the NE 340L run, they go in the same folder.

## In place

### Identity

| File                  | Content                                          |
| --------------------- | ------------------------------------------------ |
| `images/headshot.jpg` | Portrait, cropped to 4:5 for the hero card       |
| `images/about.jpg`    | SNOLAB underground drift                         |
| `images/skiing.jpg`   | Ski photo for the "Off the clock" card           |
| `images/og-image.jpg` | Team photo cropped to 1200x630 for link previews |

`og-image.jpg` is referenced by absolute URL in `index.html`, not through
`asset()`.

### Logos

`images/logos/snolab.png` — SNOLAB wordmark, transparent PNG, on both SNOLAB
experience cards.

### Project 1 — HPGe–SiPM Coincidence Detector

13 gallery images plus cover: the DAQ layout diagram, SiPM mounted to the HPGe
endcap, detector inside the shielding, the SiPM holder CAD model and machining
drawing, the Lu-176 decay scheme, the 27 keV cut equation, bench and
oscilloscope testing, WaveDump captures, rise time and pulse decay, and finding
the first coincidence waveforms.

### Project 2 — RAMPS Analysis Pipeline

11 gallery images plus cover: coincident waveforms, the SiPM integration window,
charge histogram peak finding and calibration, calibrated SiPM and HPGe spectra,
charge versus amplitude linearity, the 2D coincidence map and your annotated
working copy, the 50–110 keV ROI zoom, the no-cut/coincidence/ROI comparison,
and an early commissioning spectrum.

### Project 3 — SNO+ Optical Calibration

12 gallery images plus cover: the acrylic vessel, deployment geometry, Laserball
assembly, dye laser and its measured emission spectra, position residuals across
all six wavelengths plus the 405 nm and 500 nm cases broken out, hit-time
residuals at both wavelengths, the control room, and the UV-Vis
spectrophotometer.

The Laserball assembly figure carries its citation in the caption
(Valder et al. 2023, arXiv:2310.12745), since it was credited that way on your
slide. The Zhang et al. absorption and re-emission figures were deliberately
left out for the same reason — they are published figures and the text already
covers the point they made. The Science Facts electron-capture diagram was also
skipped; it carries a visible third-party watermark.

### Lab gallery

Team photo, counting room, detector in the open shielding, scaffolding on the
deck, the underground lab floor, and colloidal quantum dots under UV from
NE 320L.

## Documents

| File                                          | Linked from                                 |
| --------------------------------------------- | ------------------------------------------- |
| `resume.pdf`                                  | Resume page: download, open, inline preview |
| `documents/ramps-science-run-1.pdf`           | Talks                                       |
| `documents/ramps-introduction.pdf`            | Talks                                       |
| `documents/snoplus-laserball-calibration.pdf` | Talks                                       |
| `documents/sipm-holder-ctbt.pdf`              | Project 1 links                             |

`resume.pdf` is the `Resume-3.pdf` you provided. Overwrite it when you revise.
The download filename shown to visitors is set by `resumeDownloadName` in
`src/data/site.js`.

## Changing things

- Project covers, galleries, and captions: `projectsData` in `src/data/content.js`
- Lab gallery: `galleryData`
- Slide decks: `talksData`
- Headshot, about photo, resume path, contact details: `src/data/site.js`

Clicking any loaded gallery or project image opens a full-screen lightbox with
arrow-key navigation. Placeholders are not clickable.

## Also in public/

- `favicon.svg` — blue CS monogram
- `404.html` — GitHub Pages SPA fallback so `/portfolio/resume` works as a direct link
- `robots.txt` and `sitemap.xml` — crawling hints
- `.nojekyll` — stops GitHub Pages running Jekyll over the build output
