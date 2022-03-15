module.exports = {
  content: ['./public/*.html'],
  theme: {  
    extend: {
      colors: {
        primary: '#ff7200',
        secondary: '#212121',
        accent: '#c6c6c6',
        offwhite: '#fffbf7',
        darkgrey: '#9c9a9b',
        lightgrey: '#ababac',
        navyblue: '#16232d',
        footer: '#91D4C7',
        logo: '#2d7668'
      },

      backgroundImage: {
        pcimg: 'url(/images/desktop/image-header.jpg)',
      },
     
      fontFamily:{
        sans: ['Abril Fatface'],
        barlow: ['Barlow, sans-serif'],
        fraunces: ['Fraunces, serif'],
      },   
      
      spacing:{
        '75vh':'75vh',
        '128': '32rem',
        '3/10': '30%',
        '7/10': '70%',
      },

    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}