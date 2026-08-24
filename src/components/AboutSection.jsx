import React from 'react';
import PortraitMockup from './PortraitMockup';

/**
 * AboutSection — transparent background.
 * Background comes from the parent zone wrapper in App.jsx (site-bg.jpg original).
 */
export default function AboutSection({ portraitImageSrc }) {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-24 md:py-36 scroll-mt-[75px]"
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Bio Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-sm sm:text-base font-bold tracking-[0.2em] text-zinc-400 uppercase mb-3">
              About My Experience
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold tracking-tight text-white leading-[1.02]">
              From creative design to product design
            </h2>

            <div className="space-y-5 pt-5 text-xl sm:text-2xl text-zinc-300 font-medium leading-relaxed max-w-xl">
              <p>
                I joined Lil Big Things as a Creative Design Intern and grew into a Creative Designer role, gradually moving deeper into product design. Over the past year, around 60% of my work has been focused on products, including LBT's internal product and PixelWhisk.
              </p>
              <p>
                I've worked across the product process—from understanding requirements and defining user flows to wireframing, high-fidelity UI, and design systems. I enjoy turning complex requirements into clear, usable product experiences, and that's where I want to take my career next.
              </p>
            </div>
          </div>

          {/* Right Side: Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PortraitMockup imageSrc={portraitImageSrc} />
          </div>
        </div>
      </div>
    </section>
  );
}
