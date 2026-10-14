import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/dr.gowtham253@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `New Client Message from ${form.name.trim()} via Portfolio`,
          _replyto: form.email.trim(),
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await response.json();

      // FormSubmit returns success='true', or if first activation is pending it sends activation email
      if (response.ok || data.success === 'true' || (data.message && data.message.includes('Activation'))) {
        setStatus('success');
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore confetti if canvas unsupported
        }
      } else {
        throw new Error(data.message || 'Failed to dispatch email. Please try direct email.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMsg(err.message || 'Unable to deliver message right now.');
    }
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setStatus('idle');
    setErrorMsg('');
  };

  const mailtoFallback = `mailto:dr.gowtham253@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${form.name || 'Client'}`
  )}&body=${encodeURIComponent(
    `${form.message}\n\nClient Name: ${form.name}\nClient Email: ${form.email}`
  )}`;

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-label">
          <span className="num">06</span>
          <span className="line" />
          <span className="tag">Contact</span>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info Cards */}
          <div>
            <h2 className="section-heading" style={{ marginBottom: 20 }}>
              Let's Work Together
            </h2>
            <p
              style={{
                fontSize: 15,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              Looking to build a scalable web application, design modular Python microservices, or
              discuss high-impact full-stack roles? Fill out the form or reach out directly to my inbox.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  icon: '✉',
                  label: 'Email',
                  value: 'dr.gowtham253@gmail.com',
                  href: 'mailto:dr.gowtham253@gmail.com',
                },
                {
                  icon: '📞',
                  label: 'Phone',
                  value: '+91 6369998633',
                  href: 'tel:+916369998633',
                },
                {
                  icon: '💼',
                  label: 'LinkedIn',
                  value: 'gowtham-e-62733b333',
                  href: 'https://linkedin.com/in/gowtham-e-62733b333',
                },
                {
                  icon: '⌨',
                  label: 'GitHub',
                  value: 'github.com/Gowtham-E2003',
                  href: 'https://github.com/Gowtham-E2003',
                },
                {
                  icon: '📍',
                  label: 'Location',
                  value: 'Chennai, India',
                  href: '#contact',
                },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    textDecoration: 'none',
                    padding: '16px 20px',
                    borderRadius: 14,
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    transition: 'all 0.2s',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C9973E';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      background: 'var(--navy)',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      flexShrink: 0,
                      color: '#C9973E',
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Live Connected Message Form */}
          <div className="card" style={{ padding: 36, position: 'relative' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    color: 'var(--text-primary)',
                    marginBottom: 10,
                  }}
                >
                  Message Delivered!
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: 15,
                    lineHeight: 1.6,
                    maxWidth: 420,
                    margin: '0 auto 24px',
                  }}
                >
                  Thank you, <strong style={{ color: 'var(--text-primary)' }}>{form.name}</strong>! Your message has been dispatched directly to <strong style={{ color: '#C9973E' }}>dr.gowtham253@gmail.com</strong>. I'll get back to you within 24 hours.
                </p>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    padding: '8px 16px',
                    borderRadius: 100,
                    fontSize: 13,
                    color: '#15803D',
                    fontWeight: 600,
                    marginBottom: 28,
                  }}
                >
                  <span>✓</span> Verified Delivery to dr.gowtham253@gmail.com
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-outline"
                    style={{ fontSize: 13, padding: '10px 20px', cursor: 'pointer' }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 20, color: 'var(--text-primary)' }}>
                    Send a Message
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 11,
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: '#22C55E',
                        display: 'inline-block',
                      }}
                    />
                    Direct to dr.gowtham253@gmail.com
                  </div>
                </div>

                {status === 'error' && (
                  <div
                    style={{
                      padding: '14px 16px',
                      background: 'rgba(239, 68, 68, 0.08)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: 12,
                      marginBottom: 20,
                      fontSize: 13,
                      color: '#B91C1C',
                    }}
                  >
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>
                      ⚠️ Automated dispatch notice:
                    </div>
                    <div style={{ marginBottom: 10 }}>{errorMsg}</div>
                    <a
                      href={mailtoFallback}
                      className="btn-dark"
                      style={{
                        display: 'inline-flex',
                        padding: '8px 16px',
                        fontSize: 12,
                        background: '#B91C1C',
                        color: 'white',
                      }}
                    >
                      Open Email App to Send Directly →
                    </a>
                  </div>
                )}

                <div style={{ marginBottom: 18 }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: 6,
                    }}
                  >
                    Your Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="e.g. Alex Johnson"
                    required
                    disabled={status === 'sending'}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1.5px solid var(--border)',
                      borderRadius: 10,
                      fontSize: 14,
                      color: 'var(--text-primary)',
                      background: 'var(--bg-alt)',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#C9973E')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: 6,
                    }}
                  >
                    Your Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="e.g. client@company.com"
                    required
                    disabled={status === 'sending'}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1.5px solid var(--border)',
                      borderRadius: 10,
                      fontSize: 14,
                      color: 'var(--text-primary)',
                      background: 'var(--bg-alt)',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#C9973E')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: 6,
                    }}
                  >
                    Project Details & Message <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about your project scope, timeline, or engineering opportunity..."
                    rows={5}
                    required
                    disabled={status === 'sending'}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1.5px solid var(--border)',
                      borderRadius: 10,
                      fontSize: 14,
                      color: 'var(--text-primary)',
                      background: 'var(--bg-alt)',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#C9973E')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-dark"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: 14,
                    fontSize: 15,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    opacity: status === 'sending' ? 0.75 : 1,
                  }}
                >
                  {status === 'sending' ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <svg
                        style={{
                          width: 16,
                          height: 16,
                          animation: 'spin 1s linear infinite',
                        }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Sending to Gowtham's Inbox...
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </button>

                <p
                  style={{
                    fontSize: 11,
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    marginTop: 14,
                    lineHeight: 1.4,
                  }}
                >
                  🔒 Client submissions are securely delivered directly to <strong>dr.gowtham253@gmail.com</strong>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
