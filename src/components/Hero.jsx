import React from 'react';


export default function Hero() {
  const arrow = './public/arrow.svg';
  return (
    <section 
      className="relative w-full flex justify-center overflow-hidden min-h-screen flex-col justify-between pt-[72px]"
      style={{ minHeight: '820px' }}
    >
      {/* Background provided by parent zone wrapper in App.jsx */}


      {/* Vertical Guideline Accents (Matching Figma) */}
      <div className="absolute inset-0 pointer-events-none z-10 flex justify-center">
        <div className="w-full max-w-[1440px] h-full relative">
          {/* Left Vertical Lines */}
          <div className="absolute top-0 bottom-0 left-[48px] w-[1px] bg-white/[0.04]" />
          <div className="absolute top-0 bottom-0 left-[64px] w-[1px] bg-white/[0.04]" />

          {/* Center Column Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[58%] w-[1px] bg-white/[0.04] hidden lg:block" />

          {/* Right Vertical Lines */}
          <div className="absolute top-0 bottom-0 right-[64px] w-[1px] bg-white/[0.04]" />
          <div className="absolute top-0 bottom-0 right-[48px] w-[1px] bg-white/[0.04]" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-16 pt-16 md:pt-24 pb-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
          
          {/* Left Column: Headline, Subtitle, Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[74px] xl:text-[64px] font-semibold tracking-tight text-white leading-[100%] pb-[16px]">
              Designing digital products<br />
              with clarity and purpose
            </h1>

            <p className="w-[648px] max-w-full font-['Darker_Grotesque'] font-normal text-[24px] leading-[130%] tracking-[0%] pb-[32px]">
              From early product thinking to polished interfaces, I create clear and purposeful digital experiences.
            </p>

            {/* 3 Boxed Metadata Tags */} 
            <div className=" flex flex-wrap items-center gap-[12px]">
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
          <div className="lg:col-span-5 flex flex-col justify-center items-end">
            <div className="relative w-fit flex flex-col items-end ">
              <span className="font-['Darker_Grotesque'] font-bold text-[128px] leading-[100%] tracking-normal text-center text-white/60 block select-none">
                Portfolio
              </span>
              <span className="font-['Darker_Grotesque'] text-white/60 font-medium text-[18px] leading-[100%] tracking-normal text-center block select-none">
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
        <span className=" text-4xl leading-none animate-bounce mt-0.5" style={{ color: '#FFFFFFB2' }}><img  src={arrow} alt="arrow" /></span>
      </div>
    </section>
  );
}
