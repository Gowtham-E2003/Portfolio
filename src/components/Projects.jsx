const projects = [
  {
    title: 'Neurostore – Full-Stack E-Commerce Platform',
    role: 'Full-Stack Developer',
    category: 'Full-Stack E-Commerce · Cloud Deployment',
    tagline: 'End-to-end e-commerce platform designed for product catalog navigation and order workflows.',
    description:
      'Engineered a complete online storefront with modular React.js frontend architecture and secure Python/Flask microservices, deployed to Microsoft Azure for high-availability production uptime.',
    tech: ['React.js', 'Python', 'Flask', 'RESTful APIs', 'Microsoft Azure', 'Modern CSS'],
    highlights: [
      'Built an end-to-end e-commerce platform designed for product catalog navigation and order workflows.',
      'Implemented a modular, responsive frontend utilizing React.js and modern CSS standards.',
      'Developed secure backend routes, API communication, and data handling using Python and Flask.',
      'Configured application services and database deployment pipelines on Microsoft Azure for high uptime.',
    ],
    live: 'https://neurostore.in/',
    domain: 'neurostore.in',
  },
  {
    title: 'Jubilant – Dynamic Web Store',
    role: 'Full-Stack Developer',
    category: 'Frontend & Systems · Real-Time Web Store',
    tagline: 'Interactive e-commerce web application featuring real-time product search, filtering, and cart management.',
    description:
      'Interactive catalog and cart web application optimized for fast client-side state resolution, responsive performance across desktop and mobile browsers, and real-time inventory synchronization.',
    tech: ['React.js', 'JavaScript', 'Component Architecture', 'RESTful APIs', 'Responsive Web Design'],
    highlights: [
      'Developed an interactive e-commerce web application featuring real-time product search, filtering, and cart management.',
      'Created a cross-platform responsive design optimized for performance across desktop and mobile browsers.',
      'Structured client-side state handling and RESTful endpoints for real-time inventory updates.',
      'Ensured sub-second page rendering and smooth user navigation across devices.',
    ],
    live: 'https://jubilantech.com/',
    domain: 'jubilantech.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: '#F5F2EC' }}>
      <div className="container">
        <div className="section-label">
          <span className="num">04</span>
          <span className="line" />
          <span className="tag">Technical Projects</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <h2 className="section-heading">Featured Technical Projects</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, maxWidth: 480, marginTop: 8 }}>
              Production web applications engineered with React.js frontends, Python backend services, and Azure cloud hosting.
            </p>
          </div>
          <a
            href="https://github.com/rkmessigb"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 14, color: 'var(--amber)', fontWeight: 600, textDecoration: 'none' }}
          >
            Explore GitHub Repositories →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: 28 }}>
          {projects.map((proj, i) => (
            <div key={i} className="card" style={{ padding: 36, display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 16,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'var(--amber)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: 6,
                    }}
                  >
                    {proj.category} · {proj.role}
                  </div>
                  <h3 style={{ fontSize: 21, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C9973E')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      title={`Visit ${proj.domain}`}
                    >
                      {proj.title}
                    </a>
                  </h3>
                </div>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 14px',
                    background: 'var(--navy)',
                    color: 'white',
                    borderRadius: 10,
                    fontSize: 12,
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: 'var(--shadow-sm)',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#C9973E';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--navy)';
                    e.currentTarget.style.transform = 'none';
                  }}
                  title={`Visit live website: ${proj.live}`}
                  aria-label={`Visit live website at ${proj.live}`}
                >
                  <span>{proj.domain}</span>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>↗</span>
                </a>
              </div>

              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: 8,
                }}
              >
                {proj.tagline}
              </p>

              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                {proj.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {proj.tech.map((t) => (
                  <span key={t} className="pill" style={{ fontSize: 12 }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  Technical Accomplishments
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none' }}>
                  {proj.highlights.map((h, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#22C55E', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end' }}>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: 'var(--amber)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    <span>Launch {proj.domain}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
