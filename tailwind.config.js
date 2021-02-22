module.exports = {
  purge: ['./public/**/*.html/'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green:{
          primary: '#00FF00',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
