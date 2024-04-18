/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
        //External fonts
        fontFamily: {
            'McLaren' : ['McLaren', 'cursive'],
            'Montserrat' : ['Montserrat', 'sans-serif'],
        },
    
    
    extend: {},
  },
  plugins: [],
}