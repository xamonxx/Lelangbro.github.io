/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html", // sesuaikan dengan struktur folder Anda
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}