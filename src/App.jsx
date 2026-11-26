import { useEffect } from 'react'

const services = [
  {
    title: 'Product design',
    body: 'Clean, considered interfaces that feel obvious the first time someone opens them.',
  },
  {
    title: 'Web development',
    body: 'Fast, responsive websites and web apps — built to last, easy to maintain.',
  },
  {
    title: 'Mobile apps',
    body: 'Native-feeling iOS and Android apps, from the first screen to the store listing.',
  },
  {
    title: 'Ongoing care',
    body: 'Bug fixes, new features and quiet improvements, long after launch day.',
  },
]

const steps = [
  {
    n: '01',
    title: 'We talk',
    body: 'A short call about the idea. No jargon, no pressure — just what you want to build.',
  },
  {
    n: '02',
    title: 'We design',
    body: 'You see the product before it exists: screens, flow and feel, refined with you.',
  },
  {
    n: '03',
    title: 'We build',
    body: 'Clean code, real progress. Short demos, honest timelines, no surprises.',
  },
  {
    n: '04',
    title: 'We ship',
    body: 'Launched, measured and maintained. We stay as long as we are useful.',
  },
]

const checks = [
  { label: 'Build', value: 'Passing', tone: 'ok' },
  { label: 'Performance', value: '98', bar: 98 },
  { label: 'Accessibility', value: '100', bar: 100 },
  { label: 'Deploy', value: 'Live', tone: 'ok' },
]

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' }
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

function App() {
  useReveal()

  return (
    <>
      <header className="nav">
        <nav className="nav-inner container" aria-label="Main">
          <a className="wordmark" href="#top">
            SkachCorp
          </a>
          <div className="nav-right">
            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#approach">Approach</a>
              <a href="disconnect/">Disconnect</a>
              <a href="#contact">Contact</a>
            </div>
            <a className="pill" href="#contact">
              Reach out
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <p className="eyebrow">SkachCorp · Software studio</p>
          <h1>
            Software, engineered to feel <span className="accent">effortless.</span>
          </h1>
          <p className="hero-copy">
            We are a small independent studio that designs and builds websites, apps and tools for
            anyone with an idea — from the first sketch to the final deploy.
          </p>
          <div className="actions">
            <a className="button" href="#contact">
              Start a project
            </a>
            <a className="link" href="#services">
              See what we do <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="stage" data-reveal>
            <div className="glow" aria-hidden="true" />
            <div className="panel" aria-hidden="true">
              <div className="panel-top">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="panel-title">skachcorp — build</span>
              </div>
              <div className="panel-body">
                {checks.map((check) => (
                  <div className="panel-row" key={check.label}>
                    <span className="key">{check.label}</span>
                    {check.bar ? (
                      <span className="bar">
                        <i style={{ width: `${check.bar}%` }} />
                      </span>
                    ) : (
                      <span className="spacer" />
                    )}
                    <span className={check.tone === 'ok' ? 'value ok' : 'value'}>{check.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="band" id="services">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Services</p>
              <h2>Everything it takes to ship something good.</h2>
              <p className="section-copy">
                One team, start to finish. You talk to the people writing the code — no account
                managers, no handoffs.
              </p>
            </div>
            <div className="grid">
              {services.map((service) => (
                <article className="card" key={service.title} data-reveal>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark" id="approach">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow dim">Approach</p>
              <h2>From first message to shipped, in four steps.</h2>
            </div>
            <div className="steps">
              {steps.map((step) => (
                <div className="step" key={step.n} data-reveal>
                  <span className="step-n">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band for-anyone">
          <div className="container" data-reveal>
            <h2>Built for anyone with an idea.</h2>
            <p className="section-copy">
              A first website, a product launch, an internal tool nobody else would build. If it can
              be made, it can be made well.
            </p>
            <ul className="who">
              <li>Founders</li>
              <li>Small businesses</li>
              <li>Teams</li>
              <li>Agencies</li>
              <li>First-time builders</li>
            </ul>
          </div>
        </section>

        <section className="contact container" id="contact">
          <div data-reveal>
            <p className="eyebrow">Reach out</p>
            <h2 className="contact-title">
              Got an idea?
              <br />
              Let&rsquo;s make it real.
            </h2>
            <p className="section-copy contact-copy">
              Tell us what you have in mind — a sentence is enough. We will reply within one business
              day with honest thoughts and a clear next step.
            </p>
            <div className="actions contact-actions">
              <a className="button" href="mailto:martinskachkov@skachcorp.ca">
                martinskachkov@skachcorp.ca
              </a>
            </div>
            <p className="note">Based in Canada · Working anywhere · SkachCorp.ca</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} SkachCorp · SkachCorp.ca</span>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="mailto:martinskachkov@skachcorp.ca">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
