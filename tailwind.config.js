module.exports = {
  theme: {
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Acumin Pro', 'sans-serif']
    }
  },
  plugins: [
    require('tailwindcss-grid')({
      grids: [2, 4, 6, 10, 12],
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
        '4-x': '1rem',
        '4-y': '1rem',
      },
      autoMinWidths: {
        '16': '4rem',
        '24': '6rem',
        '300px': '300px',
      },
      variants: ['responsive'],
    }),
  ],
}
