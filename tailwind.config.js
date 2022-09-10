/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-claro': "#EBF1F4",
        'azul-primary': "#354152",
        'azul-secondary': "#95B9D3",
      }
    },
  },
  plugins: [],
}
