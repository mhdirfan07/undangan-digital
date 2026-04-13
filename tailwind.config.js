/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#296374',    // Muted Teal
        'secondary': '#629FAD',  // Soft Blue
        'accent': '#629FAD',     // Soft Blue Accent
        'dark': '#0C2C55',       // Deep Navy
        'light': '#F0F7F9',      // Very Light Blue Tint (for readability)
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
