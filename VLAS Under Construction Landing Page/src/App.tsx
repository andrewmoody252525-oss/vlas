const introCopy =
  'We’re creating a better online home for veterans and their families to find trusted legal support, practical resources, and a stronger path forward.'

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

          <p className="intro" aria-label={introCopy}>
            {introCopy.split(' ').map((word, index) => (
              <span key={`${word}-${index}`} aria-hidden="true">
                {word}
              </span>
            ))}
          </p>
        </div>

        <div className="hero-seal" aria-hidden="true">
          <div className="seal-stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
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
