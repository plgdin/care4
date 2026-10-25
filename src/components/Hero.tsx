import React from 'react';

interface HeroProps {
  onExplore: () => void;
  onTalkToTeam: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExplore, 
  onTalkToTeam 
}) => {
  return (
    <section className="hero-section">
      {/* Visual Slanted Panels */}
      <div className="hero-visual-track">
        {/* Panel 1: Dining Essentials */}
        <div className="hero-panel hero-panel-1">
          <div className="panel-inner panel-inner-1">
            <img 
              src="/images/FineDining.png" 
              alt="Dining Essentials" 
              className="panel-img panel-img-dining"
            />
            <div className="panel-vignette-bottom" />
          </div>
          {/* Diagonal blur and white fade overlays following identical diagonal angle across full section */}
          <div className="hero-panel-1-blur" aria-hidden="true" />
          <div className="hero-panel-1-fade" aria-hidden="true" />
        </div>

        {/* Panel 2: Professional Kitchen Equipment */}
        <div className="hero-panel hero-panel-2">
          <div className="panel-inner panel-inner-2">
            <img 
              src="/images/KitchenEquipment.png" 
              alt="Professional Kitchen Equipment" 
              className="panel-img panel-img-kitchen"
            />
            <div className="panel-vignette-bottom" />
          </div>
        </div>

        {/* Panel 3: Hotel & Guest Amenities */}
        <div className="hero-panel hero-panel-3">
          <div className="panel-inner panel-inner-3">
            <img 
              src="/images/HotelAmenities.png" 
              alt="Hotel and Guest Amenities" 
              className="panel-img panel-img-amenities"
            />
            <div className="panel-vignette-bottom" />
          </div>
        </div>

        {/* Slanted White Dividers between panels (No divider on left of Panel 1) */}
        <div className="hero-divider hero-divider-1" aria-hidden="true" />
        <div className="hero-divider hero-divider-2" aria-hidden="true" />

        {/* Captions with Manrope font and active line indicator */}
        <div className="panel-caption-layer" aria-hidden="true">
          <div className="panel-caption caption-1">
            <span className="caption-text-main">DINING</span>
            <span className="caption-text-sub">ESSENTIALS</span>
            <div className="caption-line-track">
              <div className="caption-line-active caption-line-active-1" />
            </div>
          </div>

          <div className="panel-caption caption-2">
            <span className="caption-text-main">PROFESSIONAL</span>
            <span className="caption-text-sub">KITCHEN EQUIPMENT</span>
            <div className="caption-line-track">
              <div className="caption-line-active caption-line-active-2" />
            </div>
          </div>

          <div className="panel-caption caption-3">
            <span className="caption-text-main">HOTEL &amp; GUEST</span>
            <span className="caption-text-sub">AMENITIES</span>
            <div className="caption-line-track">
              <div className="caption-line-active caption-line-active-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area on the Left */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            YOUR COMPLETE HOSPITALITY PARTNER
          </div>

          {/* Headline in Comic Sans */}
          <h1 className="hero-headline">
            <span className="headline-blue">Hospitality,</span>
            <span className="headline-red">refined.</span>
          </h1>

          {/* Subheading */}
          <h2 className="hero-subhead">
            Every detail. Every department. One partner.
          </h2>

          {/* Paragraph Body */}
          <p className="hero-body">
            From the smallest spoon to the largest kitchen installations, Care4 Associates supplies everything hospitality needs — from restaurants and cafés to five-star hotels.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-buttons">
            <button className="btn-primary-explore" onClick={onExplore}>
              <span>Explore Products</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
            <button className="btn-secondary-team" onClick={onTalkToTeam}>
              <span>Talk to Our Team</span>
            </button>
          </div>

          {/* Restored Industry Icons (Hotels, Restaurants & Cafes, Catering in one line) */}
          <div className="hero-industries-row">
            <div className="industry-item">
              <img 
                src="/images/icon_hotel_lg.webp" 
                alt="Hotels" 
                className="industry-icon-img" 
              />
              <span className="industry-label">Hotels</span>
            </div>
            <div className="industry-item">
              <img 
                src="/images/icon_restaurant_lg.webp" 
                alt="Restaurants & Cafes" 
                className="industry-icon-img" 
              />
              <span className="industry-label">Restaurants &amp; Cafes</span>
            </div>
            <div className="industry-item">
              <img 
                src="/images/icon_catering_lg.webp" 
                alt="Catering" 
                className="industry-icon-img" 
              />
              <span className="industry-label">Catering</span>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="hero-tagline-wrapper">
            <div className="tagline-red-bar" aria-hidden="true" />
            <span className="tagline-text">
              PEOPLE · PRODUCTS · A BETTER HOSPITALITY TOMORROW
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background-color: #ffffff;
          width: 100%;
          min-height: 740px;
          height: clamp(720px, 80vh, 820px);
          display: flex;
          align-items: center;
          overflow: hidden;
          border-bottom: 1px solid #f0f2f5;
          font-family: var(--font-manrope), sans-serif;
        }

        /* Full width visual track */
        .hero-visual-track {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-color: transparent;
          overflow: hidden;
        }

        /* 3 Slanted Panels using clip-path - all with identical diagonal slant */
        .hero-panel {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        /* Panel 1: Dining Essentials (Seamless left edge with diagonal fade & blur) */
        .hero-panel-1 {
          clip-path: polygon(
            0 0,
            57% 0,
            calc(57% - 85px) 100%,
            0 100%
          );
          z-index: 1;
        }
        .panel-inner-1 {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 16%;
          width: 44%;
          height: 100%;
        }

        /* Diagonal blur on left side of Panel 1 matching the divider line slant */
        .hero-panel-1-blur {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 4;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          mask-image: linear-gradient(
            96.5deg,
            black 0%,
            black 36%,
            rgba(0, 0, 0, 0.7) 40%,
            rgba(0, 0, 0, 0.2) 44%,
            transparent 47%
          );
          -webkit-mask-image: linear-gradient(
            96.5deg,
            black 0%,
            black 36%,
            rgba(0, 0, 0, 0.7) 40%,
            rgba(0, 0, 0, 0.2) 44%,
            transparent 47%
          );
        }

        /* Diagonal white fade on left side of Panel 1 matching the divider line slant */
        .hero-panel-1-fade {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 5;
          background: linear-gradient(
            96.5deg,
            #ffffff 0%,
            #ffffff 36%,
            rgba(255, 255, 255, 0.9) 39%,
            rgba(255, 255, 255, 0.5) 42%,
            rgba(255, 255, 255, 0.1) 45%,
            transparent 47%
          );
        }

        /* Panel 2: Kitchen Equipment */
        .hero-panel-2 {
          clip-path: polygon(
            calc(57% + 3px) 0,
            79% 0,
            calc(79% - 85px) 100%,
            calc(57% - 85px + 3px) 100%
          );
          z-index: 2;
        }
        .panel-inner-2 {
          position: absolute;
          top: 0;
          bottom: 0;
          left: calc(57% - 85px);
          width: calc(22% + 85px);
          height: 100%;
        }

        /* Panel 3: Hotel & Guest Amenities */
        .hero-panel-3 {
          clip-path: polygon(
            calc(79% + 3px) 0,
            100% 0,
            100% 100%,
            calc(79% - 85px + 3px) 100%
          );
          z-index: 3;
        }
        .panel-inner-3 {
          position: absolute;
          top: 0;
          bottom: 0;
          left: calc(79% - 85px);
          width: calc(21% + 85px);
          height: 100%;
        }

        .panel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .panel-img-dining {
          object-position: 50% center;
        }
        .panel-img-kitchen {
          object-position: 48% center;
        }
        .panel-img-amenities {
          object-position: 45% center;
        }

        /* Bottom dark gradient for caption contrast */
        .panel-vignette-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 160px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.74) 0%, rgba(0, 0, 0, 0.28) 55%, rgba(0, 0, 0, 0) 100%);
          pointer-events: none;
          z-index: 2;
        }

        /* 2 Crisp white slanted divider lines between panels */
        .hero-divider {
          position: absolute;
          inset: 0;
          background: #ffffff;
          filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.45));
          z-index: 5;
        }
        .hero-divider-1 {
          clip-path: polygon(57% 0, calc(57% + 3px) 0, calc(57% - 85px + 3px) 100%, calc(57% - 85px) 100%);
        }
        .hero-divider-2 {
          clip-path: polygon(79% 0, calc(79% + 3px) 0, calc(79% - 85px + 3px) 100%, calc(79% - 85px) 100%);
        }

        /* Bottom Captions Layer with Manrope */
        .panel-caption-layer {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
        }
        .panel-caption {
          position: absolute;
          bottom: 58px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #ffffff;
          text-shadow: none;
          font-family: var(--font-manrope), sans-serif;
        }
        .caption-1 {
          left: 46%;
          transform: translateX(-50%);
        }
        .caption-2 {
          left: 68%;
          transform: translateX(-50%);
        }
        .caption-3 {
          left: 89.5%;
          transform: translateX(-50%);
        }
        .caption-text-main {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          line-height: 1.35;
        }
        .caption-text-sub {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          line-height: 1.35;
        }
        .caption-line-track {
          width: 88px;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.28);
          margin-top: 8px;
          position: relative;
          border-radius: 2px;
        }
        .caption-line-active {
          position: absolute;
          top: 0;
          height: 100%;
          width: 32px;
          background: #ffffff;
          border-radius: 2px;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.85);
        }
        .caption-line-active-1 { left: 32%; }
        .caption-line-active-2 { left: 26%; }
        .caption-line-active-3 { left: 35%; }

        /* Main Content Container */
        .hero-content-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1680px;
          margin: 0 auto;
          padding: 60px clamp(24px, 3.5vw, 64px);
          display: flex;
          pointer-events: none;
        }
        .hero-content {
          pointer-events: auto;
          max-width: 580px;
          display: flex;
          flex-direction: column;
          transform: translateX(-24px);
        }

        .hero-eyebrow {
          font-family: var(--font-manrope), sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #7b889b;
          margin-bottom: 22px;
        }

        .hero-headline {
          font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
          font-size: clamp(52px, 5.5vw, 82px);
          line-height: 1.04;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .headline-blue {
          display: block;
          color: var(--color-primary, #02348d);
          font-weight: 700;
        }
        .headline-red {
          display: block;
          color: var(--color-accent-red, #d91b2a);
          font-style: italic;
          font-weight: 700;
        }

        .hero-subhead {
          font-family: var(--font-manrope), sans-serif;
          font-size: 25px;
          font-weight: 800;
          color: #10263f;
          margin-bottom: 16px;
          letter-spacing: -0.015em;
          line-height: 1.3;
        }

        .hero-body {
          font-family: var(--font-manrope), sans-serif;
          font-size: 17px;
          line-height: 1.65;
          color: #64748b;
          max-width: 510px;
          margin-bottom: 34px;
          font-weight: 500;
        }

        /* CTA Buttons */
        .hero-cta-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 38px;
          flex-wrap: wrap;
        }
        .btn-primary-explore {
          background-color: #d6202a;
          color: #ffffff;
          font-family: var(--font-manrope), sans-serif;
          font-weight: 700;
          font-size: 16.5px;
          padding: 15px 34px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(214, 32, 42, 0.28);
          transition: background-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
          cursor: pointer;
        }
        .btn-primary-explore:hover {
          background-color: #b81620;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(214, 32, 42, 0.35);
        }
        .btn-arrow {
          font-size: 18px;
          transition: transform var(--transition-fast);
        }
        .btn-primary-explore:hover .btn-arrow {
          transform: translateX(4px);
        }

        .btn-secondary-team {
          background-color: #ffffff;
          color: #10263f;
          border: 1.5px solid #10263f;
          font-family: var(--font-manrope), sans-serif;
          font-weight: 700;
          font-size: 16.5px;
          padding: 14px 32px;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
          cursor: pointer;
        }
        .btn-secondary-team:hover {
          background-color: #10263f;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 38, 63, 0.15);
        }

        /* Restored Industry Icons Row */
        .hero-industries-row {
          display: flex;
          align-items: center;
          gap: 26px;
          margin-bottom: 34px;
          flex-wrap: nowrap;
        }
        .industry-item {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .industry-icon-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          flex-shrink: 0;
        }
        .industry-label {
          font-family: var(--font-manrope), sans-serif;
          font-size: 18.5px;
          font-weight: 700;
          color: var(--color-navy-dark);
          white-space: nowrap;
        }

        /* Bottom Tagline */
        .hero-tagline-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .tagline-red-bar {
          width: 32px;
          height: 2px;
          background-color: #d6202a;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .tagline-text {
          font-family: var(--font-manrope), sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #8b99a9;
          text-transform: uppercase;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .hero-industries-row {
            gap: 20px;
          }
          .hero-content {
            max-width: 500px;
          }
        }

        @media (max-width: 992px) {
          .hero-section {
            flex-direction: column;
            align-items: stretch;
            height: auto;
            min-height: auto;
            padding-bottom: 0;
          }
          .hero-content-wrapper {
            padding: 48px 24px 36px 24px;
            pointer-events: auto;
          }
          .hero-content {
            max-width: 100%;
            transform: none;
          }
          .hero-visual-track {
            position: relative;
            width: 100%;
            height: 420px;
          }
          .hero-panel-1 {
            clip-path: polygon(0 0, 36% 0, calc(36% - 40px) 100%, 0 100%);
          }
          .hero-panel-2 {
            clip-path: polygon(calc(36% + 2px) 0, 68% 0, calc(68% - 40px) 100%, calc(36% - 40px + 2px) 100%);
          }
          .hero-panel-3 {
            clip-path: polygon(calc(68% + 2px) 0, 100% 0, 100% 100%, calc(68% - 40px + 2px) 100%);
          }
          .hero-divider-0 {
            display: none;
          }
          .hero-divider-1 {
            clip-path: polygon(36% 0, calc(36% + 2px) 0, calc(36% - 40px + 2px) 100%, calc(36% - 40px) 100%);
          }
          .hero-divider-2 {
            clip-path: polygon(68% 0, calc(68% + 2px) 0, calc(68% - 40px + 2px) 100%, calc(68% - 40px) 100%);
          }
        }

        @media (max-width: 640px) {
          .hero-headline {
            font-size: 42px;
          }
          .hero-subhead {
            font-size: 19px;
          }
          .hero-industries-row {
            gap: 16px;
          }
          .industry-icon-img {
            width: 38px;
            height: 38px;
          }
          .industry-label {
            font-size: 15px;
          }
          .hero-cta-buttons {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary-explore, .btn-secondary-team {
            width: 100%;
            justify-content: center;
          }
          .hero-visual-track {
            height: 300px;
          }
          .caption-text-main, .caption-text-sub {
            font-size: 9.5px;
          }
          .caption-line-track {
            width: 60px;
          }
          .caption-line-active {
            width: 22px;
          }
        }
      `}</style>
    </section>
  );
};
