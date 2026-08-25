import React from 'react';

/**
 * WorkIntro — Figma audit: PURE BLACK #08090f background, no glow/gradient.
 * This section immediately follows the hero and must be solid dark.
 */
export default function WorkIntro() {
  return (
    <section
      id="work"
      className="relative z-10 w-full overflow-hidden  text-center scroll-mt-[75px]"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto  pt-[128px] pb-[84px]">
        <div
          style={{
            color: '#FFFFFFB2',
            fontFamily: "'Darker Grotesque', sans-serif",
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            verticalAlign: 'bottom',
            marginBottom: '14px',
          }}
        >
          Product Works
        </div>
        
        <h2 className="font-['Darker_Grotesque'] font-bold text-[36px] sm:text-[44px] md:text-[56px] leading-none tracking-normal text-center">
          From product thinking to polished interfaces
        </h2>
      </div>
    </section>
  );
}
