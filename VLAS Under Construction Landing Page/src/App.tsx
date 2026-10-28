const MailIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" />
  </svg>
)

export default function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <img
          className="brand-logo"
          src="/assets/vlas-logo-dark.png"
          alt="VLAS — Veterans Legal Aid Society"
        />
        <p className="header-note">Serving those who served</p>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-mark" aria-hidden="true" />
            Veterans Legal Aid Society
          </div>

          <h1 id="page-title">
            Website under
            <br />
            <span>construction.</span>
          </h1>

          <p className="brand-message">Still serving. Building forward.</p>

          <p className="intro">
            We’re creating a better online home for veterans and their families
            to find trusted legal support, practical resources, and a stronger
            path forward.
          </p>

          <div className="contact-block">
            <p>Need to reach us in the meantime?</p>
            <a href="mailto:info@vlas.org">
              <MailIcon />
              info@vlas.org
            </a>
          </div>
        </div>

        <div className="hero-seal" aria-hidden="true">
          <div className="seal-stars">★ ★ ★</div>
          <div className="seal-rule" />
          <p>Honor</p>
          <p>Service</p>
          <p>Justice</p>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Veterans Legal Aid Society</p>
        <p>Legal support with dignity, care, and purpose.</p>
      </footer>
    </main>
  )
}
