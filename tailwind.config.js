/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111111',
          900: '#111111',
          800: '#1A1A1A',
          700: '#242424',
          600: '#2E2E2E',
        },
        bone: {
          DEFAULT: '#F5F4F0',
          dark: '#EAE8E1',
          mid: '#DDDBD2',
        },
        white: '#FFFFFF',
        stone: {
          DEFAULT: '#8A8A8A',
          light: '#A3A3A3',
          dark: '#6E6E6E',
        },
        bronze: {
          DEFAULT: '#BFA15F',
          light: '#D4BA7D',
          dark: '#9E8245',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
        widest3: '0.3em',
      },
      maxWidth: {
        site: '84rem',
      },
      transitionTimingFunction: {
        site: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
