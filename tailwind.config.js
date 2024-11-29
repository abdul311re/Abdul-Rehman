/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:"#8E44AD",
        charcoal:"#34495E",
        red:'#C0392B',
        black:"#000000",
        white :'#FFFFFF',
        grey: '#F3F4F0'
      },
      margin: {
        '-50': '-50px',
      },
      fontSize: {
        '6.3xl': '4.2rem',      // Custom size of 5rem
        '7.5xl': '5.5rem',
        '1.3xl' : '1.3rem' // Custom size of 5.5rem
      },
      lineHeight: {
        'extra-loose': '10',
      },
    },
  },
  plugins: [],
}

