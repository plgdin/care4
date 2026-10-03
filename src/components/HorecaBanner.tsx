import React from 'react';

export const HorecaBanner: React.FC = () => {
  return (
    <section className="horeca-section">
      <div className="horeca-container">
        <div className="horeca-card">
          <img 
            src="/images/horeca_c922e989.png" 
            alt="Our HoReCa Focus: Hotels, Restaurants, Catering" 
            className="horeca-banner-img"
          />
        </div>
      </div>

      <style>{`
        .horeca-section {
          background-color: #ffffff;
          padding: 32px 0 80px 0;
        }
        .horeca-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .horeca-card {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          background: #ffffff;
        }
        .horeca-banner-img {
          width: 100%;
          height: auto;
          display: block;
        }
        @media (max-width: 768px) {
          .horeca-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};
