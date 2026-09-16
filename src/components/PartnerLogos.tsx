import React from 'react';

export const PartnerLogos: React.FC = () => {
  const partners = [
    'Meridian',
    'Quanta',
    'Blockwork',
    'Aurelia',
    'Formlabs',
    'Northwind',
    'Helios',
  ];

  return (
    <section style={{ padding: '40px 0 60px', textAlign: 'center', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <p
          style={{
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
            marginBottom: '28px',
          }}
        >
          Trusted by teams building the future of work
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '32px 48px',
          }}
        >
          {partners.map((name) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '15px',
                opacity: 0.85,
                transition: 'opacity 0.2s ease, transform 0.2s ease, color 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.color = 'var(--primary-blue)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-blue)',
                  display: 'inline-block',
                }}
              />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
