module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./pages/product/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
    "./src/pages/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2.5xl": "1.5625rem",
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
      },
      width: {
        7.5: "1.875rem",
        10.5: "2.625rem",
        13: "3.25rem",
        14.5: "3.5625rem",
        17: "4.3rem",
        19: "4.5rem",
        22: "5.5rem",
        23: "5.8125rem",
        29: "7.5rem",
        38: "9.4rem",
        42: "10.75rem",
        50: "12.5rem",
        51: "12.875rem",
        58: "14.5rem",
        59: "14.82rem",
        66: "16.32rem",
        67: "16.875rem",
        68: "18rem",
        73: "18.4rem",
        79: "19rem",
        79.5: "19.375rem",
        81: "20.25rem",
        82: "20.5rem",
        84: "21.5rem",
        86: "22.3rem",
        88: "23.25rem",
        98: "25.7rem",
      },
      height: {
        7.5: "1.875rem",
        10.5: "2.625rem",
        19: "4.5rem",
        19.5: "4.6875rem",
        22: "5.5rem",
        23: "5.8125rem",
        25: "6.25rem",
        29: "7.5rem",
        39: "9.5rem",
        39.5: "9.75rem",
        42: "10.625rem",
        43: "10.875rem",
        46: "11.25rem",
        50: "12.5rem",
        67: "16.875rem",
        68: "17rem",
        74: "19rem",
        76: "19.5rem",
        81: "20.5rem",
        91: "22.3125rem",
        92: "23rem",
        98: "25.5rem",
        100: "27rem",
      },
      maxHeight: {
        100: "27rem",
      },
      inset: {
        15: "3.65rem",
        22: "5.7rem",
        30: "7.625rem",
        84: "22rem",
      },
      padding: {
        7.5: "1.875rem",
        13: "3.125rem",
        18: "4.5rem",
        21: "5.5rem",
        27: "6.875rem",
        30: "7.5rem",
        46: "11.5rem",
      },
      colors: {
        "home-color": "#4737FF",
        "admin-color": "#1C2039",
        "admin-secondary-color": "#262B49",
      },
      lineHeight: {
        4.5: "1.125rem",
        12: "3.125rem",
      },
      margin: {
        7.5: "1.875rem",
        15.5: "3.875rem",
        18: "4.5rem",
        21: "5.375rem",
        25: "6.125rem",
        29: "7.25rem",
        30: "7.5rem",
        50: "12.7rem",
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2lg": "1160px",
      "3lg": "1280px",
      xl: "1366px",
      "2xl": "100rem",
    },
  },
  plugins: [],
}