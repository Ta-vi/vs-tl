/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '96': '25rem',
      },
      top: {
        '68': '17rem',
      },
      fontFamily: {
        'sans': ['Public Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
