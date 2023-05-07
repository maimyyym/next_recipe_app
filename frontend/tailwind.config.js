/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Noto sans JP"'],
      },
      colors: {
        vividRed: "#FF004D",
        lightGray: "#D9D9D9",
        darkGray: "#7A7A7A",

        transparent: {
          black: " rgba(30, 30, 30, 0.6)",
        },
      },
    },
  },
  plugins: [],
};
