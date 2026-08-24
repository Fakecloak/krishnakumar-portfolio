import React from 'react';
import LaptopMockup from './LaptopMockup';

export default function CaseStudyCard({
  number = "01",
  category = "PixelWhisk",
  title = "From request to delivery",
  description = "PixelWhisk connects clients and internal teams throughout the website development process.",
  tags = ["UX Research", "User Flows", "Wireframes", "Design System", "Hi-fi Screens"],
  variant = "pixelwhisk",
  caseStudyUrl = "#"
}) {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Case Study Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="text-sm sm:text-base font-bold tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2 mb-3">
            <span>Case Study {number} – {category}</span>
          </div>

          <h3 className="font-['Darker_Grotesque'] font-semibold text-[48px] leading-[100%] tracking-normal text-white">
            {title}
          </h3>

          <p className="text-xl sm:text-2xl text-zinc-300 font-medium leading-relaxed mt-4">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 border border-white/15 bg-white/[0.02] text-zinc-300 text-sm sm:text-base font-semibold rounded-[2px]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <a
              href={caseStudyUrl}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all text-lg sm:text-xl font-semibold group"
            >
              <span>View Case Study</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: High Fidelity Laptop Display */}
        <div className="lg:col-span-7 w-full flex items-center justify-end">
          <LaptopMockup variant={variant} />
        </div>
      </div>
    </section>
  );
}
