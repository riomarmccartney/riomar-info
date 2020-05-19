module.exports = {
  theme: {
    fontFamily: {
      body: ['neue-haas-grotesk-text','Noto Sans JP','sans-serif'],
      serif: ['freight-display-pro', 'Times New Roman', 'serif'],
      display: ['neue-haas-grotesk-display','Noto Sans JP','sans-serif']
    },
    fontSize: {
      'xs': '.75rem',
      'tiny': '.875rem',
      'small': '.95rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    letterSpacing: {
      normal: "-0.008em",
      wide: "0.01em"
    },
    strokeWidth: {
      "1": "0.02rem"
    },
    fill: {
      "transparent": "theme(\"colors.transparent\")"
    },

    // tailwindcss-typography // Doc @ https://github.com/benface/tailwindcss-typography
    textIndent: { // defaults to {}
      '1': '0.25rem',
      '2': '0.5rem',
    },
    textShadow: { // defaults to {}
      'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
    },
    fontVariantCaps: { // defaults to these values
      'normal': 'normal',
      'small': 'small-caps',
      'all-small': 'all-small-caps',
      'petite': 'petite-caps',
      'unicase': 'unicase',
      'titling': 'titling-caps',
    },
    fontVariantNumeric: { // defaults to these values
      'normal': 'normal',
      'ordinal': 'ordinal',
      'slashed-zero': 'slashed-zero',
      'lining': 'lining-nums',
      'oldstyle': 'oldstyle-nums',
      'proportional': 'proportional-nums',
      'tabular': 'tabular-nums',
      'diagonal-fractions': 'diagonal-fractions',
      'stacked-fractions': 'stacked-fractions',
    },
    fontVariantLigatures: { // defaults to these values
      'normal': 'normal',
      'none': 'none',
      'common': 'common-ligatures',
      'no-common': 'no-common-ligatures',
      'discretionary': 'discretionary-ligatures',
      'no-discretionary': 'no-discretionary-ligatures',
      'historical': 'historical-ligatures',
      'no-historical': 'no-historical-ligatures',
      'contextual': 'contextual',
      'no-contextual': 'no-contextual',
    },
    textRendering: { // defaults to these values
      'rendering-auto': 'auto',
      'optimize-legibility': 'optimizeLegibility',
      'optimize-speed': 'optimizeSpeed',
      'geometric-precision': 'geometricPrecision'
    },
    extend: {
      spacing: {
        "3/4": "66.6666%",
        "4/3": "133.3333%",
        "full": "100%",
      },
      textStrokeWidth: {
        "1": "1px",
      },
    },
  },
  variants: {
    // tailwindcss-typography // Doc @ https://github.com/benface/tailwindcss-typography
    // all the following default to ['responsive']
    textIndent: ['responsive'],
    textShadow: ['responsive'],
    ellipsis: ['responsive'],
    hyphens: ['responsive'],
    kerning: ['responsive'],
    textUnset: ['responsive'],
    fontVariantCaps: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontVariantLigatures: ['responsive'],
    textRendering: ['responsive'],
  },
  plugins: [
    // tailwindcss-typography // Doc @ https://github.com/benface/tailwindcss-typography
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true,         // whether to generate ellipsis utilities
      hyphens: true,          // whether to generate hyphenation utilities
      kerning: true,          // whether to generate kerning utilities
      textUnset: true,        // whether to generate utilities to unset text properties
      componentPrefix: 'c-',  // the prefix to use for text style classes
    }),
    require('tailwindcss-text-fill-stroke')(),
  ],
}
