import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * CaseStudy02 — Lil Big Things
 *
 * Full case-study page. Navbar is universal across all pages.
 */
export default function CaseStudy02() {
  return (
    <div className="relative" style={{ isolation: 'isolate' }}>
      {/* Static background — fixed to viewport, matches About section bg */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: "url('/site-bg.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        {/* Case study content goes here */}
        <div className="flex-1" />
        <Footer />
      </div>
    </div>
  );
}
