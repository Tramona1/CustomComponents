/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0057D9', // Royal Blue
        },
        black: '#000000',
        white: '#FFFFFF',
        lightGray: '#F5F5F5',
        darkGray: '#333333',
      },
    },
  },
  plugins: [],
}

