import React from 'react';

export default function SkillsSection() {
  const skills = [
  {
    name: "UX Research",
    icon: "/skills/uxresearch.svg",
  },
  {
    name: "User Flows",
    icon: "/skills/userflow.svg",
  },
  {
    name: "Wireframing",
    icon: "/skills/wireframe.svg",
  },
  {
    name: "UI Design",
    icon: "/skills/uidesign.svg",
  },
  {
    name: "Design System",
    icon: "/skills/designsys.svg",
  },
  {
    name: "Prototyping",
    icon: "/skills/proto.svg",
  },
  {
    name: "Motion Graphics",
    icon: "/skills/motion.svg",
  },
  {
    name: "Illustrations",
    icon: "/skills/illustration.svg",
  },
];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-[128px] text-center" style={{ backgroundColor: '#000000' }}>
      {/* Eyebrow & Title */}
      <div className="max-w-4xl mx-auto">
        <div className="text-[20px] font-medium tracking-normal text-white/70 font-['Darker_Grotesque'] pb-[8px] leading-[100%]">
          Skillset
        </div>
        <h2 className="text-[56px] font-bold tracking-tight leading-[100%] pb-[16px]">
          Design skills built around real products
        </h2>
        <p className="text-[24px] font-medium tracking-normal font-['Darker_Grotesque'] leading-[130%] pb-[84px]">
          From understanding user needs to designing complete product experiences.
        </p> 
      </div>

      {/* 8-Card Grid: 4 columns x 2 rows */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#09090d]  w-[309px] h-[249px] border border-white/[0.05] rounded-xl p-[10px] flex flex-col items-center justify-center gap-[10px] hover:border-white/20 hover:bg-[#0d0e14] transition-all group select-none"
          >
            <div className="w-[64px] h-[64px] flex items-center justify-center">
              <img 
              src={skill.icon}
              alt={skill.name}
              className="w-full h-full object-contain"
            />
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
