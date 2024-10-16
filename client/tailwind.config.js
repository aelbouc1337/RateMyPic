/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#433878",
        secondary: "#7E60BF",
        accent: "#E4B1F0",
        comp: "#FFE1FF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        racha: ["Sriracha", "cursive"],
      },
    },
  },
  plugins: [],
};
