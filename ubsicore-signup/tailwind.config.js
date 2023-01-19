/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#141933",
        blue: "#4285DE",
      },
      fontFamily: {
        Epilogue: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
