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
    },
  },
  plugins: [],
}
