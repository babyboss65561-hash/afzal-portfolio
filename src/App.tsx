import './App.css';

const skills = [
  { icon: '▶', name: 'Video Editing' },
  { icon: '◈', name: 'Blender' },
  { icon: '▣', name: 'UI/UX Design' },
  { icon: '⌘', name: 'VS Code' },
  { icon: '✎', name: 'Graphic Design' },
];

const projects = [
  { name: 'Poster Design', type: 'Graphic Design', style: 'car' },
  { name: 'House Design', type: '3D Modelling', style: 'house' },
  { name: 'Web Design', type: 'Digital Product', style: 'web' },
  { name: 'Creative Work', type: 'Visual Design', style: 'creative' },
];

function App() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">♟</span>
          <span>
            <strong>AFZAL</strong>
            <small>CREATIVE DESIGNER</small>
          </span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Hire Me ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-decoration flower-left">✿</div>
        <div className="hero-decoration flower-right">✿</div>

        <div className="hero-content">
          <p className="eyebrow">HELLO, I'M</p>
          <h1>AFZAL</h1>
          <h2>
            Creative Designer and
            <br />
            Future Developer
          </h2>

          <p className="hero-description">
            I bring ideas to life through creative design, digital experiences
            and visual storytelling. Always learning, always creating.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work ↗
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>

        <div className="id-card">
          <div className="id-clip"></div>
          <div className="id-photo">
            <img src="/images/afzal.jpg" alt="Afzal portrait" />
          </div>
          <p>CREATIVE DESIGNER</p>
        </div>

        <div className="social-links">
          <a href="#" aria-label="Instagram" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="0.8"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          <a href="#" aria-label="YouTube" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2.5" y="5" width="19" height="14" rx="5" />
              <path d="M10 9l5 3-5 3z" />
            </svg>
          </a>

          <a href="#" aria-label="GitHub" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 15 3a13.3 13.3 0 0 0-7 0C5.5 1.2 4.3 1.5 4.3 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 8 18v4" />
            </svg>
          </a>

          <a href="#" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v11M4 4v.1M9 20v-6a4 4 0 0 1 8 0v6M9 9v11" />
            </svg>
            <span className="linkedin-dot">in</span>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-padding" id="about">
        <div className="about-text">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About Me</h2>

          <p>
            I'm a passionate creative designer who loves bringing ideas to life
            through design and technology.
          </p>
          <p>
            From graphic design and 3D modelling to UI/UX design, I enjoy
            exploring different creative fields and building meaningful digital
            experiences.
          </p>
          <p>
            My journey is all about learning, experimenting and turning
            imagination into reality.
          </p>

          <div className="about-facts">
            <div>
              <strong>✦</strong>
              <span>
                Creative
                <br />
                Thinking
              </span>
            </div>
            <div>
              <strong>✦</strong>
              <span>
                Problem
                <br />
                Solving
              </span>
            </div>
            <div>
              <strong>✦</strong>
              <span>
                Always
                <br />
                Learning
              </span>
            </div>
          </div>

          <a href="#contact" className="primary-button">
            Download Resume ↗
          </a>
        </div>

        <div className="about-image">
          <span>YOUR WORKSPACE IMAGE</span>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section section-padding" id="skills">
        <p className="section-label">WHAT I CAN DO</p>
        <h2>My Skills</h2>
        <p className="section-description">
          Creative tools I use to bring my imagination to life.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section section-padding" id="projects">
        <p className="section-label">MY CREATIVE WORK</p>
        <h2>My Projects</h2>
        <p className="section-description">
          A collection of things I've created.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a href="#contact" className="project-card" key={project.name}>
              <div className={`project-image ${project.style}`}>
                <span>PROJECT 0{index + 1}</span>
              </div>
              <div className="project-info">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-padding" id="contact">
        <div className="contact-info">
          <p className="section-label">LET'S WORK TOGETHER</p>
          <h2>
            Make A Project
            <br />
            With Me.
          </h2>
          <p>
            Have an idea? Let's turn it into something meaningful. Feel free to
            get in touch.
          </p>
          <p className="contact-decoration">✿</p>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const subject = encodeURIComponent(String(data.get('name')));
            const body = encodeURIComponent(
              String(data.get('message')) +
                '\nEmail: ' +
                String(data.get('email'))
            );
            window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
          }}
        >
          <input name="name" placeholder="YOUR NAME" required />
          <input name="email" type="email" placeholder="YOUR EMAIL" required />
          <textarea name="message" placeholder="YOUR MESSAGE" required />
          <button type="submit">Send Message ↗</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 AFZAL. MADE WITH CREATIVITY.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;
