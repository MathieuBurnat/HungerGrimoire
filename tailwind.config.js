/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'orange': '#F1BA88',
      'yellow': '#E9F5BE',
      'light-green': '#81E7AF',
      'dark-green': '#03A791',
      'lighter-grey': '#E4E4E4',
      'light-grey': '#C7C7C7',
      'medium-grey': '#9F9F9F',
      'dark-grey': '#6E6E6E',
      'dark2-grey': '#717171',
      'transparent': 'transparent',
      'white': 'white',
      'black': 'black',
      'cream': '#e5ebda',  
    }
  },
  plugins: [],
}