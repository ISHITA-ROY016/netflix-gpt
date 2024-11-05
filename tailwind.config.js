/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  // For IE and Edge
          'scrollbar-width': 'none',     // For Firefox
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',               // For Chrome, Safari, and Opera
        },
      });
    },
  ],
}

