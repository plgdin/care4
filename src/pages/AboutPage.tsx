import React from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Truck, 
  Users,
  Award
} from 'lucide-react';
import { 
  ABOUT_STATS, 
  WHO_WE_SERVE, 
  WHAT_WE_OFFER 
} from '../data/siteData';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onNavigateHome }) => {
  return (
    <div className="about-page">
      {/* Hero Banner Section */}
      <section className="about-hero-section">
        <div className="about-hero-bg-overlay" />
        <div className="about-hero-container">
          {/* Breadcrumb */}
          <div className="about-breadcrumb">
            <button onClick={onNavigateHome} className="breadcrumb-link">Home</button>
            <ChevronRight size={12} className="breadcrumb-sep" />
            <span className="breadcrumb-current">About Us</span>
          </div>

          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-desc">
            Care4 Associates, India is a leading distributor of FMCG products serving hotels, restaurants and catering establishments across Kerala and beyond.
          </p>

          {/* Feature Badges */}
          <div className="about-feature-badges">
            <div className="feature-badge-pill">
              <Award size={18} className="badge-icon" />
              <span>Quality Products</span>
            </div>
            <div className="feature-badge-pill">
              <Truck size={18} className="badge-icon" />
              <span>Reliable Distribution</span>
            </div>
            <div className="feature-badge-pill">
              <Users size={18} className="badge-icon" />
              <span>Trusted Partnerships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="our-story-container">
          {/* Left Column Text */}
          <div className="our-story-left">
            <div className="story-eyebrow-group">
              <span className="story-eyebrow-text">Our Story</span>
              <div className="story-eyebrow-bar" />
            </div>

            <h2 className="story-title">A Legacy of Trust and Service</h2>

            <p className="story-body">
              With over years of experience in the distribution of food and allied products, Care4 Associates has grown to become a trusted partner for the hospitality industry. We are committed to delivering quality products, efficient supply chain solutions and exceptional service to hotels, restaurants, caterers and institutions across Kerala.
            </p>

            <button className="btn-our-journey" onClick={onOpenQuote}>
              <span>Our Journey</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column Image & Floating Stats */}
          <div className="our-story-right">
            <div className="story-image-card">
              <img 
                src="/images/image__restaurant_setting__c005091f.png" 
                alt="Hospitality Dining Experience" 
                className="story-img"
              />
              {/* Floating Stats Card matching Figma */}
              <div className="floating-stats-card">
                {ABOUT_STATS.map((stat, i) => (
                  <div key={i} className="stat-unit">
                    <span className="stat-val">{stat.value}</span>
                    <span className="stat-lbl">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="who-we-serve-section">
        <div className="who-we-serve-container">
          <div className="serve-header">
            <div className="story-eyebrow-group">
              <span className="story-eyebrow-text">Who We Serve</span>
              <div className="story-eyebrow-bar" />
            </div>
            <h2 className="serve-title">Serving Every Corner of Hospitality</h2>
            <p className="serve-desc">
              We supply a wide range of FMCG and food products to various segments of the hospitality industry.
            </p>
          </div>

          <div className="serve-cards-grid">
            {WHO_WE_SERVE.map((card, i) => (
              <div key={i} className="serve-card" onClick={onOpenQuote}>
                <div className="serve-card-image-box">
                  <img src={card.image} alt={card.title} className="serve-card-img" />
                  <div className="serve-card-img-overlay">
                    <h3 className="serve-card-big-title">{card.title}</h3>
                  </div>
                </div>
                <div className="serve-card-body">
                  <p className="serve-card-desc">{card.description}</p>
                  <div className="serve-card-btn">
                    <ArrowRight size={14} color="#ffffff" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="what-we-offer-section">
        <div className="what-we-offer-container">
          <div className="offer-header">
            <div className="story-eyebrow-group">
              <span className="story-eyebrow-text">What We Offer</span>
              <div className="story-eyebrow-bar" />
            </div>
            <h2 className="offer-title">Comprehensive Solutions for Your Business</h2>
            <p className="offer-desc">
              A wide selection of high-quality products and value-added services to support your daily operations.
            </p>
          </div>

          <div className="offer-cards-grid">
            {WHAT_WE_OFFER.map((item) => (
              <div key={item.number} className="offer-card">
                <div className="offer-number-doodle">{item.number}</div>
                <div className="offer-card-content">
                  <h3 className="offer-card-title">{item.title}</h3>
                  <p className="offer-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          background-color: #ffffff;
        }
        /* Hero Banner */
        .about-hero-section {
          position: relative;
          background-color: var(--color-navy-deep);
          background-image: url('/images/image__fine_dining__2ac60065.png');
          background-size: cover;
          background-position: center;
          padding: 80px 0 72px 0;
          color: #ffffff;
        }
        .about-hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 28, 45, 0.94) 0%, rgba(15, 28, 45, 0.82) 100%);
        }
        .about-hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .about-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
          font-family: var(--font-inter);
          font-size: 13px;
        }
        .breadcrumb-link {
          color: rgba(255, 255, 255, 0.6);
          transition: color var(--transition-fast);
        }
        .breadcrumb-link:hover {
          color: #ffffff;
        }
        .breadcrumb-sep {
          color: rgba(255, 255, 255, 0.4);
        }
        .breadcrumb-current {
          color: rgba(255, 255, 255, 0.85);
        }
        .about-hero-title {
          font-family: var(--font-display);
          font-size: 60px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .about-hero-desc {
          font-family: var(--font-inter);
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin-bottom: 36px;
        }
        .about-feature-badges {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .feature-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 10px 20px;
          border-radius: var(--radius-full);
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 15.5px;
          color: #ffffff;
        }
        .badge-icon {
          color: var(--color-accent-red);
        }
        /* Our Story */
        .our-story-section {
          padding: 96px 0;
          background-color: #ffffff;
        }
        .our-story-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
          align-items: center;
        }
        .story-eyebrow-group {
          display: inline-flex;
          flex-direction: column;
          margin-bottom: 16px;
        }
        .story-eyebrow-text {
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 700;
          color: var(--color-red-alt);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .story-eyebrow-bar {
          width: 60px;
          height: 2px;
          background-color: var(--color-red-alt);
          margin-top: 4px;
        }
        .story-title {
          font-family: var(--font-inter);
          font-size: 46px;
          font-weight: 900;
          color: var(--color-navy-deep);
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .story-body {
          font-family: var(--font-inter);
          font-size: 18px;
          line-height: 1.7;
          color: var(--color-text-body);
          margin-bottom: 32px;
        }
        .btn-our-journey {
          background-color: var(--color-red-alt);
          color: #ffffff;
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 14px;
          padding: 12px 28px;
          border-radius: var(--radius-xs);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background-color var(--transition-fast);
        }
        .btn-our-journey:hover {
          background-color: #b31a20;
        }
        .our-story-right {
          position: relative;
        }
        .story-image-card {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: visible;
        }
        .story-img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: var(--shadow-card);
        }
        .floating-stats-card {
          position: absolute;
          bottom: -24px;
          left: 24px;
          background: #ffffff;
          padding: 20px 28px;
          border-radius: 12px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
          display: flex;
          gap: 28px;
          border: 1px solid var(--color-border);
        }
        .stat-unit {
          display: flex;
          flex-direction: column;
        }
        .stat-val {
          font-family: var(--font-inter);
          font-size: 24px;
          font-weight: 900;
          color: var(--color-navy-deep);
          line-height: 1;
        }
        .stat-lbl {
          font-family: var(--font-inter);
          font-size: 11px;
          color: var(--color-text-muted);
          margin-top: 4px;
        }
        /* Who We Serve */
        .who-we-serve-section {
          background-color: #f5f5f5;
          padding: 96px 0;
        }
        .who-we-serve-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .serve-header {
          max-width: 600px;
          margin-bottom: 48px;
        }
        .serve-title {
          font-family: var(--font-inter);
          font-size: 46px;
          font-weight: 900;
          color: var(--color-navy-deep);
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .serve-desc {
          font-family: var(--font-inter);
          font-size: 18px;
          color: var(--color-text-body);
        }
        .serve-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .serve-card {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
          cursor: pointer;
        }
        .serve-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
        }
        .serve-card-image-box {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .serve-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .serve-card:hover .serve-card-img {
          transform: scale(1.05);
        }
        .serve-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }
        .serve-card-big-title {
          font-family: var(--font-inter);
          font-size: 32px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.01em;
        }
        .serve-card-body {
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 16px;
        }
        .serve-card-desc {
          font-family: var(--font-inter);
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-text-body);
        }
        .serve-card-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-red-alt);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        /* What We Offer */
        .what-we-offer-section {
          padding: 96px 0;
          background-color: #ffffff;
        }
        .what-we-offer-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .offer-header {
          max-width: 640px;
          margin-bottom: 48px;
        }
        .offer-title {
          font-family: var(--font-inter);
          font-size: 46px;
          font-weight: 900;
          color: var(--color-navy-deep);
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .offer-desc {
          font-family: var(--font-inter);
          font-size: 18px;
          color: var(--color-text-body);
        }
        .offer-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .offer-card {
          background: #ffffff;
          border-left: 3px solid var(--color-red-alt);
          padding: 20px 24px;
          border-radius: 4px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }
        .offer-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        }
        .offer-number-doodle {
          font-family: var(--font-doodle);
          font-size: 48px;
          color: #1e1e1e;
          line-height: 1;
          flex-shrink: 0;
        }
        .offer-card-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .offer-card-title {
          font-family: var(--font-inter);
          font-size: 18px;
          font-weight: 700;
          color: var(--color-navy-deep);
        }
        .offer-card-desc {
          font-family: var(--font-inter);
          font-size: 15px;
          line-height: 1.55;
          color: var(--color-text-body);
        }
        @media (max-width: 992px) {
          .our-story-container {
            grid-template-columns: 1fr;
          }
          .serve-cards-grid, .offer-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .about-hero-container, .our-story-container, .who-we-serve-container, .what-we-offer-container {
            padding: 0 20px;
          }
          .about-hero-title {
            font-size: 42px;
          }
        }
      `}</style>
    </div>
  );
};
