import React from 'react';

const FooterCTA = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,102,0,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center text-white">
        <h3 className="text-2xl font-bold">Ready to craft your own motion?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-white/70">
          This layout shows how to combine a full-bleed Spline cover with elegant scroll animations.
        </p>
        <div className="mt-6">
          <a
            href="#top"
            className="rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Back to top
          </a>
        </div>
        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Motion Demo</p>
      </div>
    </footer>
  );
};

export default FooterCTA;
