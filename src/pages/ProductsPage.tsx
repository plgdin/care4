import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { PricingTable } from '../components/PricingTable';
import { ContactCta } from '../components/ContactCta';

export const ProductsPage: React.FC = () => {
  return (
    <main>
      <ProductGrid />
      <PricingTable />
      <ContactCta />
    </main>
  );
};
