import React from 'react';

export default function Header() {
  return (
    <header className="w-full relative z-20 py-8 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
      <div className="text-white/80 font-medium tracking-wider text-lg uppercase flex items-center gap-2">
        <span>KrishaKumar K</span>
        <span className="text-white/30">•</span>
        <span className="text-white/60">Product Designer</span>
      </div>

      <nav className="flex items-center gap-8 md:gap-12">
        <a 
          href="#work" 
          className="text-white/70 hover:text-white transition-colors text-lg tracking-wide hover:underline underline-offset-8 decoration-white/30"
        >
          Work
        </a>
        <a 
          href="#about" 
          className="text-white/70 hover:text-white transition-colors text-lg tracking-wide hover:underline underline-offset-8 decoration-white/30"
        >
          About
        </a>
        <a 
          href="#contact" 
          className="text-white/70 hover:text-white transition-colors text-lg tracking-wide hover:underline underline-offset-8 decoration-white/30"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
