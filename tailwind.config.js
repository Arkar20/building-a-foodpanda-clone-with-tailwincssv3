module.exports = {
  content: ["./page/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        pandapink: "#d70f64",
      },
      fontFamily: {
        open: ["Open Sans"],
      },
      aspectRatio: {
        "3/4":"3/4",
        "16/9": "16 / 9",
        "9/16": "9/16",
      },
    },
  },
  plugins: [],
};
