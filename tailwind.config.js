/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    colors: {
      blue: colors.blue,
      sky: colors.sky,
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      text_gray: "#0F1111",
    },
    fontFamily: {
      body: ["ヒラギノ角ゴシック", "メイリオ", "Meiryo"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
