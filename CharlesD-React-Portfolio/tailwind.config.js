/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#f3f4f6',
        'dark-bg': '#1a202c',
        'light-text': '#1f2937',
        'dark-text': '#f7fafc',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
      },
    },
  },
  plugins: [],
};
