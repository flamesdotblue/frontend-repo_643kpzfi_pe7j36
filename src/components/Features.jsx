import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gauge, ScrollText, MousePointer2 } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Smooth Reveal',
    text: 'Cards slide and fade into view as you scroll for a sleek, modern feel.'
  },
  {
    icon: Gauge,
    title: 'Performance First',
    text: 'Lightweight animations powered by Framer Motion for snappy interactions.'
  },
  {
    icon: ScrollText,
    title: 'Scroll-Aware',
    text: 'Subtle motion triggers as elements enter the viewport.'
  },
  {
    icon: MousePointer2,
    title: 'Interactive',
    text: 'Hover effects and tactile feedback without sacrificing clarity.'
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' }
  })
};

const Features = () => {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Designed for Motion</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Clean, corporate-friendly motion language layered on a dark, textured backdrop.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-2xl backdrop-blur transition hover:bg-white/10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
            variants={itemVariants}
            custom={idx}
          >
            <f.icon className="h-6 w-6 text-orange-300" />
            <h3 className="mt-3 text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
