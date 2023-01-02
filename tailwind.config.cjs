/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
    colors: {
      blue: {
        500: "#1E6F9F",
        400: "#4EA8DE",
      },
      gray: {
        100: "#E1E1E6",
        200: "#D9D9D9",
        300: "#808080",
        400: "#333333",
        500: "#262626",
        600: "#1A1A1A",
        700: "#0D0D0D",
      },
      purple: {
        500: "#5E60CE",
        400: "#8284FA",
      },
      red: "#E25858",
    },
    fontFamily: { sans: ["Inter", "sans-serif"] },
  },
  plugins: [],
}
