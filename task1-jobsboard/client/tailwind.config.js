/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4F6C",
        secondary: "#FFE8EC",
        background: "#F8F9FA",
        overlay: "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        roboto: ['Roboto'],
        rubik: ['Rubik'],
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}

