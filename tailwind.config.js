/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EDF0F8',
          100: '#D8DEF0',
          200: '#B0BDE1',
          300: '#8A9CD2',
          400: '#637BC3',
          500: '#3D5AB4',
          600: '#2E4A8C',
          700: '#233A6D',
          800: '#192A4E',
          900: '#0F1A2F',
        },
        gold: {
          50: '#FBF7ED',
          100: '#F5ECDA',
          200: '#EAD9B5',
          300: '#DFC690',
          400: '#C9A95E',
          500: '#B08D3C',
          600: '#8C7030',
          700: '#685424',
          800: '#443718',
          900: '#221B0C',
        },
        sand: {
          50: '#FDF9F3',
          100: '#F9F1E3',
          200: '#F1E6CF',
          300: '#E8D7B8',
          400: '#DFC8A1',
          500: '#D4B88A',
          600: '#B89A6E',
          700: '#8C7553',
          800: '#604F38',
          900: '#34291D',
        },
        parchment: '#F1E6CF',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2E4A8C 0%, #1a3570 50%, #0F1A2F 100%)',
        'parchment-texture': 'linear-gradient(135deg, #F1E6CF 0%, #E8D7B8 50%, #F1E6CF 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
