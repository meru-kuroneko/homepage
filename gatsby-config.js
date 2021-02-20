/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-theme-material-ui`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.CMS_API_KEY,
        serviceId: process.env.CMS_SERVICE_ID,
        apis: [{
          endpoint: 'art',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-7FSQ7FWD9P"
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
