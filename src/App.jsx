import React from 'react';

const GITHUB = 'https://github.com/Josh-Roe';

const projects = [
  {
    title: 'AR Smart Glasses',
    meta: 'Oct 2025 – Feb 2026',
    award: '3rd place, Robotics & Intelligent Machines',
    summary:
      'Custom augmented-reality glasses for home accessibility, integrating waveguide displays, sensors, and 3D-printed hardware. I optimized YOLOv8n with TensorFlow Lite for real-time object recognition at about 121 ms system latency.',
    stack: ['YOLOv8n', 'TensorFlow Lite', 'Android Studio', 'CAD'],
    href: `${GITHUB}/AR-Smart-Glasses-Home-Applications`,
    image: '/images/glasses.jpg',
    alt: 'Yellow 3D-printed AR glasses with exposed electronics',
  },
  {
    title: 'Autonomous Collision Avoidance',
    meta: 'Oct 2024 – Feb 2025 · with Connor Lee',
    award: '3rd place, Robotics & Intelligent Machines',
    summary:
      'A vehicle safety system on a VEX robot combining SSD object detection, the Dynamic Window Approach, and Model Predictive Control. Validated in simulations and physical tests, avoiding 98% of obstacles over 50 trials.',
    stack: ['C++', 'PROS', 'Qt', 'TensorFlow'],
    href: `${GITHUB}/MPC`,
    video: '/videos/ai.mp4',
    poster: '/images/ai.png',
    alt: 'Model Predictive Control simulation following a planned path',
  },
  {
    title: '7700R Worlds Robot',
    meta: '2025 – 2026',
    award: '10–2 at the VEX World Championship',
    summary:
      'A VEX World Championship robot designed and programmed for the Push Back season. I worked on the CAD, mechanical design, autonomous software, odometry, and motion control.',
    stack: ['C++', 'PROS', 'LemLib', 'Autodesk Inventor'],
    href: `${GITHUB}/7700R-WORLDS-ROBOT-2026`,
    image: '/images/robot.jpg',
    alt: 'CAD render of the 7700R competition robot',
  },
  {
    title: 'CalSpork',
    meta: '2026 – present · Private repository',
    summary:
      'An independent UC Berkeley dining app for iOS, Android, and web. It recommends dining halls with a LinUCB contextual bandit that learns from meal ratings, and identifies meals from photos using Grounding DINO and SigLIP2 with menu-constrained matching.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React Native'],
  },
  {
    title: 'Decoder-Only Small Language Model',
    meta: 'In progress',
    summary:
      'A small transformer built end to end to understand how language models work: tokenization, embeddings, causal multi-head attention, training, and text generation.',
    stack: ['Python', 'Transformers'],
    href: `${GITHUB}/Dec-Only-SLM-Model`,
  },
  {
    title: 'DetectFaceAI',
    meta: '2026 · with Keily Huang',
    summary:
      'A 256–16–3 neural network written in pure Python with no ML libraries, including backpropagation and stochastic gradient descent. It reached 85% held-out accuracy classifying hand-drawn facial expressions.',
    stack: ['Python', 'Tkinter'],
    href: `${GITHUB}/DetectFaceAI`,
  },
];

const otherProjects = [
  { title: '8-Bit Transistor CPU', note: 'An arithmetic datapath built from discrete NPN transistors.', href: 'https://github.com/gcgoodwin/CPU' },
  { title: '7700R Push Back Code', note: 'Competition C++ with RAMSETE, LTV unicycle control, and PID.', href: `${GITHUB}/7700R-Push-Back-Code` },
  { title: 'AI Diabetes Model', note: 'TensorFlow classifier in a JavaFX app with Arduino serial input.', href: `${GITHUB}/AIDiabetesModel` },
  { title: 'ESP-DL Fork', note: 'Embedded ML experiments on ESP32-S3.', href: `${GITHUB}/ESP-DL-Project-Fork` },
  { title: '7700R Worlds Robot 2025', note: 'CAD archive of the 2025 World Championship robot.', href: `${GITHUB}/7700R-WORLDS-ROBOT-2025` },
  { title: 'Epitrochoid Derivation', note: 'Calculus animation made with Python and Manim.', href: `${GITHUB}/Manim-Epitrochoid-Derivation` },
];

const experience = [
  {
    role: 'Electrical Team Member',
    org: 'UAVs@Berkeley',
    period: 'Sep 2026 – present',
    detail: 'Designed a 4-layer STM32G431 flight controller PCB in KiCad and now developing FPGA acceleration for ORB feature extraction.',
  },
  {
    role: 'Accumulator EE',
    org: 'Formula Electric at Berkeley',
    period: 'Aug 2026 – present',
    detail: 'Designed a battery management PCB for a 6S3P segment with cell-voltage sensing, temperature monitoring, passive balancing, and isolated CAN.',
  },
  {
    role: 'Co-Founder',
    org: 'Hardware for Community Uplift',
    href: 'https://hcu-tech.org',
    period: 'Jun 2025 – present',
    detail: 'Robotics hardware company that has supplied 30,000+ precision parts to 100+ teams worldwide and generated $10,000+ in revenue.',
  },
  {
    role: 'Head Engineer & Programmer',
    org: 'VEX Robotics Team 7700R',
    period: 'Aug 2016 – Jul 2026',
    detail: 'Developed autonomous navigation, sensor fusion, and localization in C++. Ranked 11th worldwide in the 2025 VEX World Skills standings.',
  },
  {
    role: 'Machine Learning Engineering Intern',
    org: 'MAC Italia',
    period: 'Jun – Jul 2024',
    detail: 'Researched ML methods for identifying household appliances from electrical data and explored deployment on ESP32-S3 microcontrollers.',
  },
];

const skills = [
  ['Electrical & Hardware', ['KiCad', 'PCB layout', 'STM32', 'ESP32-S3', 'FPGA', 'CAN', 'SPI', 'Battery management']],
  ['Machine Learning & Vision', ['TensorFlow', 'TensorFlow Lite', 'ONNX', 'YOLO', 'Grounding DINO', 'scikit-learn', 'NumPy']],
  ['Embedded & Controls', ['C/C++', 'ESP-IDF', 'PROS', 'PID', 'Model Predictive Control', 'Localization', 'Path planning']],
  ['Languages & Tools', ['Python', 'Java', 'TypeScript', 'Git', 'Linux', 'Onshape', 'Autodesk Inventor']],
];

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Project({ project }) {
  const hasMedia = project.image || project.video;
  return (
    <article className={hasMedia ? 'card project has-media' : 'card project'}>
      {project.image && <img src={project.image} alt={project.alt} loading="lazy" />}
      {project.video && (
        <video src={project.video} poster={project.poster} muted loop controls playsInline preload="none" aria-label={project.alt} />
      )}
      <div className="project-body">
        <p className="meta">{project.meta}</p>
        <h3>{project.title}</h3>
        {project.award && <p className="award">{project.award}</p>}
        <p className="summary">{project.summary}</p>
        <Tags items={project.stack} />
        {project.href && (
          <a className="more" href={project.href}>
            View on GitHub <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <header className="hero">
        <div className="wrap hero-inner">
          <div>
            <p className="eyebrow">UC Berkeley · Electrical and Computer Engineering</p>
            <h1>Josh Roe</h1>
            <p className="lede">
              I design PCBs and embedded systems, and build machine learning and computer vision for real hardware.
            </p>
            <div className="links">
              <a className="button primary" href="mailto:joshroe@berkeley.edu">Email me</a>
              <a className="button" href="https://www.linkedin.com/in/josh-roe/">LinkedIn</a>
              <a className="button" href={GITHUB}>GitHub</a>
            </div>
          </div>
          <img className="portrait" src="/images/photo.jpg" alt="Josh Roe" width="168" height="168" />
        </div>
      </header>

      <main className="wrap">
        <section>
          <h2><span>01</span> Featured projects</h2>
          <div className="projects">
            {projects.map((project) => (
              <Project project={project} key={project.title} />
            ))}
          </div>
        </section>

        <section>
          <h2><span>02</span> Experience</h2>
          <ol className="timeline">
            {experience.map((item) => (
              <li key={item.org}>
                <div className="job-head">
                  <h3>
                    {item.role} <span className="at">·</span>{' '}
                    {item.href ? <a href={item.href}>{item.org}</a> : item.org}
                  </h3>
                  <span className="meta">{item.period}</span>
                </div>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2><span>03</span> Skills</h2>
          <div className="skills">
            {skills.map(([label, items]) => (
              <div className="card skill-group" key={label}>
                <h3>{label}</h3>
                <Tags items={items} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2><span>04</span> More on GitHub</h2>
          <ul className="other">
            {otherProjects.map((project) => (
              <li key={project.title}>
                <a href={project.href}>{project.title}</a>
                <span>{project.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2><span>05</span> Education</h2>
          <div className="card edu">
            <div className="job-head">
              <h3>University of California, Berkeley</h3>
              <span className="meta">Expected May 2029</span>
            </div>
            <p>B.S. Electrical and Computer Engineering</p>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <p>
          <a href="mailto:joshroe@berkeley.edu">joshroe@berkeley.edu</a> · Berkeley, CA
        </p>
      </footer>
    </>
  );
}

export default App;
