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
      
        'sky1': "url('/images2/motion_sky1.gif')",
        'sky2': "url('/images2/motion_sky2.gif')",
        'sky3': "url('/images2/motion_sky3.gif')",
        'sky4': "url('/images2/motion_sky4.gif')",
      },
    },
  },
  plugins: [],
}
