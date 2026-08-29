// ─────────────────────────────────────────────
// Navbar.jsx — Presentational Component
//
// Pure UI. All logic lives in useNavbar hook.
// ─────────────────────────────────────────────
import React from 'react';
import { useNavbar } from '../hooks/useNavbar';
import { navLinks } from '../constants/portfolioData';

export default function Navbar() {
  const { active, isScrolled, handleNavClick, handleBrandClick } = useNavbar();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-center ${
        isScrolled
          ? 'bg-[#0811161A] border-b-[0.5px] border-[#80808080] backdrop-blur-xl'
          : ''
      }`}
    >
      <div className="w-full max-w-[1440px] flex items-center justify-between h-[75px] py-6 px-16">

        {/* Brand */}
        <a
          href="#"
          onClick={handleBrandClick}
          className="flex items-center gap-3 group"
        >
          <span className="text-white font-medium text-[20px] leading-none tracking-normal font-sans">
            Krishnakumar K
          </span>

          <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors font-normal text-[18px] leading-none tracking-normal font-sans">
            Product Designer
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 md:gap-10">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href;

            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`font-sans font-medium text-[20px] hover:underline hover:decoration-white/70 hover:decoration-[1.5%] hover:underline-offset-6 leading-none transition-colors ${
                  isActive
                    ? 'text-white underline decoration-white/70 decoration-[1.5%] underline-offset-6'
                    : 'text-white/70 hover:text-white no-underline'
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}