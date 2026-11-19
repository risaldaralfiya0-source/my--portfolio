/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Semantic colors are driven by CSS variables in src/index.css,
        // so the light/dark toggle only needs to swap one class on <html>.
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        surface2: 'rgb(var(--surface-2) / <alpha-value>)',
        txt: 'rgb(var(--txt) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        brand: {
          violet: '#8b5cf6',
          blue: '#3b82f6',
          light: '#a78bfa',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(99, 102, 241, 0.45)',
        card: '0 12px 40px -24px rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
