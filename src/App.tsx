import './App.css'

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Journey', 'Contact']

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Zm2 0 6 4.5 6-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 18c-4.5 1.5-4.5-2.5-6-3M15 21v-2.5A3.5 3.5 0 0 0 13 15.2c3.3-.4 5.2-1.6 5.2-7.2A5.5 5.5 0 0 0 17.2 4a5.3 5.3 0 0 0-.1-1.1A4.6 4.6 0 0 0 16 2.9a4.9 4.9 0 0 0-2.8 1.1A5.3 5.3 0 0 0 9 4.1a4.8 4.8 0 0 0-1.1.1A4.5 4.5 0 0 0 7 2.9a5.2 5.2 0 0 0-1.1 1.1A5.5 5.5 0 0 0 6.1 7.2c0 5.6 1.9 6.8 5.2 7.2A3.5 3.5 0 0 0 9 18.5V21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 9v8M7 6.5v.1M12 17v-5c0-1.5 1.5-2.5 3-2.5s2.5 1 2.5 2.5v5M12 9v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20S6 15.5 6 10.5A6 6 0 0 1 18 10.5C18 15.5 12 20 12 20Zm0-7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.4s-7.3-4.5-9-9.2C1.9 8.5 3.4 4.7 7 4.7c2.1 0 3.1 1.2 3.6 2.1.5-.9 1.5-2.1 3.6-2.1 3.6 0 5.1 3.8 4 6.5-1.7 4.7-9 9.2-9 9.2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  )
}

function FlashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" fill="currentColor" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5 18.5 6v5.5c0 3.6-2.2 6.8-6.5 9-4.3-2.2-6.5-5.4-6.5-9V6L12 3.5Zm-2.3 7.5 1.8 1.8 3.5-3.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 0c2.8 2.7 4.2 5.8 4.2 8.5S14.8 17.8 12 20.5M12 3.5C9.2 6.2 7.8 9.3 7.8 12S9.2 17.8 12 20.5M4 12h16M12 3.5V20.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <nav className="main-nav" aria-label="Main navigation">
          <div className="brand">Kirushnavy.</div>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href="#" className={item === 'Contact' ? 'active' : ''}>
                {item}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a href="/assets/kirushnavy-yogathas-resume.pdf" className="nav-button light" target="_blank" rel="noreferrer">
              View CV <ArrowIcon />
            </a>
            <a href="/assets/kirushnavy-yogathas-resume.pdf" className="nav-button accent" download>
              Download CV <span className="download-mark">↓</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="hero-layout">
        <section className="hero-copy">
          <p className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</p>
          <h1>
            Have a thoughtful
            <span className="gradient-text"> opportunity?</span>
          </h1>

          <p className="lead">
            I&apos;m open to internships, junior collaborations, mentorship, and conversations about
            data, AI, or useful software.
          </p>

          <div className="profile-list">
            <div className="profile-row">
              <div className="icon-box github-box">
                <GitHubIcon />
              </div>
              <div className="profile-meta">
                <div className="meta-label">
                  <span>GitHub</span>
                  <ArrowIcon />
                </div>
                <small>github.com/abyyogathas-1129</small>
              </div>
            </div>

            <div className="profile-row">
              <div className="icon-box linkedin-box">
                <LinkedInIcon />
              </div>
              <div className="profile-meta">
                <div className="meta-label">
                  <span>LinkedIn</span>
                  <ArrowIcon />
                </div>
                <small>linkedin.com/in/kirushnavy-yogathas-81ba1b348</small>
              </div>
            </div>

            <div className="profile-row location-row">
              <div className="icon-box pin-box">
                <PinIcon />
              </div>
              <div className="profile-meta">
                <strong>Mullaitivu, Sri Lanka</strong>
                <small>Available for remote opportunities</small>
              </div>
            </div>

          </div>
        </section>

        <aside className="contact-card">
          <div className="contact-card-inner">
            <div className="plane-badge">
              <ArrowIcon />
            </div>

            <h2>Start a conversation</h2>
            <p>
              The fastest way to reach me is directly by email — I check it regularly and reply
              personally.
            </p>

            <a className="email-button" href="mailto:abyyogathas@gmail.com">
              <div className="email-icon">
                <EnvelopeIcon />
              </div>
              <span>
                <span className="button-label">Email me</span>
                <span className="button-address">abyyogathas@gmail.com</span>
              </span>
              <span className="go-arrow">
                <ArrowIcon />
              </span>
            </a>

            <div className="divider">OR CONNECT VIA</div>

            <div className="connect-row">
              <a href="https://www.linkedin.com/in/kirushnavy-yogathas-81ba1b348" className="connect-chip linkedin-chip" target="_blank" rel="noreferrer">
                <span className="chip-icon">in</span>
                <span>LinkedIn</span>
                <ArrowIcon />
              </a>

              <a href="https://github.com/abyyogathas-1129" className="connect-chip github-chip" target="_blank" rel="noreferrer">
                <span className="chip-icon"><GitHubIcon /></span>
                <span>GitHub</span>
                <ArrowIcon />
              </a>
            </div>

            <div className="metrics-row">
              <div className="metric-item">
                <div className="metric-icon flash-icon"><FlashIcon /></div>
                <strong>Quick Response</strong>
                <span>Usually within 24 hours</span>
              </div>

              <div className="metric-item">
                <div className="metric-icon shield-icon"><ShieldIcon /></div>
                <strong>Professional</strong>
                <span>Let&apos;s build something great</span>
              </div>

              <div className="metric-item">
                <div className="metric-icon globe-icon"><GlobeIcon /></div>
                <strong>Open to Remote</strong>
                <span>Working across time zones</span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <div className="footer-line">
        <span className="heart-icon">
          <HeartIcon />
        </span>
        Let&apos;s build something useful together.
      </div>
    </div>
  )
}

export default App
