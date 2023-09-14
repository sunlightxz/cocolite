/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "bgmain" :"#82CAC9",
        "about": "#2C6F56",
        "lite": "#F1D993",
        "white-lite": "#FDFAEF",
        "caramel": "#EAA032",
        "main":"#CFF4F4",
        "secondary":"#3B242A",
        "green": "#31994E"
      }
      ,
      fontFamily : {
        popping : ['Poppins', 'sans-serif'] ,
      }
    },
  },
  plugins: [],
}

