import React, { useState } from 'react';
import { ArrowRight, Play, Image as ImageIcon } from 'lucide-react';

interface HeroFanProps {
  onGetStarted?: () => void;
  onWatchDemo?: () => void;
}

export const HeroFan: React.FC<HeroFanProps> = ({ onGetStarted, onWatchDemo }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Cards layout matching Figma arc
  const cards = [
    { rotate: -15, translateY: 15, label: 'PORTRAIT' },
    { rotate: -8, translateY: -5, label: '' },
    { rotate: -2, translateY: -22, label: '' },
    { rotate: 2, translateY: -22, label: '' },
    { rotate: 8, translateY: -5, label: '' },
    { rotate: 15, translateY: 15, label: '' },
  ];

  return (
    <section style={{ paddingTop: '56px', paddingBottom: '72px', textAlign: 'center' }}>
      <div className="container">
        {/* Top Tag */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <span className="pill-badge">CARE4 ASSOCIATES</span>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            maxWidth: '860px',
            margin: '0 auto 20px',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
          }}
        >
          Streamline your team, <br />
          supercharge your workflow<span style={{ color: 'var(--text-muted)' }}>.</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            maxWidth: '640px',
            margin: '0 auto 36px',
            color: 'var(--text-secondary)',
          }}
        >
          One platform to plan, collaborate, and deliver — faster and smarter, without the busywork.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '64px',
          }}
        >
          <button onClick={onGetStarted} className="btn-primary">
            Get started for free <ArrowRight size={16} />
          </button>
          <button onClick={onWatchDemo} className="btn-outline">
            <Play size={14} fill="currentColor" /> Watch demo
          </button>
        </div>

        {/* Fan Cards Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '780px',
            height: '270px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px',
          }}
          className="fan-container"
        >
          {cards.map((card, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  width: '124px',
                  height: '228px',
                  backgroundColor: '#EDE9E1',
                  borderRadius: '26px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: isHovered
                    ? '0 20px 32px rgba(0, 0, 0, 0.12)'
                    : '0 8px 20px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  margin: '0 -10px',
                  transform: isHovered
                    ? `translateY(${card.translateY - 24}px) rotate(${card.rotate * 0.4}deg) scale(1.08)`
                    : `translateY(${card.translateY}px) rotate(${card.rotate}deg)`,
                  zIndex: isHovered ? 20 : idx + 1,
                  transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  overflow: 'hidden',
                }}
              >
                {card.label && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      fontSize: '9px',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {card.label}
                  </span>
                )}

                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9C958A',
                  }}
                >
                  <ImageIcon size={22} strokeWidth={1.5} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .fan-container {
            transform: scale(0.72);
            margin: -30px auto 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
