import React from 'react';
import LaptopMockup from './LaptopMockup';

export default function CaseStudy1() {
  const tags = ["UX Research", "User Flows", "Wireframes", "Design System", "Hi-fi Screens"];
  const left_arrow = "/public/left_arrow.svg";
  return (
    <section className="w-full max-w-[1440px] mx-auto pt-0 px-[64px] pb-[64px]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

        {/* Left Column: Case Study 01 Info */}
        <div className="w-full lg:w-1/2 flex flex-col ">
          <div className="font-['Darker_Grotesque'] font-medium text-[20px] leading-[100%] tracking-normal text-[#FFFFFFB2] flex items-center gap-2 mb-3">
            <span>Case Study 01 – PixelWhisk</span>
          </div>

          <h3 className="font-['Darker_Grotesque'] font-semibold text-[48px] leading-[100%] tracking-normal text-white">
            From request to delivery
          </h3>

          <p className="font-['Darker_Grotesque'] font-normal text-[24px] leading-[130%] tracking-normal text-white mt-4">
            PixelWhisk connects clients and internal teams
            <br />
            throughout the website development process.
          </p>

          {/* Tags */}
          <div className="mt-6 flex w-[441px] h-[64px] flex-wrap items-center gap-2.5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 border border-white/15 bg-white/[0.02] text-zinc-300 text-sm sm:text-base font-semibold rounded-[2px]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <a
              href="#case-study-1"
              className="inline-flex  h-[64px] items-center justify-center bg-white gap-3 p-6 rounded-[45px] border border-white/30 text-[#1B1B1B] hover:border-white hover:bg-white/10 transition-all font-['Darker_Grotesque'] font-semibold text-[20px] group"
            >
              <span>View Case Study</span>
              <span className="transition-transform group-hover:translate-x-1">
                <img src={left_arrow} alt="left arrow" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Case Study 01 Laptop Display */}
        <div className="w-full lg:w-1/2 flex items-center justify-end">
          <LaptopMockup variant="pixelwhisk" />
        </div>

      </div>
    </section>
  );
}
