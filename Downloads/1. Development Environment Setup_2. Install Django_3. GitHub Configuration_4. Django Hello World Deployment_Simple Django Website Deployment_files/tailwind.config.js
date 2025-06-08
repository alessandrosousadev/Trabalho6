/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        django: {
          light: '#44B78B',
          dark: '#0C4B33'
        }
      }
    },
  },
  plugins: [],
};
 