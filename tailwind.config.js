/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#A1C18D', // A guess based on the green accents
        'dark-gray': '#333333',
        'light-bg': '#F9F9F9', // Background color for some sections
        'cream-bg': '#F8F8F8', // Slightly different light background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A common modern sans-serif. Adjust if you know the exact font.
        heading: ['Playfair Display', 'serif'], // A more elegant serif for headings, if applicable, or stick to sans
      }
    },
  },
  plugins: [],
}