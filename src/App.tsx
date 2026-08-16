import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type ProjectCategory = 'All' | 'AI' | 'Mobile' | 'Learning'

const projects = [
  { category: 'AI', visual: 'study-visual', mark: 'STUDY / AI', visualTitle: 'Ask. Learn. Remember.', visualMeta: 'LLAMA 3.3 · CHAT HISTORY', stack: 'PYTHON · FASTAPI · MONGODB · LANGCHAIN · GROQ', title: 'Academic Study Assistant', description: 'A study-only conversational API that gives structured explanations and stores user and assistant history in MongoDB.', contribution: 'Individual contribution: FastAPI endpoints, Groq-backed LangChain prompting, MongoDB history, CORS configuration, and request validation.', href: 'https://github.com/abyyogathas-1129/diet_chatbot' },
  { category: 'Mobile', visual: 'weather-visual', mark: 'ANDROID / WEATHER', visualTitle: '24°', visualMeta: 'HUMIDITY · WIND', stack: 'KOTLIN · ANDROID XML · MATERIAL UI', title: 'Weather App', description: 'A native Android interface prototype with city search, weather-result cards, temperature, humidity, and wind-speed placeholders.', contribution: 'Individual contribution: responsive XML layout, Kotlin activity setup, custom drawables, colour system, and Material interface structure.', href: 'https://github.com/abyyogathas-1129/weather-app' },
  { category: 'Learning', visual: 'git-visual', mark: 'GIT / PRACTICE', visualTitle: 'main → feature', visualMeta: 'COMMIT · BRANCH · MERGE', stack: 'PYTHON · GIT · GITHUB', title: 'Git & GitHub Assignment', description: 'An academic version-control exercise with a small Python arithmetic program and repository conflict practice.', contribution: 'Individual contribution: repository setup, Python addition and subtraction updates, commits, and conflict-resolution practice.', href: 'https://github.com/abyyogathas-1129/inte21323-git-assignment' },
]

const skills = [
  { eyebrow: 'FOUNDATION', title: 'Software craft', text: 'Git · GitHub · APIs · problem decomposition', color: 'pink' },
  { eyebrow: 'BUILDING NOW', title: 'Data + intelligent systems', text: 'Python · machine learning · LangChain · Groq', color: 'cyan' },
  { eyebrow: 'MOBILE PROOF', title: 'Native development', text: 'Kotlin · Android · practical app structure', color: 'violet' },
]

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Journey', 'Contact']

function App() {
  const [filter, setFilter] = useState<ProjectCategory>('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const visibleProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter])

  const goTo = (id: string) => {
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <button className="wordmark" onClick={() => goTo('home')} aria-label="Go to home">Kirushnavy.</button>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="nav-links">
            {navItems.map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}
          </div>
          <a className="button button-primary nav-cta nav-download" href={`${import.meta.env.BASE_URL}assets/kirushnavy-yogathas-resume.pdf`} download>Download CV</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability"><span /> OPEN TO INTERNSHIPS &amp; COLLABORATION</div>
            <h1>Designing useful<br />intelligence.</h1>
            <p className="hero-role">Kirushnavy Yogathas&nbsp; · &nbsp;IT Undergraduate</p>
            <p className="hero-intro">Exploring data science, artificial intelligence, Python, and machine learning—while building practical software that helps people learn and decide.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => goTo('projects')}>View selected work</button>
              <a className="button button-outline" href={`${import.meta.env.BASE_URL}assets/kirushnavy-yogathas-resume.pdf`} target="_blank" rel="noreferrer">View CV</a>
              <button className="button button-outline" onClick={() => goTo('about')}>Meet Kirushnavy</button>
            </div>
            <div className="social-row">
              <a href="https://github.com/abyyogathas-1129" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/kirushnavy-yogathas-81ba1b348" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <span>Mullaitivu, Sri Lanka</span>
            </div>
          </div>

          <div className="portrait-orbit" aria-label="Kirushnavy portrait placeholder">
            <img className="orbit orbit-cyan" src={`${import.meta.env.BASE_URL}assets/orbit-cyan.svg`} alt="" />
            <img className="orbit orbit-berry" src={`${import.meta.env.BASE_URL}assets/orbit-berry.svg`} alt="" />
            <img className="orbit orbit-violet" src={`${import.meta.env.BASE_URL}assets/orbit-violet.svg`} alt="" />
            <div className="portrait"><img className="portrait-photo" src={`${import.meta.env.BASE_URL}assets/portrait.png`} alt="Kirushnavy Yogathas" /></div>
            <span className="orbit-tag tag-ai">AI</span><span className="orbit-tag tag-data">DATA</span><span className="orbit-tag tag-python">PYTHON</span>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-story">
            <p className="eyebrow pink">ABOUT KIRUSHNAVY</p>
            <h2>Curious by nature.<br />Practical by choice.</h2>
            <p className="body-copy">I’m an IT undergraduate learning how data, intelligent systems, and thoughtful software can solve useful everyday problems. I value clarity, steady experimentation, and work that can be understood—not just demonstrated.</p>
            <div className="goal-note"><span>CAREER GOAL</span><strong>Build impactful software products.</strong><p>Interests: data science, artificial intelligence, machine learning, automation, and useful software.</p></div>
          </div>
          <div className="about-cards">
            <article className="info-card cyan"><p className="eyebrow">LEARNING NOW</p><h3>Data science + machine learning</h3><p>Python workflows, model fundamentals, and responsible use of AI.</p></article>
            <article className="info-card pink"><p className="eyebrow">BUILDING WITH</p><h3>FastAPI + Kotlin</h3><p>Small, practical APIs and native applications that turn learning into proof.</p></article>
            <article className="info-card green"><p className="eyebrow">BASED IN</p><h3>Mullaitivu, Sri Lanka</h3><p>Open to internships, collaborations, and thoughtful feedback.</p></article>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-heading">
            <div><p className="eyebrow pink">SELECTED WORK</p><h2>Small projects.<br />Clear learning signals.</h2></div>
            <p className="body-copy">Each card states what is verified in the repository, what was learned, and what still needs client-supplied media.</p>
          </div>
          <div className="filters" aria-label="Filter projects">
            {(['All', 'AI', 'Mobile', 'Learning'] as ProjectCategory[]).map((category) => <button key={category} className={filter === category ? 'active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <div className={`project-preview ${project.visual}`} role="img" aria-label={`${project.title} visual label`}><div className="visual-topline"><span>{project.mark}</span><i /></div><strong>{project.visualTitle}</strong><small>{project.visualMeta}</small></div><p className="project-stack">{project.stack}</p><h3>{project.title}</h3><p>{project.description}</p><p className="contribution">{project.contribution}</p><span>View GitHub repository&nbsp; →</span>
              </a>
            ))}
          </div>
          <p className="proof-note">Repository evidence verified · Project images and live demos are client placeholders</p>
        </section>

        <section className="section skills" id="skills">
          <p className="eyebrow cyan">SKILLS &amp; LEARNING</p><h2>A learning stack, not a keyword cloud.</h2>
          <div className="skill-grid">
            {skills.map((skill) => <article className={`skill-card ${skill.color}`} key={skill.title}><p className="eyebrow">{skill.eyebrow}</p><h3>{skill.title}</h3><p>{skill.text}</p></article>)}
          </div>
          <p className="priority">Current priority → strengthen Python fundamentals, machine-learning thinking, and clear project documentation.</p>
          <div className="skill-groups" aria-label="Skills by category">
            <div><span>PROGRAMMING</span><p>Python · Kotlin</p></div>
            <div><span>FRAMEWORKS</span><p>FastAPI · LangChain</p></div>
            <div><span>DATABASES</span><p>MongoDB</p></div>
            <div><span>TOOLS</span><p>Git · GitHub · REST APIs</p></div>
            <div><span>SOFT SKILLS</span><p>Problem decomposition · documentation · steady experimentation</p></div>
          </div>
        </section>

        <section className="section journey" id="journey">
          <div className="section-heading journey-heading">
            <div><p className="eyebrow pink">EDUCATION &amp; EXPERIENCE</p><h2>The path behind the projects.</h2></div>
            <p className="body-copy">A transparent record of current learning, practical work, and professional readiness.</p>
          </div>
          <div className="journey-grid">
            <article className="journey-card cyan"><p className="eyebrow">EDUCATION</p><h3>Information Technology Undergraduate</h3><p>Higher-education programme focused on IT fundamentals and practical software development.</p><ul><li>University: details to be supplied</li><li>Expected graduation: details to be supplied</li><li>School education: details to be supplied</li><li>Relevant focus: data science, AI, Python, and machine learning</li></ul></article>
            <article className="journey-card pink"><p className="eyebrow">EXPERIENCE &amp; LEADERSHIP</p><h3>Building toward a first professional role</h3><p>Currently seeking internships and junior collaborations while developing independent academic and personal projects.</p><ul><li>Internships or employment: not supplied</li><li>Volunteer work: not supplied</li><li>Leadership or university clubs: not supplied</li><li>Current evidence: public repositories and project documentation</li></ul></article>
            <article className="journey-card violet"><p className="eyebrow">CERTIFICATIONS &amp; ACHIEVEMENTS</p><h3>Credentials ready to document</h3><p>This section is reserved for verified courses, workshops, competitions, hackathons, awards, and certificates.</p><ul><li>Certifications: not supplied</li><li>Workshops: not supplied</li><li>Competitions or hackathons: not supplied</li><li>Academic achievements: not supplied</li></ul></article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-copy">
            <p className="eyebrow pink">LET&apos;S BUILD SOMETHING USEFUL</p><h2>Have a thoughtful opportunity?</h2>
            <p className="body-copy">I’m open to internships, junior collaborations, mentorship, and conversations about data, AI, or useful software.</p>
            <div className="contact-links"><a href="https://github.com/abyyogathas-1129" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/kirushnavy-yogathas-81ba1b348" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Mullaitivu, Sri Lanka</span></div>
            <p className="client-note">EMAIL · Client to supply a public contact address</p>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <h3>Start a conversation</h3>
            <label><span>Name</span><input name="name" placeholder="Your name" required /></label>
            <label><span>Email</span><input name="email" type="email" placeholder="you@example.com" required /></label>
            <label><span>Message</span><textarea name="message" placeholder="Tell me about the opportunity…" required /></label>
            <button className="button button-primary" type="submit">Send message</button>
            {sent && <p className="form-status" role="status">Thanks — the form is ready to connect to your email service.</p>}
          </form>
        </section>
      </main>

      <footer><div><strong>Kirushnavy.</strong><p>Learning in public. Building with purpose. © 2026</p></div><div className="footer-links">{navItems.map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}<button onClick={() => goTo('home')}>↑ Back to top</button></div></footer>
    </div>
  )
}

export default App
