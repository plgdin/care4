import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Smartphone, 
  Send, 
  CheckCircle, 
  ExternalLink, 
  ChevronRight,
  Clock
} from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    industry: 'Hotels',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Hero Banner Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-bg-overlay" />
        <div className="contact-hero-container">
          <div className="contact-breadcrumb">
            <button onClick={onNavigateHome} className="breadcrumb-link">Home</button>
            <ChevronRight size={12} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Contact Us</span>
          </div>

          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-desc">
            Get in touch with our team for bulk hospitality supplies, brand catalogues, and personalized quotations.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Map + Contact Form */}
      <section className="contact-content-section">
        <div className="contact-content-container">
          {/* Left Column: Office Address, Telephones, and Map */}
          <div className="contact-details-col">
            <div className="contact-card address-card">
              <div className="card-badge-row">
                <span className="contact-badge">Head Office</span>
              </div>
              <h2 className="company-headline">{CONTACT_INFO.company}</h2>

              {/* Address Row */}
              <div className="contact-info-row">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Office Address</span>
                  <p className="info-value address-value">
                    {CONTACT_INFO.addressLine1}<br />
                    {CONTACT_INFO.addressLine2}
                  </p>
                </div>
              </div>

              {/* Landline Phone */}
              <div className="contact-info-row">
                <div className="info-icon-box">
                  <Phone size={20} />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Telephone</span>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="info-value phone-link">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Mobile Numbers */}
              <div className="contact-info-row">
                <div className="info-icon-box">
                  <Smartphone size={20} />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Mobile</span>
                  <div className="mobile-tags-wrap">
                    {CONTACT_INFO.mobiles.map((mob, idx) => (
                      <React.Fragment key={idx}>
                        <a 
                          href={`tel:${mob.replace(/\s+/g, '')}`} 
                          className="mobile-pill-link"
                        >
                          {mob}
                        </a>
                        {idx < CONTACT_INFO.mobiles.length - 1 && (
                          <span className="mobile-sep">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business Hours & Service Note */}
              <div className="contact-info-row hours-row">
                <div className="info-icon-box">
                  <Clock size={20} />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Working Hours</span>
                  <p className="info-value">Monday – Saturday: 9:00 AM – 6:30 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map Card */}
            <div className="contact-card map-card">
              <div className="map-card-header">
                <div className="map-header-text">
                  <h3 className="map-title">Location Map</h3>
                  <p className="map-sub">Statue, Trivandrum, Kerala</p>
                </div>
                <a 
                  href={CONTACT_INFO.mapDirectionsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-directions"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="map-iframe-container">
                <iframe
                  title="Care 4 Associates Location Map"
                  src={CONTACT_INFO.mapEmbedUrl}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="contact-form-col">
            <div className="contact-card form-card">
              {submitted ? (
                <div className="contact-success-state">
                  <CheckCircle size={64} color="#16a34a" />
                  <h3 className="success-headline">Thank You!</h3>
                  <p className="success-text">
                    Your inquiry has been submitted successfully. Our hospitality consultant will contact you shortly.
                  </p>
                  <button 
                    className="btn-form-reset" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        business: '',
                        email: '',
                        phone: '',
                        industry: 'Hotels',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="contact-form-element" onSubmit={handleSubmit}>
                  <div className="form-card-header">
                    <span className="contact-badge red-badge">Quick Inquiry</span>
                    <h2 className="form-main-title">Send Us a Message</h2>
                    <p className="form-sub-title">
                      Fill out the form below and our hospitality supply team will get back to you promptly.
                    </p>
                  </div>

                  <div className="form-input-grid">
                    <div className="form-field">
                      <label>Contact Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Business / Property Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Grand Palace Hotel"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Work Email *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="rahul@hotel.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field full">
                    <label>Industry Segment</label>
                    <select 
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    >
                      <option value="Hotels">Hotels & Resorts</option>
                      <option value="Restaurants">Restaurants & Cafes</option>
                      <option value="Catering">Catering & Banquets</option>
                      <option value="Healthcare">Healthcare & Hospitals</option>
                      <option value="Commercial">Commercial / Facilities</option>
                    </select>
                  </div>

                  <div className="form-field full">
                    <label>Product Requirements / Message *</label>
                    <textarea 
                      rows={4} 
                      required
                      placeholder="Specify product requirements, quantities, or specific brands needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-send-message">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          background-color: var(--color-bg-page, #fafaf8);
          min-height: 100vh;
        }

        .contact-hero-section {
          position: relative;
          background: linear-gradient(135deg, #02348d 0%, #102843 100%);
          color: #ffffff;
          padding: 56px 24px 64px;
        }

        .contact-hero-container {
          max-width: var(--content-max-width, 1280px);
          margin: 0 auto;
        }

        .contact-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-size: 13px;
        }

        .breadcrumb-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 0;
          font-family: inherit;
          transition: color 0.15s;
        }

        .breadcrumb-link:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        .breadcrumb-sep {
          color: rgba(255, 255, 255, 0.4);
        }

        .breadcrumb-current {
          color: #ffffff;
          font-weight: 600;
        }

        .contact-hero-title {
          font-size: 42px;
          font-weight: 700;
          margin: 0 0 14px 0;
          letter-spacing: -0.02em;
        }

        .contact-hero-desc {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          max-width: 680px;
          margin: 0;
        }

        .contact-content-section {
          padding: 60px 24px 80px;
        }

        .contact-content-container {
          max-width: var(--content-max-width, 1280px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .contact-details-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .contact-card {
          background: #ffffff;
          border: 1px solid var(--color-border, #e0e0e0);
          border-radius: var(--radius-md, 14px);
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .contact-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
          background: #e0f2fe;
          color: #0369a1;
        }

        .contact-badge.red-badge {
          background: #fee2e2;
          color: #b91c1c;
        }

        .company-headline {
          font-size: 24px;
          font-weight: 700;
          color: var(--color-navy-dark, #102843);
          margin: 12px 0 24px 0;
        }

        .contact-info-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid #f1f5f9;
        }

        .contact-info-row:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: none;
        }

        .info-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #f0f7ff;
          color: var(--color-primary, #02348d);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-text-box {
          flex: 1;
        }

        .info-label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
          color: #94a3b8;
          margin-bottom: 4px;
        }

        .info-value {
          margin: 0;
          font-size: 15px;
          line-height: 1.5;
          color: var(--color-text-main, #102843);
          font-weight: 500;
        }

        .address-value {
          line-height: 1.6;
        }

        .phone-link {
          color: var(--color-primary, #02348d);
          text-decoration: none;
          font-weight: 600;
        }

        .phone-link:hover {
          text-decoration: underline;
        }

        .mobile-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px 8px;
        }

        .mobile-pill-link {
          color: var(--color-navy-dark, #102843);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: color 0.15s;
        }

        .mobile-pill-link:hover {
          color: var(--color-primary, #02348d);
          text-decoration: underline;
        }

        .mobile-sep {
          color: #cbd5e1;
          font-weight: 300;
        }

        .map-card {
          padding: 24px;
        }

        .map-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .map-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-navy-dark, #102843);
          margin: 0;
        }

        .map-sub {
          margin: 4px 0 0 0;
          font-size: 13px;
          color: #64748b;
        }

        .btn-directions {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary, #02348d);
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 8px;
          padding: 6px 12px;
          text-decoration: none;
          transition: all 0.18s;
        }

        .btn-directions:hover {
          background: var(--color-primary, #02348d);
          color: #ffffff;
          border-color: var(--color-primary, #02348d);
        }

        .map-iframe-container {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
          background: #e2e8f0;
          height: 280px;
        }

        .map-iframe-container iframe {
          display: block;
          width: 100%;
          height: 100%;
        }

        /* Form Card */
        .form-card {
          padding: 36px 32px;
        }

        .form-card-header {
          margin-bottom: 24px;
        }

        .form-main-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--color-navy-dark, #102843);
          margin: 10px 0 6px 0;
        }

        .form-sub-title {
          font-size: 14px;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        .form-input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-field.full {
          margin-bottom: 16px;
        }

        .form-field label {
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .form-field input,
        .form-field select,
        .form-field textarea {
          border: 1px solid var(--color-border, #e0e0e0);
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 14px;
          font-family: inherit;
          color: #0f172a;
          background: #ffffff;
          transition: border-color 0.18s, box-shadow 0.18s;
        }

        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          outline: none;
          border-color: var(--color-primary, #02348d);
          box-shadow: 0 0 0 3px rgba(2, 52, 141, 0.1);
        }

        .btn-send-message {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px 24px;
          background: var(--color-accent-red, #d91b2a);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.18s, transform 0.1s;
          font-family: inherit;
        }

        .btn-send-message:hover {
          background: var(--color-accent-red-hover, #b81522);
          transform: translateY(-1px);
        }

        .contact-success-state {
          text-align: center;
          padding: 48px 20px;
        }

        .success-headline {
          font-size: 24px;
          font-weight: 700;
          color: var(--color-navy-dark, #102843);
          margin: 16px 0 8px;
        }

        .success-text {
          font-size: 15px;
          color: #64748b;
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .btn-form-reset {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #334155;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
        }

        .btn-form-reset:hover {
          background: #e2e8f0;
        }

        @media (max-width: 900px) {
          .contact-content-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .form-input-grid {
            grid-template-columns: 1fr;
          }
          .contact-hero-title {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
};
