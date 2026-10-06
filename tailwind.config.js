/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FCE7F3",
        ink: "#2E2A22",
        blush: {
          400: "#F472B6",
          500: "#EC4899",
          600: "#DB2777",
        },
        sticky: {
          blue: "#FFFFFF",
          blueDark: "#FCE7F3",
          yellow: "#FFFFFF",
          pink: "#FDF2F8",
          green: "#FFFFFF",
          tan: "#FCE7F3",
        },
        tape: "#F472B6",
      },
      fontFamily: {
        hand: ["Patrick Hand", "cursive"],
        script: ["Caveat", "cursive"],
        body: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
