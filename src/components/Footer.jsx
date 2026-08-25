import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full relative z-10 border-t border-[0.5px] border-white/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-base sm:text-lg font-medium" style={{ color: '#000000B2' }}>
        <div>Designed by
          <span className="font-['Darker_Grotesque'] font-medium text-[20px] leading-[100%] tracking-normal text-[#000000B2]"> Krishnakumar K</span>
        </div>

        <div className='flex items-center gap-12 font-["Darker_Grotesque"] font-medium text-[20px] leading-[100%] tracking-normal'>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noreferrer"
            className="underline underline-[#000000]/70 decoration-solid decoration-[1.5%] underline-offset-[25%]  text-[#000000]/70 decoration-[1.5px] hover:text-white transition-colors"
          >
            Behance
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="underline underline-[#000000]/70 decoration-solid decoration-[1.5%] underline-offset-[25%] text-[#000000]/70 decoration-[1.5px] hover:text-white transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="mailto:krishnakumar.191104@gmail.com"
            className="underline underline-[#000000]/70 decoration-solid decoration-[1.5%] decoration-[#000000]/70 underline-offset-[25%] text-[#000000]/70 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
