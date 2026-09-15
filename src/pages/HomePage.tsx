import React from 'react';
import { HeroFan } from '../components/HeroFan';
import { FeatureCards } from '../components/FeatureCards';
import { PartnerLogos } from '../components/PartnerLogos';
import { BentoGrid } from '../components/BentoGrid';
import { Testimonial } from '../components/Testimonial';
import { ContactCta } from '../components/ContactCta';

interface HomePageProps {
  onGetStarted: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onGetStarted }) => {
  return (
    <main>
      <HeroFan onGetStarted={onGetStarted} onWatchDemo={onGetStarted} />
      <FeatureCards />
      <PartnerLogos />
      <BentoGrid />
      <Testimonial />
      <ContactCta />
    </main>
  );
};
