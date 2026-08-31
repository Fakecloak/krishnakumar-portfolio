// ─────────────────────────────────────────────
// CaseStudyBackground.jsx — Reusable Background Layer
//
// Renders the shared case-study background image as an
// absolutely-positioned layer that spans the full page.
// pointer-events: none ensures it never blocks content.
// ─────────────────────────────────────────────
import React from 'react';
import caseStudyBg from '../assets/case-study-bg.png';

export default function CaseStudyBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <img
        src={caseStudyBg}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          minHeight: '100%',
        }}
      />
    </div>
  );
}
