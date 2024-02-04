
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamilly: {
        'jost': ['Jost', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize:{
        'xs': '1.2rem',
        'ss': '1.5rem',
        'xss': '1.1rem',
        'mss':'0.9rem'
      },
      width:{
        99:'500px'
      },
      height:{
        70:'272px',
        72:'274px',
        120:'120vh',
        140:'140vh',
        160:'160vh',
        180:'180vh',
        200:'200vh'
      },
      minHeight:{
        70:'27vh',
        200:'200vh'
      }
    }
  },
  plugins: [],
}
