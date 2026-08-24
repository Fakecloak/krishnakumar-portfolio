import React from 'react';

/**
 * WorkIntro — Figma audit: PURE BLACK #08090f background, no glow/gradient.
 * This section immediately follows the hero and must be solid dark.
 */
export default function WorkIntro() {
  return (
    <section
      id="work"
      className="relative z-10 w-full overflow-hidden py-20 md:py-28 text-center scroll-mt-[75px]"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16">
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
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.02]">
          From product thinking to polished interfaces
        </h2>
      </div>
    </section>
  );
}
