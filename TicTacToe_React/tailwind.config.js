/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,jsx}",
    "./public/*.{html,js,jsx}",
    "./src/components/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font_awe: "Bahnschrift",
      },
    },
  },
  plugins: [],
};
