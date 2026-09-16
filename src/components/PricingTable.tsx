import React from 'react';
import { Check, Minus } from 'lucide-react';

interface FeatureRow {
  name: string;
  category?: string;
  plan1: boolean;
  plan2: boolean;
  plan3: boolean;
}

export const PricingTable: React.FC = () => {
  const features: FeatureRow[] = [
    { name: 'Unlimited Workspace Projects', plan1: true, plan2: true, plan3: true },
    { name: 'Real-time Canvas Collaboration', plan1: true, plan2: true, plan3: true },
    { name: 'Automated Task Triggers & Rules', plan1: false, plan2: true, plan3: true },
    { name: 'Advanced Velocity & Burndown Charts', plan1: false, plan2: true, plan3: true },
    { name: 'Custom Role & Granular Permissions', plan1: false, plan2: false, plan3: true },
    { name: 'Dedicated Support & 99.9% SLA', plan1: false, plan2: false, plan3: true },
  ];

  return (
    <section style={{ padding: '40px 0 80px', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
            <span className="pill-badge">PRICING</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: 'var(--text-heading)',
            }}
          >
            Transparent comparison
          </h2>
        </div>

        {/* Table Container */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '24px',
            border: '1px solid var(--border-medium)',
            overflowX: 'auto',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              minWidth: '580px',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-white)' }}>
                <th
                  style={{
                    padding: '24px 28px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    width: '45%',
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    padding: '24px 20px',
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    textAlign: 'center',
                  }}
                >
                  Starter
                </th>
                <th
                  style={{
                    padding: '24px 20px',
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--primary-blue)',
                    textAlign: 'center',
                  }}
                >
                  Professional
                </th>
                <th
                  style={{
                    padding: '24px 20px',
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    textAlign: 'center',
                  }}
                >
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feat, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom:
                      idx < features.length - 1 ? '1px solid var(--border-light)' : 'none',
                    backgroundColor: idx % 2 === 0 ? 'var(--bg-white)' : 'transparent',
                  }}
                >
                  <td
                    style={{
                      padding: '20px 28px',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {feat.name}
                  </td>

                  {/* Plan 1 */}
                  <td style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {feat.plan1 ? (
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--primary-blue)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                          }}
                        >
                          <Check size={14} strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(16, 24, 40, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-muted)',
                          }}
                        >
                          <Minus size={14} />
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Plan 2 */}
                  <td style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {feat.plan2 ? (
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--primary-blue)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                          }}
                        >
                          <Check size={14} strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(16, 24, 40, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-muted)',
                          }}
                        >
                          <Minus size={14} />
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Plan 3 */}
                  <td style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {feat.plan3 ? (
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--primary-blue)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                          }}
                        >
                          <Check size={14} strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(16, 24, 40, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-muted)',
                          }}
                        >
                          <Minus size={14} />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
