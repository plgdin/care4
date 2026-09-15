import React from 'react';
import { MessageSquare, CheckSquare, Calendar, BarChart3 } from 'lucide-react';

interface BentoItem {
  id: string;
  badge: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradient: string;
  gridSpan: string;
  height: string;
}

export const BentoGrid: React.FC = () => {
  const items: BentoItem[] = [
    {
      id: 'chat',
      badge: 'Collaboration',
      title: 'Built-in team chat',
      desc: 'Message instantly within every project — no more fragmented app-switching.',
      icon: <MessageSquare size={20} />,
      gradient: 'linear-gradient(145deg, #CCC6BA 0%, #888277 100%)',
      gridSpan: 'span 7',
      height: '320px',
    },
    {
      id: 'tasks',
      badge: 'Execution',
      title: 'Task assignment',
      desc: 'Keep everyone aligned, accountable, and aware of next actions.',
      icon: <CheckSquare size={20} />,
      gradient: 'linear-gradient(145deg, #DDD8CC 0%, #9B958A 100%)',
      gridSpan: 'span 5',
      height: '320px',
    },
    {
      id: 'scheduling',
      badge: 'Planning',
      title: 'Real-time scheduling',
      desc: 'Plan meetings and deadlines on a frictionless shared calendar.',
      icon: <Calendar size={20} />,
      gradient: 'linear-gradient(145deg, #C2BCAE 0%, #7E776C 100%)',
      gridSpan: 'span 4',
      height: '280px',
    },
    {
      id: 'progress',
      badge: 'Visibility',
      title: 'Progress tracking',
      desc: 'Live dashboards that highlight what is done, in flight, and coming next.',
      icon: <BarChart3 size={20} />,
      gradient: 'linear-gradient(145deg, #D4CEBF 0%, #8D867B 100%)',
      gridSpan: 'span 8',
      height: '280px',
    },
  ];

  return (
    <section style={{ padding: '60px 0 80px' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
            <span className="pill-badge">FEATURES</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
            }}
          >
            Everything your team <br />
            needs to work smarter
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {items.map((item) => (
            <div
              key={item.id}
              className={`bento-card bento-${item.id} hover-lift`}
              style={{
                background: item.gradient,
                borderRadius: '24px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                color: '#FFFFFF',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                border: '1px solid rgba(255,255,255,0.2)',
                minHeight: item.height,
              }}
            >
              {/* Subtle visual texture/graphic */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                {item.icon}
              </div>

              {/* Text content */}
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '440px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.75)',
                    marginBottom: '8px',
                    display: 'inline-block',
                  }}
                >
                  {item.badge}
                </span>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }
        .bento-chat { grid-column: span 7; }
        .bento-tasks { grid-column: span 5; }
        .bento-scheduling { grid-column: span 5; }
        .bento-progress { grid-column: span 7; }

        @media (max-width: 860px) {
          .bento-chat, .bento-tasks, .bento-scheduling, .bento-progress {
            grid-column: span 12 !important;
            min-height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
};
