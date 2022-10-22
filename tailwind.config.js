/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    screens: {


      //'sm': [{ 'max': '480px' }],
      //'md': [{ 'min': '481px', 'max': '768px' }],
      //'xmd': [{ 'min': '769px', 'max': '1023px' }],
      //'lg': [{ 'min': '1024px' }],      

      'xsm': [{ 'min': '100px', 'max': '365px' }],
      'sm': [{ 'min': '366px', 'max': '426px' }],
      'md': [{ 'min': '427px', 'max': '834px' }],
      'xmd': [{ 'min': '835px', 'max': '1099px' }],
      'lg': [{ 'min': '1100px', 'max': '1399px' }],
      'xl': '1400px',


    },
    extend: {
      colors: {
        'scrollBlue': '#114653',
        'scrollGray': '#F6F6F4',
      },
    },
  },
  plugins: [],
}
