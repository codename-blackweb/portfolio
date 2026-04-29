/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Define custom shades to give the site a premium feel.
        background: {
          DEFAULT: '#000000',
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          subtle: '#CCCCCC'
        }
      }
    },
  },
  plugins: [],
};