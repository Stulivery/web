const { primarycolor, primarycolortwo } = require('./src/components/color');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      border: {
        '1': '2px',
      },
      height:{
        '105':'450px',
        '128':'512px',
        '256':'612px'
      },
      width:{
        '105':'450px',
        '128':'512px',
        '256':'612px'
      },
      
      backgroundImage: {

        'primarybackground':"url('/src/images/backgroundtwomap.png')",
        'primarybackgroundtwo':"url('/src/images/backgroundtwo.png')",
        'iconbg':"url('/src/images/iconbg.png')",
        'iconbgyellow':"url('/src/images/iconbgyellow.png')"
      },
      backgroundColor: {
        'primaryColor':"#FFC107",
        'secondaryColor':"#073945"
      },
      textColor:{
        'primaryColor':"#FFC107",
        'secondaryColor':"#073945"
      
      },
      borderColor:{
         'primaryColor':"#FFC107",
        'secondaryColor':"#073945"
      },
 
    },
  },
  plugins: [],
}
