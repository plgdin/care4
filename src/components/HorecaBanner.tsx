import React from 'react';

export const HorecaBanner: React.FC = () => {
  return (
    <section className="horeca-section" id="horeca-section">
      <div className="horeca-container">
        <div className="horeca-card">
          {/* Left Column: Eyebrow, Logo & Description */}
          <div className="horeca-left">
            <div className="section-eyebrow horeca-eyebrow">
              <span className="section-eyebrow-line" />
              <span>OUR HORECA FOCUS</span>
            </div>

            <div className="horeca-logo-row">
              {/* Exact user-provided HO|RE|CA| Logo */}
              <div className="horeca-brand-logo">
                <img 
                  src="/images/horeca_logo.png" 
                  alt="HO|RE|CA|" 
                  className="horeca-brand-logo-img" 
                />
              </div>

              {/* Sector Tagline */}
              <div className="horeca-sectors-inline">
                <span className="sectors-sep">|</span>
                <span>HOTELS</span>
                <span className="sectors-sep">|</span>
                <span>RESTAURANTS</span>
                <span className="sectors-sep">|</span>
                <span>CATERING</span>
              </div>
            </div>

            <p className="horeca-description">
              We cater to the unique needs of the HoReCa sector with products and solutions designed to keep operations efficient, hygienic and guest-ready — every day.
            </p>
          </div>

          {/* Right Column: 3 Pillars with Large Icons and Lists */}
          <div className="horeca-pillars-grid">
            {/* Pillar 1: Hotels */}
            <div className="horeca-pillar">
              <div className="pillar-icon-box">
                <img 
                  src="/images/icon_hotel_lg.png" 
                  alt="Hotels Icon" 
                  className="pillar-icon-img" 
                />
              </div>
              <h3 className="pillar-title">Hotels</h3>
              <ul className="pillar-list">
                <li>Guest amenities</li>
                <li>Housekeeping</li>
                <li>F&B supplies</li>
                <li>Cleaning solutions</li>
              </ul>
            </div>

            <div className="pillar-divider" />

            {/* Pillar 2: Restaurants */}
            <div className="horeca-pillar">
              <div className="pillar-icon-box">
                <img 
                  src="/images/icon_restaurant_lg.png" 
                  alt="Restaurants Icon" 
                  className="pillar-icon-img" 
                />
              </div>
              <h3 className="pillar-title">Restaurants</h3>
              <ul className="pillar-list">
                <li>Tableware & crockery</li>
                <li>Kitchen equipment</li>
                <li>Buffet & serving</li>
                <li>Cleaning products</li>
              </ul>
            </div>

            <div className="pillar-divider" />

            {/* Pillar 3: Catering */}
            <div className="horeca-pillar">
              <div className="pillar-icon-box">
                <img 
                  src="/images/icon_catering_lg.png" 
                  alt="Catering Icon" 
                  className="pillar-icon-img" 
                />
              </div>
              <h3 className="pillar-title">Catering</h3>
              <ul className="pillar-list">
                <li>Event supplies</li>
                <li>Disposables</li>
                <li>Buffet solutions</li>
                <li>Logistics support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .horeca-section {
          background-color: #ffffff;
          padding: 56px 0 110px 0;
        }
        .horeca-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .horeca-card {
          width: 100%;
          background: #ffffff;
          border-radius: 28px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 36px rgba(0, 0, 0, 0.05);
          padding: 68px 72px;
          display: grid;
          grid-template-columns: 1.15fr 1.35fr;
          gap: 64px;
          align-items: center;
        }
        .horeca-left {
          display: flex;
          flex-direction: column;
          max-width: 620px;
        }
        .horeca-eyebrow {
          margin-bottom: 24px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }
        .horeca-logo-row {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        /* Exact user-provided HoReCa Logo */
        .horeca-brand-logo {
          display: inline-flex;
          align-items: center;
        }
        .horeca-brand-logo-img {
          height: 68px;
          width: auto;
          display: block;
          object-fit: contain;
        }
        .horeca-sectors-inline {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #64748b;
        }
        .sectors-sep {
          color: #cbd5e1;
          font-weight: 400;
        }
        .horeca-description {
          font-family: var(--font-body);
          font-size: 20px;
          line-height: 1.75;
          color: var(--color-text-secondary);
        }
        /* Right Pillars Grid */
        .horeca-pillars-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 36px;
          align-items: flex-start;
          width: 100%;
        }
        .horeca-pillar {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .pillar-icon-box {
          height: 96px;
          width: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
        }
        .pillar-icon-img {
          height: 84px;
          width: 84px;
          object-fit: contain;
          display: block;
          transition: transform var(--transition-fast);
        }
        .horeca-pillar:hover .pillar-icon-img {
          transform: scale(1.1);
        }
        .pillar-title {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 800;
          color: var(--color-navy-dark);
          margin-bottom: 18px;
          letter-spacing: -0.01em;
        }
        .pillar-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pillar-list li {
          font-family: var(--font-body);
          font-size: 18px;
          color: #374151;
          line-height: 1.55;
          font-weight: 500;
        }
        .pillar-divider {
          width: 1.5px;
          height: 250px;
          background-color: #e5e7eb;
          align-self: center;
        }
        @media (max-width: 1200px) {
          .horeca-card {
            grid-template-columns: 1fr;
            padding: 52px 40px;
            gap: 52px;
          }
          .horeca-left {
            max-width: 100%;
          }
        }
        @media (max-width: 768px) {
          .horeca-container {
            padding: 0 20px;
          }
          .horeca-card {
            padding: 40px 24px;
            border-radius: 20px;
          }
          .horeca-brand-logo-img {
            height: 48px;
          }
          .horeca-sectors-inline {
            font-size: 12px;
          }
          .horeca-description {
            font-size: 17px;
          }
          .horeca-pillars-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .pillar-divider {
            display: none;
          }
          .pillar-icon-box {
            height: 80px;
            width: 80px;
          }
          .pillar-icon-img {
            height: 68px;
            width: 68px;
          }
          .pillar-title {
            font-size: 24px;
          }
          .pillar-list li {
            font-size: 16.5px;
          }
        }
      `}</style>
    </section>
  );
};
