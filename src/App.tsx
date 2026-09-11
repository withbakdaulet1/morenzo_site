import React from 'react';
import { Hero } from './components/Hero';
import { WhyMorenzo } from './components/WhyMorenzo';
import { Categories } from './components/Categories';
import { Assortment } from './components/Assortment';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full min-h-full bg-forest-900">
      <Hero />
      <main>
        <WhyMorenzo />
        <Categories />
        <Assortment />
        <FinalCta />
      </main>
      <Footer />
    </div>);

}