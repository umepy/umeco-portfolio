/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    colors: { blue: colors.blue },
    extend: {},
  },
  plugins: [],
};
