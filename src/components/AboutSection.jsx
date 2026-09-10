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
      className="relative w-full overflow-hidden pt-0 pb-[64px] md:pb-[128px] scroll-mt-[75px]"
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[64px] items-start">

  {/* Left Side: Bio Text */}
  <div className="flex flex-col justify-center">

    <div className="font-['Darker_Grotesque'] font-medium text-[18px] leading-[100%] tracking-normal text-white/60 pb-[8px]">
      About My Experience
    </div>

    <h2 className="font-['Darker_Grotesque'] font-bold text-[36px] sm:text-[42px] md:text-[48px] leading-[105%] sm:leading-[100%] tracking-normal pb-[16px]">
      From creative design to product design
    </h2>

    <div className="space-y-2">
      <p className="font-['Darker_Grotesque'] font-medium text-[20px] sm:text-[24px] leading-[130%] tracking-normal">
        I joined Lil Big Things as a Creative Design Intern and grew into a Creative Designer role, gradually moving deeper into product design. Over the past year, around 60% of my work has been focused on products, including LBT's internal product and PixelWhisk.
      </p>

      <p className="font-['Darker_Grotesque'] font-medium text-[20px] sm:text-[24px] leading-[130%] tracking-normal">
        I've worked across the product process—from understanding requirements and defining user flows to wireframing, high-fidelity UI, and design systems. I enjoy turning complex requirements into clear, usable product experiences, and that's where I want to take my career next.
      </p>
    </div>

  </div>

  {/* Right Side: Portrait Frame */}
  <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
    <PortraitMockup imageSrc={portraitImageSrc} />
  </div>

</div>
      </div>
    </section>
  );
}
