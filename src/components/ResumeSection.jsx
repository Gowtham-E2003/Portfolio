import resumePdf from '../assets/GOWTHAM E_RESUME.pdf';
import profileImg from '../assets/IMG_1597.JPG';

export default function ResumeSection({ onOpenTerminal }) {
  return (
    <section id="resume" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-label">
          <span className="num">05</span>
          <span className="line" />
          <span className="tag">Curriculum Vitae</span>
        </div>

        <div style={{ maxWidth: 720, marginBottom: 44 }}>
          <h2 className="section-heading" style={{ marginBottom: 14 }}>
            Official Resume & Credentials
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
            Verified technical background, full-time engineering record at Staunch Technologies, 
            academic qualifications, and production skill sets. Clients and recruiters can download 
            the official PDF or preview it directly in the browser.
          </p>
        </div>

        {/* Grid Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: 32,
            alignItems: 'stretch',
          }}
          className="about-grid"
        >
          {/* Left Column: Candidate & Document Profile Card */}
          <div className="card" style={{ padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Profile Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid var(--border-light)' }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    padding: 2,
                    background: 'linear-gradient(135deg, #C9973E, #F3D292)',
                    boxShadow: '0 4px 14px rgba(201, 151, 62, 0.3)',
                    flexShrink: 0,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={profileImg}
                    alt="Gowtham E"
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
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>
                    Gowtham E
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--amber)', fontWeight: 600 }}>
                    Associate Software Engineer
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                    Staunch Technologies · Chennai, India
                  </div>
                </div>
              </div>

              {/* Document Specs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                {[
                  { label: 'Role', val: 'Associate Software Engineer' },
                  { label: 'Industry Tenure', val: 'Dec 2025 – Present' },
                  { label: 'Degree', val: 'B.E. Computer Science (8.105 CGPA)' },
                  { label: 'Core Capabilities', val: 'React.js, Python, Flask, Django, Azure' },
                  { label: 'Document Name', val: 'GOWTHAM E_RESUME.pdf' },
                  { label: 'File Type & Size', val: 'PDF Document · 87.7 KB' },
                ].map(({ label, val }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      padding: '8px 12px',
                      background: 'var(--bg-alt)',
                      borderRadius: 10,
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>
                      {label}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', textAlign: 'right' }}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 14px',
                borderRadius: 10,
                background: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
                color: '#15803D',
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <span>✓</span>
              <span>Official ATS-Formatted Candidate Resume</span>
            </div>
          </div>

          {/* Right Column: Download & Action Hub */}
          <div
            className="card"
            style={{
              padding: 36,
              background: '#0F1624',
              color: 'white',
              border: '1px solid rgba(201, 151, 62, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 40px rgba(15,22,36,0.18)',
            }}
          >
            <div>
              {/* Header inside dark card */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'rgba(201, 151, 62, 0.15)',
                      border: '1px solid rgba(201, 151, 62, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C9973E',
                      fontSize: 18,
                    }}
                  >
                    📄
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>
                      Resume Download Center
                    </div>
                    <div style={{ fontSize: 11, color: '#8A94A0' }}>
                      Directly provisioned for clients & recruiters
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '4px 10px',
                    borderRadius: 100,
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    fontSize: 11,
                    color: '#4ADE80',
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#4ADE80',
                      display: 'inline-block',
                    }}
                  />
                  Live & Ready
                </div>
              </div>

              <p style={{ fontSize: 14, color: '#A0AEC0', lineHeight: 1.7, marginBottom: 24 }}>
                Instant access to my comprehensive CV detailing production milestones, enterprise software development, system architectures, and client deliverables.
              </p>

              {/* What's Inside Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {[
                  'Production web development at Staunch Technologies Pvt. Ltd.',
                  'Frontend modular systems in React.js, modern CSS, and component design',
                  'Backend RESTful API engineering with Python (Flask, Django, SQL)',
                  'Cloud infrastructure deployment & configuration on Microsoft Azure',
                  'Bachelor of Engineering in Computer Science (8.105 / 10.0 CGPA)',
                  'Full direct contact details: Email, Phone & verified LinkedIn/GitHub',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#CBD5E1' }}>
                    <span style={{ color: '#C9973E', fontWeight: 800, marginTop: 1 }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
                {/* Primary Download Button */}
                <a
                  href={resumePdf}
                  download="Gowtham_E_Resume.pdf"
                  className="btn-dark"
                  style={{
                    flex: '1 1 200px',
                    justifyContent: 'center',
                    padding: '14px 24px',
                    background: 'linear-gradient(135deg, #C9973E, #B3822E)',
                    color: '#0F1624',
                    fontWeight: 800,
                    fontSize: 14,
                    border: 'none',
                    boxShadow: '0 6px 20px rgba(201, 151, 62, 0.35)',
                  }}
                  title="Download GOWTHAM E_RESUME.pdf"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Official Resume
                </a>

                {/* Open Preview Button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{
                    flex: '1 1 160px',
                    justifyContent: 'center',
                    padding: '14px 20px',
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.25)',
                    background: 'rgba(255,255,255,0.06)',
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                  title="Open resume in a new browser tab"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Preview in Browser
                </a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: '#8A94A0', paddingTop: 8 }}>
                <span>File: GOWTHAM E_RESUME.pdf · Size: 87.7 KB</span>
                {onOpenTerminal && (
                  <button
                    onClick={onOpenTerminal}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#C9973E',
                      cursor: 'pointer',
                      fontSize: 11,
                      fontWeight: 600,
                      textDecoration: 'underline',
                      padding: 0,
                    }}
                  >
                    Quick summary in Terminal &gt;_
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
