/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const withOpacity = function (variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else return `rgba(var(${variableName}))`;
  };
};

module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        custom: "url('../assets/img/background.png')",
      },
      colors: {
        "yellow-80": "rgba(255, 229, 59, 0.8)",
        "yellow-20": "rgba(255, 229, 59, 0.2)",
        "pink-custom": "rgba(255, 73, 73, 1)",
        "red-custom": "rgba(255, 37, 37, 1)",
        "orange-custom": "rgba(255, 141, 41, 1)",
        num: "rgba(5, 5, 5, 0.9)",
      },
      boxShadow: {
        "custom-card": "-2px 12px 12px rgba(0,0,0,0.25)",
        "custom-num": "8px 9px 22px 1px rgba(0,0,0,0.60)",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
