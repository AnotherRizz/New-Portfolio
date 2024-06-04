/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','script.js'],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding:'16px'
      
    },
    
    extend: {
      screens:{
        'xl':'1140px',
      },
      colors:{
        primary :'#000000',
        text1 :'#FCDC2A',

      },
      backgroundImage: {
        'btn-gradient': '  linear-gradient(to right, #5c258d, #4389a2)',
       
      },
      fontFamily:{
        'poppin' :[ 'Poppins', 'sans-serif']
      },
     
    },
  },
  plugins: [],
}