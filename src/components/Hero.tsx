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

          {/* Industry Icons in one single line */}
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
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background-color: #ffffff;
          width: 100%;
          min-height: 520px;
          height: calc(100vh - 84px);
          height: calc(100dvh - 84px);
          max-height: 960px;
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
            74% 0,
            calc(74% - 85px) 100%,
            0 100%
          );
          z-index: 1;
        }
        .panel-inner-1 {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 36%;
          width: 50%;
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
            black 49%,
            rgba(0, 0, 0, 0.7) 54%,
            rgba(0, 0, 0, 0.2) 58%,
            transparent 62%
          );
          -webkit-mask-image: linear-gradient(
            96.5deg,
            black 0%,
            black 49%,
            rgba(0, 0, 0, 0.7) 54%,
            rgba(0, 0, 0, 0.2) 58%,
            transparent 62%
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
            #ffffff 51%,
            rgba(255, 255, 255, 0.96) 55%,
            rgba(255, 255, 255, 0.65) 58%,
            rgba(255, 255, 255, 0.15) 61%,
            transparent 63%
          );
        }

        /* Panel 2: Kitchen Equipment */
        .hero-panel-2 {
          clip-path: polygon(
            calc(74% + 3px) 0,
            87% 0,
            calc(87% - 85px) 100%,
            calc(74% - 85px + 3px) 100%
          );
          z-index: 2;
        }
        .panel-inner-2 {
          position: absolute;
          top: 0;
          bottom: 0;
          left: calc(74% - 85px);
          width: calc(13% + 85px);
          height: 100%;
        }

        /* Panel 3: Hotel & Guest Amenities */
        .hero-panel-3 {
          clip-path: polygon(
            calc(87% + 3px) 0,
            100% 0,
            100% 100%,
            calc(87% - 85px + 3px) 100%
          );
          z-index: 3;
        }
        .panel-inner-3 {
          position: absolute;
          top: 0;
          bottom: 0;
          left: calc(87% - 85px);
          width: calc(13% + 85px);
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
          object-position: 49% center;
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
          clip-path: polygon(74% 0, calc(74% + 3px) 0, calc(74% - 85px + 3px) 100%, calc(74% - 85px) 100%);
        }
        .hero-divider-2 {
          clip-path: polygon(87% 0, calc(87% + 3px) 0, calc(87% - 85px + 3px) 100%, calc(87% - 85px) 100%);
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
          bottom: clamp(16px, 3vh, 48px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #ffffff;
          text-shadow: none;
          font-family: var(--font-manrope), sans-serif;
          width: max-content;
          max-width: 140px;
        }
        .caption-1 {
          left: calc(67.5% - 68px);
          transform: translateX(-50%);
        }
        .caption-2 {
          left: calc(80.5% - 68px);
          transform: translateX(-50%);
        }
        .caption-3 {
          left: calc(93.5% - 42px);
          transform: translateX(-50%);
        }
        .caption-text-main {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          line-height: 1.3;
        }
        .caption-text-sub {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          line-height: 1.3;
        }
        .caption-line-track {
          width: 72px;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.28);
          margin-top: 7px;
          position: relative;
          border-radius: 2px;
        }
        .caption-line-active {
          position: absolute;
          top: 0;
          height: 100%;
          width: 26px;
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
          max-width: 1760px;
          margin: 0 auto;
          padding: 40px clamp(24px, 4vw, 72px);
          display: flex;
          pointer-events: none;
        }
        .hero-content {
          pointer-events: auto;
          max-width: 860px;
          display: flex;
          flex-direction: column;
          transform: none;
        }

        .hero-eyebrow {
          font-family: var(--font-manrope), sans-serif;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #7b889b;
          margin-bottom: 22px;
        }

        .hero-headline {
          font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
          font-size: clamp(74px, 6.6vw, 108px);
          line-height: 1.02;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
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
          font-size: clamp(27px, 2.2vw, 35px);
          font-weight: 800;
          color: #10263f;
          margin-bottom: 20px;
          letter-spacing: -0.015em;
          line-height: 1.3;
        }

        .hero-body {
          font-family: var(--font-manrope), sans-serif;
          font-size: clamp(19px, 1.4vw, 22px);
          line-height: 1.62;
          color: #64748b;
          max-width: 740px;
          margin-bottom: 38px;
          font-weight: 500;
        }

        /* CTA Buttons */
        .hero-cta-buttons {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .btn-primary-explore {
          background-color: #d6202a;
          color: #ffffff;
          font-family: var(--font-manrope), sans-serif;
          font-weight: 700;
          font-size: 20px;
          padding: 18px 42px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 10px;
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
          font-size: 21px;
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
          font-size: 20px;
          padding: 17px 40px;
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

        /* Industry Icons Row (Hotels, Restaurants & Cafes, Catering in one line) */
        .hero-industries-row {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 0;
          flex-wrap: wrap;
        }
        .industry-item {
          display: flex;
          align-items: center;
          gap: 13px;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .industry-icon-img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          flex-shrink: 0;
        }
        .industry-label {
          font-family: var(--font-manrope), sans-serif;
          font-size: 19px;
          font-weight: 700;
          color: var(--color-navy-dark);
          white-space: nowrap;
        }

        /* ── Monitor Scaling 125% & Medium Viewport Heights (730px - 860px) ── */
        @media (min-width: 993px) and (max-height: 860px) {
          .hero-content-wrapper {
            padding: 24px clamp(24px, 3.5vw, 64px);
          }
          .hero-content {
            max-width: 780px;
          }
          .hero-eyebrow {
            font-size: 15.5px;
            margin-bottom: 14px;
          }
          .hero-headline {
            font-size: clamp(64px, 5.8vw, 88px);
            margin-bottom: 15px;
          }
          .hero-subhead {
            font-size: 25.5px;
            margin-bottom: 13px;
          }
          .hero-body {
            font-size: 17.5px;
            line-height: 1.55;
            max-width: 680px;
            margin-bottom: 25px;
          }
          .hero-cta-buttons {
            gap: 18px;
            margin-bottom: 27px;
          }
          .btn-primary-explore {
            font-size: 18px;
            padding: 15px 36px;
          }
          .btn-secondary-team {
            font-size: 18px;
            padding: 14px 34px;
          }
          .hero-industries-row {
            gap: 26px;
          }
          .industry-icon-img {
            width: 42px;
            height: 42px;
          }
          .industry-label {
            font-size: 17px;
          }
          .panel-caption {
            bottom: 30px;
          }
        }

        /* ── Monitor Scaling 150% & Compact Viewport Heights (< 730px) ── */
        @media (min-width: 993px) and (max-height: 730px) {
          .hero-content-wrapper {
            padding: 14px clamp(24px, 3.5vw, 64px);
          }
          .hero-content {
            max-width: 700px;
          }
          .hero-eyebrow {
            font-size: 13.5px;
            margin-bottom: 10px;
          }
          .hero-headline {
            font-size: clamp(52px, 4.8vw, 72px);
            margin-bottom: 10px;
          }
          .hero-subhead {
            font-size: 22.5px;
            margin-bottom: 10px;
          }
          .hero-body {
            font-size: 16px;
            line-height: 1.5;
            max-width: 610px;
            margin-bottom: 18px;
          }
          .hero-cta-buttons {
            gap: 15px;
            margin-bottom: 18px;
          }
          .btn-primary-explore {
            font-size: 16.5px;
            padding: 12px 28px;
          }
          .btn-secondary-team {
            font-size: 16.5px;
            padding: 11px 26px;
          }
          .hero-industries-row {
            gap: 22px;
          }
          .industry-icon-img {
            width: 36px;
            height: 36px;
          }
          .industry-label {
            font-size: 15.5px;
          }
          .panel-caption {
            bottom: 18px;
          }
        }

        /* ── Large 1440p / 4K Monitors (> 1050px) ── */
        @media (min-width: 993px) and (min-height: 1050px) {
          .hero-content-wrapper {
            padding: 60px clamp(24px, 3.5vw, 64px);
          }
          .hero-content {
            max-width: 860px;
          }
          .hero-headline {
            font-size: clamp(76px, 6vw, 104px);
            margin-bottom: 24px;
          }
          .hero-subhead {
            font-size: 30px;
            margin-bottom: 18px;
          }
          .hero-body {
            font-size: 21px;
            max-width: 740px;
            margin-bottom: 38px;
          }
          .hero-cta-buttons {
            margin-bottom: 40px;
          }
          .panel-caption {
            bottom: 60px;
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .hero-industries-row {
            gap: 20px;
          }
          .hero-content {
            max-width: 640px;
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
          .caption-1 {
            left: 18%;
          }
          .caption-2 {
            left: 50%;
          }
          .caption-3 {
            left: 84%;
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
            gap: 14px;
          }
          .industry-icon-img {
            width: 30px;
            height: 30px;
          }
          .industry-label {
            font-size: 14px;
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
