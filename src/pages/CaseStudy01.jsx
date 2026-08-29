import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * CaseStudy01 — PixelWhisk
 *
 * Full case-study page. Navbar is universal across all pages.
 */
export default function CaseStudy01() {
  return (
    <div className="relative min-h-screen text-white font-sans flex flex-col" style={{ backgroundColor: '#000000' }}>
      <Navbar />
      {/* Case study content goes here */}
      <div className="flex-1" />
      <Footer />
    </div>
  );
}
