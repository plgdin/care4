import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/siteData';

interface HeroProps {
  onExplore: () => void;
  onTalkToTeam: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onTalkToTeam }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-content">
          <div className="hero-headline-group">
            <h1 className="hero-headline">
              <span className="hero-headline-blue">Hospitality</span>{' '}
              <span className="hero-headline-red">refined.</span>
            </h1>
            <h2 className="hero-subhead">
              Quality products. Smoother operations.
            </h2>
            <p className="hero-body">
              Care4 Associates supplies the essentials for hotels, restaurants and catering businesses — from tableware and kitchen equipment to housekeeping, guest amenities and cleaning solutions.
            </p>
          </div>

          <div className="hero-cta-buttons">
            <button className="btn-primary-pill" onClick={onExplore}>
              <span>Explore Products</span>
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn-secondary-pill" onClick={onTalkToTeam}>
              <span>Talk to Our Team</span>
            </button>
          </div>

          {/* Industry Icons */}
          <div className="hero-industries-row">
            <div className="industry-item">
              <img src="/images/icon_hotel_lg.png" alt="Hotels" className="industry-icon-img" />
              <span className="industry-label">Hotels</span>
            </div>
            <div className="industry-item">
              <img src="/images/icon_restaurant_lg.png" alt="Restaurants" className="industry-icon-img" />
              <span className="industry-label">Restaurants</span>
            </div>
            <div className="industry-item">
              <img src="/images/icon_catering_lg.png" alt="Catering" className="industry-icon-img" />
              <span className="industry-label">Catering</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="hero-tagline-wrapper">
            <div className="tagline-red-bar" />
            <span className="tagline-text">PEOPLE · PRODUCTS · A BETTER HOSPITALITY TOMORROW</span>
          </div>
        </div>

        {/* Right Column - Interactive Image Slider */}
        <div className="hero-slider-wrapper">
          <div className="hero-slider-card">
            {HERO_SLIDES.map((slide, index) => (
              <div 
                key={slide.id} 
                className={`hero-slide-item ${index === currentSlide ? 'active' : ''}`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="hero-slide-img"
                />
              </div>
            ))}

            {/* Slider Navigation Bar */}
            <div className="slider-controls-overlay">
              <span className="slider-counter">
                0{currentSlide + 1} / 0{HERO_SLIDES.length}
              </span>
              <button 
                className="slider-nav-btn" 
                onClick={prevSlide} 
                aria-label="Previous slide"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                className="slider-nav-btn" 
                onClick={nextSlide} 
                aria-label="Next slide"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background-color: var(--color-bg-page);
          padding: 48px 0 64px 0;
          overflow: hidden;
        }
        .hero-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .hero-content {
          max-width: 615px;
          display: flex;
          flex-direction: column;
        }
        .hero-headline-group {
          margin-bottom: 32px;
        }
        .hero-headline {
          font-family: var(--font-display);
          font-size: 80px;
          line-height: 1.05;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        .hero-headline-blue {
          color: var(--color-primary);
          font-weight: 700;
          display: block;
        }
        .hero-headline-red {
          color: var(--color-accent-red);
          font-style: italic;
          font-weight: 700;
          display: block;
        }
        .hero-subhead {
          font-family: var(--font-body);
          font-size: 26px;
          font-weight: 700;
          color: var(--color-navy-dark);
          margin-bottom: 16px;
        }
        .hero-body {
          font-family: var(--font-body);
          font-size: 19.5px;
          line-height: 1.65;
          color: var(--color-text-body);
          max-width: 560px;
        }
        .hero-cta-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .btn-primary-pill {
          background-color: var(--color-accent-red);
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 18px;
          padding: 16px 36px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background-color var(--transition-fast), transform var(--transition-fast);
          box-shadow: 0 4px 14px rgba(217, 27, 42, 0.25);
        }
        .btn-primary-pill:hover {
          background-color: var(--color-accent-red-hover);
          transform: translateY(-2px);
        }
        .btn-arrow {
          font-size: 20px;
          transition: transform var(--transition-fast);
        }
        .btn-primary-pill:hover .btn-arrow {
          transform: translateX(4px);
        }
        .btn-secondary-pill {
          background-color: transparent;
          color: var(--color-navy-dark);
          border: 1.5px solid var(--color-navy-dark);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 18px;
          padding: 15px 36px;
          border-radius: var(--radius-full);
          transition: background-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
        }
        .btn-secondary-pill:hover {
          background-color: var(--color-navy-dark);
          color: #ffffff;
          transform: translateY(-2px);
        }
        .hero-industries-row {
          display: flex;
          align-items: center;
          gap: 36px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .industry-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .industry-icon-img {
          width: 52px;
          height: 52px;
          object-fit: contain;
        }
        .industry-label {
          font-family: var(--font-body);
          font-size: 19px;
          font-weight: 600;
          color: var(--color-navy-dark);
        }
        .hero-tagline-wrapper {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .tagline-red-bar {
          width: 36px;
          height: 2.5px;
          background-color: var(--color-accent-red);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .tagline-text {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--color-text-muted);
        }
        /* Right Slider */
        .hero-slider-wrapper {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .hero-slider-card {
          position: relative;
          width: 100%;
          max-width: 680px;
          height: 600px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
          background-color: #e5e7eb;
        }
        .hero-slide-item {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
        }
        .hero-slide-item.active {
          opacity: 1;
        }
        .hero-slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .slider-controls-overlay {
          position: absolute;
          bottom: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(8px);
          padding: 8px 14px;
          border-radius: 9999px;
          z-index: 10;
        }
        .slider-counter {
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 600;
          color: #ffffff;
          padding-right: 6px;
        }
        .slider-nav-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .slider-nav-btn:hover {
          background: rgba(255, 255, 255, 0.4);
        }
        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr;
            padding: 0 24px;
          }
          .hero-headline {
            font-size: 56px;
          }
          .hero-slider-card {
            height: 420px;
          }
        }
        @media (max-width: 600px) {
          .hero-headline {
            font-size: 42px;
          }
          .btn-primary-pill, .btn-secondary-pill {
            width: 100%;
            justify-content: center;
          }
          .hero-slider-card {
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
};
