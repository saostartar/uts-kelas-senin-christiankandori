/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:
      {
        'Poppins': ['"Poppins"', 'sans-serif'],
      },
      colors:
      {
        'bg1': '#120227',
        'bg2': '#1F0443',
        'primary': '#C93D8D',
        'secondary': '#DADADA4D',
        'green': '#22EE98',
        'red': '#FF1515',
      }, 
    },
  },
  plugins: [],
}
