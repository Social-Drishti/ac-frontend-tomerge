/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: "#FAF6F0",
          100: "#E8DCC8",
          200: "#D4C4B0",
          300: "#B8977A",
          400: "#A87D5F",
          500: "#8B6F47",
          600: "#6B5437",
          700: "#3D2F1F",
        },
        sandstone: {
          light: "#E8DCC8",
          DEFAULT: "#C9B8A3",
          dark: "#B8977A",
        },
        bronze: {
          light: "#D4AF6A",
          DEFAULT: "#8B6F47",
          dark: "#6B5437",
        },
      },
      fontFamily: {
        serif: ["Yatra One", "serif"],
        sans: ["Yatra One", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "carved-pattern":
          'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><circle cx="20" cy="20" r="3" fill="%23A87D5F" opacity="0.3"/><circle cx="60" cy="40" r="2.5" fill="%238B6F47" opacity="0.25"/></svg>\')',
        "terracotta-gradient":
          "linear-gradient(135deg, #B8977A 0%, #A87D5F 100%)",
        "sandstone-gradient":
          "linear-gradient(135deg, #D4C4B0 0%, #B8977A 100%)",
      },
      boxShadow: {
        carved:
          "inset 2px 2px 5px rgba(255, 255, 255, 0.5), inset -2px -2px 5px rgba(139, 111, 71, 0.2)",
        terracotta: "0 4px 12px rgba(139, 111, 71, 0.25)",
      },
    },
  },
  plugins: [],
};
