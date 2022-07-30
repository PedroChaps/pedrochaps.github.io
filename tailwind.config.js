/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#252525',    // '#FFE6E6' 171717 EEEBDD 252525
        secondary: '#3D0000',  // FF2626 444444 CE1212 FF0000
        terciary: '#950101',   // BD1616 DA0037 810000 AF0404
        quaternary: '#950101'  // 000000 EDEDED 1B1717 414141
        
        // https://colorhunt.co/palettes/red https://colorhunt.co/palette/0000003d0000950101ff0000 https://colorhunt.co/palette/ffe6e6ff2626bd1616000000 https://colorhunt.co/palette/171717444444da0037ededed https://colorhunt.co/palette/eeebddce12128100001b1717 https://colorhunt.co/palette/252525ff0000af0404414141
      }
    },
  },
  plugins: [
    // plugin(function ({ addComponents, theme }) {
    //   addComponents({
    //     '.sexyButton': {
    //       backgroundColor: #444;
    //       // backgroundColor: theme(colors.white),
    //       // borderRadius: theme(borderRadius.lg),
    //       // boxShadow: theme(boxShadow.xl),
    //     }
    //   })
    // }) 
  ],
}
