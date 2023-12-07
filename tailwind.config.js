/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",
    },
    container: {
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.25rem",
        md: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/main.png')",
      },
    },
  },
  plugins: [],
};
