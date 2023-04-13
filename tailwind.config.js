/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js, ts, jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
    colors: {
      'wadokanBlue':'#2196F3',
      'grey':'#3E3E3E',
      'white':'#FFFFFF',
      'List': '#FFFAFA',
      'gris': '#A79A9A',

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

