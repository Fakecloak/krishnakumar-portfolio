// ─────────────────────────────────────────────
// useBeyondDesign.js — Hooks Pattern
//
// Encapsulates filter state and the looped
// arrays (computed once via useMemo).
// BeyondDesign.jsx becomes a pure
// presentational component.
// ─────────────────────────────────────────────
import { useState, useMemo } from 'react';
import {
  artworks,
  illustrations,
  motionClips,
} from '../constants/portfolioData';

export function useBeyondDesign() {
  const [activeFilter, setActiveFilter] = useState('Motion');

  // useMemo: arrays are derived from module-scope constants and never change,
  // so they are computed once at mount and reused across all renders.
  const loopedArtworks = useMemo(
    () => [...artworks, ...artworks, ...artworks],
    []
  );

  const loopedIllustrations = useMemo(
    () => [...illustrations, ...illustrations, ...illustrations],
    []
  );

  const loopedMotionClips = useMemo(
    () => [...motionClips, ...motionClips, ...motionClips],
    []
  );

  return {
    activeFilter,
    setActiveFilter,
    loopedArtworks,
    loopedIllustrations,
    loopedMotionClips,
  };
}
