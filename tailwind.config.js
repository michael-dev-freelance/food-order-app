/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "rgba(0, 0, 0, 0.75)": "rgba(0, 0, 0, 0.75)",
      },
      borderRadius: {
        "14px": "14px",
        "20px": "20px",
      },
      width: {
        "90%": "90%",
      },
      maxWidth: {
        "60rem": "60rem",
      },
      animation: {
        "meals-appear": "meals-appear 1s ease-out forwards",
        bump: "bump 300ms ease-out",
        modal: "slide-down 300ms ease-out forwards",
      },
      keyframes: {
        "slide-down": {
          from: {
            opacity: 0,
            transform: "translateY(-3rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "meals-appear": {
          from: {
            opacity: 0,
            transform: "translateY(-3rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        bump: {
          "0%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(0.9)",
          },
          "30%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "scale(1.15)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      boxShadow: {
        cart: "0 1px 18px 10px rgba(0, 0, 0, 0.25)",
        card: "0 2px 8px rgba(0, 0, 0, 0.25)",
        modal: "0 2px 8px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        calc: "calc(50% - 20rem)",
      },
    },
  },
  plugins: [],
};
