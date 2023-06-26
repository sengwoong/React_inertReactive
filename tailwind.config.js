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
        move: "move 3s forwards",
        moveAfter: "move 3s forwards",

      },
      animation: {
        move: "move 3s forwards",
        moveAfter: "moveAfter 3s forwards",
      },
      keyframes: {
        move: {
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
            width: "103%",
          },
          "100%": {
            transform: "translateX(0)",
            width: "0%",
          },
        },
      },
      

    



    },
  },
  plugins: [],
}
