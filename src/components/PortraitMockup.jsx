import React from 'react';

export default function PortraitMockup({
  imageSrc = "/portrait.png",
  alt = "Krishnakumar K - Product Designer"
}) {
  return (
    <div className="relative box-border w-full max-w-[399px] aspect-[399/437] h-auto rounded-[6px] border-[0.5px] border-white/50 overflow-hidden shadow-2xl group flex items-end justify-center">

      {/* Subtle Inner Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-white/5"
        // style={{
        //   background:
        //     'radial-gradient(circle at 50% 60%, rgba(59, 130, 246, 0.2) 0%, transparent 80%)'
        // }}
      /> 

      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover"
      />

    </div>
  );
}
