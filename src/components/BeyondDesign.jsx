import React, { useState } from 'react';

const artworks = [
  { id: 1, title: 'Dispatch Logistics',    src: '/artworks/truck.png' },
  { id: 2, title: 'Design Toolkit',        src: '/artworks/toolbox.png' },
  { id: 3, title: 'Automated Pipeline',    src: '/artworks/conveyor.png' },
  { id: 4, title: 'Playground Primitives', src: '/artworks/geometry.png' },
];

const illustrations = [
  '/illustrations/Frame 2147257403.svg',
  '/illustrations/Frame 2147257404.svg',
  '/illustrations/Frame 2147257405.svg',
  '/illustrations/Frame 2147257406.svg',
  '/illustrations/Frame 2147257407.svg',
  '/illustrations/Frame 2147257408.svg',
  '/illustrations/Frame 2147257409.svg',
  '/illustrations/Frame 2147257410.svg',
  '/illustrations/Frame 2147257411.svg',
  '/illustrations/Frame 2147257412.svg',
  '/illustrations/Frame 2147257413.svg',
];

const motionClips = [
  '/motion/1.mp4',
  '/motion/2.mp4',
  '/motion/3.mp4',
  '/motion/4.mp4',
  '/motion/5.mp4',
  '/motion/6.mp4',
];

function IllustrationCard({ src }) {
  return (
    <div
      className="
        shrink-0
        flex
        items-center
        justify-center
        w-[398px]
        h-[436px]
        opacity-100
        rotate-0
        bg-white/[0.05]
        backdrop-blur-[10px]
        border-[0.5px]
        border-white/50
        rounded-[6px]
      "
    >
      <img
        src={src}
        alt=""
        className="
          w-[398px]
          h-[436px]
          object-fit
        "
      />
    </div>
  );
}

function MotionCard({ src }) {
  return (
    <div
      className="
        shrink-0
        flex
        items-center
        justify-center
        w-[775px]
        h-[436px]
        opacity-100
        rotate-0
        bg-white/[0.05]
        backdrop-blur-[10px]
        border-[0.5px]
        border-white/50
        rounded-[6px]
        overflow-hidden
      "
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="
          w-[775px]
          h-[436px]
          object-contain
        "
      />
    </div>
  );
}

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
  const loopedIllustrations = [...illustrations, ...illustrations, ...illustrations];
  const loopedMotionClips = [...motionClips, ...motionClips, ...motionClips];

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-6 md:px-16"
      style={{ backgroundColor: '#000000' }}
    >
      {/* ── Header row ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6  pb-[84px]">

        {/* Left: eyebrow + title + description */}
        <div className="">
          <p className="text-[20px] font-medium tracking-normal text-white/70 leading-[100%] pb-[8px]">
            Other Creative Work
          </p>
          <h2 className="text-[56px] font-bold tracking-normal text-white leading-[100%] pb-[16px]">
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
                className={`p-[0px] transition-colors ${
                  activeFilter === filter
                    ? 'underline decoration-solid underline-offset-[25%] decoration-[1.5%] [text-decoration-skip-ink:auto]'
                    : 'text-white/70 hover:text-white font-medium'
                }`}
              >
                {filter}
              </button>
              {i < filters.length - 1 && (
                <span className="text-white/70 select-none px-[16px]">|</span>
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
          gap: 24px;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-track-motion {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee 45s linear infinite;
        }
        .marquee-track-motion:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Illustrations: infinite horizontal marquee with illustration SVGs ── */}
      {activeFilter === 'Illustrations' && (
        <div className="overflow-hidden w-full">
          <div className="marquee-track">
            {loopedIllustrations.map((src, i) => (
              <IllustrationCard key={i} src={src} />
            ))}
          </div>
        </div>
      )}

      {/* ── Motion: infinite horizontal marquee ── */}
      {activeFilter === 'Motion' && (
        <div className="overflow-hidden w-full">
          <div className="marquee-track-motion">
            {loopedMotionClips.map((src, i) => (
              <MotionCard key={i} src={src} />
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
