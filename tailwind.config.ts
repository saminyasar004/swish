import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "700px",
        "3xl": "1000px",
        "4xl": "1200px",
        "5xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#57B576",
        secondary: "#1a482a",
        liquidGreen: "#EEF8F1",
        darkGreen: "#57B576",
        accent: "#0c381b",
        accentDark: "#082c14",
        primaryDark: "#101F41",
        warning: "#ff523b",
        greyWhite: "#CFD2D9",
        solidWhite: "#FFFFFF",
        muteWhite: "#F9FAFB",
        greenSplash: "#CBECD6",
        blackPrimary: "#000000",
        blackSecondary: "#374151",
        error: "#f56565",

        // FOR COMPANY DASHBOARD
        providerPrimary: "#1D2534",
        providerSecondary: "#F4F4F4",
        providerBlackSecondary: "#262626",
        providerWhitePrimary: "#F8FAFC",
        providerWhiteSecondary: "#E5E5E5",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
