/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Darker Grotesque"', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#000000',
          dark: '#030712',
          surface: '#08080a',
          card: '#0a0a0d',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
          borderHover: 'rgba(255, 255, 255, 0.18)',
          glowBlue: '#1e40af',
          glowCyan: '#38bdf8',
        }
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.12em',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 85% 50% at 50% 65%, rgba(56, 189, 248, 0.45) 0%, rgba(29, 78, 216, 0.35) 40%, rgba(15, 23, 42, 0.95) 75%, #000000 100%)',
        'about-gradient': 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(14, 165, 233, 0.4) 0%, rgba(29, 78, 216, 0.45) 45%, rgba(3, 7, 18, 0.95) 85%, #000000 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.005) 100%)',
      },
      textUnderlineOffset: {
        6: '6px',
      },
      textDecorationThickness: {
        6: '6px',
      },
    },
  },
  plugins: [],
}
