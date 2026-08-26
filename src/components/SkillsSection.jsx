import React from 'react';

export default function SkillsSection() {
  const skills = [
    {
      name: "UX Research",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="stroke-zinc-300 group-hover:stroke-white transition-colors">
          <path d="M42.25 42L58.75 58.5" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="26.9914" cy="25.9402" r="21.9348" strokeWidth="2.5"/>
          <path d="M15.7754 21.7336H36.808" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M15.7754 31.5488H29.7971" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "User Flows",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="stroke-zinc-300 group-hover:stroke-white transition-colors">
          <circle cx="11.25" cy="31.5" r="8" strokeWidth="2.5"/>
          <circle cx="49.5762" cy="15.5" r="8" strokeWidth="2.5"/>
          <circle cx="49.5762" cy="47.5" r="8" strokeWidth="2.5"/>
          <path d="M19.25 31.5C30.9694 31.5 29.8567 47.5 41.5762 47.5" strokeWidth="2.5"/>
          <path d="M19.25 31.5C30.9694 31.5 29.8567 15.5 41.5762 15.5" strokeWidth="2.5"/>
        </svg>
      )
    },
    {
      name: "Wireframing",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="stroke-zinc-300 group-hover:stroke-white transition-colors">
          <rect x="2" y="16" width="30" height="32" rx="2" strokeWidth="2.5"/>
          <line x1="2" y1="16" x2="32" y2="48" strokeWidth="2" opacity="0.6"/>
          <line x1="32" y1="16" x2="2" y2="48" strokeWidth="2" opacity="0.6"/>
          <path d="M40 18H62" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M40 28H62" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M40 38H62" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M40 48H62" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "UI Design",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="stroke-zinc-300 group-hover:stroke-white transition-colors">
          <path d="M45.9453 36.4304L48.6071 53.4478L52.5999 50.5025L57.2581 57.3749L61.2509 54.7568L56.9254 48.5389L61.2509 45.2664L45.9453 36.4304Z" strokeWidth="2.5"/>
          <path d="M60.4445 39.25V6.625H3.25V56.5695H43.9306" strokeWidth="2.5"/>
          <path d="M31.8457 21.125L34.7829 29.0628L42.7207 32L34.7829 34.9372L31.8457 42.875L28.9085 34.9372L20.9707 32L28.9085 29.0628L31.8457 21.125Z" strokeWidth="2.5" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Design System",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="stroke-zinc-300 group-hover:stroke-white transition-colors">
          <rect x="6.75" y="8.13" width="20" height="20" rx="2" strokeWidth="2.5"/>
          <path d="M56 28H34L45 9L56 28Z" strokeWidth="2.5" strokeLinejoin="round"/>
          <rect x="6.75" y="36" width="20" height="20" rx="2" strokeWidth="2.5"/>
          <circle cx="45" cy="46" r="10" strokeWidth="2.5"/>
        </svg>
      )
    },
    {
      name: "Prototyping",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="stroke-zinc-300 group-hover:stroke-white transition-colors">
          <circle cx="32" cy="32" r="26" strokeWidth="2.5"/>
          <path d="M26 22L44 32L26 42V22Z" strokeWidth="2.5" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Motion Graphics",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="stroke-zinc-300 group-hover:stroke-white transition-colors">
          <path d="M6 21H24" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M6 43H24" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M2 32H22" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="46" cy="32" r="15" strokeWidth="2.5"/>
        </svg>
      )
    },
    {
      name: "Illustrations",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="stroke-zinc-300 group-hover:stroke-white transition-colors">
          <path d="M10 44C10 16 54 16 54 44" strokeWidth="2.5"/>
          <rect x="2" y="38" width="12" height="12" rx="2" strokeWidth="2.5"/>
          <rect x="50" y="38" width="12" height="12" rx="2" strokeWidth="2.5"/>
          <circle cx="32" cy="18" r="5" strokeWidth="2.5"/>
        </svg>
      )
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-20 md:py-28 text-center" style={{ backgroundColor: '#000000' }}>
      {/* Eyebrow & Title */}
      <div className="space-y-2.5 max-w-4xl mx-auto mb-14">
        <div className="text-[20px] font-medium tracking-normal font-['Darker_Grotesque'] leading-[100%]">
          Skillset
        </div>
        <h2 className="text-[56px] font-bold tracking-tight leading-[100%]">
          Design skills built around real products
        </h2>
        <p className="text-[24px] font-medium tracking-normal font-['Darker_Grotesque'] leading-[130%]">
          From understanding user needs to designing complete product experiences.
        </p> 
      </div>

      {/* 8-Card Grid: 4 columns x 2 rows */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#09090d]  w-[309px] h-[249px] border border-white/[0.05] rounded-xl p-[10px] flex flex-col items-center justify-center gap-[10px] hover:border-white/20 hover:bg-[#0d0e14] transition-all group select-none"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              {skill.icon}
            </div>
            <span className="text-[24px] font-['Darker_Grotesque'] font-normal leading-[100%] tracking-normal group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
