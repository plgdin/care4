import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSnippet } from '../components/AboutSnippet';
import { CategoriesSection } from '../components/CategoriesSection';
import { BrandsSection } from '../components/BrandsSection';
import { HorecaBanner } from '../components/HorecaBanner';
import { ValueProps } from '../components/ValueProps';

interface HomePageProps {
  onNavigate: (tab: string, anchorId?: string) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <main className="home-page">
      <Hero 
        onExplore={() => onNavigate('products')} 
        onTalkToTeam={onOpenQuote} 
      />
      <AboutSnippet 
        onLearnMore={() => onNavigate('about')} 
      />
      <CategoriesSection 
        onViewAll={() => onNavigate('products')}
        onSelectCategory={() => onNavigate('products')}
      />
      <BrandsSection 
        onViewAllBrands={() => onNavigate('products')}
      />
      <HorecaBanner />
      <ValueProps 
        onGetQuote={onOpenQuote} 
      />
    </main>
  );
};
