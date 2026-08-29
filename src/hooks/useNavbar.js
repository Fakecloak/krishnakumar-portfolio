// ─────────────────────────────────────────────
// useNavbar.js — Hooks Pattern
//
// Encapsulates all Navbar side-effects and
// handlers. Navbar.jsx becomes a pure
// presentational component.
// ─────────────────────────────────────────────
import { useState, useEffect } from 'react';
import { navLinks } from '../constants/portfolioData';

export function useNavbar() {
  const [active, setActive] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Tracks which section is in view via IntersectionObserver
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

  // Tracks whether the page has been scrolled (for blur backdrop)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActive(href);

    const target = document.querySelector(href);
    if (target) {
      const navHeight = 75;
      const offsetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.replaceState(null, '', href);
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    setActive('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
  };

  return { active, isScrolled, handleNavClick, handleBrandClick };
}
