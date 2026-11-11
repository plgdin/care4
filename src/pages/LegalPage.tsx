import React from 'react';
import { CONTACT_INFO } from '../data/siteData';

type LegalPageType = 'privacy' | 'terms';

const LAST_UPDATED = 'November 11, 2026';

const privacySections = [
  {
    title: 'Information we collect',
    paragraphs: [
      'When you contact us or request a quotation, we may collect the details you submit, such as your name, business name, email address, phone number, delivery location, and product requirements.',
      'Our website may also collect basic technical and usage information, such as browser type, device information, pages viewed, and approximate location. Where enabled, cookies or analytics tools may help us understand website traffic and improve the site.'
    ]
  },
  {
    title: 'How we use information',
    paragraphs: [
      'We use this information to respond to enquiries, prepare quotations, provide product and supply support, maintain website security, improve our services, and meet applicable legal requirements.'
    ]
  },
  {
    title: 'Cookies and analytics',
    paragraphs: [
      'Cookies are small files stored by your browser. Essential cookies may support basic website functions. If analytics tools are enabled, they may use cookies or similar technologies to report website activity. You can manage or disable cookies in your browser settings; some site functions may then work differently.'
    ]
  },
  {
    title: 'Sharing and retention',
    paragraphs: [
      'We do not sell personal information. We may share it with service providers who help operate our website or respond to your requests, and where disclosure is required by law. We keep information only as long as needed for these purposes, legitimate business records, or legal obligations.'
    ]
  },
  {
    title: 'Your choices and contact',
    paragraphs: [
      'You may contact us to ask about, correct, or request deletion of personal information you have provided, subject to applicable law. Contact Care4 Associates at'
    ]
  }
];

const termsSections = [
  {
    title: 'Website information',
    paragraphs: [
      'This website provides general information about Care4 Associates, our hospitality supplies, product categories, and services. Product descriptions, images, specifications, and availability are provided for guidance and may change without notice.'
    ]
  },
  {
    title: 'Enquiries and quotations',
    paragraphs: [
      'Submitting an enquiry or quotation request does not create an order or guarantee availability, pricing, delivery dates, or supply. An order is accepted only after Care4 Associates confirms the relevant details in writing.'
    ]
  },
  {
    title: 'Acceptable use',
    paragraphs: [
      'You agree not to misuse this website, interfere with its operation, attempt unauthorized access, or copy and use website content in a way that infringes applicable rights.'
    ]
  },
  {
    title: 'Intellectual property and external links',
    paragraphs: [
      'Website text, design, and original materials belong to Care4 Associates or their respective owners. Brand names and marks remain the property of their owners. Links to external websites are provided for convenience; we do not control their content or privacy practices.'
    ]
  },
  {
    title: 'Limitation and changes',
    paragraphs: [
      'We aim to keep website information accurate and available, but provide it on an “as available” basis. To the extent permitted by law, Care4 Associates is not responsible for losses arising solely from reliance on general website information or temporary website interruption. These terms may be updated from time to time; the date above shows the latest revision.'
    ]
  }
];

export const LegalPage: React.FC<{ type: LegalPageType }> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const sections = isPrivacy ? privacySections : termsSections;

  return (
    <main className="legal-page">
      <div className="legal-page-inner">
        <h1>{isPrivacy ? 'Privacy Policy' : 'Terms of Use'}</h1>
        <p className="legal-updated">Last updated: {LAST_UPDATED}</p>
        <p className="legal-intro">
          {isPrivacy
            ? 'This policy explains how Care4 Associates handles information when you visit our website or contact us.'
            : 'These terms apply when you access or use the Care4 Associates website.'}
        </p>
        {sections.map(section => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {isPrivacy && section.title === 'Your choices and contact' && (
              <p>
                <a href={`mailto:${CONTACT_INFO.emails[1]}`}>{CONTACT_INFO.emails[1]}</a>
                {' '}or call {CONTACT_INFO.landlines[0]}.
              </p>
            )}
          </section>
        ))}
      </div>
      <style>{`
        .legal-page { background: #f8fafc; min-height: 65vh; padding: 64px 24px 88px; }
        .legal-page-inner { max-width: 860px; margin: 0 auto; padding: 44px 52px; background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; }
        .legal-page h1 { margin: 0 0 8px; color: #0f1c2d; font: 800 clamp(30px, 4vw, 42px)/1.2 var(--font-heading); }
        .legal-updated { margin: 0 0 22px; color: #64748b; font-size: 14px; }
        .legal-intro { margin: 0 0 32px; color: #334155; font-size: 17px; line-height: 1.65; }
        .legal-section { margin-top: 26px; }
        .legal-section h2 { margin: 0 0 9px; color: #102843; font: 700 20px/1.35 var(--font-heading); }
        .legal-section p { margin: 0 0 12px; color: #475569; font: 400 15px/1.7 var(--font-body); }
        .legal-section a { color: #02348d; font-weight: 600; }
        @media (max-width: 600px) {
          .legal-page { padding: 32px 16px 56px; }
          .legal-page-inner { padding: 28px 22px; }
        }
      `}</style>
    </main>
  );
};
