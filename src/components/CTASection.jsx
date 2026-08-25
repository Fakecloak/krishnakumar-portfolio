import React from 'react';

/**
 * CTASection — transparent background.
 * Background comes from the parent zone wrapper in App.jsx (site-bg.jpg original).
 */
export default function CTASection() {
  const arrow = './public/arrow.svg';
  const side_arrow = './public/side_arrow.svg';
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-20 md:py-28 scroll-mt-[75px]"
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-4">
          {/* Left Column: Heading + Email */}
          <div className="space-y-3">
            <div className="text-[18px] font-medium tracking-normal leading-[100%] text-white/70 ">
              Contact
            </div>
            <h2 className="font-['Darker_Grotesque'] text-[64px] font-bold tracking-normal leading-[100%] text-white">
              Let's Create Together
            </h2>
            <p className="text-[24px] tracking-normal leading-[130%] font-medium underline decoration-white/70 underline-offset-[25%] decoration-[1.5%] text-white/70"
                  style={{ textDecorationSkipInk: 'auto' }}>
              <a
                href="mailto:krishnakumar.191104@gmail.com"
                className="hover:text-white transition-colors"
              >
                krishnakumar.191104@gmail.com
              </a>
            </p>
          </div>

          {/* Right Column: CTA Buttons */}
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#resume"
              className="inline-flex items-center justify-center h-[64px] gap-3 px-6 rounded-[45px] border border-white text-[24px] leading-[120%] tracking-normal font-medium text-white hover:bg-white/10 transition-all"
            >
              <span >Download Resume</span>
              <span className="text-[24px] leading-none w-[14px] "><img className="text-white/100 "src={arrow} alt="arrow" /></span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center  h-[62px] gap-3 p-6 rounded-[45px] bg-white text-black hover:bg-zinc-100 transition-all text-lg sm:text-xl font-semibold shadow-lg shadow-white/5"
            >
              <span className='text-[24px] font-["Darker_Grotesque"] font-medium leading-[120%] tracking-normal text=[#1B1B1B] '>LinkedIn</span>
              <span><img src={side_arrow} alt="sidearrow" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
