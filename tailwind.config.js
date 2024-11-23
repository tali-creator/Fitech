/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(18, 19, 42, 1)', 
        secondary:'rgba(118, 119, 153, 1)',
        tertiary: 'rgba(194, 56, 147, 1)',
      },
    },
  },
  plugins: [],
}
