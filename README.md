# Josh Roe — Engineering Portfolio

Personal engineering portfolio for **Josh Roe**, showcasing work across robotics, autonomous systems, machine learning, embedded hardware, mechanical design, and technical product development.

Live site: **https://josh-roe.github.io/**

## Tech Stack

The portfolio is built as a single-page React application using a lightweight front-end stack without a UI component framework.

- **React 19** — component-based interface and page structure
- **React DOM** — browser rendering
- **Vite 7** — local development server and production bundling
- **JavaScript / JSX** — application logic and reusable components
- **HTML5** — semantic page structure and video playback
- **CSS3** — all layout, styling, responsive behavior, gradients, effects, and animation
- **Google Fonts** — DM Sans and Space Grotesk
- **Git / GitHub** — source control and project hosting
- **GitHub Actions** — automated production builds
- **GitHub Pages** — website hosting

No Bootstrap, Tailwind, Material UI, or other front-end component library is used. The visual system is custom CSS.

## Interface & Animation

The site includes several custom interactions written directly in React and CSS:

- Scroll-reveal animations using the browser `IntersectionObserver` API
- Active-section navigation that updates while scrolling
- Animated page scroll-progress indicator
- Pointer-tracked background glow using CSS custom properties
- 3D hover / tilt effects on project cards
- Animated background gradients and decorative elements
- Responsive desktop and mobile navigation
- Smooth anchor scrolling between sections
- Custom branded social-media buttons and inline SVG icons
- Reduced-motion accessibility support through `prefers-reduced-motion`

## Media

Project media is stored under `public/`, allowing Vite to serve the files directly.

```text
public/
├── images/
│   ├── profile.PNG
│   ├── robotics.png
│   ├── ai.png
│   ├── hardware.png
│   └── hcu-logo.png
└── videos/
    └── ai.mp4
```

The gallery supports both static images and HTML5 video.

The **MPC Path Following** gallery item uses a looping `<video>` element with:

- autoplay
- muted playback
- looping
- inline mobile playback
- an image poster while the video loads
- responsive aspect-ratio handling so the full simulation remains visible

## Portfolio Structure

The site is organized into the following sections:

- **Home** — introduction and technical statistics
- **About** — engineering philosophy and areas of focus
- **Projects** — major robotics, AI, embedded, and software projects
- **Other Projects** — additional GitHub repositories and earlier engineering work
- **Experience** — education, competitive robotics, ML work, and technical instruction
- **HCU Technologies** — robotics hardware startup founded and led by Josh Roe
- **Stack** — programming languages, CAD tools, controls, ML, electronics, and fabrication skills
- **Gallery** — CAD, robotics, MPC simulation, and hardware visuals
- **Contact** — email and social links

## Project Structure

```text
josh-roe.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── images/
│   └── videos/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   └── overrides.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### `src/App.jsx`

Contains the React components, portfolio data, navigation, project cards, gallery, experience, HCU Technologies section, social links, and browser interaction logic.

### `src/styles.css`

Contains the base visual design system including:

- dark theme
- typography
- responsive grid layouts
- cards and buttons
- hero layout
- animation keyframes
- mobile breakpoints

### `src/overrides.css`

Contains later portfolio refinements and specialized components, including:

- layout fixes
- expanded project cards
- experience styling
- HCU Technologies styling
- branded social buttons
- responsive gallery video behavior
- desktop stack visualization fixes

## Local Development

Install Node.js and npm, then clone the repository.

```bash
git clone https://github.com/Josh-Roe/josh-roe.github.io.git
cd josh-roe.github.io
npm install
npm run dev
```

Vite will start a local development server, normally at:

```text
http://localhost:5173/
```

Changes to React and CSS files are automatically reflected during development.

## Production Build

Create the optimized production build with:

```bash
npm run build
```

Vite outputs the finished website to:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The site is deployed automatically with **GitHub Actions**.

The workflow in:

```text
.github/workflows/deploy.yml
```

runs whenever a commit is pushed to `main`.

The deployment pipeline:

```text
Push to main
     ↓
GitHub Actions
     ↓
Node.js 22
     ↓
npm install
     ↓
npm run build
     ↓
Vite generates dist/
     ↓
Upload Pages artifact
     ↓
Deploy to GitHub Pages
```

GitHub Pages should be configured with:

```text
Settings → Pages → Source → GitHub Actions
```

Because this repository is named `josh-roe.github.io`, Vite uses:

```js
base: '/'
```

and the production site is served from the root URL.

## Updating Portfolio Content

Most portfolio text, projects, skills, links, and gallery definitions are stored near the top of:

```text
src/App.jsx
```

This includes arrays for:

- featured projects
- other GitHub projects
- experience
- technical skills
- gallery media
- personal social links
- 7700R social links

This makes it possible to add new projects or update portfolio information without rebuilding the page layout.

---

Built with **React + Vite + JavaScript + custom CSS** and deployed through **GitHub Actions / GitHub Pages**.
