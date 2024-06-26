// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       colors: {
//         primary: "#F8F8F8",
//         secondary: "#757BFD",
//         secondaryDark: "#23008E",
//         lightred: "#FC6F6F",
//         tertiary: {
//           dark: "#FF6464", // Hot Pink
//           light: "#FFB6C1", // Light Pink
//         },
//       },
//       // fontFamily: {
//       //   ubuntu: ["var(--font-ubuntu)", ...fontFamily.sans],
//       // },
//     },
//   },
//   plugins: [],
// };
// export default config;
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
    },
  },
  plugins: [],
};
export default config;
