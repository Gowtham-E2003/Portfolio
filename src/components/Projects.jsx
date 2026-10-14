import React from 'react';
import { GithubIcon } from './Icons';

const projects = [
  {
    title: 'Creator Bridge – Mobile-First Creator Order Platform',
    role: 'Lead Frontend Engineer',
    category: 'Creator Commerce · Mobile-First Architecture',
    tagline: 'High-converting creator bridge landing app with dual dynamic views, instant lead magnet capture, and native Web Share.',
    description:
      'Engineered an ultra-fast creator web application optimized for in-app WebViews (Instagram & TikTok), featuring notch safe-area geometry, modular configuration-driven architecture, and seamless email subscription hooks.',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Web Share API', 'Lucide React', 'Vercel'],
    highlights: [
      'Sub-second load performance (~76 kB gzipped bundle) with zero heavy runtime overhead.',
      'Built dual dynamic view states: high-conversion VIP lead magnet opt-in and verified social directory.',
      'Mobile-first WebView enhancements including notch safe-area padding and 60fps micro-animations.',
      'Configuration-driven architecture (creator.js) enabling instantaneous copy and link updates.',
    ],
    live: 'https://creator-bridge-alpha.vercel.app',
    domain: 'creator-bridge-alpha.vercel.app',
    github: 'https://github.com/Gowtham-E2003/creator-bridge',
  },
  {
    title: 'FORGE-PC – PC Configuration & Compatibility Engine',
    role: 'Full-Stack Systems Engineer',
    category: 'Full-Stack Systems · Hardware Compatibility Engine',
    tagline: 'Interactive custom PC builder wizard with real-time hardware compatibility logic, TDP power calculations, and Supabase persistence.',
    description:
      'Architected an interactive PC assembly web application with automated socket validation, form factor clearance checks, dynamic watt-draw power calculations, and cloud-synced build persistence via Supabase.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    highlights: [
      'Real-time compatibility verification engine catching CPU/motherboard socket mismatches and power deficits.',
      'Dynamic wattage estimation and total pricing computation across all selected components.',
      'Cloud build persistence via Supabase database enabling saved builds, shared unique links, and catalog browsing.',
      'Multi-step interactive build wizard with modular categorization across CPU, GPU, RAM, Storage, and Cooler.',
    ],
    github: 'https://github.com/Gowtham-E2003/FORGE-PC',
    domain: 'github.com/Gowtham-E2003/FORGE-PC',
  },
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
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, maxWidth: 540, marginTop: 8, lineHeight: 1.6 }}>
              Production web applications, full-stack systems, and open-source repositories engineered with React.js, TypeScript, Python microservices, and cloud deployments.
            </p>
          </div>
          <a
            href="https://github.com/Gowtham-E2003"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14,
              color: 'var(--amber)',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 18px',
              borderRadius: 10,
              background: 'white',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--amber)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <GithubIcon style={{ width: 16, height: 16 }} />
            <span>Explore All Repositories on GitHub</span>
            <span>→</span>
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: 28 }}>
          {projects.map((proj, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: 36,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 16,
                background: '#FFFFFF',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 16,
                  gap: 12,
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
                      href={proj.live || proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C9973E')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      title={`Open ${proj.title}`}
                    >
                      {proj.title}
                    </a>
                  </h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '8px 12px',
                        background: '#F0EFEA',
                        color: 'var(--text-primary)',
                        borderRadius: 10,
                        fontSize: 12,
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        border: '1px solid var(--border)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#E5E2DA';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#F0EFEA';
                        e.currentTarget.style.transform = 'none';
                      }}
                      title="View GitHub Repository"
                      aria-label={`View GitHub repository for ${proj.title}`}
                    >
                      <GithubIcon style={{ width: 14, height: 14 }} />
                      <span>Code</span>
                    </a>
                  )}

                  {proj.live && (
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
                  )}
                </div>
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

                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 10,
                  }}
                >
                  {proj.github ? (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      <GithubIcon style={{ width: 14, height: 14 }} />
                      <span>Repository: {proj.github.replace('https://github.com/', '')}</span>
                    </a>
                  ) : (
                    <span style={{ fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      Production Enterprise Platform
                    </span>
                  )}

                  {proj.live && (
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
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
