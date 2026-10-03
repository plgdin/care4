import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutSnippetProps {
  onLearnMore: () => void;
}

export const AboutSnippet: React.FC<AboutSnippetProps> = ({ onLearnMore }) => {
  return (
    <section className="about-snippet-section" id="about-snippet">
      <div className="about-snippet-container">
        {/* Left Column Content */}
        <div className="about-snippet-left">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" />
            <span>ABOUT CARE4</span>
          </div>

          <h2 className="about-snippet-title">
            Hygiene, hospitality & supply — made simpler.
          </h2>

          <div className="about-snippet-body">
            <p>
              Care4 Associates, India is part of the Care 4 Global Group, supplying hygiene, cleaning and hospitality products to commercial, industrial and residential customers.
            </p>
            <p>
              We offer a wide range of janitorial products, cleaning equipment, chemicals, paper products, waste management solutions and hospitality essentials, working with globally reputed manufacturers to deliver reliable and cost-effective solutions.
            </p>
            <p>
              With a customer-focused approach, we provide tailored products and services for every unique requirement.
            </p>
          </div>

          <button className="btn-about-cta" onClick={onLearnMore}>
            <span>Learn More About Us</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Column Image */}
        <div className="about-snippet-right">
          <div className="about-image-card">
            <img 
              src="/images/image__restaurant_setting__c005091f.png" 
              alt="Care4 Hospitality Table Setting" 
              className="about-snippet-img"
            />
          </div>
        </div>
      </div>

      <style>{`
        .about-snippet-section {
          background-color: #ffffff;
          padding: 80px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.04);
        }
        .about-snippet-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .about-snippet-left {
          max-width: 620px;
        }
        .about-snippet-title {
          font-family: var(--font-heading);
          font-size: 42px;
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .about-snippet-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin-bottom: 32px;
        }
        .btn-about-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-accent-red);
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 16px;
          padding: 14px 28px;
          border-radius: var(--radius-full);
          transition: background-color var(--transition-fast), transform var(--transition-fast);
          box-shadow: 0 4px 14px rgba(217, 27, 42, 0.2);
        }
        .btn-about-cta:hover {
          background-color: var(--color-accent-red-hover);
          transform: translateY(-2px);
        }
        .about-snippet-right {
          display: flex;
          justify-content: flex-end;
        }
        .about-image-card {
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }
        .about-snippet-img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        @media (max-width: 992px) {
          .about-snippet-container {
            grid-template-columns: 1fr;
            padding: 0 24px;
          }
          .about-snippet-title {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};
