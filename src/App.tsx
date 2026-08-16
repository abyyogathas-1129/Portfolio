import { useMemo, useState } from 'react'
import './App.css'

type ProjectCategory = 'All' | 'Full-Stack' | 'C++' | 'Java'

type Project = {
  category: Exclude<ProjectCategory, 'All'>
  visual: string
  mark: string
  visualTitle: string
  visualMeta: string
  stack: string
  title: string
  description: string
  contribution: string
  href?: string
}

const projects: Project[] = [
  {
    category: 'Full-Stack',
    visual: 'task-visual',
    mark: 'FULL-STACK / PRODUCTIVITY',
    visualTitle: 'Plan. Assign. Deliver.',
    visualMeta: 'APR 2026 — JUL 2026',
    stack: 'FULL-STACK · DATABASE · BACK-END',
    title: 'Task Management System',
    description: 'A collaborative task-management application for personal productivity, team coordination, and structured project workflows.',
    contribution: 'Designed the database structure and back-end logic for organizing and managing tasks, projects, and collaboration data.',
    href: 'https://github.com/abyyogathas-1129/task-management-system',
  },
  {
    category: 'C++',
    visual: 'ship-visual',
    mark: 'C++ / MULTIPLAYER',
    visualTitle: 'ShipQuest',
    visualMeta: 'SCORE · LIVES · OBSTACLES',
    stack: 'C++ · DATA STRUCTURES · SORTING',
    title: 'ShipQuest — Multiplayer Mini-Game',
    description: 'A console-based multiplayer game with player controls, scoring, lives, and obstacle logic.',
    contribution: 'Implemented custom data structures and sorting algorithms to support real-time score tracking and core gameplay logic.',
  },
  {
    category: 'Java',
    visual: 'event-visual',
    mark: 'JAVA / MYSQL',
    visualTitle: 'Events, organised.',
    visualMeta: 'OOP · DAO · SWING',
    stack: 'JAVA · MYSQL · SWING · DAO',
    title: 'Event Management System',
    description: 'A role-based event and ticket-booking system built with Java, OOP principles, and persistent MySQL storage.',
    contribution: 'Built the Swing interface and data layer for venue capacity, ticketing, dynamic pricing, and database-backed records.',
  },
]

const skills = [
  { eyebrow: 'PROGRAMMING', title: 'Build with strong foundations', text: 'Python · Java · C++', color: 'pink' },
  { eyebrow: 'DATA & DATABASES', title: 'Work confidently with data', text: 'SQL · MySQL · DBMS fundamentals', color: 'cyan' },
  { eyebrow: 'DEVELOPMENT', title: 'Turn ideas into software', text: 'Full-Stack · Back-End · Mobile Applications', color: 'violet' },
]

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Journey', 'Contact']

function App() {
  const [filter, setFilter] = useState<ProjectCategory>('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const cvUrl = `${import.meta.env.BASE_URL}assets/kirushnavy-yogathas-resume.pdf`
  const visibleProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter])

  const goTo = (id: string) => {
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <button className="wordmark" onClick={() => goTo('home')} aria-label="Go to home">Kirushnavy<span>.</span></button>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="nav-links">
            {navItems.map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}
          </div>
          <div className="nav-actions">
            <a className="button button-outline nav-cta" href={cvUrl} target="_blank" rel="noreferrer">View CV</a>
            <a className="button button-primary nav-cta nav-download" href={cvUrl} download>↓ Download CV</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-main">
            <div className="hero-copy">
              <div className="availability"><span /> OPEN TO INTERNSHIPS &amp; COLLABORATION</div>
              <h1>Designing useful<br />intelligence,<br /><span className="gradient-text">building impact.</span></h1>
              <p className="hero-role">Kirushnavy Yogathas · Information Technology Undergraduate</p>
              <p className="hero-intro">Exploring Data Science, Artificial Intelligence, Machine Learning, and full-stack development while building practical software that creates real-world value.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => goTo('projects')}>&lt;/&gt; View selected work</button>
                <a className="button button-outline" href={cvUrl} target="_blank" rel="noreferrer">▱ View CV</a>
                <button className="button button-quiet" onClick={() => goTo('about')}>Meet Kirushnavy</button>
              </div>
              <div className="social-row">
                <a href="https://github.com/abyyogathas-1129" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/kirushnavy-yogathas-81ba1b348" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="mailto:Abyyogathas@gmail.com">Email ↗</a>
                <span>Mullaitivu, Sri Lanka</span>
              </div>
            </div>

            <div className="portrait-orbit" aria-label="Portrait of Kirushnavy Yogathas">
              <img className="orbit orbit-cyan" src={`${import.meta.env.BASE_URL}assets/orbit-cyan.svg`} alt="" />
              <img className="orbit orbit-berry" src={`${import.meta.env.BASE_URL}assets/orbit-berry.svg`} alt="" />
              <img className="orbit orbit-violet" src={`${import.meta.env.BASE_URL}assets/orbit-violet.svg`} alt="" />
              <div className="portrait"><img className="portrait-photo" src={`${import.meta.env.BASE_URL}assets/portrait.png`} alt="Kirushnavy Yogathas" /></div>
              <span className="orbit-tag tag-ai">AI</span><span className="orbit-tag tag-data">DATA</span><span className="orbit-tag tag-code">&lt;/&gt;</span>
            </div>
          </div>

          <div className="hero-dashboard" aria-label="Portfolio highlights">
            <div className="stat-card"><span className="stat-icon">↗</span><strong>3+</strong><p>Featured projects</p></div>
            <div className="stat-card"><span className="stat-icon">◇</span><strong>3</strong><p>Certifications</p></div>
            <div className="stat-card"><span className="stat-icon">&lt;/&gt;</span><strong>5+</strong><p>Core technologies</p></div>
            <div className="stat-card open-stat"><span className="stat-icon">◎</span><strong>Open</strong><p>Internships &amp; collaboration</p></div>
            <div className="tech-stack"><span className="tech-title">Tech Stack</span><div className="tech-list">{['Python', 'Java', 'C++', 'SQL', 'MySQL', 'More'].map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}</div></div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-story">
            <p className="eyebrow pink">ABOUT KIRUSHNAVY</p>
            <h2>Curious by nature.<br />Practical by choice.</h2>
            <p className="body-copy">I’m an Information Technology undergraduate at the University of Kelaniya with hands-on experience across full-stack development, database systems, and applied programming. I’m especially interested in Data Science, AI, and Machine Learning, and I enjoy turning technical ideas into clear, useful products.</p>
            <div className="goal-note"><span>CAREER DIRECTION</span><strong>Data Science · AI · Machine Learning</strong><p>Seeking an internship where data-handling, problem-solving, and software-development skills can create impact.</p></div>
          </div>
          <div className="about-cards">
            <article className="info-card cyan"><p className="eyebrow">EDUCATION</p><h3>BSc (Hons) in Information Technology</h3><p>University of Kelaniya · Reading · 2025–2028</p></article>
            <article className="info-card pink"><p className="eyebrow">FOCUS</p><h3>Data + intelligent systems</h3><p>Data Science · Artificial Intelligence · Machine Learning</p></article>
            <article className="info-card green"><p className="eyebrow">WORKING STYLE</p><h3>Collaborative and solution-focused</h3><p>Communication · Teamwork · Problem Solving · Time Management · Leadership</p></article>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-heading">
            <div><p className="eyebrow pink">SELECTED WORK</p><h2>Projects that show<br />practical learning.</h2></div>
            <p className="body-copy">Selected academic and personal work from my CV, spanning full-stack development, C++, Java, and database design.</p>
          </div>
          <div className="filters" aria-label="Filter projects">
            {(['All', 'Full-Stack', 'C++', 'Java'] as ProjectCategory[]).map((category) => <button key={category} className={filter === category ? 'active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => {
              const content = <><div className={`project-preview ${project.visual}`} role="img" aria-label={`${project.title} visual`}><div className="visual-topline"><span>{project.mark}</span><i /></div><strong>{project.visualTitle}</strong><small>{project.visualMeta}</small></div><p className="project-stack">{project.stack}</p><h3>{project.title}</h3><p>{project.description}</p><p className="contribution">{project.contribution}</p><span>{project.href ? 'View GitHub repository →' : 'Project featured in CV'}</span></>
              return project.href ? <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>{content}</a> : <article className="project-card" key={project.title}>{content}</article>
            })}
          </div>
        </section>

        <section className="section skills" id="skills">
          <p className="eyebrow cyan">SKILLS &amp; CAPABILITIES</p><h2>A focused technical foundation.</h2>
          <div className="skill-grid">{skills.map((skill) => <article className={`skill-card ${skill.color}`} key={skill.title}><p className="eyebrow">{skill.eyebrow}</p><h3>{skill.title}</h3><p>{skill.text}</p></article>)}</div>
          <div className="skill-groups" aria-label="Skills by category">
            <div><span>PROGRAMMING</span><p>Python · Java · C++</p></div>
            <div><span>DATA</span><p>SQL · MySQL · DBMS</p></div>
            <div><span>DEVELOPMENT</span><p>Full-Stack · Back-End · Mobile</p></div>
            <div><span>INTERESTS</span><p>Data Science · AI · ML</p></div>
            <div><span>SOFT SKILLS</span><p>Communication · Teamwork · Leadership</p></div>
          </div>
        </section>

        <section className="section journey" id="journey">
          <div className="section-heading journey-heading"><div><p className="eyebrow pink">EDUCATION &amp; CREDENTIALS</p><h2>The path behind the work.</h2></div><p className="body-copy">Academic learning supported by industry-focused coursework in Python, data science, AI, and SQL.</p></div>
          <div className="journey-grid">
            <article className="journey-card cyan"><p className="eyebrow">EDUCATION</p><h3>University of Kelaniya</h3><p>BSc (Hons) in Information Technology — Reading</p><ul><li>Study period: 2025–2028</li><li>Focus: software development, data, AI, and machine learning</li><li>Based in Sri Lanka</li></ul></article>
            <article className="journey-card pink"><p className="eyebrow">CERTIFICATIONS</p><h3>Industry-focused learning</h3><ul><li>Python for Data Science, AI &amp; Development — IBM · Aug 2026</li><li>Databases and SQL for Data Science with Python — IBM · Jun 2026</li><li>Generative AI Chatbot Bootcamp — DevTown</li></ul></article>
            <article className="journey-card violet"><p className="eyebrow">LANGUAGES</p><h3>Communicating across communities</h3><ul><li>Tamil — Native</li><li>English — Professional Working Proficiency</li><li>Sinhala — Moderate Proficiency</li></ul></article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-copy"><p className="eyebrow pink">LET&apos;S BUILD SOMETHING USEFUL</p><h2>Have an internship or collaboration in mind?</h2><p className="body-copy">I’m interested in opportunities around Data Science, Artificial Intelligence, Machine Learning, and software development.</p><div className="contact-actions"><a className="button button-primary" href="mailto:Abyyogathas@gmail.com">Email Kirushnavy</a><a className="button button-outline" href={cvUrl} target="_blank" rel="noreferrer">View CV</a></div></div>
          <div className="contact-card"><p className="eyebrow cyan">CONTACT</p><a href="mailto:Abyyogathas@gmail.com">Abyyogathas@gmail.com ↗</a><a href="https://github.com/abyyogathas-1129" target="_blank" rel="noreferrer">github.com/abyyogathas-1129 ↗</a><a href="https://www.linkedin.com/in/kirushnavy-yogathas-81ba1b348" target="_blank" rel="noreferrer">LinkedIn profile ↗</a><span>Mullaitivu, Sri Lanka</span></div>
        </section>
      </main>

      <footer><div><strong>Kirushnavy<span>.</span></strong><p>Learning with purpose. Building for impact. © 2026</p></div><div className="footer-links">{navItems.map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}<button onClick={() => goTo('home')}>↑ Back to top</button></div></footer>
    </div>
  )
}

export default App
