import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkIntro from './components/WorkIntro';
import CaseStudy1 from './components/CaseStudy1';
import CaseStudy2 from './components/CaseStudy2';
import BeyondDesign from './components/BeyondDesign';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CaseStudy01 from './pages/CaseStudy01';
import CaseStudy02 from './pages/CaseStudy02';

// Shared background image styles (product zone, about zone, etc.)
const bgStyle = {
  backgroundImage: "url('/site-bg.png')",
  backgroundSize: '100% 100%',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
};

// Hero-specific background image
// backgroundPosition: 'center bottom' anchors the blue horizon glow
// to the bottom edge, matching Figma exactly.
const heroBgStyle = {
  backgroundImage: "url('/hero-bg.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
};

// Product section background image
// Blue glow at top fading to black — anchor to top edge.
const productBgStyle = {
  backgroundImage: "url('/product-bg.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
};

export default function App() {
  return (
    <Routes>

      {/* ── Homepage ─────────────────────────────── */}
      <Route
        path="/"
        element={
          <div className="relative min-h-screen text-white font-sans" style={{ backgroundColor: '#000000' }}>
            <BackgroundGrid />
            <Navbar />

            <main className="relative z-10">

              {/* ══════════════════════════════════════════
                  ZONE A — FULL HEADER SECTION
                  hero-bg.png covers Navbar + Hero together.
                  Height locked to 916px — Figma spec.
                  ══════════════════════════════════════════ */}
              <div className="relative overflow-hidden" style={{ minHeight: '916px' }}>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={heroBgStyle}
                />
                <div className="relative z-10 flex flex-col" style={{ minHeight: '916px' }}>
                  <Hero />
                </div>
              </div>

              {/* ══════════════════════════════════════════
                  ZONE A2 — PRODUCT / WORK SECTION
                  product-bg.png: blue glow at top → black.
                  ══════════════════════════════════════════ */}
              <div className="relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={productBgStyle}
                />
                <div className="relative z-10">

                  {/* WorkIntro */}
                  <WorkIntro />

                  {/* Case Study 01 — PixelWhisk */}
                  <CaseStudy1 />

                  {/* Divider between case studies */}
                  <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16">
                    <div className=" border-white/50 border-t-[0.5px]" />
                  </div>

                  {/* Case Study 02 — Lil Big Things */}
                  <CaseStudy2 />

                </div>
              </div>

              {/* ══════════════════════════════════════════
                  ZONE B — BEYOND DESIGN + SKILLS
                  Background: #000000 (pure black)
                  ══════════════════════════════════════════ */}
              <div style={{ backgroundColor: '#000000' }}>
                <BeyondDesign />

                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16">
                  <div className="border-t border-white/[0.08]" />
                </div>

                <SkillsSection />
              </div>

              {/* ══════════════════════════════════════════
                  ZONE C — ABOUT + CTA + FOOTER
                  One single background image covers all three.
                  ══════════════════════════════════════════ */}
              <div className="relative overflow-hidden">
                {/* Single bg image — fills entire About+CTA+Footer zone */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={bgStyle}
                />
                <div className="relative z-10">
                  <AboutSection portraitImageSrc="/portrait.png" />
                  <CTASection />
                  <Footer />
                </div>
              </div>

            </main>
          </div>
        }
      />

      {/* ── Case Study Pages ─────────────────────── */}
      <Route path="/case-study/pixelwhisk"    element={<CaseStudy01 />} />
      <Route path="/case-study/lil-big-things" element={<CaseStudy02 />} />

    </Routes>
  );
}
