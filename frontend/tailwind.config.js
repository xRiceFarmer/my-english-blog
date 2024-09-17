/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/daisyui/**/*.{js, jsx, ts, tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#fffff'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [],
  },
}

