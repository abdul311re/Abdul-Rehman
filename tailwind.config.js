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
    },
  },
  plugins: [],
}

