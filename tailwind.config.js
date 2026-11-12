/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      tablet: "735px",
      wide: "834px",
      desktop: "1069px",
    },
    extend: {
      colors: {
        ink: "#1d1d1f",
        mist: "#f5f5f7",
        "apple-blue": "#0071e3",
        "apple-link": "#0066cc",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1024px",
        footer: "980px",
      },
    },
  },
  plugins: [],
};
