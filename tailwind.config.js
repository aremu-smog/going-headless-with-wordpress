module.exports = {
  purge: ["./src/**/*.js"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      //Custom Font Family
      fontFamily: {
        redhat: "RedHat",
      },

      //Colors
      colors: {
        "wb-blue": "#232664",
        "wb-lime": "#D6DE23",
      },

      //Minimum Height
      minHeight: {
        "post-preview": "209px",
      },

      //Font Size
      fontSize: {
        zero: "0px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
