import React from 'react';

export default function PortraitMockup({ 
  imageSrc = "/portrait.png", 
  alt = "Krishnakumar K - Product Designer" 
}) {
  return (
    <div className="relative w-full max-w-[360px] aspect-[4/5] bg-[#0c0d14] border border-white/[0.12] overflow-hidden rounded-2xl shadow-2xl group flex items-end justify-center">
      {/* Subtle Inner Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 60%, rgba(59, 130, 246, 0.2) 0%, transparent 80%)'
        }}
      />
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full h-full object-cover object-top grayscale contrast-105 brightness-95 transform group-hover:scale-102 transition-transform duration-500" 
      />
    </div>
  );
}
