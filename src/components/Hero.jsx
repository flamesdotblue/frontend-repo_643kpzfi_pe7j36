import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-orange-300" />
          <span className="text-sm tracking-wide text-orange-100/90">Dynamic Scrolling Experience</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Animated Scrolling That Feels Alive
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/80 md:text-lg">
          A minimalist motion aesthetic with diagonal light bands in red and orange, set on a textured dark canvas. Scroll to see subtle, delightful animations.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#features"
            className="rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Explore Effects
          </a>
          <a
            href="#marquee"
            className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            See the marquee
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
