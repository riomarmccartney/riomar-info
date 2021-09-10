module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './utils/*.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      typeface: ['Inter', 'sans-serif'],
    },
    extend: {
      fontSize: {
        xxs: '0.5rem',
      },
      letterSpacing: {
        inter: '0.011em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
