// ─────────────────────────────────────────────
// Hero.jsx — Presentational Component
//
// Asset path moved to constants/portfolioData.js
// ─────────────────────────────────────────────
import React from 'react';
import { assets } from '../constants/portfolioData';

export default function Hero() {
  return (
    <section 
      className="relative w-full flex justify-center overflow-hidden flex-col justify-between pt-[64px] md:pt-[72px] min-h-[100svh] lg:min-h-[820px]"
    >
      {/* Background provided by parent zone wrapper in App.jsx */}

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 pt-10 sm:pt-16 md:pt-24 pb-8 md:pb-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-8">
          
          {/* Left Column: Headline, Subtitle, Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[74px] xl:text-[64px] font-semibold tracking-tight text-white leading-[105%] sm:leading-[100%] pb-[16px]">
              Designing digital products<br />
              with clarity and purpose
            </h1>

            <p className="w-[648px] max-w-full font-['Darker_Grotesque'] font-normal text-[20px] sm:text-[24px] leading-[130%] tracking-[0%] pb-[24px] sm:pb-[32px]">
              From early product thinking to polished interfaces, I create clear and purposeful digital experiences.
            </p>

            {/* 3 Boxed Metadata Tags */} 
            <div className=" flex flex-wrap items-center gap-[10px] sm:gap-[12px]">
              <div className="flex h-[27px] px-[8px] pt-[8px] pb-[12px] items-center justify-center border-[0.5px] border-white  ">
              <p className="font-['Darker_Grotesque'] text-[20px] font-normal leading-[5px]">
                Product Design
              </p>
              </div>

              <div className="flex h-[27px] px-[8px] pt-[8px] pb-[12px] items-center justify-center border-[0.5px] border-white  ">
              <p className="font-['Darker_Grotesque'] text-[20px] font-normal leading-[5px]">
                UI / UX Design
              </p>
              </div>

              <div className="flex h-[27px] px-[8px] pt-[8px] pb-[12px] items-center justify-center border-[0.5px] border-white  ">
              <p className="font-['Darker_Grotesque'] text-[20px] font-normal leading-[5px]">
                Design Systems
              </p>
              </div>
          </div>
          </div>

          {/* Right Column: 'Portfolio' anchored */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
            <div className="relative w-fit flex flex-col items-start lg:items-end">
              <span className="font-['Darker_Grotesque'] font-bold text-[56px] sm:text-[84px] lg:text-[128px] leading-[100%] tracking-normal text-left lg:text-right text-white/60 block select-none">
                Portfolio
              </span>
              <span className="font-['Darker_Grotesque'] text-white/60 font-medium text-[16px] sm:text-[18px] leading-[100%] tracking-normal text-left lg:text-right block select-none">
                SELECTED WORKS • 2026
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Center Scroll Prompt */}
      <div className="relative z-20 w-full flex flex-col justify-center items-center gap-1 pb-8">
        <span
          style={{
            display: 'block',
            width: '120px',
            textAlign: 'center',
            fontFamily: "'Darker Grotesque', sans-serif",
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '130%',
            letterSpacing: '0%',
            color: '#FFFFFFB2',
            opacity: 1,
            whiteSpace: 'nowrap',
          }}
        >
          Scroll to explore
        </span>
        <span className=" text-4xl leading-none animate-bounce mt-0.5" style={{ color: '#FFFFFFB2' }}>
          <img src={assets.arrow} alt="arrow" />
        </span>
      </div>
    </section>
  );
}
