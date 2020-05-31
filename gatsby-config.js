const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Riomar McCartney",
    titleTemplate: "%s － Riomar McCartney",
    description:"Co-Founder of upcoming.studio | Riomar McCartney is a British Japanese designer and visual artist based in Tokyo, Japan. His work combines expression, interaction, and engineering explored through product design, graphic design, and media arts.",
    url: "https://riomar.co",
    image: "/thumb.png",
    connect: [
      {
          type: "Mobile",
          userName: "+81 (0) 70 2665 2366",
          analytics: false,
          path: "tel:+8170-2665-2366",
          id: 1
      },
      {
          type: "Email",
          userName: "hey@riomar.co",
          analytics: false,
          path: "mailto:hey@riomar.co?subject=Question%20about%20your%20work%20/%20Quote%20request%20/%20Work%20proposal&body=Hi%20Riomar,%0D%0A%0D%0A",
          id: 2
      },
      {
          type: "Instagram",
          userName: "@riomarmccartney",
          analytics: true,
          path: "https://instagram.com/riomarmccartney",
          id: 3
      },
      {
          type: "Twitter",
          userName: "@riomarmccartney",
          analytics: true,
          path: "https://twitter.com/riomarmccartney",
          id: 4
      },
      {
          type: "Are.na",
          userName: "riomar-mccartney",
          analytics: true,
          path: "https://are.na/riomar-mccartney",
          id: 5
      },
      {
          type: "VSCO",
          userName: "riomarmccartney",
          analytics: true,
          path: "https://vs.co/riomarmccartney",
          id: 6
      }
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159819070-1",
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
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "asi7nmf"
        },
        google: {
          families: ["Noto Sans JP:400,700"]
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/assets/"
        }
      }
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/assets/favicon.png",
        background: "#fff",
        theme_color: "#fff",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ]
}
