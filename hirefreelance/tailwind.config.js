/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        "Inter var, sans-serif",

      ],
    },
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        center: true,
      },

      colors: {
        'primary': '#0056D6',
        'body': '#5B5B5B',
        'heading': '#2C3847',
      },
      screens: {
        '3xl': '1700px',
      },
    },
  },
  plugins: [],
}