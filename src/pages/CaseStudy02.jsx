import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import caseStudyBg from '../assets/case-study-bg.png';

/**
 * CaseStudy02 — Lil Big Things
 *
 * Full case-study page. Navbar is universal across all pages.
 */
export default function CaseStudy02() {
  return (
    <div className="relative" style={{ isolation: 'isolate' }}>
      {/* Static background — absolutely positioned, behind all content, does not scroll independently */}
      <img
        src={caseStudyBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
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
