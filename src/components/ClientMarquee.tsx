import React from 'react';
import {
  ChefHat,
  Coffee,
  CookingPot,
  Factory,
  Hospital,
  House,
  Umbrella,
  BedDouble,
  UtensilsCrossed,
  type LucideIcon,
  type LucideProps
} from 'lucide-react';

/* ─── curated client logo manifest (only authentic, high-resolution brand logos) ─── */
interface ClientLogo {
  name: string;
  file: string;
  scale?: number;
}

const CLIENT_LOGOS: ClientLogo[] = [
  // Healthcare & Hospitals
  { name: 'KIMS Healthcare', file: 'kims_healthcare_logo.webp', scale: 1.2 },
  { name: 'SUT Hospital', file: 'sut_hospital_logo.webp', scale: 1.25 },
  { name: 'KM Cherian Hospital', file: 'km_cherian_hospital_logo.webp', scale: 1.15 },
  { name: 'Jubilee Memorial Hospital', file: 'jubilee_hospital_logo.webp', scale: 1.1 },
  { name: 'NIMS Medicity', file: 'nims_medicity_logo.webp', scale: 1.2 },
  { name: 'Travancore Medicity', file: 'medicity_kollam_logo.svg', scale: 1.3 },
  { name: 'SP Medifort', file: 'sp_medifort_logo.webp', scale: 1.45 },
  { name: 'Santhigiri', file: 'santhigiri_logo.webp', scale: 1.45 },

  // Technology & Enterprise
  { name: 'TCS', file: 'tcs_logo.svg' },
  { name: 'ISRO', file: 'isro_logo.svg', scale: 1.45 },
  { name: 'LPSC', file: 'lpsc_logo.webp', scale: 1.45 },
  { name: 'Infoblox', file: 'infoblox_logo.webp' },
  { name: 'IBS Software', file: 'ibs_software_logo.svg' },
  { name: 'Icon Clinical', file: 'icon_clinical_logo.svg', scale: 1.2 },
  { name: 'Terumo Penpol', file: 'terumo_penpol_logo.svg' },
  { name: 'HLL Lifecare', file: 'hll_lifecare_logo.svg', scale: 1.15 },
  { name: 'Press Ganey', file: 'press_ganey_logo.webp', scale: 1.3 },
  { name: 'Assurtech Solutions', file: 'assurtech_solutions_logo.webp' },
  { name: 'iDynamics', file: 'idynamics_logo.webp', scale: 1.35 },
  { name: 'Asianet News', file: 'asianet_news_logo.webp', scale: 1.3 },

  // Luxury Resorts & Premium Hotels
  { name: 'Ruby Arena Hotel', file: 'ruby_arena_hotel_logo.webp', scale: 1.15 },
  { name: 'Hotel Libra', file: 'hotel_libra_logo.webp', scale: 1.4 },
  { name: 'Hotel Thamburu', file: 'hotel_thamburu_logo.webp', scale: 1.35 },
  { name: 'Classic Avenue', file: 'classic_avenue_hotel_logo.png', scale: 1.2 },
  { name: 'Cordial Sopanam Hotel', file: 'cordial_sopanam_hotel_logo.png', scale: 1.25 },
  { name: 'KTDC Hotels', file: 'ktdc_logo.jpg', scale: 1.15 },
  { name: "B'Canti Beach Resort", file: 'bcanti_resort_logo.png', scale: 1.25 },
  { name: 'Sun View Beach Resort', file: 'sun_view_resort_logo.png', scale: 1.2 },
  { name: 'Spice Retreat', file: 'spice_retreat_logo.svg', scale: 1.2 },
  { name: 'National Club', file: 'national_club_logo.webp', scale: 1.35 },
  { name: 'Sri Mulam Club', file: 'sri_mulam_club_logo.webp', scale: 1.45 },

  // Artisan Cafes & Bakeries
  { name: "Eve's Coffee", file: 'eves_coffee_logo.png', scale: 1.25 },
  { name: 'Ambrosia Bakery & Cafe', file: 'ambrosia_logo.png', scale: 1.3 },
  { name: 'Zam Zam Bun Cafe', file: 'zam_zam_vector.svg', scale: 1.45 },
  { name: 'Huddles Cafe', file: 'huddles_cafe_logo.png', scale: 1.2 },
  { name: 'Patty & Bun', file: 'patty_and_bun_logo.png', scale: 1.2 },
  { name: 'Cafe Marisol', file: 'cafe_marisol_logo.png', scale: 1.2 },
  { name: 'Old Skool Cafe', file: 'old_skool_cafe_logo.png', scale: 1.25 },
  { name: 'Turf Cafe', file: 'turf_cafe_logo.png', scale: 1.2 },
  { name: 'La Forno Cafe', file: 'la_forno_cafe_logo.png', scale: 1.2 },
  { name: 'Kynorah Cafe', file: 'kynorah_cafe_logo.svg', scale: 1.25 },

  // Premier Dining & Food Services
  { name: 'Paragon Restaurant', file: 'paragon_restaurant_logo.webp', scale: 1.4 },
  { name: 'Azad Restaurant', file: 'azad_restaurant_logo.webp', scale: 1.2 },
  { name: "Halai's Biryani", file: 'halais_biryani_logo.webp', scale: 1.35 },
  { name: 'Rahmania Kethels', file: 'rahmania_kethels_logo.webp', scale: 1.2 },
  { name: 'Ruchi Pure Veg', file: 'ruchi_pure_veg_logo.webp', scale: 1.45 },
  { name: 'Supreme Food Alliance', file: 'supreme_uppercrust_vector.svg', scale: 1.35 },
  { name: 'Uday Sky Kitchen', file: 'uday_sky_kitchen_vector.svg', scale: 1.25 },
  { name: 'Trivanz Food Court', file: 'trivanz_clean_hires.webp', scale: 1.4 },
];

/* Balanced distribution across two rows */
const half = Math.ceil(CLIENT_LOGOS.length / 2);
const ROW_1 = CLIENT_LOGOS.slice(0, half);
const ROW_2 = CLIENT_LOGOS.slice(half);

const LotusIcon: LucideIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 19c-1.8-4.8-.7-9.3 0-12 2.8 3.4 4.3 7.5 0 12Z" />
      <path d="M12 19c-4.6-1.2-7.2-4.4-8.7-7.1 4.1.2 7.6 2 8.7 7.1Z" />
      <path d="M12 19c4.6-1.2 7.2-4.4 8.7-7.1-4.1.2-7.6 2-8.7 7.1Z" />
      <path d="M5 21h14" />
    </svg>
  )
);
LotusIcon.displayName = 'LotusIcon';

const SERVED_SECTORS: { label: string; icon: LucideIcon }[] = [
  { label: 'Hotels', icon: BedDouble },
  { label: 'Resorts', icon: Umbrella },
  { label: 'Retreat Centres', icon: LotusIcon },
  { label: 'Restaurants', icon: UtensilsCrossed },
  { label: 'Cafes', icon: Coffee },
  { label: 'Cloud Kitchens', icon: CookingPot },
  { label: 'Hospitals', icon: Hospital },
  { label: 'Catering Companies', icon: ChefHat },
  { label: 'Industrial Canteens', icon: Factory },
  { label: 'Homestays', icon: House },
];
/* ─── component ─── */
export const ClientMarquee: React.FC = () => {
  return (
    <section className="client-marquee-section" id="client-marquee">
      {/* Section heading */}
      <div className="client-marquee-header">
        <h2 className="client-marquee-title">
          <span>Proudly</span> <span>Serving</span>
        </h2>
        <div className="served-sector-grid" aria-label="Industries served">
          {SERVED_SECTORS.map(({ label, icon: Icon }) => (
            <div className="served-sector-tile" key={label}>
              <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
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
                  style={logo.scale ? { transform: `scale(${logo.scale})`, transformOrigin: 'center center' } : undefined}
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
                  style={logo.scale ? { transform: `scale(${logo.scale})`, transformOrigin: 'center center' } : undefined}
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
          padding: 48px 0 56px;
          overflow: hidden;
          border-top: 1px solid rgba(0, 0, 0, 0.04);
        }

        /* ── header ── */
        .client-marquee-header {
          text-align: center;
          margin-bottom: 24px;
          padding: 0 24px;
        }
        .client-marquee-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(52px, 6vw, 82px);
          font-weight: 500;
          font-style: italic;
          color: var(--color-primary);
          line-height: 1.12;
          margin: 0 auto 22px;
          letter-spacing: -0.035em;
          display: table;
        }
        .client-marquee-title span:first-child { color: var(--color-accent-red); }
        .client-marquee-title span:last-child {
          color: var(--color-primary);
          margin-left: 0.18em;
        }
        .served-sector-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .served-sector-tile {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 17px;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          background: linear-gradient(145deg, #ffffff, #f5f8fc);
          color: #183550;
          font: 600 14px/1.2 var(--font-body);
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(15, 40, 67, 0.04);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .served-sector-tile:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 14px rgba(15, 40, 67, 0.1);
        }
        .served-sector-tile:nth-child(odd) svg {
          color: #e02d36;
          flex: 0 0 auto;
        }
        .served-sector-tile:nth-child(even) svg {
          color: #174994;
          flex: 0 0 auto;
        }
        .client-marquee-footer {
          text-align: center;
          margin-top: 36px;
          padding: 0 24px;
        }
        .client-marquee-footer .client-marquee-subtitle {
          font-family: var(--font-body);
          font-size: 17.5px;
          font-weight: 500;
          line-height: 1.6;
          color: #64748b;
          max-width: 820px;
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
          filter: contrast(1.1) brightness(1.02);
          image-rendering: -webkit-optimize-contrast;
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
            font-size: 42px;
            margin-bottom: 18px;
          }
          .served-sector-grid { gap: 8px; padding: 0 18px; }
          .served-sector-tile { padding: 9px 12px; font-size: 13px; }
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
            font-size: 38px;
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
