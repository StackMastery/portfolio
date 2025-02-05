/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0F172A",
      },
      textColor: {
        1: "#607B96",
      },
      fontFamily: {
        primary: ["JetBrains Mono", "serif"],
      },
    },
  },
  plugins: [],
};
