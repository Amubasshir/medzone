/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001844',
      },
      fontFamily: {
        sans: ['Open Sans', 'Sans-serif'],
      },
    },
  },
  plugins: [],
};
