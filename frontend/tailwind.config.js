/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
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
        second: ["JetBrains Mono", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [],
};
