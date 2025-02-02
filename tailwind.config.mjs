/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MontserratLight: ["MontserratLight"],
        MontserratRegular: ["MontserratRegular"],
        MontserratMedium: ["MontserratMedium"],
        MontserratSemibold: ["MontserratSemibold"],
        MontserratBold: ["MontserratBold"],
        MontserratExtrabold: ["MontserratExtrabold"],
        MontserratBlack: ["MontserratBlack"],
        PpEditorialRegular: ["PpEditorialRegular"],
        Gilroy: ["Gilroy"],
      },
      colors: {
        primary: " rgba(255, 255, 255, 1)",
        secondary: "rgba(29, 29, 27, 1) ",
        tertiary: "rgba(233, 78, 27, 1)",
        quaternary: "rgba(255, 239, 211, 1)",
        quinary: "rgba(255, 255, 255, 0.02)",
        borderColor: "rgba(42, 36, 36, 0.6)",
        dropdownBg: "rgba(240, 240, 240, 1)",
        neutral: "rgba(178, 178, 178, 1)",
        background: "rgba(29, 29, 27, 0.86)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(101.49deg, #E94E1B 0.92%, #FDC801 96.93%)",
        "custom-gradient2":
          "linear-gradient(269.67deg, rgba(29, 29, 27, 0) -0.85%, rgba(29, 29, 27, 0.516785) 47.2%, #1D1D1B 100.71%)",
        "gif-bg": "url('/images/gif-poster.jpeg')",
        "hero-bg":"url('/images/w-1.png')",
      },
      screens: {
        xsm: "425px",
        "2xl": "1327px",
        "3xl": "1440px",
        "4xl": "1536px",
      },
    },
  },
  plugins: [],
};
