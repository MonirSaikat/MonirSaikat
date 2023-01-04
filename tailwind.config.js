/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    container: {
      padding: "1rem",
      screens: {
        DEFAULT: "768px",
      },
    },
    extend: {
      colors: {
        primary: "#00A0B0",
        secondary: "tomato",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
