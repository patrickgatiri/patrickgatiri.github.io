const links = [
  {
    label: 'GitHub',
    detail: 'code & experiments',
    href: 'https://github.com/patrickgatiri',
  },
  {
    label: 'LinkedIn',
    detail: 'work & experience',
    href: 'https://www.linkedin.com/in/patrick-gatiri',
  },
  {
    label: 'Instagram',
    detail: 'photos & life',
    href: 'https://instagram.com/patrickgatiri',
  },
  {
    label: 'Email',
    detail: 'patrickgatiri@gmail.com',
    href: 'mailto:patrickgatiri@gmail.com',
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="profile-card" aria-labelledby="profile-name">
        <header className="card-header">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Nairobi, Kenya
          </p>
          <span className="monogram" aria-hidden="true">
            PG
          </span>
        </header>

        <div className="intro">
          <p className="kicker">Hello, I&apos;m</p>
          <h1 id="profile-name">Patrick Gatiri.</h1>
          <p className="role">Platform Engineer / DevSecOps Engineer</p>
          <p className="bio">
            I build reliable platforms, secure delivery systems, and the quiet
            infrastructure that helps teams ship with confidence.
          </p>
        </div>

        <nav className="links" aria-label="Patrick's profiles">
          {links.map((link) => (
            <a
              className="profile-link"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-label">{link.label}</span>
              <span className="link-detail">{link.detail}</span>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </nav>

        <footer className="card-footer">
          <span>patrickgatiri</span>
          <span aria-hidden="true">//</span>
          <span>2026</span>
        </footer>
      </section>
    </main>
  );
}
