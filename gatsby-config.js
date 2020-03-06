module.exports = {
  siteMetadata: {
    title: "Riomar McCartney",
    titleTemplate: "%s － Riomar McCartney",
    description:"Co-Founder of upcoming.studio | Riomar McCartney is a British Japanese designer and visual artist based in Tokyo, Japan. His work combines expression, interaction, and engineering explored through product design, graphic design, and media arts.",
    url: "https://riomar.co",
    image: "/thumb.png",
    social: {
      twitter: "riomarmccartney"
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-159819070-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        //anonymize: true,
        // Setting this parameter is also optional
        //respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "auto",
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'asi7nmf'
        },
        google: {
          families: ['Noto Sans JP:200,300,400,500,700']
        }
      }
    }
  ]
}