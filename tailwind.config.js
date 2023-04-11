/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'wadokanBlue':'#2196F3',
      'grey':'#3E3E3E',
      'white':'#ffffff'
    }
  },
  plugins: [],
}