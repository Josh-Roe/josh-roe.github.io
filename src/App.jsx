import React, { useEffect, useRef, useState } from 'react';

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['hcu', 'HCU Tech'],
  ['stack', 'Stack'],
  ['gallery', 'Gallery'],
  ['contact', 'Contact'],
];

const projects = [
  {
    title: 'DetectFaceAI',
    eyebrow: 'Neural Network · From Scratch',
    description:
      'A fully connected facial-expression classifier written from first principles in pure Python. I implemented the numerical operations, Xavier initialization, tanh/softmax forward pass, cross-entropy loss, backpropagation, stochastic gradient descent, dataset tooling, and model serialization without using an ML framework.',
    metrics: ['85% held-out accuracy', '4,163 parameters', '0 ML frameworks'],
    tags: ['Python', 'Neural Networks', 'Backpropagation', 'Math'],
    href: 'https://github.com/Josh-Roe/DetectFaceAI',
    index: '01',
  },
  {
    title: '7700R Worlds Robot',
    eyebrow: 'Robotics · Controls · CAD',
    description:
      'The 2026 VEX World Championship robot for Rolling Robots Ravens 7700R. I worked across mechanical design, CAD, autonomous software, odometry, motion control, driver-control systems, testing, and competition iteration to build a lightweight, high-throughput robot for Push Back.',
    metrics: ['10–2 at Worlds', '12.61 lb robot', '450 RPM drive'],
    tags: ['C++', 'PROS', 'CAD', 'Odometry', 'Controls'],
    href: 'https://github.com/Josh-Roe/7700R-WORLDS-ROBOT-2026',
    index: '02',
  },
  {
    title: 'AR Smart Glasses',
    eyebrow: 'Augmented Reality · Embedded AI',
    description:
      'A science-and-engineering fair project exploring wearable augmented reality for home applications. The system combined a custom glasses form factor with an embedded computing workflow designed to bring context-aware AI and visual information into everyday tasks.',
    metrics: ['Custom hardware', 'AR interface', 'Engineering research'],
    tags: ['AR', 'AI', 'Embedded Systems', 'Product Design'],
    href: 'https://github.com/Josh-Roe/AR-Smart-Glasses-Home-Applications',
    index: '03',
  },
  {
    title: 'Decoder-Only SLM',
    eyebrow: 'Transformer · In Progress',
    description:
      'A small decoder-only language-model project built to understand transformer systems end-to-end: dataset preparation, tokenization, embeddings, causal multi-head attention, transformer blocks, training, and autoregressive text generation.',
    metrics: ['8K vocabulary', '4 attention heads', '3 transformer layers'],
    tags: ['Python', 'Transformers', 'NLP', 'Attention'],
    href: 'https://github.com/Josh-Roe/Dec-Only-SLM-Model',
    index: '04',
  },
];

const otherProjects = [
  {
    title: '7700R Push Back Code',
    description:
      'Competition control stack for the 2025–2026 VEX Push Back season with LemLib-based motion, RAMSETE, SE(2), LTV unicycle control, PID, intake automation, LVGL autonomous selection, and MCL/MPC experiments.',
    tags: ['C++', 'PROS', 'LemLib', 'Controls'],
    href: 'https://github.com/Josh-Roe/7700R-Push-Back-Code',
  },
  {
    title: '7700R Worlds Robot 2025',
    description:
      'Full engineering and CAD archive for the 2025 World Championship robot, including custom-plastic geometry, low-CG packaging, odometry hardware, and an Inventor model built to closely match the final robot.',
    tags: ['Autodesk Inventor', 'CAD', 'Robotics'],
    href: 'https://github.com/Josh-Roe/7700R-WORLDS-ROBOT-2025',
  },
  {
    title: 'AI Diabetes Model',
    description:
      'Java/JavaFX machine-learning application integrating TensorFlow, serial communication, and a desktop UI around a diabetes-prediction workflow.',
    tags: ['Java', 'JavaFX', 'TensorFlow', 'Serial I/O'],
    href: 'https://github.com/Josh-Roe/AIDiabetesModel',
  },
  {
    title: 'ESP-DL Edge AI Fork',
    description:
      'Working fork of Espressif ESP-DL used to explore neural-network inference and embedded AI deployment on ESP32-class hardware, especially ESP32-S3 workflows.',
    tags: ['ESP32-S3', 'ESP-IDF', 'ESP-DL', 'Embedded ML'],
    href: 'https://github.com/Josh-Roe/ESP-DL-Project-Fork',
  },
  {
    title: 'Manim Epitrochoid Derivation',
    description:
      'Python/Manim animation project that derives an epitrochoid from two circles and turns the calculus into a visual mathematical explanation.',
    tags: ['Python', 'Manim', 'Calculus III'],
    href: 'https://github.com/Josh-Roe/Manim-Epitrochoid-Derivation',
  },
  {
    title: '7700R Over Under Code',
    description:
      '2023–2024 VEX Over Under competition code built on the JAR template and adapted for 7700R, representing an earlier stage of my work with VEX control systems and concurrent robot tasks.',
    tags: ['C++', 'VEX', 'Control Systems'],
    href: 'https://github.com/Josh-Roe/7700R-Code-2023',
  },
  {
    title: '8-Bit Transistor CPU',
    description:
      'A collaborative computer-architecture project building an 8-bit CPU from discrete NPN-transistor logic. The first hardware stage is an 8-bit ripple-carry adder/subtractor, with the larger design expanding toward an ALU, registers, control logic, clocking, and memory interfacing.',
    tags: ['Digital Logic', 'NPN Transistors', 'LTspice', 'Computer Architecture'],
    href: 'https://github.com/gcgoodwin/CPU',
  },
];

const experience = [
  {
    period: '2026 — 2030',
    role: 'B.S. Electrical & Computer Engineering',
    org: 'University of California, Berkeley',
    description:
      'Studying electrical and computer engineering with a focus on robotics, embedded systems, autonomous navigation, controls, computer vision, and the software that connects those systems.',
  },
  {
    period: '2016 — 2026',
    role: 'Head Engineer, Programmer, Designer & Driver',
    org: 'Rolling Robots Ravens · VEX 7700R',
    description:
      'Led cross-disciplinary robot development across CAD, mechanical systems, C++ autonomous and driver-control software, odometry, motion control, debugging, testing, and match strategy. Across the 2024–2026 VEX World Championships, 7700R posted an 84.4% win rate.',
  },
  {
    period: 'Jun — Jul 2024',
    role: 'Machine Learning Engineering Intern',
    org: 'MAC Italia',
    description:
      'Worked on applied machine-learning development and gained experience translating model concepts into practical software workflows and engineering deliverables.',
  },
  {
    period: '2026 — Present',
    role: 'Robotics & Engineering Instructor',
    org: 'Rolling Robots',
    description:
      'Teach younger students programming, CAD, 3D printing, robotics fundamentals, debugging, and iterative engineering through hands-on technical projects.',
  },
];

const stackGroups = [
  {
    title: 'Programming',
    items: ['C++', 'Python', 'C', 'Java', 'JavaScript', 'C#', 'HTML / CSS', 'React'],
  },
  {
    title: 'AI / ML',
    items: ['Neural Networks', 'Backpropagation', 'SGD', 'Transformers', 'TensorFlow', 'PyTorch', 'scikit-learn', 'NumPy', 'pandas', 'ONNX', 'Computer Vision', 'Model Evaluation'],
  },
  {
    title: 'Robotics & Controls',
    items: ['PROS', 'LemLib', 'PID', 'Odometry', 'Ramsete', 'SE(2)', 'LTV Unicycle', 'Monte Carlo Localization', 'Model Predictive Control', 'Dynamic Window Approach', 'AprilTag Localization', 'Sensor Fusion'],
  },
  {
    title: 'CAD & Design',
    items: ['Onshape', 'Autodesk Inventor', 'Autodesk Fusion 360', 'Mechanical CAD', 'Engineering Documentation', 'Design Iteration'],
  },
  {
    title: 'Embedded & Electronics',
    items: ['ESP32-S3', 'ESP-IDF', 'ESP-DL', 'Arduino', 'Raspberry Pi', 'PCB / Circuits', 'Serial I/O', 'Linux'],
  },
  {
    title: 'Fabrication & Tooling',
    items: ['3D Printing', 'Bambu Studio', 'CNC', 'X-Carve', 'Laser Cutting', 'Lathe', 'Bandsaw', 'Dremel', 'Material Analysis', 'Git / GitHub', 'JavaFX', 'Tkinter', 'Google Colab'],
  },
];

const photos = [
  {
    type: 'image',
    src: '/images/robotics.png',
    alt: 'CAD view of the 7700R competition robot',
    label: 'Robotics',
    caption: 'CAD from the 2026 California VEX State Championship development cycle for 7700R.',
  },
  {
    type: 'video',
    src: '/videos/ai.mp4',
    poster: '/images/ai.png',
    alt: 'Looping model predictive control path-following simulation',
    label: 'MPC Path Following',
    caption: 'Model Predictive Control simulation optimizing steering and velocity over a receding horizon to follow a planned path.',
  },
  {
    type: 'image',
    src: '/images/hardware.png',
    alt: 'Custom augmented reality glasses hardware',
    label: 'Hardware',
    caption: 'Custom-built augmented-reality glasses developed as an engineering research project.',
  },
];

const personalLinks = [
  { label: 'LinkedIn', type: 'linkedin', href: 'https://www.linkedin.com/in/josh-roe/' },
  { label: 'GitHub', type: 'github', href: 'https://github.com/Josh-Roe' },
  { label: 'Instagram', type: 'instagram', href: 'https://www.instagram.com/josh._roe/' },
];

const roboticsLinks = [
  { label: '7700R YouTube', type: 'youtube', href: 'https://www.youtube.com/@7700Ravens' },
  { label: '7700R Instagram', type: 'instagram', href: 'https://www.instagram.com/rollingrobots.7700r/' },
  { label: '7700R TikTok', type: 'tiktok', href: 'https://www.tiktok.com/@7700r.ravens' },
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


function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon brand-icon-fill">
      <path d="M5.3 7.8H2V22h3.3V7.8ZM3.65 2A1.95 1.95 0 1 0 3.65 5.9 1.95 1.95 0 0 0 3.65 2ZM22 13.9c0-4.28-2.28-6.27-5.32-6.27-2.45 0-3.55 1.35-4.16 2.3V7.8H9.2V22h3.32v-7.03c0-1.85.35-3.64 2.64-3.64 2.25 0 2.28 2.1 2.28 3.76V22H22v-8.1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-dot" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon brand-icon-fill">
      <path d="M21.5 7.1a2.9 2.9 0 0 0-2.04-2.05C17.66 4.55 12 4.55 12 4.55s-5.66 0-7.46.5A2.9 2.9 0 0 0 2.5 7.1 30.2 30.2 0 0 0 2 12a30.2 30.2 0 0 0 .5 4.9 2.9 2.9 0 0 0 2.04 2.05c1.8.5 7.46.5 7.46.5s5.66 0 7.46-.5a2.9 2.9 0 0 0 2.04-2.05A30.2 30.2 0 0 0 22 12a30.2 30.2 0 0 0-.5-4.9ZM9.8 15.2V8.8l5.55 3.2-5.55 3.2Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon brand-icon-fill">
      <path d="M14.8 3c.28 1.53 1.15 2.78 2.44 3.62A6.6 6.6 0 0 0 21 7.68v3.36a9.7 9.7 0 0 1-5.96-2v7.07a5.9 5.9 0 1 1-5.9-5.9c.41 0 .82.04 1.22.13v3.45a2.58 2.58 0 1 0 1.38 2.32V3h3.06Z" />
    </svg>
  );
}

function SocialIcon({ type }) {
  if (type === 'linkedin') return <LinkedInIcon />;
  if (type === 'instagram') return <InstagramIcon />;
  if (type === 'youtube') return <YouTubeIcon />;
  if (type === 'tiktok') return <TikTokIcon />;
  return <GithubIcon />;
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
              ECE @ UC Berkeley · Robotics · AI
            </div>
            <h1 className="hero-stagger hero-stagger-2">
              I build systems that move from <span>idea</span> to <span>real hardware.</span>
            </h1>
            <p className="hero-lede hero-stagger hero-stagger-3">
              I’m Josh Roe, an Electrical & Computer Engineering student at UC Berkeley focused on robotics, embedded systems, autonomous navigation, controls, computer vision, and machine learning. I like working close to the fundamentals, where code, math, electronics, and physical design meet.
            </p>
            <div className="hero-actions hero-stagger hero-stagger-4">
              <a className="button button-primary" href="#projects">
                View projects <ArrowIcon />
              </a>
              <a
                className="button button-linkedin"
                href="https://www.linkedin.com/in/josh-roe/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon /> LinkedIn
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
                <strong>84.4%</strong>
                <span>VEX Worlds win % · '24–'26</span>
              </div>
              <div>
                <strong>4,163</strong>
                <span>DetectFaceAI trainable parameters</span>
              </div>
              <div>
                <strong>$10K+</strong>
                <span>HCU Technologies revenue</span>
              </div>
            </div>
          </div>

          <div className="hero-visual hero-stagger hero-stagger-3" aria-label="Josh Roe portrait">
            <div className="portrait-shell">
              <div className="portrait-ring portrait-ring-one" />
              <div className="portrait-ring portrait-ring-two" />
              <div className="portrait-card">
                <img src="/images/profile.PNG" alt="Josh Roe" />
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
            title="Engineering across software and the physical world."
            copy="My work spans autonomous robotics, machine learning, embedded systems, mechanical design, and product development. The common thread is owning enough of the stack to understand how the entire system behaves."
          />

          <div className="about-grid">
            <TiltCard className="about-card about-card-large">
              <span className="card-index">A</span>
              <h3>First-principles engineering</h3>
              <p>
                I’m most interested in projects where I can understand the full chain: data and sensing, algorithms, control logic, software architecture, electronics, mechanical constraints, manufacturing, testing, and iteration.
              </p>
              <div className="mini-diagram" aria-hidden="true">
                <span>SENSE</span><i />
                <span>MODEL</span><i />
                <span>BUILD</span><i />
                <span>TEST</span>
              </div>
            </TiltCard>

            <TiltCard className="about-card">
              <span className="card-index">B</span>
              <h3>Autonomy & software</h3>
              <p>
                C++, Python, controls, localization, path following, computer vision, neural networks, and the tooling needed to make technical systems measurable and repeatable.
              </p>
            </TiltCard>

            <TiltCard className="about-card">
              <span className="card-index">C</span>
              <h3>Hardware & product</h3>
              <p>
                CAD, mechanisms, manufacturing constraints, rapid prototyping, supplier coordination, quality control, and hands-on integration are core parts of how I build.
              </p>
            </TiltCard>
          </div>
        </section>

        <section className="section projects" id="projects">
          <SectionHeading
            kicker="02 / PROJECTS"
            title="Selected technical work."
            copy="Projects that show how I approach machine learning, robotics, embedded hardware, controls, and engineering design. Each card links to the underlying repository."
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

          <div className="other-projects-block" data-reveal>
            <div className="other-projects-heading">
              <div>
                <span className="section-kicker">MORE ON GITHUB</span>
                <h3>Other projects</h3>
              </div>
              <p>
                Smaller builds, earlier competition code, embedded-AI experiments, and technical projects that are still useful snapshots of how my engineering work has evolved.
              </p>
            </div>

            <div className="other-projects-grid">
              {otherProjects.map((project) => (
                <a
                  className="other-project-card"
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                >
                  <div className="other-project-top">
                    <GithubIcon />
                    <ArrowIcon />
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="other-project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading
            kicker="03 / EXPERIENCE"
            title="Engineering, competition, and applied work."
            copy="My background combines formal ECE study with a decade of competitive robotics, applied machine-learning work, technical instruction, and product development."
          />

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={`${item.org}-${item.role}`} data-reveal>
                <span className="experience-period">{item.period}</span>
                <div className="experience-role">
                  <h3>{item.role}</h3>
                  <span>{item.org}</span>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section hcu-section" id="hcu">
          <div className="hcu-card" data-reveal>
            <div className="hcu-glow" aria-hidden="true" />
            <div className="hcu-copy">
              <div className="hcu-brand" aria-label="HCU Technologies logo">
                <img src="/images/hcu-logo.png" alt="HCU Technologies" />
              </div>
              <span className="section-kicker">04 / HCU TECHNOLOGIES</span>
              <p className="hcu-role">Founder & CEO</p>
              <h2>Robotics hardware designed around real competition constraints.</h2>
              <p>
                HCU Technologies is a robotics-hardware startup I founded to design and supply custom components for competition teams. I take products from CAD and specification through supplier coordination, manufacturing, quality control, inventory, fulfillment, and customer support, with an emphasis on strength, reliability, low mass, and competition-specific packaging.
              </p>
              <div className="hcu-actions">
                <a
                  className="button button-primary"
                  href="https://hcu-tech.square.site/about"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit HCU Technologies <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="hcu-metrics">
              <div>
                <strong>$10K+</strong>
                <span>revenue generated</span>
              </div>
              <div>
                <strong>Global</strong>
                <span>competition-team customers</span>
              </div>
              <div>
                <strong>End-to-end</strong>
                <span>design → manufacturing → QC</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section stack" id="stack">
          <SectionHeading
            kicker="05 / STACK"
            title="Tools I use to turn concepts into systems."
            copy="My stack is intentionally cross-disciplinary because my projects move between software, machine learning, controls, CAD, manufacturing, and physical testing."
          />

          <div className="stack-layout">
            <div className="stack-visual" data-reveal aria-label="Engineering disciplines visualization">
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
            kicker="06 / GALLERY"
            title="Engineering in practice."
            copy="A few snapshots from the work itself: competition robotics and CAD, model-predictive-control path following, and custom hardware prototyping."
          />

          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <figure className={`photo-card photo-card-${index + 1}`} key={photo.label} data-reveal>
                {photo.type === 'video' ? (
                  <div className="video-frame">
                    <video
                      className="gallery-media"
                      src={photo.src}
                      poster={photo.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={photo.alt}
                    />
                  </div>
                ) : (
                  <img className="gallery-media" src={photo.src} alt={photo.alt} />
                )}
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
            <span className="section-kicker">07 / CONTACT</span>
            <h2>Interested in robotics, AI, hardware, or ambitious engineering?</h2>
            <p>
              I’m always interested in technical projects, engineering opportunities, research, startups, and conversations with people building difficult things.
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=joshroe@berkeley.edu&su=Portfolio%20Contact"
                target="_blank"
                rel="noreferrer"
              >
                <MailIcon /> Email me
              </a>
            </div>

            <div className="social-directory">
              <div className="social-group">
                <span className="social-group-title">Josh Roe</span>
                <div className="social-links">
                  {personalLinks.map((link) => (
                    <a
                      key={link.label}
                      className={`social-link social-${link.type}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SocialIcon type={link.type} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="social-group">
                <span className="social-group-title">7700R Ravens</span>
                <div className="social-links">
                  {roboticsLinks.map((link) => (
                    <a
                      key={link.label}
                      className={`social-link social-${link.type}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SocialIcon type={link.type} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Josh Roe</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/josh-roe/" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
          <a href="https://github.com/Josh-Roe" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
          <a href="https://www.instagram.com/josh._roe/" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
        </div>
        <span>Built with React + CSS</span>
      </footer>
    </div>
  );
}

export default App;
