// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        "1/2": "50%",
      },
      textColor: ["visited"],
      transitionProperty: {
        height: "height",
        width: "width",
      },
      dropShadow: {
        heading: "0.3rem 0.2rem 0.2rem black",
      },
    },
  },
  variants: {
    extend: {
      height: ["hover", "focus"],
      width: ["hover", "focus"],
      transitionProperty: ["hover", "focus"],
      scale: ["hover", "active"],
      borderWidth: ["hover", "focus", "active"],
    },
    dropShadow: ["hover", "active"],
  },
  plugins: [],
};
