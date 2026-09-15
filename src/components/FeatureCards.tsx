import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  details: string;
}

export const FeatureCards: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const features: FeatureItem[] = [
    {
      id: 'collab',
      title: 'Real-time collaboration',
      desc: 'Work together in one shared space with live updates and instant presence.',
      details: 'Sync edits in milliseconds, chat in context of tasks, and eliminate conflicting copies across distributed teams.',
    },
    {
      id: 'tracking',
      title: 'Task & project tracking',
      desc: 'Assign, prioritize, and follow work from start to finish with zero friction.',
      details: 'Automated sprint views, backlog grooming, status filters, and instant blocker alerts to keep milestones on time.',
    },
    {
      id: 'insights',
      title: 'Performance insights',
      desc: 'See where the team stands with clear, honest dashboards and predictive metrics.',
      details: 'Track cycle time, team velocity, resource allocation, and export presentation-ready reports in one click.',
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section style={{ padding: '36px 0 64px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {features.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#EDE9E1',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onClick={() => toggleExpand(item.id)}
                className="hover-lift"
              >
                <div>
                  <button
                    aria-label="Toggle details"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--text-primary)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '28px',
                      transition: 'transform 0.2s ease',
                      transform: isExpanded ? 'rotate(90deg)' : 'none',
                    }}
                  >
                    {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                  </button>

                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      marginBottom: '10px',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {isExpanded && (
                  <div
                    style={{
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(0,0,0,0.08)',
                      fontSize: '13px',
                      color: 'var(--text-primary)',
                      lineHeight: 1.5,
                      animation: 'fadeIn 0.2s ease-in-out',
                    }}
                  >
                    {item.details}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
