import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full relative z-10 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-base sm:text-lg font-medium" style={{ color: '#000000B2' }}>
        <div>
          <span>Designed by Krishnakumar K</span>
        </div>

        <div className="flex items-center gap-6 sm:gap-8 font-medium">
          <a
            href="https://behance.net"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Behance
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:krishnakumar.191104@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
