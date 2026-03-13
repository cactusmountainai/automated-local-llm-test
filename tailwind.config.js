const e = require('express');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./styles/*.{html,js,css}", "./pages/**/*.{html,js,css}", "./*.html"],
  darkMode: "class",
  theme: {
    extend:  {
      animation: {
        ticker: 'ticker 100s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
},
}

