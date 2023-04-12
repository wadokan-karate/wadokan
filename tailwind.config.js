/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors:{
      'wadokanBlue':'#2196F3',
      'grey':'#3E3E3E',
      'white':'#ffffff'
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs"), ('flowbite/plugin') ],
  
  darkMode: "class"
}   
