import React, { useState } from 'react';

const artworks = [
  { id: 1, title: 'Dispatch Logistics',    src: '/artworks/truck.png' },
  { id: 2, title: 'Design Toolkit',        src: '/artworks/toolbox.png' },
  { id: 3, title: 'Automated Pipeline',    src: '/artworks/conveyor.png' },
  { id: 4, title: 'Playground Primitives', src: '/artworks/geometry.png' },
];

const filters = ['Illustrations', 'Motion', 'Posters'];

/* Card — fixedWidth=true for marquee, false/default for grid */
function ArtworkCard({ title, src, fixedWidth = false }) {
  return (
    <div
      className="group relative overflow-hidden shrink-0 transition-all duration-300"
      style={{
        ...(fixedWidth ? { width: '398px' } : {}),
        height: '436px',
        padding: '10px',
        borderRadius: '12px',
        opacity: 1,
      }}
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}

export default function BeyondDesign() {
  const [activeFilter, setActiveFilter] = useState('Illustrations');

  // Duplicate for seamless loop
  const loopedArtworks = [...artworks, ...artworks, ...artworks];

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-20 md:py-28"
      style={{ backgroundColor: '#000000' }}
    >
      {/* ── Header row ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">

        {/* Left: eyebrow + title + description */}
        <div className="space-y-3">
          <p className="text-[20px] font-medium tracking-normal text-zinc-400 leading-[100%]">
            Other Creative Work
          </p>
          <h2 className="text-[56px] font-bold tracking-normal text-white leading-[100%]">
            Beyond product design
          </h2>
          <p className="text-[24px] font-['Darker_Grotesque'] leading-[130%] tracking-normal font-medium">
            A collection of illustrations, posters and motion work from my creative practice.
          </p>
        </div>

        {/* Right: filter tabs with pipe separators */}
        <div className="flex items-center text-[24px] font-medium leading-[130%] tracking-normal font-['Darker_Grotesque'] shrink-0 self-end">
          {filters.map((filter, i) => (
            <span key={filter} className="flex items-center">
              <button
                onClick={() => setActiveFilter(filter)}
                className={`px-1 py-1 transition-colors ${
                  activeFilter === filter
                    ? 'underline decoration-solid underline-offset-[25%] decoration-[1.5px] [text-decoration-skip-ink:auto]'
                    : 'text-zinc-500 hover:text-zinc-300 font-medium'
                }`}
              >
                {filter}
              </button>
              {i < filters.length - 1 && (
                <span className="text-zinc-600 select-none mx-1">|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── Marquee CSS — always injected ── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          gap: 10px;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Illustrations & Motion: infinite horizontal marquee ── */}
      {(activeFilter === 'Illustrations' || activeFilter === 'Motion') && (
        <div className="overflow-hidden w-full">
          <div className="marquee-track">
            {loopedArtworks.map(({ src, title }, i) => (
              <ArtworkCard key={i} title={title} src={src} fixedWidth={true} />
            ))}
          </div>
        </div>
      )}

      {/* ── Posters: static grid ── */}
      {activeFilter === 'Posters' && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '10px' }}
        >
          {artworks.map(({ id, title, src }) => (
            <ArtworkCard key={id} title={title} src={src} />
          ))}
        </div>
      )}

    </section>
  );
}
