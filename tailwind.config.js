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
      red: colors.red,
      text_gray: "#0F1111",
    },
    fontFamily: {
      body: ["ヒラギノ角ゴシック", "メイリオ", "Meiryo"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: { fontWeight: 400 },
            pre: null,
            "pre code": {
              backgroundColor: null,
              borderWidth: null,
              borderRadius: null,
              padding: null,
              color: null,
              fontSize: "100px",
              lineHeight: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
