import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ContactCta: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-section" style={{ padding: '40px 0 80px' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: '#1E1D1B',
            color: '#FFFFFF',
            borderRadius: '32px',
            padding: 'clamp(36px, 6vw, 64px) clamp(24px, 5vw, 60px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
          }}
        >
          {/* Left Column: Copy */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  backgroundColor: '#2E2C28',
                  color: '#C7C1B5',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                GET IN TOUCH
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '16px',
              }}
            >
              Ready to bring calm to your workflow?
            </h2>

            <p
              style={{
                color: '#9E988E',
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '420px',
              }}
            >
              Tell us about your team and we’ll get you set up with full access. No credit card required.
            </p>
          </div>

          {/* Right Column: Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  backgroundColor: '#2A2825',
                  padding: '36px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <CheckCircle2 size={42} color="#A7E8BD" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ color: '#FFFFFF', fontSize: '20px', marginBottom: '8px' }}>
                  Request Received!
                </h3>
                <p style={{ color: '#9E988E', fontSize: '14px', marginBottom: '20px' }}>
                  Thanks {formData.name || 'there'}! Our team will reach out to {formData.email} shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="btn-outline"
                  style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    backgroundColor: '#2E2C28',
                    color: '#FFFFFF',
                    padding: '14px 20px',
                    borderRadius: '14px',
                    fontSize: '14px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.25)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.06)')}
                />

                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    backgroundColor: '#2E2C28',
                    color: '#FFFFFF',
                    padding: '14px 20px',
                    borderRadius: '14px',
                    fontSize: '14px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.25)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.06)')}
                />

                <textarea
                  rows={4}
                  placeholder="Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    backgroundColor: '#2E2C28',
                    color: '#FFFFFF',
                    padding: '14px 20px',
                    borderRadius: '14px',
                    fontSize: '14px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    resize: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.25)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.06)')}
                />

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#1E1D1B',
                    padding: '14px 24px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    marginTop: '4px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F0ECE4')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
                >
                  {loading ? 'Sending...' : 'Send request'} <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
