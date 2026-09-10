// ─────────────────────────────────────────────
// CaseStudy2.jsx — Presentational Component
//
// Data moved to constants/portfolioData.js
// ─────────────────────────────────────────────
import React from 'react';
import { Link } from 'react-router-dom';
import LaptopMockup from './LaptopMockup';
import { caseStudy2, assets } from '../constants/portfolioData';

export default function CaseStudy2() {
  return (
    <section id="case-study-lil-big-things" className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[64px] pt-12 lg:pt-[64px] pb-16 lg:pb-[128px]">

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

        {/* Left Column: Case Study 02 Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">

          <div className="font-['Darker_Grotesque'] font-medium text-[20px] leading-[100%] tracking-normal text-[#FFFFFFB2] flex items-center gap-2 pb-[8px]">
            <span>Case Study 02 – Lil Big Things</span>
          </div>

          <h3 className="font-['Darker_Grotesque'] font-semibold text-[36px] sm:text-[42px] md:text-[48px] leading-[105%] sm:leading-[100%] tracking-normal text-white pb-[16px]">
            From scattered tasks to clear
            <br />
            progress
          </h3>

          <p className="font-['Darker_Grotesque'] font-normal text-[20px] sm:text-[24px] leading-[130%] tracking-normal text-white  pb-[24px] sm:pb-[32px]">
            A work management platform that helps teams organize tasks, track
            <br className="hidden md:inline" />
            ownership, and keep customers informed throughout the workflow.
          </p>

          {/* Tags */}
          <div className="flex max-w-full lg:max-w-[90%] flex-wrap items-center gap-2.5 pb-[32px] sm:pb-[48px] lg:pb-[64px]">
            {caseStudy2.tags.map((tag, idx) => (
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
            <Link
              to="/case-study/lil-big-things"
              className="inline-flex  h-[64px] items-center justify-center bg-white gap-3 p-6 rounded-[45px] border border-white/30 text-[#1B1B1B] hover:bg-[#999999]  C font-['Darker_Grotesque'] font-medium text-[24px] group"
            >
              <span>View Case Study</span>
              <span className="transition-transform group-hover:translate-x-1">
                <img src={assets.leftArrow} alt="left arrow" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Case Study 02 Laptop Display */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <LaptopMockup variant="lilbigthings" />
        </div>

      </div>

    </section>
  );
}