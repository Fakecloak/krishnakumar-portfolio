import React from 'react';

/**
 * BackgroundGrid — Figma-accurate vertical guide lines only.
 * Per audit: the corner glows are SECTION-SPECIFIC (About, CTA).
 * A fixed global glow bleeds into wrong sections (WorkIntro, CaseStudies).
 * Each section handles its own glow independently.
 */
export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center">
      <div className="w-full max-w-[1440px] h-full relative flex justify-between px-12 md:px-16">
        {/* Figma column guide lines — very faint white, ~3% opacity */}
        <div className="w-[1px] h-full bg-white/[0.03]" />
        <div className="w-[1px] h-full bg-white/[0.03] hidden sm:block" />
        <div className="w-[1px] h-full bg-white/[0.03] hidden md:block" />
        <div className="w-[1px] h-full bg-white/[0.03] hidden lg:block" />
        <div className="w-[1px] h-full bg-white/[0.03]" />
      </div>
    </div>
  );
}
