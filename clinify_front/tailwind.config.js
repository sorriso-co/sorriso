/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // customPink: '#F5C2D0',
        // lightPink: '#f9e7e7',

        lightBlue: '#d1e7f5',
        lightPink: '#45ac8b', // doctor color
        darkPink: '#45ac8b', // doctor color
        shade: "#40E0D0",
        customPink: '#2196F3', // blue
        lightred: "#FC6F6F",
        tertiary: {
          dark: "#FF6464", // Hot Pink
          light: "#FFB6C1", // Light Pink
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        custom: ['CustomFontName', 'fallback-font', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
