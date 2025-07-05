import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Portfolio Palette - Scandinavian Sophisticated
        'bg-primary': '#A9B8C4',      // misty desaturated blue-grey
        'surface-panel': '#F4F1EA',   // warm cream for content cards
        'text-body': '#15202B',       // deep navy for maximum contrast
        'text-inverse': '#FFFFFF',    // white for dark accents
        'accent': '#D75F4E',          // burnt coral for CTAs/links
        'accent-hover': '#B24A3D',    // darker coral on hover
        'divider': '#CDD4DD',         // light cool grey for rules
      },
      fontFamily: {
        'sans': ['Inter Variable', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'display-lg': ['clamp(2rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'display-md': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'body-lg': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.45' }],
        'body': ['1rem', { lineHeight: '1.45' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        'content': '1080px',
      },
      gridTemplateColumns: {
        'portfolio': 'repeat(12, 1fr)',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'scale-in': 'scale-in 0.25s ease-out',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
