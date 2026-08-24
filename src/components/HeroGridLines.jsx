import React from 'react';

export default function HeroGridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex justify-center">
      <div className="w-full max-w-[1440px] h-full relative">
        {/* Left Double Vertical Lines (16px gap, 0.5px border #FFFFFF 5%) */}
        <div className="absolute top-0 bottom-0 left-[48px] w-[1px] bg-white/[0.05]" />
        <div className="absolute top-0 bottom-0 left-[64px] w-[1px] bg-white/[0.05]" />

        {/* Column 2 Vertical Line (Center-Left Divider) */}
        <div className="absolute top-0 bottom-0 left-[480px] w-[1px] bg-white/[0.04] hidden lg:block" />

        {/* Column 3 Vertical Line (Where 'Portfolio' aligns) */}
        <div className="absolute top-0 bottom-0 left-[820px] w-[1px] bg-white/[0.05] hidden md:block" />

        {/* Column 4 Vertical Line (Before 'About' / 'Contact') */}
        <div className="absolute top-0 bottom-0 left-[1180px] w-[1px] bg-white/[0.04] hidden lg:block" />

        {/* Right Double Vertical Lines (16px gap, 0.5px border #FFFFFF 5%) */}
        <div className="absolute top-0 bottom-0 right-[64px] w-[1px] bg-white/[0.05]" />
        <div className="absolute top-0 bottom-0 right-[48px] w-[1px] bg-white/[0.05]" />

        {/* Top Horizontal Double Lines (16px gap) */}
        <div className="absolute left-0 right-0 top-[32px] h-[1px] bg-white/[0.05]" />
        <div className="absolute left-0 right-0 top-[48px] h-[1px] bg-white/[0.05]" />

        {/* Mid-Hero Horizontal Guide Line (Aligning with Heading Baseline) */}
        <div className="absolute left-0 right-0 top-[260px] h-[1px] bg-white/[0.03]" />

        {/* Tags Baseline Horizontal Guide */}
        <div className="absolute left-0 right-0 top-[520px] h-[1px] bg-white/[0.03]" />

        {/* Bottom Horizontal Double Lines (16px gap) */}
        <div className="absolute left-0 right-0 bottom-[64px] h-[1px] bg-white/[0.05]" />
        <div className="absolute left-0 right-0 bottom-[48px] h-[1px] bg-white/[0.05]" />
      </div>
    </div>
  );
}
