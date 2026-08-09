import React, { useEffect, useRef, useState } from 'react';

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['projects', 'Projects'],
  ['stack', 'Stack'],
  ['gallery', 'Gallery'],
  ['contact', 'Contact'],
];

const projects = [
  {
    title: 'DetectFaceAI',
    eyebrow: 'Neural Network · From Scratch',
    description:
      'A fully connected facial-expression classifier implemented from first principles in pure Python, including matrix operations, Xavier initialization, softmax, backpropagation, SGD, and model serialization.',
    metrics: ['85% test accuracy', '4,163 parameters', 'No ML frameworks'],
    tags: ['Python', 'Neural Networks', 'Math'],
    href: 'https://github.com/Josh-Roe/DetectFaceAI',
    index: '01',
  },
  {
    title: '7700R Worlds Robot',
    eyebrow: 'Robotics · Controls · CAD',
    description:
      'Competition robot developed for the 2026 VEX World Championship with a fully modeled mechanical system, high-speed drivetrain, autonomous routines, odometry, and production-level build iteration.',
    metrics: ['10–2 at Worlds', '12.61 lb robot', '450 RPM drive'],
    tags: ['C++', 'PROS', 'CAD', 'Robotics'],
    href: 'https://github.com/Josh-Roe/7700R-WORLDS-ROBOT-2026',
    index: '02',
  },
  {
    title: 'AR Smart Glasses',
    eyebrow: 'Augmented Reality · AI',
    description:
      'An engineering design exploring how augmented-reality glasses can bring context-aware AI into everyday home applications and human-computer interaction.',
    metrics: ['AR interface design', 'AI integration', 'Engineering research'],
    tags: ['AR', 'AI', 'Product Design'],
    href: 'https://github.com/Josh-Roe/AR-Smart-Glasses-Home-Applications',
    index: '03',
  },
  {
    title: 'Decoder-Only SLM',
    eyebrow: 'Transformer · In Progress',
    description:
      'A compact decoder-only language-model project structured around tokenization, embeddings, multi-head attention, transformer blocks, training, and autoregressive generation.',
    metrics: ['8K vocabulary', '4 attention heads', '3 transformer layers'],
    tags: ['Python', 'Transformers', 'NLP'],
    href: 'https://github.com/Josh-Roe/Dec-Only-SLM-Model',
    index: '04',
  },
];

const stackGroups = [
  {
    title: 'Software',
    items: ['C++', 'Python', 'JavaScript', 'React', 'HTML / CSS', 'Git'],
  },
  {
    title: 'AI / ML',
    items: ['Neural Networks', 'Backpropagation', 'Transformers', 'Computer Vision', 'Model Evaluation'],
  },
  {
    title: 'Robotics',
    items: ['PROS', 'Odometry', 'PID Control', 'Localization', 'Autonomous Motion', 'Sensor Fusion'],
  },
  {
    title: 'Engineering',
    items: ['CAD', 'Rapid Prototyping', 'Mechanical Design', 'Testing', 'Design Iteration'],
  },
];

const photos = [
  {
    src: '/images/robotics.svg',
    alt: 'Robotics project photo placeholder',
    label: 'Robotics',
    caption: 'Drop in a competition, CAD, or build photo here.',
  },
  {
    src: '/images/ai.svg',
    alt: 'AI project photo placeholder',
    label: 'AI / Software',
    caption: 'Use this slot for model visualizations, demos, or UI shots.',
  },
  {
    src: '/images/hardware.svg',
    alt: 'Hardware project photo placeholder',
    label: 'Hardware',
    caption: 'Show manufacturing, prototyping, or mechanical details.',
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.7a9.3 9.3 0 0 0-2.94 18.12c.46.08.63-.2.63-.44v-1.8c-2.56.56-3.1-1.09-3.1-1.09-.42-1.06-1.02-1.34-1.02-1.34-.84-.57.06-.56.06-.56.92.07 1.41.95 1.41.95.82 1.4 2.15 1 2.68.76.08-.59.32-1 .58-1.23-2.04-.23-4.19-1.02-4.19-4.55 0-1 .36-1.83.95-2.47-.1-.23-.41-1.17.09-2.44 0 0 .78-.25 2.56.94A8.9 8.9 0 0 1 12 7.35a8.9 8.9 0 0 1 2.33.31c1.78-1.19 2.56-.94 2.56-.94.5 1.27.19 2.21.09 2.44.59.64.95 1.47.95 2.47 0 3.54-2.15 4.31-4.2 4.54.33.29.62.85.62 1.72v2.49c0 .24.17.53.63.44A9.3 9.3 0 0 0 12 2.7Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 6.5h17v11h-17z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function SectionHeading({ kicker, title, copy }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function TiltCard({ children, className = '' }) {
  const ref = useRef(null);

  const move = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 7;
    const rotateX = (0.5 - y) * 7;
    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
    card.style.setProperty('--mx', `${x * 100}%`);
    card.style.setProperty('--my', `${y * 100}%`);
  };

  const reset = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <article
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={move}
      onMouseLeave={reset}
      data-reveal
    >
      {children}
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const revealNodes = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const onPointerMove = (event) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="cursor-glow" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Josh Roe home">
          <span className="brand-mark">JR</span>
          <span className="brand-text">Josh Roe</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-copy">
            <div className="availability-pill hero-stagger hero-stagger-1">
              <span className="pulse-dot" />
              Engineering · AI · Robotics
            </div>
            <h1 className="hero-stagger hero-stagger-2">
              I build systems that move from <span>idea</span> to <span>real hardware.</span>
            </h1>
            <p className="hero-lede hero-stagger hero-stagger-3">
              I’m Josh Roe — a builder focused on software, intelligent systems, robotics, and technical products. I like working close to the fundamentals, where code, math, controls, and physical design meet.
            </p>
            <div className="hero-actions hero-stagger hero-stagger-4">
              <a className="button button-primary" href="#projects">
                View projects <ArrowIcon />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Josh-Roe"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon /> GitHub
              </a>
            </div>

            <div className="hero-stats hero-stagger hero-stagger-5">
              <div>
                <strong>85%</strong>
                <span>NN test accuracy</span>
              </div>
              <div>
                <strong>10–2</strong>
                <span>2026 Worlds record</span>
              </div>
              <div>
                <strong>4</strong>
                <span>featured builds</span>
              </div>
            </div>
          </div>

          <div className="hero-visual hero-stagger hero-stagger-3" aria-label="Profile photo area">
            <div className="portrait-shell">
              <div className="portrait-ring portrait-ring-one" />
              <div className="portrait-ring portrait-ring-two" />
              <div className="portrait-card">
                <img src="/images/profile.svg" alt="Profile photo placeholder for Josh Roe" />
                <div className="portrait-overlay">
                  <span>PHOTO SLOT</span>
                  <p>Replace this with your favorite portrait.</p>
                </div>
              </div>
              <div className="floating-code floating-code-a">C++</div>
              <div className="floating-code floating-code-b">AI</div>
              <div className="floating-code floating-code-c">CAD</div>
            </div>
          </div>

          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span>Scroll</span>
            <i />
          </a>
        </section>

        <section className="section about" id="about">
          <SectionHeading
            kicker="01 / ABOUT"
            title="Building across software and the physical world."
            copy="My projects sit at the intersection of software engineering, machine learning, robotics, and product design. I care about understanding the system end-to-end instead of treating each layer as a black box."
          />

          <div className="about-grid">
            <TiltCard className="about-card about-card-large">
              <span className="card-index">A</span>
              <h3>First-principles engineering</h3>
              <p>
                I’m most interested in projects where I can understand the full chain: input data, algorithms, control logic, code architecture, electronics, mechanical constraints, testing, and iteration.
              </p>
              <div className="mini-diagram" aria-hidden="true">
                <span>01</span><i />
                <span>02</span><i />
                <span>03</span><i />
                <span>04</span>
              </div>
            </TiltCard>

            <TiltCard className="about-card">
              <span className="card-index">B</span>
              <h3>Software</h3>
              <p>Algorithms, interfaces, model training, autonomous systems, tooling, and data pipelines.</p>
            </TiltCard>

            <TiltCard className="about-card">
              <span className="card-index">C</span>
              <h3>Hardware</h3>
              <p>CAD, mechanisms, manufacturing constraints, sensors, actuators, integration, and testing.</p>
            </TiltCard>
          </div>
        </section>

        <section className="section projects" id="projects">
          <SectionHeading
            kicker="02 / PROJECTS"
            title="Selected technical work."
            copy="A mix of AI, robotics, research, and systems projects. Each card links directly to the related GitHub repository."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <TiltCard className="project-card" key={project.title}>
                <div className="project-topline">
                  <span className="project-number">{project.index}</span>
                  <a
                    className="project-link-icon"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <ArrowIcon />
                  </a>
                </div>
                <span className="project-eyebrow">{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="metric-list">
                  {project.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        <section className="section stack" id="stack">
          <SectionHeading
            kicker="03 / STACK"
            title="Tools I use to turn concepts into systems."
            copy="The portfolio is intentionally broader than a typical software-only site: it highlights both computational and physical engineering work."
          />

          <div className="stack-layout">
            <div className="stack-visual" data-reveal>
              <div className="radar-ring ring-a" />
              <div className="radar-ring ring-b" />
              <div className="radar-ring ring-c" />
              <div className="radar-center">JR</div>
              <span className="radar-label radar-label-a">CODE</span>
              <span className="radar-label radar-label-b">AI</span>
              <span className="radar-label radar-label-c">ROBOTICS</span>
              <span className="radar-label radar-label-d">CAD</span>
            </div>

            <div className="stack-groups">
              {stackGroups.map((group, groupIndex) => (
                <div className="stack-group" key={group.title} data-reveal>
                  <div className="stack-group-heading">
                    <span>0{groupIndex + 1}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="stack-pills">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <SectionHeading
            kicker="04 / GALLERY"
            title="Give the work room to be visual."
            copy="These placeholders are already sized and responsive. Replace them with photos of robots, CAD renders, model demos, manufacturing, competitions, or anything else you want recruiters to remember."
          />

          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <figure className={`photo-card photo-card-${index + 1}`} key={photo.label} data-reveal>
                <img src={photo.src} alt={photo.alt} />
                <figcaption>
                  <span>{photo.label}</span>
                  <p>{photo.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-card" data-reveal>
            <div className="contact-glow" aria-hidden="true" />
            <span className="section-kicker">05 / CONTACT</span>
            <h2>Have a technical problem worth building?</h2>
            <p>
              I’m always interested in engineering, robotics, AI, software, and ambitious product work.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:roe.joshua1015@gmail.com">
                <MailIcon /> Email me
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Josh-Roe"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon /> GitHub profile
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Josh Roe</span>
        <span>Built with React + CSS</span>
      </footer>
    </div>
  );
}

export default App;
