/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'LineClear': ['LineClear', 'cursive']
      }
    }, 
  },
  plugins: [require('./node_modules/flowbite/plugin'), require('daisyui')]
}
