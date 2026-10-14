import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechOrbit from './components/TechOrbit';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import BackgroundCanvas from './components/BackgroundCanvas';
import ContactDock from './components/ContactDock';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Zero-G Interactive Particle Canvas */}
      <BackgroundCanvas />

      {/* Main Navigation */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />

        <section id="about" style={{ background: '#EAE6DC', padding: '100px 0' }}>
          <div className="container">
            <div className="section-label">
              <span className="num">01</span>
              <span className="line" />
              <span className="tag">About</span>
            </div>
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
              className="about-grid"
            >
              <div>
                <h2 className="section-heading">
                  Professional
                  <br />
                  Summary
                </h2>
              </div>
              <div>
                <p
                  style={{
                    fontSize: 16,
                    color: '#5A6475',
                    lineHeight: 1.8,
                    marginBottom: 20,
                    borderLeft: '3px solid #C9973E',
                    paddingLeft: 20,
                  }}
                >
                  Results-focused Full-Stack Software Engineer with practical industry experience in developing, deploying, and maintaining scalable web applications. Proficient in building modular frontends with React.js and engineering robust backend services using Python, Flask, Django, and RESTful APIs.
                </p>
                <p style={{ fontSize: 15, color: '#8A94A0', lineHeight: 1.8, marginBottom: 20 }}>
                  Experienced with Microsoft Azure cloud environments and Git-based collaborative workflows to deliver reliable, production-ready software. Currently engineering production systems as an Associate Software Engineer at Staunch Technologies.
                </p>
                <p style={{ fontSize: 15, color: '#8A94A0', lineHeight: 1.8 }}>
                  Passionate about component-driven architecture, responsive modern interfaces, secure API communication, and optimized backend query routes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: 1, background: '#E0DAD0' }} />
        <TechOrbit />
        <div style={{ height: 1, background: '#E0DAD0' }} />
        <Experience />
        <div style={{ height: 1, background: '#E0DAD0' }} />
        <Projects />
        <div style={{ height: 1, background: '#E0DAD0' }} />
        <ResumeSection onOpenTerminal={() => setIsTerminalOpen(true)} />
        <div style={{ height: 1, background: '#E0DAD0' }} />
        <ContactSection />
      </main>

      <footer style={{ background: '#0F1624', padding: '40px 0', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
            © 2026 Gowtham E · Associate Software Engineer · Chennai, India
          </p>
        </div>
      </footer>

      {/* Floating Micro-Terminal and Contact Dock */}
      <ContactDock
        isOpen={isTerminalOpen}
        onOpen={() => setIsTerminalOpen(true)}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
