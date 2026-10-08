import React from 'react';

/* ─── curated client logo manifest (only authentic, high-resolution brand logos) ─── */
interface ClientLogo {
  name: string;
  file: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  // Healthcare & Hospitals
  { name: 'KIMS Healthcare', file: 'kims_healthcare_logo.jpg' },
  { name: 'SUT Hospital', file: 'sut_hospital_logo.png' },
  { name: 'KM Cherian Hospital', file: 'km_cherian_hospital_logo.png' },
  { name: 'Jubilee Memorial Hospital', file: 'jubilee_hospital_logo.webp' },
  { name: 'NIMS Medicity', file: 'nims_medicity_logo.png' },
  { name: 'Travancore Medicity', file: 'medicity_kollam_logo.svg' },
  { name: 'SP Medifort', file: 'sp_medifort_logo.png' },
  { name: 'Santhigiri', file: 'santhigiri_logo.webp' },

  // Technology & Enterprise
  { name: 'TCS', file: 'tcs_logo.svg' },
  { name: 'ISRO', file: 'isro_logo.svg' },
  { name: 'LPSC', file: 'lpsc_logo.png' },
  { name: 'Infoblox', file: 'infoblox_logo.png' },
  { name: 'IBS Software', file: 'ibs_software_logo.svg' },
  { name: 'Icon Clinical', file: 'icon_clinical_logo.svg' },
  { name: 'Terumo Penpol', file: 'terumo_penpol_logo.svg' },
  { name: 'HLL Lifecare', file: 'hll_lifecare_logo.svg' },
  { name: 'Press Ganey', file: 'press_ganey_logo.png' },
  { name: 'Assurtech Solutions', file: 'assurtech_solutions_logo.png' },
  { name: 'iDynamics', file: 'idynamics_logo.png' },
  { name: 'Asianet News', file: 'asianet_news_logo.png' },

  // Hospitality & Renowned Clubs
  { name: 'Ruby Arena Hotel', file: 'ruby_arena_hotel_logo.png' },
  { name: 'Hotel Libra', file: 'hotel_libra_logo.png' },
  { name: 'Hotel Thamburu', file: 'hotel_thamburu_logo.png' },
  { name: 'National Club', file: 'national_club_logo.png' },
  { name: 'Sri Mulam Club', file: 'sri_mulam_club_logo.png' },

  // Premier Dining, Bakeries & Food Services
  { name: 'Paragon Restaurant', file: 'paragon_restaurant_logo.png' },
  { name: 'Azad Restaurant', file: 'azad_restaurant_logo.png' },
  { name: "Halai's Biryani", file: 'halais_biryani_logo.png' },
  { name: 'Rahmania Kethels', file: 'rahmania_kethels_logo.png' },
  { name: 'Ruchi Pure Veg', file: 'ruchi_pure_veg_logo.jpg' },
  { name: 'Supreme Food Alliance', file: 'supreme_food_alliance_logo.webp' },
  { name: 'Zam Zam Bun Cafe', file: 'zam_zam_bun_cafe_logo.png' },
  { name: 'Uday Sky Kitchen', file: 'uday_sky_kitchen_logo.png' },
  { name: 'Trivanz Food Court', file: 'trivanz_food_court_logo.png' },
];

/* Balanced distribution across two rows */
const half = Math.ceil(CLIENT_LOGOS.length / 2);
const ROW_1 = CLIENT_LOGOS.slice(0, half);
const ROW_2 = CLIENT_LOGOS.slice(half);

/* ─── component ─── */
export const ClientMarquee: React.FC = () => {
  return (
    <section className="client-marquee-section" id="client-marquee">
      {/* Section heading */}
      <div className="client-marquee-header">
        <div className="section-eyebrow client-marquee-eyebrow">
          <span className="section-eyebrow-line" />
          <span>OUR CLIENT NETWORK</span>
        </div>
        <h2 className="client-marquee-title">
          Brands We Collaborated With
        </h2>
        <p className="client-marquee-subtitle">
          Trusted by leading organizations across healthcare, hospitality, technology &amp; enterprise sectors.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-track-wrapper">
        <div className="marquee-track marquee-left">
          <div className="marquee-content">
            {[...ROW_1, ...ROW_1].map((logo, i) => (
              <div className="marquee-logo-card" key={`r1-${i}`}>
                <img
                  src={`/images/clients/${logo.file}`}
                  alt={logo.name}
                  className="marquee-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-track-wrapper">
        <div className="marquee-track marquee-right">
          <div className="marquee-content">
            {[...ROW_2, ...ROW_2].map((logo, i) => (
              <div className="marquee-logo-card" key={`r2-${i}`}>
                <img
                  src={`/images/clients/${logo.file}`}
                  alt={logo.name}
                  className="marquee-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── section ── */
        .client-marquee-section {
          background-color: #ffffff;
          padding: 68px 0 76px;
          overflow: hidden;
          border-top: 1px solid rgba(0, 0, 0, 0.04);
        }

        /* ── header ── */
        .client-marquee-header {
          text-align: center;
          margin-bottom: 44px;
          padding: 0 24px;
        }
        .client-marquee-eyebrow {
          justify-content: center;
          margin-bottom: 12px;
        }
        .client-marquee-title {
          font-family: var(--font-heading);
          font-size: clamp(30px, 3.6vw, 42px);
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.2;
          margin: 0 auto 14px;
          letter-spacing: -0.01em;
        }
        .client-marquee-subtitle {
          font-family: var(--font-body);
          font-size: 17px;
          line-height: 1.6;
          color: var(--color-text-secondary);
          max-width: 620px;
          margin: 0 auto;
        }

        /* ── track wrapper (holds track) ── */
        .marquee-track-wrapper {
          position: relative;
          margin-bottom: 24px;
        }
        .marquee-track-wrapper:last-of-type {
          margin-bottom: 0;
        }

        /* ── track ── */
        .marquee-track {
          overflow: hidden;
          width: 100%;
        }
        .marquee-content {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          will-change: transform;
        }

        /* ── animation ── */
        .marquee-left .marquee-content {
          animation: scroll-left 52s linear infinite;
        }
        .marquee-right .marquee-content {
          animation: scroll-right 56s linear infinite;
        }

        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ── logo item (no box, border, or shadow) ── */
        .marquee-logo-card {
          flex-shrink: 0;
          width: 200px;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          margin: 0 18px;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        /* ── logo image ── */
        .marquee-logo-img {
          max-height: 56px;
          max-width: 160px;
          object-fit: contain;
          display: block;
        }

        /* ── responsive ── */
        @media (max-width: 768px) {
          .client-marquee-section {
            padding: 52px 0 58px;
          }
          .client-marquee-header {
            margin-bottom: 30px;
          }
          .client-marquee-title {
            font-size: 28px;
            margin-bottom: 10px;
          }
          .client-marquee-subtitle {
            font-size: 15px;
          }
          .marquee-track-wrapper {
            margin-bottom: 16px;
          }
          .marquee-logo-card {
            width: 150px;
            height: 60px;
            margin: 0 12px;
            padding: 0 6px;
          }
          .marquee-logo-img {
            max-height: 44px;
            max-width: 125px;
          }
          .marquee-left .marquee-content {
            animation-duration: 40s;
          }
          .marquee-right .marquee-content {
            animation-duration: 44s;
          }
        }

        @media (max-width: 480px) {
          .client-marquee-title {
            font-size: 24px;
          }
          .marquee-logo-card {
            width: 124px;
            height: 50px;
            margin: 0 8px;
            padding: 0 4px;
          }
          .marquee-logo-img {
            max-height: 36px;
            max-width: 105px;
          }
        }
      `}</style>
    </section>
  );
};
