/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        '6000': '6000px',
      },
      backgroundImage: {
      
       
      },
      minWidth:{
        "min-350px": "350px"
      },



      animation: {
        moveX: "moveX 4s forwards",
       
        moveAfter: "moveAfter 4s forwards",
        moveAfterTop: "moveAfterTop 4s forwards",
      },
      keyframes: {
    
        moveX: {
          "0%": {
            transform: "translateX(-60px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        moveAfter: {
          "0%": {
            transform: "translateX(-60px)",
            width: "100%",
          },
          "100%": {
            width: "0%",
            transform: "translateX(0)",
          },
        },
        moveAfterTop: {
          "0%": {
    
            height: "100%",
          },
          "100%": {
            height: "0%",
          },
        },
      },
      
      

    



    },
  },
  plugins: [],
}
