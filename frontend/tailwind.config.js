/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0f172a",
      },
      textColor: {
        1: "#607B96",
      },
      maxWidth: {
        primary: "1240px",
      },
      fontFamily: {
        primary: ["Space Grotesk", "serif"],
        second: ["Fira Code", "serif"],
      },
    },
  },
  plugins: [],
};
