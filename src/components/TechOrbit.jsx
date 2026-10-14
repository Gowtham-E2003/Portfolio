const skillGroups = [
  {
    icon: '💻',
    title: 'Programming Languages',
    count: 5,
    skills: ['Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    icon: '⬡',
    title: 'Frontend Engineering',
    count: 4,
    skills: ['React.js', 'Component Architecture', 'Responsive Web Design', 'Modern CSS'],
  },
  {
    icon: '⚙',
    title: 'Backend Engineering',
    count: 4,
    skills: ['Flask', 'Django', 'RESTful API Development', 'Microservices'],
  },
  {
    icon: '☁',
    title: 'Cloud & DevOps',
    count: 5,
    skills: ['Microsoft Azure', 'Linux/Unix Environments', 'Git', 'GitHub', 'Postman'],
  },
];

export default function TechOrbit() {
  return (
    <section id="skills" className="section" style={{ background: '#F5F2EC' }}>
      <div className="container">
        <div className="section-label">
          <span className="num">02</span>
          <span className="line" />
          <span className="tag">Technical Skills</span>
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
            <h2 className="section-heading">Technical Skills & Tooling</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, maxWidth: 520, marginTop: 8 }}>
              Core competencies spanning modular frontend systems, robust Python backend frameworks, and cloud deployment pipelines.
            </p>
          </div>
          <span className="pill" style={{ color: 'var(--amber)', borderColor: 'var(--amber)' }}>
            Production Verified
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {skillGroups.map(({ icon, title, count, skills }) => (
            <div key={title} className="card" style={{ padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className="icon-box" style={{ fontSize: 18 }}>{icon}</div>
                  <span style={{ fontWeight: 700, fontSize: 17, color: 'var(--text-primary)' }}>{title}</span>
                </div>
                <span
                  style={{
                    background: 'var(--bg)',
                    borderRadius: 100,
                    padding: '3px 12px',
                    fontSize: 12,
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                  }}
                >
                  {count}
                </span>
              </div>
              <div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skills.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
