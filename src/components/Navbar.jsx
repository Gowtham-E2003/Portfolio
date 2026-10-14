import { useState, useEffect } from 'react';
import resumePdf from '../assets/GOWTHAM E_RESUME.pdf';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
      for (const { href } of [...navLinks].reverse()) {
        const el = document.getElementById(href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(href.slice(1));
          break;
        }
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(234, 230, 220, 0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #E0DAD0' : '1px solid transparent',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 68,
        }}
      >
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: '#0F1624',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#C9973E',
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: '-0.5px',
            }}
          >
            GE
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, color: '#0F1624', letterSpacing: '-0.3px' }}>
            Gowtham E
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desk-nav">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                style={{
                  padding: '6px 14px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#0F1624' : '#5A6475',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  borderBottom: isActive ? '2px solid #C9973E' : '2px solid transparent',
                }}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="desk-nav">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="btn-outline"
              style={{
                padding: '7px 14px',
                fontSize: 13,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'monospace',
              }}
              title="Open Developer Terminal"
            >
              <span style={{ color: '#C9973E', fontWeight: 700 }}>&gt;_</span>
              <span>Terminal</span>
            </button>
          )}
          <a href="#contact" className="btn-outline" style={{ padding: '8px 18px', fontSize: 13 }}>
            Say Hello
          </a>
          <a
            href={resumePdf}
            download="Gowtham_E_Resume.pdf"
            className="btn-dark"
            style={{ padding: '8px 18px', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 6 }}
            title="Download Gowtham E Resume"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="mob-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 22,
            color: '#0F1624',
            padding: 8,
          }}
          aria-label="Toggle navigation menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          style={{
            background: '#F5F2EC',
            borderTop: '1px solid #E0DAD0',
            borderBottom: '1px solid #E0DAD0',
            padding: '16px 24px 24px',
            boxShadow: '0 10px 30px rgba(15, 22, 36, 0.08)',
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                borderBottom: '1px solid #EDE9E0',
                fontSize: 15,
                fontWeight: 500,
                color: '#0F1624',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {onOpenTerminal && (
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenTerminal();
                }}
                className="btn-outline"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontFamily: 'monospace',
                  padding: '10px 16px',
                }}
              >
                <span style={{ color: '#C9973E' }}>&gt;_</span> Launch Terminal
              </button>
            )}
            <div style={{ display: 'flex', gap: 10 }}>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-outline"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Say Hello
              </a>
              <a
                href={resumePdf}
                download="Gowtham_E_Resume.pdf"
                className="btn-dark"
                style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
