import { useEffect, useState } from 'react';
import profileImg from '../assets/IMG_1597.JPG';
import resumePdf from '../assets/GOWTHAM E_RESUME.pdf';

const stats = [
  { value: 'Associate', label: 'Software Engineer\nStaunch Tech' },
  { value: 'B.E. CSE', label: 'Rohini College of Engg.\n8.105 CGPA' },
  { value: 'Azure', label: 'Cloud & API\nDeployments' },
];

export default function Hero({ onOpenTerminal }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(160deg, #EAE6DC 0%, #F0EBE0 50%, #E5E0D5 100%)',
        paddingTop: 80,
      }}
    >
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 60, alignItems: 'center' }}
          className="hero-grid"
        >
          {/* Left Column: Headlines & CTAs */}
          <div
            style={{
              opacity: on ? 1 : 0,
              transform: on ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s ease',
            }}
          >
            {/* Floating Status Capsule */}
            <div className="status-badge" style={{ marginBottom: 24, width: 'fit-content' }}>
              <span className="status-dot" />
              Associate Software Engineer at Staunch Technologies
            </div>

            <p style={{ fontSize: 18, color: '#C9973E', fontWeight: 600, marginBottom: 8 }}>
              Hi, I'm
            </p>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                color: '#0F1624',
                marginBottom: 16,
              }}
            >
              Gowtham E — Building Scalable Web Systems & Clean Interfaces.
            </h1>

            <p style={{ fontSize: 18, fontWeight: 600, color: '#0F1624', marginBottom: 8 }}>
              Full-Stack Software Engineer specialized in React, Python (Django/Flask), and Cloud Deployments.
            </p>

            <p style={{ fontSize: 14, color: '#8A94A0', marginBottom: 20 }}>
              React.js · Python · Flask · Django · RESTful APIs · Microsoft Azure · Chennai, India
            </p>

            <p
              style={{
                fontSize: 15,
                color: '#5A6475',
                marginBottom: 34,
                lineHeight: 1.75,
                maxWidth: 520,
              }}
            >
              Results-focused Full-Stack Software Engineer with practical industry experience developing, deploying, and maintaining scalable web applications. Proficient in modular React frontends, robust Python backend microservices, and Azure cloud infrastructure.
            </p>

            {/* Interactive CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 40 }}>
              <a href="#projects" className="btn-dark">
                Explore Systems →
              </a>
              <a
                href={resumePdf}
                download="Gowtham_E_Resume.pdf"
                className="btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                title="Download Official Resume"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
              {onOpenTerminal ? (
                <button
                  type="button"
                  onClick={onOpenTerminal}
                  className="btn-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
                >
                  <span style={{ color: '#C9973E', fontWeight: 700, fontFamily: 'monospace' }}>&gt;_</span>
                  Contact Terminal
                </button>
              ) : (
                <a href="#contact" className="btn-outline">
                  Contact Terminal
                </a>
              )}
            </div>

            {/* Metrics */}
            <div style={{ display: 'flex', gap: 36, paddingTop: 24, borderTop: '1px solid #E0DAD0' }}>
              {stats.map(({ value, label }) => (
                <div key={value}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#0F1624', letterSpacing: '-0.03em' }}>
                    {value}
                  </div>
                  <div style={{ fontSize: 11, color: '#8A94A0', fontWeight: 500, lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div
            style={{
              opacity: on ? 1 : 0,
              transform: on ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease 0.2s',
              display: 'flex',
              justifyContent: 'center',
            }}
            className="hero-card-wrap"
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: 360 }}>
              <div
                style={{
                  background: '#0F1624',
                  borderRadius: 28,
                  padding: '44px 32px 48px',
                  boxShadow: '0 40px 80px rgba(15,22,36,0.22)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {/* Profile DP Space with User's Photo */}
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    padding: 3,
                    background: 'linear-gradient(135deg, #C9973E, #F3D292)',
                    boxShadow: '0 8px 24px rgba(201, 151, 62, 0.35)',
                    marginBottom: 18,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <img
                    src={profileImg}
                    alt="Gowtham E - Full-Stack Software Engineer"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      display: 'block',
                    }}
                  />
                </div>
                <div style={{ color: 'white', fontSize: 22, fontWeight: 700, marginBottom: 4 }}>
                  Gowtham E
                </div>
                <div
                  style={{
                    color: '#C9973E',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  Full-Stack Software Engineer
                </div>
                <div
                  style={{
                    color: '#8A94A0',
                    fontSize: 12,
                    marginBottom: 20,
                  }}
                >
                  Staunch Technologies · Chennai, India
                </div>

                {/* Core Stack Pills */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {['Python', 'JavaScript', 'React.js', 'Flask', 'Django', 'REST APIs', 'SQL', 'Azure'].map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: 100,
                        padding: '4px 11px',
                        fontSize: 11,
                        color: 'rgba(255,255,255,0.8)',
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div
                style={{
                  position: 'absolute',
                  bottom: -16,
                  right: -12,
                  background: 'white',
                  borderRadius: 14,
                  padding: '12px 18px',
                  boxShadow: '0 8px 24px rgba(15,22,36,0.12)',
                  border: '1px solid #EDE9E0',
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 800, color: '#0F1624' }}>Staunch Tech</div>
                <div style={{ fontSize: 11, color: '#8A94A0', fontWeight: 500 }}>Assoc. Software Engineer</div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  right: -20,
                  background: 'white',
                  borderRadius: 100,
                  padding: '6px 14px',
                  boxShadow: '0 4px 12px rgba(15,22,36,0.1)',
                  border: '1px solid #EDE9E0',
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#0F1624',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span role="img" aria-label="location">📍</span> Chennai, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
