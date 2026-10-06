import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ValuePropsSectionProps {
  onGetQuote: () => void;
}

export const ValueProps: React.FC<ValuePropsSectionProps> = ({ onGetQuote }) => {
  return (
    <section className="valueprops-section" id="supporting-hospitality">
      {/* Full-bleed background image across the entire banner */}
      <div className="valueprops-bg-wrapper">
        <img 
          src="/images/centerimage_f8709305.png" 
          alt="Hospitality Room Comfort" 
          className="valueprops-bg-img" 
        />
        <div className="valueprops-gradient-overlay" />
      </div>

      {/* Content aligned to main site container */}
      <div className="valueprops-container">
        <div className="valueprops-content">
          <div className="valueprops-eyebrow">
            <span className="valueprops-red-bar" />
            <span className="valueprops-eyebrow-text">Supporting Hospitality</span>
          </div>

          <h2 className="valueprops-headline">
            Cleaner spaces. Smoother days. Brighter experiences.
          </h2>

          <p className="valueprops-body">
            Reliable products. Consistent supply. A partner who understands hospitality.
          </p>

          <button className="valueprops-cta-btn" onClick={onGetQuote}>
            <span>Get a Quote</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .valueprops-section {
          position: relative;
          width: 100%;
          min-height: 520px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: var(--color-navy-dark);
        }
        .valueprops-bg-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .valueprops-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
          display: block;
        }
        .valueprops-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg, 
            rgba(16, 40, 67, 0.96) 0%, 
            rgba(16, 40, 67, 0.90) 36%, 
            rgba(16, 40, 67, 0.50) 65%, 
            rgba(16, 40, 67, 0.15) 85%, 
            transparent 100%
          );
        }
        .valueprops-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 80px 48px;
        }
        .valueprops-content {
          max-width: 600px;
          display: flex;
          flex-direction: column;
        }
        .valueprops-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .valueprops-red-bar {
          width: 3.5px;
          height: 22px;
          background-color: var(--color-accent-red);
          border-radius: 2px;
        }
        .valueprops-eyebrow-text {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .valueprops-headline {
          font-family: var(--font-heading);
          font-size: 46px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.18;
          margin-bottom: 20px;
          letter-spacing: -0.015em;
        }
        .valueprops-body {
          font-family: var(--font-body);
          font-size: 19px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 36px;
          max-width: 520px;
        }
        .valueprops-cta-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #ffffff;
          color: var(--color-navy-dark);
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 16.5px;
          padding: 15px 32px;
          border-radius: var(--radius-full);
          transition: background-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.2);
        }
        .valueprops-cta-btn:hover {
          background-color: #f3f4f6;
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.28);
        }
        @media (max-width: 900px) {
          .valueprops-container {
            padding: 64px 24px;
          }
          .valueprops-headline {
            font-size: 36px;
          }
          .valueprops-body {
            font-size: 17px;
          }
          .valueprops-gradient-overlay {
            background: linear-gradient(
              180deg, 
              rgba(16, 40, 67, 0.95) 0%, 
              rgba(16, 40, 67, 0.85) 60%, 
              rgba(16, 40, 67, 0.4) 100%
            );
          }
        }
      `}</style>
    </section>
  );
};
