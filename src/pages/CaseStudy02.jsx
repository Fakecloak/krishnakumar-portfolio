import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CaseStudyBackground from '../components/CaseStudyBackground';

/**
 * CaseStudy02 — Lil Big Things
 *
 * Full case-study page. Navbar is universal across all pages.
 */
export default function CaseStudy02() {
  return (
    <div className="relative min-h-screen text-white font-sans flex flex-col" style={{ backgroundColor: '#000000', overflow: 'hidden' }}>
      {/* Full-page background layer — static, covers entire page */}
      <CaseStudyBackground />

      {/* All page content sits above the background */}
      <div className="relative flex flex-col flex-1" style={{ zIndex: 10 }}>
        <Navbar />
        {/* Case study content goes here */}
        <div className="flex-1" />
        <Footer />
      </div>
    </div>
  );
}
