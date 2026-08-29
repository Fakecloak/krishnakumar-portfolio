// ─────────────────────────────────────────────
// CaseStudy1.jsx — Presentational Component
//
// Data moved to constants/portfolioData.js
// ─────────────────────────────────────────────
import React from 'react';
import LaptopMockup from './LaptopMockup';
import { caseStudy1, assets } from '../constants/portfolioData';

export default function CaseStudy1() {
  return (
    <section className="w-full max-w-[1440px] mx-auto pt-0 px-[64px] pb-[64px]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

        {/* Left Column: Case Study 01 Info */}
        <div className="w-full lg:w-1/2 flex flex-col ">
          <div className="font-['Darker_Grotesque'] font-medium text-[20px] leading-[100%] tracking-normal text-[#FFFFFFB2] flex items-center gap-2 pb-[8px]">
            <span>Case Study 01 – PixelWhisk</span>
          </div>

          <h3 className="font-['Darker_Grotesque'] font-semibold text-[48px] leading-[100%] tracking-normal text-white pb-[16px]">
            From request to delivery
          </h3>

          <p className="font-['Darker_Grotesque'] font-normal text-[24px] leading-[130%] tracking-normal text-white pb-[32px]">
            PixelWhisk connects clients and internal teams
            <br />
            throughout the website development process.
          </p>

          {/* Tags */}
          <div className="flex max-w-[90%] flex-wrap items-center gap-2.5 pb-[64px]">
            {caseStudy1.tags.map((tag, idx) => (
              <div
                key={idx}
                className="flex h-[27px] px-[8px] pt-[8px] pb-[12px] items-center justify-center border-[0.5px] border-white"
              >
                <p className="font-['Darker_Grotesque'] text-[20px] font-normal leading-[5px]">
                  {tag}
                </p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="">
            <a
              href="#case-study-1"
              className="inline-flex  h-[64px] items-center justify-center bg-white gap-3 p-6 rounded-[45px] border border-white/30 text-[#1B1B1B] hover:bg-[#999999] transition-all font-['Darker_Grotesque'] font-medium text-[24px] group"
            >
              <span>View Case Study</span>
              <span className="transition-transform group-hover:translate-x-1">
                <img src={assets.leftArrow} alt="left arrow" />
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
