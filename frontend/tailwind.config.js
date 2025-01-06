module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: "#7300FF",
        "dark-bg": "#1A0B28",
        glass: "rgba(230, 215, 228, 0.2)",
        "electric-violet": {
          50: "#f4f0ff",
          100: "#ece4ff",
          200: "#dacdff",
          300: "#c0a6ff",
          400: "#a473ff",
          500: "#8a3bff",
          600: "#8014ff",
          700: "#7300ff",
          800: "#6101d6",
          900: "#5103af",
          950: "#300077",
        },
      },
    },
  },
  plugins: [],
};


