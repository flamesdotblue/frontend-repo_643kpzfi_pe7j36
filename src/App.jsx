import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Marquee from './components/Marquee';
import FooterCTA from './components/FooterCTA';

const App = () => {
  return (
    <div id="top" className="min-h-screen bg-black font-inter text-white">
      <Hero />
      <Features />
      <Marquee />
      <FooterCTA />
    </div>
  );
};

export default App;
