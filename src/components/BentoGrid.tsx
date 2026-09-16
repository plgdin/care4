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
      gradient: 'linear-gradient(135deg, #0a1f4e 0%, #1a4ba0 100%)',
      gridSpan: 'span 7',
      height: '320px',
    },
    {
      id: 'tasks',
      badge: 'Execution',
      title: 'Task assignment',
      desc: 'Keep everyone aligned, accountable, and aware of next actions.',
      icon: <CheckSquare size={20} />,
      gradient: 'linear-gradient(135deg, #143b80 0%, #0a1f4e 100%)',
      gridSpan: 'span 5',
      height: '320px',
    },
    {
      id: 'scheduling',
      badge: 'Planning',
      title: 'Real-time scheduling',
      desc: 'Plan meetings and deadlines on a frictionless shared calendar.',
      icon: <Calendar size={20} />,
      gradient: 'linear-gradient(135deg, #1a4ba0 0%, #2b67d1 100%)',
      gridSpan: 'span 5',
      height: '280px',
    },
    {
      id: 'progress',
      badge: 'Visibility',
      title: 'Progress tracking',
      desc: 'Live dashboards that highlight what is done, in flight, and coming next.',
      icon: <BarChart3 size={20} />,
      gradient: 'linear-gradient(135deg, #0a1f4e 0%, #1a4ba0 60%, #2b67d1 100%)',
      gridSpan: 'span 7',
      height: '280px',
    },
  ];

  return (
    <section style={{ padding: '60px 0 80px', backgroundColor: 'var(--bg-sections)' }}>
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
              color: 'var(--text-heading)',
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
                boxShadow: '0 12px 30px rgba(10, 31, 78, 0.18)',
                border: '1px solid rgba(255,255,255,0.15)',
                minHeight: item.height,
              }}
            >
              {/* Box Icon Graphic */}
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
                    color: 'var(--accent-blue-light)',
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
