/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans - serif']
    },
    container: {
      padding: '1rem',
      screens: {
        DEFAULT: '1092px'
      }
    },
    extend: {
      colors: {
        'primary': '#00A0B0'
      },
    },
  },
  plugins: [],
}
