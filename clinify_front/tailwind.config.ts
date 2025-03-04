import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8F8F8",
        secondary: "#757BFD",
        secondaryDark: "#23008E",
        lightred: "#FC6F6F",
        tertiary: {
          dark: "#FF6464", // Hot Pink
          light: "#FFB6C1", // Light Pink
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out infinite", // Remove delay
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-3px)" },
          "40%": { transform: "translateX(3px)" },
          "60%": { transform: "translateX(-3px)" },
          "80%": { transform: "translateX(3px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
