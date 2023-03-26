/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    colors: {
      blue: colors.blue,
      sky: colors.sky,
      gray: colors.gray,
      text_gray: "#0F1111",
    },
    extend: {},
  },
  plugins: [],
};
