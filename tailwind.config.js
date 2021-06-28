module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        heroBg: 'url("/images/herobg.jpg")'
      },
      colors: {
        primary: '#2137fc'
      },
      fontFamily: {
        nunito :[ 'Nunito' ,'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
