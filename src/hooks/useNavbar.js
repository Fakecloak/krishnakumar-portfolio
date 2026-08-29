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

  // Single scroll listener — works in both scroll directions.
  //
  // Strategy: on every scroll event, iterate sections in DOM order
  // and set active to the last one whose top edge is above 45% of
  // the viewport height. When scrolling back up, a higher section
  // reclaims the threshold first, so active updates correctly.
  //
  // Special case: when within 150px of page bottom, force #contact
  // because the Contact section is never tall enough to cross the threshold.
  useEffect(() => {
    const getSection = (href) => document.querySelector(href);
    const THRESHOLD = window.innerHeight * 0.45;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // End-of-page guard for Contact
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
      if (nearBottom) {
        setActive('#contact');
        return;
      }

      // Find which section is currently in view
      let current = '';
      for (const { href } of navLinks) {
        const el = getSection(href);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= THRESHOLD) {
          current = href;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount so initial position is correct
    handleScroll();
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
