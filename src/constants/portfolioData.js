// ─────────────────────────────────────────────
// portfolioData.js
// Single source of truth for all static data
// used across the portfolio site.
// ─────────────────────────────────────────────

// ── Navbar ──────────────────────────────────
export const navLinks = [
  { label: 'Work',    href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// ── Asset paths ──────────────────────────────
export const assets = {
  arrow:      '/arrow.svg',
  sideArrow:  '/side_arrow.svg',
  leftArrow:  '/left_arrow.svg',
};

// ── BeyondDesign ─────────────────────────────
export const artworks = [
  { id: 1, title: 'Dispatch Logistics',    src: '/artworks/truck.png' },
  { id: 2, title: 'Design Toolkit',        src: '/artworks/toolbox.png' },
  { id: 3, title: 'Automated Pipeline',    src: '/artworks/conveyor.png' },
  { id: 4, title: 'Playground Primitives', src: '/artworks/geometry.png' },
];

export const illustrations = [
  '/illustrations/Frame 2147257403.svg',
  '/illustrations/Frame 2147257404.svg',
  '/illustrations/Frame 2147257405.svg',
  '/illustrations/Frame 2147257406.svg',
  '/illustrations/Frame 2147257407.svg',
  '/illustrations/Frame 2147257408.svg',
  '/illustrations/Frame 2147257409.svg',
  '/illustrations/Frame 2147257410.svg',
  '/illustrations/Frame 2147257411.svg',
  '/illustrations/Frame 2147257412.svg',
  '/illustrations/Frame 2147257413.svg',
];

export const motionClips = [
  '/motion/1.mp4',
  '/motion/2.mp4',
  '/motion/3.mp4',
  '/motion/4.mp4',
  '/motion/5.mp4',
  '/motion/6.mp4',
];

export const beyondDesignFilters = ['Motion', 'Illustrations', 'Posters'];

// ── Skills ───────────────────────────────────
export const skills = [
  { name: 'UX Research',     icon: '/skills/uxresearch.svg' },
  { name: 'User Flows',      icon: '/skills/userflow.svg' },
  { name: 'Wireframing',     icon: '/skills/wireframe.svg' },
  { name: 'UI Design',       icon: '/skills/uidesign.svg' },
  { name: 'Design System',   icon: '/skills/designsys.svg' },
  { name: 'Prototyping',     icon: '/skills/proto.svg' },
  { name: 'Motion Graphics', icon: '/skills/motion.svg' },
  { name: 'Illustrations',   icon: '/skills/illustration.svg' },
];

// ── Case Studies ─────────────────────────────
export const caseStudy1 = {
  tags: ['UX Research', 'User Flows', 'Wireframes', 'Design System', 'Hi-fi Screens'],
};

export const caseStudy2 = {
  tags: [
    'User Flows',
    'Wireframes',
    'Design System',
    'Hi-fi Screens',
    'Developer Handoff',
    'Post Launch Support',
  ],
};
