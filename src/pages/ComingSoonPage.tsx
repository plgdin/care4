import React from 'react';

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

        {/* Headline */}
        <h1 className="coming-soon-title">Care4 Associates</h1>
        <h2 className="coming-soon-subtitle">Coming Soon</h2>
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
          max-width: 580px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .coming-soon-logo-box {
          background: #ffffff;
          padding: 16px 32px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          margin-bottom: 28px;
          display: inline-flex;
        }

        .coming-soon-logo {
          height: 56px;
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
          font-size: 44px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin: 0 0 10px 0;
          line-height: 1.15;
        }

        .coming-soon-subtitle {
          font-size: 28px;
          font-weight: 600;
          color: #93c5fd;
          letter-spacing: 0.02em;
          margin: 0;
        }

        @media (max-width: 600px) {
          .coming-soon-title {
            font-size: 32px;
          }
          .coming-soon-subtitle {
            font-size: 22px;
          }
          .coming-soon-logo {
            height: 42px;
          }
        }
      `}</style>
    </div>
  );
};
