# Christopher Skora — Portfolio

Portfolio site built with React, Vite, and Tailwind CSS, deployed to GitHub Pages
at <https://cjskora.github.io/portfolio/>.

## Running it

```bash
npm ci        # install exactly what package-lock.json specifies
npm run dev   # local dev server
npm run build # production build into dist/
npm run preview
```

Node 24 is what CI uses; anything 20+ works locally.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. You can also trigger it manually from the Actions tab
(**Run workflow**). No need to run `npm run deploy` by hand.

## Adding images and the resume

See [ASSETS.md](./ASSETS.md). Every image slot falls back to a labelled
placeholder, so the site stays presentable while you fill them in.

## Theming

The site boots in dark mode; visitors can switch to light with the navbar
toggle, and the choice is remembered in `localStorage`.

Colours are CSS custom properties defined once in `src/index.css` (`:root` for
light, `html.dark` for dark) and exposed to Tailwind as semantic names in
`tailwind.config.js`:

| Token      | Use                             |
| ---------- | ------------------------------- |
| `base`     | page background                 |
| `surface`  | cards and raised panels         |
| `surface2` | subtle fills, alternating bands |
| `line`     | borders and dividers            |
| `fg`       | primary text                    |
| `muted`    | secondary text                  |
| `accent`   | primary accent (sky)            |
| `accent2`  | secondary accent (violet)       |

Changing the palette means editing those variables, not hunting through
components. Reusable class recipes (`.card`, `.btn-primary`, `.chip`, `.shell`,
`.eyebrow`) also live in `src/index.css`.

## Project structure

```
├── .github/workflows/deploy.yml   # build + deploy to GitHub Pages
├── public/                        # copied verbatim to the site root
│   ├── images/                    # headshot, about, logos, projects, gallery
│   ├── resume.pdf                 # add manually
│   ├── 404.html                   # SPA fallback for deep links
│   └── favicon.svg, robots.txt, sitemap.xml, .nojekyll
├── src/
│   ├── components/
│   │   ├── About.jsx              # about section
│   │   ├── BackToTop.jsx
│   │   ├── Contact.jsx            # closing call to action
│   │   ├── ExperienceCard.jsx     # timeline entry
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx            # image grid + lightbox
│   │   ├── Hero.jsx               # hero and stats strip
│   │   ├── Icon.jsx               # inline icon set
│   │   ├── Lightbox.jsx           # full-screen image viewer
│   │   ├── Navbar.jsx             # sticky nav with scrollspy
│   │   ├── ProjectCard.jsx        # expandable project card
│   │   ├── Reveal.jsx             # scroll-triggered animation wrapper
│   │   ├── ScrollManager.jsx      # hash + route scroll handling
│   │   ├── ScrollProgress.jsx
│   │   ├── Section.jsx            # section shell and spacing
│   │   ├── SectionHeading.jsx
│   │   ├── SkillsGrid.jsx
│   │   ├── SmartImage.jsx         # image with placeholder fallback
│   │   ├── SocialLinks.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/ThemeContext.jsx   # dark/light state
│   ├── data/
│   │   ├── content.js             # all page copy and image paths
│   │   └── site.js                # name, links, resume, headshot
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Resume.jsx
│   ├── utils/asset.js             # base-path-aware public/ URLs
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # tokens, base styles, class recipes
├── index.html
├── tailwind.config.js
└── vite.config.js
```

Content lives in `src/data/`. Editing copy, projects, or experience should not
require touching a component.
