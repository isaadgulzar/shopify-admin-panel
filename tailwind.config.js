module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": "#EBEBEB",
        purple: "#904584",
        thunder: "#2F3030",
        orange: "#E46000",
        "orange-light": "#FFC107",
        "red-bean": "#DC3545",
        grey: {
          lighter: "#FBFBFB",
          light: "#F8F8F8",
          dark: "#AAB2B5",
          "01": "#A7A7A7",
          "02": "#525252",
          "03": "#D6D6D6",
          "04": "#98A4B5",
          "05": "#5B5B5B",
          "06": "#EEEEEE",
          "07": "#6D6D6D",
          "08": "#E8E8E8",
          "09": "#7C8083",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        tiny: "10px",
        "1.5xl": [
          "22px",
          {
            lineHeight: "30px",
          },
        ],
        "2.5xl": [
          "31px",
          {
            letterSpacing: "0.005em",
          },
        ],
        "4.5xl": [
          "42px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "53px",
          },
        ],
      },
      spacing: {
        22: "5.188rem",
        15: "3.75rem",
        17: "4.25rem",
        70: "16.875rem",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      boxShadow: {
        black: "0px 2px 2px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active"],
    },
  },
  plugins: [],
}
