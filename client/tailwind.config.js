/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ps-blue": "rgb(0, 112, 204)",
        white: 'white'
      }
    },
  },
  plugins: [],
}
