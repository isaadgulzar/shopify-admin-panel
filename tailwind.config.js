module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#008060",
        secondary: "#EDEEEF",
        "matte-black": "#202223",
        grey: {
          lightest: "#F1F2F3",
          lighter: "#777B7F",
          light: "#E4E5E7",
          DEFAULT:"#5C5F62",
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
