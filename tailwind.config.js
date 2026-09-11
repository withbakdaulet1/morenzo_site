export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#04100A',
        forest: {
          900: '#06150E',
          800: '#0A1F15',
          700: '#102C1E',
          600: '#1B3D28',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E5C973',
          deep: '#8F6F16',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#3BE47A',
        },
        instagram: {
          DEFAULT: '#E1306C',
          hover: '#F1477F',
        },
        cream: '#F2EEE4',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
