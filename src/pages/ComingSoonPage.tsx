import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export const ComingSoonPage: React.FC = () => {
  return (
    <div className="coming-soon-wrapper">
      <div className="coming-soon-container">
        {/* Brand Logo */}
        <div className="coming-soon-logo-box">
          <img 
            src="/images/care4_logo.png" 
            alt="Care4 Associates" 
            className="coming-soon-logo"
          />
        </div>

        {/* Status Pill */}
        <div className="status-pill">
          <span className="status-dot" />
          <span>Under Construction</span>
        </div>

        {/* Main Headline */}
        <h1 className="coming-soon-title">Coming Soon</h1>
        
        <p className="coming-soon-text">
          We are currently crafting our new digital experience. Our comprehensive hospitality supplies catalogue and solutions will be live shortly.
        </p>

        {/* Direct Contact Card */}
        <div className="coming-soon-card">
          <h2 className="card-headline">Care 4 Associates, India</h2>
          <p className="card-sub">Hospitality Products & HoReCa Supplies</p>

          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={18} />
              </div>
              <div className="contact-meta">
                <span className="meta-label">Location</span>
                <span className="meta-val">
                  Shanum, GPO Lane, Pulimoodu, Statue, Trivandrum, Kerala - 695 001
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={18} />
              </div>
              <div className="contact-meta">
                <span className="meta-label">Phone & Mobile</span>
                <span className="meta-val">
                  <a href="tel:+914712450977">+91 471 2450977</a> · <a href="tel:+919995911830">+91 9995911830</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="copyright-line">
          © {new Date().getFullYear()} Care 4 Associates. All rights reserved.
        </p>
      </div>

      <style>{`
        .coming-soon-wrapper {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 20%, #102843 0%, #071526 100%);
          color: #ffffff;
          padding: 32px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          box-sizing: border-box;
        }

        .coming-soon-container {
          max-width: 640px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .coming-soon-logo-box {
          background: #ffffff;
          padding: 14px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          margin-bottom: 32px;
          display: inline-flex;
        }

        .coming-soon-logo {
          height: 52px;
          width: auto;
          display: block;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(217, 27, 42, 0.15);
          border: 1px solid rgba(217, 27, 42, 0.4);
          color: #ff8089;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d91b2a;
          box-shadow: 0 0 10px #d91b2a;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
          100% { opacity: 0.6; transform: scale(0.9); }
        }

        .coming-soon-title {
          font-size: 48px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin: 0 0 16px 0;
          line-height: 1.1;
        }

        .coming-soon-text {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.75);
          max-width: 520px;
          margin: 0 0 32px 0;
        }

        .coming-soon-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 24px;
          box-sizing: border-box;
          text-align: left;
        }

        .card-headline {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .card-sub {
          font-size: 13px;
          color: #94a3b8;
          margin: 0 0 20px 0;
        }

        .contact-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .contact-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(2, 52, 141, 0.4);
          color: #60a5fa;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-meta {
          display: flex;
          flex-direction: column;
        }

        .meta-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #64748b;
          font-weight: 700;
        }

        .meta-val {
          font-size: 14px;
          color: #e2e8f0;
          line-height: 1.4;
        }

        .meta-val a {
          color: #93c5fd;
          text-decoration: none;
          font-weight: 600;
        }

        .meta-val a:hover {
          text-decoration: underline;
        }

        .copyright-line {
          margin-top: 28px;
          font-size: 12px;
          color: #64748b;
        }

        @media (max-width: 600px) {
          .coming-soon-title {
            font-size: 36px;
          }
          .coming-soon-logo {
            height: 42px;
          }
        }
      `}</style>
    </div>
  );
};
