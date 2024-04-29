/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
      // Add new colors
      colors: {
          'custom-prafull': '#0ef',
          'custom-new': '#081b29',
          'custom-blue': '#344D67',
          'custom-lightblue':'#51d0de',
          'custom-lightpurple':' #bf4aa8',
          'custom-lightwrinkle':'#d9d9d9'
      },
  },
},
  plugins: [],
  
}


