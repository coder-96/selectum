/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {

    screens: {
      sm: {'min': '0px', 'max': '450px'},
      md: '768px',
      lg: '1280px',
      xl: '1440px',
    },

    extend: {

      colors: {
        'c1': '#FF2E63',
        'c2': '#08D9D6',
        'c3': '#252A34',
        'c4': '#EAEAEA',
        
        'c5': '#DDE6ED',
        'c6': '#9DB2BF',
        'c7': '#526D82',
        'c8': '#27374D',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        
      },

    },
    
  },
  plugins: [],
}

