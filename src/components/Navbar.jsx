import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Work',    href: '#work' },
  { label: 'About',  href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActive(href);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 75;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.replaceState(null, '', href);
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    setActive('');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center bg-[#0811161A] border-b-[0.5px] border-[#80808080] backdrop-blur-[2px]">
      <div className="w-full max-w-[1440px] flex items-center justify-between h-[75px] py-6 px-16">

        {/* Brand */}
        <a href="#" onClick={handleBrandClick} className="flex items-center gap-3 group">
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
                className={`font-sans font-medium text-[20px] leading-none transition-colors ${
                  isActive
                    ? 'text-white underline  decoration-white/70 decoration-[1.5%] underline-offset-6 '
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
