/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Modern construction tokens
        steel: {
          DEFAULT: withOpacity('--steel-900-rgb'),
          950: withOpacity('--steel-950-rgb'),
          900: withOpacity('--steel-900-rgb'),
          800: withOpacity('--steel-800-rgb'),
          700: withOpacity('--steel-700-rgb'),
          600: withOpacity('--steel-600-rgb'),
        },
        concrete: {
          DEFAULT: withOpacity('--concrete-rgb'),
          light: withOpacity('--concrete-light-rgb'),
          mid: withOpacity('--concrete-mid-rgb'),
          dark: withOpacity('--concrete-dark-rgb'),
        },
        ochre: {
          DEFAULT: withOpacity('--ochre-rgb'),
          light: withOpacity('--ochre-light-rgb'),
          dark: withOpacity('--ochre-dark-rgb'),
        },
        blueprint: {
          DEFAULT: withOpacity('--blueprint-rgb'),
          light: withOpacity('--blueprint-light-rgb'),
          dark: withOpacity('--blueprint-dark-rgb'),
        },
        mortar: {
          DEFAULT: withOpacity('--mortar-rgb'),
          light: withOpacity('--mortar-light-rgb'),
          dark: withOpacity('--mortar-dark-rgb'),
        },

        // Backward-compatible semantic aliases mapped to variables
        ink: {
          DEFAULT: withOpacity('--steel-900-rgb'),
          900: withOpacity('--steel-900-rgb'),
          800: withOpacity('--steel-800-rgb'),
          700: withOpacity('--steel-700-rgb'),
          600: withOpacity('--steel-600-rgb'),
        },
        bone: {
          DEFAULT: withOpacity('--concrete-rgb'),
          light: withOpacity('--concrete-light-rgb'),
          mid: withOpacity('--concrete-mid-rgb'),
          dark: withOpacity('--concrete-dark-rgb'),
        },
        bronze: {
          DEFAULT: withOpacity('--ochre-rgb'),
          light: withOpacity('--ochre-light-rgb'),
          dark: withOpacity('--ochre-dark-rgb'),
        },
        stone: {
          DEFAULT: withOpacity('--mortar-rgb'),
          light: withOpacity('--mortar-light-rgb'),
          dark: withOpacity('--mortar-dark-rgb'),
        },
        white: withOpacity('--white-rgb'),
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      letterSpacing: {
        widest2: '0.22em',
        widest3: '0.3em',
      },
      maxWidth: {
        site: 'var(--container-site)',
      },
      borderRadius: {
        btn: 'var(--radius-btn)',
      },
      transitionTimingFunction: {
        site: 'var(--transition-site)',
      },
    },
  },
  plugins: [],
};
