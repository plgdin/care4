import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ValuePropsSectionProps {
  onGetQuote: () => void;
}

export const ValueProps: React.FC<ValuePropsSectionProps> = ({ onGetQuote }) => {
  return (
    <section className="valueprops-section">
      <div className="valueprops-container">
        <div className="valueprops-grid">
          {/* Left Content Panel */}
          <div className="valueprops-left">
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
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Image */}
          <div className="valueprops-image-wrapper">
            <img 
              src="/images/centerimage_f8709305.png" 
              alt="Hospitality Room Comfort" 
              className="valueprops-img" 
            />
            <div className="valueprops-gradient-overlay" />
          </div>
        </div>
      </div>

      <style>{`
        .valueprops-section {
          background-color: var(--color-navy-dark);
          position: relative;
          overflow: hidden;
        }
        .valueprops-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
        }
        .valueprops-grid {
          display: grid;
          grid-template-columns: 520px 1fr;
          min-height: 450px;
          align-items: stretch;
        }
        .valueprops-left {
          padding: 64px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 2;
        }
        .valueprops-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .valueprops-red-bar {
          width: 3px;
          height: 20px;
          background-color: var(--color-accent-red);
          border-radius: 2px;
        }
        .valueprops-eyebrow-text {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .valueprops-headline {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 16px;
        }
        .valueprops-body {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 32px;
          max-width: 390px;
        }
        .valueprops-cta-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #ffffff;
          color: var(--color-navy-dark);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: var(--radius-full);
          transition: background-color var(--transition-fast), transform var(--transition-fast);
        }
        .valueprops-cta-btn:hover {
          background-color: #f3f4f6;
          transform: translateY(-2px);
        }
        .valueprops-image-wrapper {
          position: relative;
          overflow: hidden;
        }
        .valueprops-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .valueprops-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, var(--color-navy-dark) 0%, rgba(16, 40, 67, 0.3) 25%, transparent 60%);
        }
        @media (max-width: 900px) {
          .valueprops-grid {
            grid-template-columns: 1fr;
          }
          .valueprops-left {
            padding: 48px 24px;
          }
          .valueprops-image-wrapper {
            height: 300px;
          }
          .valueprops-gradient-overlay {
            background: linear-gradient(180deg, var(--color-navy-dark) 0%, transparent 40%);
          }
        }
      `}</style>
    </section>
  );
};
