module.exports = {
  siteMetadata: {
    title: "Riomar Mccartney",
    titleTemplate: "%s － Riomar Mccartney",
    description:"",
    url: "https://riomar.co",
    image: "/progressive.jpg",
    social: {
      twitter: "riomarmccartney"
    },
  },
  plugins: [
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
          id: 'apn5hmw'
        }
      }
    },
  ]
}