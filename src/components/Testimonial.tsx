import React from 'react';
import { Star } from 'lucide-react';

export const Testimonial: React.FC = () => {
  return (
    <section style={{ padding: '40px 0 80px' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: '#EDE9E1',
            borderRadius: '32px',
            padding: ' clamp(40px, 6vw, 72px) clamp(24px, 5vw, 60px)',
            textAlign: 'center',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {/* Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <span className="pill-badge" style={{ backgroundColor: '#E4DFD5' }}>
              LOVED BY TEAMS
            </span>
          </div>

          {/* Quote */}
          <blockquote
            style={{
              fontSize: 'clamp(20px, 3.2vw, 32px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.25,
              maxWidth: '820px',
              margin: '0 auto 36px',
              color: 'var(--text-primary)',
            }}
          >
            “Since switching to Care4, our team ships twice as fast and nothing slips through the cracks. It’s the calm center of how we work.”
          </blockquote>

          {/* Author */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '48px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#CBC5BA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              JE
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Jordan Ellis
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Head of Ops, Meridian
              </div>
            </div>
          </div>

          {/* Stats Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(32px, 8vw, 80px)',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              paddingTop: '36px',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                }}
              >
                4.9/5
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2px',
                  margin: '4px 0',
                  color: '#211F1C',
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>
                average rating
              </div>
            </div>

            <div
              style={{
                width: '1px',
                height: '48px',
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              }}
            />

            <div>
              <div
                style={{
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                }}
              >
                1,200+
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500, marginTop: '4px' }}>
                happy teams
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
