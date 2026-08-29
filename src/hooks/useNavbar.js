// ─────────────────────────────────────────────
// useNavbar.js — Hooks Pattern
//
// Encapsulates all Navbar side-effects and
// handlers. Navbar.jsx becomes a pure
// presentational component.
//
// Supports two modes:
//   • Homepage  — scroll-spy sets the active link
//   • Case study pages — links navigate back to
//     the homepage section (e.g. /#work)
// ─────────────────────────────────────────────
import { useState, useEffect } from 'react';
import { navLinks } from '../constants/portfolioData';

/** Returns true when the current path is NOT the homepage. */
function isOnCaseStudyPage() {
  return window.location.pathname !== '/';
}

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
  //
  // On case study pages there are no matching sections, so scroll-spy
  // is skipped and active remains empty.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Skip scroll-spy on non-homepage routes
      if (isOnCaseStudyPage()) return;

      const getSection = (href) => document.querySelector(href);
      const THRESHOLD = window.innerHeight * 0.45;

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

  /**
   * On the homepage: smooth-scroll to the target section.
   * On case study pages: navigate to /#section so the browser
   * lands on the homepage and scrolls to the right section.
   */
  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (isOnCaseStudyPage()) {
      // Navigate to homepage + hash; the browser handles the scroll.
      window.location.href = '/' + href;
      return;
    }

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

    if (isOnCaseStudyPage()) {
      window.location.href = '/';
      return;
    }

    setActive('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
  };

  return { active, isScrolled, handleNavClick, handleBrandClick };
}
