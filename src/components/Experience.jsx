const experiences = [
  {
    period: 'December 2025 – Present',
    location: 'Chennai, India',
    company: 'Staunch Technologies Pvt. Ltd.',
    role: 'Associate Software Engineer',
    type: 'Full-Time Engineering',
    responsibilities: [
      'Design, build, and maintain production web applications, ensuring high responsiveness and system performance.',
      'Implement dynamic, reusable interface components using React.js to enhance front-end application speed and consistency.',
      'Engineer and integrate secure RESTful APIs to connect client user interfaces with backend databases.',
      'Debug and resolve functional issues across systems, optimizing backend routes and application logic.',
      'Utilize Git and GitHub for version control, code reviews, and structured deployment readiness within an agile engineering team.',
    ],
    tech: ['Python', 'JavaScript', 'React.js', 'Flask', 'Django', 'RESTful APIs', 'SQL', 'Microsoft Azure', 'Git'],
  },
];

const education = {
  institution: 'Rohini College of Engineering & Technology',
  location: 'Kanyakumari, India',
  degree: 'Bachelor of Engineering (B.E.) in Computer Science and Engineering',
  period: '2020 – 2024',
  cgpa: '8.105 / 10.0',
};

const languages = [
  { name: 'English', level: 'Professional Working Proficiency' },
  { name: 'Tamil', level: 'Native / Bilingual Proficiency' },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-label">
          <span className="num">03</span>
          <span className="line" />
          <span className="tag">Work Experience & Background</span>
        </div>
        <h2 className="section-heading" style={{ marginBottom: 48 }}>
          Industry Experience & Education
        </h2>

        {/* Experience Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 56 }}>
          {experiences.map((job, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: 32,
                position: 'relative',
              }}
              className="about-grid"
            >
              <div style={{ textAlign: 'right', paddingTop: 4 }}>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: 15, marginBottom: 4 }}>
                  {job.period}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{job.location}</div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: 220,
                  top: 8,
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: 'var(--amber)',
                  border: '2px solid var(--bg)',
                  transform: 'translateX(calc(-50% + 16px))',
                }}
              />

              <div className="card" style={{ padding: 32, marginLeft: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'var(--navy)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--amber)',
                      fontWeight: 800,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    ST
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 20, color: 'var(--text-primary)', marginBottom: 2 }}>
                      {job.role}
                    </div>
                    <div style={{ fontSize: 15, color: 'var(--amber)', fontWeight: 600 }}>
                      {job.company} · {job.location}
                    </div>
                  </div>
                </div>

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
                  Key Contributions & Responsibilities
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
                  {job.responsibilities.map((r, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <span style={{ color: '#22C55E', marginTop: 3, flexShrink: 0 }}>✓</span>
                      {r}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {job.tech.map((t) => (
                    <span key={t} className="pill" style={{ fontSize: 12 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Languages Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24 }} className="about-grid">
          {/* Education Card */}
          <div className="card" style={{ padding: 28 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: 'var(--amber)',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Academic Education
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
              {education.degree}
            </h3>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', fontWeight: 500, marginBottom: 8 }}>
              {education.institution} — {education.location}
            </p>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 14, flexWrap: 'wrap' }}>
              <span className="pill" style={{ background: 'var(--bg)', fontWeight: 600 }}>
                Graduation: {education.period}
              </span>
              <span className="pill" style={{ color: 'var(--amber)', borderColor: 'var(--amber)', fontWeight: 700 }}>
                CGPA: {education.cgpa}
              </span>
            </div>
          </div>

          {/* Languages Card */}
          <div className="card" style={{ padding: 28 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: 'var(--amber)',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Languages
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {languages.map((lang) => (
                <div key={lang.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>{lang.name}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
