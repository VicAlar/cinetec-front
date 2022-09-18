/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "azul-claro": "#EBF1F4",
        "azul-primary": "#354152",
        "azul-secondary": "#95B9D3",
        "gris-claro": "#707880",
      },
      spacing: {
        "0-auto": "0 0 0 auto",
        "70px": "70px",
        76: "300px",
        custom: ".5rem 1.5rem",
        main: "7rem 2rem 2rem 4rem",
        "95": "95%",
        "centrado": "calc(50% - 2rem)",
      },
      backgroundImage: {
        logo: "url('assets/img/logo.png')",
      },
    },
  },
  plugins: [],
};
