import React from 'react';
import { ContactCta } from '../components/ContactCta';
import { ShieldCheck, Sparkles, Zap, HeartHandshake } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Sparkles size={22} />,
      title: 'Craft & Elegance',
      desc: 'We believe work tools should bring delight and calm to everyday operations, not cognitive fatigue.',
    },
    {
      icon: <Zap size={22} />,
      title: 'Speed with Intention',
      desc: 'Instant reactivity and keyboard-first navigation so you never lose momentum during deep work.',
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Uncompromised Trust',
      desc: 'Enterprise-grade encryption, privacy by design, and strict security compliance out of the box.',
    },
    {
      icon: <HeartHandshake size={22} />,
      title: 'People-First Collaboration',
      desc: 'Built around human communication patterns rather than rigid ticketing hierarchies.',
    },
  ];

  return (
    <main style={{ padding: '40px 0 80px', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <span className="pill-badge">ABOUT CARE4</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              maxWidth: '800px',
              margin: '0 auto 20px',
              color: 'var(--text-heading)',
            }}
          >
            Empowering teams with clarity, focus, and velocity<span style={{ color: 'var(--accent-red)' }}>.</span>
          </h1>

          <p
            style={{
              fontSize: '16px',
              maxWidth: '620px',
              margin: '0 auto',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            Care4 Associates was founded on a simple premise: modern software tools should remove friction, not add to it. We build products designed for focused execution.
          </p>
        </div>

        {/* Mission Card: Deep Navy Banner */}
        <div
          style={{
            backgroundColor: 'var(--deep-navy)',
            color: '#FFFFFF',
            borderRadius: '28px',
            padding: 'clamp(32px, 5vw, 56px)',
            marginBottom: '48px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ maxWidth: '780px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent-blue-light)',
                marginBottom: '12px',
                display: 'block',
              }}
            >
              Why Care4
            </span>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                fontWeight: 800,
                marginBottom: '16px',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              Bringing order and momentum to high-performing organizations.
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--accent-blue-light)', lineHeight: 1.7, opacity: 0.95 }}>
              Today’s teams juggle dozens of disconnected apps, fragmented updates, and endless notifications. Care4 unifies your work streams into a coherent workspace, giving teams the breathing room they need to innovate.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="pill-badge">PRINCIPLES</span>
            <h3 style={{ fontSize: '28px', fontWeight: 800, marginTop: '12px', color: 'var(--text-heading)' }}>
              What guides how we build
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '24px',
                  padding: '32px 24px',
                  border: '1px solid var(--border-medium)',
                  boxShadow: 'var(--shadow-sm)',
                }}
                className="hover-lift"
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary-blue)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    boxShadow: '0 4px 10px rgba(26, 75, 160, 0.25)',
                  }}
                >
                  {v.icon}
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: 'var(--text-heading)' }}>
                  {v.title}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ContactCta />
      </div>
    </main>
  );
};
