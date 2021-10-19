/* eslint-disable */
const scrollbarPlugin = require("tailwind-scrollbar");
const plugin = require("tailwindcss/plugin");
require("tailwindcss-transform")(["responsive"]);

module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        main: {
          1: "#FFECD2",
          2: "#FFDCF7",
          3: "#FBC600",
          4: "#80756E",
          5: "#B2ACAC",
          6: "#FFEFE5",
          7: "#FFF2EF",
        },
        bg: {
          100: "#FFFFFF",
          200: "#F3F3F3",
          300: "#3b30ca",
          400: "#2a91ed",
          600: "#999999",
          700: "#202020",
          800: "#060707",
          900: "#000000",
        },
        error: "#EB4D4D",
      },

      cursor: {
        grab: "grab",
      },
      borderRadius: {
        default: "10px",
      },
      boxShadow: {
        black: "0px 10px 20px #0A121614",
      },

      zIndex: { 1: "1" },
      height: { main: "calc(100% - 77px)", mainSm: "calc(100% - 53px)" }, // full height - header height
      gridColumn: {
        "1/1": "1 / 1",
        "1/2": "1 / 2",
        "1/3": "1 / 3",
        "1/4": "1 / 4",
        "1/5": "1 / 5",
        "1/6": "1 / 6",
        "2/2": "2 / 2",
        "3/3": "3 / 3",
        "4/4": "4 / 4",
        "5/5": "5 / 5",
        "6/6": "6 / 6",
      },
      gridRow: {
        "1/1": "1 / 1",
        "1/2": "1 / 2",
        "1/3": "1 / 3",
        "1/4": "1 / 4",
        "1/5": "1 / 5",
        "1/6": "1 / 6",
        "2/2": "2 / 2",
        "3/3": "3 / 3",
        "4/4": "4 / 4",
        "5/5": "5 / 5",
        "6/6": "6 / 6",
      },
      fontFamily: {
        Poppins: ['"Poppins"', "cursive"],
      },
    },
  },
  plugins: [
    scrollbarPlugin,
    require("tailwindcss-pseudo-elements"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
      };
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    }),
  ],
};
