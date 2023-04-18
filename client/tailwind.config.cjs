/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        awesome_brands_6: ['awesome brands']
      },
      animation: {
        "slide-in": "slide-in 12s cubic-bezier(0.1, 0, 0.8, 0) forwards infinite",
      },

      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
