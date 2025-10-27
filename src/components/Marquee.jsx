import React from 'react';
import { motion } from 'framer-motion';

const Row = ({ children, reverse = false }) => {
  const distance = '50%';
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap py-4 text-white/90"
        animate={{ x: reverse ? ["-" + distance, '0%'] : ['0%', '-' + distance] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const Marquee = () => {
  return (
    <section id="marquee" className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">Endless Motion</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-white/70">
          A continuous marquee demonstrates horizontal motion synced with your scroll journey.
        </p>
        <div className="mt-8 space-y-3">
          <Row>
            <span className="text-xl font-medium">Modern • Minimal • Dynamic • Tech • Corporate • Digital •</span>
          </Row>
          <Row reverse>
            <span className="text-xl font-medium">Red & Orange Light Bands • Smooth • Subtle • Elegant •</span>
          </Row>
          <Row>
            <span className="text-xl font-medium">Scroll • Reveal • Parallax Hints • Delight •</span>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
