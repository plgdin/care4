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
          <div className="section-eyebrow about-snippet-eyebrow">
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
          padding: 96px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.04);
        }
        .about-snippet-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .about-snippet-left {
          width: 100%;
          max-width: 720px;
        }
        .about-snippet-eyebrow {
          font-size: 14px;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }
        .about-snippet-title {
          font-family: var(--font-heading);
          font-size: 52px;
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
        }
        .about-snippet-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.75;
          color: var(--color-text-secondary);
          margin-bottom: 36px;
        }
        .about-snippet-body p {
          margin: 0;
        }
        .btn-about-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background-color: var(--color-accent-red);
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 17px;
          padding: 16px 32px;
          border-radius: var(--radius-full);
          transition: background-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
          box-shadow: 0 4px 16px rgba(217, 27, 42, 0.24);
        }
        .btn-about-cta:hover {
          background-color: var(--color-accent-red-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(217, 27, 42, 0.32);
        }
        .about-snippet-right {
          display: flex;
          justify-content: flex-end;
          width: 100%;
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
          display: block;
        }
        @media (max-width: 1200px) {
          .about-snippet-container {
            gap: 48px;
          }
          .about-snippet-title {
            font-size: 44px;
          }
          .about-snippet-body {
            font-size: 17px;
          }
        }
        @media (max-width: 992px) {
          .about-snippet-container {
            grid-template-columns: 1fr;
            padding: 0 24px;
            gap: 40px;
          }
          .about-snippet-left {
            max-width: 100%;
          }
          .about-snippet-title {
            font-size: 36px;
          }
          .about-snippet-body {
            font-size: 16px;
          }
        }
        @media (max-width: 600px) {
          .about-snippet-section {
            padding: 60px 0;
          }
          .about-snippet-title {
            font-size: 30px;
          }
          .btn-about-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
