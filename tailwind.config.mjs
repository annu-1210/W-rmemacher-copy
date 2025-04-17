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
        tertiaryRed: "rgba(191, 47, 0, 1)",
        quaternary: "rgba(255, 239, 211, 1)",
        quinary: "rgba(255, 255, 255, 0.02)",
        borderColor: "rgba(42, 36, 36, 0.6)",
        dropdownBg: "rgba(240, 240, 240, 1)",
        neutral: "rgba(178, 178, 178, 1)",
        ironGray: "rgb(95, 94, 94)",
        background: "rgba(29, 29, 27, 0.86)",
        glassWhite: "rgba(255, 255, 255, 0.4)",
        glassLight: "rgba(255, 255, 255, 0.04)",
        glassMedium: "rgba(255, 255, 255, 0.2)",
        bodyBg: "rgba(242, 246, 249, 1)",
        mutedCharcoal: "rgba(29, 29, 27, 0.2)",
        charcoalGray: "rgba(29, 29, 27, 0.3)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(101.49deg, #E94E1B 0.92%, #FDC801 96.93%)",
        "custom-gradient2":
          "linear-gradient(269.67deg, rgba(29, 29, 27, 0) -0.85%, rgba(29, 29, 27, 0.516785) 47.2%, #1D1D1B 100.71%)",
        "custom-gradient3":
          "linear-gradient(284.9deg, rgba(29, 29, 27, 0) 24.78%, rgba(29, 29, 27, 0.6) 89.59%)",
        "gif-bg": "url('/images/gif-poster.jpeg')",
        "custom-gradient4":
          "linear-gradient(106.11deg, #E94E1B 0.6%, #FFFFFF 54.16%, #FDC801 98.88%)",
        "custom-gradient5":
          "background: linear-gradient(0deg, #FFFFFF, #FFFFFF)",
        "custom-gradient6":
          " linear-gradient(180deg, #E94E1B 0%, #FDC801 100%)",

        "hero-bg": "url('/images/w-1.png')",
        "aboutHero-bg": "url('/images/w-6.png')",
      },
      screens: {
        xxsm: "375px",
        xsm: "425px",
        "2xl": "1327px",
        "3xl": "1440px",
        "4xl": "1536px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeInRotate: {
          "0%": {
            opacity: "0",
            transform: "translateX(20px) rotate(-3deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) rotate(0)",
          },
        },
        flipIn: {
          "0%": { 
            opacity: "0",
            transform: "rotateX(-20deg) scale(0.95)"
          },
          "100%": {
            opacity: "1",
            transform: "rotateX(0) scale(1)"
          }
        },
        zoomSlide: {
          "0%": {
            opacity: "0",
            transform: "scale(1.1) translateX(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateX(0)"
          }
        },
        bounceIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.3)"
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.1)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        smoothSlide: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        revealUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.98)"
          },
          "60%": {
            opacity: "0.5",
            transform: "translateY(-2px) scale(1.01)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)"
          }
        },
        swingIn: {
          "0%": {
            opacity: "0",
            transform: "rotateY(-70deg) translateZ(60px)"
          },
          "100%": {
            opacity: "1",
            transform: "rotateY(0) translateZ(0)"
          }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
        scaleIn: "scaleIn 0.5s ease-out",
        fadeInRotate: "fadeInRotate 0.5s ease-in-out",
        flipIn: "flipIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        zoomSlide: "zoomSlide 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        bounceIn: "bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        smoothSlide: "smoothSlide 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        revealUp: "revealUp 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        swingIn: "swingIn 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
      },
    },
  },
  plugins: [],
};
