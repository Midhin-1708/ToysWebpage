/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        sky: {
          DEFAULT: '#4FC3F7',
          50: '#EAF8FE',
          100: '#D3F0FD',
          200: '#A7E1FB',
          300: '#7CD2F9',
          400: '#50C3F7',
          500: '#2AA9E0',
          600: '#1C87B8',
        },
        sunshine: {
          DEFAULT: '#FFD23F',
          50: '#FFFAEA',
          100: '#FFF3C6',
          200: '#FFE788',
          300: '#FFDB4F',
          400: '#FFD23F',
          500: '#F5B800',
        },
        coral: {
          DEFAULT: '#FF6F61',
          50: '#FFEFED',
          100: '#FFDAD5',
          200: '#FFB3A8',
          300: '#FF8C7A',
          400: '#FF6F61',
          500: '#F2503F',
          600: '#D63B2C',
        },
        mint: {
          DEFAULT: '#3DDC97',
          50: '#E9FCF4',
          100: '#C9F7E3',
          200: '#93EEC8',
          300: '#5DE4AC',
          400: '#3DDC97',
          500: '#22B87A',
          600: '#1B9A67',
        },
        cream: '#FFF8EC',
        navy: {
          DEFAULT: '#1B2A4A',
          50: '#EFF2F8',
          400: '#3A4E7A',
          500: '#233457',
          600: '#1B2A4A',
          700: '#141F38',
          800: '#0E1626',
        },
      },
      boxShadow: {
        toy: '0 20px 40px -12px rgba(27,42,74,0.25)',
        glow: '0 0 0 4px rgba(255,210,63,0.35)',
      },
      borderRadius: {
        blob: '42% 58% 65% 35% / 45% 40% 60% 55%',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(4deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' },
          '50%': { borderRadius: '58% 42% 40% 60% / 55% 65% 35% 45%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        spinSlow: 'spinSlow 14s linear infinite',
        blob: 'blob 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
