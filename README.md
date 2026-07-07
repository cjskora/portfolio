# Christopher Skora - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, expandable project cards, and a clean minimal design with purple accents.

## 🚀 Features

- **Responsive Design** - Looks great on desktop, tablet, and mobile devices
- **Interactive Project Cards** - Expandable cards with detailed project information
- **Smooth Animations** - Built with Framer Motion for fluid transitions
- **Blog Section** - Ready for technical writeups and insights
- **Resume Page** - Comprehensive experience and skills showcase
- **GitHub Pages Ready** - Configured for easy deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Installation

1. **Install Node.js** (if not already installed)
   - Visit https://nodejs.org/
   - Download and install the LTS (Long Term Support) version
   - Verify installation by opening a command prompt and running:
     ```
     node --version
     npm --version
     ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 💻 Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Building for Production

Build the site for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🚀 Deploying to GitHub Pages

### One-Time Setup

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it `portfolio-website`
   - Do NOT initialize with README (we already have one)

2. **Initialize and push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/cjskora/portfolio-website.git
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**

   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select `gh-pages` branch
   - Click Save

Your site will be live at: `https://cjskora.github.io/portfolio-website/`

### Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
npm run deploy
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ExperienceCard.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   └── Resume.jsx
│   ├── data/            # Content data
│   │   └── content.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Customization

### Adding Projects

Edit `src/data/content.js` and add to the `projectsData` array:

```javascript
{
  title: "Project Name",
  shortDescription: "Brief description",
  fullDescription: "Detailed description",
  status: "Completed" or "In Progress",
  techStack: ["Tech1", "Tech2"],
  achievements: ["Achievement 1", "Achievement 2"],
  image: null // or image URL
}
```

### Adding Blog Posts

Blog posts can be added by editing `src/pages/Blog.jsx`. Consider implementing a blog post data structure similar to projects.

### Changing Colors

Edit `tailwind.config.js` to modify the purple accent colors:

```javascript
colors: {
  'primary-purple': '#8B5CF6',
  'light-purple': '#A78BFA',
  'pale-purple': '#E9D5FF',
}
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📝 License

This project is open source and available for personal use.

## 👤 Contact

Christopher Skora

- Email: cjskora@gmail.com
- LinkedIn: [linkedin.com/in/cjskora](https://www.linkedin.com/in/cjskora/)
- GitHub: [github.com/cjskora](https://github.com/cjskora)
