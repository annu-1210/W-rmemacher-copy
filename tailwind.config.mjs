/** @type {import('tailwindcss').Config} */
module.exports ={
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
        Gilroy:["Gilroy"],
      },
      colors: {
        primary: " rgba(255, 255, 255, 1)",
        secondary: "rgba(29, 29, 27, 1) ",
        tertiary: "rgba(233, 78, 27, 1)",
        quaternary: "rgba(255, 239, 211, 1)",
        quinary: "rgba(255, 255, 255, 0.02)",
      },
      backgroundImage:{
        // "custom-gradient":"linear-gradient(0deg, #E94E1B, #E94E1B)",
        "custom-gradient":"linear-gradient(101.49deg, #E94E1B 0.92%, #FDC801 96.93%)",
      },
    },
  },
  plugins: [],
};
