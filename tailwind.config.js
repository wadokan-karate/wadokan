/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors:{
      'wadokanBlue':'#2196F3',
      'grey':'#3E3E3E',
      'white':'#ffffff'
    }
  },
  plugins: [
    require('flowbite/plugin'), ('@tailwindcss/forms')
    ]
})

