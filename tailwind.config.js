/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF9A9E',    // Soft Pink/Coral
        'secondary': '#A8E6CF',  // Soft Mint
        'accent': '#FAD0C4',     // Rose Gold
        'dark': '#2D3436',       // Charcoal
        'light': '#FFFDF9',      // Cream
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        calligraphy: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
