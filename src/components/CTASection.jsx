import React from 'react';

/**
 * CTASection — transparent background.
 * Background comes from the parent zone wrapper in App.jsx (site-bg.jpg original).
 */
export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-20 md:py-28 scroll-mt-[75px]"
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-4">
          {/* Left Column: Heading + Email */}
          <div className="space-y-2">
            <div className="text-sm sm:text-base font-bold tracking-[0.2em] text-zinc-400 uppercase">
              Contact
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold tracking-tight text-white leading-tight">
              Let's Create Together
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-400 font-medium">
              <a
                href="mailto:krishnakumar.191104@gmail.com"
                className="hover:text-white transition-colors"
              >
                krishnakumar.191104@gmail.com
              </a>
            </p>
          </div>

          {/* Right Column: CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all text-lg sm:text-xl font-semibold"
            >
              <span>Download Resume</span>
              <span>↓</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-black hover:bg-zinc-100 transition-all text-lg sm:text-xl font-semibold shadow-lg shadow-white/5"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
