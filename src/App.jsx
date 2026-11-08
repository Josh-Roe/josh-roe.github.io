import React from 'react';

const GITHUB = 'https://github.com/Josh-Roe';

const projects = [
  {
    title: 'CalSpork',
    meta: '2026 – present · Private repository',
    summary:
      'An independent UC Berkeley dining app for iOS, Android, and web. It recommends dining halls with a LinUCB contextual bandit that learns from meal ratings, and identifies meals from photos using Grounding DINO and SigLIP2 with menu-constrained matching.',
    stack: 'Python, FastAPI, PostgreSQL, TypeScript, React Native (Expo)',
  },
  {
    title: 'AR Smart Glasses',
    meta: '2025 – 2026',
    summary:
      'Custom augmented-reality glasses for home accessibility, integrating waveguide displays, sensors, and 3D-printed hardware. I optimized YOLOv8n with TensorFlow Lite for real-time object recognition at about 121 ms system latency. Placed 3rd in its science fair category.',
    stack: 'YOLOv8n, TensorFlow Lite, Android Studio, CAD',
    href: `${GITHUB}/AR-Smart-Glasses-Home-Applications`,
    image: '/images/glasses.jpg',
    alt: 'Yellow 3D-printed AR glasses with exposed electronics',
  },
  {
    title: 'Decoder-Only Small Language Model',
    meta: 'In progress',
    summary:
      'A small transformer built end to end to understand how language models work: tokenization, embeddings, causal multi-head attention, training, and text generation. It uses an 8K vocabulary, 4 attention heads, and 3 transformer layers.',
    stack: 'Python, Transformers',
    href: `${GITHUB}/Dec-Only-SLM-Model`,
  },
  {
    title: 'DetectFaceAI',
    meta: '2026',
    summary:
      'A 256–16–3 neural network written in pure Python with no ML libraries, including backpropagation and stochastic gradient descent. It reached 85% held-out accuracy classifying hand-drawn facial expressions. Built with Keily Huang.',
    stack: 'Python, Tkinter',
    href: `${GITHUB}/DetectFaceAI`,
  },
  {
    title: '7700R Worlds Robot',
    meta: '2025 – 2026',
    summary:
      'A VEX World Championship robot designed and programmed for the Push Back season. I worked on the CAD, mechanical design, autonomous software, odometry, and motion control. It went 10⁠–⁠2 at Worlds.',
    stack: 'C++, PROS, LemLib, Autodesk Inventor',
    href: `${GITHUB}/7700R-WORLDS-ROBOT-2026`,
    image: '/images/robot.jpg',
    alt: 'CAD render of the 7700R competition robot',
  },
  {
    title: 'Autonomous Collision Avoidance',
    meta: '2024 – 2025',
    summary:
      'A vehicle safety system on a VEX robot, combining SSD object detection, the Dynamic Window Approach, and Model Predictive Control. Validated in simulations and physical tests, avoiding 98% of obstacles over 50 trials. Built with Connor Lee. Placed 3rd in its science fair category.',
    stack: 'C++, PROS, Qt, TensorFlow',
    href: `${GITHUB}/MPC`,
    video: '/videos/ai.mp4',
    poster: '/images/ai.png',
    alt: 'Model Predictive Control simulation following a planned path',
  },
];

const otherProjects = [
  { title: '7700R Push Back Code', note: 'Competition C++ with RAMSETE, LTV unicycle control, and PID.', href: `${GITHUB}/7700R-Push-Back-Code` },
  { title: 'AI Diabetes Model', note: 'TensorFlow classifier in a JavaFX desktop app with Arduino serial input.', href: `${GITHUB}/AIDiabetesModel` },
  { title: '8-Bit Transistor CPU', note: 'Team project: an arithmetic datapath built from discrete NPN transistors.', href: 'https://github.com/gcgoodwin/CPU' },
  { title: 'ESP-DL Fork', note: 'Embedded ML experiments on ESP32-S3.', href: `${GITHUB}/ESP-DL-Project-Fork` },
  { title: '7700R Worlds Robot 2025', note: 'CAD archive of the 2025 World Championship robot.', href: `${GITHUB}/7700R-WORLDS-ROBOT-2025` },
  { title: 'Epitrochoid Derivation', note: 'Calculus animation made with Python and Manim.', href: `${GITHUB}/Manim-Epitrochoid-Derivation` },
];

const experience = [
  {
    role: 'Founder',
    org: 'HCU Technologies',
    href: 'https://hcu-tech.org',
    period: '2025 – present',
    detail: 'Robotics hardware company that has supplied 30,000+ precision parts to 100+ teams worldwide and generated $10,000+ in revenue.',
  },
  {
    role: 'Summer Camp Instructor',
    org: 'Rolling Robots',
    period: 'Summer 2026',
    detail: 'Taught C++, autonomous programming, PID control, and CAD to students in grades 1–8.',
  },
  {
    role: 'Head Engineer & Programmer',
    org: 'VEX Robotics Team 7700R',
    period: '2016 – 2026',
    detail: 'Developed autonomous navigation, sensor fusion, and localization in C++. Ranked 11th worldwide in the 2025 VEX World Skills standings.',
  },
  {
    role: 'Head Captain',
    org: 'Technology Student Association',
    period: '2022 – 2026',
    detail: 'Captained the team that placed 2nd nationally in the 2025 TEAMS Build & Design challenge.',
  },
  {
    role: 'Machine Learning Engineering Intern',
    org: 'MAC Italia',
    period: 'Summer 2024',
    detail: 'Researched ML methods for identifying household appliances from electrical data and explored deployment on ESP32-S3 microcontrollers.',
  },
];

const skills = [
  ['Languages', 'Python, C++, C, Java, JavaScript'],
  ['Machine learning', 'TensorFlow, PyTorch, scikit-learn, YOLO, ONNX, computer vision'],
  ['Robotics', 'Control systems, PID, Model Predictive Control, localization, path planning'],
  ['Embedded', 'ESP32-S3, ESP-IDF, Arduino, Raspberry Pi'],
  ['CAD', 'Onshape, Autodesk Inventor, Autodesk Fusion 360'],
];

function Project({ project }) {
  const hasMedia = project.image || project.video;
  return (
    <article className={hasMedia ? 'project has-media' : 'project'}>
      <div>
        <h3>
          {project.href ? <a href={project.href}>{project.title}</a> : project.title}
        </h3>
        <p className="meta">{project.meta}</p>
        <p>{project.summary}</p>
        <p className="stack">{project.stack}</p>
      </div>
      {project.image && <img src={project.image} alt={project.alt} loading="lazy" />}
      {project.video && (
        <video src={project.video} poster={project.poster} muted loop controls playsInline preload="none" aria-label={project.alt} />
      )}
    </article>
  );
}

function App() {
  return (
    <>
      <header className="intro">
        <div>
          <h1>Josh Roe</h1>
          <p>
            Electrical and Computer Engineering student at UC Berkeley, working on machine learning, computer vision, and embedded systems.
          </p>
          <p className="links">
            <a href="mailto:joshroe@berkeley.edu">joshroe@berkeley.edu</a>
            <a href="https://www.linkedin.com/in/josh-roe/">LinkedIn</a>
            <a href={GITHUB}>GitHub</a>
          </p>
        </div>
        <img src="/images/photo.jpg" alt="Josh Roe" width="132" height="132" />
      </header>

      <main>
        <section>
          <h2>Projects</h2>
          {projects.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </section>

        <section>
          <h2>Other projects</h2>
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
          <h2>Experience</h2>
          {experience.map((item) => (
            <article className="job" key={item.org}>
              <div className="job-head">
                <h3>
                  {item.role}, {item.href ? <a href={item.href}>{item.org}</a> : item.org}
                </h3>
                <span className="meta">{item.period}</span>
              </div>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          <article className="job">
            <div className="job-head">
              <h3>B.S. Electrical and Computer Engineering, UC Berkeley</h3>
              <span className="meta">Expected May 2029</span>
            </div>
          </article>
        </section>

        <section>
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </>
  );
}

export default App;
