/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont : ["Poppins", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
      },
      colors: {
        bodyColor: "#04052C",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #04052C,#04052C)",
        designColor: "#DA6D9B"
      },
      boxShadow:   {
        shadowOne : "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      
      },
    },
  },
  plugins: [],
}
